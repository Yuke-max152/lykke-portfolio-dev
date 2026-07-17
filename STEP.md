# STEP.md

## Current Phase

Phase 1: Static Portfolio Foundation.

## Current Status

The project currently has:

- Vite + React setup
- React Three Fiber / Three.js hero scene
- warm light gray scene background
- default accent set to green
- brand text changed to `Lykke`
- personal portfolio copy in the hero area
- GitHub button linked to `https://github.com/Yuke-max152`
- GitHub button opening in a new tab
- GitHub SVG icon inside the button
- formal i18n support configured with `i18next` and `react-i18next`
- Chinese, English, and German translation resources for current visible hero text
- existing visible hero copy migrated into the translation layer
- front-end language switcher for English, Chinese, and German
- restrained development FPS performance monitor for the current 3D hero

Recent confirmed commit:

- `203b6dc Update portfolio branding and GitHub link`

## Completed In Current Phase

Created root planning documents:

- `AGENTS.md`
- `ROADMAP.md`
- `STEP.md`
- `CONTENT_STRATEGY.md`
- `DESIGN_DIRECTION.md`

Introduced i18n foundation:

- installed `i18next` and `react-i18next`
- added English, Chinese, and German translation resources
- migrated only the current visible hero text into i18n
- added a compact English / Chinese / German language switcher
- persisted the selected language in browser local storage
- kept the current page layout and GitHub link behavior unchanged
- did not change 3D model, materials, lighting, physics, scene background, object colors, default accent, or animation parameters
- added a custom neutral FPS monitor overlay for observing the current 3D hero performance during development
- kept the monitor isolated in its own component with a simple enable switch

## Scope Completed

Planning documents exist in the root directory.

The current application step completed the i18n foundation, front-end language switching for existing visible hero text, and a development FPS monitor for the existing 3D hero.

Routing, homepage full-page scrolling, projects, writing, content expansion, deployment configuration, 3D scene settings, and visual redesign were not changed in this step.

## Next Step

Use the FPS monitor to evaluate the current 3D hero performance before implementing homepage scrolling.

Expected scope for that next step:

- measure the current hero performance on desktop and narrow viewport sizes
- identify whether homepage scrolling can be added without first reducing render cost
- keep any performance notes focused on the current 3D hero and homepage scroll planning
- keep confirmed branding, GitHub behavior, background, colors, and default accent unchanged
- do not redesign the page
- do not change 3D model, materials, lighting, physics, background, object colors, default accent, camera, or animation parameters

## Planned Homepage Scroll Direction

After performance diagnostics are in place, the homepage scroll implementation should follow the `Homepage Scroll Method` in `DESIGN_DIRECTION.md`:

- prefer a fixed 3D canvas with normal document scrolling
- use scroll position to drive subtle 3D response only after measuring performance
- avoid moving one large transformed page wrapper that contains the WebGL canvas
- avoid reintroducing a custom fullpage transition system before the 3D hero performance is understood
- keep subpages such as `/projects`, `/writing`, and article routes on normal scrolling

## Working Rule For Future Conversations

Each new conversation should start by reading:

1. `AGENTS.md`
2. `STEP.md`
3. any task-specific planning document listed in `AGENTS.md`

When a step is completed, update this file so the next conversation knows the current phase, completed work, and next task.
