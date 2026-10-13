/* ============================================================
   Design System — Content
   Everything the documentation shows, in one place.
   ============================================================ */
(function (global) {
  "use strict";

  /* ================= ICONS ================= */
  function icon(paths, filled) {
    return '<svg viewBox="0 0 24 24" fill="' + (filled ? "currentColor" : "none") + '" stroke="' + (filled ? "none" : "currentColor") +
      '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
  }
  var ICONS = {
    edit: icon('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'),
    arrowUpRight: icon('<path d="M7 17 17 7M8 7h9v9"/>'),
    bookmark: icon('<path d="M7 4h10v16l-5-4-5 4z"/>'),
    plus: icon('<path d="M12 5v14M5 12h14"/>'),
    arrowRight: icon('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    chevronDown: icon('<path d="M6 9l6 6 6-6"/>'),
    chevronRight: icon('<path d="M9 6l6 6-6 6"/>'),
    download: icon('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'),
    trash: icon('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
    heart: icon('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>'),
    heartFilled: icon('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>', true),
    check: icon('<path d="M5 12l5 5 9-10"/>'),
    x: icon('<path d="M6 6l12 12M18 6L6 18"/>'),
    search: icon('<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>'),
    info: icon('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
    checkCircle: icon('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>'),
    alertTriangle: icon('<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17h.01"/>'),
    alertCircle: icon('<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>'),
    replay: icon('<path d="M4 12a8 8 0 1 0 2.3-5.6"/><path d="M4 4v4h4"/>'),
    bell: icon('<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
    copy: icon('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>'),
    sun: icon('<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'),
    moon: icon('<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>'),
    monitor: icon('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
    layers: icon('<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 8l9 5 9-5"/>'),
    grid: icon('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'),
    /* sidebar: one per section */
    navComponents: icon('<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>'),
    navAnimations: icon('<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5.5 3.5-5.5 3.5z"/>'),
    navButtons: icon('<rect x="3" y="7" width="18" height="10" rx="5"/><path d="M8 12h8"/>'),
    navColors: icon('<path d="M12 3s6 6.2 6 10.5a6 6 0 0 1-12 0C6 9.2 12 3 12 3z"/>'),
    navTypography: icon('<path d="M5 7V5h14v2M12 5v14M9 19h6"/>'),
    navVariables: icon('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>'),
    navPrinciples: icon('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>'),
    navHeuristics: icon('<path d="M10 6h10M10 12h10M10 18h10"/><path d="M3.5 6l1.2 1.2L7 4.8M3.5 12l1.2 1.2L7 10.8M3.5 18l1.2 1.2L7 16.8"/>'),
    navResearch: icon('<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 5.2a3 3 0 0 1 0 5.6M18 20a6 6 0 0 0-3-5.2"/>'),
    navPatterns: icon('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>'),
    navProduct: icon('<path d="M5 20v-8M12 20V5M19 20v-11"/>')
  };

  /* ================= SECTIONS ================= */
  var SECTIONS = [
    { id: "components", icon: "navComponents", group: "Sections", name: "Components",
      intro: "The essentials, with their states and sizes." },
    { id: "animations", icon: "navAnimations", group: "Sections", name: "Animations",
      intro: "Twelve motions that cover most interfaces." },
    { id: "buttons", icon: "navButtons", group: "Sections", name: "Buttons",
      intro: "Six types, three sizes, seven states." },
    { id: "colors", icon: "navColors", group: "Sections", name: "Colors",
      intro: "Black, white and grey. Nothing else." },
    { id: "typography", icon: "navTypography", group: "Sections", name: "Typography",
      intro: "One typeface. Ten styles." },
    { id: "variables", icon: "navVariables", group: "Sections", name: "Variables",
      intro: "Every value, ready to use as a Figma variable." },
    { id: "principles", icon: "navPrinciples", group: "Sections", name: "Principles",
      intro: "What good design asks of you." },
    { id: "heuristics", icon: "navHeuristics", group: "Sections", name: "Heuristics",
      intro: "Ten rules to judge any interface." },
    { id: "research", icon: "navResearch", group: "Sections", name: "Research",
      intro: "Eight ways to learn from people." },
    { id: "patterns", icon: "navPatterns", group: "Sections", name: "Patterns",
      intro: "Eight screens almost every product needs." },
    { id: "product", icon: "navProduct", group: "Sections", name: "Product",
      intro: "What to build first, and how to know it worked." },
    { id: "saved", icon: "bookmark", group: "Sections", name: "Saved",
      intro: "Your notes. Kept on this device only." }
  ];

  /* ================= TYPOGRAPHY ================= */
  var TYPEFACE = {
    name: "Poppins",
    weights: [
      { value: 400, name: "Regular" },
      { value: 500, name: "Medium" },
      { value: 600, name: "SemiBold" },
      { value: 700, name: "Bold" }
    ]
  };

  // web / mobile: [size, line height] in px. tracking in %.
  var TYPE_STYLES = [
    { name: "Display", weight: 700, tracking: -1, web: [48, 56], mobile: [34, 40],
      use: "Hero and marketing headlines. One per screen.", sample: "Design that moves" },
    { name: "Heading 1", weight: 700, tracking: -0.5, web: [36, 44], mobile: [28, 34],
      use: "Page titles.", sample: "Design with clarity" },
    { name: "Heading 2", weight: 600, tracking: -0.5, web: [28, 36], mobile: [24, 30],
      use: "Section titles.", sample: "Every component has a role" },
    { name: "Heading 3", weight: 600, tracking: 0, web: [22, 30], mobile: [20, 26],
      use: "Card and dialog titles.", sample: "Component variants" },
    { name: "Title", weight: 600, tracking: 0, web: [18, 26], mobile: [17, 24],
      use: "List headers, nav bar titles, emphasised lines.", sample: "Project settings" },
    { name: "Body Large", weight: 400, tracking: 0, web: [16, 26], mobile: [17, 26],
      use: "Intro paragraphs and long reading.", sample: "A clear system helps every screen feel connected." },
    { name: "Body", weight: 400, tracking: 0, web: [14, 22], mobile: [16, 24],
      use: "Default interface text and input values.", sample: "Use named styles and component variants consistently." },
    { name: "Label", weight: 600, tracking: 0, web: [13, 18], mobile: [15, 20],
      use: "Buttons, tabs, form labels, menu items.", sample: "Save changes" },
    { name: "Caption", weight: 500, tracking: 0, web: [12, 16], mobile: [13, 18],
      use: "Helper text, metadata, timestamps.", sample: "Edited 2 minutes ago" },
    { name: "Overline", weight: 600, tracking: 8, upper: true, web: [12, 16], mobile: [12, 16],
      use: "Eyebrows above headings, small section labels.", sample: "Foundations" }
  ];

  var PLATFORMS = {
    web: {
      name: "Web",
      frame: "design.system",
      notes: [
        "Body is 14px — dense, pointer-driven screens read at arm's length.",
        "Headlines run large (Display 48px) because wide screens have room for them.",
        "Use these styles on any screen 640px wide and up."
      ]
    },
    mobile: {
      name: "Mobile",
      frame: "9:41",
      notes: [
        "Body is 16px. Text fields smaller than 16px make iPhones zoom the whole page.",
        "12px is the smallest text on mobile — nothing smaller stays readable in hand.",
        "Headlines are up to 29% smaller so a title fits in two lines on a 360px screen.",
        "Use these styles below 640px wide."
      ]
    }
  };

  /* ================= COLOURS ================= */
  var ACCENT = {
    name: "Mono",
    light: { step: 900, name: "Mono 900", hex: "#171717" },
    dark: { step: 100, name: "Mono 100", hex: "#F3F3F3" }
  };

  var ACCENT_SCALE = [
    { step: 50, name: "Mono 50", hex: "#FAFAFA" }, { step: 100, name: "Mono 100", hex: "#F3F3F3" }, { step: 200, name: "Mono 200", hex: "#E5E5E5" },
    { step: 300, name: "Mono 300", hex: "#D1D1D1" }, { step: 400, name: "Mono 400", hex: "#A3A3A3" }, { step: 500, name: "Mono 500", hex: "#737373" },
    { step: 600, name: "Mono 600", hex: "#525252" }, { step: 700, name: "Mono 700", hex: "#404040" }, { step: 800, name: "Mono 800", hex: "#262626" },
    { step: 900, name: "Mono 900", hex: "#171717" }, { step: 950, name: "Mono 950", hex: "#0A0A0A" }
  ];

  var NEUTRAL_SCALE = [
    { step: 0, name: "White", hex: "#FFFFFF" }, { step: 50, name: "Cloud", hex: "#FAFAFA" }, { step: 100, name: "Pale gray", hex: "#F3F3F3" },
    { step: 200, name: "Light gray", hex: "#E5E5E5" }, { step: 300, name: "Soft gray", hex: "#D1D1D1" }, { step: 400, name: "Mid gray", hex: "#A3A3A3" },
    { step: 500, name: "Gray", hex: "#737373" }, { step: 600, name: "Dark gray", hex: "#525252" }, { step: 700, name: "Charcoal", hex: "#404040" },
    { step: 800, name: "Deep charcoal", hex: "#262626" }, { step: 900, name: "Ink", hex: "#171717" }, { step: 950, name: "Near black", hex: "#0A0A0A" },
    { step: 1000, name: "Black", hex: "#000000" }
  ];

  var STATUS = [
    { name: "Success", light: "#262626", dark: "#D1D1D1", badge: "success", icon: "checkCircle",
      use: "Completed actions, valid input, positive change. Told apart by its icon and label, since the palette has no hue." },
    { name: "Warning", light: "#525252", dark: "#A3A3A3", badge: "warning", icon: "alertTriangle",
      use: "Needs attention soon. Nothing is broken yet." },
    { name: "Danger", light: "#404040", dark: "#A3A3A3", badge: "danger", icon: "alertCircle",
      use: "Errors, failed states and destructive actions." }
  ];

  // [label, css colour] per mode
  var COLOR_VARIABLES = [
    { name: "bg/page", light: ["Pale gray", "#F3F3F3"], dark: ["Near black", "#0A0A0A"], use: "Page background" },
    { name: "bg/surface", light: ["White", "#FFFFFF"], dark: ["Ink", "#171717"], use: "Cards, inputs, menus" },
    { name: "bg/sunken", light: ["Pale gray", "#F3F3F3"], dark: ["Black", "#000000"], use: "Wells and tracks inside a surface" },
    { name: "text/primary", light: ["Near black", "#0A0A0A"], dark: ["Cloud", "#FAFAFA"], use: "Headings and body" },
    { name: "text/secondary", light: ["Charcoal", "#404040"], dark: ["Soft gray", "#D1D1D1"], use: "Supporting text" },
    { name: "text/tertiary", light: ["Dark gray", "#525252"], dark: ["Mid gray", "#A3A3A3"], use: "Captions and placeholders" },
    { name: "text/on-accent", light: ["White", "#FFFFFF"], dark: ["Black", "#000000"], use: "Text on accent fills" },
    { name: "border/default", light: ["Black · 20% opacity", "rgba(0,0,0,.20)"], dark: ["White · 18% opacity", "rgba(255,255,255,.18)"], use: "Card edges and dividers" },
    { name: "border/strong", light: ["Black · 46% opacity", "rgba(0,0,0,.46)"], dark: ["White · 42% opacity", "rgba(255,255,255,.42)"], use: "Input and button outlines" },
    { name: "accent/default", light: ["Mono 900", "#171717"], dark: ["Mono 100", "#F3F3F3"], use: "The primary action" },
    { name: "accent/tint", light: ["Mono 200", "#E5E5E5"], dark: ["White · 14% opacity", "rgba(255,255,255,.14)"], use: "Selected backgrounds" },
    { name: "accent/text", light: ["Mono 900", "#171717"], dark: ["Mono 100", "#F3F3F3"], use: "Links and action labels" },
    { name: "focus/ring", light: ["Mono 900", "#171717"], dark: ["Mono 300", "#D1D1D1"], use: "Keyboard focus outline" },
    { name: "status/success", light: ["Deep charcoal", "#262626"], dark: ["Soft gray", "#D1D1D1"], use: "Success text, icons and fills — paired with a check icon" },
    { name: "status/warning", light: ["Dark gray", "#525252"], dark: ["Mid gray", "#A3A3A3"], use: "Warning text, icons and fills — paired with a warning icon" },
    { name: "status/danger", light: ["Charcoal", "#404040"], dark: ["Mid gray", "#A3A3A3"], use: "Error text, icons and danger buttons" }
  ];

  // Checked against the surface they actually sit on.
  var CONTRAST_PAIRS = [
    { fg: "text/primary", bg: "bg/page", use: "Body text on the page" },
    { fg: "text/secondary", bg: "bg/surface", use: "Supporting text on cards" },
    { fg: "text/tertiary", bg: "bg/surface", use: "Captions on cards" },
    { fg: "text/on-accent", bg: "accent/default", use: "Primary button label" },
    { fg: "accent/text", bg: "bg/surface", use: "Links on cards" },
    { fg: "accent/text", bg: "accent/tint", use: "Selected chip label", over: "bg/surface" },
    { fg: "status/danger", bg: "bg/surface", use: "Error message" },
    { fg: "inverse/text", bg: "inverse/surface", use: "Toast text" }
  ];

  /* ================= VARIABLES ================= */
  var VARIABLE_COLLECTIONS = [
    { id: "spacing", name: "Spacing", unit: "px", desc: "A 4px base. Most layouts only need 8, 16, 24 and 32.", rows: [
      ["space/1", 4, "Icon to label, tight inline gaps"],
      ["space/2", 8, "Gaps inside controls and between related items"],
      ["space/4", 16, "Default component padding, mobile margins"],
      ["space/6", 24, "Gaps between cards, tablet margins"],
      ["space/8", 32, "Section spacing within a page, desktop margins"],
      ["space/12", 48, "Large section breaks"],
    ] },
    { id: "radius", name: "Radius", unit: "px", desc: "Corners grow with the size of the thing they round.", rows: [
      ["radius/xs", 4, "Checkboxes and small tags"],
      ["radius/md", 8, "Buttons, inputs and menus"],
      ["radius/lg", 12, "Cards and large buttons"],
      ["radius/xl", 16, "Dialogs and popovers"],
      ["radius/full", 999, "Pills, avatars and switches"]
    ] },
    { id: "sizing", name: "Sizing", unit: "px", desc: "Control heights sit on an 8px rhythm. Icons come in four sizes.", rows: [
      ["size/control-sm", 32, "Small buttons, compact inputs, chips"],
      ["size/control-md", 40, "Default buttons, inputs and tabs"],
      ["size/control-lg", 48, "Large buttons — the default on touch screens"],
      ["size/touch-min", 44, "Smallest tap area on mobile, even when the visual is smaller"],
      ["size/icon-sm", 16, "Icons in default buttons and inputs"],
      ["size/icon-lg", 24, "Navigation and standalone icons"]
    ] },
    { id: "border", name: "Border", unit: "px", desc: "One weight for edges, a heavier one for focus and selection.", rows: [
      ["border/width", 1, "All outlines and dividers"],
      ["border/width-strong", 2, "Focus rings and the selected-tab indicator"],
    ] },
    { id: "elevation", name: "Elevation", desc: "Shadows get larger and softer as a surface rises.", rows: [
      ["elevation/0", "None", "Flat — part of the page", 0],
      ["elevation/1", "Y 1 · Blur 2 · 8%", "Cards at rest", 1],
      ["elevation/3", "Y 8 · Blur 20 · 10%", "Menus, popovers and toasts", 3],
      ["elevation/4", "Y 20 · Blur 48 · 16%", "Dialogs and sheets", 4]
    ] },
    { id: "duration", name: "Duration", unit: "ms", desc: "Smaller things move faster. Nothing in the interface takes longer than 600ms.", rows: [
      ["duration/fast", 150, "Tooltips, checkboxes, switches"],
      ["duration/base", 250, "Menus, tabs, cards — most transitions"],
      ["duration/slow", 400, "Dialogs, drawers and sheets"],
    ] },
    { id: "easing", name: "Easing", desc: "Five curves cover every transition. Values paste straight into a custom bezier field.", easing: true, rows: [
      ["easing/standard", [0.2, 0, 0, 1], "Elements moving within the screen"],
      ["easing/enter", [0.05, 0.7, 0.1, 1], "Elements arriving — decelerate into place"],
      ["easing/exit", [0.3, 0, 0.8, 0.15], "Elements leaving — accelerate away"],
    ] },
    { id: "breakpoints", name: "Breakpoints & grid", desc: "Layouts switch at these widths. Mobile type styles apply below 640px.", grid: true, rows: [
      ["breakpoint/mobile", "0 – 639", "4 columns · 16 margin · 16 gutter", 4],
      ["breakpoint/tablet", "640 – 1023", "8 columns · 24 margin · 24 gutter", 8],
      ["breakpoint/desktop", "1024 – 1439", "12 columns · 32 margin · 24 gutter", 12],
      ["breakpoint/wide", "1440 +", "12 columns · 1280 max width · 24 gutter", 12]
    ] }
  ];

  /* ================= BUTTONS ================= */
  var BUTTON_VARIANTS = [
    { id: "primary", name: "Primary", label: "Save changes",
      use: "The main action on a screen — Save, Continue, Create.", avoid: "More than one on the same surface." },
    { id: "secondary", name: "Secondary", label: "Cancel",
      use: "Actions beside a primary — Cancel, Back, Edit.", avoid: "Using it for the main action to look calmer." },
    { id: "outline", name: "Outline", label: "Preview",
      use: "An alternative that still needs emphasis — Preview, Share.", avoid: "Next to a primary of equal importance." },
    { id: "ghost", name: "Ghost", label: "Skip",
      use: "Low-priority actions in toolbars, card footers and lists.", avoid: "On its own with nothing around it — it gets lost." },
    { id: "danger", name: "Danger", label: "Delete project",
      use: "Destructive actions — Delete, Remove, Revoke. Confirm first.", avoid: "Warnings that aren't destructive." },
    { id: "link", name: "Link", label: "Learn more",
      use: "Navigation inside text or a row — Learn more, View all.", avoid: "Actions that change or save data." }
  ];

  var BUTTON_STATES = [
    { id: "default", name: "Default", cls: "" },
    { id: "hover", name: "Hover", cls: "is-hover" },
    { id: "pressed", name: "Pressed", cls: "is-pressed" },
    { id: "focus", name: "Focused", cls: "is-focus" },
    { id: "selected", name: "Selected", cls: "is-selected" },
    { id: "disabled", name: "Disabled", disabled: true },
    { id: "loading", name: "Loading", cls: "is-loading" }
  ];

  var BUTTON_SIZES = [
    { id: "sm", name: "Small", cls: "btn--sm", height: 32, padding: 12, radius: 6, label: "Caption · SemiBold", icon: 14, gap: 6,
      use: "Tables, toolbars and dense cards." },
    { id: "md", name: "Medium", cls: "", height: 40, padding: 16, radius: 8, label: "Label · SemiBold", icon: 16, gap: 8,
      use: "The default for forms, dialogs and pages." },
    { id: "lg", name: "Large", cls: "btn--lg", height: 48, padding: 20, radius: 12, label: "Body Large · SemiBold", icon: 20, gap: 10,
      use: "Hero actions, and the default size on touch screens." }
  ];

  /* ================= REFERENCE: HEURISTICS, RESEARCH, PATTERNS, PRODUCT ================= */
  var HEURISTICS = [
    { n: "01", name: "Visibility of system status", tags: "clarity",
      text: "Always tell people what is happening, with feedback that arrives in time.",
      does: "Show upload progress, “Saved just now” and a selected state." },
    { n: "02", name: "Match the real world", tags: "clarity",
      text: "Use the words, order and ideas people already know, not internal terms.",
      does: "“Shopping bag”, “Trash”, “Sign in”." },
    { n: "03", name: "User control and freedom", tags: "control",
      text: "Give people a clearly marked way out of a mistake: undo, cancel, back.",
      does: "An Undo toast after deleting, and a Back step in every flow." },
    { n: "04", name: "Consistency and standards", tags: "clarity",
      text: "The same word and the same action should mean the same thing everywhere.",
      does: "One icon and one label for Save across the whole product." },
    { n: "05", name: "Error prevention", tags: "control",
      text: "Remove the conditions that cause mistakes, or ask before they become expensive.",
      does: "Date pickers, input masks, and a confirm step for irreversible actions." },
    { n: "06", name: "Recognition over recall", tags: "clarity",
      text: "Put options in view so people don’t have to remember them between screens.",
      does: "Recent searches, visible labels, and defaults from earlier answers." },
    { n: "07", name: "Flexibility and efficiency", tags: "control",
      text: "Keep it simple for beginners and give frequent users faster paths.",
      does: "Keyboard shortcuts, bulk actions, saved filters and templates." },
    { n: "08", name: "Aesthetic and minimal design", tags: "clarity",
      text: "Every extra element competes with the one that matters. Show what is needed now.",
      does: "One primary action per screen and detail revealed on demand." },
    { n: "09", name: "Recover from errors", tags: "support",
      text: "Say what went wrong in plain words and offer a way to fix it.",
      does: "“Password needs 8 characters. You have 6.” beside the field." },
    { n: "10", name: "Help and documentation", tags: "support",
      text: "Better when it is not needed, but when it is, make it short, searchable and task-based.",
      does: "Inline hints and help links that open at the right step." }
  ];

  /* Each method: when to use it, how many people, what you get back, and how much work it is. */
  var RESEARCH = [
    { family: "discover", name: "User interviews", kind: "Qualitative",
      text: "One-to-one conversations about goals, habits and frustrations.",
      use: "Early, before solutions exist", people: "5–8 per audience" },
    { family: "discover", name: "Diary study", kind: "Qualitative",
      text: "People log what happens over days or weeks as it happens.",
      use: "Behaviour that unfolds over time", people: "8–15" },
    { family: "discover", name: "Survey", kind: "Quantitative",
      text: "A short set of questions sent to many people.",
      use: "Sizing something you already saw in interviews", people: "100 or more" },
    { family: "organise", name: "Card sorting", kind: "Mixed",
      text: "People group content cards into categories that make sense to them.",
      use: "Before designing navigation or menus", people: "15–30" },
    { family: "organise", name: "Tree testing", kind: "Quantitative",
      text: "People find items in a text-only version of your structure.",
      use: "To check a structure before it is designed", people: "50 or more" },
    { family: "test", name: "Usability testing", kind: "Qualitative",
      text: "People attempt realistic tasks with a prototype or product while you watch.",
      use: "Before build, and again before launch", people: "5 per round" },
    { family: "test", name: "A/B test", kind: "Quantitative",
      text: "Two live versions run at once and one metric decides the winner.",
      use: "After launch, with enough traffic", people: "Enough for significance" },
    { family: "test", name: "Heuristic evaluation", kind: "Expert review",
      text: "Specialists review the design against a list of usability heuristics.",
      use: "A fast check before involving users", people: "3–5 evaluators" }
  ];

  /* Screen patterns: the wireframe for each id is drawn in app.js. */
  var PATTERNS = [
    { family: "start", id: "onboarding", name: "Onboarding",
      text: "Takes a new person to the first moment of value, one step at a time.",
      parts: ["Value in one line", "Progress", "One decision per step"] },
    { family: "start", id: "signin", name: "Sign in",
      text: "A short, forgiving way back into the product.",
      parts: ["Email", "Password with show", "Forgot link"] },
    { family: "core", id: "dashboard", name: "Dashboard",
      text: "Answers “how is it going?” at a glance and points to what needs attention.",
      parts: ["Key numbers", "One main chart", "Recent activity"] },
    { family: "core", id: "listdetail", name: "List and detail",
      text: "Browse many items on one side and inspect or edit one on the other.",
      parts: ["Filters", "List", "Selected state"] },
    { family: "core", id: "settings", name: "Settings",
      text: "Grouped controls that are easy to scan and safe to change.",
      parts: ["Grouped sections", "Help under labels", "Toggles"] },
    { family: "commerce", id: "checkout", name: "Cart and checkout",
      text: "Gets from a list of items to a paid order with as little friction as possible.",
      parts: ["Line items", "Order summary", "Guest option"] },
    { family: "states", id: "empty", name: "Empty state",
      text: "Turns “nothing here yet” into the first step.",
      parts: ["Short explanation", "Primary action", "Help link"] },
    { family: "states", id: "error", name: "Error page",
      text: "Explains what happened and gets people moving again.",
      parts: ["What happened", "What to do next", "Way back"] }
  ];

  var PRODUCT = [
    { family: "prioritise", name: "RICE", formula: "Reach × Impact × Confidence ÷ Effort",
      text: "Scores ideas on how many people they touch and how sure you are.",
      parts: [["R", "Reach"], ["I", "Impact"], ["C", "Confidence"], ["E", "Effort"]],
      best: "Comparing many ideas when you have real numbers." },
    { family: "prioritise", name: "MoSCoW",
      text: "Sorts a scope into what has to ship and what can wait.",
      parts: [["M", "Must"], ["S", "Should"], ["C", "Could"], ["W", "Won’t"]],
      best: "Fixing the scope of one release." },
    { family: "prioritise", name: "Impact and effort",
      text: "Place each idea by value against cost, then work in order.",
      parts: [["1", "Quick wins"], ["2", "Big bets"], ["3", "Fill-ins"], ["4", "Money pits"]],
      best: "Workshops where the team needs to agree fast." },
    { family: "prioritise", name: "Kano model",
      text: "Separates what people expect from what pleasantly surprises them.",
      parts: [["B", "Basic"], ["P", "Performance"], ["D", "Delight"]],
      best: "Deciding where to invest beyond table stakes." },
    { family: "metrics", name: "HEART",
      text: "Five angles on the user experience, each with goals, signals and metrics.",
      parts: [["H", "Happiness"], ["E", "Engagement"], ["A", "Adoption"], ["R", "Retention"], ["T", "Task success"]],
      best: "Judging a feature or redesign from the user’s side." },
    { family: "metrics", name: "AARRR",
      text: "The funnel from first visit to paying, returning customer.",
      parts: [["A", "Acquire"], ["A", "Activate"], ["R", "Retain"], ["R", "Refer"], ["R", "Revenue"]],
      best: "Finding which stage of the journey leaks the most." },
    { family: "metrics", name: "North Star metric",
      text: "A single measure the whole team moves together.",
      parts: [["1", "One metric"], ["V", "Customer value"], ["G", "Leads growth"]],
      best: "Aligning design, engineering and business on one goal." },
    { family: "metrics", name: "SUS",
      text: "The System Usability Scale: a standard questionnaire after a test.",
      parts: [["10", "Questions"], ["100", "Top score"], ["68", "Average"]],
      best: "Tracking perceived usability across releases." }
  ];

  global.DESIGN_SYSTEM = {
    HEURISTICS: HEURISTICS,
    RESEARCH: RESEARCH,
    PATTERNS: PATTERNS,
    PRODUCT: PRODUCT,
    ICONS: ICONS,
    SECTIONS: SECTIONS,
    TYPEFACE: TYPEFACE,
    TYPE_STYLES: TYPE_STYLES,
    PLATFORMS: PLATFORMS,
    ACCENT: ACCENT,
    ACCENT_SCALE: ACCENT_SCALE,
    NEUTRAL_SCALE: NEUTRAL_SCALE,
    STATUS: STATUS,
    COLOR_VARIABLES: COLOR_VARIABLES,
    CONTRAST_PAIRS: CONTRAST_PAIRS,
    VARIABLE_COLLECTIONS: VARIABLE_COLLECTIONS,
    BUTTON_VARIANTS: BUTTON_VARIANTS,
    BUTTON_STATES: BUTTON_STATES,
    BUTTON_SIZES: BUTTON_SIZES
  };
})(window);
