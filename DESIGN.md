---
name: CXdynamIQ
description: Calm, enterprise-grade interfaces for AI-powered customer experience operations.
colors:
  canvas: "#f8fafc"
  foreground: "#012635"
  surface: "#ffffff"
  warm-paper: "#f7f6f0"
  border: "#e2e8f0"
  cyan: "#069bd8"
  cyan-hover: "#0582b6"
  action: "#0369a1"
  action-hover: "#075985"
  action-secondary: "#0284c7"
  reason-indigo: "#818cf8"
  success-emerald: "#34d399"
  learning-violet: "#c084fc"
  deep-teal: "#002620"
  forest: "#216358"
  dark-surface: "#02131e"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 3.8vw + 1rem, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 2.4vw + 0.8rem, 2.85rem)"
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.06em"
  micro:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "10px"
    fontWeight: 600
rounded:
  control: "8px"
  element: "12px"
  surface: "16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "#0f172a"
    rounded: "{rounded.control}"
    padding: "10px 20px"
  button-inverse-outline:
    backgroundColor: "transparent"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
  card-calm:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.surface}"
    padding: "24px"
---

# Design System: CXdynamIQ

## Overview

**Creative North Star: "The Calm Command Center"**

CXdynamIQ presents complex, AI-led customer-experience operations as assured and legible. The system pairs cool white work surfaces with deep navy and teal operational zones, then uses a clear sky-blue action color to direct attention. It should feel like a dependable control plane: technical enough to communicate capability, but never noisy or intimidating.

The implementation favors generous whitespace, stable containers, low-contrast dividers, and intentional information density. Dark sections carry workflow, telemetry, and platform detail; light sections provide the calm reading and conversion surface. Motion confirms interaction and system activity, not decoration.

**Key Characteristics:**

- Calm, high-trust enterprise SaaS with an operational edge.
- Sky-blue actions against clean slate, white, and deep-teal surfaces.
- Human-readable Jakarta headings, efficient Inter body copy, and monospace only for labels, metrics, and technical traces.
- Rounded, softly elevated surfaces with borders doing most of the separation work.

## Colors

The palette is cool, precise, and high-contrast: blue signals action, deep teal signals operational depth, and white/slate surfaces keep complex information calm.

### Primary

- **Operational Blue:** Primary conversion actions use `action`; reserve it for decisions, primary calls to action, and links that should move a user forward.
- **Signal Cyan:** `cyan` is the brighter brand signal for focus rings, active states, illustrative accents, and technical emphasis.
- **Workflow State Accents:** `reason-indigo`, `success-emerald`, and `learning-violet` identify distinct phases in technical workflow demonstrations; keep them scoped to state, never primary conversion actions.

### Secondary

- **Deep Teal:** `deep-teal` grounds dark, enterprise-focused areas without turning the system into a generic black interface.
- **Forest:** `forest` is a restrained supporting brand tone; use it sparingly where a darker green-teal context is needed.

### Neutral

- **Cloud Canvas:** `canvas` is the default page background.
- **Crisp Surface:** `surface` carries cards, navigation, fields, and high-readability content.
- **Warm Paper:** `warm-paper` introduces a softer editorial surface when a section needs relief from cool slate.
- **Cobalt Ink:** `foreground` is the default dark text and navigation ink.
- **Quiet Divider:** `border` separates light surfaces without making the interface feel boxed in.
- **Night Operations:** `dark-surface` is reserved for data-rich or workflow-led modules with light text and cyan signals.

### Named Rules

**The Blue Has a Job Rule.** Use the bright blue family to indicate action, selection, focus, or system signal—not as a large decorative field.

**The Night Operations Rule.** Dark surfaces are for platform depth, telemetry, navigation, and high-context demonstrations. Routine content remains on calm light surfaces.

## Typography

**Display Font:** Plus Jakarta Sans (with Inter and system sans fallbacks)

**Body Font:** Inter (with system sans fallbacks)

**Label/Mono Font:** JetBrains Mono

**Character:** Jakarta brings compact confidence and a contemporary SaaS voice to headings. Inter does the long-form explanatory work. JetBrains Mono is deliberately limited to status, metadata, metrics, and code-like traces.

### Hierarchy

- **Display:** `display` is an 800-weight fluid hero treatment for the main value proposition.
- **Headline:** `headline` is a 700-weight fluid section treatment for primary content divisions.
- **Title:** Use Plus Jakarta Sans at 600–700 for card and module titles; keep tracking near -0.02em.
- **Body:** Use Inter at 400–600 for descriptions, usually 14–16px with relaxed 1.5–1.75 line height. Constrain longer reading measures near 65–75 characters.
- **Label:** `label` is 11px, 600 weight, uppercase, and tracked at 0.06em for metadata and technical status only.
- **Micro:** `micro` is 10px, 600 weight, and reserved for compact authenticated traces or dense technical metadata where the surrounding label already establishes context.

