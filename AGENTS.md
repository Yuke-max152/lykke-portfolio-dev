# AGENTS.md

## Required Context

Before making any change in a new conversation, read these root documents:

- `AGENTS.md` for working rules and protected areas.
- `STEP.md` for the current project status and next task.
- `ROADMAP.md` for the long-term development plan.
- `CONTENT_STRATEGY.md` before changing projects, writing, articles, categories, languages, or content data.
- `DESIGN_DIRECTION.md` before changing layout, UI, interaction, animation, visual style, or responsive behavior.

If the requested task clearly touches only one narrow file or bug, still read `AGENTS.md` and `STEP.md` first.

## Core Rule

Only modify the areas explicitly requested by the user. Do not make unrelated visual, structural, dependency, formatting, behavior, or content changes.

Before editing, identify the exact intended scope. After editing, inspect the diff and confirm that no unrelated files or behavior were changed.

## Protected Areas

Do not change any of the following unless the user explicitly requests it:

- 3D model file or geometry
- object material parameters
- roughness, transmission, clearcoat, or other material values
- lighting
- camera
- physics
- object scale, position generation, collider setup, or animation behavior
- scene background color
- accent color list
- default accent index
- confirmed GitHub link behavior
- confirmed brand text and visible copy

When a task touches the 3D hero, keep the change minimal and verify the diff carefully.

## Quality Standard

This project must be implemented to a high standard. Do not choose temporary, low-quality, or shortcut solutions when a robust implementation is practical.

Prefer production-ready architecture when it does not break existing behavior or add unnecessary complexity. Do not "just make it work" if the result would be hard to maintain, hard to extend, visually inconsistent, or likely to block future goals.

Every feature should be built with the future portfolio direction in mind:

- multilingual content in Chinese, English, and German
- full-page homepage scrolling
- categorized projects
- categorized writing and article routes
- GitHub Pages deployment first
- future migration to a dynamic site with an admin CMS

## Workflow

Work in small, isolated steps. Each conversation should focus on one feature, one section, one document update, or one well-defined change.

For each task:

1. Read the required context documents.
2. Confirm the exact scope from the user's newest request.
3. Make only the requested changes.
4. Run an appropriate verification step.
5. Inspect the diff.
6. Update `STEP.md` when the current step changes or is completed.

Do not combine unrelated roadmap items in a single implementation step.

## Git Rules

Do not commit unless the user asks for a commit.

Before committing:

- run the relevant verification command
- inspect `git diff`
- ensure only intended files are staged
- use a concise commit message that describes the actual change

## Design Rules

Do not improvise a new visual direction without checking `DESIGN_DIRECTION.md`.

The site should feel like a polished personal portfolio and editorial archive, not a generic template, dashboard, or marketing landing page.

Avoid low-quality visual shortcuts, excessive decoration, heavy gradients, cluttered cards, and inconsistent spacing.

## Content Rules

Do not hard-code content in components when it belongs in a content or translation layer, unless the user explicitly requests a small temporary change.

Projects, writing categories, article metadata, and multilingual text should follow `CONTENT_STRATEGY.md`.

## Deployment Direction

Phase 1 targets GitHub Pages as a static site. Do not add backend-only requirements to Phase 1.

Future admin CMS work belongs to a later dynamic phase and must not be mixed into the static GitHub Pages foundation unless the user explicitly changes the plan.
