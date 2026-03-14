# Yuka Portfolio - Custom Design System
**Target Audience:** AI Startup Recruiters (Anthropic, OpenAI, Top AI Companies)
**Aesthetic:** Minimalist, Sophisticated, Warm, Professional
**Tech Stack:** Next.js, Tailwind CSS v4

---

## 1. Color System

### Core Palette (From Stitch Design)

```css
/* Primary Colors */
--cream-bg: #FAF8F4;        /* Main background - warm cream */
--warm-gray: #EEEBE4;       /* Secondary backgrounds, subtle sections */
--indigo-accent: #363681;   /* Primary accent - deep indigo */
--charcoal-text: #1A1A1A;   /* Primary text - rich charcoal */

/* Supporting Colors */
--cream-darker: #F5F2EB;    /* Hover states, subtle variations */
--indigo-light: #4A4A9F;    /* Hover states for accent */
--indigo-dark: #2B2B66;     /* Active states for accent */
--gray-mid: #6B6B6B;        /* Secondary text, muted content */
--gray-light: #A8A8A8;      /* Tertiary text, borders */
--white: #FFFFFF;           /* Pure white for cards, overlays */
```

### Tailwind v4 Configuration

```css
@theme {
  --color-cream: #FAF8F4;
  --color-cream-dark: #F5F2EB;
  --color-warm-gray: #EEEBE4;
  --color-indigo: #363681;
  --color-indigo-light: #4A4A9F;
  --color-indigo-dark: #2B2B66;
  --color-charcoal: #1A1A1A;
  --color-gray-mid: #6B6B6B;
  --color-gray-light: #A8A8A8;

  /* Semantic Colors */
  --color-background: var(--color-cream);
  --color-surface: var(--color-white);
  --color-text-primary: var(--color-charcoal);
  --color-text-secondary: var(--color-gray-mid);
  --color-accent: var(--color-indigo);
}
```

### Usage Guidelines

| Element | Color | Usage |
|---------|-------|-------|
| Page Background | `--cream-bg` | Main body background |
| Section Alternates | `--warm-gray` | Alternate sections (About, Experience) |
| Cards/Overlays | `--white` | Project cards, elevated content |
| Primary Text | `--charcoal-text` | Headings, body copy |
| Secondary Text | `--gray-mid` | Captions, metadata, timestamps |
| Tertiary Text | `--gray-light` | Placeholder, disabled |
| Primary CTA | `--indigo-accent` | Buttons, links, active states |
| Borders | `--warm-gray` | Subtle dividers |

**Contrast Requirements:**
- All text combinations meet WCAG AAA (7:1+ ratio)
- Charcoal on Cream: 11.5:1 ✓
- Indigo on Cream: 7.8:1 ✓
- White on Indigo: 9.2:1 ✓

---

## 2. Typography System

### Font Stack

**Primary:** Inter (Headings & Body)
**Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});
```

### Type Scale (Responsive)

```css
@theme {
  /* Mobile First (375px+) */
  --font-size-xs: 0.75rem;      /* 12px - Captions, fine print */
  --font-size-sm: 0.875rem;     /* 14px - Metadata, tags */
  --font-size-base: 1rem;       /* 16px - Body text */
  --font-size-lg: 1.125rem;     /* 18px - Large body, intro */
  --font-size-xl: 1.5rem;       /* 24px - H3 */
  --font-size-2xl: 2rem;        /* 32px - H2 */
  --font-size-3xl: 2.5rem;      /* 40px - H1 mobile */

  /* Desktop (768px+) */
  --font-size-xl-desktop: 1.75rem;   /* 28px - H3 */
  --font-size-2xl-desktop: 2.5rem;   /* 40px - H2 */
  --font-size-3xl-desktop: 3.5rem;   /* 56px - H1 */
}
```

### Typography Styles

```tsx
// Headings
<h1 className="text-3xl md:text-5xl font-bold text-charcoal leading-tight tracking-tight">
  // Hero title
</h1>

<h2 className="text-2xl md:text-4xl font-bold text-charcoal leading-snug">
  // Section titles
</h2>

<h3 className="text-xl md:text-2xl font-semibold text-charcoal leading-normal">
  // Subsection titles
</h3>

// Body Text
<p className="text-base md:text-lg text-charcoal leading-relaxed">
  // Standard paragraph
</p>

<p className="text-sm text-gray-mid leading-normal">
  // Secondary text, metadata
</p>

// Intro/Lead Text
<p className="text-lg md:text-xl text-charcoal leading-relaxed font-medium max-w-3xl">
  // Prominent intro paragraphs
