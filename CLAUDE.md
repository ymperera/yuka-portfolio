# Project: Personal Portfolio Website

## Goal
Build a polished personal portfolio website for product manager interviews.
Primary audience: recruiters, hiring managers, interviewers.
Secondary audience: peers and collaborators.

## Success criteria
- Loads fast, works on mobile
- Clearly communicates: who I am, what I built, impact, and how to contact me
- Strong case studies with metrics and clear storytelling
- Easy to update (add projects, tweak copy)

## Tech stack
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Package manager: npm
(Claude: keep it simple.)

## Commands
- Dev: npm run dev
- Build: npm run build
- Lint: npm run lint

## Deployment (fixed)
- Host on Vercel
- No custom server requirements; must work with Vercel defaults

## Site structure (pages/sections)
- Home / Landing: headline, 1–2 sentence positioning, CTA to resume/contact
- About: short bio + strengths + principles + Origin + About me pictures
- Projects/Case Studies: 3–5 projects, each with:
  - Problem, constraints, approach, users, execution, results/metrics, learnings
- Resume: downloadable link + highlights
- Contact: email + LinkedIn

## Style requirements
- Clean, modern, minimal
- Readable typography, generous spacing
- Avoid gimmicky animations; subtle only
- Accessibility: good contrast, alt text, keyboard navigation

## Assets available
- Photos and screenshots in: assets/images
- Source copy in: website_copy.txt (Claude should use this as the starting point)

## Working rules for Claude
- Prefer small, reviewable commits
- Don’t introduce heavy dependencies unless necessary
- After generating code, also provide brief run instructions
- When uncertain, propose 2–3 options with tradeoffs, then pick the simplest default
