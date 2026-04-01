# Blog Section Plan

## Overview

A blog tab on the portfolio that doubles as a peek behind the curtain — equal parts personal,
insightful, and fun. Not a thought-leadership soapbox. More like a smart friend texting you
something they found interesting. Short, punchy, witty, well-written, eloquent. You'd actually want to read these.

---

## Goals

- Show personality beyond the resume (humor, curiosity, range)
- Give recruiters/interviewers a richer sense of who you are
- Low commitment to write: posts should feel quick to produce and quick to read
- Evergreen-ish: nothing that requires constant updating to stay relevant

---

## Tone & Voice

- Smart but casual. Think: New Yorker meets group chat.
- Funny without trying too hard. Dry wit > exclamation points.
- First-person, conversational. No jargon, no fluff.
- Concise. If it can be said in 300 words, don't write 600.
- Occasional self-deprecation is encouraged.

---

## Navigation Integration

**Option A (Recommended): Separate `/blog` route**
- Add "Blog" to the nav between Experience and Contact
- `/blog` → list of all posts (card grid)
- `/blog/[slug]` → individual post
- Cleanest architecture, easiest to scale, works great with Next.js App Router

**Option B: Section on main page**
- Scroll-anchored `#blog` section with 2–3 featured posts
- Links out to `/blog` for full list
- Good if you want blog visible without requiring a click

**Recommended default:** Option A, with a "Latest from the blog" teaser on the homepage (2 cards max).

---

## Visual Design

**List page (`/blog`)**
- Cream background, consistent with rest of site
- Cards in a 2-column grid (desktop) / 1-column (mobile)
- Each card: category tag (color-coded), title, 1-sentence description, date, read time estimate
- Subtle hover lift effect (consistent with ProjectCard style)
- No hero image required for posts — keep it text-forward

**Individual post page**
- Clean, editorial layout. Max-width ~680px for reading comfort.
- Playfair Display for the headline, Inter for body
- Category tag + date + read time at the top
- No sidebar. Just the writing.
- "Back to Blog" link at top-left
- Optional: 1 hero image if the post calls for it (not required)

**Color-coded category tags** (pill badges, consistent with site palette):
- `Life` → warm gray / soft indigo
- `Tech` → indigo
- `Product` → emerald
- `Tennis` → soft gold / amber (new accent for blog only)
- `Family` → soft rose / blush (new accent)

---

## Post Structure (template)

Each post follows a loose structure — not a rigid formula, but a guiding shape:

```
[Hook — 1–2 sentences. Drop the reader in.]

[Context — minimal setup. What's happening, who's involved.]

[The thing — the actual story, observation, or argument. This is the meat.]

[The Solution - What tool I decided to use and why, v0, why this solves the problem well, and final product]

[The turn or punchline — a realization, a funny moment, a lesson. Optional but great.]

[1-sentence closer — lands it. Doesn't over-explain.]
```

Posts should feel complete at 300–600 words. Long posts are allowed but rare.

---

## Content Ideas (future posts)

- The video I made for my brother's tennis senior day (first post — see below)
- What being a tennis player taught me about product management
- Ranking national park sticker designs (with actual methodology)
- Starting Nomad: the thing nobody tells you about co-founding with your friends
- What I learned teaching entrepreneurship to high schoolers in rural India
- How I explain what a product manager does to my Sri Lankan relatives
- The 20-country travel tier list (ruthlessly honest)
- A PM's guide to surviving strategy consulting

---

## First Blog Post: "Senior Day Director"

**Slug:** `senior-day-director`
**Category:** Family / Tennis
**Estimated length:** 300–400 words
**Tone:** Warm, funny, self-aware. A little chaotic.

### Premise
Your little brother is having his tennis senior day. Your mom wants to make a simple tribute video.
You, a person who has shipped actual software products and co-founded a startup, are now the
designated "tech person" for a family iMovie project. Chaos ensues. Love prevails.

### Draft outline

**Hook:** Something like — your mom texted you "can you help with a small video" and somehow
that meant you spent a weekend as a film director.

**Context:** What senior day is (briefly), why it matters, the cast of characters
(mom, little brother, probably some old tennis photos that are hilariously dated).

**The thing:** The actual experience of helping. The surprisingly tricky parts
(finding the right music, mom's very specific photo opinions, the render that took forever).
Maybe a moment where you realize this is actually kind of sweet and you're fully invested now.

**The turn:** Something small but true — maybe about what it means to be the sibling
who "knows computers," or about how the final video was objectively great, or about
your brother's reaction, or about how your mom cried.

**Closer:** A line that ties tennis + family + your role together without being saccharine.

### Possible titles (to pick from or riff on):
- "My Mom Asked for a Simple Video"
- "Senior Day Director"
- "The iMovie Project"
- "I Spent My Weekend on a Tennis Tribute Video and I'd Do It Again"
- "Director's Commentary: My Brother's Senior Day Video"

---

## Implementation Plan (phases)

### Phase 1: Structure & routing
- Create `app/blog/page.tsx` (list page)
- Create `app/blog/[slug]/page.tsx` (post page)
- Add blog post data as static TypeScript objects (no CMS for now — keep it simple)
- Add "Blog" to nav

### Phase 2: Design
- Build `BlogCard` component (reuses site design tokens)
- Build post layout (clean, editorial)
- Add category tag system

### Phase 3: Content
- Write + publish first post (senior day video)
- Add 1–2 more posts from the ideas list above

### Phase 4 (optional, later)
- Add MDX support if writing volume increases
- RSS feed
- Simple search/filter by category

---

## Open questions (decide before implementing)

1. **Post title:** Which of the title options do you like? Or something else entirely?
2. **Category tags:** Do the proposed categories (Life, Tech, Product, Tennis, Family) feel right?
3. **Homepage teaser:** Do you want a "Latest Posts" section on the homepage, or just a nav link?
4. **Blog name:** Should the blog have a name/header ("Field Notes", "Dispatches", just "Blog")?
5. **First post details:** What actually happened making the video? Funny moments? What was your
   brother's reaction? The more specific and real, the funnier and better the post will be.
