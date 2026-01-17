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
- Very visual, tastefully done with images and icons to make it aesthetic yet easy to skim.
- Readable typography, generous spacing
- Avoid gimmicky animations; subtle only
- Accessibility: good contrast, alt text, keyboard navigation

## Assets available
- PCopy: content/Profile_Info.txt

- Images/videos: public/images

- Resume: public/Perera_Yuka_Resume.pdf

## Working rules for Claude
- Prefer small, reviewable commits
- Don’t introduce heavy dependencies unless necessary
- After generating code, also provide brief run instructions
- When uncertain, propose 2–3 options with tradeoffs, then pick the simplest default
- Navigation: Home, About, Projects, Experience, Contact, Resume

- Tone: concise, personal, no dash bullets, do not copy verbatim from Profile_Info.txt. Rewrite to sound concise, clear, smooth and easy to read, and impressivev.

- Hero: make MIT + Co-founder and 2nd year in strategy consulting status visually obvious above the fold

- Experience: include Accenture, GM, Shell, MIT Global Teaching Labs (Entrepreneurship/CS instructor) with 1–3 impact bullets each

- About: include All-American tennis, outdoors/hiking/national park stickers, travel (20 countries), honor societies (Tau Beta Pi, Pi Tau Sigma). Make the About page very friendly and casual and more like I am just trying to let people behind the scenes to get to know me a bit more.

- Project labels: Nomad = Co-founder; others = Product Builder or Developer (not Founder)