### Named Rules

**The Human-First Type Rule.** Monospace communicates measurement or execution context; it never replaces reading typography or becomes a decorative brand voice.

## Layout

The default content container is `max-w-7xl` with responsive horizontal padding of 16px on small screens, 24px on small-and-up screens, and 32px on large screens. Major homepage sections use 64–96px vertical rhythm, contracting on small screens. Content generally stacks first and becomes two- or twelve-column compositions only where the relationship between information benefits from it.

Cards and panels use 16–32px internal padding, with 12px for tighter utility blocks. Mobile layouts preserve the reading order, convert dense grids to one or two columns, and keep primary actions full-width only when the surrounding composition calls for it.

## Elevation & Depth

The system is flat at rest with tonal surfaces and 1px borders establishing structure. Small, diffuse shadows are used to lift cards, menus, and primary actions without suggesting physical skeuomorphism. Backdrop blur belongs to the sticky navigation and translucent overlays, where it clarifies layering over scrolling content.

### Shadow Vocabulary

- **Calm card:** `0 1px 3px 0 rgba(15, 23, 42, 0.05)` for light cards at rest.
- **Calm card hover:** `0 6px 16px -4px rgba(15, 23, 42, 0.08)` for a modest interactive lift.
- **Primary action:** `0 1px 2px 0 rgba(3, 105, 161, 0.2)` for a blue action’s grounded emphasis.
- **Navigation flyout:** `0 24px 60px -15px rgba(0, 0, 0, 0.14)` with a fine slate outline for clear overlay separation.

### Named Rules

**The Quiet Elevation Rule.** Borders establish grouping; shadows appear only when a surface must sit above another surface or acknowledge interaction.

## Shapes

Controls use gently rounded 8px corners. Utility panels, chips, icon containers, and field groups use 12px corners. Primary cards, modal surfaces, and navigation flyouts use 16px corners. Full pills are reserved for compact status and metric labels, not general layout blocks. Borders are usually a single quiet slate line; dark surfaces use low-opacity white or contextual cyan borders.

## Components

### Buttons

Buttons are confident and tactile, with a minimum 44px height when the shared tactile treatment is applied.

- **Shape:** Gently rounded (`control`).
- **Primary:** `button-primary` pairs white type with Operational Blue. Common CTA padding is 20–24px horizontal by 10–14px vertical.
- **Hover / Focus:** Darken the primary action on hover; keep the shared 2px cyan focus outline visible. Tactile actions may rise by 1px on hover and scale to 0.97 on press.
- **Secondary:** `button-secondary` is a white surface with dark ink and a quiet slate border.
- **Inverse / outline:** `button-inverse-outline` is for dark surfaces; it uses white text, a subdued slate border, and a slight white wash on hover.

### Cards / Containers

Cards are calm containers, not decoration.

- **Corner Style:** Softly rounded (`surface`).
- **Background:** White, pale slate, or dark operational surfaces according to content mode.
- **Shadow Strategy:** Use the Calm card vocabulary; avoid stacking a strong border and heavy shadow together.
- **Border:** Light cards use Quiet Divider; dark cards use low-opacity white or contextual color borders.
- **Internal Padding:** 24px is common; scale to 32px for larger content or 12–16px for compact utilities.

### Inputs / Fields

- **Style:** Pale slate fill, 1px slate border, and 12px corners.
- **Focus:** Transition to white with a cyan or sky-blue border and visible focus outline.
- **Error / Disabled:** No shared error or disabled visual token is currently defined; add one deliberately rather than improvising per form.

### Navigation

The sticky navigation is a translucent white layer with a fine divider and restrained blur. Desktop flyouts are 16px light surfaces with quiet borders, diffuse overlay shadow, and small structured link groups. On mobile, navigation becomes a stacked, rounded disclosure layout.

### Workflow Explorer

Operational walkthroughs use dark-surface panels, explicit phase controls, small technical labels, and sky/cyan selection states. Progress, execution traces, and guardrails should make the flow more legible—not compete with the explanatory content.

## Do's and Don'ts

### Do:

- **Do** place core content in the established `max-w-7xl` responsive container rhythm.
- **Do** use Operational Blue for the primary decision on a surface and Signal Cyan for active, focused, or technical states.
- **Do** keep cards light, bordered, and softly elevated; use dark panels only when they carry operational or platform context.
- **Do** preserve a visible cyan focus outline and respect reduced-motion preferences.
- **Do** use JetBrains Mono only for labels, metadata, metrics, and code or workflow traces.

### Don't:

- **Don't** use emerald or teal as a primary button background; primary actions use the established blue treatment.
- **Don't** substitute heavy gradients, hard shadows, or noisy decoration for hierarchy.
- **Don't** turn every container into a card; use whitespace, grouping, and subtle dividers first.
- **Don't** introduce new corner radii or ad-hoc accent colors when an established surface, blue, cyan, or slate treatment applies.
