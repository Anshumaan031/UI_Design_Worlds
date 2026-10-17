---
name: Anshumaan Phukan
description: International Typographic Style used for a case file. Heavy uppercase Inter on gridded paper, with one red signal colour.
colors:
  swiss-red: "#E60026"
  off-black: "#111111"
  rule-black: "#000000"
  mid-gray: "#6C6C6C"
  paper: "#FAFAFA"
  sheet-white: "#FFFFFF"
  hairline: "#E5E7EB"
  input-rule: "#D1D5DB"
  plate-gray: "#F3F4F6"
  hover-wash: "#F9FAFB"
  marquee-band: "#E8E8E8"
  splash-black: "#0A0A0A"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "8rem"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Inter, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.05em"
  statement:
    fontFamily: "Inter, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.625
    letterSpacing: "normal"
  body-small:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.1em"
  micro-label:
    fontFamily: "Inter, sans-serif"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  none: "0px"
spacing:
  hairline-gap: "1px"
  xs: "8px"
  sm: "16px"
  gutter-mobile: "24px"
  md: "32px"
  gutter-desktop: "48px"
  section: "96px"
  section-lg: "128px"
  page-top-mobile: "128px"
  page-top-desktop: "192px"
components:
  button-primary:
    backgroundColor: "{colors.swiss-red}"
    textColor: "{colors.sheet-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.rule-black}"
    textColor: "{colors.sheet-white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.rule-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-outline-hover:
    backgroundColor: "{colors.rule-black}"
    textColor: "{colors.sheet-white}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.off-black}"
    typography: "{typography.label}"
    padding: "8px 0"
  button-text-hover:
    textColor: "{colors.swiss-red}"
  chip-filter:
    backgroundColor: "transparent"
    textColor: "{colors.mid-gray}"
    typography: "{typography.micro-label}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  chip-filter-active:
    backgroundColor: "{colors.swiss-red}"
    textColor: "{colors.sheet-white}"
  chip-filter-all-active:
    backgroundColor: "{colors.off-black}"
    textColor: "{colors.sheet-white}"
  tag-skill:
    backgroundColor: "transparent"
    textColor: "{colors.off-black}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  tag-skill-hover:
    backgroundColor: "{colors.off-black}"
    textColor: "{colors.sheet-white}"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.off-black}"
    rounded: "{rounded.none}"
    padding: "16px 0"
  nav-link:
    textColor: "{colors.off-black}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.swiss-red}"
  stat-tile:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.off-black}"
    padding: "20px 24px"
  stat-tile-hover:
    backgroundColor: "{colors.off-black}"
    textColor: "{colors.sheet-white}"
---

# Design System: Anshumaan Phukan

## Overview

**Creative North Star: "The Zurich Dossier"**

The site is a case file set in the International Typographic Style. Every page is a sheet of off-white paper with a faint 40px drafting grid. Content is filed onto a 12-column grid and separated by hard black rules, the way a dossier divides its sections. Headlines are large uppercase Inter with tight tracking, set at sizes that fill the width of the page. Below them, small labels with wide tracking classify everything: period, category, context, "Problem", "Approach". The case-file feel comes from that pairing of very large type with very small catalogue labels.

Colour stays almost silent. Ink is near-black, metadata is mid-gray, and **one red** marks whatever the eye should go to next: an active nav item, the primary action, a category tag, an accent bar sweeping under a hovered image. Images arrive desaturated, like photocopies pinned into a file, and turn to colour only when the visitor shows interest. Motion is deliberate. Sections slide up into place, the name is set letter by letter, and the grid underlay drifts slowly as if the paper were moving under a lamp.

The system is flat and square. Nothing has rounded corners, nothing casts a shadow, and depth comes only from rules, tonal inversion (white → black on hover), and the overlap of type and image.

**Key Characteristics:**
- Uppercase Inter at extreme scale contrast: 128px display against 10px labels
- One accent, Swiss Red, rationed to signals
- Hard 1px black rules as section dividers; cool-gray hairlines inside sections
- Square everything (0px radius), with no shadows
- Images grayscale at rest, colour on hover
- A 40px drafting grid on paper as the permanent background