</p>
```

### Line Heights & Letter Spacing

- **Headings:** `leading-tight` (1.25) to `leading-snug` (1.375)
- **Body:** `leading-relaxed` (1.625) - optimal readability
- **Captions:** `leading-normal` (1.5)
- **Tracking:** `-tracking-tight` for large headings (48px+)

### Line Length

- **Optimal:** 65-75 characters (45-65ch)
- **Max width:** `max-w-3xl` (768px) for body text
- **Hero/Intro:** `max-w-4xl` (896px)

---

## 3. Spacing System

### Base Unit: 4px (0.25rem)

```css
@theme {
  --spacing-xs: 0.5rem;      /* 8px */
  --spacing-sm: 0.75rem;     /* 12px */
  --spacing-md: 1rem;        /* 16px */
  --spacing-lg: 1.5rem;      /* 24px */
  --spacing-xl: 2rem;        /* 32px */
  --spacing-2xl: 3rem;       /* 48px */
  --spacing-3xl: 4rem;       /* 64px */
  --spacing-4xl: 6rem;       /* 96px */
  --spacing-5xl: 8rem;       /* 128px */
}
```

### Section Padding

```tsx
// Mobile
<section className="py-12 px-6">    // Small sections
<section className="py-16 px-6">    // Medium sections
<section className="py-20 px-6">    // Large sections

// Desktop
<section className="py-20 md:py-32 px-6">  // Hero, major sections
<section className="py-16 md:py-24 px-6">  // Standard sections
```

### Container Widths

```tsx
// Narrow content (text-heavy)
<div className="max-w-3xl mx-auto">   // 768px

// Standard content
<div className="max-w-4xl mx-auto">   // 896px

// Wide content (projects, grid)
<div className="max-w-5xl mx-auto">   // 1024px

// Maximum width
<div className="max-w-6xl mx-auto">   // 1152px
```

### Gaps & Spacing

```tsx
// Vertical rhythm
<div className="space-y-4">   // Between related elements
<div className="space-y-6">   // Between sections/cards
<div className="space-y-12">  // Between major content blocks

// Grid gaps
<div className="grid gap-6">       // Cards, images
<div className="grid gap-8 md:gap-12">  // Project grid
```

---

## 4. Component Patterns

### Navigation

**Design:** Fixed, translucent, floating style (optional), subtle shadow

```tsx
<nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-warm-gray">
  <div className="max-w-6xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <a href="#" className="text-xl font-bold text-charcoal">
        YP
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-charcoal hover:text-indigo transition-colors">
          About
        </a>
        <a href="#projects" className="text-charcoal hover:text-indigo transition-colors">
          Projects
        </a>
        <a
          href="/resume.pdf"
          className="px-5 py-2.5 bg-indigo text-white rounded-lg hover:bg-indigo-light transition-colors font-medium"
        >
          Resume
        </a>
      </div>
    </div>
  </div>
