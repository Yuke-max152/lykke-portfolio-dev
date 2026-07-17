# CONTENT_STRATEGY.md

## Purpose

This document defines how portfolio content, project content, blog content, categories, article metadata, multilingual content, and future admin CMS planning should be structured.

## Site Structure

Homepage:

1. Hero
2. About Me / Profile
3. Featured Projects
4. Featured Blog
5. Contact

Subpages:

- `/projects`
- `/blog`
- `/blog/:slug`
- optional later: `/projects/:slug`
- optional later: `/about`

The homepage should use full-page section scrolling. Subpages should use normal scrolling so long lists and articles remain comfortable to read.

## About Me / Profile

The About Me section should appear immediately after the Hero section.

Its role is similar to a refined resume introduction, but it should not look like a long resume page.

It should communicate:

- who the user is
- current focus
- skills and technical direction
- education, internship, or career context when relevant
- links to contact or social profiles

## Project Categories

Initial categories:

- Websites
- Experiments
- Tools
- Other

Each project should support:

- title
- category
- summary
- cover image
- tech stack
- tags
- live demo URL, optional
- GitHub repository URL, optional
- case study article URL or slug, optional
- language-specific title and summary when needed

If a project is not deployed yet, show a repository action with a label such as `Source`, `View Code`, or `Repository`, not the raw URL.

## Blog Categories

Initial categories:

- All
- Learning
- Internship
- Project Review
- Frontend
- Notes

The Blog page should use category tabs at the top and an article list below.

Article list item format:

- cover image on the left
- title on the right
- date
- category
- summary
- tags
- optional external links

On narrow mobile screens, the layout can adapt only if needed for readability.

## Article Detail Pages

An article detail page is a first-class page on this website for reading one complete article.

Example routes:

- `/blog/react-useeffect-notes`
- `/blog/internship-week-3`
- `/blog/portfolio-review`

Article detail pages should be shareable directly and should belong to this website, not only redirect to external platforms.

## Content Format

Phase 1 should use MDX for articles.

MDX is the formal first-stage content system, not a low-quality workaround. It allows:

- article metadata
- rich Markdown blog content
- images
- code blocks
- custom React content components
- future migration to a CMS

Example article metadata:

```md
---
title: "React useEffect Notes"
date: "2026-07-17"
category: "Learning"
tags: ["React", "Frontend"]
cover: "/images/posts/react-useeffect.jpg"
summary: "Notes about useEffect timing, dependencies, and common mistakes."
language: "en"
external:
  csdn: ""
  zhihu: ""
  medium: ""
  devto: ""
---
```

## External Publishing

The user's own website should be the primary article carrier.

External platforms can be used for distribution:

- CSDN
- Zhihu
- Medium
- Dev.to
- other platforms later

Each article may include external links after it is republished elsewhere.

## Multilingual Strategy

The site should support:

- Chinese
- English
- German

Multilingual support should apply to:

- navigation
- interface labels
- homepage content
- project metadata
- blog metadata
- article content when translations exist

Do not assume every article will immediately have all three translations. The content model should allow partial translations without breaking the site.

## Future Admin CMS

Phase 1 does not include an online admin backend.

A future dynamic version may add:

- admin login
- online editor
- image upload
- draft and publish states
- database
- object storage
- category and tag management

This future CMS should be planned as an upgrade path after the static GitHub Pages version is stable.
