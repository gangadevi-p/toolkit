/* ============================================================
   Design System — Documentation app
   Renders every page from js/data.js and handles navigation,
   appearance, search and the interactive demos.
   ============================================================ */
(function () {
  "use strict";

  var D = window.DESIGN_SYSTEM;
  var I = D.ICONS;
  var $ = function (id) { return document.getElementById(id); };

  var current = "typography";
  var platform = "web";
  var colorVariableMode = "light";
  var variableFilter = "all";
  var colorFilter = "all";
  var typographyFilter = "all";
  var searchInput = null;

  /* ================= HELPERS ================= */
  function group(title, meta, desc, content) {
    return '<section class="group">' +
      '<header class="group-header">' +
        '<div class="group-head"><h2 class="group-title">' + title + '</h2></div>' +
      '</header>' + content + '</section>';
  }

  function key(parts) { return parts.join(" ").toLowerCase().replace(/"/g, ""); }

  function num(n) { return String(Math.round(n * 100) / 100); }

  /* Distance to keep clear above scroll targets: only the mobile menu bar is sticky. */
  function scrollOffset() {
    var bar = document.querySelector(".topbar");
    return bar && bar.offsetHeight ? bar.offsetHeight + 16 : 24;
  }

  /* After a filter changes, keep the reader oriented. Leave the page where it is when the filter bar is
     comfortably on screen; only if it was left out of view, bring the page title and the bar back together. */
  function revealFilters(selector) {
    var bar = document.querySelector(selector);
    if (!bar) return;
    var top = bar.getBoundingClientRect().top;
    if (top >= scrollOffset() && top <= window.innerHeight * 0.6) return;
    var head = bar.closest(".page").querySelector(".page-head");
    window.scrollTo({ top: head.getBoundingClientRect().top + window.scrollY - scrollOffset(), behavior: "smooth" });
  }

  /* One filter control for every page: a single segmented bar. Pages keep their own hook class and data attribute. */
  function filterBar(hook, label, attr, items, selected) {
    return '<nav class="filter-bar ' + hook + '" aria-label="' + label + '">' + items.map(function (item) {
      return '<button type="button" ' + attr + '="' + item.id + '" aria-pressed="' + (item.id === selected) + '">' + item.name + '</button>';
    }).join("") + '</nav>';
  }

  /* Pages made of several groups get the same bar: each family is one or more groups behind one button. */
  var pageFilters = {};

  function familyPage(page, label, families) {
    var selected = pageFilters[page] || "all";
    $("body-" + page).innerHTML = filterBar("page-filters", label, "data-page-filter",
      [{ id: "all", name: "All" }].concat(families), selected) +
      families.map(function (family) {
        return '<div class="page-family" data-page-family="' + family.id + '">' + family.content + '</div>';
      }).join("");
    applyPageFilter($("page-" + page));
  }

  function applyPageFilter(page) {
    var selected = pageFilters[page.id] || "all";
    page.querySelectorAll("[data-page-filter]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-page-filter") === selected ? "true" : "false");
    });
    page.querySelectorAll("[data-page-family]").forEach(function (family) {
      family.hidden = selected !== "all" && family.getAttribute("data-page-family") !== selected;
    });
    page.querySelectorAll("[data-tags]").forEach(function (card) {
      var out = selected !== "all" && card.getAttribute("data-tags").split(" ").indexOf(selected) === -1;
      card.classList.toggle("is-filtered-out", out);
    });
  }

  function setNavOpen(open) {
    document.documentElement.classList.toggle("is-nav-open", open);
    $("menu-trigger").setAttribute("aria-expanded", open ? "true" : "false");
  }

  function specChips(list) {
    return '<ul class="spec-chips">' + list.map(function (s) {
      return '<li><span>' + s[0] + '</span>' + s[1] + '</li>';
    }).join("") + '</ul>';
  }

  /* ---------- colour maths ---------- */
  var VAR = {};
  D.COLOR_VARIABLES.forEach(function (v) { VAR[v.name] = v; });

  function parseColor(str) {
    str = str.trim();
    if (str.charAt(0) === "#") {
      var h = str.slice(1);
      return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: 1 };
    }
    var p = str.replace(/rgba?\(|\)/g, "").split(",").map(parseFloat);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  }

  function blend(fg, bg) {
    return { r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 };
  }

  function luminance(c) {
    var ch = [c.r, c.g, c.b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
  }

  function contrast(a, b) {
    var l1 = luminance(a), l2 = luminance(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }

  function resolve(name, mode, over) {
    var c = parseColor(VAR[name][mode][1]);
    return c.a < 1 ? blend(c, resolve(over || "bg/surface", mode)) : c;
  }

  function grade(ratio) {
    var cls = ratio >= 4.5 ? "pass" : ratio >= 3 ? "large" : "fail";
    var label = ratio >= 4.5 ? "AA" : ratio >= 3 ? "AA large" : "Fail";
    return '<span class="grade"><span class="tnum">' + ratio.toFixed(1) + ':1</span>' +
      '<span class="grade-badge grade-badge--' + cls + '">' + label + '</span></span>';
  }

  function textOn(hex) {
    var c = parseColor(hex);
    var onWhite = contrast(c, parseColor("#FFFFFF"));
    var onDark = contrast(c, parseColor("#000000"));
    return onWhite >= onDark ? { color: "#FFFFFF", ratio: onWhite } : { color: "#000000", ratio: onDark };
  }

  /* ================= SHELL ================= */
  function renderNav() {
    var groups = [];
    D.SECTIONS.forEach(function (s) {
      var g = groups.filter(function (x) { return x.name === s.group; })[0];
      if (!g) { g = { name: s.group, items: [] }; groups.push(g); }
      g.items.push(s);
    });
    $("nav").innerHTML = groups.map(function (g) {
      return '<div class="nav-group"><span class="nav-label">' + g.name + '</span>' +
        g.items.map(function (s) {
          return '<button class="nav-link" type="button" data-section="' + s.id + '">' +
            '<span>' + s.name + '</span>' +
            (s.id === "saved" ? '<span class="nav-link-count" id="saved-count"></span>' : "") + '</button>';
        }).join("") + '</div>';
    }).join("");
  }

  function renderPages() {
    $("pages").innerHTML = D.SECTIONS.map(function (s) {
      return '<section class="page" id="page-' + s.id + '" hidden>' +
        '<header class="page-head">' +
          '<h1 class="page-title">' + s.name + '</h1>' +
          '<p class="page-intro">' + s.intro + '</p>' +
        '</header>' +
        '<div id="body-' + s.id + '"></div>' +
        '<p class="empty" hidden>Nothing on this page matches your search.</p>' +
      '</section>';
    }).join("");
  }

  function applyFilter() {
    var page = $("page-" + current);
    var q = searchInput ? searchInput.value.trim().toLowerCase() : "";
    var total = 0, shown = 0;
    page.querySelectorAll(".group").forEach(function (g) {
      if (g.classList.contains("is-filtered-out")) return;
      var items = g.querySelectorAll("[data-name]");
      if (!items.length) return;
      var any = false;
      items.forEach(function (item) {
        if (item.classList.contains("is-filtered-out")) return;
        total++;
        var match = !q || item.getAttribute("data-name").indexOf(q) !== -1;
        item.hidden = !match;
        if (match) { any = true; shown++; }
      });
      g.hidden = !any;
    });
    page.querySelector(".empty").hidden = shown !== 0 || total === 0;
  }

  function show(id) {
    if (!$("page-" + id)) { id = "typography"; }
    current = id;
    D.SECTIONS.forEach(function (s) { $("page-" + s.id).hidden = s.id !== id; });
    document.querySelectorAll(".nav-link").forEach(function (l) {
      if (l.getAttribute("data-section") === id) { l.setAttribute("aria-current", "page"); }
      else { l.removeAttribute("aria-current"); }
    });
    var name = D.SECTIONS.filter(function (s) { return s.id === id; })[0].name;
    $("menubar-page").textContent = name;
    document.title = name + " · Toolkit";
    if (location.hash !== "#" + id) { history.replaceState(null, "", "#" + id); }
    try { localStorage.setItem("designSystemSection", id); } catch (err) {}
    applyFilter();
  }

  /* ================= TYPOGRAPHY ================= */
  function weightName(w) {
    return D.TYPEFACE.weights.filter(function (x) { return x.value === w; })[0].name;
  }

  function trackingLabel(t) {
    if (!t) return "0%";
    return (t > 0 ? "+" : "−") + Math.abs(t) + "%";
  }

  function styleCss(s, p) {
    return "font-size:" + s[p][0] + "px;line-height:" + s[p][1] + "px;font-weight:" + s.weight + ";" +
      "letter-spacing:" + (s.tracking / 100) + "em;" + (s.upper ? "text-transform:uppercase;" : "");
  }

  function styleSpec(s, p) {
    return s[p][0] + " / " + s[p][1] + " · " + weightName(s.weight) + " · " + trackingLabel(s.tracking);
  }

  function renderTypography() {
    var tf = D.TYPEFACE;
    var P = D.PLATFORMS[platform];

    var typefaceGroup = group("Typeface", "1 family", null,
      '<article class="card typeface" data-name="typeface poppins font family weights characters">' +
        '<div class="typeface-specimen" aria-hidden="true">Aa</div>' +
        '<div class="typeface-info">' +
          '<h3 class="typeface-name">' + tf.name + '</h3>' +
          '<p class="doc-text doc-text--shown">One family for headings, body, labels and numbers. Four weights cover every style.</p>' +
          '<div class="weights">' + tf.weights.map(function (w) {
            return '<div class="weight"><span class="weight-sample" style="font-weight:' + w.value + '">Aa</span>' +
              '<span class="weight-name">' + w.name + ' · ' + w.value + '</span></div>';
          }).join("") + '</div>' +
        '</div>' +
      '</article>');

    var cards = '<div class="type-grid">' + D.TYPE_STYLES.map(function (s) {
      return '<article class="card type-row' + (platform === "mobile" ? " type-row--mobile" : "") + '" data-name="' + key([s.name, s.use]) + '">' +
        '<div class="type-meta">' +
          '<span class="type-name">' + s.name + '</span>' +
          '<span class="type-spec">' + styleSpec(s, platform) + '</span>' +
        '</div>' +
        '<div class="type-sample" style="' + styleCss(s, platform) + '">' + s.sample + '</div>' +
      '</article>';
    }).join("") + '</div>';

    var switcher = '<div class="platform-bar">' +
      '<div class="btn-group" role="group" aria-label="Platform">' +
        ["web", "mobile"].map(function (k) {
          return '<button class="btn btn--secondary btn--sm" type="button" data-platform="' + k + '" aria-pressed="' + (k === platform) + '">' +
            D.PLATFORMS[k].name + '</button>';
        }).join("") +
      '</div>' +
    '</div>';

    var typeStylesGroup = group("Type styles", D.TYPE_STYLES.length + " styles · " + P.name, "Size / line height in px, weight, letter spacing.", switcher + cards);

    var families = [
      { id: "typeface", name: "Typeface", content: typefaceGroup },
      { id: "styles", name: "Styles", content: typeStylesGroup }
    ];
    var html = filterBar("typography-filters", "Typography filters", "data-typography-filter",
      [{ id: "all", name: "All" }].concat(families), typographyFilter) +
      families.map(function (family) {
        return '<div class="typography-family" data-typography-family="' + family.id + '">' + family.content + '</div>';
      }).join("");
    $("body-typography").innerHTML = html;
    applyTypographyFilter();
  }

  function applyTypographyFilter() {
    var body = $("body-typography");
    if (!body) return;
    body.querySelectorAll("[data-typography-filter]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-typography-filter") === typographyFilter ? "true" : "false");
    });
    body.querySelectorAll("[data-typography-family]").forEach(function (family) {
      family.hidden = typographyFilter !== "all" && family.getAttribute("data-typography-family") !== typographyFilter;
    });
  }

  /* ================= COLOURS ================= */
  function scaleStrip(list, family, marks) {
    return '<div class="scale">' + list.map(function (it) {
      var t = textOn(it.hex);
      var tag = marks && marks[it.step]
        ? '<span class="scale-tag" style="background:' + t.color + ';color:' + it.hex + '">' + marks[it.step] + '</span>' : "";
      return '<div class="scale-chip" style="background:' + it.hex + ';color:' + t.color + '" data-name="' + key([family, it.name, it.step, it.hex]) + '">' +
        '<div class="stack" style="gap:2px"><span class="scale-step">' + it.name + '</span><span class="scale-hex">' + it.hex + '</span></div>' +
        '<div class="stack" style="gap:6px">' + tag + '<span class="scale-ratio">Aa ' + t.ratio.toFixed(1) + ':1</span></div>' +
      '</div>';
    }).join("") + '</div>';
  }

  function renderColors() {
    var A = D.ACCENT;

    var accent = group("Accent", null, null,
      '<article class="card accent-hero" data-name="accent mono black white grey brand">' +
        '<div class="accent-hero-swatch">' +
          '<span class="accent-hero-name">' + A.name + '</span>' +
          '<span class="accent-hero-values">' + A.light.name + ' · ' + A.light.hex + '</span>' +
        '</div>' +
        '<div class="accent-hero-text">' +
          '<p class="eyebrow">One accent</p>' +
          '<h3 class="doc-title">Black means “you can act on this”</h3>' +
          '<p class="doc-text">The whole system is black, white and grey. The strongest tone marks an action, a selection or focus, and everything else stays quieter.</p>' +
          '<ul class="rule-list">' +
            '<li class="yes">' + I.check + '<span>Buttons, links, checked controls, selected items, focus and progress.</span></li>' +
            '<li class="no">' + I.x + '<span>Decoration, illustrations, large backgrounds or body text.</span></li>' +
            '<li class="no">' + I.x + '<span>Relying on tone alone for success, warning or danger — pair those with an icon and a label.</span></li>' +
          '</ul>' +
        '</div>' +
      '</article>');

    accent += group("Accent tones", null, null,
      scaleStrip(D.ACCENT_SCALE, "accent", { 900: "Default" }));

    var neutral = group("Neutral tones", null, null,
      scaleStrip(D.NEUTRAL_SCALE, "neutral"));

    var status = group("Status", null, null,
      '<div class="grid grid--3">' + D.STATUS.map(function (s) {
        return '<article class="card" data-name="' + key(["status", s.name, s.use]) + '">' +
          '<div class="status-swatches">' +
            '<div class="status-swatch" style="background:' + s.light + ';color:' + textOn(s.light).color + '"><strong>Default</strong>' + s.light + '</div>' +
          '</div>' +
          '<div class="doc-body">' +
            '<div class="row" style="justify-content:space-between"><h3 class="doc-title">' + s.name + '</h3>' +
              '<span class="badge badge--' + s.badge + '"><span class="badge-dot"></span>' + s.name + '</span></div>' +
            '<p class="doc-text">' + s.use + '</p>' +
          '</div>' +
        '</article>';
      }).join("") + '</div>');

    var contrastGroup = group("Contrast", null, "AA needs 4.5:1 for normal text and 3:1 for large text.",
      '<article class="card card--pad"><div class="table-scroll"><table class="table">' +
        '<thead><tr><th>Where</th><th>Pair</th><th>Contrast</th></tr></thead><tbody>' +
        D.CONTRAST_PAIRS.slice(0, 5).map(function (p) {
          var light = contrast(resolve(p.fg, "light"), resolve(p.bg, "light", p.over));
          return '<tr data-name="' + key([p.use, p.fg, p.bg, "contrast"]) + '">' +
            '<td class="strong">' + p.use + '</td>' +
            '<td>' + p.fg + ' on ' + p.bg + '</td>' +
            '<td>' + grade(light) + '</td>' +
          '</tr>';
        }).join("") +
      '</tbody></table></div></article>');

    var families = [
      { id: "accent", name: "Accent", content: accent },
      { id: "neutral", name: "Neutral", content: neutral },
      { id: "status", name: "Status", content: status },
      { id: "contrast", name: "Contrast", content: contrastGroup }
    ];
    var html = filterBar("color-filters", "Color filters", "data-color-filter",
      [{ id: "all", name: "All" }].concat(families), colorFilter) +
      families.map(function (family) {
        return '<div class="color-family" data-color-family="' + family.id + '">' + family.content + '</div>';
      }).join("");
    $("body-colors").innerHTML = html;
    applyColorFilter();
  }

  /* ================= ANIMATIONS ================= */
  function motionCard(name, id) {
    return '<article class="card motion-card" data-name="' + key([name, "animation motion"]) + '">' +
      '<h3 class="doc-title">' + name + '</h3>' +
      '<div class="motion-stage"><span class="motion-object motion-object--' + id + '"></span></div>' +
    '</article>';
  }

  function renderAnimations() {
    var entrances = [
      ["Fade", "fade"], ["Slide up", "slide-up"], ["Scale", "scale"], ["Pop", "pop"]
    ];
    var attention = [["Bounce", "bounce"], ["Shake", "shake"], ["Pulse", "pulse"]];
    var loops = [["Loading", "loading"], ["Shimmer", "shimmer"]];
    var effects = [["Ripple", "ripple"], ["Glow", "glow"], ["Float", "float"]];
    function motionGroup(title, list) {
      return group(title, null, null, '<div class="motion-grid">' + list.map(function (item) { return motionCard(item[0], item[1]); }).join("") + '</div>');
    }
    familyPage("animations", "Animation filters", [
      { id: "entrance", name: "Entrance", content: motionGroup("Entrance", entrances) },
      { id: "attention", name: "Attention", content: motionGroup("Attention", attention) },
      { id: "loading", name: "Loading", content: motionGroup("Loading", loops) },
      { id: "effects", name: "Effects", content: motionGroup("Effects", effects) }
    ]);
  }

  /* ================= PRINCIPLES ================= */
  function principleCard(title, text, visual, isLaw) {
    return '<article class="card principle-card" data-name="' + key([title, text, "principle"]) + '">' +
      '<div class="principle-visual' + (isLaw ? ' principle-visual--law' : '') + '">' + visual + '</div><h3 class="doc-title">' + title + '</h3><p>' + text + '</p></article>';
  }

  function lawVisual(type, number) {
    var shapes = {
      choices: '<i></i><i></i><i></i><i></i>',
      target: '<i></i><i></i>',
      patterns: '<i></i><i></i>',
      chunks: '<i></i><i></i><i></i><i></i><i></i><i></i>',
      gaps: '<i></i><i></i><i></i><i></i>',
      response: '<i></i><i></i>',
      peak: '<i></i><i></i><i></i><i></i>',
      standout: '<i></i><i></i><i></i><i></i><i></i>'
    };
    return '<div class="law-diagram law-diagram--' + type + '">' + shapes[type] + '</div><span class="law-number">' + number + '</span>';
  }

  function renderPrinciples() {
    var ux = [
      ["Start with the task", "Design around what people need to do, not the features available.", I.checkCircle],
      ["Make status visible", "Show progress, results, and changes as they happen.", I.info],
      ["Prevent mistakes", "Use clear constraints and sensible defaults before an error can occur.", I.alertCircle],
      ["Design every state", "Plan empty, loading, error, and success states, not only the ideal one.", I.layers],
      ["Let people undo", "Make actions reversible so exploring feels safe. Confirm only what cannot be undone.", I.replay]
    ];
    var ui = [
      ["Create hierarchy", "Use size, weight, spacing, and contrast to show what matters first.", I.arrowRight],
      ["Be consistent", "Reuse patterns, labels, and component states so behaviour stays predictable.", I.check],
      ["Keep it focused", "Show only what supports the current task; reveal detail when it is needed.", I.search],
      ["Use space with intent", "White space groups, separates, and lets content breathe. Spacing is a design tool.", I.grid],
      ["Reserve colour for meaning", "Use colour for action, status, and focus, not decoration.", I.sun]
    ];
    var product = [
      ["Solve a real need", "Connect every experience to a clear customer problem and outcome.", I.plus],
      ["Make value clear", "People should understand what they gain before they commit.", I.info],
      ["Learn from use", "Measure behaviour, listen to feedback, and improve the next decision.", I.replay],
      ["Define success", "Agree what good looks like before designing, so every decision can be judged against it.", I.check]
    ];
    var accessibility = [
      ["Meet contrast", "Text needs at least 4.5:1 against its background; large text and UI parts need 3:1.", I.sun],
      ["Don’t rely on colour alone", "Pair colour with an icon, label, or pattern so status survives colour blindness.", I.alertCircle],
      ["Make targets touchable", "Give every control at least a 44 px touch target, with space between neighbours.", I.plus],
      ["Show focus", "Keep a visible focus ring and a logical keyboard order on every interactive element.", I.search]
    ];
    var workflow = [
      ["Use variables, not raw values", "Reference colour, spacing, and type variables so a change in one place updates everywhere.", I.copy],
      ["Name things clearly", "Name layers, components, and variants by purpose so anyone can find and reuse them.", I.edit],
      ["Test with real content", "Try long names, empty states, and real data before calling a layout finished.", I.info],
      ["Annotate for handoff", "Note behaviour, states, and edge cases so engineers do not have to guess.", I.arrowRight]
    ];
    var laws = [
      ["Hick’s Law", "More choices take longer to decide. Prioritise and group options.", lawVisual("choices", "01")],
      ["Fitts’s Law", "Large, nearby targets are faster to use. Make frequent actions easy to reach.", lawVisual("target", "02")],
      ["Jakob’s Law", "People expect familiar patterns. Follow conventions before inventing new ones.", lawVisual("patterns", "03")],
      ["Miller’s Law", "Working memory is limited. Break information into smaller, meaningful chunks.", lawVisual("chunks", "04")],
      ["Law of Proximity", "Items placed together are understood as related. Use spacing to show groups.", lawVisual("gaps", "05")],
      ["Doherty Threshold", "Fast feedback keeps people engaged. Aim for responses within about 400 ms.", lawVisual("response", "06")],
      ["Peak-End Rule", "People remember the high point and ending. Design key moments and completion well.", lawVisual("peak", "07")],
      ["Von Restorff Effect", "The item that differs is the one remembered. Use contrast sparingly for what matters most.", lawVisual("standout", "08")]
    ];
    function principleGroup(title, list, isLaw) {
      return group(title, null, null, '<div class="principles-grid">' + list.map(function (item) { return principleCard(item[0], item[1], item[2], isLaw); }).join("") + '</div>');
    }
    familyPage("principles", "Principle filters", [
      { id: "ux", name: "UX", content: principleGroup("UX", ux) },
      { id: "ui", name: "UI", content: principleGroup("UI", ui) },
      { id: "product", name: "Product", content: principleGroup("Product", product) },
      { id: "accessibility", name: "Accessibility", content: principleGroup("Accessibility", accessibility) },
      { id: "workflow", name: "Workflow", content: principleGroup("Workflow", workflow) },
      { id: "laws", name: "Laws", content: principleGroup("Laws", laws, true) }
    ]);
  }

  /* ================= REFERENCE PAGES ================= */
  /* One card shape for heuristics, research, patterns and product: a title, a line of
     explanation, then labelled facts and/or chips. */
  function refCard(o) {
    var facts = o.facts || [];
    return '<article class="card ref-card" data-name="' + key([o.title, o.text].concat(facts.map(function (f) { return f[1]; })).concat(o.chips || [])) + '"' +
      (o.tags ? ' data-tags="' + o.tags + '"' : "") + '>' +
      (o.visual || "") +
      '<div class="ref-head"><h3 class="doc-title">' + o.title + '</h3>' +
        (o.badge ? '<span class="badge">' + o.badge + '</span>' : "") + '</div>' +
      '<p class="ref-text">' + o.text + '</p>' +
      (facts.length ? '<dl class="ref-facts">' + facts.map(function (f) {
        return '<div><dt>' + f[0] + '</dt><dd>' + f[1] + '</dd></div>';
      }).join("") + '</dl>' : "") +
      (o.chips ? '<ul class="spec-chips">' + o.chips.map(function (c) { return '<li>' + c + '</li>'; }).join("") + '</ul>' : "") +
    '</article>';
  }

  function refGroup(title, cards, wide) {
    return group(title, null, null, '<div class="ref-grid' + (wide ? ' ref-grid--wide' : '') + '">' + cards.join("") + '</div>');
  }

  /* Filters that keep one list in its own order: cards carry data-tags and the bar hides the rest. */
  function tagPage(page, label, filters, content) {
    var selected = pageFilters[page] || "all";
    $("body-" + page).innerHTML = filterBar("page-filters", label, "data-page-filter",
      [{ id: "all", name: "All" }].concat(filters), selected) + content;
    applyPageFilter($("page-" + page));
  }

  function renderHeuristics() {
    var cards = D.HEURISTICS.map(function (h) {
      return refCard({
        title: h.name, text: h.text, tags: h.tags,
        visual: '<div class="principle-visual">' + h.n + '</div>',
        facts: [["Example", h.does]]
      });
    });
    tagPage("heuristics", "Heuristic filters",
      [{ id: "clarity", name: "Clarity" }, { id: "control", name: "Control" }, { id: "support", name: "Support" }],
      refGroup("Nielsen’s 10 heuristics", cards));
  }

  function renderResearch() {
    function methods(family) {
      return D.RESEARCH.filter(function (m) { return m.family === family; }).map(function (m) {
        return refCard({
          title: m.name, badge: m.kind, text: m.text,
          facts: [["Use when", m.use], ["People", m.people]]
        });
      });
    }
    familyPage("research", "Research filters", [
      { id: "discover", name: "Discover", content: refGroup("Discover", methods("discover")) },
      { id: "organise", name: "Organise", content: refGroup("Organise", methods("organise")) },
      { id: "test", name: "Test", content: refGroup("Test", methods("test")) }
    ]);
  }

  /* Greyscale wireframes made of plain blocks, so each pattern reads at a glance. */
  function w(cls, inner) {
    return '<div class="' + cls.split(" ").map(function (c) { return "wf-" + c; }).join(" ") + '">' + (inner || "") + '</div>';
  }

  function wireframe(id) {
    var t = w("t"), ts = w("t s"), th = w("t h");
    var item = w("box item");
    var bars = ["40", "65", "50", "85", "60"].map(function (h) { return '<i style="height:' + h + '%"></i>'; }).join("");
    var screens = {
      onboarding: w("col center fill", w("img circle") + th + ts + w("dots", w("dot on") + w("dot") + w("dot")) + w("btn")),
      signin: w("col center fill", th + w("field") + w("field") + w("btn") + w("t xs")),
      dashboard: w("row", w("box stat") + w("box stat") + w("box stat")) +
        w("row fill", w("box fill bars", bars) + w("col side", t + t + ts)),
      listdetail: w("row fill", w("col list", w("box item on") + item + item + item) + w("box fill pane", th + t + t + ts)),
      search: w("field") + w("row", w("chip") + w("chip") + w("chip")) + item + item + item,
      settings: w("box fill rows", [1, 2, 3].map(function () {
        return w("row between", w("col", t + w("t xs")) + w("toggle"));
      }).join("")),
      product: w("row fill", w("img fill") + w("col fill", th + ts + w("row", w("swatch") + w("swatch") + w("swatch")) + w("btn"))),
      checkout: w("row fill", w("col fill", item + item + item) + w("box summary", t + t + w("btn"))),
      empty: w("col center fill", w("img circle dashed") + th + ts + w("btn")),
      error: w("col center fill", w("t xl") + ts + w("row", w("btn") + w("btn ghost")))
    };
    return '<div class="wf" aria-hidden="true">' + screens[id] + '</div>';
  }

  function renderPatterns() {
    function screens(family) {
      return D.PATTERNS.filter(function (p) { return p.family === family; }).map(function (p) {
        return refCard({ title: p.name, text: p.text, visual: wireframe(p.id), chips: p.parts });
      });
    }
    familyPage("patterns", "Pattern filters", [
      { id: "start", name: "Start", content: refGroup("Start", screens("start")) },
      { id: "core", name: "Core", content: refGroup("Core", screens("core")) },
      { id: "commerce", name: "Commerce", content: refGroup("Commerce", screens("commerce")) },
      { id: "states", name: "States", content: refGroup("States", screens("states")) }
    ]);
  }

  function renderProduct() {
    function frameworks(family) {
      return D.PRODUCT.filter(function (f) { return f.family === family; }).map(function (f) {
        var facts = f.formula ? [["Formula", f.formula]] : [];
        return refCard({
          title: f.name, text: f.text,
          visual: '<div class="fw-parts' + (f.parts.length > 3 ? ' fw-parts--many' : '') + '" style="--n:' + f.parts.length + '">' + f.parts.map(function (p) {
            return '<span><b>' + p[0] + '</b><em>' + p[1] + '</em></span>';
          }).join("") + '</div>',
          facts: facts.concat([["Best for", f.best]])
        });
      });
    }
    familyPage("product", "Product filters", [
      { id: "prioritise", name: "Prioritisation", content: refGroup("Prioritisation", frameworks("prioritise"), true) },
      { id: "metrics", name: "Metrics", content: refGroup("Metrics", frameworks("metrics"), true) }
    ]);
  }

  function applyColorFilter() {
    var body = $("body-colors");
    if (!body) return;
    body.querySelectorAll("[data-color-filter]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-color-filter") === colorFilter ? "true" : "false");
    });
    body.querySelectorAll("[data-color-family]").forEach(function (family) {
      family.hidden = colorFilter !== "all" && family.getAttribute("data-color-family") !== colorFilter;
    });
  }

  /* ================= VARIABLES ================= */
  function modeValue(v) {
    return v[0] + (v[1].charAt(0) === "#" ? ' · <span class="tnum">' + v[1] + '</span>' : "");
  }

  function varPreview(c, row) {
    var v = row[1];
    switch (c.id) {
      case "spacing": return '<span class="var-bar" style="width:' + v + 'px"></span>';
      case "radius": return '<span class="var-radius" style="width:52px;height:52px;border-radius:' + Math.min(v, 26) + 'px"></span>';
      case "sizing":
        return row[0].indexOf("icon") !== -1
          ? '<span class="var-icon" style="display:block;width:' + v + 'px;height:' + v + 'px">' + I.heartFilled + '</span>'
          : '<span class="var-box" style="width:' + (row[0].indexOf("touch") !== -1 ? v : Math.round(v * 1.4)) + 'px;height:' + v + 'px"></span>';
      case "border":
        return row[0].indexOf("offset") !== -1 ? '<span class="var-focus"></span>' : '<span class="var-line" style="height:' + v + 'px"></span>';
      case "elevation": return '<span class="var-elev" style="box-shadow:' + (row[3] ? "var(--shadow-" + row[3] + ")" : "none") + '"></span>';
      case "opacity": return '<span class="var-opacity"><i style="opacity:' + v / 100 + '"></i></span>';
      case "duration": return '<span class="var-track"><i style="--dur:' + v + 'ms"></i></span>';
      case "easing": return '<svg class="var-curve" viewBox="-8 -24 116 148" aria-hidden="true"><path class="grid-path" d="M0,100 L100,100 M0,0 L0,100"/>' +
        '<path class="curve-path" d="M0,100 C' + v[0] * 100 + ',' + (100 - v[1] * 100) + ' ' + v[2] * 100 + ',' + (100 - v[3] * 100) + ' 100,0"/></svg>';
      case "type": return '<span class="var-weight" style="font-weight:' + row[3] + '">Aa</span>';
      case "breakpoints": return '<span class="var-grid">' + new Array(row[3] + 1).join("<i></i>") + '</span>';
    }
    return "";
  }

  function varValue(c, row) {
    if (row[0] === "radius/full") return "Full";
    if (c.easing) return row[1].map(num).join(", ");
    if (c.unit) return row[1] + c.unit;
    if (c.grid) return row[1] + " px";
    return row[1];
  }

  /* Eight collections would be eight buttons; two groups plus Color read better. */
  var VARIABLE_GROUPS = [
    { id: "layout", name: "Layout", ids: ["spacing", "radius", "sizing", "border", "elevation", "breakpoints"] },
    { id: "motion", name: "Motion", ids: ["duration", "easing"] }
  ];

  function renderVariables() {
    var filters = [{ id: "all", name: "All" }, { id: "color", name: "Color" }].concat(VARIABLE_GROUPS.map(function (g) {
      return { id: g.id, name: g.name };
    }));
    var html = filterBar("variable-filters", "Variable filters", "data-variable-filter", filters, variableFilter);
    html += '<div class="variable-family" data-variable-family="color">' + group("Color", D.COLOR_VARIABLES.length + " variables",
      "Use these in designs — never a raw hex. Each is a reusable light-theme role.",
      '<div class="color-mode-switch btn-group" role="group" aria-label="Color mode">' +
        ["light", "dark"].map(function (mode) {
          return '<button class="btn btn--secondary btn--sm" type="button" data-color-variable-mode="' + mode + '" aria-pressed="' + (mode === colorVariableMode) + '">' + (mode === "light" ? "Light" : "Dark") + '</button>';
        }).join("") +
      '</div>' +
      '<div class="variable-grid variable-grid--color">' +
        D.COLOR_VARIABLES.map(function (v) {
          var color = v[colorVariableMode];
          var colorCode = color[1].indexOf("rgba(") === 0 ? "" : " · " + color[1];
          return '<article class="card variable-card variable-card--color" data-name="' + key([v.name, color[0], color[1], v.use]) + '">' +
            '<div class="var-color-line"><span class="role-dot" style="background:' + color[1] + '"></span>' +
              '<div><div class="var-name">' + v.name + '</div><div class="var-color-code">' + color[0] + colorCode + '</div></div></div>' +
            '<div class="var-use">' + v.use + '</div>' +
          '</article>';
        }).join("") +
      '</div>') + '</div>';

    function variableCollection(c) {
      return group(c.name, c.rows.length + " variables", c.desc,
        '<div class="variable-grid">' +
          c.rows.map(function (row) {
            return '<article class="card variable-card variable-card--token" data-name="' + key([c.name, row[0], row[2]]) + '">' +
              '<div class="token-preview"><div class="var-preview">' + varPreview(c, row) + '</div><span class="var-value">' + varValue(c, row) + '</span></div>' +
              '<div class="var-name">' + row[0] + '</div>' +
              '<div class="var-use">' + row[2] + '</div>' +
            '</article>';
          }).join("") +
        '</div>');
    }

    VARIABLE_GROUPS.forEach(function (g) {
      html += '<div class="variable-family" data-variable-family="' + g.id + '">' +
        D.VARIABLE_COLLECTIONS.filter(function (c) { return g.ids.indexOf(c.id) !== -1; }).map(variableCollection).join("") +
        '</div>';
    });

    $("body-variables").innerHTML = html;
    applyVariableFilter();
  }

  function applyVariableFilter() {
    var body = $("body-variables");
    if (!body) return;
    body.querySelectorAll("[data-variable-filter]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-variable-filter") === variableFilter ? "true" : "false");
    });
    body.querySelectorAll("[data-variable-family]").forEach(function (family) {
      family.hidden = variableFilter !== "all" && family.getAttribute("data-variable-family") !== variableFilter;
    });
  }

  /* ================= BUTTONS ================= */
  function renderButtons() {
    var statesHtml = group("States", D.BUTTON_VARIANTS.length + " variants × " + D.BUTTON_STATES.length + " states",
      "Every variant in every state. Selected is for toggles and button groups.",
      '<article class="card card--pad"><div class="table-scroll"><table class="table matrix">' +
        '<thead><tr><th>Variant</th>' + D.BUTTON_STATES.map(function (s) { return '<th>' + s.name + '</th>'; }).join("") + '</tr></thead><tbody>' +
        D.BUTTON_VARIANTS.map(function (v) {
          return '<tr data-name="' + key([v.name, "variant states matrix"]) + '"><th scope="row">' + v.name + '</th>' +
            D.BUTTON_STATES.map(function (s) {
              return '<td><button class="btn btn--' + v.id + (s.cls ? " " + s.cls : "") + '" type="button" tabindex="-1"' +
                (s.disabled ? " disabled" : "") + (s.id === "loading" ? ' aria-busy="true"' : "") + '>' +
                (v.id === "link" ? "Link" : "Button") + '</button></td>';
            }).join("") + '</tr>';
        }).join("") +
      '</tbody></table></div></article>');

    var variantsHtml = group("Variants", D.BUTTON_VARIANTS.length + " variants", "Pick by importance, not by colour.",
      '<div class="grid grid--3">' + D.BUTTON_VARIANTS.map(function (v) {
        return '<article class="card" data-name="' + key([v.name, "variant", v.use]) + '">' +
          '<div class="doc-demo">' +
            '<button class="btn btn--' + v.id + '" type="button">' + v.label + '</button>' +
          '</div>' +
          '<div class="doc-body">' +
            '<h3 class="doc-title">' + v.name + '</h3>' +
            '<p class="doc-text doc-text--shown">' + v.use + '</p>' +
          '</div>' +
        '</article>';
      }).join("") + '</div>');

    var sizesHtml = group("Sizes", D.BUTTON_SIZES.length + " sizes", "Label sizes follow the platform type styles, so buttons read the same on web and mobile.",
      '<div class="grid grid--3">' + D.BUTTON_SIZES.map(function (s) {
        var c = s.cls ? " " + s.cls : "";
        return '<article class="card" data-name="' + key([s.name, "size", s.height, s.use]) + '">' +
          '<div class="doc-demo">' +
            '<button class="btn btn--primary' + c + '" type="button">' + I.plus + 'Button</button>' +
            '<button class="btn btn--secondary' + c + '" type="button">Button</button>' +
            '<button class="btn btn--secondary btn--icon' + c + '" type="button" aria-label="Add">' + I.plus + '</button>' +
          '</div>' +
          '<div class="doc-body">' +
            '<h3 class="doc-title">' + s.name + '</h3>' +
            '<p class="doc-text">' + s.use + '</p>' +
            specChips([["Height", s.height], ["Padding", s.padding], ["Radius", s.radius]]) +
          '</div>' +
        '</article>';
      }).join("") + '</div>');

    var patterns = [
      { name: "Leading icon", text: "An icon before the label names what the action creates.",
        demo: '<button class="btn btn--primary" type="button">' + I.plus + 'New project</button>' },
      { name: "Icon only", text: "Square — width equals height. Always add a tooltip; on mobile keep the tap area at 44px.",
        demo: '<button class="btn btn--ghost btn--icon" type="button" aria-label="Like">' + I.heart + '</button>' +
          '<button class="btn btn--secondary btn--icon" type="button" aria-label="Download">' + I.download + '</button>' +
          '<button class="btn btn--danger btn--icon" type="button" aria-label="Delete">' + I.trash + '</button>' },
      { name: "Pill", text: "Fully rounded, for social actions and filters. Works with every variant and size.",
        demo: '<button class="btn btn--primary btn--pill" type="button">Follow</button>' +
          '<button class="btn btn--outline btn--pill is-selected" type="button" tabindex="-1">' + I.check + 'Following</button>' },
      { name: "Toggle", text: "Stays selected after a click, like Save or Bold. Click to try it.",
        demo: '<button class="btn btn--secondary" type="button" aria-pressed="false" data-toggle>' + I.heart + 'Save</button>' +
          '<button class="btn btn--ghost" type="button" aria-pressed="true" data-toggle>' + I.heart + 'Saved</button>' },
    ];

    var layoutHtml = group("Icons", null, null,
      '<div class="grid grid--3">' + patterns.map(function (p) {
        return '<article class="card" data-name="' + key([p.name, "pattern", p.text]) + '">' +
          '<div class="doc-demo">' + p.demo + '</div>' +
          '<div class="doc-body"><h3 class="doc-title">' + p.name + '</h3><p class="doc-text">' + p.text + '</p></div>' +
        '</article>';
      }).join("") + '</div>');

    familyPage("buttons", "Button filters", [
      { id: "variants", name: "Variants", content: variantsHtml },
      { id: "states", name: "States", content: statesHtml },
      { id: "sizes", name: "Sizes", content: sizesHtml },
      { id: "icons", name: "Icons", content: layoutHtml }
    ]);
  }

  /* ================= COMPONENTS ================= */
  function doc(o) {
    var specs = (o.specs || []).filter(function (spec) {
      return /^(Height|Width|Max width|Size|Sizes|Radius|Padding|Box|Circle|Track|Thickness|Gap|Item|Line|Menu radius)$/.test(spec[0]);
    }).slice(0, 3);
    var meta = specs.length ? specChips(specs) : "";
    return '<article class="card component-card' + (o.wide ? " card--wide" : "") + (o.span ? " component-card--span" : "") + ((o.name === "Buttons" || o.name === "Button sizes" || o.name === "Button states") ? " component-card--button-variants" : "") + '" data-name="' + key([o.name, o.keys || ""]) + '">' +
      '<div class="component-card-head"><h3 class="doc-title">' + o.name + '</h3>' + meta + '</div>' +
      '<div class="doc-demo' + (o.demoCls ? " " + o.demoCls : "") + '">' + o.demo + '</div>' +
      '</article>';
  }

  function cell(state, inner) {
    return '<div class="state-cell">' + inner + (state ? '<span class="state-name">' + state + '</span>' : '') + '</div>';
  }

  function textField(id, o) {
    return '<div class="field' + (o.error ? " is-error" : "") + (o.disabled ? " is-disabled" : "") + '">' +
      '<div class="field-label-row"><label class="field-label" for="' + id + '">Email</label>' + (o.state ? '<span class="field-state">' + o.state + '</span>' : '') + '</div>' +
      '<input class="input' + (o.cls ? " " + o.cls : "") + '" id="' + id + '" type="email" placeholder="name@company.com"' +
        (o.value ? ' value="' + o.value + '"' : "") + (o.disabled ? " disabled" : "") + '>' +
      '<span class="field-help">' + (o.error ? I.alertCircle + "Enter a full email address." : "We only use it to sign you in.") + '</span>' +
    '</div>';
  }

  function checkbox(id, label, o) {
    return '<label class="check" for="' + id + '"><input type="checkbox" id="' + id + '"' +
      (o.checked ? " checked" : "") + (o.disabled ? " disabled" : "") + (o.indeterminate ? " data-indeterminate" : "") + '>' + label + '</label>';
  }

  function radio(id, name, label, o) {
    return '<label class="check" for="' + id + '"><input type="radio" id="' + id + '" name="' + name + '"' +
      (o.checked ? " checked" : "") + (o.disabled ? " disabled" : "") + '>' + label + '</label>';
  }

  function toggleSwitch(id, label, o) {
    return '<label class="switch" for="' + id + '"><input type="checkbox" role="switch" id="' + id + '"' +
      (o.checked ? " checked" : "") + (o.disabled ? " disabled" : "") + '>' + label + '</label>';
  }

  function menu() {
    return '<div class="menu" role="listbox" aria-label="Date range">' +
      '<button class="menu-item" type="button" role="option">Last 7 days</button>' +
      '<button class="menu-item is-selected" type="button" role="option" aria-selected="true">Last 30 days' + I.check + '</button>' +
      '<button class="menu-item is-active" type="button" role="option">Last 90 days</button>' +
      '<div class="menu-divider"></div>' +
      '<button class="menu-item" type="button" role="option">Custom range…</button>' +
    '</div>';
  }

  function renderComponents() {
    var inputs = [
      doc({ name: "Text field", wide: true, demoCls: "doc-demo--start", keys: "input form email",
        demo: '<div class="state-grid">' +
          cell("", textField("tf-default", { state: "Default" })) +
          cell("", textField("tf-hover", { cls: "is-hover", state: "Hover" })) +
          cell("", textField("tf-focus", { cls: "is-focus", value: "alex@design", state: "Focused" })) +
          cell("", textField("tf-filled", { value: "alex@design.system", state: "Filled" })) +
          cell("", textField("tf-error", { error: true, value: "alex@", state: "Error" })) +
          cell("", textField("tf-disabled", { disabled: true, state: "Disabled" })) +
        '</div>',
        specs: [["Height", 40], ["Radius", 8], ["Padding", 12], ["Label", "Label"], ["Value", "Body"], ["Helper", "Caption"], ["Focus halo", "3px accent/tint"]] }),
      doc({ name: "Select", demoCls: "doc-demo--start", keys: "dropdown menu listbox",
        demo: '<div class="state-grid">' +
          cell("Closed", '<button class="select" type="button" aria-haspopup="listbox"><span>Last 30 days</span>' + I.chevronDown + '</button>') +
          cell("Open", '<div style="width:100%"><button class="select is-open" type="button" aria-haspopup="listbox" aria-expanded="true"><span>Last 30 days</span>' + I.chevronDown + '</button>' + menu() + '</div>') +
        '</div>',
        specs: [["Height", 40], ["Item", 36], ["Menu radius", 8], ["Menu padding", 4], ["Elevation", 3], ["State", "Menu open"]] }),
      doc({ name: "Checkbox", demoCls: "doc-demo--start", keys: "check tick",
        demo: '<div class="state-grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">' +
          cell("Unchecked", checkbox("cb-1", "Email updates", {})) +
          cell("Checked", checkbox("cb-2", "Email updates", { checked: true })) +
          cell("Indeterminate", checkbox("cb-3", "All projects", { indeterminate: true })) +
          cell("Disabled", checkbox("cb-4", "Email updates", { disabled: true })) +
          cell("Disabled on", checkbox("cb-5", "Email updates", { checked: true, disabled: true })) +
        '</div>',
        specs: [["Box", 18], ["Radius", 5], ["Gap", 8], ["Mobile tap area", 44]] }),
      doc({ name: "Radio", demoCls: "doc-demo--start", keys: "option choice",
        demo: '<div class="state-grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">' +
          cell("Unselected", radio("rd-1", "plan", "Monthly", {})) +
          cell("Selected", radio("rd-2", "plan", "Yearly", { checked: true })) +
          cell("Disabled", radio("rd-3", "plan-off", "Lifetime", { disabled: true })) +
        '</div>',
        specs: [["Circle", 18], ["Dot", 8], ["Gap", 8], ["Mobile tap area", 44]] }),
      doc({ name: "Switch", demoCls: "doc-demo--start", keys: "toggle on off",
        demo: '<div class="state-grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">' +
          cell("Off", toggleSwitch("sw-1", "Notifications", {})) +
          cell("On", toggleSwitch("sw-2", "Notifications", { checked: true })) +
          cell("Disabled", toggleSwitch("sw-3", "Notifications", { disabled: true })) +
          cell("Disabled on", toggleSwitch("sw-4", "Notifications", { checked: true, disabled: true })) +
        '</div>',
        specs: [["Track", "36 × 20"], ["Knob", 16], ["States", "On · Off"]] })
    ];

    var pickers = [
      doc({ name: "Slider", keys: "range value adjust",
        demo: '<div class="basic-slider"><span>Zoom</span><div class="basic-slider-track"><i style="width:65%"></i><b style="left:65%"></b></div><strong>65%</strong></div>',
        specs: [["Track", 4], ["Thumb", 16], ["Range", "0–100%"], ["Focus", "focus/ring"]] })
    ];

    var navigation = [
      doc({ name: "Tabs", keys: "tab bar navigation",
        demo: '<div class="tabs" role="tablist" aria-label="Project" style="max-width:360px">' +
          '<button class="tab" type="button" role="tab" aria-selected="true">Overview</button>' +
          '<button class="tab" type="button" role="tab" aria-selected="false">Activity</button>' +
          '<button class="tab" type="button" role="tab" aria-selected="false">Settings</button></div>',
        specs: [["Height", 40], ["Indicator", "2px accent"], ["Label", "Label"], ["Padding", 12]] }),
      doc({ name: "Segmented control", keys: "segment toggle group",
        demo: '<div class="segmented" role="group" aria-label="View">' +
          '<button class="segment" type="button" aria-pressed="false">Day</button>' +
          '<button class="segment" type="button" aria-pressed="true">Week</button>' +
          '<button class="segment" type="button" aria-pressed="false">Month</button></div>',
        specs: [["Height", 32], ["Padding", 3], ["Radius", 8], ["Selected", "Surface · Elevation 1"]] }),
      doc({ name: "List", keys: "rows items people",
        demo: '<div class="list">' +
          '<button class="list-row" type="button"><span class="avatar" style="--size:32px">AK</span><span class="list-text"><span class="list-title">Ava Kim</span><span class="list-meta">Product design</span></span>' + I.chevronRight + '</button>' +
          '<button class="list-row" type="button" aria-current="true"><span class="avatar" style="--size:32px">LP</span><span class="list-text"><span class="list-title">Leo Park</span><span class="list-meta">Engineering</span></span>' + I.chevronRight + '</button>' +
          '<button class="list-row" type="button"><span class="avatar avatar--neutral" style="--size:32px">MC</span><span class="list-text"><span class="list-title">Mia Chen</span><span class="list-meta">Research</span></span>' + I.chevronRight + '</button>' +
        '</div>',
        specs: [["Row", 56], ["Avatar", 32], ["Padding", 16], ["Divider", "border/default"]] })
    ];

    var navigationSurfaces = [
      doc({ name: "Navigation bar", keys: "mobile nav destinations tabs bottom",
        demo: '<div class="basic-nav-bar"><span class="is-active">Home</span><span>Explore</span><span>Saved</span><span>Profile</span></div>',
        specs: [["Height", 64], ["Destinations", "3–5"], ["Active", "Tint + label"], ["Placement", "Mobile"]] })
    ];

    var feedback = [
      doc({ name: "Alert", wide: true, demoCls: "doc-demo--column", keys: "banner message notice info success warning danger error",
        demo: '<div class="grid grid--2" style="width:100%">' +
          '<div class="alert" role="status">' + I.info + '<span class="alert-title">New components available</span><span class="alert-text">Refresh the library to get the latest buttons.</span></div>' +
          '<div class="alert alert--success" role="status">' + I.checkCircle + '<span class="alert-title">Changes saved</span><span class="alert-text">Everyone on the team can see them now.</span></div>' +
          '<div class="alert alert--warning" role="status">' + I.alertTriangle + '<span class="alert-title">Storage almost full</span><span class="alert-text">You have used 92% of your 10 GB.</span></div>' +
          '<div class="alert alert--danger" role="alert">' + I.alertCircle + '<span class="alert-title">Couldn’t publish</span><span class="alert-text">Check your connection and try again.</span></div>' +
        '</div>',
        specs: [["Padding", "12 / 14"], ["Radius", 8], ["Icon", 20], ["Title", "Label"], ["Text", "Body"]] }),
      doc({ name: "Toast", keys: "snackbar notification",
        demo: '<div class="toast" role="status">' + I.checkCircle + '<span class="toast-text">Project archived</span>' +
          '<button class="toast-action" type="button">Undo</button></div>',
        specs: [["Radius", 8], ["Elevation", 3], ["Surface", "inverse/surface"], ["State", "Visible"]] }),
      doc({ name: "Progress", demoCls: "doc-demo--column", keys: "loader spinner bar loading",
        demo: '<div class="progress-row"><div class="progress-label"><span>Uploading</span><span>64%</span></div>' +
            '<div class="progress" role="progressbar" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100"><span class="progress-bar" style="width:64%"></span></div></div>' +
          '<div class="progress-row"><div class="progress-label"><span>Preparing export</span></div>' +
            '<div class="progress progress--indeterminate" role="progressbar" aria-label="Preparing export"><span class="progress-bar"></span></div></div>' +
          '<div class="row"><span class="spinner" style="--size:16px"></span><span class="spinner"></span><span class="spinner" style="--size:32px"></span></div>',
        specs: [["Track", 6], ["Radius", "full"], ["Spinner", "16 · 24 · 32"], ["State", "Pending"]] }),
      doc({ name: "Badge", keys: "tag status label count",
        demo: '<span class="badge">Draft</span><span class="badge badge--accent">New</span><span class="badge badge--solid">Beta</span>' +
          '<span class="badge badge--success"><span class="badge-dot"></span>Live</span><span class="badge badge--warning">Pending</span>' +
          '<span class="badge badge--danger">Failed</span>' +
          '<span class="icon-with-count" aria-label="3 notifications">' + I.bell + '<span class="count">3</span></span>',
        specs: [["Height", 20], ["Padding", 8], ["Text", "Caption · SemiBold"], ["Radius", "full"]] })
    ];

    var content = [
      doc({ name: "Avatar", keys: "profile user initials people",
        demo: '<span class="avatar" style="--size:24px">AK</span><span class="avatar" style="--size:32px">AK</span>' +
          '<span class="avatar">AK</span><span class="avatar" style="--size:56px">AK<span class="avatar-status"></span></span>' +
          '<span class="avatar-group"><span class="avatar" style="--size:32px">LP</span><span class="avatar" style="--size:32px">MC</span>' +
          '<span class="avatar" style="--size:32px">JS</span><span class="avatar avatar--neutral" style="--size:32px">+3</span></span>',
        specs: [["Sizes", "24 · 32 · 40 · 56"], ["Radius", "full"], ["Initials", "38% of size"], ["Status", "28% of size"]] }),
      doc({ name: "Card", keys: "container tile media",
        demo: '<div class="ui-card"><div class="ui-card-media"></div><div class="ui-card-body">' +
          '<span class="ui-card-overline">Guide</span><span class="ui-card-title">Building with components</span>' +
          '<span class="ui-card-text">How to use variants and named styles consistently.</span></div>' +
          '<div class="ui-card-actions"><button class="btn btn--ghost btn--sm" type="button">Save</button>' +
          '<button class="btn btn--primary btn--sm" type="button">Read</button></div></div>',
        specs: [["Radius", 12], ["Padding", 16], ["Elevation", 1], ["Title", "Title"]] }),
      doc({ name: "Dialog", span: true, keys: "modal popup confirm",
        demo: '<div class="dialog-stage"><div class="dialog" role="dialog" aria-label="Delete project">' +
          '<span class="dialog-title">Delete project?</span>' +
          '<span class="dialog-text">“Aurora redesign” and its 24 files will be deleted for everyone. This can’t be undone.</span>' +
          '<div class="dialog-actions"><button class="btn btn--secondary" type="button">Cancel</button>' +
          '<button class="btn btn--danger" type="button">Delete project</button></div></div></div>',
        specs: [["Max width", 400], ["Radius", 16], ["Padding", 24], ["Elevation", 4], ["Backdrop", "overlay/scrim"], ["State", "Open"]] })
    ];

    var overlays = [
      doc({ name: "Menu", keys: "overflow context options",
        demo: '<div class="menu" role="menu" aria-label="Project options"><button class="menu-item" type="button" role="menuitem">Rename</button><button class="menu-item" type="button" role="menuitem">Duplicate</button><div class="menu-divider"></div><button class="menu-item" type="button" role="menuitem">Archive</button></div>',
        specs: [["Item", 36], ["Padding", 4], ["Radius", 8], ["Elevation", 3]] })
    ];

    feedback.push(doc({ name: "Empty state", keys: "empty no results placeholder",
      demo: '<div class="basic-empty">' + I.search + '<strong>No projects yet</strong><button class="btn btn--primary btn--sm" type="button">' + I.plus + 'New project</button></div>' }));
    var everything = [].concat(inputs, pickers, navigation, navigationSurfaces, feedback, content, overlays);
    function pick(names) {
      return names.map(function (n) {
        return everything.filter(function (html) { return html.indexOf('<h3 class="doc-title">' + n + '</h3>') !== -1; })[0];
      }).filter(Boolean);
    }
    var families = [
      { id: "inputs", name: "Inputs", items: pick(["Text field", "Select", "Checkbox", "Radio", "Switch", "Slider"]) },
      { id: "navigation", name: "Navigation", items: pick(["Tabs", "Segmented control", "Navigation bar"]) },
      { id: "feedback", name: "Feedback", items: pick(["Alert", "Toast", "Progress", "Empty state"]) },
      { id: "content", name: "Content", items: pick(["Badge", "Avatar", "List", "Card"]) },
      { id: "overlays", name: "Overlays", items: pick(["Dialog", "Menu"]) }
    ];
    $("body-components").innerHTML =
      filterBar("component-jumps", "Component filters", "data-component-filter",
        [{ id: "all", name: "All" }].concat(families), "all") + families.map(function (family) {
        return '<section class="group component-family" id="components-' + family.id + '" aria-labelledby="heading-' + family.id + '">' +
          '<header class="group-head"><h2 class="group-title" id="heading-' + family.id + '" tabindex="-1">' + family.name + '</h2></header>' +
          '<div class="component-grid">' + family.items.join("") + '</div></section>';
      }).join("");

    document.querySelectorAll("[data-indeterminate]").forEach(function (el) { el.indeterminate = true; });
  }

  /* ================= SAVED ================= */
  var SAVE_KEY = "designSystemSaved";
  var CATEGORY_KEY = "designSystemCategories";
  var NEW_CATEGORY = "__new__";
  var DEFAULT_CATEGORIES = ["Typography", "Design", "Inspiration", "Colour", "Component", "Other"];
  var customCategories = [];
  var saved = [];
  var savedFilter = "all";
  var lastCategory = DEFAULT_CATEGORIES[0];
  var addingLinkTo = null;
  var editingId = null;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function allCategories() { return DEFAULT_CATEGORIES.concat(customCategories); }

  /* Existing category with the same name (ignoring case), so "portfolio" and "Portfolio" stay one tab. */
  function findCategory(name) {
    var lower = name.toLowerCase();
    return allCategories().filter(function (c) { return c.toLowerCase() === lower; })[0] || null;
  }

  function addCategory(name) {
    var existing = findCategory(name);
    if (existing) return existing;
    customCategories.push(name);
    try { localStorage.setItem(CATEGORY_KEY, JSON.stringify(customCategories)); } catch (err) {}
    return name;
  }

  /* "" for empty, an absolute http(s) URL otherwise, null if it isn't a usable web link. */
  function normalizeLink(raw) {
    var text = String(raw || "").trim();
    if (!text) return "";
    if (/\s/.test(text)) return null;
    if (!/^https?:\/\//i.test(text)) {
      /* Another scheme (javascript:, mailto:, ftp://…) is not a web link; "localhost:4321" is a host and port. */
      if (/^[a-z][a-z0-9+.-]*:(?!\d)/i.test(text)) return null;
      text = (/^localhost(?![\w.-])/i.test(text) ? "http://" : "https://") + text;
    }
    try {
      var url = new URL(text);
      var host = url.hostname;
      return host.indexOf(".") !== -1 || host === "localhost" ? url.href : null;
    } catch (err) { return null; }
  }

  function linkLabel(href) {
    var url = new URL(href);
    return (url.host + url.pathname + url.search).replace(/\/$/, "");
  }

  function loadSaved() {
    var list = [];
    try {
      var cats = JSON.parse(localStorage.getItem(CATEGORY_KEY) || "[]");
      if (Array.isArray(cats)) {
        cats.forEach(function (c) { if (typeof c === "string" && c.trim() && !findCategory(c.trim())) customCategories.push(c.trim()); });
      }
      list = JSON.parse(localStorage.getItem(SAVE_KEY) || "[]");
    } catch (err) { list = []; }
    saved = Array.isArray(list) ? list.filter(function (it) {
      return it && typeof it.id === "string" && typeof it.title === "string" && typeof it.category === "string" && it.category;
    }) : [];
    saved.forEach(function (it) {
      it.category = addCategory(it.category);
      var links = (Array.isArray(it.links) ? it.links : []).concat(it.link ? [it.link] : []);
      it.links = [];
      links.forEach(function (href) {
        var clean = normalizeLink(href);
        if (clean && it.links.indexOf(clean) === -1) it.links.push(clean);
      });
      delete it.link;
    });

    /* One-time cleanup: a note that is just a localhost address was a test leftover, so empty it. */
    var cleaned = false;
    saved.forEach(function (it) {
      if (typeof it.note === "string" && /^\s*(https?:\/\/)?localhost(:\d+)?\/?\s*$/i.test(it.note)) {
        it.note = "";
        cleaned = true;
      }
    });
    if (cleaned) persistSaved();
  }

  function persistSaved() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(saved)); } catch (err) {}
  }

  function renderSaveForm(selected) {
    var current = selected || lastCategory;
    if (!findCategory(current)) current = DEFAULT_CATEGORIES[0];
    $("save-category").innerHTML = allCategories().map(function (c) {
      return '<option value="' + esc(c) + '"' + (c === current ? " selected" : "") + '>' + esc(c) + '</option>';
    }).join("") + '<option value="' + NEW_CATEGORY + '">+ New category…</option>';
    syncNewCategoryField();
  }

  function syncNewCategoryField() {
    var isNew = $("save-category").value === NEW_CATEGORY;
    $("save-new-field").hidden = !isNew;
    $("save-new").required = isNew;
    if (!isNew) clearFieldError("save-new");
  }

  function clearFieldError(inputId) {
    var input = $(inputId);
    input.closest(".field").classList.remove("is-error");
    var help = $(inputId + "-help");
    if (help) help.hidden = true;
    input.removeAttribute("aria-invalid");
  }

  function setFieldError(inputId) {
    var input = $(inputId);
    input.closest(".field").classList.add("is-error");
    $(inputId + "-help").hidden = false;
    input.setAttribute("aria-invalid", "true");
    input.focus();
  }

  function updateSavedCount() {
    var el = $("saved-count");
    if (el) { el.textContent = saved.length ? String(saved.length) : ""; }
  }

  function countIn(category) {
    return saved.filter(function (it) { return it.category === category; }).length;
  }

  function renderSaved() {
    /* Every category you created gets a tab, even while empty; built-in ones appear once they hold something. */
    var tabs = allCategories().filter(function (c) {
      return customCategories.indexOf(c) !== -1 || countIn(c) > 0;
    });
    if (savedFilter !== "all" && tabs.indexOf(savedFilter) === -1) { savedFilter = "all"; }
    var list = saved.filter(function (it) { return savedFilter === "all" || it.category === savedFilter; });
    var addLabel = savedFilter === "all" ? "Save here" : "Add to " + savedFilter;

    var html = "";
    if (!saved.length && !customCategories.length) {
      html = '<div class="saved-bar"><nav class="filter-bar saved-filters" aria-label="Saved filters">' +
        '<button type="button" data-saved-filter="all" aria-pressed="true">All · 0</button></nav></div>' +
        '<div class="saved-empty">' + I.bookmark +
        '<strong>Nothing saved yet</strong>' +
        '<span>Found something worth keeping? Add it from <em>Save here</em> in the sidebar.</span>' +
        '<button class="btn btn--primary btn--sm" type="button" data-saved-add>' + I.plus + 'Save here</button></div>';
    } else {
      html = '<div class="saved-bar"><nav class="filter-bar saved-filters" aria-label="Saved filters">' +
        ['all'].concat(tabs).map(function (f) {
          var n = f === "all" ? saved.length : countIn(f);
          return '<button type="button" data-saved-filter="' + esc(f) + '" aria-pressed="' + (f === savedFilter) + '">' +
            (f === "all" ? "All" : esc(f)) + ' · ' + n + '</button>';
        }).join("") + '</nav>' +
        '<button class="btn btn--secondary btn--sm" type="button" data-saved-add>' + I.plus + esc(addLabel) + '</button></div>';
      if (list.length) {
        html += '<section class="group"><div class="saved-grid">' + list.map(function (it) {
          var adding = it.id === addingLinkTo;
          return '<article class="card saved-card" data-name="' + esc(key([it.title, it.category, it.links.join(" "), it.note || ""])) + '">' +
            '<div class="saved-card-head"><span class="badge badge--accent">' + esc(it.category) + '</span>' +
              '<div class="saved-card-actions">' +
                '<button class="btn btn--ghost btn--icon btn--sm" type="button" data-saved-edit="' + esc(it.id) + '" aria-label="Edit ' + esc(it.title) + '">' + I.edit + '</button>' +
                '<button class="btn btn--ghost btn--icon btn--sm" type="button" data-saved-addlink="' + esc(it.id) + '" aria-expanded="' + adding + '" aria-label="Add a link to ' + esc(it.title) + '">' + I.plus + '</button>' +
                '<button class="btn btn--ghost btn--icon btn--sm" type="button" data-saved-delete="' + esc(it.id) + '" aria-label="Remove ' + esc(it.title) + '">' + I.trash + '</button>' +
              '</div></div>' +
            '<h3 class="saved-card-title">' + esc(it.title) + '</h3>' +
            (it.note ? '<p class="saved-card-note">' + esc(it.note) + '</p>' : "") +
            (it.links.length ? '<ul class="saved-links">' + it.links.map(function (href, i) {
              return '<li><a class="saved-card-link" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(linkLabel(href)) + '</span>' + I.arrowUpRight + '</a>' +
                '<button class="saved-link-remove" type="button" data-saved-linkremove="' + esc(it.id) + '" data-index="' + i + '" aria-label="Remove link ' + esc(linkLabel(href)) + '">' + I.x + '</button></li>';
            }).join("") + '</ul>' : "") +
            (adding ? '<form class="saved-link-form" data-saved-linkform="' + esc(it.id) + '" novalidate>' +
              '<div class="saved-link-row"><input class="input saved-link-input" type="text" inputmode="url" maxlength="500" placeholder="Paste a link, press Enter" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" aria-label="Link to add to ' + esc(it.title) + '. Press Enter to save." aria-describedby="saved-link-help"></div>' +
              '<span class="field-help saved-link-help" id="saved-link-help" hidden></span></form>' : "") +
            '<span class="saved-card-foot">' + new Date(it.savedAt).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) + '</span>' +
          '</article>';
        }).join("") + '</div></section>';
      } else {
        html += '<div class="saved-empty">' + I.bookmark +
          '<strong>' + (savedFilter === "all" ? "Nothing saved yet" : "Nothing in " + esc(savedFilter) + " yet") + '</strong>' +
          '<span>Use <em>' + esc(addLabel) + '</em> to put the first one here.</span></div>';
      }
    }
    $("body-saved").innerHTML = html;
    updateSavedCount();
  }

  var toastTimer = null;

  function showToast(html) {
    var toast = $("toast");
    toast.innerHTML = html;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, 6000);
  }

  function hideToast() {
    clearTimeout(toastTimer);
    $("toast").hidden = true;
  }

  function resetSaveForm() {
    $("save-form").reset();
    clearFieldError("save-title");
    clearFieldError("save-new");
  }

  /* `category` preselects a tab, e.g. when adding from inside Portfolio. Without it, the last category used. */
  function openSaveDialog(category, item) {
    var dialog = $("save-dialog");
    if (dialog.open) return;
    setNavOpen(false);
    resetSaveForm();
    editingId = item ? item.id : null;
    $("save-dialog-title").textContent = item ? "Edit saved item" : "Save here";
    $("save-submit").textContent = item ? "Save changes" : "Save";
    renderSaveForm(item ? item.category : category);
    if (item) {
      $("save-title").value = item.title;
      $("save-note").value = item.note || "";
    }
    dialog.showModal();
    $("save-title").focus();
    if (item) $("save-title").select();
  }

  function closeSaveDialog() {
    var dialog = $("save-dialog");
    if (dialog.open) dialog.close();
  }

  function submitSave() {
    var title = $("save-title").value.trim();
    var creating = $("save-category").value === NEW_CATEGORY;
    var newName = creating ? $("save-new").value.trim().replace(/\s+/g, " ") : "";
    /* Flag every problem; the last one flagged takes focus, so go bottom-up to land on the first in reading order. */
    if (creating && !newName) setFieldError("save-new");
    if (!title) setFieldError("save-title");
    if (!title || (creating && !newName)) return;

    var category = creating ? addCategory(newName) : $("save-category").value;
    lastCategory = category;
    var editing = editingId && saved.filter(function (it) { return it.id === editingId; })[0];
    if (editing) {
      editing.title = title;
      editing.category = category;
      editing.note = $("save-note").value.trim();
      /* Keep the item in view: if its tab changed, follow it there. */
      if (savedFilter !== "all") savedFilter = category;
    } else {
      saved.unshift({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        title: title,
        category: category,
        links: [],
        note: $("save-note").value.trim(),
        savedAt: new Date().toISOString()
      });
    }
    editingId = null;
    persistSaved();
    renderSaved();
    applyFilter();
    closeSaveDialog();
    showToast(I.check + '<span>' + (editing ? "Changes saved in " : "Saved to ") + esc(category) + '</span><button type="button" data-view-saved="' + esc(category) + '">View</button>');
  }

  /* ================= EVENTS ================= */
  function openLinkField(id) {
    addingLinkTo = id;
    renderSaved();
    applyFilter();
    var input = document.querySelector(".saved-link-input");
    if (input) input.focus();
  }

  function closeLinkField(id) {
    addingLinkTo = null;
    renderSaved();
    applyFilter();
    var plus = document.querySelector('[data-saved-addlink="' + id + '"]');
    if (plus) plus.focus();
  }

  function submitLink(form) {
    var id = form.getAttribute("data-saved-linkform");
    var input = form.querySelector(".saved-link-input");
    var help = form.querySelector(".saved-link-help");
    var link = normalizeLink(input.value);
    if (!link) {
      help.textContent = link === "" ? "Paste a link to save." : "Enter a valid web link, like https://example.com.";
      help.hidden = false;
      input.setAttribute("aria-invalid", "true");
      input.focus();
      return;
    }
    var item = saved.filter(function (it) { return it.id === id; })[0];
    if (item && item.links.indexOf(link) === -1) {
      item.links.push(link);
      persistSaved();
    }
    closeLinkField(id);
  }

  document.addEventListener("submit", function (e) {
    if (e.target.id === "save-form") { e.preventDefault(); submitSave(); return; }
    if (e.target.hasAttribute("data-saved-linkform")) { e.preventDefault(); submitLink(e.target); }
  });

  document.addEventListener("input", function (e) {
    if (e.target.id === "save-title" || e.target.id === "save-new") clearFieldError(e.target.id);
    if (e.target.classList.contains("saved-link-input")) {
      e.target.removeAttribute("aria-invalid");
      e.target.closest("form").querySelector(".saved-link-help").hidden = true;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && e.target.classList.contains("saved-link-input")) {
      closeLinkField(addingLinkTo);
    }
  });

  document.addEventListener("change", function (e) {
    if (e.target.id !== "save-category") return;
    syncNewCategoryField();
    if (e.target.value === NEW_CATEGORY) $("save-new").focus();
  });

  document.addEventListener("click", function (e) {
    var t = e.target;

    if (t.closest("#save-open")) { openSaveDialog(); return; }
    if (t.closest("#save-close") || t.closest("#save-cancel")) { closeSaveDialog(); return; }
    if (t.id === "save-dialog") {
      var box = t.getBoundingClientRect();
      if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) { closeSaveDialog(); }
      return;
    }

    var viewSaved = t.closest("[data-view-saved]");
    if (viewSaved) {
      savedFilter = viewSaved.getAttribute("data-view-saved") || "all";
      hideToast();
      renderSaved();
      show("saved");
      setNavOpen(false);
      window.scrollTo(0, 0);
      return;
    }

    if (t.closest("[data-saved-add]")) { openSaveDialog(savedFilter === "all" ? undefined : savedFilter); return; }

    var savedFilterBtn = t.closest("[data-saved-filter]");
    if (savedFilterBtn) {
      savedFilter = savedFilterBtn.getAttribute("data-saved-filter");
      renderSaved();
      applyFilter();
      return;
    }

    var editBtn = t.closest("[data-saved-edit]");
    if (editBtn) {
      var editItem = saved.filter(function (it) { return it.id === editBtn.getAttribute("data-saved-edit"); })[0];
      if (editItem) openSaveDialog(undefined, editItem);
      return;
    }

    var addLinkBtn = t.closest("[data-saved-addlink]");
    if (addLinkBtn) {
      var linkId = addLinkBtn.getAttribute("data-saved-addlink");
      if (addingLinkTo === linkId) { closeLinkField(linkId); } else { openLinkField(linkId); }
      return;
    }

    var linkRemove = t.closest("[data-saved-linkremove]");
    if (linkRemove) {
      var owner = saved.filter(function (it) { return it.id === linkRemove.getAttribute("data-saved-linkremove"); })[0];
      if (owner) {
        owner.links.splice(parseInt(linkRemove.getAttribute("data-index"), 10), 1);
        persistSaved();
        renderSaved();
        applyFilter();
      }
      return;
    }

    var savedDelete = t.closest("[data-saved-delete]");
    if (savedDelete) {
      var id = savedDelete.getAttribute("data-saved-delete");
      saved = saved.filter(function (it) { return it.id !== id; });
      persistSaved();
      renderSaved();
      applyFilter();
      return;
    }

    if (t.closest("#menu-trigger")) { setNavOpen(true); $("sidebar-close").focus(); return; }
    if (t.closest("#sidebar-close") || t.closest("#scrim")) { setNavOpen(false); $("menu-trigger").focus(); return; }

    var backTrigger = t.closest("#back-trigger");
    if (backTrigger) {
      window.history.back();
      return;
    }

    var brand = t.closest(".brand");
    if (brand) {
      e.preventDefault();
      show("components");
      setNavOpen(false);
      window.scrollTo(0, 0);
      return;
    }

    var navLink = t.closest(".nav-link");
    if (navLink) { show(navLink.getAttribute("data-section")); setNavOpen(false); window.scrollTo(0, 0); return; }

    var typographyFilterBtn = t.closest("[data-typography-filter]");
    if (typographyFilterBtn) {
      typographyFilter = typographyFilterBtn.getAttribute("data-typography-filter");
      applyTypographyFilter();
      revealFilters(".typography-filters");
      return;
    }

    var colorFilterBtn = t.closest("[data-color-filter]");
    if (colorFilterBtn) {
      colorFilter = colorFilterBtn.getAttribute("data-color-filter");
      applyColorFilter();
      revealFilters(".color-filters");
      return;
    }

    var colorModeBtn = t.closest("[data-color-variable-mode]");
    if (colorModeBtn) {
      colorVariableMode = colorModeBtn.getAttribute("data-color-variable-mode");
      renderVariables();
      applyFilter();
      return;
    }

    var variableFilterBtn = t.closest("[data-variable-filter]");
    if (variableFilterBtn) {
      variableFilter = variableFilterBtn.getAttribute("data-variable-filter");
      applyVariableFilter();
      revealFilters(".variable-filters");
      return;
    }

    var pageFilterBtn = t.closest("[data-page-filter]");
    if (pageFilterBtn) {
      var filterPage = pageFilterBtn.closest(".page");
      pageFilters[filterPage.id] = pageFilterBtn.getAttribute("data-page-filter");
      applyPageFilter(filterPage);
      applyFilter();
      revealFilters("#" + filterPage.id + " .page-filters");
      return;
    }

    var componentFilter = t.closest("[data-component-filter]");
    if (componentFilter) {
      var filter = componentFilter.getAttribute("data-component-filter");
      document.querySelectorAll("[data-component-filter]").forEach(function (button) {
        button.setAttribute("aria-pressed", button === componentFilter ? "true" : "false");
      });
      document.querySelectorAll(".component-family").forEach(function (family) {
        family.classList.toggle("is-filtered-out", filter !== "all" && family.id !== "components-" + filter);
      });
      if (searchInput) { searchInput.value = ""; applyFilter(); }
      revealFilters(".component-jumps");
      return;
    }

    var platformBtn = t.closest("[data-platform]");
    if (platformBtn) {
      var next = platformBtn.getAttribute("data-platform");
      if (next !== platform) {
        platform = next;
        renderTypography();
        applyFilter();
        document.querySelector('[data-platform="' + next + '"]').focus();
        try { localStorage.setItem("designSystemPlatform", next); } catch (err) {}
      }
      return;
    }

    var groupBtn = t.closest(".btn-group > .btn");
    if (groupBtn) {
      groupBtn.parentNode.querySelectorAll(".btn").forEach(function (b) {
        b.setAttribute("aria-pressed", b === groupBtn ? "true" : "false");
      });
      return;
    }

    var toggle = t.closest("[data-toggle]");
    if (toggle) { toggle.setAttribute("aria-pressed", toggle.getAttribute("aria-pressed") === "true" ? "false" : "true"); return; }

    var tab = t.closest('.tabs [role="tab"]');
    if (tab) {
      tab.parentNode.querySelectorAll('[role="tab"]').forEach(function (b) { b.setAttribute("aria-selected", b === tab ? "true" : "false"); });
      return;
    }

    var segment = t.closest(".segment");
    if (segment) {
      segment.parentNode.querySelectorAll(".segment").forEach(function (b) { b.setAttribute("aria-pressed", b === segment ? "true" : "false"); });
      return;
    }

    var chip = t.closest("[data-chip]");
    if (chip) {
      var on = chip.getAttribute("aria-pressed") !== "true";
      chip.setAttribute("aria-pressed", on ? "true" : "false");
      chip.classList.remove("is-hover");
      var first = chip.querySelector("svg");
      if (on && !first) { chip.insertAdjacentHTML("afterbegin", I.check); }
      if (!on && first) { first.remove(); }
      return;
    }

    var row = t.closest(".list-row");
    if (row) {
      row.parentNode.querySelectorAll(".list-row").forEach(function (r) {
        if (r === row) { r.setAttribute("aria-current", "true"); } else { r.removeAttribute("aria-current"); }
      });
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.documentElement.classList.contains("is-nav-open")) {
      setNavOpen(false);
      $("menu-trigger").focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 960) { setNavOpen(false); }
  });

  window.addEventListener("hashchange", function () { show(location.hash.slice(1)); });

  /* ================= INIT ================= */
  var saved = {};
  try {
    saved.section = localStorage.getItem("designSystemSection");
    saved.platform = localStorage.getItem("designSystemPlatform");
  } catch (err) {}
  if (saved.platform === "mobile") { platform = "mobile"; }

  /* search is always in the top bar: it filters the cards on the page you are on */
  searchInput = $("search");
  searchInput.addEventListener("input", applyFilter);
  searchInput.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    this.value = "";
    applyFilter();
    this.blur();
  });

  loadSaved();
  renderNav();
  renderPages();
  renderSaved();
  renderTypography();
  renderColors();
  renderAnimations();
  renderPrinciples();
  renderHeuristics();
  renderResearch();
  renderPatterns();
  renderProduct();
  renderVariables();
  renderButtons();
  renderComponents();
  show(location.hash.slice(1) || "components");
})();