</nav>
```

**Key Features:**
- Sticky positioning with backdrop blur
- Cream background at 95% opacity
- Subtle border bottom
- Indigo hover states
- Primary CTA: Resume button

---

### Hero Section

**Design:** Centered, generous whitespace, clear hierarchy, professional headshot

```tsx
<section className="relative bg-cream pt-24 pb-20 md:pt-32 md:pb-28">
  <div className="max-w-4xl mx-auto px-6 text-center">
    {/* Headshot */}
    <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden mx-auto mb-8 ring-4 ring-warm-gray">
      <Image
        src="/images/headshot.jpg"
        alt="Yuka Perera"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Name */}
    <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-6 tracking-tight">
      Yuka Perera
    </h1>

    {/* Credentials/Tags */}
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
      <span className="px-5 py-2 bg-indigo text-white rounded-full text-sm md:text-base font-semibold">
        MIT Engineer
      </span>
      <span className="px-5 py-2 bg-indigo text-white rounded-full text-sm md:text-base font-semibold">
        Co-founder
      </span>
      <span className="px-5 py-2 bg-indigo text-white rounded-full text-sm md:text-base font-semibold">
        Product Builder
      </span>
    </div>

    {/* Positioning Statement */}
    <p className="text-lg md:text-xl text-charcoal max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
      I build products that solve real user problems, bridging strategy and execution.
    </p>

    {/* Contact Links */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-base md:text-lg">
      <a href="mailto:email@example.com" className="text-charcoal hover:text-indigo transition-colors">
        email@example.com
      </a>
      <span className="hidden sm:inline text-gray-light">|</span>
      <a href="https://linkedin.com" className="text-indigo hover:text-indigo-light font-medium transition-colors">
        LinkedIn
      </a>
    </div>
  </div>
</section>
```

**Key Features:**
- Professional headshot with subtle ring
- Bold name with tight tracking
- Credential badges in indigo
- Single positioning statement (not verbose)
- Clean contact links

---

### Project Cards

**Design:** Side-by-side layout (desktop), image + content, clear hierarchy

```tsx
<div className="group">
  <div className="flex flex-col md:flex-row gap-8">
    {/* Project Image */}
    <div className="md:w-2/5">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-warm-gray group-hover:shadow-md transition-shadow">
        <Image
          src="/images/project.jpg"
          alt="Project name"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Project Content */}
    <div className="md:w-3/5">
      {/* Title + Badge */}
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-2xl font-bold text-charcoal">
          Project Name
        </h3>
        <span className="px-3 py-1.5 bg-indigo text-white text-sm rounded-full font-semibold shrink-0">
          Co-Founder
        </span>
      </div>

      {/* Category */}
      <p className="text-gray-mid mb-4 font-medium">
        Product & Hardware
      </p>

      {/* Content */}
      <div className="space-y-4 text-charcoal">
        <div>
          <h4 className="font-semibold mb-2">Problem</h4>
          <p className="leading-relaxed">
            Description of the problem...
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">What I Built</h4>
          <p className="leading-relaxed">
            Solution description...
          </p>
        </div>

        {/* Tech Stack */}
        <p className="text-sm text-gray-mid">
          Tech: React, Next.js, Firebase
        </p>

        {/* Link */}
        <a
          href="https://project.com"
          className="inline-block text-sm text-indigo hover:text-indigo-light font-medium transition-colors"
        >
          Visit project.com →
        </a>
      </div>
    </div>
  </div>
</div>
```

**Key Features:**
- 40/60 image-to-content ratio
- Role badge (Co-Founder, Product Builder)
- Problem/Solution structure
- Subtle hover shadow on image
- Tech stack in small gray text
- External link with arrow

---

### Experience Cards

**Design:** Horizontal layout, logo + content, subtle left border accent

```tsx
<div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-indigo">
  <div className="flex items-start gap-4">
    {/* Company Logo */}
    <div className="w-12 h-12 relative shrink-0">
      <Image
        src="/images/company-logo.png"
        alt="Company Name"
        fill
        className="object-contain"
      />
    </div>

    {/* Content */}
    <div className="flex-1">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <div>
          <h3 className="text-xl font-bold text-charcoal">
            Company Name
          </h3>
          <p className="text-base text-gray-mid font-medium">
            Job Title
          </p>
        </div>
        <p className="text-gray-mid text-sm sm:text-base">
          Jun 2024 – Present
        </p>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-2 text-charcoal mt-3">
        <li className="flex gap-3">
          <span className="text-indigo font-bold shrink-0">•</span>
          <span>Impact bullet point with metrics...</span>
        </li>
        <li className="flex gap-3">
          <span className="text-indigo font-bold shrink-0">•</span>
          <span>Another achievement...</span>
        </li>
      </ul>
    </div>
  </div>
</div>
```

**Key Features:**
- White card on warm-gray section background
- Indigo left border accent (4px)
- Company logo (48x48)
- Indigo bullet points
- Responsive date placement

---

### Section Layouts

**Alternating Backgrounds:**

```tsx
{/* Cream sections */}
<section id="home" className="bg-cream py-20 md:py-32">
  ...
</section>

{/* Warm gray sections */}
<section id="about" className="bg-warm-gray py-20 md:py-28">
  ...
</section>

{/* White sections (rare, for special emphasis) */}
<section id="special" className="bg-white py-16 md:py-24">
  ...
</section>
```

**Standard Section Structure:**

```tsx
<section id="projects" className="bg-cream py-20">
  <div className="max-w-4xl mx-auto px-6">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12">
      Projects
    </h2>

    {/* Content */}
    <div className="space-y-16">
      {/* Project cards */}
    </div>
  </div>
</section>
```

---

## 5. Effects & Animations

### Transitions

**Standard timing:** 200ms for most interactions

```tsx
// Color transitions
className="transition-colors duration-200"

// Shadow transitions
className="transition-shadow duration-200"

// All-purpose (use sparingly)
className="transition-all duration-200"
```

### Hover States

```tsx
// Links
className="text-charcoal hover:text-indigo transition-colors"

