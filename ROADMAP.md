# ROADMAP.md

## Purpose

This roadmap defines the long-term plan for turning the current site into a high-quality personal portfolio, blog archive, and project showcase.

Detailed current progress belongs in `STEP.md`. This file should describe the overall path, not the current task pointer.

## Phase 0: Planning And Documentation

Create root-level planning documents that future conversations must follow:

- `AGENTS.md`
- `ROADMAP.md`
- `STEP.md`
- `CONTENT_STRATEGY.md`
- `DESIGN_DIRECTION.md`

The goal of this phase is to prevent low-quality, unrelated, or unplanned changes.

## Phase 1: Static Portfolio Foundation

Build a formal static portfolio foundation for GitHub Pages.

Goals:

- preserve the existing 3D hero scene
- preserve confirmed visual and behavior changes
- introduce formal multilingual support for Chinese, English, and German
- migrate only existing visible text into i18n first
- add stable route architecture
- add full-page homepage scrolling
- keep implementation compatible with static deployment

Recommended route direction:

- `/`
- `/projects`
- `/blog`
- `/blog/:slug`
- optional later: `/projects/:slug`

For GitHub Pages, use a robust routing strategy with fallback support if using clean browser routes.

## Phase 2: Homepage Structure

Build the homepage as a full-page scrolling experience.

Homepage sections:

1. Hero
2. About Me / Profile
3. Featured Projects
4. Featured Blog
5. Contact

Each section should occupy one viewport-height panel. Scrolling should move section by section, while subpages should use normal scrolling.

## Phase 3: Projects System

Build categorized project presentation.

Goals:

- support project categories
- support project cover images
- support title, summary, tech stack, and tags
- support optional live demo links
- support GitHub repository links
- support optional case-study article links
- keep project content data-driven

The user may not have deployed every project yet. In that case, cards can show repository links with user-facing labels such as `Source`, `View Code`, or `Repository`, not raw URLs.

## Phase 4: Blog System

Build the blog and notes system.

Goals:

- category tabs at the top of the blog page
- article list below the tabs
- article items with left-side cover image and right-side text
- title, date, category, summary, tags, and language metadata
- independent article detail routes
- MDX as the first-stage content format
- optional external publishing links for platforms such as CSDN, Zhihu, Medium, Dev.to, or other platforms

The user's own website should be the primary article carrier. External platforms are secondary distribution channels.

## Phase 5: Content Expansion

Add real content after the foundation is stable.

Content areas:

- personal profile
- skills
- selected projects
- experiments
- tools
- learning notes
- internship summaries
- project reviews
- article covers and images
- multilingual content

Content should be added in small steps and reviewed per section.

## Phase 6: GitHub Pages Deployment

Prepare static deployment.

Goals:

- configure the build for GitHub Pages
- verify route fallback behavior
- verify asset paths
- verify refresh behavior on article routes
- verify mobile layout
- verify performance

Do not add a backend to this phase.

## Phase 7: Future Dynamic Site And Admin CMS

After the static site is stable, evaluate a full dynamic version.

Possible capabilities:

- admin login
- online article editor
- image upload
- draft and publish states
- category and tag management
- database
- object storage
- authentication
- deployment outside pure GitHub Pages

This phase should not be started until the static portfolio is mature enough to justify the added complexity.