## Colors

An ink-on-paper neutral range with a single signal red.

### Primary
- **Swiss Red**: the only accent. It marks active navigation, the primary action button, category labels, period labels, the thesis and details callout rule, the hover accent bar under project images, filter chips when active, the scroll-progress bar, the selection highlight, and the surname in the hero and splash screen.

### Neutral
- **Off-Black Ink**: all headings and body copy, the active "All" filter, and the fill of the stat tile and skill tag when hovered.
- **Rule Black**: the section dividers, the border and hover fill of the outline button, the hover state of the primary button, and the bullet squares in the work timeline. It is pure black, slightly harder than the ink, because rules should read as structure rather than text.
- **Mid Gray**: small labels, metadata, card descriptions, inactive tabs and chips, and the scroll cue.
- **Paper**: the page background, under the drafting grid (`rgba(17,17,17,0.04)` lines every 40px).
- **Sheet White**: the footer, certificate cards, work skill pills, and the scrolled header (at 90% opacity with a backdrop blur).
- **Hairline Gray**: card separators, borders inside sections, skill and chip outlines, and the scrolled header's bottom border.
- **Input Rule Gray**: the resting underline of form fields.
- **Plate Gray**: image placeholders and education coursework tags.
- **Hover Wash**: a faint row highlight on work entries and paper rows (used at 50% opacity).
- **Marquee Band**: the strip behind the tech-stack logo marquee.
- **Splash Black**: the background of the intro splash screen only.

### Named Rules
**The One Red Rule.** Swiss Red is the only chromatic colour in the interface, and it means "look here" or "you are here". The splash screen's surname and progress line use the same Swiss Red token. Any second red is a bug.

**The Logo Exception.** Third-party tech logos in the marquee keep their brand colours. This is the one place full colour appears at rest, and it is contained to the gray band.

## Typography

**Display Font:** Inter (with sans-serif fallback)
**Body Font:** Inter
**Label Font:** Inter, uppercase, with wide tracking

**Character:** A single grotesque at two extremes. Large set tight and heavy reads as a poster headline. Small set wide and bold reads as a filing label. The middle of the scale is used sparingly.

### Hierarchy
- **Display** (700, 3.75rem → 6rem → 8rem at the mobile, md and lg breakpoints, line-height 0.9, -0.05em): the hero name only. The first name is set as outlined text (2px off-black stroke, transparent fill) and the surname is solid Swiss Red, indented 96px from md up.
- **Headline** (700, 3rem → 4.5rem, line-height 1, -0.05em, uppercase): page titles such as "PROJECTS", "WORK" and "SKILLSETS".
- **Statement** (800, 2.25rem → 3rem, line-height 0.95, -0.05em, uppercase): positioning statements and section leads, like the Home "Profile Details" headline. Its last phrase may switch to Swiss Red.
- **Title** (700, 1.125rem–1.5rem, -0.025em, uppercase): project card titles and education degrees.
- **Body** (500, 1.125rem, line-height 1.625): long-form paragraphs. Keep the measure at 65–75ch or less.
- **Body Small** (400, 0.875rem): card descriptions (clamped to 2 lines), footer copy, detail text.
- **Label** (700, 0.75rem, 0.1em, uppercase): section overlines, navigation, buttons, tabs.
- **Micro Label** (700, 10px, 0.1em, uppercase): categories, contexts, field labels, chip text, copyright line.

### Named Rules
**The Two-Extremes Rule.** Every section pairs one oversized uppercase element with micro labels. If a section has only mid-sized type, it isn't on-system.

**The Uppercase Rule.** Headings, labels, navigation, buttons, chips and metadata are uppercase. Body paragraphs and quotations stay in sentence case.

**The Loaded-Weights Rule.** Inter is loaded at 300, 400, 500, 600, 700, 800 and 900. Before using any other weight, add it to the Google Fonts request in `index.html`.

## Layout