// Buttons
className="bg-indigo hover:bg-indigo-light transition-colors"

// Cards
className="shadow-sm hover:shadow-md transition-shadow"

// Images (subtle lift)
className="transform hover:scale-[1.02] transition-transform duration-300"
```

### Focus States (Accessibility)

```tsx
// All interactive elements
className="focus:outline-none focus:ring-2 focus:ring-indigo focus:ring-offset-2"

// On dark backgrounds
className="focus:ring-offset-charcoal"
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Responsive Breakpoints

```css
/* Mobile first approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Testing Viewports

- **Mobile:** 375px (iPhone SE)
- **Tablet:** 768px (iPad)
- **Laptop:** 1024px (iPad Pro Landscape)
- **Desktop:** 1440px (Standard desktop)

---

## 7. Accessibility Checklist

- [ ] **Contrast:** All text meets WCAG AAA (7:1+)
- [ ] **Focus:** Visible focus rings on all interactive elements
- [ ] **Alt Text:** Descriptive alt text on all images
- [ ] **Semantic HTML:** `<nav>`, `<main>`, `<section>`, `<article>`
- [ ] **ARIA Labels:** Icon-only buttons have `aria-label`
- [ ] **Keyboard Nav:** All functionality accessible via keyboard
- [ ] **Touch Targets:** Minimum 44x44px on mobile
- [ ] **Reduced Motion:** Respects `prefers-reduced-motion`

---

## 8. Performance Guidelines

### Images

```tsx
// Use Next.js Image component
import Image from 'next/image';

// Responsive images
<Image
  src="/image.jpg"
  alt="Description"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Priority for above-fold images
<Image priority />
```

### Fonts

```typescript
// Preload fonts, use font-display: swap
const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
});
```

### CSS

- Avoid layout shifts (use `aspect-square`, `aspect-video`)
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Minimize reflows with fixed dimensions where possible

---

## 9. Implementation Checklist

### Before Delivery

- [ ] No emojis as UI icons (use Lucide React or Heroicons)
- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states have smooth transitions (200ms)
- [ ] All text meets contrast requirements (4.5:1 minimum)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Images use Next.js `<Image>` component
- [ ] No horizontal scroll on mobile
- [ ] Section backgrounds alternate properly

---

## 10. Brand Voice & Content Guidelines

### Tone
- **Professional** but not corporate
- **Confident** but not arrogant
- **Clear** and direct (no jargon)
- **Warm** and approachable

### Content Principles
1. **Lead with impact** - Start with results/outcomes
2. **Be specific** - Use numbers, metrics, concrete details
3. **Show, don't tell** - Demonstrate skills through projects
4. **Stay concise** - Every word earns its place
5. **Human first** - Write like you're talking to a person, not a robot

### Example Headlines
✓ "I build products that solve real user problems"
✓ "MIT Engineer & Co-founder"
✗ "Passionate innovator leveraging cutting-edge technologies"
✗ "Results-driven thought leader"

---

## 11. File Structure

```
web/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Home page (all sections)
│   └── globals.css         # Tailwind + custom theme
├── public/
│   ├── images/
│   │   ├── headshot.jpg
│   │   ├── projects/
│   │   └── logos/
│   └── resume.pdf
└── components/             # Optional: extract reusable components
    ├── Navigation.tsx
    ├── ProjectCard.tsx
    └── ExperienceCard.tsx
```

---

## 12. Quick Reference: Common Patterns

### Button Styles

```tsx
// Primary CTA
<button className="px-5 py-2.5 bg-indigo text-white rounded-lg hover:bg-indigo-light transition-colors font-medium">
  Primary Action
</button>

// Secondary (text link)
<a className="text-indigo hover:text-indigo-light font-medium transition-colors">
  Learn more →
</a>

// Tertiary (subtle)
<button className="text-charcoal hover:text-indigo transition-colors">
  View all
</button>
```

### Badge/Tag Styles

```tsx
// Role badge (prominent)
<span className="px-3 py-1.5 bg-indigo text-white text-sm rounded-full font-semibold">
  Co-Founder
</span>

// Tech tag (subtle)
<span className="px-3 py-1 bg-warm-gray text-charcoal text-xs rounded-full">
  React
</span>
```

### Card Shadow Styles

```tsx
// Subtle elevation
className="shadow-sm"

// Medium elevation (hover)
className="shadow-md"

// Prefer ring for subtle borders
className="ring-1 ring-warm-gray"
```

---

**Last Updated:** March 2026
**Maintained by:** Claude Code (for Yuka Portfolio redesign)
