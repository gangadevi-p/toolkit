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
    navPrioritisation: icon('<path d="M4 6h8M4 12h6M4 18h4"/><path d="M17 20V5M13 9l4-4 4 4"/>'),
    navMetrics: icon('<path d="M5 20v-8M12 20V5M19 20v-11"/>'),
    navResources: icon('<path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z"/><path d="M20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z"/>'),
    navAccount: icon('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>')
  };

  /* ================= SECTIONS ================= */
  var SECTIONS = [
    { id: "components", icon: "navComponents", group: "UI", name: "Components",
      intro: "The essentials, with their states and sizes." },
    { id: "buttons", icon: "navButtons", group: "UI", name: "Buttons",
      intro: "Six types, three sizes, seven states." },
    { id: "colors", icon: "navColors", group: "UI", name: "Colors",
      intro: "Black, white and grey. Nothing else." },
    { id: "typography", icon: "navTypography", group: "UI", name: "Typography",
      intro: "One typeface. Ten styles." },
    { id: "variables", icon: "navVariables", group: "UI", name: "Variables",
      intro: "Every value, ready to use as a Figma variable." },
    { id: "animations", icon: "navAnimations", group: "UI", name: "Animations",
      intro: "Twelve motions that cover most interfaces." },
    { id: "principles", icon: "navPrinciples", group: "UX", name: "Principles",
      intro: "What good design asks of you." },
    { id: "heuristics", icon: "navHeuristics", group: "UX", name: "Heuristics",
      intro: "Ten rules to judge any interface." },
    { id: "research", icon: "navResearch", group: "UX", name: "Research",
      intro: "Eight ways to learn from people." },
    { id: "patterns", icon: "navPatterns", group: "UX", name: "Patterns",
      intro: "Eight screens almost every product needs." },
    { id: "prioritisation", icon: "navPrioritisation", group: "Product", name: "Prioritisation",
      intro: "How to decide what to build first." },
    { id: "metrics", icon: "navMetrics", group: "Product", name: "Metrics",
      intro: "How to know it worked." },
    { id: "resources", icon: "navResources", group: "Resources", name: "Resources",
      intro: "Tools, sites, fonts and lessons saved from Instagram." },
    { id: "account", icon: "navAccount", group: "Account", name: "Account",
      intro: "Sign in to keep your saved items on the server and open them on any device." },
    { id: "saved", icon: "bookmark", nav: false, group: "", name: "Saved",
      intro: "Your notes. Kept on this device only." }
  ];

  /* ================= TYPOGRAPHY ================= */
  var TYPEFACE = {
    name: "SF Pro",
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

  /* ================= RESOURCES =================
     Design posts saved from Instagram, sorted by category. `id` is the post's shortcode:
     the link is https://www.instagram.com/p/<id>/ */
  var RESOURCE_CATEGORIES = ["Tools", "Websites", "Typography", "Colour", "UI & UX", "AI for design", "Career"];

  var RESOURCES = [];


  /* ================= TOOL GUIDES =================
     The Tools posts, written out so there is no need to go back to Instagram.
     `groups` hold what each post teaches; `src` is the post, kept for reference. */
  var TOOL_GUIDES = [
    { id: "ai-tools", kicker: "AI tools", title: "9 AI tools for designers",
      by: "uiux.aadi", date: "Oct 2026", src: "De3UPMcGFdl",
      summary: "One AI pick for each part of a designer's work, three tools a category. Use it as a map of what to try first.",
      groups: [
        { name: "Image generation", note: "Create visuals from simple text prompts.", tools: ["Midjourney", "DALL·E 3", "Ideogram"] },
        { name: "Design assistant", note: "Get ideas, improve your designs and work faster.", tools: ["Claude", "ChatGPT", "Figma AI"] },
        { name: "Layout and presentation", note: "Turn ideas into layouts and presentations.", tools: ["Beautiful.ai", "Tome", "Gamma"] },
        { name: "UI/UX design", note: "Go from an idea to a UI design in minutes.", tools: ["Uizard", "Galileo AI", "Figma AI"] },
        { name: "Typography", note: "Find, explore and create fonts.", tools: ["Fontjoy", "Typeset", "Glyphic"] },
        { name: "Colour", note: "Discover and generate colour palettes.", tools: ["Khroma", "Cooler AI", "ColorMind"] },
        { name: "Mockups and branding", note: "Make mockups and build brand assets.", tools: ["Kittl", "BrandBird", "RenderNet"] },
        { name: "Video and animation", note: "Create videos and animations.", tools: ["Runway", "Gemini", "Pika Labs"] }
      ],
      takeaway: "Figma AI shows up twice, under Design assistant and UI/UX. It is the one pick that sits inside the tool you already use." },

    { id: "figma-plugins-50", kicker: "Figma plugins", title: "50 Figma plugins every designer should know",
      by: "uiux.build", date: "Aug 2026", src: "DcgchxyDQmG",
      summary: "A checklist of fifty plugins in five groups. Skim for the one that removes a chore you repeat every week.",
      groups: [
        { name: "UI and design", note: "01 to 10", list: [
          ["Auto Layout", "Create responsive layouts with ease."], ["Better Text", "Improve typography in seconds."],
          ["Styles & Variables", "Manage styles and variables effortlessly."], ["Contrast", "Check colour contrast accessibility."],
          ["UI Faces", "Add realistic avatar images instantly."], ["Iconify", "Access 100K+ icons in your designs."],
          ["Content Reel", "Place real content in your designs."], ["Remove BG", "Remove image backgrounds instantly."],
          ["Color Picker", "Pick and organise colours with ease."], ["Pixel Perfect", "Align elements to the pixel grid."] ] },
        { name: "Productivity", note: "11 to 20", list: [
          ["Quick Actions", "Speed up your daily Figma tasks."], ["Table Creator", "Create clean, editable tables instantly."],
          ["List Organizer", "Sort, organise and clean up lists."], ["Flow Builder", "Create user flows and sitemaps fast."],
          ["Find & Replace", "Find and replace text across pages."], ["Page Manager", "Organise, duplicate and reorder pages."],
          ["Sticky", "Create sticky notes and annotations."], ["Align It", "Align layers, frames and selections."],
          ["Data Autofill", "Fill your designs with placeholder data."], ["Timer", "Track time spent on design tasks."] ] },
        { name: "Components and layout", note: "21 to 30", list: [
          ["Variants", "Create and manage component variants."], ["Component Organizer", "Search, sort and manage components."],
          ["Nest", "Create hierarchical frame structures."], ["Masonry", "Create masonry layouts."],
          ["Layer Bakery", "Batch rename and organise layers."], ["Tidy Up", "Clean up and organise your file."],
          ["Sort Layers", "Sort layers by name, type or position."], ["Duplicate Finder", "Find and remove duplicates."],
          ["Advanced Anchors", "More control over auto layout anchors."], ["Frame Resizer", "Resize frames to content instantly."] ] },
        { name: "Images, icons and visuals", note: "31 to 40", list: [
          ["Unsplash", "Insert high-quality photos."], ["Pexels", "Add royalty-free stock photos."],
          ["Iconify", "Access 100K+ open-source icons."], ["Blush", "Add illustrations to your designs."],
          ["Humaaans", "Mix and match illustrated characters."], ["Lorem Picsum", "Generate placeholder images."],
          ["Textures", "Add rich textures to your designs."], ["Gradients", "Explore and apply gradients."],
          ["Image Tracer", "Convert raster images to vector."], ["Smart Crop", "Crop images perfectly with AI."] ] },
        { name: "AI and content", note: "41 to 50", list: [
          ["Magician", "Generate UI, text layers and icons with AI."], ["AI Writer", "Write, edit and improve content with AI."],
          ["GPT for Figma", "Ask AI anything, inside Figma."], ["Translate", "Translate designs into 100+ languages."],
          ["Content Reel", "Add real, meaningful content in seconds."], ["Relume AI", "Generate sitemaps and wireframes with AI."],
          ["Summate", "Summarise long text into short content."], ["Text Autoflow", "Resize text automatically to fit any frame."],
          ["Audiowave", "Generate voiceovers for your prototypes."], ["Clause", "Clean up, fix and improve your text."] ] }
      ],
      takeaway: "Content Reel and Iconify appear in two groups each. If you only install a few, start with Auto Layout, Contrast and Styles & Variables." },

    { id: "figma-plugins-3", kicker: "Figma plugins", title: "3 plugins for building a design system",
      by: "tanisha.dsgn", date: "Sep 2026", src: "Dc3Xw5dopK1",
      summary: "A short reel on the three plugins that take the repetitive work out of a design system: colour, type, then documentation.",
      groups: [
        { name: "The three", list: [
          ["Supa Palette", "Scales a colour into a full ramp, then creates the colour styles and variables for you."],
          ["Typescales", "Generates a set of font sizes and weights from a base size."],
          ["DesignDoc", "Draws component measurements and anatomy guides for documentation."] ] }
      ],
      takeaway: "They follow the order of the work: colours first, then typography, then documenting the components." },

    { id: "claude-code-design", kicker: "Claude Code", title: "5 Claude Code tools for better design",
      by: "Imagine Tech", date: "2026", src: "DdshHpFpqdi",
      summary: "A Claude Code app does not need more code, it needs a better design workflow. These five take a vibe-coded UI from generic to polished.",
      groups: [
        { name: "The five", list: [
          ["Taste Skill", "Better design direction."],
          ["Web Design Guidelines", "Audit your UI."],
          ["Awesome Design", "Real design systems and references."],
          ["Image-to-Code", "Turn design references into code."],
          ["Playwright CLI", "Let Claude inspect and test the UI."] ] }
      ],
      takeaway: "Direction first (Taste Skill), references next (Awesome Design), then audit and test the result." },

    { id: "claude-design-system", kicker: "Claude", title: "Fix generic Claude designs with a design system",
      by: "santhoshdesign", date: "Sep 2026", src: "Dc_AkCBBatm",
      summary: "Generic Claude designs are not an AI problem, they are a foundation problem. Give Claude a proper design system and the output gets professional.",
      groups: [
        { name: "Build this first", list: [
          ["Colours", "The palette and its roles."], ["Typography", "Typefaces, sizes and weights."],
          ["Spacing", "A consistent spacing scale."], ["Shadows", "Elevation values."], ["Animations", "Timing and easing."] ] }
      ],
      takeaway: "Then feed the system to Claude. It is the same idea as this Toolkit: the Variables page lists these values." },

    { id: "adobe-free", kicker: "Free tools", title: "A free, open replacement for Adobe",
      by: "Zack Shutt", date: "Oct 2026", src: "DePjlUmEb4_",
      summary: "Seven free, open-source apps, one for each part of the Adobe suite. Written in Rust, they run on your own machine with no cloud login.",
      groups: [
        { name: "The seven apps", note: "The Adobe app each most likely replaces is my reading of the reel.", list: [
          ["PhotoCraft", "An image editor with layers, masks, adjustment layers, layer styles, type, vectors and brushes. Closest to Photoshop."],
          ["VectorCraft", "Vector illustration with the pen, panels and shortcuts illustrators expect. Closest to Illustrator."],
          ["FilmCraft", "Video editing. Closest to Premiere Pro."],
          ["LightCraft", "Photo editing and organising. Closest to Lightroom."],
          ["PrintCraft", "Layout and print. Closest to InDesign."],
          ["EffectCraft", "Graphics and visual effects, in pure Rust. Closest to After Effects."],
          ["DesignCraft", "Interface design."] ] },
        { name: "Why it matters", list: [
          ["Open source", "Every line is on GitHub under permissive licences. Read it, fork it, build on it."],
          ["Your files, your machine", "Everything runs locally on your own files, with no cloud round-trips."],
          ["Free", "Available on macOS, Windows, Linux and the web."] ] }
      ],
      takeaway: "The reel also shows an open-source studio for controllable AI image and video, though the name is not on screen." },

    { id: "free-design-toolkit", kicker: "Websites", title: "A free design toolkit",
      by: "Mat", date: "Jul 2026", src: "Da0nDMgOUZ-",
      summary: "The reel opens with \"You're not bad in design.\" The sites below are the ones it shows on screen, so your taste has something to learn from.",
      groups: [
        { name: "Shown in the reel", list: [
          ["bestfreefonts.com", "A browsable collection of free fonts."],
          ["uppbeat.io", "Free motion graphics, with titles, transitions and effects."],
          ["recent.design", "A feed of recent design work for inspiration."],
          ["cosmos.so", "A visual library for collecting references and moodboards."] ] }
      ],
      takeaway: "The reel is 14 seconds and the full list came by DM, so there may be more tools than these four." }
  ];

  /* ================= CATEGORY GUIDES =================
     The other saved posts, written out the same way as TOOL_GUIDES. `cat` picks the Resources tab. */
  var CATEGORY_GUIDES = [
  {
    "cat": "Websites",
    "id": "ai-moodboard-tools",
    "kicker": "Moodboards",
    "title": "AI tools for effortless moodboarding",
    "by": "itsdesignare",
    "date": "Oct 2026",
    "src": "De1qTsOGNSF",
    "summary": "Five tools for collecting references and generating moodboards, from manual boards to AI-generated brand boards.",
    "groups": [
      {
        "name": "Collect and organise",
        "list": [
          [
            "Milanote",
            "Visual boards for creative ideas. Collect images, organise references and build moodboards on a flexible visual workspace. milanote.com"
          ],
          [
            "Miro",
            "Collaborative visual brainstorming. Organise inspiration, explore concepts and work on moodboards together on a visual canvas. miro.com"
          ]
        ]
      },
      {
        "name": "Generate with AI",
        "list": [
          [
            "Storyflow",
            "AI-powered moodboard creation. Generate visual concepts and moodboards from prompts. storyflow.so"
          ],
          [
            "MoodyBoards",
            "AI-generated brand moodboards. Turns prompts and reference images into cohesive boards with colours, typography and imagery. moodboards.ai"
          ],
          [
            "Adobe Firefly",
            "AI-powered visual exploration. Generate images from text prompts and explore creative directions for your next moodboard. firefly.adobe.com"
          ]
        ]
      }
    ],
    "takeaway": "Collect references in Milanote or Miro, then use Storyflow, MoodyBoards or Firefly to push the direction further."
  },
  {
    "cat": "Websites",
    "id": "free-websites-for-designers",
    "kicker": "Websites",
    "title": "30+ free websites every designer must know",
    "by": "aryan_choudhary08_",
    "date": "Oct 2026",
    "src": "DeY4X-pk618",
    "summary": "Eight categories with four sites each, from inspiration to learning. The post offered the links by comment.",
    "groups": [
      {
        "name": "Design inspiration",
        "tools": [
          "Behance",
          "Dribbble",
          "Pinterest",
          "Awwwards"
        ]
      },
      {
        "name": "Mockups",
        "tools": [
          "Smartmockups",
          "Mockup World",
          "Artboard Studio",
          "Ls Graphics"
        ]
      },
      {
        "name": "Fonts and typography",
        "tools": [
          "Google Fonts",
          "Da Font",
          "Font Squirrel",
          "Fontspace"
        ]
      },
      {
        "name": "Illustrations",
        "note": "Labelled Illustrations on the slide. The sites are known for icons and illustrations.",
        "tools": [
          "Flaticon",
          "Icons8",
          "Lordicon",
          "Undraw"
        ]
      },
      {
        "name": "Stock photos",
        "tools": [
          "Unsplash",
          "Pexels",
          "Reshot",
          "Kaboompics"
        ]
      },
      {
        "name": "Stock videos",
        "tools": [
          "Pexels Videos",
          "Pixabay Videos",
          "Mixkit",
          "Videezy"
        ]
      },
      {
        "name": "Design tools",
        "tools": [
          "Canva",
          "Figma",
          "VistaCreate",
          "Pixlr"
        ]
      },
      {
        "name": "Learning and tutorials",
        "tools": [
          "Coursera",
          "Skillshare",
          "Domestika",
          "Figma Learn"
        ]
      }
    ],
    "takeaway": "A ready-made bookmark list: one place to look for each need, from references to assets to courses."
  },
  {
    "cat": "Websites",
    "id": "ui-ux-inspiration-sites",
    "kicker": "Inspiration",
    "title": "Sites for UI/UX inspiration",
    "by": "aryan_choudhary08_",
    "date": "Oct 2026",
    "src": "DeHbX1hE_oD",
    "summary": "Four sites for browsing real interface and landing page examples.",
    "groups": [
      {
        "name": "The four sites",
        "list": [
          [
            "Landingfolio.com",
            "A library of landing page examples, with sections for inspiration, components and templates."
          ],
          [
            "Layers.to",
            "A gallery of designs you can filter by tags such as UI design, Figma and product design."
          ],
          [
            "Mobin.com",
            "Searchable design patterns. Its page says: find design patterns in seconds."
          ],
          [
            "Land-book.com",
            "A gallery of websites, with sections for websites, projects and templates."
          ]
        ]
      }
    ],
    "takeaway": "Use Mobin for patterns and Land-book or Landingfolio for page layouts."
  },
  {
    "cat": "Websites",
    "id": "useful-websites-for-designers",
    "kicker": "Websites",
    "title": "Useful websites for designers",
    "by": "suraj.dsgn",
    "date": "Sep 2026",
    "src": "Dcyi6hDCSaZ",
    "summary": "Five sites beyond Figma, for UI animation, colour previews, screenshot polish, app-screen research and keyboard shortcuts. The links were sent by DM.",
    "groups": [
      {
        "name": "The five sites",
        "list": [
          [
            "60FPS",
            "Explore a curated collection of UI animations and interactions to inspire your next interface."
          ],
          [
            "Colors Visualizer",
            "Experiment with colour combinations and see how different palettes work across various designs."
          ],
          [
            "BrandBird",
            "Turn your product screenshots into polished visuals with backgrounds, mockups, effects and more."
          ],
          [
            "ScreensDesign",
            "Browse real app screens to discover UI patterns, layouts and ideas for your next product."
          ],
          [
            "Shortcuts.design",
            "Find useful keyboard shortcuts for popular design tools and speed up your everyday workflow."
          ]
        ]
      }
    ],
    "takeaway": "Use ScreensDesign and 60FPS for research, Colors Visualizer for palettes, and BrandBird to polish what you ship."
  },
  {
    "cat": "Websites",
    "id": "ten-ai-tools-2026",
    "kicker": "AI tools",
    "title": "10 AI tools every designer should use in 2026",
    "by": "designwithtoshi x creative_vaani",
    "date": "Sep 2026",
    "src": "DdtyamLjKOI",
    "summary": "Ten AI tools, each with a one-line pitch and four things to use it for. The cover promises a bonus tool, but the 12 slides I could open end with the closing slide, so I could not find it.",
    "groups": [
      {
        "name": "Assistants",
        "list": [
          [
            "ChatGPT",
            "Your AI creative partner. Use it for creative ideation, image generation, image editing and creative direction."
          ],
          [
            "Claude",
            "From ideas to prototypes. Use it for creative concepts, prototyping, visual exploration and design workflows."
          ]
        ]
      },
      {
        "name": "Design tools",
        "list": [
          [
            "Canva",
            "Design faster. Create more. Use it for social media designs, presentations, posters and branded content."
          ],
          [
            "Figma",
            "Built for digital products. Use it for UI/UX design, wireframes, prototypes and design systems."
          ],
          [
            "Lovart",
            "Your AI design agent. Use it for brand visuals, campaigns, social content and creative production."
          ],
          [
            "Recraft",
            "Create visuals with more control. Use it for vector graphics, illustrations, icons and brand assets."
          ]
        ]
      },
      {
        "name": "Image and video generation",
        "list": [
          [
            "Higgsfield",
            "Turn ideas into cinematic content. Use it for AI video, product visuals, ads and creative storytelling."
          ],
          [
            "Adobe Firefly",
            "AI built for creative workflows. Use it for image generation, generative editing, creative assets and Adobe workflows."
          ],
          [
            "Ideogram",
            "When typography matters. Use it for posters, typography, text-heavy visuals and creative concepts."
          ],
          [
            "Midjourney",
            "Explore ideas visually. Use it for concept art, visual exploration, moodboards and art direction."
          ]
        ]
      }
    ],
    "takeaway": "Pick by job: Figma and Canva to make, Claude and ChatGPT to think, and Ideogram when the image needs readable text."
  },
  {
    "cat": "Websites",
    "id": "remote-job-websites",
    "kicker": "Remote jobs",
    "title": "Remote job websites that pay in dollars",
    "by": "vamshi.work",
    "date": "Oct 2026",
    "src": "Dd9AQgyn1kc",
    "summary": "Eight remote job sites with a one-line pitch each, plus five more to bookmark. LinkedIn is not the only place to find global roles.",
    "groups": [
      {
        "name": "The first seven",
        "list": [
          [
            "Wellfound (wellfound.com)",
            "Startup jobs. Remote and global."
          ],
          [
            "We Work Remotely (weworkremotely.com)",
            "Remote jobs worldwide, across design, dev and marketing."
          ],
          [
            "Remote OK (remoteok.com)",
            "100% remote roles at global companies."
          ],
          [
            "Contra (contra.com)",
            "Freelance and contract work. Great for creatives."
          ],
          [
            "Toptal (toptal.com)",
            "A premium freelance network for design, dev and product."
          ],
          [
            "Arc (arc.dev)",
            "Remote tech jobs, full-time and freelance."
          ],
          [
            "Working Nomads (workingnomads.com)",
            "Curated remote jobs in multiple categories."
          ]
        ]
      },
      {
        "name": "5 more to bookmark",
        "tools": [
          "FlexJobs",
          "Remote.co",
          "JustRemote",
          "Himalayas",
          "Dynamite Jobs"
        ]
      }
    ],
    "takeaway": "The post names 12 sites on its slides. Its '13+' headline and the full list were sent by DM."
  },
  {
    "cat": "Websites",
    "id": "people-to-follow-for-design",
    "kicker": "Follow",
    "title": "Designers and studios to follow",
    "by": "Rajat Patel",
    "date": "Aug 2026",
    "src": "DcWJKooqG2S",
    "summary": "A 49-second reel naming people to learn from, with design-system and typography work shown on screen. The speaker spoke over it with no captions for most lines, and the complete list of profiles was only sent by DM.",
    "groups": [
      {
        "name": "Named on screen",
        "list": [
          [
            "Satya Rajpurohit",
            "Co-founder of Indian Type Foundry (ITF)."
          ],
          [
            "Juhi and Shiva",
            "Owners of the agency NVMBR (November Creative Agency)."
          ],
          [
            "Amelia Wattenberger",
            "Developer, designer and prototyper."
          ],
          [
            "Rasmus Andersson",
            "Designer and engineer."
          ]
        ]
      },
      {
        "name": "Work shown behind the speaker",
        "list": [
          [
            "Design system boards",
            "Pages titled Design System, Interface Craft and a branding board (World-class branding, timeless impact)."
          ],
          [
            "Typography specimens",
            "Typography pages with a large letterform and type scale."
          ]
        ]
      }
    ],
    "takeaway": "Four profiles are readable on screen. The reel also says something about reaching the top 1% within three weeks, but the surrounding sentence is not captioned, so I did not use it."
  },
  {
    "cat": "Websites",
    "id": "figma-heart-micro-interaction",
    "kicker": "Micro-interaction",
    "title": "A heart like animation built in Figma",
    "by": "Kirti Redhu",
    "date": "Sep 2026",
    "src": "Dc82BFjvrw-",
    "summary": "A screen recording of a heart icon animating when liked, built with Figma's Smart Animate. The caption asks whether you would add this interaction to your design.",
    "groups": [
      {
        "name": "What the recording shows",
        "list": [
          [
            "Draw both states",
            "An outline heart for the unliked state and a filled red heart for the liked state."
          ],
          [
            "Lay them out as frames",
            "The two heart states sit side by side in frames."
          ],
          [
            "Add the interaction",
            "A prototype connection between frames with an After delay trigger, Change to action and Smart animate."
          ],
          [
            "Animation settings",
            "Easing is linear with a duration of 500 ms, as shown in the panel."
          ]
        ]
      }
    ],
    "takeaway": "The recording is silent, so the steps are what the screen shows. The caption tags it as UI design, micro-interactions and Figma."
  },
  {
    "cat": "Typography",
    "id": "font-pairs-by-industry",
    "kicker": "Font pairs",
    "title": "Font collection part 3: pairs by industry",
    "by": "Maxwell Gomes",
    "date": "Oct 2026",
    "src": "Dd-rPkVhNFD",
    "summary": "Four heading and body font pairs, each matched to an industry. The author says the client's vibe can change the choice, so treat these as starting points.",
    "groups": [
      {
        "name": "Pairs shown in the reel",
        "list": [
          [
            "Inter + Plus Jakarta Sans",
            "Technology and SaaS."
          ],
          [
            "Lora + Outfit",
            "Health, wellness and organic retail."
          ],
          [
            "DM Sans + Merriweather",
            "Finance and corporate services."
          ],
          [
            "Syne + Cormorant Garamond",
            "Creative studios and fashion agencies."
          ],
          [
            "Playfair Display + Cinzel",
            "Shown on the reel's cover frame with no industry label."
          ]
        ]
      }
    ],
    "takeaway": "This is part 3 of a series. The other two parts cover different industries."
  },
  {
    "cat": "Typography",
    "id": "font-pairings-you-must-know",
    "kicker": "Font pairs",
    "title": "Font pairings you must know",
    "by": "Rajat Patel",
    "date": "Sep 2026",
    "src": "Dc0lHotinE_",
    "summary": "Seven pairs of a display font with a supporting font, each shown over a photo. The post offered the full font files and a usage guide by DM.",
    "groups": [
      {
        "name": "The seven pairs",
        "note": "Display font first, supporting font second.",
        "list": [
          [
            "Quiche Bold + Poppins",
            "Display font and supporting font."
          ],
          [
            "Moonshine + Roboto Slab Thin",
            "Display font and supporting font."
          ],
          [
            "Kollektiv + Open Sans Light",
            "Display font and supporting font."
          ],
          [
            "Yellowtail + Glacial Indifference",
            "Display font and supporting font."
          ],
          [
            "Lovelace + Quicksand Light",
            "Display font and supporting font."
          ],
          [
            "Grown + News Cycle",
            "Display font and supporting font."
          ],
          [
            "Tan Tangkiwood + Lavonia Classy",
            "Display font and supporting font."
          ]
        ]
      }
    ],
    "takeaway": "Pair a strong display face with one quiet supporting face. The font files and guide were only sent by DM."
  },
  {
    "cat": "Typography",
    "id": "fonts-instead-of-inter",
    "kicker": "Fonts",
    "title": "27 fonts to use instead of Inter",
    "by": "Rajan Dube",
    "date": "Sep 2026",
    "src": "Dcyo3jxmOvU",
    "summary": "Inter is great, but not every product should default to it. Pick a font that reads well small, has enough weights, fits the product's personality, handles numbers and long text, and supports your languages.",
    "groups": [
      {
        "name": "Slide 2",
        "tools": [
          "Faculty Glyphic",
          "Radio Canada Big",
          "Stack Sans Notch",
          "Platypi",
          "Rethink Sans",
          "Hanken Grotesk",
          "Wix Made For"
        ]
      },
      {
        "name": "Slide 3",
        "tools": [
          "Figtree",
          "Roboto Flex",
          "Urbanist",
          "Onest",
          "Atkinson Hyperlegible",
          "Lexend"
        ]
      },
      {
        "name": "Slide 4",
        "tools": [
          "DM Sans",
          "Axiforma",
          "SF Pro",
          "Geist",
          "Plus Jakarta Sans",
          "Montserrat",
          "Unbounded"
        ]
      },
      {
        "name": "Slide 5",
        "tools": [
          "TikTok Sans",
          "Google Sans",
          "Stack Sans",
          "BBH Bartle",
          "Momo Trust",
          "Alan Sans",
          "Parkinsans"
        ]
      }
    ],
    "takeaway": "Your font is the product's tone of voice, so choose one that survives real screens. Four fonts carry a 'Gabbar approved' sticker: Faculty Glyphic, Roboto Flex, Unbounded and Momo Trust."
  },
  {
    "cat": "Typography",
    "id": "ui-typography-cheat-sheet",
    "kicker": "Cheat sheet",
    "title": "The ultimate UI typography cheat sheet",
    "by": "vamshi.work",
    "date": "Sep 2026",
    "src": "Dc1E8V3H0II",
    "summary": "Ten slides of UI typography basics: styles, scale, weights, line height, line length, spacing, dos and don'ts, and a pre-ship checklist.",
    "groups": [
      {
        "name": "Start with four text styles",
        "note": "Enough for most UI screens.",
        "list": [
          [
            "Heading",
            "For major sections. One per page."
          ],
          [
            "Subheading",
            "Supports the hierarchy and guides the flow."
          ],
          [
            "Body",
            "The main reading content. Comfortable line length."
          ],
          [
            "Caption",
            "Labels, hints and metadata. Keep it subtle."
          ]
        ]
      },
      {
        "name": "A simple type scale",
        "list": [
          [
            "32 px",
            "Page heading."
          ],
          [
            "24 px",
            "Section heading."
          ],
          [
            "20 px",
            "Card or block heading."
          ],
          [
            "16 px",
            "Body text."
          ],
          [
            "14 px",
            "Secondary text."
          ],
          [
            "12 px",
            "Caption and helper text."
          ]
        ]
      },
      {
        "name": "Font weights",
        "note": "Usually 2 to 3 weights are enough.",
        "list": [
          [
            "Regular 400",
            "Best for body text."
          ],
          [
            "Medium 500",
            "Good for labels and UI text."
          ],
          [
            "Semibold 600",
            "Great for headings and emphasis."
          ],
          [
            "Bold 700",
            "Use sparingly for strong hierarchy."
          ]
        ]
      },
      {
        "name": "Line height",
        "list": [
          [
            "Headings",
            "110% to 130%."
          ],
          [
            "Body text",
            "140% to 170%."
          ],
          [
            "Captions",
            "130% to 150%."
          ],
          [
            "Example",
            "16 px body text with a 24 px line height."
          ]
        ]
      },
      {
        "name": "Line length and letter spacing",
        "list": [
          [
            "Line length",
            "45 to 75 characters per line, with a sweet spot of 60 to 70."
          ],
          [
            "All caps",
            "Add slightly wider spacing."
          ],
          [
            "Large headings",
            "Sometimes slightly tighter."
          ],
          [
            "Body text",
            "Usually keep it normal."
          ]
        ]
      },
      {
        "name": "Do",
        "list": [
          [
            "Clear hierarchy",
            ""
          ],
          [
            "Readable body text",
            ""
          ],
          [
            "Sentence case",
            ""
          ],
          [
            "Consistent sizes",
            ""
          ],
          [
            "Limited font choices",
            ""
          ]
        ]
      },
      {
        "name": "Don't",
        "list": [
          [
            "Too many font sizes",
            ""
          ],
          [
            "Very light grey body text",
            ""
          ],
          [
            "Centre-aligned long paragraphs",
            ""
          ],
          [
            "Bolding everything",
            ""
          ],
          [
            "Low-contrast text",
            ""
          ]
        ]
      },
      {
        "name": "Before you ship, check",
        "list": [
          [
            "Is the hierarchy obvious?",
            ""
          ],
          [
            "Is body text easy to read?",
            ""
          ],
          [
            "Are sizes consistent?",
            ""
          ],
          [
            "Is contrast accessible?",
            ""
          ],
          [
            "Is line height comfortable?",
            ""
          ],
          [
            "Are paragraphs scannable?",
            ""
          ],
          [
            "Did you avoid too many weights?",
            ""
          ],
          [
            "Does it work on mobile too?",
            ""
          ]
        ]
      }
    ],
    "takeaway": "You do not need 10 fonts or 20 text styles. You need a clear system that makes content easy to scan, understand and use."
  },
  {
    "cat": "Colour",
    "id": "colour-tools",
    "kicker": "Colour tools",
    "title": "Colour tools every designer should bookmark",
    "by": "suraj.dsgn",
    "date": "Oct 2026",
    "src": "DeE8rM2DFUu",
    "summary": "Five tools for finding palettes, building scales and previewing colour in context. The post offered the links by DM.",
    "groups": [
      {
        "name": "The five tools",
        "list": [
          [
            "UI Colors",
            "Generate Tailwind CSS colour palettes and create consistent colour scales for your next UI project."
          ],
          [
            "Realtime Colors",
            "Experiment with colour palettes and typography, and preview how they look on a live website layout."
          ],
          [
            "Colorffy",
            "Discover colour palettes, gradients and useful colour tools to find combinations for your next creative project."
          ],
          [
            "Huemint",
            "Use machine learning to generate colour combinations for websites, branding, illustrations and other design projects."
          ],
          [
            "Khroma",
            "Train a personalised AI colour tool with your preferences to generate combinations tailored to your taste."
          ]
        ]
      }
    ],
    "takeaway": "Use UI Colors for scales, Realtime Colors to test them on a page, and Huemint or Khroma when you want AI to suggest combinations."
  },
  {
    "cat": "Colour",
    "id": "off-white-shades",
    "kicker": "Palette",
    "title": "Stop using #FFFFFF: eight off-white shades",
    "by": "Satyam Dubey",
    "date": "Oct 2026",
    "src": "Dd_kkf8D6fA",
    "summary": "Pure white can feel harsh. The post shows warmer and cooler off-whites to use for backgrounds instead.",
    "groups": [
      {
        "name": "Shades with hex codes",
        "list": [
          [
            "Ivory #FFFFF0",
            "Soft, warm, natural."
          ],
          [
            "Linen #FAF0E6",
            "Light, earthy grey."
          ],
          [
            "Cream #FFFDD0",
            "Rich, elegant, warm."
          ],
          [
            "Sea Shell #FFF5EE",
            "Creamy, pinkish white."
          ],
          [
            "Alabaster #EDEAE0",
            "Vintage, with a yellow undertone."
          ],
          [
            "Ghost White #F8F8FF",
            "Cool, fresh, modern."
          ]
        ]
      },
      {
        "name": "Named in the caption, no hex shown",
        "list": [
          [
            "Eggshell",
            "Easy on the eyes."
          ],
          [
            "Bone",
            "Subtle contrast and dimension."
          ]
        ]
      }
    ],
    "takeaway": "Swap pure white for one of these as a page background. The slides give hex codes for six shades. Eggshell and Bone are only named in the caption."
  },
  {
    "cat": "Colour",
    "id": "palette-from-one-colour",
    "kicker": "Palette",
    "title": "A basic colour palette from one colour",
    "by": "Maxwell Gomes",
    "date": "Sep 2026",
    "src": "Dc02_PSRO-H",
    "summary": "A reel on building a five-colour palette from a single starting colour. It is a starting point, not an ultimate guide.",
    "groups": [
      {
        "name": "Before you start",
        "list": [
          [
            "Know the brand",
            "Decide what it wants to portray, for example loud and bold or calm and playful, then choose a colour system."
          ],
          [
            "Printing",
            "Ask whether any of these colours will be printed."
          ]
        ]
      },
      {
        "name": "Five colours in a palette",
        "list": [
          [
            "Primary",
            "Your starting colour."
          ],
          [
            "Secondary and accent",
            "Picked from the colour wheel using a geometric system, such as complementary or split complementary."
          ],
          [
            "Neutrals",
            "Usually a white and a black."
          ]
        ]
      },
      {
        "name": "Neutrals",
        "list": [
          [
            "Avoid pure black",
            "The reel says never to use pure black."
          ],
          [
            "The mix on screen",
            "The slide labels the mix as >10% Primary and <90% Black."
          ]
        ]
      }
    ],
    "takeaway": "Start with the brand's personality, pick a primary, add accents from the colour wheel, and keep neutrals close to your primary rather than pure black."
  },
  {
    "cat": "UI & UX",
    "id": "ux-terms-75",
    "kicker": "UX glossary",
    "title": "75+ UX terms every designer should know",
    "by": "designcharan",
    "date": "Oct 2026",
    "src": "DeHLdn8kx_Y",
    "summary": "A glossary of the words you will hear in UX, product and design reviews. It matters less to memorise them than to know what each means, when it matters and how it connects to your decisions.",
    "groups": [
      {
        "name": "UX foundations",
        "note": "01 to 05",
        "list": [
          [
            "User Experience (UX)",
            "The overall experience a person has while using a product or service, including how useful, easy, efficient and satisfying it feels."
          ],
          [
            "User Interface (UI)",
            "The visual and interactive layer of a product: layout, typography, colours, controls and interface elements."
          ],
          [
            "Usability",
            "How easily and efficiently a person can use a product to achieve a goal without confusion, mistakes or outside help."
          ],
          [
            "Interaction Design",
            "Designing how people interact with a product through actions, controls, transitions and system responses."
          ],
          [
            "User-Centred Design",
            "An approach that puts users' needs, behaviours, goals and feedback at the centre of the design process."
          ]
        ]
      },
      {
        "name": "Understanding users",
        "note": "06 to 10",
        "list": [
          [
            "User Goal",
            "What a person is trying to achieve when they use a product."
          ],
          [
            "User Flow",
            "The sequence of steps a user follows to complete a specific task or goal."
          ],
          [
            "User Journey",
            "The broader experience a person goes through before, during and after interacting with a product or service."
          ],
          [
            "Pain Point",
            "A specific problem or frustration a user faces while trying to reach their goal."
          ],
          [
            "Persona",
            "A fictional profile of a typical user, built from real research, showing their goals, habits and frustrations."
          ]
        ]
      },
      {
        "name": "User research",
        "note": "11 to 20",
        "list": [
          [
            "User Research",
            "Studying users to understand their needs, behaviours, motivations and problems."
          ],
          [
            "User Interview",
            "A structured conversation to understand a user's experiences, behaviours, motivations and challenges."
          ],
          [
            "Survey",
            "A method for collecting structured responses from a group of people."
          ],
          [
            "Observation",
            "Studying what people actually do while performing tasks or using a product."
          ],
          [
            "Contextual Inquiry",
            "Combining observation and interviewing while users perform activities in their real environment."
          ],
          [
            "Qualitative Research",
            "Research on the reasons, motivations and experiences behind people's behaviour."
          ],
          [
            "Quantitative Research",
            "Research based on measurable data and numbers, used to identify patterns in behaviour."
          ],
          [
            "Competitive Analysis",
            "Studying similar products to understand their approaches, strengths, weaknesses and opportunities."
          ],
          [
            "Empathy Map",
            "A simple board capturing what a user says, thinks, does and feels."
          ],
          [
            "Journey Map",
            "A visual timeline of the steps a user takes to reach a goal."
          ]
        ]
      },
      {
        "name": "Problem framing",
        "note": "21 to 28",
        "list": [
          [
            "Jobs to Be Done (JTBD)",
            "People use a product to get a specific job done, so design should focus on the job, not on features."
          ],
          [
            "Use Case",
            "A structured description of how an actor interacts with a system to accomplish a specific goal."
          ],
          [
            "User Scenario",
            "A realistic situation in which a user interacts with a product to achieve a goal."
          ],
          [
            "User Story",
            "A short statement of what a user wants to do and why."
          ],
          [
            "Problem Statement",
            "A clear description of the user problem that needs to be solved."
          ],
          [
            "How Might We (HMW)",
            "An open-ended question that reframes a problem as an opportunity for design exploration."
          ],
          [
            "Hypothesis",
            "A testable belief about a user, problem, behaviour or expected outcome."
          ],
          [
            "Assumption",
            "Something the team believes to be true but has not yet validated with evidence."
          ]
        ]
      },
      {
        "name": "Information architecture",
        "note": "29 to 36",
        "list": [
          [
            "Information Architecture (IA)",
            "How information is organised, structured and labelled so people can find and understand it easily."
          ],
          [
            "Sitemap",
            "A visual representation of the pages or sections in a product and how they are organised."
          ],
          [
            "Navigation",
            "The system that helps users move through a product and find different areas."
          ],
          [
            "Taxonomy",
            "The system used to classify and group information into categories."
          ],
          [
            "Labelling",
            "The words and names used to identify sections, categories, navigation items and content."
          ],
          [
            "Card Sorting",
            "A method where users group and label information in ways that make sense to them."
          ],
          [
            "Tree Testing",
            "A method to evaluate whether users can find information within a proposed navigation structure."
          ],
          [
            "Findability",
            "How easily users can locate the information, content or functionality they are looking for."
          ]
        ]
      },
      {
        "name": "Design artefacts and systems",
        "note": "37 to 44",
        "list": [
          [
            "Wireframe",
            "A simplified screen focused on structure, layout and functionality rather than visual polish."
          ],
          [
            "Mockup",
            "A static visual showing how the final interface is expected to look."
          ],
          [
            "Prototype",
            "An interactive representation used to explore and test how an experience could work."
          ],
          [
            "Low-Fidelity",
            "A simple, rough representation used to explore ideas and structure without much visual detail."
          ],
          [
            "High-Fidelity",
            "A detailed representation that closely resembles the final product in appearance and interaction."
          ],
          [
            "Design Pattern",
            "A commonly used solution to a recurring interface or interaction problem."
          ],
          [
            "Design System",
            "A collection of reusable components, styles, guidelines and principles used to create consistent products."
          ],
          [
            "Component",
            "A reusable interface element that can be used consistently across a product."
          ]
        ]
      },
      {
        "name": "Interaction and interface",
        "note": "45 to 52",
        "list": [
          [
            "Visual Hierarchy",
            "Arranging visual elements to guide attention and show their relative importance."
          ],
          [
            "Microcopy",
            "Small pieces of interface text that explain actions, choices, states and next steps."
          ],
          [
            "Responsive Design",
            "Designing an interface that adapts appropriately to different screen sizes and devices."
          ],
          [
            "Affordance",
            "A quality of an element that suggests how it can be used."
          ],
          [
            "Signifier",
            "A visible cue that communicates where or how an interaction can happen."
          ],
          [
            "Feedback",
            "The response a system gives after a user takes an action, so they understand what happened."
          ],
          [
            "Error Prevention",
            "Designing an experience to reduce the likelihood of users making mistakes."
          ],
          [
            "Progressive Disclosure",
            "Showing information when it becomes relevant instead of presenting everything at once."
          ]
        ]
      },
      {
        "name": "Psychology and UX principles",
        "note": "53 to 57",
        "list": [
          [
            "Mental Model",
            "A person's existing understanding of how something works, usually based on previous experience."
          ],
          [
            "Cognitive Load",
            "The amount of mental effort a person needs to understand information or complete a task."
          ],
          [
            "Hick's Law",
            "The time to make a decision generally increases as the number of choices increases."
          ],
          [
            "Fitts's Law",
            "The time to reach a target generally decreases as the target becomes larger and easier to access."
          ],
          [
            "Jakob's Law",
            "Users expect an interface to work in familiar ways, based on patterns they have learned from other products."
          ]
        ]
      },
      {
        "name": "Accessibility, states and edge cases",
        "note": "58 to 66",
        "list": [
          [
            "Accessibility",
            "Designing products so people with different abilities can perceive, understand, navigate and interact with them."
          ],
          [
            "Inclusive Design",
            "Designing for a wide range of people, abilities, situations and needs rather than assuming one typical user."
          ],
          [
            "WCAG",
            "Web Content Accessibility Guidelines: internationally recognised recommendations for making web content more accessible."
          ],
          [
            "Empty State",
            "The interface shown when there is no content or data available to display."
          ],
          [
            "Loading State",
            "The interface shown while the system is processing an action or waiting for information."
          ],
          [
            "Error State",
            "The interface shown when something goes wrong, helping users understand the problem and recover."
          ],
          [
            "Edge Case",
            "A less common situation that can still affect the experience and needs to be considered."
          ],
          [
            "Happy Path",
            "The ideal journey in which everything works as expected and the user reaches the intended outcome."
          ],
          [
            "Recovery Flow",
            "The path that helps a user recover from a failed, interrupted or unexpected situation and continue."
          ]
        ]
      },
      {
        "name": "Testing and handoff",
        "note": "67 to 77. On the original slide the first six definitions repeat earlier ones by mistake, so these six are standard definitions, not the post's wording.",
        "list": [
          [
            "Usability Testing",
            "Watching real users attempt tasks with a product to find where they struggle."
          ],
          [
            "Heuristic Evaluation",
            "Reviewing an interface against a set of usability rules of thumb."
          ],
          [
            "A/B Testing",
            "Comparing two versions of a design with real users to see which performs better."
          ],
          [
            "Task Success Rate",
            "The share of users who complete a given task successfully."
          ],
          [
            "Drop-off",
            "The point in a flow where users stop or leave before finishing."
          ],
          [
            "Friction",
            "Anything that makes a task slower, harder or more confusing than it needs to be."
          ],
          [
            "MVP (Minimum Viable Product)",
            "The simplest version of a product, with just enough features to test an idea and learn from real users."
          ],
          [
            "Conversion Rate",
            "The percentage of users who complete a desired action, such as signing up or buying, out of everyone who had the chance."
          ],
          [
            "Retention",
            "A measure of how many users keep coming back to a product over time after their first visit."
          ],
          [
            "Design Debt",
            "The build-up of inconsistencies and shortcuts in a design over time, making the product harder to maintain and improve."
          ],
          [
            "Design Handoff",
            "Passing finished designs to developers with every detail they need, such as spacing, states, assets and behaviour."
          ]
        ]
      }
    ],
    "takeaway": "Do not try to memorise all 77. Learn the group that matches the work in front of you, such as research terms before an interview study."
  },
  {
    "cat": "UI & UX",
    "id": "ux-terms-50",
    "kicker": "UX glossary",
    "title": "50 UX terms every beginner should know",
    "by": "vamshi.work",
    "date": "Sep 2026",
    "src": "DdElkQwHxDJ",
    "summary": "The terms you will keep hearing in courses, case studies, interviews and design reviews, in eight themed groups of short one-line definitions. You do not need to memorise all 50, only to understand when and why each is used.",
    "groups": [
      {
        "name": "Start with the basics",
        "note": "01 to 06",
        "list": [
          [
            "UX",
            "The overall product experience."
          ],
          [
            "UI",
            "The interface users see."
          ],
          [
            "Usability",
            "How easy it is to use."
          ],
          [
            "Accessibility",
            "Usable by more people."
          ],
          [
            "Interaction design",
            "How screens behave."
          ],
          [
            "Human-centred design",
            "Design around real users."
          ]
        ]
      },
      {
        "name": "User research",
        "note": "07 to 12",
        "list": [
          [
            "User research",
            "Learning about users."
          ],
          [
            "User interview",
            "A one-to-one conversation with a user."
          ],
          [
            "Persona",
            "A target user profile."
          ],
          [
            "Pain point",
            "A user frustration."
          ],
          [
            "User need",
            "What someone wants to achieve."
          ],
          [
            "JTBD",
            "The progress a user wants to make."
          ]
        ]
      },
      {
        "name": "The user journey",
        "note": "13 to 18",
        "list": [
          [
            "User journey",
            "Steps and emotions in an experience."
          ],
          [
            "User flow",
            "The path through a product."
          ],
          [
            "Task flow",
            "Steps for one specific task."
          ],
          [
            "Touchpoint",
            "Any interaction with the product."
          ],
          [
            "Entry point",
            "Where a journey begins."
          ],
          [
            "Drop-off",
            "Where users abandon a flow."
          ]
        ]
      },
      {
        "name": "Information architecture",
        "note": "19 to 24",
        "list": [
          [
            "IA",
            "How content is organised."
          ],
          [
            "Sitemap",
            "A map of pages or screens."
          ],
          [
            "Navigation",
            "How users move around."
          ],
          [
            "Hierarchy",
            "What feels most important."
          ],
          [
            "Taxonomy",
            "How content is grouped and named."
          ],
          [
            "Card sorting",
            "How users group information."
          ]
        ]
      },
      {
        "name": "From idea to screen",
        "note": "25 to 30",
        "list": [
          [
            "Sketch",
            "A quick idea on paper."
          ],
          [
            "Wireframe",
            "The basic structure."
          ],
          [
            "Mockup",
            "A detailed static design."
          ],
          [
            "Prototype",
            "An interactive preview."
          ],
          [
            "High fidelity",
            "Close to the final product."
          ],
          [
            "Low fidelity",
            "Simple and rough."
          ]
        ]
      },
      {
        "name": "Design systems",
        "note": "31 to 36",
        "list": [
          [
            "Design system",
            "Reusable rules and components."
          ],
          [
            "Component",
            "A reusable UI element."
          ],
          [
            "Design token",
            "Reusable values like colour or spacing."
          ],
          [
            "Pattern",
            "A repeatable UI solution."
          ],
          [
            "State",
            "Default, hover, active, disabled and so on."
          ],
          [
            "Responsive design",
            "Adapts to different screens."
          ]
        ]
      },
      {
        "name": "Testing and validation",
        "note": "37 to 42",
        "list": [
          [
            "Usability testing",
            "Watching users do tasks."
          ],
          [
            "A/B testing",
            "Comparing two versions."
          ],
          [
            "Heuristic evaluation",
            "Reviewing with usability rules."
          ],
          [
            "Cognitive walkthrough",
            "Checking task clarity."
          ],
          [
            "Validation",
            "Proving the idea solves the problem."
          ],
          [
            "Feedback loop",
            "Collect, learn, improve, repeat."
          ]
        ]
      },
      {
        "name": "Product terms",
        "note": "43 to 50",
        "list": [
          [
            "Conversion",
            "A desired action completed."
          ],
          [
            "Onboarding",
            "Helping new users get started."
          ],
          [
            "Friction",
            "Anything that makes an action harder."
          ],
          [
            "Affordance",
            "Clues about how to use something."
          ],
          [
            "Mental model",
            "How users expect it to work."
          ],
          [
            "Cognitive load",
            "The mental effort required."
          ],
          [
            "Edge case",
            "An uncommon situation to handle."
          ],
          [
            "MVP",
            "The smallest useful version to test."
          ]
        ]
      }
    ],
    "takeaway": "Use it as a beginner glossary: understand when and why each term is used instead of memorising the list."
  },
  {
    "cat": "UI & UX",
    "id": "ui-terms-start-ux",
    "kicker": "UI glossary",
    "title": "UI terms to learn first",
    "by": "startuxdesign",
    "date": "Aug 2026",
    "src": "DcJDCoFEQHQ",
    "summary": "If you are learning UI/UX design, knowing the vocabulary matters as much as learning the tools. Ten interface components, each explained in plain words, so you can follow courses and collaborate with other designers.",
    "groups": [
      {
        "name": "Ten UI components",
        "list": [
          [
            "Cards",
            "Small rectangular or square modules that hold different kinds of information, such as buttons, text and rich media."
          ],
          [
            "Sidebar",
            "A group of navigational actions or content at the side of a page. It can be visible or tucked away."
          ],
          [
            "Widgets",
            "Elements of interaction, such as a chat window, the components of a dashboard, or embeds of other services."
          ],
          [
            "Popover",
            "Behaves more like a modal, blocking action and scroll until it is dismissed with a click outside of itself."
          ],
          [
            "Toggle switch",
            "Like a light switch for your app: flip it on or off to choose between two opposite options, such as enabling a feature."
          ],
          [
            "Text fields",
            "The boxes where you type information such as a name or email. They are the key to filling out forms."
          ],
          [
            "Modal",
            "A pop-up window that grabs attention and asks you to complete something before continuing your flow."
          ],
          [
            "Accordion",
            "Organises lots of information in a neat, stacked format. Sections expand or collapse, often used in FAQs and terms."
          ],
          [
            "Badge",
            "A tiny counter or indicator, like the red bubble showing how many unread messages or notifications you have."
          ],
          [
            "Progress bar",
            "A visual guide showing how far along you are in completing a task or process, such as checkout steps."
          ]
        ]
      }
    ],
    "takeaway": "A popover and a modal both interrupt the user, so reach for them only when the task really needs attention before the flow continues."
  },
  {
    "cat": "UI & UX",
    "id": "ux-terms-part-2",
    "kicker": "UX glossary",
    "title": "UX terms beyond the basics, part 2",
    "by": "startuxdesign",
    "date": "Sep 2026",
    "src": "Dc8p9xMk8J1",
    "summary": "Once you move past the basics of UX design you start hearing terms that change how you understand the design process, user behaviour and product decisions. Six of them, in simple language.",
    "groups": [
      {
        "name": "Six UX terms",
        "list": [
          [
            "Affinity mapping",
            "A way to organise ideas, feedback or data into groups based on themes or similarities, like clustering sticky notes on a wall to see patterns in complex information."
          ],
          [
            "Information architecture",
            "The blueprint of your website or app: organising content so it is easy for users to find what they need, by structuring and labelling things logically."
          ],
          [
            "Heatmaps",
            "A visual representation of where users interact most. Colours show the hot spots that get lots of clicks or attention and the cold spots being ignored."
          ],
          [
            "Dark patterns",
            "Sneaky design tricks that manipulate users into doing things they may not want to, such as signing up for something or making unintended purchases. They put business goals over user needs."
          ],
          [
            "Accessibility",
            "Making sure everyone, including people with disabilities, can use and enjoy your product. The example compares a low contrast ratio with one above 7:1 that passes AA and AAA."
          ],
          [
            "Wireframe",
            "A simple, rough sketch showing where elements like buttons, text and images will go. It is the skeleton of your app or site before you add the details."
          ]
        ]
      }
    ],
    "takeaway": "Dark patterns are named as unethical, and the accessibility example makes the point with numbers: a contrast ratio above 7:1 passes both AA and AAA."
  },
  {
    "cat": "UI & UX",
    "id": "auto-layout-mistakes",
    "kicker": "Figma",
    "title": "5 Figma Auto Layout mistakes that ruin your designs",
    "by": "uiux.aadi",
    "date": "Oct 2026",
    "src": "DeZarx1lChr",
    "summary": "Four common Auto Layout mistakes, each with the problem, the fix and four steps, then a final slide on using it the right way. Follow them to keep a design clean and consistent.",
    "groups": [
      {
        "name": "1. Ignoring Auto Layout spacing",
        "note": "Manual margins make a UI inconsistent and hard to maintain, for example 24px, 17px, 31px, 12px.",
        "list": [
          [
            "Add Auto Layout",
            "Select your elements and press Shift + A."
          ],
          [
            "Set spacing",
            "Use a consistent spacing value, such as 16px or 24px."
          ],
          [
            "Add padding",
            "Add equal padding inside the container."
          ],
          [
            "Test everything",
            "Move, resize and reorder your elements to check the spacing stays consistent."
          ]
        ]
      },
      {
        "name": "2. Using fixed widths everywhere",
        "note": "The layout looks perfect at one size but breaks the moment the content changes. Let your UI adapt, not break.",
        "list": [
          [
            "Select the layer",
            "Choose the element that needs to adapt."
          ],
          [
            "Change width",
            "Set the width to Fill container."
          ],
          [
            "Check padding",
            "Keep consistent horizontal padding."
          ],
          [
            "Test the content",
            "Change the text and resize the frame."
          ]
        ]
      },
      {
        "name": "3. Nesting Auto Layout the wrong way",
        "note": "Too many unnecessary frames (Frame, Frame, Frame, Text) when you really need Container then Content.",
        "list": [
          [
            "Identify the structure",
            "Separate sections based on their actual purpose."
          ],
          [
            "Remove unnecessary frames",
            "Do not use Auto Layout just because you can."
          ],
          [
            "Create meaningful containers",
            "Group elements that belong together."
          ],
          [
            "Test resizing",
            "Make sure each container behaves independently."
          ]
        ]
      },
      {
        "name": "4. Not using proper padding",
        "note": "Even with Auto Layout, a design looks disorganised if padding is not set properly, and elements feel cramped.",
        "list": [
          [
            "Select the frame",
            "Choose the Auto Layout frame that contains your elements."
          ],
          [
            "Set padding",
            "Add consistent padding on all sides, for example 16px or 24px."
          ],
          [
            "Keep it consistent",
            "Use the same padding across similar components such as list items, cards and buttons."
          ],
          [
            "Test different content",
            "Try longer text, icons or multiple lines to make sure your spacing still works."
          ]
        ]
      },
      {
        "name": "5. The fix: use Auto Layout the right way",
        "note": "The result is a flexible, responsive UI that is easy to maintain and works with any content at any size.",
        "list": [
          [
            "Plan the structure",
            "Identify sections and group related elements together."
          ],
          [
            "Use consistent values",
            "Use a design system for spacing and padding."
          ],
          [
            "Let Auto Layout work",
            "Use Fill container, Hug content and proper spacing."
          ],
          [
            "Test and iterate",
            "Try different content lengths, icons and screen sizes."
          ]
        ]
      }
    ],
    "takeaway": "Pro tip from the post: good Auto Layout is not about adding more frames, it is about creating the right structure. Design for flexibility, not just the current content."
  },
  {
    "cat": "UI & UX",
    "id": "eight-point-grid",
    "kicker": "Spacing",
    "title": "What is the 8-point grid?",
    "by": "vamshi.work",
    "date": "Oct 2026",
    "src": "DeZTcIyn1Tw",
    "summary": "The 8-point grid is a system that uses multiples of 8 to define spacing and often component sizes. Instead of choosing random values, you follow a consistent scale, which fixes most inconsistent-looking UIs.",
    "groups": [
      {
        "name": "The scale",
        "note": "8, 16, 24, 32, 40, 48, 56, 64. Use it for padding inside components, gaps between elements, margins around content, spacing between sections, and heights and widths of components.",
        "list": [
          [
            "4px",
            "Tiny adjustments, icon gaps. A half-step when you need finer spacing."
          ],
          [
            "8px",
            "Closely related elements. The base unit."
          ],
          [
            "16px",
            "Standard element spacing."
          ],
          [
            "24px",
            "Card padding, content groups."
          ],
          [
            "32px",
            "Spacing between larger blocks."
          ],
          [
            "40px",
            "Generous layout spacing."
          ],
          [
            "48px",
            "Section spacing."
          ],
          [
            "64px",
            "Major section separation."
          ]
        ]
      },
      {
        "name": "Why multiples of 8",
        "list": [
          [
            "Consistency",
            "Elements follow a predictable spacing pattern."
          ],
          [
            "Scalability",
            "A shared scale works across screens and components."
          ],
          [
            "Faster decisions",
            "No more guessing whether a gap should be 17px or 23px."
          ],
          [
            "Developer-friendly",
            "Spacing values can be reused as design tokens in code."
          ],
          [
            "Easily divisible",
            "8 divides into 4 and 2, which keeps smaller adjustments flexible."
          ]
        ]
      },
      {
        "name": "Not all gaps should be equal",
        "note": "Spacing tells users which elements belong together. Keep related elements closer and give unrelated elements more breathing room.",
        "list": [
          [
            "8px",
            "Strong relationship: a title and its supporting description."
          ],
          [
            "16px",
            "Related content: different fields in the same form."
          ],
          [
            "24px",
            "Separate groups: form content and action buttons."
          ],
          [
            "32px",
            "Distinct sections: one content block and the next."
          ]
        ]
      },
      {
        "name": "Component sizes",
        "note": "For touch interfaces, a 48px touch target is a useful default, though exact minimums depend on the platform and standard.",
        "list": [
          [
            "Icons",
            "24px, 32px and so on."
          ],
          [
            "Buttons",
            "48px high."
          ],
          [
            "Input fields",
            "48px or 56px high."
          ],
          [
            "Avatars",
            "32px, 40px, 48px."
          ],
          [
            "Card padding",
            "16px or 24px."
          ]
        ]
      },
      {
        "name": "The exceptions",
        "note": "The grid is a guideline, not a restriction.",
        "list": [
          [
            "4px spacing",
            "Useful between icons and labels or tightly related items."
          ],
          [
            "Typography",
            "Font sizes can be 14px, 18px, 20px and so on, with no need to be multiples of 8."
          ],
          [
            "Borders",
            "1px or 2px borders are perfectly valid."
          ],
          [
            "Responsive layouts",
            "Widths can adapt to screen size instead of being fixed to multiples of 8."
          ]
        ]
      },
      {
        "name": "Step-by-step workflow in Figma",
        "list": [
          [
            "1. Create a spacing scale",
            "Define 4, 8, 16, 24, 32, 40, 48 and 64 as reusable values."
          ],
          [
            "2. Use Auto Layout",
            "Apply these values to padding and gaps instead of manually positioning every element."
          ],
          [
            "3. Create spacing variables",
            "Build reusable tokens such as spacing/8, spacing/16 and spacing/24."
          ],
          [
            "4. Keep relationships consistent",
            "Smaller gaps within groups and larger gaps between sections."
          ],
          [
            "5. Review the full screen",
            "Check alignment, hierarchy, responsiveness and overall visual rhythm."
          ]
        ]
      },
      {
        "name": "Rules to remember",
        "list": [
          [
            "Start with an 8px scale",
            "Use 8, 16, 24 and 32px for common layout spacing."
          ],
          [
            "Use 4px for fine adjustments",
            "Group related elements with smaller gaps."
          ],
          [
            "Make tokens",
            "Create reusable spacing tokens and use consistent component sizes."
          ],
          [
            "Do not force it",
            "Do not force typography, borders or responsive widths to follow multiples of 8."
          ]
        ]
      }
    ],
    "takeaway": "Good UI is not about using more spacing, it is about using spacing intentionally."
  },
  {
    "cat": "UI & UX",
    "id": "ui-mistakes-30",
    "kicker": "UI checklist",
    "title": "30 UI mistakes that make your design look junior",
    "by": "vamshi.work",
    "date": "Sep 2026",
    "src": "DdmHnFLH2PM",
    "summary": "A UI can look almost right and still feel junior. It is usually the small things: inconsistent spacing, weak hierarchy, messy typography, unclear components, missing states and zero responsive thinking. Use it as a checklist before your next design review or handoff.",
    "groups": [
      {
        "name": "Hierarchy mistakes",
        "note": "Bad hierarchy kills good UI.",
        "list": [
          [
            "1. Everything looks equally important",
            "No clear focal point."
          ],
          [
            "2. Weak CTA hierarchy",
            "Primary and secondary buttons look the same."
          ],
          [
            "3. Oversized headings everywhere",
            "When everything shouts, nothing stands out."
          ],
          [
            "4. Important info hidden visually",
            "Key content should be easy to spot."
          ]
        ]
      },
      {
        "name": "Spacing mistakes",
        "note": "Messy spacing makes UI feel amateur. In simple words: respect the space.",
        "list": [
          [
            "5. Random padding values",
            "Use a spacing system, not guesswork."
          ],
          [
            "6. Inconsistent gaps",
            "Related elements should feel related."
          ],
          [
            "7. Crowded layouts",
            "Give content room to breathe."
          ],
          [
            "8. Too much empty space without purpose",
            "Whitespace should guide, not confuse."
          ]
        ]
      },
      {
        "name": "Alignment mistakes",
        "note": "Alignment issues instantly weaken UI. In simple words: keep things aligned.",
        "list": [
          [
            "9. Not using a grid",
            "Things feel slightly off."
          ],
          [
            "10. Text and icons do not line up",
            "Common in buttons and lists."
          ],
          [
            "11. Inconsistent card widths and heights",
            "The layout feels unfinished."
          ],
          [
            "12. Mixed corner radii and spacing styles",
            "Consistency breaks."
          ]
        ]
      },
      {
        "name": "Typography mistakes",
        "note": "Typography can expose weak UI fast. In simple words: better type, better UI.",
        "list": [
          [
            "13. Too many font sizes",
            "Creates noise instead of structure."
          ],
          [
            "14. Poor line height",
            "Too tight or too loose hurts readability."
          ],
          [
            "15. Low-contrast body text",
            "Looks soft, reads badly."
          ],
          [
            "16. Long paragraphs with no scanning structure",
            "Users scan before they read."
          ]
        ]
      },
      {
        "name": "Colour mistakes",
        "note": "Bad colour choices make UI feel cheap. In simple words: better colours, better experience.",
        "list": [
          [
            "17. Too many accent colours",
            "No visual discipline."
          ],
          [
            "18. No clear semantic colours",
            "Success, warning and error should feel distinct."
          ],
          [
            "19. Poor contrast",
            "Looks modern maybe, readable definitely not."
          ],
          [
            "20. Using colour alone for status",
            "Add labels or icons too."
          ]
        ]
      },
      {
        "name": "Component mistakes",
        "note": "Your components need more thought. In simple words: small details make a big difference.",
        "list": [
          [
            "21. Buttons do not look clickable",
            "Weak affordance kills confidence."
          ],
          [
            "22. Missing states",
            "Do not skip hover, focus, disabled, loading and error."
          ],
          [
            "23. Inputs rely only on placeholders",
            "Labels should stay clear."
          ],
          [
            "24. Inconsistent behaviour",
            "Similar components should feel related."
          ]
        ]
      },
      {
        "name": "Usability mistakes",
        "note": "A pretty UI can still fail UX. In simple words: usable designs work.",
        "list": [
          [
            "25. Long forms with no structure",
            "Group fields logically."
          ],
          [
            "26. No feedback after actions",
            "Confirm saves, submits and deletes."
          ],
          [
            "27. Hidden important actions",
            "Do not bury common tasks."
          ]
        ]
      },
      {
        "name": "Final polish mistakes",
        "note": "The small things matter a lot. In simple words: details build great experiences.",
        "list": [
          [
            "28. Ignoring accessibility basics",
            "Tiny text and low contrast are not optional."
          ],
          [
            "29. No responsive thinking",
            "A design for one screen is not complete."
          ],
          [
            "30. Inconsistent visual language",
            "Icons, shadows, borders and spacing should feel like one system."
          ]
        ]
      }
    ],
    "takeaway": "It is rarely one huge mistake. Run this list before a design review or handoff and most of the junior tells disappear."
  },
  {
    "cat": "UI & UX",
    "id": "ui-shipping-checklist",
    "kicker": "UI checklist",
    "title": "The 10-point checklist before you ship any UI",
    "by": "vamshi.work",
    "date": "Sep 2026",
    "src": "Dc6QLXrn8ub",
    "summary": "A UI can look good and still fail in production. Tiny issues like unclear hierarchy, bad states or weak accessibility hurt usability fast, so run these ten checks before handoff.",
    "groups": [
      {
        "name": "Look and feel",
        "list": [
          [
            "1. Clear hierarchy",
            "Can users instantly tell what matters most, what is clickable and what action to take next? If everything feels equally loud, nothing stands out."
          ],
          [
            "2. Clear copy",
            "Check every label, button and helper text. Is it specific, easy to scan and written like a human? Bad: Submit. Better: Save changes."
          ],
          [
            "3. Consistent spacing",
            "Look for uneven padding, random gaps, crowded sections and inconsistent margins. Good spacing makes a UI feel trustworthy."
          ],
          [
            "4. Proper alignment",
            "Check the alignment of text, icons, buttons, cards and form fields. Misalignment makes even great UI feel off."
          ],
          [
            "5. Design system consistency",
            "Are colours consistent, type styles reused, buttons and components matching, and corner radii and shadows consistent? Consistency reduces developer confusion."
          ]
        ]
      },
      {
        "name": "Behaviour",
        "list": [
          [
            "6. Accessibility basics",
            "Readable contrast, legible font sizes, tappable touch targets, clear focus states, and icons that are not used alone without meaning."
          ],
          [
            "7. All component states",
            "Do not design only the happy path. Review default, hover, active, focus, disabled, loading, success, error and empty."
          ],
          [
            "8. Clear feedback",
            "When users take an action the product should respond clearly: saved successfully, loading spinner, inline validation, error guidance. Users should never wonder: did that work?"
          ],
          [
            "9. Usable forms",
            "Labels are clear, placeholders are not doing all the work, required fields are obvious, validation is helpful, the keyboard type matches the input, and errors appear near the field. Good forms improve conversions."
          ],
          [
            "10. Edge cases covered",
            "Check what happens when content is too long, names are very short or very long, there is no data, there is an error, an image fails to load, the user is offline, or the screen size changes."
          ]
        ]
      }
    ],
    "takeaway": "Great UI handles imperfect reality. If these ten are solid, your UI is far more ready to ship."
  },
  {
    "cat": "UI & UX",
    "id": "ui-spacing-cheat-sheet",
    "kicker": "Spacing",
    "title": "The ultimate UI spacing cheat sheet, and empty states",
    "by": "vamshi.work",
    "date": "Aug 2026",
    "src": "DcbXNWTn7zw",
    "summary": "The slides are a ten-page UI spacing cheat sheet. The caption, which belongs to a different carousel, is about empty states, so both are written out here.",
    "groups": [
      {
        "name": "Why spacing matters",
        "note": "Bad spacing = clutter. Good spacing = clarity.",
        "list": [
          [
            "Scan faster",
            "Good spacing helps users scan faster."
          ],
          [
            "Understand hierarchy",
            "It makes the order of importance clear."
          ],
          [
            "Feel less overwhelmed",
            "Room to breathe lowers the load."
          ],
          [
            "Trust the interface more",
            "A tidy layout feels dependable."
          ]
        ]
      },
      {
        "name": "Use a spacing system",
        "note": "Do not use random values like 13px, 19px or 27px. Use a simple scale: 4, 8, 12, 16, 24, 32, 40, 48, 64.",
        "list": [
          [
            "The 8pt rule",
            "Use spacing values in multiples of 8: 8, 16, 24, 32. Use 4px when you need tighter control. Think: 8 for structure, 4 for precision."
          ],
          [
            "Fine adjustment",
            "Instead of 16px, use 12px when it feels just right. Tiny tweaks, big difference."
          ]
        ]
      },
      {
        "name": "Keep related things closer",
        "note": "If items belong together, their spacing should be smaller. Ask: can users tell what belongs together?",
        "list": [
          [
            "8px",
            "Between a label and its input."
          ],
          [
            "4px",
            "Between an input and its helper text."
          ],
          [
            "16px",
            "Between fields."
          ],
          [
            "32px",
            "Before a new section."
          ]
        ]
      },
      {
        "name": "Use bigger gaps to separate sections",
        "note": "Spacing is a silent divider. Whitespace creates structure without extra lines.",
        "list": [
          [
            "24px",
            "Between card groups in section 1."
          ],
          [
            "32px",
            "Between card groups in section 2."
          ],
          [
            "40px",
            "Before a content block."
          ]
        ]
      },
      {
        "name": "Common UI spacing values",
        "note": "Use these as your default starting point.",
        "list": [
          [
            "4px",
            "Icon to text, tiny adjustments."
          ],
          [
            "8px",
            "Tightly related items."
          ],
          [
            "12 to 16px",
            "Inside cards and form groups."
          ],
          [
            "24px",
            "Between content blocks."
          ],
          [
            "32 to 40px",
            "Between sections."
          ],
          [
            "48 to 64px",
            "Major page separation."
          ]
        ]
      },
      {
        "name": "Padding versus margin",
        "list": [
          [
            "Padding",
            "Space inside an element. If it feels cramped inside, fix padding."
          ],
          [
            "Margin",
            "Space outside an element. If elements are too close outside, fix margin."
          ]
        ]
      },
      {
        "name": "Spacing mistakes to avoid",
        "note": "More content on screen does not mean better design. Consistency over density.",
        "list": [
          [
            "Random values",
            "Using too many random values."
          ],
          [
            "Equal gaps",
            "Keeping every gap the same."
          ],
          [
            "Cramped sections",
            "Making sections too cramped."
          ],
          [
            "Extra borders",
            "Adding borders when spacing could solve it."
          ],
          [
            "Squeezing",
            "Reducing spacing just to fit more."
          ]
        ]
      },
      {
        "name": "Save this cheat sheet",
        "list": [
          [
            "Use a spacing scale",
            "The base-4 scale above."
          ],
          [
            "Keep related items closer",
            "Smaller gap, stronger relationship."
          ],
          [
            "Separate sections with bigger gaps",
            "Let whitespace create hierarchy."
          ],
          [
            "Padding inside, margin outside",
            "Button padding example: 16px top and bottom, 24px left and right."
          ]
        ]
      },
      {
        "name": "From the caption: empty states are not nothing",
        "note": "They are moments where users need the most guidance. A good empty state should:",
        "list": [
          [
            "Explain what is happening",
            "Say why the screen is empty."
          ],
          [
            "Tell users what they can do next",
            "Offer the way forward."
          ],
          [
            "Use clear, specific copy",
            "No vague filler."
          ],
          [
            "Avoid unnecessary clutter",
            "Keep it calm."
          ],
          [
            "Match the context",
            "Dashboards, forms, search, onboarding and SaaS all differ."
          ],
          [
            "Make the next action obvious",
            "One clear step."
          ]
        ]
      }
    ],
    "takeaway": "Great UI is not just what you add, it is also what you leave room for. A blank screen creates confusion, while a thoughtful empty state creates momentum."
  },
  {
    "cat": "UI & UX",
    "id": "ux-laws-part-1",
    "kicker": "UX laws",
    "title": "UI/UX laws to learn instead of doomscrolling, part 1",
    "by": "designedbyshreya",
    "date": "Sep 2026",
    "src": "DcoJWijidQo",
    "summary": "Four UX laws from the first part of a series, each with a one-line definition. The full list is sent by DM when you comment, so only these four are in the post itself.",
    "groups": [
      {
        "name": "The four laws",
        "list": [
          [
            "Miller's Law",
            "The average human mind can hold approximately seven (plus or minus two) items in its working memory at one given time."
          ],
          [
            "Jakob's Law",
            "Users spend most of their time on other websites and apps, so they expect your product to work just like the ones they already know. The example moves Sign Up below Log In and keeps Forgot Password in its usual place."
          ],
          [
            "Aesthetic-Usability Effect",
            "Users perceive an attractive product as more usable, friendly and efficient, making them highly forgiving of minor flaws."
          ],
          [
            "Hick's Law",
            "The more choices you give someone, the longer it takes them to make a decision."
          ]
        ]
      }
    ],
    "takeaway": "The post ends with \"Comment 'Laws' to get the full list\", so the rest of the series is not in the carousel."
  },
  {
    "cat": "UI & UX",
    "id": "ux-research-methods",
    "kicker": "UX research",
    "title": "UX research methods cheat sheet",
    "by": "vamshi.work",
    "date": "Aug 2026",
    "src": "DdWnl6NH2bT",
    "summary": "What to use, when to use it and why it matters. Ten slides that sort research methods by what you are trying to learn, so you stop choosing them by guesswork.",
    "groups": [
      {
        "name": "Why research matters",
        "note": "Better design starts with better evidence.",
        "list": [
          [
            "1",
            "Understand users better."
          ],
          [
            "2",
            "Reduce guesswork."
          ],
          [
            "3",
            "Find real problems."
          ],
          [
            "4",
            "Validate decisions."
          ],
          [
            "5",
            "Design with confidence."
          ]
        ]
      },
      {
        "name": "4 ways to classify research",
        "note": "The best research usually combines both sides.",
        "list": [
          [
            "Attitudinal",
            "What users say."
          ],
          [
            "Behavioural",
            "What users do."
          ],
          [
            "Qualitative",
            "Why it happens."
          ],
          [
            "Quantitative",
            "How often it happens."
          ]
        ]
      },
      {
        "name": "Discovery methods",
        "note": "Use these when you are learning the problem.",
        "tools": [
          "User interviews",
          "Contextual inquiry",
          "Field studies",
          "Diary studies",
          "Competitive research"
        ]
      },
      {
        "name": "Attitudinal methods",
        "note": "Best for perceptions, expectations and preferences.",
        "tools": [
          "Interviews",
          "Focus groups",
          "Surveys",
          "Feedback forms",
          "Concept testing"
        ]
      },
      {
        "name": "Behavioural methods",
        "note": "Best for what users actually do.",
        "tools": [
          "Usability testing",
          "Analytics",
          "Heatmaps",
          "Session recordings",
          "A/B testing"
        ]
      },
      {
        "name": "IA methods",
        "note": "Use these to improve findability and content structure.",
        "tools": [
          "Card sorting",
          "Tree testing",
          "First-click testing",
          "Navigation testing"
        ]
      },
      {
        "name": "Evaluative methods",
        "note": "Use these when you already have a concept, prototype or product.",
        "tools": [
          "Usability testing",
          "Heuristic evaluation",
          "Accessibility audit",
          "Preference testing",
          "Pilot testing"
        ]
      },
      {
        "name": "Quick method picker",
        "list": [
          [
            "Need deep user insights?",
            "Interviews."
          ],
          [
            "Need broad opinions fast?",
            "Surveys."
          ],
          [
            "Need to test usability?",
            "Usability testing."
          ],
          [
            "Need real behaviour data?",
            "Analytics or recordings."
          ],
          [
            "Need to improve IA?",
            "Card sorting or tree testing."
          ],
          [
            "Need to compare versions?",
            "A/B testing."
          ]
        ]
      }
    ],
    "takeaway": "Pick by the question: discovery for the problem, IA for structure, behavioural and attitudinal for users, evaluative once there is something to test."
  },
  {
    "cat": "UI & UX",
    "id": "ux-laws-part-6",
    "kicker": "UX laws",
    "title": "UX laws every designer should know, part 6",
    "by": "startuxdesign",
    "date": "Oct 2026",
    "src": "DeCGOVNEwKR",
    "summary": "Five UX laws, each with a one-line rule and a real product example. They explain why familiar apps feel easy to use.",
    "groups": [
      {
        "name": "The five laws",
        "list": [
          [
            "Peak-end Rule",
            "People remember experiences by the best moment (the peak) and the ending. To leave a positive memory, give users a highlight and a smooth finish. Uber shows pickup time instantly to reduce cancellations, while calorie apps send end-of-day reminders to build habit."
          ],
          [
            "Miller's Law",
            "The average person can only remember about 7 things at a time. Keep interfaces simple by reducing choices and breaking information into smaller chunks. Netflix and Etsy limit categories to about 6 per row, so browsing is easier and overload is avoided."
          ],
          [
            "Hick's Law",
            "More choices means slower decisions, and fewer choices means a faster flow. Spotify keeps tabs minimal, while Netflix highlights trending content to guide users."
          ],
          [
            "Fitts's Law",
            "The bigger and closer a button, the easier it is to tap. Gmail's Compose and Medium's Clap buttons are designed for quick, effortless use."
          ],
          [
            "Law of Similarity",
            "People naturally group similar-looking elements together. Using similar colours, shapes or styles helps users understand that elements are related. Apps use the same colour for CTA buttons to signal importance and make them stand out."
          ]
        ]
      }
    ],
    "takeaway": "Each law has a practical lever: leave a strong ending, chunk information, trim choices, make targets big and near, and style related things alike."
  },
  {
    "cat": "UI & UX",
    "id": "build-design-system",
    "kicker": "Design systems",
    "title": "How to build a design system that will not break in 3 months",
    "by": "creative_vaani",
    "date": "Sep 2026",
    "src": "Dd9PginjDR2",
    "summary": "A beginner-friendly guide in five steps. Design systems are what make products consistent, scalable and easier to build, and the strongest ones start with the foundations before you design the first button.",
    "groups": [
      {
        "name": "Step 1: Define your foundations",
        "note": "Decide the rules before you draw a single screen. Pro tip: stick to a 4pt grid. If a number is not divisible by 4, it does not ship.",
        "list": [
          [
            "Colour",
            "A primary scale plus a neutral scale, from 50 to 900."
          ],
          [
            "Type scale",
            "12, 16, 32 and 48, covering display, heading, body and caption."
          ],
          [
            "Spacing",
            "A 4pt grid: 4, 8, 12, 16, 24, 32, 48."
          ],
          [
            "Radius and elevation",
            "A small set of corner radii and shadow levels."
          ]
        ]
      },
      {
        "name": "Step 2: Turn values into tokens",
        "note": "A token is a name for a decision. Change it once and it updates everywhere. In Figma: Variables in 2 collections, Primitives, and Semantic with Light and Dark modes.",
        "list": [
          [
            "1. Primitive",
            "The raw value, for example orange/500 = #FF5823."
          ],
          [
            "2. Semantic",
            "What it means, for example color/action/primary, which references orange/500."
          ],
          [
            "3. Component",
            "Where it lives, for example button/bg/default, which references the semantic token."
          ],
          [
            "Rebrand?",
            "Swap one primitive and every button, link and badge follows."
          ],
          [
            "Dark mode?",
            "Remap the semantic layer. Components never change."
          ]
        ]
      },
      {
        "name": "Step 3: Build your core components",
        "note": "Start with the 5 you use on every screen, not 50. Rule: auto layout and tokens only, with zero raw hex values inside a component.",
        "list": [
          [
            "The five",
            "Button, Input, Card, Avatar, Navigation."
          ],
          [
            "Button anatomy",
            "Height 48, padding 24, radius 12, gap 8, icon 22. Fill, text, radius and label all point to tokens."
          ]
        ]
      },
      {
        "name": "Step 4: Add variants and states",
        "note": "One component, every situation it will ever live in.",
        "list": [
          [
            "Types",
            "Primary, Secondary, Ghost."
          ],
          [
            "States",
            "Default, Hover, Pressed, Focus, Disabled. Inputs also need Error."
          ],
          [
            "Sizes",
            "sm, md, lg."
          ],
          [
            "Naming",
            "Button / Type=Primary / Size=MD / State=Hover."
          ]
        ]
      },
      {
        "name": "Step 5: Document everything",
        "note": "Docs turn your file into a shared language. Start small: one page per component.",
        "list": [
          [
            "When to use",
            "For the main action on a screen: one primary button per view."
          ],
          [
            "Do and don't",
            "One primary and one secondary, versus two primaries fighting for attention."
          ],
          [
            "Properties",
            "Type, size and state."
          ],
          [
            "Accessibility",
            "Contrast at least 4.5:1, focus ring 2px, tap target at least 44px."
          ]
        ]
      },
      {
        "name": "Bonus: 5 mistakes that kill design systems",
        "note": "A design system is a product. It needs an owner, a roadmap and real users.",
        "list": [
          [
            "1. Building 40 components on day one",
            "Lock foundations and tokens first, then ship 5 core parts."
          ],
          [
            "2. Hardcoding hex values",
            "Every colour, space and radius comes from a token."
          ],
          [
            "3. Naming by looks",
            "Name by purpose, for example button/primary, not blue-button. Colours change, purpose does not."
          ],
          [
            "4. No owner, no changelog",
            "One owner, versioned releases and written release notes."
          ],
          [
            "5. Designing without developers",
            "Match token names to code from day one."
          ]
        ]
      },
      {
        "name": "Your design system checklist",
        "note": "Screenshot it and tick one box a day.",
        "list": [
          [
            "Step 1",
            "Colour ramp and neutrals. Type scale of 4 to 6 sizes. 4pt spacing, radius and elevation."
          ],
          [
            "Step 2",
            "Primitive and semantic tokens. Light and dark modes."
          ],
          [
            "Step 3",
            "5 core components."
          ],
          [
            "Step 4",
            "Variants, states and sizes."
          ],
          [
            "Step 5",
            "Docs, owner and changelog."
          ]
        ]
      }
    ],
    "takeaway": "Start with foundations and tokens, ship five components, and give the system an owner. This Toolkit's Variables page follows the same primitive-to-semantic idea."
  },
  {
    "cat": "UI & UX",
    "id": "ux-metrics-20",
    "kicker": "UX metrics",
    "title": "20 UX metrics every product designer should know",
    "by": "vamshi.work",
    "date": "Sep 2026",
    "src": "DdbvUk7nzii",
    "summary": "Good design is not just about making screens look better, it is about improving outcomes. These 20 metrics measure what actually happens after you ship, in six groups.",
    "groups": [
      {
        "name": "Why UX metrics matter",
        "note": "Great designers do not just ship screens, they track outcomes.",
        "list": [
          [
            "Usability",
            "Users can complete tasks easily."
          ],
          [
            "Engagement",
            "Users spend more time and come back."
          ],
          [
            "Retention",
            "Users keep returning over time."
          ],
          [
            "Satisfaction",
            "Users feel happy and confident."
          ],
          [
            "Business impact",
            "Drives growth, revenue and measurable value."
          ]
        ]
      },
      {
        "name": "Acquisition and activation",
        "note": "1 to 3. Best for measuring whether onboarding and first-use flows are working.",
        "list": [
          [
            "1. Conversion Rate",
            "Percentage of users who complete a desired action."
          ],
          [
            "2. Signup Completion Rate",
            "Percentage of users who finish the signup flow."
          ],
          [
            "3. Activation Rate",
            "Percentage of users who reach the aha moment."
          ]
        ]
      },
      {
        "name": "Engagement",
        "note": "4 to 6. Shows whether your product is becoming part of the user's routine.",
        "list": [
          [
            "4. DAU / MAU",
            "Daily active users versus monthly active users."
          ],
          [
            "5. Feature Adoption Rate",
            "Percentage of users who use a specific feature."
          ],
          [
            "6. Session Frequency",
            "How often users come back and use the product."
          ]
        ]
      },
      {
        "name": "Retention",
        "note": "7 to 9. Retention reveals whether your product stays valuable over time.",
        "list": [
          [
            "7. Retention Rate",
            "Percentage of users who return after a set time."
          ],
          [
            "8. Churn Rate",
            "Percentage of users who stop using the product."
          ],
          [
            "9. Stickiness",
            "Usually measured as DAU divided by MAU. A higher ratio means stronger engagement and habit formation."
          ]
        ]
      },
      {
        "name": "Usability",
        "note": "10 to 12. These show whether your flows feel intuitive or frustrating.",
        "list": [
          [
            "10. Task Success Rate",
            "Percentage of users who complete a task successfully."
          ],
          [
            "11. Time on Task",
            "How long it takes users to finish a task."
          ],
          [
            "12. Error Rate",
            "How often users make mistakes."
          ]
        ]
      },
      {
        "name": "Satisfaction",
        "note": "13 to 15. Great UX should feel useful, easy and worth recommending.",
        "list": [
          [
            "13. CSAT",
            "How satisfied were you?"
          ],
          [
            "14. NPS",
            "How likely are you to recommend us? Scored 0 to 10."
          ],
          [
            "15. CES",
            "How easy was it to complete this task?"
          ]
        ]
      },
      {
        "name": "Business and quality",
        "note": "16 to 20. Design should improve business results, not just visuals. Support tickets and drop-off reveal hidden friction that polished visuals alone cannot fix.",
        "list": [
          [
            "16. Trial-to-Paid Conversion",
            "Percentage of trial users who become paying customers."
          ],
          [
            "17. ARPU",
            "Average revenue per user."
          ],
          [
            "18. LTV",
            "Lifetime value of a customer."
          ],
          [
            "19. Support Ticket Rate",
            "How often users need help."
          ],
          [
            "20. Drop-off Rate",
            "Where users abandon a flow before finishing."
          ]
        ]
      }
    ],
    "takeaway": "You do not need to track every metric for every feature. The skill is knowing which one answers the product question in front of you."
  },
  {
    "cat": "UI & UX",
    "id": "engagement-metrics-6",
    "kicker": "UX metrics",
    "title": "6 UX metrics to measure engagement",
    "by": "rajanthedube",
    "date": "Aug 2026",
    "src": "DcwCodcGHD7",
    "summary": "Most product designers can explain the screen, but fewer can explain what happened after it shipped. These six metrics tell you whether users came back, engaged, stayed and paid, each with a plain example and a formula.",
    "groups": [
      {
        "name": "The six metrics",
        "list": [
          [
            "1. Retention rate",
            "How many users come back after using your product once. If 100 people try your app and 40 return next week, your retention is 40%. Acquisition gets users in; retention tells you if they liked what they found. Formula: ((E - N) / S) x 100, where E is customers at the end of a period, N is new customers acquired during it and S is customers at the start."
          ],
          [
            "2. Engagement score",
            "A combined way to understand how actively users use your product: visits, clicks, actions, time spent and features used all contribute. Formula: (Weighted Metric 1 + Weighted Metric 2 + Weighted Metric 3 ...) / Total Weight."
          ],
          [
            "3. Average session duration",
            "The average time a user spends in your product in one visit. Longer is not always better: a 2-minute checkout can be great, a 20-minute checkout is probably a cry for help. Formula: Total Time Spent / Number of Sessions."
          ],
          [
            "4. Churn rate",
            "The percentage of users who stop using or paying for your product over time. If 100 customers start the month and 10 leave, churn is 10%. Retention tells you who stayed, churn tells you who left. Formula: (Customers lost during a period / Customers at the start of that period) x 100."
          ],
          [
            "5. Number of sessions per user",
            "How often an average user comes back and uses your product. If someone opens Spotify 20 times a week but your budgeting app only twice, both can still be healthy. What matters is whether the frequency matches the product's purpose. Formula: Total Number of Sessions / Total Number of Unique Users."
          ],
          [
            "6. User lifetime value",
            "The total value one customer is expected to bring to your business before they leave. If a customer spends 1,000 rupees every month and stays for 12 months, their rough LTV is 12,000 rupees. One purchase tells you revenue; LTV tells you the relationship. Formula: LTV = (Average Value of a Purchase) x (Number of Purchases per Year) x (Average Customer Lifespan)."
          ]
        ]
      }
    ],
    "takeaway": "You do not need to become a data analyst, but if you claim to design for business impact you should be able to measure it. A pretty screen gets applause, user behaviour shows whether the design worked."
  },
  {
    "cat": "UI & UX",
    "id": "ux-skills-tier-list",
    "kicker": "Career",
    "title": "UX skills ranked by what gets you hired",
    "by": "vamshi.work",
    "date": "Oct 2026",
    "src": "DeGXFajKaHw",
    "summary": "A tier list of where to spend your learning time in 2026. Most junior designers spend their time at the bottom of this list, while hiring managers look at the top.",
    "groups": [
      {
        "name": "S+ : what senior designers get paid for",
        "note": "If you can find the right problem, everything after it gets easier.",
        "tools": [
          "UX research",
          "User interviews",
          "Problem framing"
        ]
      },
      {
        "name": "S : ship the answer fast",
        "note": "Once you know the problem, ship the answer.",
        "tools": [
          "Designing in Figma",
          "Prototyping",
          "AI workflows with Claude"
        ]
      },
      {
        "name": "A : the craft that makes your work hold up",
        "tools": [
          "Usability testing",
          "Information architecture",
          "Design systems",
          "Storytelling"
        ]
      },
      {
        "name": "B : supporting craft",
        "tools": [
          "Wireframing",
          "Journey maps",
          "Competitive analysis",
          "Dev handoff"
        ]
      },
      {
        "name": "C : useful only when they lead to a real decision",
        "tools": [
          "Personas",
          "Affinity mapping",
          "Card sorting"
        ]
      },
      {
        "name": "F : look like progress but will not get you hired",
        "tools": [
          "Pixel pushing",
          "Dribbble shots",
          "Tool hopping"
        ]
      }
    ],
    "takeaway": "Learn from the top down: find the right problem first, then ship the answer, and use the lower tiers only to support a real decision."
  },
  {
    "cat": "UI & UX",
    "id": "product-designer-skill-curve",
    "kicker": "Career",
    "title": "The life of a product designer",
    "by": "vamshi.work",
    "date": "Oct 2026",
    "src": "DeD0Jpqqo4t",
    "summary": "A single skill-level curve across four career stages, from tutorials to senior designer, ending with a sharp drop when AI tools arrive. The point is not to learn every tool but to keep adapting.",
    "groups": [
      {
        "name": "The curve, stage by stage",
        "note": "Skill level rises across Tutorials, Bootcamp, First Job and Senior Designer.",
        "list": [
          [
            "Visual design fundamentals",
            "Sketching, typography, Photoshop, Illustrator and colour theory."
          ],
          [
            "Figma, wireframing and prototyping",
            "Sketch, wireframing, Figma and prototyping."
          ],
          [
            "Research and quality",
            "User research, usability testing and accessibility."
          ],
          [
            "Senior skills",
            "Design systems, strategy and leadership."
          ]
        ]
      },
      {
        "name": "Then AI changes the curve again",
        "note": "The curve peaks with the thought \"Finally. I am irreplaceable designer.\" Then the AI design era drops it.",
        "tools": [
          "Claude",
          "Figma Make",
          "Gemini",
          "Midjourney",
          "v0",
          "Lovable"
        ]
      },
      {
        "name": "What to combine",
        "list": [
          [
            "Design",
            "The craft itself."
          ],
          [
            "Product thinking",
            "Knowing which problem is worth solving."
          ],
          [
            "AI",
            "Using the tools without leaning on any one of them."
          ],
          [
            "Building",
            "Shipping working things yourself."
          ]
        ]
      }
    ],
    "takeaway": "Tools will keep changing, so the real skill is your ability to adapt."
  },
  {
    "cat": "UI & UX",
    "id": "modern-designer-knowledge-map",
    "kicker": "Career",
    "title": "The modern designer's knowledge map",
    "by": "rajatpatel.design",
    "date": "Aug 2026",
    "src": "DcTdh84K6uN",
    "summary": "A reel arguing that a designer's knowledge map is much bigger than good visuals. It is spoken, so this guide is built from the caption and the sketch diagrams shown on screen, which I could only partly read.",
    "groups": [
      {
        "name": "The concepts named in the post",
        "note": "Today's designers need to understand how their decisions behave inside real products, real systems and increasingly AI-powered experiences.",
        "tools": [
          "Semantic tokens",
          "Perceived performance",
          "Non-deterministic systems",
          "Progressive disclosure",
          "OKLCH",
          "Model latency",
          "Design engineering",
          "Jobs To Be Done",
          "Motion choreography",
          "Probabilistic systems",
          "Design debt"
        ]
      },
      {
        "name": "Shown as sketch diagrams in the reel",
        "list": [
          [
            "Semantic token",
            "Neutral, primary and success tokens feeding a button, nav and card, so one token is used in many places."
          ],
          [
            "Optical alignment",
            "Why a shape can need a small offset so it looks aligned, because optical alignment creates better visual balance."
          ],
          [
            "Component API design",
            "A button defined by size, variant, state and icon properties, with primary, secondary and ghost examples."
          ],
          [
            "Linear's design engineering culture",
            "Design, shared system and engineering, with design and product, system and form working as one."
          ],
          [
            "Motion choreography",
            "A sequence of animation steps across an interface, with timing along a timeline."
          ]
        ]
      },
      {
        "name": "Designers the post points to",
        "list": [
          [
            "Susan Kare",
            "Foundational approach to digital interface design."
          ],
          [
            "Paula Scher",
            "Work in identity and visual systems."
          ],
          [
            "Dieter Rams",
            "Shown in the reel."
          ],
          [
            "Emil Kowalski",
            "Shown in the reel, working on interface animation."
          ]
        ]
      },
      {
        "name": "What to combine",
        "tools": [
          "Visual design",
          "Interaction design",
          "Systems thinking",
          "Technology",
          "Human behaviour"
        ]
      }
    ],
    "takeaway": "You do not need to master everything at once, but you do need to keep learning, because the tools, workflows and technology will change and the designers who stay curious will stay ahead."
  },
  {
    "cat": "UI & UX",
    "id": "ux-youtube-channels",
    "kicker": "Learning",
    "title": "5 YouTube channels for learning UX/UI",
    "by": "creative_vaani",
    "date": "Oct 2026",
    "src": "DeJyZr_jFll",
    "summary": "Five channels that provide effective design learning through structured, engaging videos. Each entry says what the channel is known for.",
    "groups": [
      {
        "name": "The five channels",
        "list": [
          [
            "Enrico Tartarotti",
            "A UX-focused creator who produces documentary-style videos that break down complex design concepts across real-world products. Engaging storytelling and sharp editing make learning both clear and compelling."
          ],
          [
            "Tim Gabe",
            "A design creator known for breaking down complex concepts, real-world case studies and impactful company stories, presented in an engaging documentary-style format."
          ],
          [
            "Lenny's Podcast",
            "A well-known podcast featuring conversations with industry leaders in design, technology and product. It offers practical insights into real-world workflows, tools and the evolving role of AI."
          ],
          [
            "Fireship",
            "A well-known channel delivering short, engaging videos on the latest developments in tech and design, covering tools, platforms and industry trends."
          ],
          [
            "Punit Chawla",
            "A super engaging and fun personality who regularly shares weekly content and videos about the latest trends in the industry. If you want to keep yourself updated with everything new in design and tools (including AI), he is worth following."
          ]
        ]
      }
    ],
    "takeaway": "Pick one for case studies (Enrico or Tim), one for industry conversations (Lenny's Podcast) and one for weekly tool news (Fireship or Punit Chawla)."
  },
  {
    "cat": "UI & UX",
    "id": "ux-30-day-masterplan",
    "kicker": "Learning plan",
    "title": "30-day UI/UX masterplan",
    "by": "uiuxaadi",
    "date": "Oct 2026",
    "src": "DeJybC4FN2x",
    "summary": "A day-by-day plan in five blocks, from setting goals to publishing a portfolio. Most designers do not need more random tutorials, they need a clear roadmap of what to learn, practise and build next.",
    "groups": [
      {
        "name": "Days 1 to 6: build your foundation",
        "list": [
          [
            "Day 1: Set your goals",
            "Define why you are learning UI/UX, set 30-day outcome goals, list your current skills and create a learning tracker."
          ],
          [
            "Day 2: Understand UI/UX",
            "Learn the basics of UI vs UX, explore real-world examples, understand the design process and follow 3 inspiring designers."
          ],
          [
            "Day 3: Learn design principles",
            "Study alignment, contrast, hierarchy, repetition and proximity. Analyse good vs bad designs and save 5 design inspirations."
          ],
          [
            "Day 4: Explore visual basics",
            "Learn colour theory and typography basics, explore iconography and imagery, and create a small moodboard in Figma."
          ],
          [
            "Day 5: Get comfortable in Figma",
            "Explore the interface, learn basic tools (frames, shapes, text, components), create a simple screen and use auto layout."
          ],
          [
            "Day 6: Analyse great UI",
            "Pick 2 to 3 apps you like, break down their UI (layout, colour, typography, flow), note what makes them work and save your learnings."
          ]
        ]
      },
      {
        "name": "Days 7 to 12: practise and improve your skills",
        "list": [
          [
            "Day 7: User research basics",
            "Learn what user research is, explore user types and needs, try creating a simple user persona and read 2 to 3 real case studies."
          ],
          [
            "Day 8: Information architecture",
            "Learn about sitemaps and user flows, organise content for a sample app, create your own sitemap and explore navigation patterns."
          ],
          [
            "Day 9: Wireframing",
            "Understand low vs high-fidelity wireframes, sketch 2 to 3 screens (paper or digital), try wireframing in Figma and focus on layout and flow."
          ],
          [
            "Day 10: UI design basics",
            "Learn about UI elements (buttons, inputs, cards), practise layout and spacing, use a design system or UI kit, and design 2 to 3 key screens for your project."
          ],
          [
            "Day 11: Design for mobile",
            "Understand mobile design guidelines (iOS and Android), learn common mobile patterns, design a mobile screen (320 to 375px wide) and focus on readability and touch targets."
          ],
          [
            "Day 12: Prototyping and interaction",
            "Learn about prototyping in Figma, add basic interactions (transitions, overlays), create a clickable prototype (2 to 3 screens) and test the flow yourself."
          ]
        ]
      },
      {
        "name": "Days 13 to 18: design and build real solutions",
        "list": [
          [
            "Day 13: Problem solving",
            "Pick a real-world problem, define the target users, write a brief and set goals, and do a quick competitor analysis."
          ],
          [
            "Day 14: Ideation and sketching",
            "Brainstorm multiple ideas, create user flows and task flows, sketch low-fidelity ideas and choose the best concept."
          ],
          [
            "Day 15: Design in Figma",
            "Set up your Figma file and basic design system, create low-fidelity wireframes, design high-fidelity screens and keep colour, typography and spacing consistent."
          ],
          [
            "Day 16: UI patterns and components",
            "Learn and use common UI patterns (navigation, forms, cards), design reusable components, use Auto Layout effectively and build a small component library."
          ],
          [
            "Day 17: Usability and accessibility",
            "Follow usability heuristics, check contrast and readability, learn basic accessibility (alt text, font sizes, colour contrast) and get feedback from peers or a mentor."
          ],
          [
            "Day 18: Polish and iterate",
            "Review your design critically, refine layout, spacing and visuals, improve based on feedback and prepare the design for presentation."
          ]
        ]
      },
      {
        "name": "Days 19 to 24: build your portfolio",
        "list": [
          [
            "Day 19: Plan your portfolio",
            "Decide your portfolio goal (job, freelance, internship), research good UI/UX portfolios, choose 2 to 3 of your best projects and create a portfolio structure (homepage, case studies, about)."
          ],
          [
            "Day 20: Write case studies",
            "Learn how to structure a case study, use the problem, process, solution format, add research, user insights and design decisions, and keep it visual and simple."
          ],
          [
            "Day 21: Design a full project",
            "Pick a real or personal problem, go from research to final UI, design 5 to 8 key screens and apply everything you have learned so far."
          ],
          [
            "Day 22: Get feedback",
            "Share your work with a community (Discord, LinkedIn), ask for constructive feedback, identify areas of improvement and make updates based on suggestions."
          ],
          [
            "Day 23: Polish and present",
            "Improve visual spacing and consistency, write a clear project description, create a clean cover image for each project and prepare a short presentation (1 to 2 min)."
          ],
          [
            "Day 24: Publish and share",
            "Publish your portfolio (Framer, Notion, Webflow, etc.), share it on LinkedIn, Twitter and design communities, write a short post about your journey and start building your personal brand as a designer."
          ]
        ]
      },
      {
        "name": "After day 30: the 1-year plan",
        "note": "The last slide invites you to comment \"curriculum\" for the full plan: 12 months of structured learning, 100+ topics, real projects, tools and resources, and career guidance.",
        "list": [
          [
            "Months 1 to 2",
            "Foundations of UI/UX."
          ],
          [
            "Months 3 to 4",
            "Design principles and visuals."
          ],
          [
            "Months 5 to 6",
            "Figma and prototyping."
          ],
          [
            "Months 7 to 8",
            "User research and UX strategy."
          ],
          [
            "Months 9 to 10",
            "Real projects and case studies."
          ],
          [
            "Months 11 to 12",
            "Portfolio, freelancing and career."
          ]
        ]
      }
    ],
    "takeaway": "The plan moves from foundations to practice, then a real project and a published portfolio. Its closing motto is small steps, big results."
  },
  {
    "cat": "UI & UX",
    "id": "daily-uiux-news-4-oct",
    "kicker": "Design news",
    "title": "Daily UI/UX news: 4 October 2026",
    "by": "uiuxaadi",
    "date": "Oct 2026",
    "src": "DeFDwDfErUc",
    "summary": "Six news items from the Figma world, as of 4 October 2026. This is a point-in-time update, so dates and plans in it may have moved on.",
    "groups": [
      {
        "name": "Figma AI Agent becomes official in 2 days",
        "note": "Figma's Design Agent and Weave move from open beta to General Availability on 6 October 2026.",
        "list": [
          [
            "AI works directly in Figma",
            "Generate, edit and iterate designs inside Figma."
          ],
          [
            "More prompt-based design workflows",
            "Turn ideas into editable designs with simple prompts."
          ],
          [
            "AI credits apply after GA",
            "Figma AI credits will be used once it is officially live."
          ],
          [
            "Why it matters",
            "AI-assisted design is moving from experimentation into the normal Figma workflow."
          ]
        ]
      },
      {
        "name": "Figma Motion just got seriously better",
        "note": "The September 30 Motion update added custom motion styles, audio, advanced text animation, character, word and line animation, and Lottie and dotLottie export.",
        "list": [
          [
            "Custom motion styles",
            "Create and reuse motion styles."
          ],
          [
            "Audio",
            "Add audio to your prototypes."
          ],
          [
            "Advanced text animation",
            "Animate by character, word or line."
          ],
          [
            "Lottie and dotLottie export",
            "Export animations easily, including MP4 and WebM with audio."
          ],
          [
            "Why it matters",
            "You can now take more of the motion-design workflow inside Figma."
          ]
        ]
      },
      {
        "name": "Figma Community just became more creative",
        "note": "Designers can publish ideas, animations, prototypes and experiments as Riffs, making Community more of a creative showcase than just a template and plugin library.",
        "list": [
          [
            "Showcase your experiments",
            "Your creative work can reach a larger audience."
          ],
          [
            "Build your portfolio",
            "A new way to gain visibility as a designer."
          ],
          [
            "More than just templates",
            "Community becomes a space for creativity and innovation."
          ]
        ]
      },
      {
        "name": "India is getting its first Figma Config",
        "note": "Config India, Bengaluru: 15 October 2026, in person with free virtual attendance. Figma says 4,000+ designers, developers, marketers and product leaders are expected.",
        "list": [
          [
            "New products and updates",
            "Expected announcements and feature showcases."
          ],
          [
            "Design, engineering and product sessions",
            "Learn from industry leaders."
          ],
          [
            "India's design ecosystem",
            "Community, opportunities and local updates."
          ]
        ]
      },
      {
        "name": "The designer and AI-agent relationship is changing",
        "note": "A Friends of Figma session held on October 3 focused on moving beyond simple prompting toward designing alongside AI agents: directing, structuring and critiquing AI-generated work.",
        "list": [
          [
            "The new workflow",
            "Prompting, directing, reviewing, then designing AI workflows."
          ],
          [
            "More strategic role",
            "Focus on direction, judgement and creativity."
          ],
          [
            "New skills to learn",
            "Prompting, reviewing and working with AI agents."
          ],
          [
            "Bigger possibilities",
            "Faster exploration, better iterations and new workflows."
          ]
        ]
      },
      {
        "name": "Figma Auto Layout is thinking more like CSS",
        "note": "The updated Auto Layout now includes vertical wrapping and improved layout behaviour, making it work more like CSS Flexbox.",
        "list": [
          [
            "Closer to CSS Flexbox",
            "Works more like how developers build layouts."
          ],
          [
            "Better collaboration",
            "The same mental model for designers and developers."
          ],
          [
            "More flexible layouts",
            "Vertical wrapping and improved behaviour."
          ]
        ]
      }
    ],
    "takeaway": "The post's line on AI: it will not replace the designer, but it will change what designers do."
  },
  {
    "cat": "UI & UX",
    "id": "daily-uiux-news-19-oct",
    "kicker": "Design news",
    "title": "Daily UI/UX news: 19 October 2026",
    "by": "uiuxaadi",
    "date": "Oct 2026",
    "src": "DeryNQmk-Q0",
    "summary": "Six updates from the design tool world, as of 19 October 2026. This is a point-in-time update, so features may have changed since.",
    "groups": [
      {
        "name": "Figma Specs: your designs need more context",
        "note": "A new way to bring design, documentation and technical details together, built for teams and AI agents. The goal is fewer misunderstandings and smoother collaboration between designers and developers.",
        "list": [
          [
            "Design intent",
            "Why the design is the way it is."
          ],
          [
            "Visual exploration",
            "The references and options behind it."
          ],
          [
            "Technical details",
            "What developers need to build it."
          ]
        ]
      },
      {
        "name": "Adobe Photoshop is getting a new look",
        "note": "A refreshed interface with clearer tools, better organisation and modern design.",
        "list": [
          [
            "Cleaner tool labels",
            "Clearer tool organisation."
          ],
          [
            "Better organisation",
            "A more streamlined interface."
          ],
          [
            "Improved contrast and accessibility",
            "Better readability."
          ]
        ]
      },
      {
        "name": "Figma Make: from prototype to product",
        "note": "Figma Make now includes backend capabilities to help you build real apps faster.",
        "list": [
          [
            "CMS",
            "A built-in content system."
          ],
          [
            "Database",
            "Store and manage data."
          ],
          [
            "Authentication",
            "Ready-to-use user login."
          ],
          [
            "APIs",
            "Connect your workflows."
          ],
          [
            "Admin panel",
            "Manage your app from one place."
          ]
        ]
      },
      {
        "name": "Figma MCP: AI agents are getting closer to Figma",
        "note": "Expanded MCP support makes it easier for AI tools to work with your designs. It lists ChatGPT, Claude, Cursor, GitHub Copilot and VS Code as example tools.",
        "list": [
          [
            "20+ new partners",
            "Expanded MCP support across popular AI tools."
          ],
          [
            "From design to code",
            "Seamless integration with code-backed files."
          ],
          [
            "Read design files",
            "Let AI understand your components and structure."
          ],
          [
            "Work with code layers",
            "Access and modify code-backed prototypes directly."
          ],
          [
            "Use design systems",
            "Give AI access to your components and tokens."
          ],
          [
            "Automate workflows",
            "Generate, update and manage designs with natural language."
          ]
        ]
      },
      {
        "name": "Google Stitch: design interfaces with prompts",
        "note": "Makes it easier to turn your ideas into high-quality UI designs using AI.",
        "list": [
          [
            "Text to UI",
            "Turn prompts into beautiful screens."
          ],
          [
            "Multiple screens",
            "Generate full flows instantly."
          ],
          [
            "Design system ready",
            "Consistent and editable designs."
          ]
        ]
      },
      {
        "name": "Adobe and NVIDIA: the future of creative workflows",
        "note": "The partnership expands to accelerate AI-powered creative tools.",
        "list": [
          [
            "AI-powered tools",
            "Across Photoshop, Premiere, Substance 3D and more."
          ],
          [
            "Smarter workflows",
            "Generate, edit and iterate faster with AI."
          ],
          [
            "Faster performance",
            "Up to 2x faster processing on NVIDIA RTX hardware."
          ],
          [
            "Built for creators",
            "More control and speed."
          ]
        ]
      }
    ],
    "takeaway": "The common thread across the six items is that AI agents are moving into the core design and creative tools, not sitting beside them."
  },
  {
    "cat": "UI & UX",
    "id": "articles-this-week-27",
    "kicker": "Reading list",
    "title": "Articles I read this week, part 27",
    "by": "designedbyshreya",
    "date": "Sep 2026",
    "src": "Dc8ttt_mSJj",
    "summary": "A reading list of six design articles plus a bonus, shared as screenshots on a carousel. They are Medium posts about AI, Figma-to-code and UX laws. The post gives titles and, for most, the author and publication, but not the links.",
    "groups": [
      {
        "name": "The six articles",
        "note": "The author sent the direct article links by DM when you commented \"Articles\", so the links are not in the post.",
        "list": [
          [
            "How The Best Designers Are Beating AI & Becoming Invaluable",
            "Muzli - Design Inspiration, by Punit Chawla. Subtitle: the anti-AI movement has truly begun."
          ],
          [
            "From Figma to Front-End Without Losing Your Mind",
            "Bootcamp, by Lukasz Szadkowski. Subtitle: making an AI agent build a real component library, not just screens."
          ],
          [
            "10 UX Laws Only Senior Designers Actually Use (And Where to Apply Them)",
            "Listed in the caption only, so author and publication are unknown."
          ],
          [
            "How to become an AI Designer",
            "UX Collective, by Maya Brennan. Subtitle: a realistic guide to shipping your own designs."
          ],
          [
            "2026-2030: How AI Will Change the UI/UX Designer's Workflow",
            "By Dolly Borade Solanki. Subtitle: why UX designers will spend less time designing screens and more."
          ],
          [
            "5 Mac apps every designer needs",
            "By Arpit Chandak. Subtitle: small tools that fixed the parts of my day Apple never bothered to."
          ]
        ]
      },
      {
        "name": "Bonus",
        "list": [
          [
            "15 UI/UX Websites Every Designer Should Bookmark, Part 02",
            "By Sai Krishna Kadapa. A curated collection of website inspiration, UI patterns and product sites."
          ]
        ]
      }
    ],
    "takeaway": "Four of the six are about how AI changes design work, so this is a good set to read together."
  },
  {
    "cat": "UI & UX",
    "id": "articles-this-week-26",
    "kicker": "Reading list",
    "title": "Articles I read this week, part 26",
    "by": "designedbyshreya",
    "date": "Aug 2026",
    "src": "DcQ20lvmXQG",
    "summary": "A reading list of five design articles plus a bonus, shared as screenshots on a carousel, covering hiring, typography, UX laws and the future of the field. The post gives titles and, where visible, the publication and author, but not the links.",
    "groups": [
      {
        "name": "The six articles",
        "note": "The direct links were sent by DM when you commented \"Articles\", so they are not in the post.",
        "list": [
          [
            "How UI/UX Designers Will Be Hired Beyond 2026 (And How I'm Preparing Today)",
            "By Dolly Borade Solanki. Subtitle: the new hiring checklist for UI/UX designers in the age of AI."
          ],
          [
            "Typography in UI Design: 10 Rules That Will Instantly Improve Your Interfaces",
            "ATNO for UI/UX Designing. Subtitle: your fonts are probably fine, your typography is not."
          ],
          [
            "10 UX Laws Only Senior Designers Actually Use (And Where to Apply Them)",
            "Muzli - Design Inspiration, by Nishkarsh Gupta. Everyone knows Hick's Law and Fitts's Law, these are the ten that most designers do not. This article is also in part 27."
          ],
          [
            "Did Apple abandon its own design heuristics and accessibility principles?",
            "UX Collective, by Michal Langmajer. At WWDC 2025, Apple introduced Liquid Glass and broke key design principles."
          ],
          [
            "One skill separates the designers who survive 2026 from the ones who don't",
            "UX Collective, by Arin Bhowmick. Subtitle: AI is putting the future of UX designers in jeopardy, unless they adapt."
          ]
        ]
      },
      {
        "name": "Bonus",
        "list": [
          [
            "What Will Happen to the UI/UX Design Industry in the Next 5 Years?",
            "By Heshan Design. If you open LinkedIn or Twitter on any given day, you will see two very different views on the industry."
          ]
        ]
      }
    ],
    "takeaway": "Read the typography and UX laws articles for craft, and the hiring and Apple ones for how the field is changing."
  },
  {
    "cat": "UI & UX",
    "id": "ui-menu-styles-6",
    "kicker": "Navigation",
    "title": "6 UI menu styles every designer should know",
    "by": "vamshi.work",
    "date": "Oct 2026",
    "src": "DeyJL7Hqgj1",
    "summary": "A single image naming six menu icon styles, from Hamburger to Candy Box. The post says each one serves a different purpose in UI design but does not spell the purposes out, so this guide lists the names and what each icon looks like.",
    "groups": [
      {
        "name": "The six menus",
        "list": [
          [
            "1. Hamburger",
            "Three stacked horizontal lines."
          ],
          [
            "2. Kebab",
            "Three dots in a vertical line."
          ],
          [
            "3. Veggie Burger",
            "Two stacked horizontal lines."
          ],
          [
            "4. Strawberry",
            "Three horizontal lines that get shorter from top to bottom."
          ],
          [
            "5. Stairs",
            "Three horizontal lines stepped to the left, like stairs."
          ],
          [
            "6. Candy Box",
            "A three-by-three grid of dots."
          ]
        ]
      }
    ],
    "takeaway": "The caption asks which menu style you use most. For when to use each, you would need to look at the original post, as it gives only the names."
  },
  {
    "cat": "AI for design",
    "id": "claude-free-courses",
    "kicker": "Claude",
    "title": "9 free Claude courses, in order",
    "by": "Vamshi",
    "date": "2026",
    "src": "DeJ1mXGnybu",
    "summary": "A learning roadmap of nine free Claude courses, from beginner to building with the API. Take them in the order listed.",
    "groups": [
      {
        "name": "The roadmap",
        "note": "From the carousel caption. The links were sent by DM, so they are not listed here.",
        "list": [
          [
            "01. Claude 101",
            "Start here."
          ],
          [
            "02. AI Fluency: Framework and Foundations",
            "The core ideas behind working well with AI."
          ],
          [
            "03. AI Capabilities and Limitations",
            "What AI can and cannot do."
          ],
          [
            "04. Claude Code 101",
            "Getting started with Claude Code."
          ],
          [
            "05. Claude Platform 101",
            "An overview of the platform."
          ],
          [
            "06. Building with the Claude API",
            "Using Claude inside your own products."
          ],
          [
            "07. Introduction to MCP",
            "Connecting AI to tools and data."
          ],
          [
            "08. Agent Skills",
            "Reusable skills for agents."
          ],
          [
            "09. Subagents",
            "Splitting work across agents."
          ]
        ]
      }
    ],
    "takeaway": "Take them in order: prompting and AI fundamentals first, then Claude Code, the API, MCP, skills and subagents."
  },
  {
    "cat": "AI for design",
    "id": "claude-brand-guidelines-prompt",
    "kicker": "Claude",
    "title": "A Claude prompt for brand guidelines",
    "by": "Designare",
    "date": "2026",
    "src": "DeJJIBFEdRL",
    "summary": "A carousel about using Claude prompts to build brand guidelines. The exact prompts were only sent by DM, so none are written out here.",
    "groups": [
      {
        "name": "What the post covers",
        "list": [
          [
            "The idea",
            "Use Claude to build a brand guidelines document."
          ],
          [
            "The prompts",
            "Not shown in the post. Commenting \"PROMPT\" on Instagram sends them by DM."
          ]
        ]
      }
    ],
    "takeaway": "Thin post: there is no prompt text to copy, only the idea."
  },
  {
    "cat": "AI for design",
    "id": "ai-product-designer-12",
    "kicker": "AI",
    "title": "12 ways to use AI as a product designer",
    "by": "Rajan Dube",
    "date": "2026",
    "src": "DeCb58-CD1-",
    "summary": "A carousel of twelve uses of AI across a product design project. The slide text could not be kept, so only the title is recorded here.",
    "groups": [
      {
        "name": "What the post covers",
        "list": [
          [
            "Topic",
            "12 ways to use AI as a product designer."
          ],
          [
            "Detail",
            "Not available. Open the original post for the twelve slides."
          ]
        ]
      }
    ],
    "takeaway": "Thin entry: the original post is the source for the actual twelve ways."
  },
  {
    "cat": "AI for design",
    "id": "claude-ux-prompts",
    "kicker": "Claude",
    "title": "9 Claude prompts for UX designers",
    "by": "Vamshi",
    "date": "2026",
    "src": "Dd_kji7H6ag",
    "summary": "Nine prompt topics that cover a real UX workflow, not just rewriting copy. Use Claude as a thinking partner and keep the product decisions yourself.",
    "groups": [
      {
        "name": "What to ask Claude to do",
        "note": "From the caption. The prompt wording is in the carousel and in a DM pack.",
        "list": [
          [
            "Frame problems",
            "Turn a vague product problem into a clear one."
          ],
          [
            "Audit competitors",
            "Review what others do."
          ],
          [
            "Plan interviews",
            "Prepare better user interviews."
          ],
          [
            "Synthesise research",
            "Pull themes out of notes."
          ],
          [
            "Create JTBDs",
            "Write jobs to be done."
          ],
          [
            "Map user flows",
            "Lay out the steps."
          ],
          [
            "Find edge cases",
            "Spot what could go wrong."
          ],
          [
            "Improve microcopy",
            "Tighten UX writing."
          ],
          [
            "Critique your UI",
            "Review before handoff."
          ]
        ]
      }
    ],
    "takeaway": "The goal is not to let AI make product decisions. It is to explore faster and challenge your assumptions."
  },
  {
    "cat": "AI for design",
    "id": "ai-ux-process",
    "kicker": "AI",
    "title": "Use AI across the UX process",
    "by": "Vamshi",
    "date": "2026",
    "src": "Dc_bwqYn9VI",
    "summary": "AI will not replace UX designers, but designers who use it well will work faster. The advantage is using it across the process, not asking it to design an app.",
    "groups": [
      {
        "name": "Where AI helps",
        "note": "From the caption.",
        "list": [
          [
            "Research",
            "Summarise research and build quick personas."
          ],
          [
            "Strategy",
            "Explore JTBDs and map user flows."
          ],
          [
            "Design",
            "Audit screens, improve UX copy and explore UI directions."
          ],
          [
            "Testing",
            "Plan usability tests."
          ]
        ]
      }
    ],
    "takeaway": "Adapt the prompts to your own projects. AI should speed up your thinking, not replace it."
  },
  {
    "cat": "AI for design",
    "id": "claude-ux-use-cases",
    "kicker": "Claude",
    "title": "What Claude can do for UX designers",
    "by": "Vamshi",
    "date": "2026",
    "src": "Dcv0v6In85q",
    "summary": "Claude does more than write copy. These are the uses the post lists across the UX workflow.",
    "groups": [
      {
        "name": "Use cases",
        "note": "From the caption.",
        "list": [
          [
            "Synthesise research",
            "Make sense of what you learned."
          ],
          [
            "Plan interviews",
            "Prepare questions and structure."
          ],
          [
            "Map user flows",
            "Draw the journey."
          ],
          [
            "Improve information architecture",
            "Organise content and navigation."
          ],
          [
            "Write UX copy",
            "Draft and refine text."
          ],
          [
            "Critique screens",
            "Get a second opinion on a design."
          ],
          [
            "Uncover edge cases",
            "Find unusual situations."
          ],
          [
            "Explore prototypes",
            "Try ideas quickly."
          ],
          [
            "Build a project knowledge base",
            "Keep project context in one place."
          ]
        ]
      }
    ],
    "takeaway": "Use AI to remove repetitive work and spend more time on the decisions that need a designer."
  },
  {
    "cat": "AI for design",
    "id": "mcp-explained",
    "kicker": "AI",
    "title": "MCP explained without the jargon",
    "by": "Vamshi",
    "date": "2026",
    "src": "Dcq31xhn5du",
    "summary": "AI cannot reach your files, tools or databases by itself. MCP, the Model Context Protocol, is the standard that connects them.",
    "groups": [
      {
        "name": "The idea",
        "note": "From the caption.",
        "list": [
          [
            "Like USB-C for AI",
            "One standard for connecting AI applications to tools, data and external systems."
          ],
          [
            "Why it matters",
            "It moves AI from chatbots to assistants and agents that can take action."
          ]
        ]
      }
    ],
    "takeaway": "If you want to understand MCP, think of it as one common plug instead of a custom connection for every tool."
  },
  {
    "cat": "Career",
    "id": "interview-process-ux",
    "kicker": "Career",
    "title": "12 weeks, 7 rounds, 0 offers",
    "by": "Vamshi",
    "date": "2026",
    "src": "DeivY4Ep6KF",
    "summary": "A satirical timeline of a bad design hiring process, with a point: companies should create better candidate experiences.",
    "groups": [
      {
        "name": "The timeline",
        "list": [
          [
            "Week 1",
            "Submit your portfolio."
          ],
          [
            "Week 2",
            "Recruiter screening."
          ],
          [
            "Week 3",
            "Portfolio presentation."
          ],
          [
            "Week 4",
            "Unpaid take-home assignment."
          ],
          [
            "Week 6",
            "Live whiteboard challenge."
          ],
          [
            "Week 8",
            "Panel interview."
          ],
          [
            "Week 10",
            "Culture fit interview."
          ],
          [
            "Week 12",
            "\"We went with an internal candidate.\""
          ]
        ]
      },
      {
        "name": "What a good process does",
        "list": [
          [
            "Respect time",
            "Do not drag candidates through endless rounds."
          ],
          [
            "Communicate clearly",
            "Give actionable feedback."
          ],
          [
            "Test real skills",
            "Evaluate actual skills."
          ]
        ]
      }
    ],
    "takeaway": "Use it as a checklist for what to expect, and for what to ask a company about its process."
  },
  {
    "cat": "Career",
    "id": "six-vs-thirty-lpa",
    "kicker": "Career",
    "title": "What separates a 6 LPA designer from a 30 LPA one",
    "by": "Vamshi",
    "date": "2026",
    "src": "DeRwbYHH-oU",
    "summary": "Two designers with the same experience can earn very different pay. The gap is not Figma skill, it is how they think.",
    "groups": [
      {
        "name": "The ladder",
        "list": [
          [
            "UI skills",
            "Get you started."
          ],
          [
            "Problem-solving",
            "Makes you valuable."
          ],
          [
            "Product thinking",
            "Sets you apart."
          ],
          [
            "Ownership",
            "Builds trust."
          ],
          [
            "Business impact",
            "Accelerates your career."
          ]
        ]
      },
      {
        "name": "The question to switch to",
        "list": [
          [
            "Stop asking",
            "\"How should this look?\""
          ],
          [
            "Start asking",
            "\"What problem are we solving, and how will we know it worked?\""
          ]
        ]
      }
    ],
    "takeaway": "Your portfolio should show how you think, the decisions you made and the outcomes you influenced, not only screens."
  },
  {
    "cat": "Career",
    "id": "fresher-high-salary",
    "kicker": "Career",
    "title": "Getting to a high salary as a fresher",
    "by": "Vamshi",
    "date": "2026",
    "src": "Dd1gdNfH5X8",
    "summary": "A carousel on what the few freshers who reach about 30 LPA do differently. The caption was cut off and the slides were not kept, so only the framing is recorded.",
    "groups": [
      {
        "name": "What the post says",
        "list": [
          [
            "The claim",
            "30 LPA as a fresher sounds unrealistic, and for most people it probably is."
          ],
          [
            "The pattern",
            "The people who get there are not just collecting courses and certificates."
          ]
        ]
      }
    ],
    "takeaway": "Thin entry: open the original post for the full list of what they do instead."
  },
  {
    "cat": "Career",
    "id": "ux-portfolio-mistakes",
    "kicker": "Career",
    "title": "10 UX portfolio mistakes that lose a recruiter",
    "by": "Vamshi",
    "date": "2026",
    "src": "DdhBwwDnxOF",
    "summary": "A portfolio can look polished and still lose the recruiter in 30 seconds. The mistakes are mostly not about visual design.",
    "groups": [
      {
        "name": "The mistakes",
        "note": "From the caption.",
        "list": [
          [
            "Weak first impression",
            "Nothing draws the recruiter in."
          ],
          [
            "No clear problem statement",
            "The reader cannot tell what you solved."
          ],
          [
            "Only final UI",
            "No thinking behind the screens."
          ],
          [
            "Fake process sections",
            "A process that was clearly made up."
          ],
          [
            "Too much text",
            "Hard to skim."
          ],
          [
            "Tiny unreadable screens",
            "Images are too small to read."
          ],
          [
            "Too many average projects",
            "3 to 4 strong projects beat 10 weak ones."
          ],
          [
            "No measurable impact",
            "No numbers or results."
          ],
          [
            "Broken prototype links",
            "Make the next step effortless."
          ],
          [
            "No clear role or ownership",
            "Unclear what you personally did."
          ]
        ]
      },
      {
        "name": "Final checklist",
        "list": [
          [
            "Value",
            "Is it clear in 5 seconds?"
          ],
          [
            "Case studies",
            "Can recruiters skim every one?"
          ],
          [
            "Decisions and impact",
            "Did you show them?"
          ],
          [
            "Mobile",
            "Is everything easy on a phone?"
          ]
        ]
      }
    ],
    "takeaway": "Treat the portfolio as a product designed for recruiters, not as a gallery."
  },
  {
    "cat": "Career",
    "id": "ui-ux-roadmap",
    "kicker": "Career",
    "title": "A roadmap for a UI/UX career",
    "by": "Aadish Bansal",
    "date": "2026",
    "src": "DddgdwpFEW-",
    "summary": "A roadmap graphic for UI/UX designers. The full guide was sent by DM, and the image itself was not kept, so no steps are recorded.",
    "groups": [
      {
        "name": "What the post says",
        "list": [
          [
            "The point",
            "Most designers have no roadmap or guidance for a UI/UX career."
          ],
          [
            "The guide",
            "Sent by DM when you comment \"Roadmap\". Not in the post text."
          ]
        ]
      }
    ],
    "takeaway": "Thin entry: open the original post to see the roadmap image."
  },
  {
    "cat": "Career",
    "id": "product-designer-resume",
    "kicker": "Career",
    "title": "Resume checklist for product designers",
    "by": "Vamshi",
    "date": "2026",
    "src": "DdjkWB1Hwui",
    "summary": "A resume should quickly prove what you worked on, how you think and what impact you had. Ten steps to fix before your next application.",
    "groups": [
      {
        "name": "Header and summary",
        "list": [
          [
            "Header basics",
            "Keep name, title, location, email, portfolio and LinkedIn. Avoid a missing role title, no portfolio link, weak contact details and clutter."
          ],
          [
            "Summary check",
            "In 2 to 3 lines: who you are, what you do and what you specialise in. Avoid a generic intro, no specialisation, no years and no product context."
          ]
        ]
      },
      {
        "name": "Experience",
        "list": [
          [
            "Experience bullets",
            "Use action + project + result. Avoid \"Designed screens\", \"Worked with developers\", \"Created wireframes\" and \"Helped the team\"."
          ],
          [
            "Impact metrics",
            "Use numbers for conversion, retention, time saved or adoption. Avoid no numbers and no before/after context."
          ],
          [
            "Product thinking",
            "Show the problem, the decision and why it mattered. Avoid only visual bullets and no trade-offs."
          ]
        ]
      },
      {
        "name": "Skills and format",
        "list": [
          [
            "Skills and tools",
            "Group by UX, UI, Research, Prototyping and Handoff. Avoid a massive tool dump and outdated tools."
          ],
          [
            "ATS and formatting",
            "Use clean structure, readable spacing and role-specific language. Avoid tiny fonts, dense paragraphs and over-designed layouts."
          ],
          [
            "Tailor for the role",
            "Match title, domain, skills and outcomes. Avoid one resume for every job."
          ]
        ]
      },
      {
        "name": "Final checklist",
        "list": [
          [
            "Before you apply",
            "Clear title, strong summary, relevant experience, impact metrics, portfolio link, product-thinking skills, clean formatting, tailored keywords."
          ]
        ]
      }
    ],
    "takeaway": "Show outcomes, ownership and lessons, and write for each role instead of sending one resume everywhere."
  },
  {
    "cat": "Career",
    "id": "twenty-lpa-designer",
    "kicker": "Career",
    "title": "10 skills that make a designer worth 20 LPA+",
    "by": "Vamshi",
    "date": "2026",
    "src": "DdeU5nTH3pS",
    "summary": "A career is not built on Figma alone. You do not need all ten, but the more you combine, the harder you are to replace.",
    "groups": [
      {
        "name": "The ten skills",
        "list": [
          [
            "Product thinking",
            "Know the user problem, business goal, constraints and trade-offs. Ask \"What outcome should this design improve?\" not \"What should this screen look like?\""
          ],
          [
            "UX research",
            "Run interviews, analyse competitors, spot patterns, synthesise feedback and turn research into decisions."
          ],
          [
            "Interaction design",
            "User flows, navigation, states, edge cases, feedback and micro-interactions. A beautiful UI with a confusing flow is still bad UX."
          ],
          [
            "Visual design",
            "Typography, spacing, grid, colour, hierarchy, components and responsive layouts. The goal is clarity, not decoration."
          ],
          [
            "Design systems",
            "Components, variants, variables, tokens, naming, documentation and governance."
          ],
          [
            "Data and metrics",
            "Conversion, activation, retention, drop-off, task success and feature adoption. Say \"Task completion improved from X to Y\" not \"The redesign looks better\"."
          ],
          [
            "AI workflow",
            "Research synthesis, UX writing, edge cases, ideation and analysis."
          ],
          [
            "Rapid prototyping",
            "Interactive prototypes, vibe-coded concepts and functional demos."
          ],
          [
            "Communication",
            "Explain decisions, show trade-offs and clarify next steps."
          ],
          [
            "Business understanding",
            "Revenue, pricing, funnels, acquisition, retention and customer value."
          ]
        ]
      }
    ],
    "takeaway": "Pick one skill to improve this month and build one at a time."
  },
  {
    "cat": "Career",
    "id": "product-designer-roadmap-2027",
    "kicker": "Career",
    "title": "Become a product designer before Jan 2027",
    "by": "Vamshi",
    "date": "2026",
    "src": "DdO2_XhHweZ",
    "summary": "A five-month beginner plan: learn the right things in sequence instead of everything at once.",
    "groups": [
      {
        "name": "The timeline",
        "list": [
          [
            "September",
            "Learn fundamentals."
          ],
          [
            "October",
            "Design daily."
          ],
          [
            "November",
            "Think like a product designer."
          ],
          [
            "December",
            "Build a portfolio and apply."
          ],
          [
            "January 2027",
            "Ready to apply."
          ]
        ]
      },
      {
        "name": "Month by month",
        "list": [
          [
            "Know the role",
            "Understand users, define problems, map flows, design interfaces, prototype, validate and work with developers. The job is to solve product problems, not decorate UI."
          ],
          [
            "September basics",
            "UX principles, research basics, information architecture, user flows, wireframing, UI fundamentals and Figma with Auto Layout. Stop copying screens and understand why they work."
          ],
          [
            "Design every day",
            "Redesign onboarding, checkout, search, profile, dashboard, empty states and error states. For each, answer what the problem is and why your solution is better."
          ],
          [
            "Build 2 projects",
            "Project 1: improve an existing product. Project 2: solve a real problem from scratch. Show problem, research, user flow, decisions, UI, prototype and learnings. Quality beats ten fake projects."
          ],
          [
            "Product thinking",
            "Ask who the user is, what they are trying to achieve, what is stopping them, why the business should solve it, what metric could improve and what trade-offs exist."
          ],
          [
            "Use AI smartly",
            "For competitor research, interview synthesis, JTBD exploration, flow variations, edge cases, UX copy, design critique and prototypes. It should make you faster, not replace your thinking."
          ],
          [
            "Build your portfolio",
            "2 to 3 strong case studies, each showing problem, context, research, key decisions, user flow, final UI and outcome. Recruiters should understand your thinking in 5 minutes."
          ],
          [
            "Start applying",
            "From December: apply daily, reach out to founders, connect with designers, ask for portfolio feedback, post your work online, apply to internships and junior roles and do mock interviews. Aim for 5 to 10 quality applications a day."
          ]
        ]
      },
      {
        "name": "By Jan 2027, aim to have",
        "list": [
          [
            "Checklist",
            "Strong fundamentals, Figma confidence, 2 to 3 case studies, product thinking, an AI workflow, a portfolio, interview practice and applications going out."
          ]
        ]
      }
    ],
    "takeaway": "Learn enough to start building, and build enough to become hireable."
  },
  {
    "cat": "Career",
    "id": "ux-interview-questions-20",
    "kicker": "Career",
    "title": "20 UX interview questions to always ask",
    "by": "Vamshi",
    "date": "2026",
    "src": "DdJjAfrn87i",
    "summary": "Most user interviews fail because the questions are vague, hypothetical or leading. Ask about what people actually did, not what they think they would do.",
    "groups": [
      {
        "name": "Start with context",
        "list": [
          [
            "1",
            "Tell me about the last time you tried to do this."
          ],
          [
            "2",
            "What were you trying to achieve?"
          ]
        ]
      },
      {
        "name": "Understand the current process",
        "list": [
          [
            "3",
            "Walk me through how you do this today."
          ],
          [
            "4",
            "What tools or methods do you currently use?"
          ]
        ]
      },
      {
        "name": "Find the pain points",
        "note": "Do not ask \"Do you find this difficult?\" Let users explain the pain themselves.",
        "list": [
          [
            "5",
            "What is the hardest part of this process?"
          ],
          [
            "6",
            "Where do you usually get stuck or frustrated?"
          ]
        ]
      },
      {
        "name": "Frequency and impact",
        "list": [
          [
            "7",
            "How often does this problem happen?"
          ],
          [
            "8",
            "What happens when you can't solve it?"
          ]
        ]
      },
      {
        "name": "Discover workarounds",
        "list": [
          [
            "9",
            "What do you do when this doesn't work?"
          ],
          [
            "10",
            "Have you created any workaround for it?"
          ]
        ]
      },
      {
        "name": "Understand decisions",
        "list": [
          [
            "11",
            "What matters most when choosing a solution?"
          ],
          [
            "12",
            "What would make you stop using a product like this?"
          ]
        ]
      },
      {
        "name": "Explore expectations",
        "list": [
          [
            "13",
            "What did you expect to happen here?"
          ],
          [
            "14",
            "Was anything different from what you expected?"
          ]
        ]
      },
      {
        "name": "Dig deeper",
        "list": [
          [
            "15",
            "Why is that important to you?"
          ],
          [
            "16",
            "Can you tell me more about that?"
          ],
          [
            "17",
            "What made you feel that way?"
          ],
          [
            "18",
            "Can you give me an example?"
          ]
        ]
      },
      {
        "name": "Close strong",
        "list": [
          [
            "19",
            "If you could change one thing about this experience, what would it be?"
          ],
          [
            "20",
            "Is there anything important I didn't ask?"
          ]
        ]
      }
    ],
    "takeaway": "Don't sell, defend or lead. Just listen, and when the answer is useful, ask \"Why?\""
  },
  {
    "cat": "Career",
    "id": "ui-ux-interview-qa",
    "kicker": "Career",
    "title": "UI/UX designer interview Q&A",
    "by": "FLM Freelancing",
    "date": "2026",
    "src": "DdG8qGOAfBG",
    "summary": "A guide to common questions for a UI/UX designer interview. The caption was cut off and the slides were not kept, so the questions are not listed.",
    "groups": [
      {
        "name": "What the post covers",
        "list": [
          [
            "Topic",
            "Important interview questions to prepare for a UI/UX designer role."
          ],
          [
            "Detail",
            "Not available here. Open the original post for the questions and answers."
          ]
        ]
      }
    ],
    "takeaway": "Thin entry: the original post is the source for the actual questions."
  },
  {
    "cat": "Career",
    "id": "first-1000-freelancing",
    "kicker": "Career",
    "title": "Your first $1,000 as a freelancer in 30 days",
    "by": "Vamshi",
    "date": "2026",
    "src": "DdtxRXWn1RF",
    "summary": "Do not start by chasing followers. Build a simple system and become useful enough that someone will pay you to solve one specific problem.",
    "groups": [
      {
        "name": "The 30-day system",
        "note": "From the caption.",
        "list": [
          [
            "1",
            "Pick one service."
          ],
          [
            "2",
            "Turn it into a clear offer."
          ],
          [
            "3",
            "Create 2 to 3 strong proof-of-work examples."
          ],
          [
            "4",
            "Build a list of potential clients."
          ],
          [
            "5",
            "Send personalised outreach every day."
          ],
          [
            "6",
            "Follow up consistently."
          ],
          [
            "7",
            "Close, deliver and ask for referrals."
          ]
        ]
      },
      {
        "name": "Ways to reach $1,000",
        "list": [
          [
            "1 client",
            "1 x $1,000"
          ],
          [
            "2 clients",
            "2 x $500"
          ],
          [
            "4 clients",
            "4 x $250"
          ]
        ]
      }
    ],
    "takeaway": "You do not need 100 clients, and you do not need to learn everything before starting."
  },
  {
    "cat": "Career",
    "id": "first-freelance-client",
    "kicker": "Career",
    "title": "Your first freelance client is closer than you think",
    "by": "Vamshi",
    "date": "2026",
    "src": "DdZiwToHzUs",
    "summary": "You can start without a big audience or a perfect portfolio. The caption was cut off and the slides were not kept, so only the opening is recorded.",
    "groups": [
      {
        "name": "What you do not need",
        "note": "From the start of the caption.",
        "list": [
          [
            "Followers",
            "10K followers."
          ],
          [
            "Experience",
            "Years of experience."
          ],
          [
            "Portfolio",
            "A perfect portfolio."
          ]
        ]
      }
    ],
    "takeaway": "Thin entry: open the original post for what to do instead."
  },
  {
    "cat": "Career",
    "id": "reusable-roadmap-png",
    "kicker": "Career",
    "title": "A reusable roadmap PNG",
    "by": "Aadish Bansal",
    "date": "2026",
    "src": "DeGV757GBm8",
    "summary": "An image post sharing a reusable roadmap file. The caption has no steps and the image was not kept, so there is nothing to write out.",
    "groups": [
      {
        "name": "What the post says",
        "list": [
          [
            "The post",
            "An unlimited, reusable PNG roadmap."
          ],
          [
            "More details",
            "Sent by DM when you comment \"roadmap\"."
          ]
        ]
      }
    ],
    "takeaway": "Thin entry: open the original post to see the image."
  }
];

  global.DESIGN_SYSTEM = {
    TOOL_GUIDES: TOOL_GUIDES,
    CATEGORY_GUIDES: CATEGORY_GUIDES,
    RESOURCE_CATEGORIES: RESOURCE_CATEGORIES,
    RESOURCES: RESOURCES,
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
