# DESIGN_DIRECTION.md

## Purpose

This document defines the visual and interaction direction for the portfolio.

Before changing layout, visual style, interactions, animations, responsive behavior, or section composition, read this document.

## Overall Direction

The site should feel like a refined personal portfolio and editorial archive.

Keywords:

- polished
- calm
- high-standard
- precise
- contemporary
- personal
- editorial
- technical

Avoid:

- generic template design
- low-quality card grids
- excessive decoration
- heavy gradients
- cluttered dashboards
- random animations
- marketing-page filler sections
- visual choices that fight the existing 3D hero

## Homepage Experience

The homepage should use full-page section scrolling.

Each major section occupies one viewport:

1. Hero
2. About Me / Profile
3. Featured Projects
4. Featured Writing
5. Contact

The scroll experience should move section by section. A section should not contain its own competing full-page scroll behavior.

Subpages such as `/projects`, `/writing`, and article detail pages should use normal scrolling.

## Homepage Scroll Method

The preferred homepage interaction direction should follow the stable parts of the `lusion-reverse-engineered` reference:

- keep the 3D canvas visually fixed to the viewport when building scroll-based homepage sections
- let normal document scrolling drive the page instead of moving one large wrapper that contains the WebGL canvas
- use scroll position to influence 3D presentation only when the effect is measured and stable
- avoid transform-animating a full multi-screen page track that contains the active WebGL scene
- avoid forcing a custom fullpage scroll state machine before the current 3D hero performance is measured

The homepage may still be organized as viewport-height sections, but the implementation should prioritize smoothness and stability over a strict presentation-slide effect. Projects, writing, and article pages should remain normal scrolling pages.

Before implementing homepage scroll or page-transition behavior, add and use a development-only FPS monitor to evaluate the current 3D hero performance.

## Hero

The existing 3D hero is the visual anchor of the site.

Preserve confirmed hero behavior unless explicitly requested:

- existing 3D object behavior
- warm light gray scene background
- default green accent
- GitHub button behavior
- brand text `Lykke`

Future hero changes should be minimal and deliberate.

## About Me / Profile

The About Me section should be the second homepage section.

It should function like a concise resume introduction without looking like a traditional long resume.

Suggested content:

- short identity statement
- current focus
- skills
- learning or internship context
- contact action

The design should feel structured, calm, and credible.

## Projects

Projects should be presented as selected work, not as a crowded gallery.

Project cards should support:

- category
- title
- short summary
- tech stack
- cover image
- live demo action when available
- repository action when available
- case study action when available

Project categories should be visible and easy to scan.

## Writing

The Writing page should use a category-tab layout inspired by article archives.

Reference format:

- top category tabs
- article list below
- each article row has image on the left
- title, date, category, summary, and tags on the right

The final design should not copy any reference screenshot directly. Use references only for interaction and information-architecture direction.

## Article Pages

Article pages should feel like a serious personal knowledge archive.

Priorities:

- readable text measure
- clear title and metadata
- strong image handling
- code block readability
- tags and category visibility
- optional external publication links

## Visual Language

Use a restrained palette that supports the existing hero:

- warm light gray
- black
- white
- muted neutral grays

Avoid introducing many unrelated accent colors.

Typography should be clean and precise. Text hierarchy should be clear on desktop and mobile.

## References

Reference sites and screenshots may be used to study:

- page structure
- interaction patterns
- information density
- article archive layout
- editorial rhythm
- portfolio presentation
- visual rhythm, spacing, motion, and interaction details when the user explicitly asks to use a reference closely

Reference direction should not be treated as a hard ban on similarity. When the user explicitly names a reference project, it is acceptable to follow its structure, interaction model, pacing, and visual language closely enough to achieve the requested experience.

Before directly reusing third-party protected assets, logos, brand marks, images, or exact proprietary source code, confirm that the user wants that and has the right to use it. Prefer adapting the reference to Lykke's content and existing 3D identity unless the user asks for a closer match.

## Implementation Standard

Every design implementation should be responsive, maintainable, and compatible with the planned multilingual site.

Do not create one-off styling that cannot handle Chinese, English, and German text length differences.

Before finishing a visual change:

- verify the page still builds
- do one focused final change review to confirm the visual change stayed within scope
- check that unrelated confirmed behavior has not changed
