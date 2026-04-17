# Design System Strategy: Jaladhi Modernist (The Digital Atelier)

## 1. Overview & Creative North Star

The Creative North Star for the "Jaladhi Modernist" design system is **"The Digital Atelier."**

We aim to bridge the gap between high-end editorial fashion and accessible digital commerce. Inspired by platforms like fnp.com, the design prioritizes a frictionless user journey while maintaining a premium, "crafted with intention" aesthetic. The interface acts as a quiet, sophisticated backdrop that allows the user's creativity (the custom apparel) to take center stage.

---

## 2. Visual Language & Brand Identity

### 2.1 Color Palette (Ongoing Theme)

The palette is rooted in the user-requested triad, balanced by neutral "gallery" tones to ensure readability and a modern feel.

#### Color Variables & Usage:

- **Primary/Action:** Fiery Terracotta (`#e94f37`) - CSS Variable: `var(--color-primary)`
  - Used for high-priority CTAs, signaling creative energy and urgency.
  - Usage: `bg-primary`, `text-primary`, `border-primary`

- **Secondary/Trust:** Forest Green (`#4d8b31`) - CSS Variable: `var(--color-secondary)`
  - Used for sustainability badges, success states, and eco-conscious messaging.
  - Usage: `bg-secondary`, `text-secondary`, `border-secondary`

- **Neutral/Structure:** Deep Black (`#0a0908`) - CSS Variable: `var(--color-neutral)`
  - Used for typography, borders, and dark-mode surfaces to provide maximum contrast.
  - Usage: `bg-neutral`, `text-neutral`, `border-neutral`

- **Surface:** Ghost White (`#fffaff`) - CSS Variable: `var(--color-surface)`
  - The primary canvas color, creating a clean, airy, and "uncluttered" environment.
  - Usage: `bg-surface`, `text-surface`

- **Accent/Supporting:** Warm Sand (`#f8f2f0`) - CSS Variable: `var(--color-accent)`
  - Used for section backgrounds to provide subtle tonal shifts without breaking the minimalist flow.
  - Usage: `bg-accent`, `text-accent`, `hover:bg-accent`

#### Implementation Example:

```css
/* Instead of using hex codes directly */
.button-primary {
  background-color: #e94f37; /* ❌ Don't do this */
}

/* Use CSS variables for consistency */
.button-primary {
  background-color: var(--color-primary); /* ✅ Correct approach */
}

/* Or use Tailwind classes */
<button className="bg-primary text-surface hover:bg-primary/90">
  Shop Now
</button>
```

### 2.2 Typography

- **Headlines:** _Plus Jakarta Sans_ - A modern geometric sans-serif that feels approachable yet professional. Used in bold weights with tight tracking for a "editorial" header feel.
  - CSS Variable: `var(--font-plus-jakarta-sans)`
  - Tailwind Class: `font-plus-jakarta-sans`

- **Body & Labels:** _Inter_ or _Manrope_ - High-legibility sans-serifs used for product descriptions and navigation. We utilize generous line-height (1.6) to enhance readability.
  - CSS Variable: `var(--font-inter)`
  - Tailwind Class: `font-inter`

### 2.3 Iconography & Imagery

- **Style:** Minimalist, thin-stroke line icons (2px stroke).
- **Imagery:** High-resolution photography featuring "lifestyle-meets-studio" shots. Soft, directional lighting and neutral backgrounds are used to emphasize the texture and quality of the apparel.

---

## 3. Experience Principles (The FNP Influence)

### 3.1 Frictionless Access

- **Universal Search:** A prominent, intelligent search bar is always accessible in the `TopNavBar`.
- **Progressive Disclosure:** Complex information (like detailed shipping specs) is tucked into drawers or accordion menus to keep the initial view "hurdle-free."

### 3.2 Clear Visual Hierarchy

- **The "Big Hero" Strategy:** Every page starts with a clear, singular focus. On the homepage, this is the "Your Identity, Custom Fabricated" value proposition.
- **Consistent Componentry:** Every screen uses a shared `TopNavBar` and `Footer` to provide a sense of place and easy navigation back to core categories.

---

## 4. Key Component Specifications

### 4.1 TopNavBar

- **Behavior:** Sticky with a background blur (`backdrop-blur-md`) to maintain visibility over scrolling content.
- **Layout:** Centered logo for brand prominence, flanked by category links and utility icons (Search, Profile, Bag).
- **Colors:** Use `bg-surface/90` with `border-neutral/10` for subtle transparency

### 4.2 Product Cards

- **Composition:** Large image area + minimal metadata.
- **Hover States:** Subtle scale-up or shadow increase to indicate interactivity without visual noise.
- **Colors:** `bg-surface` with `hover:bg-accent` transitions

### 4.3 Content Sections

- **"The Process" (Three Acts):** Uses a grid layout with large numerical indicators to guide the user through the "Choose, Design, Deliver" workflow.
- **"Trending Now":** A horizontal scroll or grid featuring "Bestseller" ribbons to provide social proof at a glance.

---

## 5. Technical Design Tokens

- **Corner Radius:** `8px` (Round Eight) for a soft, modern feel.
- **Spacing System:** Base-8 scale (8px, 16px, 24px, 32px, 64px, 128px) to ensure mathematical consistency and rhythm.
- **Grid:** 12-column desktop grid with a `1440px` max-width and `32px` gutters.

### 5.1 CSS Variable Reference

```css
:root {
  /* Brand Colors */
  --color-primary: #e94f37; /* Fiery Terracotta */
  --color-secondary: #4d8b31; /* Forest Green */
  --color-neutral: #0a0908; /* Deep Black */
  --color-surface: #fffaff; /* Ghost White */
  --color-accent: #f8f2f0; /* Warm Sand */

  /* Typography */
  --font-plus-jakarta-sans: 'Plus Jakarta Sans', sans-serif;
  --font-inter: 'Inter', sans-serif;

  /* Spacing (Base-8 Scale) */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
  --spacing-2xl: 128px;

  /* Border Radius */
  --radius: 8px;
}
```

### 5.2 Tailwind Integration

The design system integrates seamlessly with Tailwind CSS using simple, intuitive class names:

```html
<!-- Primary Actions -->
<button class="bg-primary text-surface hover:bg-primary/90 px-6 py-3 rounded-lg font-inter">
  Shop Now
</button>

<!-- Secondary Actions -->
<button class="bg-secondary text-surface hover:bg-secondary/90 px-6 py-3 rounded-lg font-inter">
  Learn More
</button>

<!-- Neutral Elements -->
<div class="bg-surface border border-neutral/20 text-neutral p-4 rounded-lg">
  <h3 class="font-plus-jakarta-sans font-bold text-lg">Product Title</h3>
  <p class="font-inter text-neutral/70">Product description</p>
</div>

<!-- Accent Backgrounds -->
<section class="bg-accent py-16">
  <div class="container mx-auto">
    <!-- Content -->
  </div>
</section>
```

#### Available Class Names:

- **Primary**: `bg-primary`, `text-primary`, `border-primary` (#e94f37)
- **Secondary**: `bg-secondary`, `text-secondary`, `border-secondary` (#4d8b31)
- **Neutral**: `bg-neutral`, `text-neutral`, `border-neutral` (#0a0908)
- **Surface**: `bg-surface`, `text-surface` (#fffaff)
- **Accent**: `bg-accent`, `text-accent`, `hover:bg-accent` (#f8f2f0)