- **Container:** full width up to a 1920px maximum, centred, with 24px side gutters on mobile and 48px from md (768px) up.
- **Page top:** 128px on mobile and 192px on desktop, to clear the fixed header.
- **Grid:** a 12-column CSS grid from md up and a single column below it. The usual gaps are 32px, widening to 48–96px on Contact. Text blocks tend to take 7 columns, with a supporting column pushed to start at column 9 so there's a gutter of empty space between them.
- **Section rhythm:** each major section begins with a full-width 1px Rule Black top border, then 96px of vertical padding. Section headers sit on a black bottom rule with the label on the left and a count or index on the right (for example "01 — 02").
- **Asymmetry:** two-up grids stagger, pushing every second item down 64–96px from md up. Photo stacks offset &#177;16px.
- **Breakpoints:** Tailwind defaults (sm 640, md 768, lg 1024, xl 1280). The layout changes at md.
- **Background:** the drafting grid is fixed to the viewport and drifts diagonally by one cell every 20s.

### Named Rules
**The Filed-Section Rule.** A new section is introduced by a black rule and a micro label, never by a coloured band or a card.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth comes from three things: hard rules, which divide planes; tonal inversion, where a surface flips from paper or white to off-black on hover (stat tiles, skill tags, outline buttons); and the scrolled header's 90%-white backdrop blur, the only translucent layer. The hero allows one gradient, a paper-coloured fade from the bottom over the 40%-opacity grayscale background image, so the photo dissolves into the page.

### Named Rules
**The No-Shadow Rule.** If something needs to stand out, give it a rule, invert it, or turn it red. Never lift it with a shadow.

**The One-Fade Rule.** The hero's bottom fade into paper and the drifting grid are the only gradients. There are no decorative gradients on buttons, cards or text.

## Shapes

Every corner is square (0px). Form fields explicitly reset to `rounded-none` and `appearance-none` to remove browser rounding. The shape vocabulary is rectangles and lines: 1px rules, a 4px (h-1) red accent bar, 6px square bullets (black in the timeline, red in lists), and a 1px vertical scroll-cue line. Images are cropped to strict ratios (4:3 for project plates, 3:4 for portraits).

## Components

### Buttons
Confident filing-cabinet hardware. They are rectangular, uppercase and tightly spaced.
- **Shape:** square (0px), with a 1px border.
- **Primary (solid):** Swiss Red fill, white label, 16px &#215; 32px padding. On hover it turns Rule Black. This is the canonical primary action, used by the hero CTA and the Contact submit. A disabled button stays red at 50% opacity and does not react to hover.
- **Outline:** a 1px Rule Black border on a transparent fill. On hover it fills black with white text.
- **Text link:** a label with an arrow (→). On hover it turns red, and a 1px red underline grows from the left.
- **Transitions:** 300ms for every state change.

### Chips (filters)
- **Style:** micro label text, 6px &#215; 12px padding, a 1px Hairline Gray border, and a transparent fill.
- **States:** a category chip when active is filled Swiss Red. The "All" chip when active is filled Off-Black. Inactive chips go red (or ink, for "All") in border and text on hover. Transition 200ms.

### Tabs
- Label-style text buttons. The active tab is Swiss Red with a 1px red underline. Inactive tabs are Mid Gray and turn ink on hover.

### Tags
- **Skill tag:** 11px medium uppercase, a 1px Hairline Gray border, 6px &#215; 12px padding. On hover it inverts to Off-Black with white text (200ms).
- **Work skill pill:** 10px on Sheet White with a Hairline Gray border. Its border turns black when the parent row is hovered.
- **Coursework tag:** 10px on Plate Gray with no border, deepening slightly on hover.

