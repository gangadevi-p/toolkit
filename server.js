/* Serves the site and stores the saved items. One user, signed in with a username and password.
   Env: APP_USER, APP_PASSWORD, SESSION_SECRET (long random string).
   DATABASE_URL set  -> Postgres (Railway).  Not set -> data/saved.json (local dev). */
const express = require("express");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = process.env.PORT || 4321;
const USER = process.env.APP_USER || "";
const PASSWORD = process.env.APP_PASSWORD || "";
const SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex");
const SESSION_MS = 30 * 24 * 60 * 60 * 1000;
const EMPTY = { items: [], categories: [] };

function createStore() {
  if (process.env.DATABASE_URL) {
    const { Pool } = require("pg");
    const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.PGSSL === "off" ? false : { rejectUnauthorized: false } });
    return {
      async init() {
        await pool.query("CREATE TABLE IF NOT EXISTS saved_state (id int PRIMARY KEY, rev int NOT NULL, data jsonb NOT NULL, updated_at timestamptz NOT NULL DEFAULT now())");
        await pool.query("INSERT INTO saved_state (id, rev, data) VALUES (1, 0, $1) ON CONFLICT DO NOTHING", [EMPTY]);
      },
      async read() {
        const { rows } = await pool.query("SELECT rev, data FROM saved_state WHERE id = 1");
        return { rev: rows[0].rev, data: rows[0].data };
      },
      /* Writes only if the caller saw the current revision; returns the new rev, or null on a conflict. */
      async write(rev, data) {
        const { rows } = await pool.query("UPDATE saved_state SET rev = rev + 1, data = $2, updated_at = now() WHERE id = 1 AND rev = $1 RETURNING rev", [rev, data]);
        return rows.length ? rows[0].rev : null;
      }
    };
  }
  const file = path.join(__dirname, "data", "saved.json");
  return {
    async init() { fs.mkdirSync(path.dirname(file), { recursive: true }); },
    async read() {
      try { return JSON.parse(fs.readFileSync(file, "utf8")); } catch (err) { return { rev: 0, data: EMPTY }; }
    },
    async write(rev, data) {
      const cur = await this.read();
      if (cur.rev !== rev) return null;
      fs.writeFileSync(file, JSON.stringify({ rev: rev + 1, data: data }));
      return rev + 1;
    }
  };
}

/* Compares through a hash so length and content differences take the same time. */
function same(a, b) {
  const h = (v) => crypto.createHash("sha256").update(String(v)).digest();
  return crypto.timingSafeEqual(h(a), h(b));
}

function sign(payload) { return crypto.createHmac("sha256", SECRET).update(payload).digest("base64url"); }

function issueSession() {
  const payload = String(Date.now() + SESSION_MS);
  return payload + "." + sign(payload);
}

function authorized(req) {
  const [payload, sig] = (req.get("authorization") || "").replace(/^Bearer /, "").split(".");
  if (!payload || !sig || !same(sig, sign(payload))) return false;
  return Number(payload) > Date.now();
}

/* Failed sign-ins per address: 5 in 15 minutes, then locked out until the window passes. */
const failures = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILURES = 5;
function locked(ip) {
  const f = failures.get(ip);
  if (!f) return false;
  if (Date.now() - f.first > WINDOW_MS) { failures.delete(ip); return false; }
  return f.count >= MAX_FAILURES;
}
function recordFailure(ip) {
  const f = failures.get(ip);
  if (!f || Date.now() - f.first > WINDOW_MS) failures.set(ip, { count: 1, first: Date.now() });
  else f.count++;
}

/* Shape check: keep only what the app uses, so a bad client can't store arbitrary data. */
function clean(body) {
  if (!body || !Array.isArray(body.items) || !Array.isArray(body.categories)) return null;
  const text = (v, max) => String(v == null ? "" : v).slice(0, max);
  const items = [];
  for (const it of body.items.slice(0, 5000)) {
    if (!it || typeof it.id !== "string" || typeof it.title !== "string" || typeof it.category !== "string" || !it.category) return null;
    items.push({
      id: text(it.id, 64), title: text(it.title, 500), category: text(it.category, 100), note: text(it.note, 5000),
      savedAt: text(it.savedAt, 40),
      links: (Array.isArray(it.links) ? it.links : []).filter((l) => typeof l === "string" && /^https?:\/\//i.test(l)).map((l) => l.slice(0, 2000)).slice(0, 100)
    });
  }
  const categories = body.categories.filter((c) => typeof c === "string" && c.trim()).map((c) => c.slice(0, 100)).slice(0, 200);
  return { items, categories };
}

const store = createStore();
const app = express();
app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use((req, res, next) => { res.set("X-Content-Type-Options", "nosniff"); next(); });

app.get("/healthz", (req, res) => res.send("ok"));

app.post("/auth/login", express.json({ limit: "2kb" }), (req, res) => {
  if (locked(req.ip)) return res.status(429).json({ error: "Too many attempts. Try again in 15 minutes." });
  const b = req.body || {};
  /* Check both fields every time so a wrong username and a wrong password look the same. */
  const ok = USER !== "" && PASSWORD !== "" && same(b.username, USER) & same(b.password, PASSWORD);
  if (!ok) {
    recordFailure(req.ip);
    return setTimeout(() => res.status(401).json({ error: "Wrong username or password." }), 400);
  }
  failures.delete(req.ip);
  res.json({ token: issueSession() });
});

app.use("/api", (req, res, next) => (authorized(req) ? next() : res.status(401).json({ error: "unauthorized" })));
app.get("/api/saved", async (req, res, next) => {
  try { const s = await store.read(); res.json({ rev: s.rev, items: s.data.items, categories: s.data.categories }); } catch (e) { next(e); }
});
app.put("/api/saved", express.json({ limit: "2mb" }), async (req, res, next) => {
  try {
    const data = clean(req.body);
    if (!data || !Number.isInteger(req.body.rev)) return res.status(400).json({ error: "bad request" });
    const rev = await store.write(req.body.rev, data);
    if (rev === null) return res.status(409).json({ error: "conflict" });
    res.json({ rev });
  } catch (e) { next(e); }
});

/* Static files: only the site itself, never server.js, data/ or .git. */
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "js")));
for (const icon of ["favicon.svg", "favicon-32.png", "apple-touch-icon.png"]) {
  app.get("/" + icon, (req, res) => res.sendFile(path.join(__dirname, icon)));
}
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.use((err, req, res, next) => { console.error(err); res.status(500).json({ error: "server error" }); });

store.init().then(() => app.listen(PORT, () => console.log("Toolkit on :" + PORT + (USER && PASSWORD ? "" : " (APP_USER / APP_PASSWORD not set: sign-in is disabled)"))));
