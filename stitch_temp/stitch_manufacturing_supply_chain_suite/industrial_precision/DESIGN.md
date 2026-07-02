---
name: Industrial Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002109'
  on-tertiary-container: '#009842'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#7ffc97'
  tertiary-fixed-dim: '#62df7d'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005320'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is built on a foundation of "Industrial Precision"—a blend of high-end corporate professionalism and the raw, efficient energy of manufacturing and logistics. The target audience includes tech recruiters, engineering leads, and enterprise clients who value structural integrity and technical mastery.

The visual style is **Minimalist with Brutalist Accents**. It utilizes expansive white space and a rigid grid to convey order, while employing heavy borders, mono-styled data points, and high-contrast "Electric Blue" highlights to provide an industrial edge. The UI should feel like a premium dashboard for an automated factory: reliable, high-fidelity, and uncompromisingly clear.

## Colors
The palette is dominated by **Deep Industrial Blue (#0f172a)**, used for primary headings and heavy structural elements to provide a sense of grounded authority. **Electric Blue (#2563eb)** acts as the high-visibility "action" color, reserved for interactive elements and critical focus states.

**Forest Green (#16a34a)** is used sparingly as a functional signal for "Live" production status or successful system deployments. The background is pinned to **Light Gray/White (#f8fafc)** to ensure the interface feels airy and modern, preventing the industrial theme from feeling heavy or dated.

## Typography
This design system utilizes **Inter** for all primary communication to maintain a clean, "Neo-Grotesque" aesthetic. Headings use tight letter-spacing and heavy weights to mimic architectural signage. 

To emphasize the user's technical background, **JetBrains Mono** is introduced for labels, badges, and small metadata. This monospaced font acts as a visual "nod" to the developer's craft and the precision of the manufacturing industries they serve. Use `headline-xl` exclusively for hero sections to create an immediate impact.

## Layout & Spacing
The layout follows a **Fixed 12-Column Grid** on desktop (1280px max-width) with generous gutters to allow the content to breathe. On mobile, the system collapses to a single-column flow with 16px side margins.

Spacing is calculated on an **8px base unit**. Component stacks should use `stack-md` (16px) for internal elements and `stack-lg` (32px) for separating logical blocks. Large vertical gaps (`section-gap`) are used between major portfolio sections to create a premium, editorial feel that avoids information density overload.

## Elevation & Depth
Hierarchy is established through **Tonal Layering** and **Precision Shadows**. Surfaces do not "float" high above the background; instead, they sit just above it with a subtle 1px border (#e2e8f0) and a soft, diffused shadow.

- **Level 0 (Base):** Light Gray (#f8fafc) background.
- **Level 1 (Cards):** White surface with a `4px blur, 0.05 opacity` shadow.
- **Interaction:** On hover, cards should lift slightly (8px blur) and the border-color should shift to the Electric Blue accent.

Avoid heavy blurs or glassmorphism; the goal is to feel solid, like a machined part rather than a digital vapor.

## Shapes
The design system uses a **Rounded (0.5rem)** logic for most UI elements. This provides a modern, professional softened edge while maintaining the "industrial" structural integrity. 

- **Primary Buttons & Cards:** 0.5rem (8px).
- **Large Project Containers:** 1rem (16px).
- **Badges/Chips:** 0.25rem (4px) or fully pill-shaped depending on the context. 

Rectilinear shapes are preferred over circles to maintain the technical, grid-aligned aesthetic.

## Components
### Project Cards
Cards feature a high-aspect-ratio image at the top, followed by a `label-mono` category and `headline-md` title. Project cards must include a "Tech Stack" footer using small, square-ish badges.

### Buttons
- **Primary:** Solid Electric Blue with white `label-mono` text, uppercase.
- **Secondary:** Transparent with a 2px Deep Industrial Blue border.
- **States:** Transition background colors over 200ms; avoid bouncy animations.

### Tech Stack Badges
Small, low-contrast gray backgrounds (#f1f5f9) with monospaced text. For primary skills, use a subtle 1px Electric Blue left-border to denote expertise.

### Status Badges
For "Live" projects, use a small Forest Green dot icon next to `label-mono` text. The badge itself should have a light green tint (#f0fdf4).

### Contact Footer
A high-contrast section using the Deep Industrial Blue background. Use white typography and Electric Blue for links. Layout should be a 3-column split: Contact Info, Social Links, and a brief "Ready for Production" CTA.