### Cards / Containers
- **Project card:** a 4:3 grayscale image plate on Plate Gray. On hover the image takes colour, scales to 105% over 700ms ease-out, and a 4px Swiss Red bar sweeps in from the left along the bottom edge (500ms). Below the plate, a Hairline Gray top rule sits over the title (which turns red on hover) and the year. Under them are a red category label with "— context" in gray, then a 2-line clamped description. An expandable "+ Details" reveals Problem, Approach and Details blocks behind a red left rule.
- **Certificate card:** Sheet White, a 1px Hairline Gray border that turns black on hover, 24px padding.
- **Stat tile:** tiles sit in a grid with 1px gaps over a 10%-black backing, so the gaps read as hairlines. Each tile has a large counting number and a micro label below it. On Skillsets the tile inverts to Off-Black on hover.
- **Corner style / shadow:** square, with no shadow. See Elevation.

### Inputs / Fields
- **Style:** an underline only. Transparent background, a 1px Input Rule Gray bottom border, 16px vertical padding, 1.125rem medium text, square.
- **Hover:** the underline turns Rule Black.
- **Focus:** the underline turns Swiss Red, and the micro label above it turns red with it (300ms).
- **Disabled (submit):** 50% opacity and a not-allowed cursor.

### Navigation
- **Header:** fixed and full-width. At rest it has 32px vertical padding on a transparent background. After 50px of scroll it compresses to 16px and gets a 90%-white backdrop blur with a Hairline Gray bottom border (300ms).
- **Wordmark:** "ANSHUMAAN / PHUKAN" in 14px bold with tight tracking, the slash in Mid Gray.
- **Links:** label style, 48px apart. The active link and hovered links are Swiss Red.
- **Mobile:** a short inline set of links (Work, Skills, Projects). There is no hamburger menu.

### Signature Components
- **Hero name:** the first name is outlined and the surname is solid red. Letters set in one by one (each 0.7s with `cubic-bezier(0.22,1,0.36,1)`, staggered 55ms apart, with a 130ms pause between the names).
- **Rotating title:** a role keyword in heavy uppercase on a thin rule. Every 2.8s it slides up out of a 1.1em mask and the next keyword slides up in (400ms each, `cubic-bezier(0.76,0,0.24,1)`).
- **Splash screen:** a full-screen Splash Black panel shows the name in paper and red while a 3px Swiss Red line draws across over 900ms. It holds for 300ms, then the panel slides up out of view over 600ms.
- **Scroll progress:** a 2px Swiss Red bar fixed to the top edge, tracking how far down the page the visitor has scrolled.
- **Reveal:** content fades in and rises 48px over 1000ms ease-out when 10% of it enters the viewport. Siblings are staggered 60–150ms apart.
- **Tech marquee:** full-colour 56px logos scroll continuously over the Marquee Band (35s linear loop), under a "TECH STACK" heading.

## Do's and Don'ts

### Do:
- **Do** start every major section with a 1px Rule Black top border and a micro-label overline.
- **Do** keep Swiss Red for signals: active, primary, category, hover accent. If more than about 10% of a screen is red, pull it back.
- **Do** make the primary action solid Swiss Red, turning black on hover.
- **Do** show images grayscale at rest and in colour on hover (700ms), cropped to 4:3 or 3:4.
- **Do** pair an oversized uppercase headline (-0.05em tracking, line-height 0.9–1.0) with 10–12px labels at 0.1em tracking.
- **Do** keep every corner square (0px) and use rules, inversion or red for emphasis.
- **Do** use 300ms for colour and state changes, 500ms for rules and bars, 700ms for images, and 1000ms for reveals.
- **Do** respect `prefers-reduced-motion`. When it's on, the splash is skipped, keyframe animations (grid drift, marquee, letter set-in, rotating title) jump to their end state, and reveals become a 300ms fade with no rise. Any new motion must follow the same rule.

### Don't:
- **Don't** introduce a second accent colour or a second red.
- **Don't** add box-shadows, rounded corners or pill shapes.
- **Don't** use gradients beyond the hero's paper fade and the drafting grid.
- **Don't** show content imagery in full colour at rest. Tech-stack logos in the marquee are the only exception.
- **Don't** set headings, labels, buttons or navigation in lowercase or sentence case.
- **Don't** use a type weight that isn't in the font request.
- **Don't** use decorative or script typefaces. Inter is the only family.
