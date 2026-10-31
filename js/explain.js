/* ============================================================
   Plain-language explanations
   For every concept: a one-line heading, what it is, when to use it, why use it.
   Keys are the titles shown on the page. A key starting with "§" is a section heading.
   Each entry: [heading, definition, when to use, why use it]
   ============================================================ */
(function (global) {
  "use strict";

  var EXPLAIN = {};

  EXPLAIN.components = {
    "Text field": ["A box where people type", "A small box where someone types a short answer, like a name, an email or a search.", "Whenever you need a short piece of text: sign-up forms, search bars, comments.", "It is the most familiar way to collect words. Clear labels and hints stop people guessing what to type."],
    "Select": ["A list to pick one option from", "A box that opens a list so someone can choose one item, like a country or a date range.", "When there are about 5 to 15 options and showing them all would take too much room.", "It keeps the screen tidy and stops people typing something the system cannot understand."],
    "Checkbox": ["Tick as many as you like", "A small square people tick on or off. Each one works on its own.", "When someone can choose none, one or several options, like “Email me updates”.", "It makes a yes-or-no choice obvious, and several can be on at the same time."],
    "Radio": ["Pick exactly one", "A row of round buttons where only one can be chosen at a time.", "When there are 2 to 5 options and people should see them all, like Monthly or Yearly.", "Seeing every choice side by side makes comparing easy, and picking one switches the others off."],
    "Switch": ["An on and off lever", "A slider that flips a setting on or off straight away, like a light switch.", "For settings that take effect immediately, such as Notifications or Dark mode.", "It feels instant and everyone understands it. Use a checkbox instead when a Save button is needed."],
    "Slider": ["Drag to choose a value", "A bar with a handle that people drag to pick a number within a range.", "When the rough amount matters more than the exact number: volume, brightness, price range.", "Dragging is quicker than typing a number, and it shows the whole range at once."],
    "Tabs": ["Switch views in the same place", "A row of labels at the top of a section. Tapping one shows that part without leaving the page.", "When a page has 2 to 5 related parts, like Overview, Activity and Settings.", "Content stays organised and people always know where they are."],
    "Segmented control": ["A small either-or switch", "A row of joined buttons where one is always selected, used to change how the same content is shown.", "For 2 to 4 quick choices, such as Day, Week, Month, or Web and Mobile.", "It is compact, shows every option at once and reacts instantly."],
    "Navigation bar": ["The menu strip of an app", "The bar at the top or bottom of a screen with the main places you can go.", "On every main screen, so people can always move around or go back.", "It is the map of your product. People should never feel lost."],
    "Alert": ["A message that needs attention", "A box on the page that tells someone something important, like a warning, an error or good news.", "When people must notice something, like “Payment failed” or “Your trial ends tomorrow”.", "It explains what happened and what to do next, right where people are looking."],
    "Toast": ["A short note that disappears", "A small message that pops up for a few seconds to confirm something, then fades away by itself.", "To confirm quick actions such as “Saved” or “Link copied” that need no reply.", "It reassures without interrupting. Do not use it for anything people must read or act on."],
    "Progress": ["Shows how far along something is", "A bar or circle that fills up while something loads, uploads or finishes in steps.", "For anything that takes more than a second or two, like uploads or multi-step forms.", "People wait more patiently when they can see it is working and how much is left."],
    "Empty state": ["What to show when there is nothing yet", "A friendly screen shown when a list or page has no content yet.", "On a new account, an empty inbox or a search with no results.", "A blank screen feels broken. A short explanation and one button turn it into a first step."],
    "Badge": ["A tiny label with a status", "A small pill-shaped tag that adds a short piece of information, like New, Draft or 3.", "To flag a status or a count next to a name, icon or title.", "People can check status at a glance without reading anything long."],
    "Avatar": ["A picture or initials for a person", "A small round image, or the person’s initials, that stands for a user.", "Next to names in comments, lists, chat and profile menus.", "Faces and initials are recognised faster than names, and make a product feel personal."],
    "List": ["Rows of similar things", "A stack of rows where each row is one item, like a contact, a file or a setting.", "When you have many items of the same kind that people scan and tap.", "Rows are quick to scan from top to bottom and work well on small screens."],
    "Card": ["A box that groups related info", "A rounded box that holds a picture, a title and a few details about one thing.", "To show a collection of different things side by side, like products, articles or projects.", "It separates items clearly and makes each one feel complete and tappable."],
    "Dialog": ["A pop-up that asks for a decision", "A box that appears over the page and asks people to confirm or decide something before moving on.", "For important choices such as “Delete this project?”. Keep it for moments that really need a stop.", "It forces a pause before serious actions. Too many are annoying, so use it sparingly."],
    "Menu": ["A list of actions that opens on tap", "A small list that pops open from a button, with several actions to choose from.", "When there are several related actions, such as Edit, Duplicate and Delete, and buttons for each would clutter the screen.", "It keeps the screen clean and tucks away the less common actions until they are needed."]
  };

  EXPLAIN.buttons = {
    "§Variants": ["Six kinds of button", "Each type has a different weight, from loud (Primary) to quiet (Link), so people can tell what matters most.", "Choose by importance: one Primary, then Secondary or Ghost for the rest.", "Clear importance makes a screen easy to scan and decisions faster."],
    "§States": ["How a button reacts", "The looks a button takes as you use it: normal, hovered, pressed, focused, selected, disabled and loading.", "Design all of them. People see them every single time they use the product.", "States are the button’s way of answering: “I see you”, “I am working”, “I am not available”."],
    "§Sizes": ["Three heights", "Small, medium and large buttons for different spaces and devices.", "Pick by space and device: small for dense desktop screens, large for touch.", "Consistent sizes keep the product tidy and the tap targets comfortable."],
    "§Icons": ["Buttons with pictures", "Ways to combine an icon with a button: beside text, on its own, fully rounded or switchable.", "When a symbol makes the action clearer or saves space.", "A good icon is understood faster than words, but only if people recognise it."],
    "Primary": ["The main thing to do", "The most noticeable button: the one action you most want someone to take.", "Once per screen, for the key action: Save, Continue, Create.", "One clear main button removes doubt about what to do next. Two of them compete."],
    "Secondary": ["A calmer helper action", "A quieter button for actions that sit next to the main one.", "Beside a primary button, for options like Cancel, Back or Edit.", "It stays available without stealing attention from the main action."],
    "Outline": ["An outlined alternative", "A button with just a border and no fill: strong enough to notice, lighter than primary.", "For actions like Preview or Share that matter but are not the main goal.", "It gives an option real presence without competing with the main button."],
    "Ghost": ["The quietest button", "A button with no box or border until you point at it. Just text.", "For low-priority actions in toolbars, card footers and lists, such as Skip.", "It keeps busy screens calm. Do not use it alone, because it can look like plain text."],
    "Danger": ["For actions that cannot be undone", "A button styled to stand out, for actions that delete or remove something.", "For Delete, Remove or Revoke. Ask “Are you sure?” first.", "A different look makes people pause before doing something they cannot take back."],
    "Link": ["A button that looks like a link", "Plain text that takes someone to another place.", "Inside sentences and rows, for navigation like Learn more or View all.", "People already know links mean “go somewhere”. Do not use it for actions that save or change data."],
    "Small": ["Compact, for tight spaces", "A short button, 32 px tall, for places with little room.", "In tables, toolbars and dense cards.", "It fits more on the screen. It is too small for fingers on a phone."],
    "Medium": ["The everyday size", "The standard button, 40 px tall, for most screens.", "In forms, dialogs and normal pages.", "It is comfortable to click and balances well with the text around it."],
    "Large": ["Big and easy to hit", "A tall button, 48 px, that is easy to tap.", "For hero actions, and as the default on touch screens.", "Bigger targets mean fewer mis-taps, especially with thumbs."],
    "Leading icon": ["A small picture before the label", "A button with an icon on the left of its text.", "When an icon helps explain the action, like a plus before Add.", "Icon plus words is clearer than either on its own."],
    "Icon only": ["A button with just a symbol", "A square or round button with an icon and no text.", "In crowded toolbars for well-known actions like close, search or delete. Always add a hidden label for screen readers.", "It saves space. Only use symbols everyone knows, otherwise people cannot tell what it does."],
    "Pill": ["A fully rounded button", "A button with completely round ends, like a capsule.", "For friendly, casual or mobile interfaces, and for filter chips.", "The soft shape feels approachable and stands out among square elements."],
    "Toggle": ["A button that stays on", "A button that remembers whether it is switched on, like Save and Saved, or Bold.", "For actions people can turn on and off, such as favourite, follow or bold.", "It shows the current state without needing a separate indicator."]
  };

  EXPLAIN.colors = {
    "§Accent": ["The colour of action", "The one colour used to highlight what people can do. Here it is black, and white in dark mode.", "For main buttons, links and the selected item.", "A single accent keeps the design calm and guides the eye."],
    "§Accent tones": ["Lighter and darker versions", "A scale of shades of the accent colour, from very light to very dark.", "Use darker tones for text and buttons, lighter ones for backgrounds and hover effects.", "A fixed scale means every screen uses the same shades, so nothing looks randomly different."],
    "§Neutral tones": ["The greys behind everything", "A scale of greys used for backgrounds, borders and text.", "For page backgrounds, cards, dividers and body text.", "Most of an interface is neutral. A good grey scale gives depth without shouting."],
    "§Status": ["Colours that signal what happened", "Set colours for success, warning and danger messages.", "For alerts, form errors and confirmations.", "People read status instantly. Here each one also has an icon and a label, so nobody relies on colour alone."],
    "§Contrast": ["How easy text is to read", "How different the text colour is from the colour behind it. Higher contrast is easier to read.", "Check every text and background pair, especially small grey text.", "Good contrast helps everyone, including people with low vision or in bright sunlight."],
    "Black means “you can act on this”": ["One colour for everything tappable", "In this system, black (white in dark mode) is reserved for things you can press or choose.", "Use it only for primary buttons, links and selected items.", "When one colour always means “you can act here”, people learn a screen without any instructions."],
    "Success": ["Something went well", "The look for completed actions and valid input.", "After saving, sending or finishing something.", "Positive feedback confirms the action worked."],
    "Warning": ["Pay attention", "The look for things that need care but are not broken.", "When something might go wrong, like storage that is nearly full.", "A heads-up lets people fix a problem before it happens."],
    "Danger": ["Something is wrong or risky", "The look for errors and for actions that cannot be undone.", "For failed actions, form errors and destructive buttons like Delete.", "A strong signal gets noticed and slows people down before a costly mistake."]
  };

  EXPLAIN.typography = {
    "§Typeface": ["The font family", "The font used across the whole product: here SF Pro, Apple’s own font.", "Choose one typeface and use it everywhere.", "One font feels consistent and professional, and loads fast. Mixing many looks messy."],
    "§Type styles": ["A fixed set of text sizes", "A short list of named text styles, each with a size, thickness and spacing, for every kind of text.", "Always pick from the list instead of inventing a new size.", "A set list keeps the order of importance clear and the whole product consistent."],
    "Display": ["The biggest, boldest text", "Very large text meant to grab attention.", "On hero sections and marketing headlines. One per screen.", "A single huge line sets the tone and tells people what the page is about."],
    "Heading 1": ["The page title", "The main title that says what this page is.", "Once, at the top of each page.", "People and search engines understand the page’s purpose straight away."],
    "Heading 2": ["A section title", "A title for a big part of the page.", "To split a long page into sections.", "Clear section titles let people skim and jump to what they need."],
    "Heading 3": ["A smaller title", "A title inside a section, for a card, panel or dialog.", "For card titles, dialog titles and sub-sections.", "It adds a level of order without being as loud as bigger headings."],
    "Title": ["An emphasised line", "A medium-sized bold line for list headers and bar titles.", "For list headers, navigation bar titles and highlighted lines.", "It marks the start of a group without becoming a full heading."],
    "Body Large": ["Comfortable reading text", "Slightly bigger paragraph text.", "For introductions and longer reading.", "Larger text is easier on the eyes over long passages."],
    "Body": ["Normal text", "The default size for most words in the interface.", "For paragraphs, descriptions and what people type into fields.", "The standard size keeps text readable and consistent. It should be used most of the time."],
    "Label": ["Text on controls", "Small, bold text used on buttons, tabs and form field names.", "For button text, tabs, menu items and form labels.", "Bold small text stays readable and signals “this is a control”."],
    "Caption": ["Small supporting text", "Small text for extra details.", "For hints, dates, “edited 2 minutes ago” and notes under images.", "It gives helpful detail without competing with the main content."],
    "Overline": ["A tiny label above a title", "Small uppercase text placed above a heading to name its topic or category.", "As an eyebrow above headings, and for small section labels.", "It adds context at a glance and keeps the heading itself clean."]
  };

  EXPLAIN.variables = {
    "§Color": ["Named colours instead of codes", "Colours saved under meaningful names, like “text/primary”, instead of hex codes.", "In Figma and in code, always use the named colour, never type a hex code.", "Change the value once and everything updates, including dark mode."],
    "§Spacing": ["A fixed set of gaps", "A short list of distances (4, 8, 16, 24, 32 and so on) used for padding and gaps.", "Whenever you space things: padding, margins and gaps.", "A rhythm of steady spaces makes layouts look neat and speeds up design decisions."],
    "§Radius": ["How round the corners are", "A set of corner sizes, from slightly soft to fully round.", "Pick by size: a small radius for checkboxes, larger for cards and dialogs.", "Consistent corners make the product feel like one family."],
    "§Sizing": ["Standard heights and icon sizes", "Fixed sizes for controls, icons and tap targets.", "When you set the height of buttons, inputs and icons.", "Equal sizes line up cleanly, and the minimum tap size of 44 px prevents mis-taps."],
    "§Border": ["Line thickness", "The width of outlines and dividers.", "For outlines on inputs, dividers between rows and focus rings.", "A couple of fixed widths keep lines crisp and consistent."],
    "§Elevation": ["How high something floats", "Soft shadows that make a layer look raised above the page.", "For things that sit above others: menus, dialogs and toasts.", "Depth tells people what is on top and what they can interact with."],
    "§Breakpoints & grid": ["How layouts change by screen size", "Set screen widths where the layout changes, plus a column grid to line things up.", "When designing for phone, tablet and desktop.", "The same product feels right on every device, and elements line up neatly."],
    "§Duration": ["How long motion lasts", "A few set lengths of time for animations, in milliseconds.", "Short for small changes (a hover), longer for big ones (a page appearing).", "Fast feels responsive, but too fast looks jumpy. A fixed set feels consistent."],
    "§Easing": ["The feel of movement", "The curve that sets how an animation speeds up and slows down.", "Pick one for things entering, one for leaving and one for playful bounces.", "Natural acceleration feels alive. A robotic constant speed feels cheap."]
  };

  EXPLAIN.animations = {
    "§Entrance": ["How things arrive", "Motion that brings new content onto the screen.", "When something appears, like a card, a menu or a message.", "A gentle entrance helps people notice and follow what changed."],
    "§Attention": ["Motion that says “look here”", "Short movements that pull the eye to something.", "To point out an error, a new alert or a button to press.", "It guides the eye, but use it sparingly or it becomes annoying."],
    "§Loading": ["Motion while waiting", "Animations that show something is on its way.", "While content, data or images load.", "Waiting feels shorter when you can see something happening."],
    "§Effects": ["Extra polish", "Decorative touches that make the interface feel alive.", "On tap, on hover, or to highlight something special.", "Small details create delight, but they should never slow people down."],
    "Fade": ["Appear gently", "The element slowly becomes visible, or fades out.", "For tooltips, overlays and anything that appears without a direction.", "It is the softest, least distracting way to change what is on screen."],
    "Slide up": ["Rise into place", "The element moves up from below as it appears.", "For sheets, toasts and new list items.", "Moving from where it belongs shows where it came from and where it goes."],
    "Scale": ["Grow into place", "The element starts smaller and grows to full size.", "For dialogs, menus and popovers opening from a button.", "It feels as if the element comes from the thing you tapped."],
    "Pop": ["A playful bounce in", "The element overshoots slightly then settles, like a pop.", "To celebrate or add a friendly feel: badges, likes and success ticks.", "A little bounce brings life and rewards the action."],
    "Bounce": ["Hop to get attention", "The element hops up and down.", "To draw the eye to something new, like a notification dot.", "Movement is hard to miss. Use it once or twice, not forever."],
    "Shake": ["Say “no” like a head shake", "The element shakes from side to side.", "When something fails, like a wrong password.", "It is a universal “that is not right” without extra words."],
    "Pulse": ["A gentle heartbeat", "The element softly grows and shrinks on repeat.", "To show something is live or waiting, like a recording dot or a new item.", "A quiet rhythm signals “alive” without being loud."],
    "Loading": ["A spinner that says wait", "A turning circle shown while something loads.", "For short waits, like after pressing Save.", "It reassures people that the app has not frozen."],
    "Shimmer": ["A placeholder with a sweep of light", "Grey shapes in the form of the content, with a moving shine, shown while the real content loads.", "While lists, cards or images load.", "It makes loading feel faster and shows the layout before it fills in."],
    "Ripple": ["A wave from where you tapped", "A circle spreads out from the touch point.", "On buttons and cards, to confirm the press.", "It gives instant feedback that the tap was received."],
    "Glow": ["A soft light around something", "A halo of light around the element.", "To highlight something special, like an AI action or a selected item.", "A soft glow draws the eye without moving anything."],
    "Float": ["A slow drift up and down", "The element gently drifts as if floating.", "On hero art or empty states, to add life.", "Slow movement adds charm and depth without distraction."]
  };

  EXPLAIN.principles = {
    "Start with the task": ["Design around what people want to do", "Begin with the job someone is trying to get done, not with the screen or the features.", "At the very start, and before adding any new feature.", "If you solve the real task, the design earns its place. Otherwise it is decoration."],
    "Make status visible": ["Always show what is happening", "Let people see progress, results and changes as they occur.", "During uploads, saves, searches and any wait.", "People hate guessing. Feedback builds trust."],
    "Prevent mistakes": ["Stop errors before they happen", "Design so the wrong choice is hard to make.", "For forms, deletes and payments: use pickers, limits and confirmations.", "Preventing a mistake is cheaper and kinder than fixing it."],
    "Design every state": ["Plan beyond the happy path", "Design what happens when it is empty, loading, failing or full, not just when it works.", "For every screen: empty, loading, error, success and offline.", "Real people hit these states all the time. Unplanned states look broken."],
    "Let people undo": ["Make mistakes easy to take back", "Offer undo, cancel and back so no action feels final.", "After deleting, editing or submitting.", "People explore more confidently when nothing is permanent."],
    "Create hierarchy": ["Show what matters most", "Use size, weight and colour so the eye lands on the most important thing first.", "On every screen, decide what is first, second and third.", "Without hierarchy everything competes and people do not know where to look."],
    "Be consistent": ["Same things look and work the same", "Use the same colours, spacing and patterns everywhere.", "Across every screen and feature.", "Familiar patterns mean people learn once and use everywhere."],
    "Keep it focused": ["One job per screen", "Remove everything that is not needed for the main goal.", "When a screen feels busy, ask what can go.", "Less clutter means faster decisions and fewer errors."],
    "Use space with intent": ["Spacing groups and separates", "Use space to show which things belong together and which are apart.", "Between sections, cards and lines of text.", "Good spacing makes a screen easy to scan without extra lines or boxes."],
    "Reserve colour for meaning": ["Colour should say something", "Use colour only when it tells people something, like an action or a status.", "For buttons, links, errors and success.", "Colour that is everywhere means nothing. Restraint makes it powerful."],
    "Solve a real need": ["Build what people actually need", "Start from a real problem that real people have.", "Before any new idea. Talk to users.", "Features nobody needs add cost and clutter."],
    "Make value clear": ["Tell people why it is worth it", "Show quickly what the product does for them.", "On landing pages, onboarding and empty states.", "People leave if they cannot see the benefit within seconds."],
    "Learn from use": ["Watch, then keep improving", "Look at how people really use the product and adjust.", "After launch, and regularly after that.", "The first version is a guess. Real use shows the truth."],
    "Define success": ["Decide how you will know it worked", "Agree on what result counts as success before building.", "At the start of any project or feature.", "Without a goal you cannot tell whether the design helped."],
    "Meet contrast": ["Make text easy to read", "Keep a strong difference between text and its background.", "For all text, especially small and grey text.", "More people can read it, in more places, like in bright sunlight."],
    "Don’t rely on colour alone": ["Use more than colour to say things", "Add icons, words or patterns beside colour.", "For errors, status and charts.", "People who cannot tell certain colours apart still understand."],
    "Make targets touchable": ["Buttons big enough for fingers", "Tappable things should be at least 44 px wide and tall.", "On any touch screen.", "Small targets cause mis-taps and frustration."],
    "Show focus": ["Show where the keyboard is", "Draw a visible outline on the element currently selected by keyboard.", "On every tappable element.", "People using a keyboard or screen reader need to see where they are."],
    "Use variables, not raw values": ["Name the colour, do not type it", "Use saved, named values for colour, spacing and so on instead of raw numbers.", "In Figma and in code.", "Change one value and everything updates."],
    "Name things clearly": ["Names anyone can understand", "Give layers, components and files clear, consistent names.", "From the first layer you create.", "Teammates and developers find and understand things quickly."],
    "Test with real content": ["Use real words and data", "Design with real text and numbers, not “Lorem ipsum”.", "From the early drafts.", "Real content reveals long names, empty values and awkward line breaks."],
    "Annotate for handoff": ["Explain it for developers", "Add notes on behaviour, states and spacing before handing designs over.", "When a design is ready to be built.", "Fewer questions, less guessing, a better result."],
    "Hick’s Law": ["More choices take longer", "The more options you give, the more time people take to choose.", "When designing menus, forms and pricing pages.", "Fewer, clearer choices speed up decisions and reduce stress."],
    "Fitts’s Law": ["Bigger and closer is easier to hit", "Large targets that are close by are quicker to reach.", "For main buttons and touch controls.", "Make important actions big and within thumb reach."],
    "Jakob’s Law": ["People expect it to work like other apps", "People spend most of their time on other products, so they expect yours to behave in a similar way.", "When deciding between a familiar pattern and a new one.", "Familiar patterns need no learning."],
    "Miller’s Law": ["People hold only a few things in mind", "Short-term memory handles about seven items, give or take.", "For long lists, phone numbers and menus. Break them into chunks.", "Chunking makes information easier to remember."],
    "Law of Proximity": ["Close things feel related", "Items that sit near each other are seen as a group.", "To organise forms, cards and lists.", "Spacing can show structure without any lines."],
    "Doherty Threshold": ["Be fast: under 0.4 seconds", "People stay engaged when the system responds within about 400 milliseconds.", "For taps, saves and page changes. Add feedback if it is slower.", "Speed feels like quality. Delays break the flow."],
    "Peak-End Rule": ["People remember the best and the last moment", "People judge an experience by its most intense moment and by how it ends.", "When designing finishing moments like checkout or success screens.", "A strong ending leaves a good memory."],
    "Von Restorff Effect": ["What is different gets remembered", "An item that stands out from the rest is more likely to be noticed and remembered.", "For the one key action or offer.", "Make one thing different, not everything, or nothing stands out."]
  };

  EXPLAIN.heuristics = {
    "Visibility of system status": ["Keep people informed", "The product should always show what is going on, with quick feedback.", "During loading, saving, or after any action.", "People feel in control when they know what is happening."],
    "Match the real world": ["Speak human language", "Use words and ideas people already know, not internal jargon.", "When naming buttons, menus and errors.", "Familiar words need no explanation."],
    "User control and freedom": ["Always offer a way out", "Give clear undo, cancel and back options.", "In flows, forms and after destructive actions.", "People make mistakes. A clear exit stops panic."],
    "Consistency and standards": ["Same words, same actions", "The same thing should be called and look the same everywhere.", "Across screens, and follow common platform conventions.", "People learn once and reuse that knowledge."],
    "Error prevention": ["Avoid the mistake in the first place", "Design so errors are hard to make, or confirm before costly ones.", "Forms, deletes and payments.", "Prevention beats a good error message."],
    "Recognition over recall": ["See it, do not remember it", "Show options on screen so people do not have to remember them.", "In menus, searches and forms.", "Remembering is hard. Recognising is easy."],
    "Flexibility and efficiency": ["Easy for beginners, fast for experts", "Offer shortcuts and quicker paths for people who know the product.", "For frequent actions.", "Experts save time and beginners are not overwhelmed."],
    "Aesthetic and minimal design": ["Show only what matters", "Every extra element distracts from the important ones.", "Review every screen and remove clutter.", "Focus makes the product easier to use and nicer to look at."],
    "Recover from errors": ["Help people fix problems", "Error messages should say what went wrong in plain words and how to fix it.", "Whenever something fails.", "A helpful message turns frustration into a quick fix."],
    "Help and documentation": ["Help when it is needed", "Offer short, searchable, task-based help.", "At the point where people get stuck.", "Even good designs need guidance sometimes."]
  };

  EXPLAIN.research = {
    "User interviews": ["Talk to real people", "One-to-one conversations to learn what people want, do and struggle with.", "Early on, before designing solutions.", "You hear the “why” behind behaviour that numbers cannot show."],
    "Diary study": ["People keep a log", "Participants record what happens in their day over days or weeks.", "To understand habits that happen over time.", "You see real life as it happens, not what people remember later."],
    "Survey": ["Ask many people short questions", "A short questionnaire sent to lots of people.", "To measure how common something is, after learning from interviews.", "Numbers from many people show how big an issue is."],
    "Card sorting": ["Let people group things", "People sort cards into groups that make sense to them.", "Before designing menus and navigation.", "The structure matches how people think, so things are easier to find."],
    "Tree testing": ["Check if people can find things", "People look for items in a plain text version of your menu structure.", "After planning a structure, before designing screens.", "It finds confusing labels and structure cheaply and early."],
    "Usability testing": ["Watch people try it", "People attempt real tasks while you watch where they struggle.", "Before building, and again before launch.", "Five people usually reveal most major problems."],
    "A/B test": ["Compare two versions live", "Two versions run at once and the numbers show which does better.", "After launch, when you have lots of visitors.", "Data replaces opinions when people disagree."],
    "Heuristic evaluation": ["Experts check it against a list", "Specialists review the design using usability rules of thumb.", "As a quick check before or alongside user testing.", "A fast, cheap way to catch obvious problems."]
  };

  EXPLAIN.patterns = {
    "Onboarding": ["Welcome new users", "The first steps that take someone from signing up to their first success.", "For any new account or feature.", "A smooth start decides whether people stay."],
    "Sign in": ["Get back into the product", "A short screen where returning users enter their email and password.", "Whenever the product has accounts.", "Easy sign-in means fewer people give up."],
    "Dashboard": ["Everything at a glance", "A page of key numbers, charts and recent activity.", "Home screens for work, finance or analytics.", "People see how things are going and what needs attention in seconds."],
    "List and detail": ["Pick from a list, see the details", "A list on one side and the details of the selected item on the other.", "Inboxes, contacts, files and orders.", "You can browse many items and inspect one without losing your place."],
    "Settings": ["Where people adjust things", "Grouped controls to change preferences.", "For profile, notifications and privacy.", "Grouping makes settings easy to find and safe to change."],
    "Cart and checkout": ["From basket to payment", "The steps from items chosen to order paid.", "In any shop or booking flow.", "Less friction here means more completed orders."],
    "Empty state": ["Nothing here yet", "A helpful screen shown when there is no content.", "For new accounts and empty results.", "It turns a blank page into a clear first step."],
    "Error page": ["When something breaks", "A page that explains what went wrong and how to continue.", "For not-found pages and server problems.", "Clear next steps keep people from leaving."]
  };

  EXPLAIN.prioritisation = {
    "RICE": ["Score ideas with numbers", "A scoring method: Reach times Impact times Confidence, divided by Effort.", "When you have many ideas and some real data.", "It replaces gut feeling with a fair ranking."],
    "MoSCoW": ["Sort into Must, Should, Could, Won’t", "A way to decide what must be in a release and what can wait.", "When fixing the scope of one release.", "Everyone agrees on the essentials, and the scope stops growing."],
    "Impact and effort": ["Value versus work", "Place each idea on a grid by how much it helps and how hard it is.", "In team workshops where you need quick agreement.", "It shows quick wins and money pits at a glance."],
    "Kano model": ["What delights and what is expected", "Splits features into basics people expect, ones that raise satisfaction, and pleasant surprises.", "When deciding where to invest beyond the basics.", "You do not overspend on delights before the basics work."]
  };

  EXPLAIN.metrics = {
    "HEART": ["Five ways to measure experience", "Happiness, Engagement, Adoption, Retention and Task success.", "To judge a feature or a redesign from the user’s point of view.", "It measures how people feel and behave, not just clicks."],
    "AARRR": ["The customer journey funnel", "Acquire, Activate, Retain, Refer, Revenue: the steps from visitor to loyal customer.", "To find which stage loses the most people.", "You fix the biggest leak first."],
    "North Star metric": ["One number for the whole team", "A single measure that shows the value customers get.", "To align design, engineering and business.", "A shared goal pulls everyone the same way."],
    "SUS": ["A standard usability questionnaire", "The System Usability Scale: ten questions people answer after using a product, scored out of 100.", "After usability tests and between releases.", "It gives one comparable score. Around 68 is average."]
  };

  EXPLAIN.resources = {
    "§Tools": ["Software that does the work for you", "Apps, plugins and AI helpers that speed up design: Figma plugins, AI assistants and free alternatives to paid software.", "When you are stuck on a repetitive task, or want to see what other designers use.", "The right tool saves hours and lets you spend your time thinking instead of clicking."],
    "§Websites": ["Places to find inspiration and work", "Sites to browse for ideas, free assets, moodboards and design jobs.", "When you need ideas to get started, references for a project, or places to look for work.", "Seeing great work trains your eye, and good references speed up every project."],
    "§Typography": ["Choosing and pairing fonts", "Guides on fonts, font pairs and how to set text so it looks good and is easy to read.", "When picking fonts for a new design, or when text looks off and you cannot say why.", "Text is most of what people see. Good type choices make a design look professional."],
    "§Colour": ["Picking colours that work together", "Tools and tips for building colour palettes, shades and off-whites.", "When starting a palette, or when a design feels flat or harsh.", "Good colour sets the mood, guides attention and keeps text readable."],
    "§UI & UX": ["How to design screens and experiences", "Terms, checklists, laws, mistakes to avoid and cheat sheets for interface and experience design.", "To learn the basics, check your work before it ships, or look up a word you do not know.", "Knowing the rules and the vocabulary helps you design with confidence and talk to your team."],
    "§AI for design": ["Using AI as a design helper", "Ways to use AI tools to come up with ideas, images, code and layouts faster.", "When you want to speed up first drafts, explore options or automate boring tasks.", "AI handles the repetitive parts so you can spend time on the decisions that need a human."],
    "§Career": ["Growing as a designer", "Guides on skills, learning plans, portfolios, jobs and what employers look for.", "When planning what to learn next, preparing for jobs, or deciding your direction.", "A clear plan turns scattered learning into steady progress toward the job you want."]
  };

  global.EXPLAIN = EXPLAIN;
})(window);
