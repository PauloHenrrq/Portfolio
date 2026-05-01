# Portfolio PH

> Portfólio pessoal interativo com animações 3D, scroll-driven transitions, e identidade visual premium — projetado para impressionar.

## Project Context

| Field | Value |
|---|---|
| **Type** | Vite + React SPA |
| **Focus** | Fast Delivery |
| **Size** | Small (single dev, under 1 month) |
| **Governance** | Continuous Flow |
| **TypeScript** | Flexible TS |
| **Explanation** | Minimal |
| **Criticism** | Ruthless |

## Stack

| Category | Technologies |
|---|---|
| **Core** | Vite, React 19, TypeScript |
| **3D** | Three.js, React Three Fiber, Drei |
| **Animation** | GSAP + ScrollTrigger (core), Framer Motion (micro-interactions) |
| **Scroll** | Lenis |
| **Quality** | ESLint, Prettier |

## Folder Structure

```
src/
├── animations/      # GSAP timelines, scroll orchestration
├── assets/          # Images, fonts, 3D models
├── components/
│   ├── canvas/      # React Three Fiber (notebook 3D)
│   ├── layout/      # Wrappers, containers
│   └── ui/          # Buttons, cards, reusable UI
├── hooks/           # useLenis, useGsap, custom hooks
├── lib/             # Utilities, data, helpers
├── sections/        # Hero, About, Projects, Stacks, Contact
├── styles/          # Global tokens, section CSS, components CSS
├── types/           # TypeScript type definitions
├── App.tsx          # Root layout + Lenis + sections
└── main.tsx         # Entry point
```

## True North — Where to Start

> **The notebook is the visual anchor. Animations are the narrative thread. Everything else supports that.**

- **Start reading:** `src/App.tsx` — root layout, section composition, Lenis init
- **Start coding:** `src/sections/Hero.tsx` — the first impression, entry animations
- **Then:** `src/animations/heroTimeline.ts` — GSAP orchestration pattern
- **Recommended order:**
  1. `styles/global.css` — design tokens
  2. `sections/Hero.tsx` — hero layout + photo
  3. `animations/heroTimeline.ts` — entry timeline
  4. `hooks/useGsap.ts` — GSAP integration pattern
  5. `components/canvas/` — notebook 3D element
  6. Remaining sections (About → Projects → Stacks → Contact)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

> **Important:** Add your photo as `src/assets/Image Hero.png` and update the import in `src/sections/Hero.tsx`.

## Conventions

- **Commits:** Conventional Commits (English)
- **Code style:** camelCase — adapts per context
- **Formatter:** Prettier
- **Linter:** ESLint
- **TypeScript:** Flexible (strict: false, allowJs: true)
- **CSS:** Vanilla CSS with BEM-inspired naming
- **Animations:** GSAP for scroll/timeline, Framer Motion for micro-interactions only

## Architectural Decisions

| Decision | Rationale |
|---|---|
| Vite over Next.js | No SSR needed; better performance for animation-heavy SPA |
| GSAP over Framer Motion for scroll | Superior control, timeline precision, ScrollTrigger ecosystem |
| Lenis for smooth scroll | Consistent cross-device behavior, lightweight, GSAP-compatible |
| R3F minimal (notebook only) | Avoid 3D performance overhead; focused visual anchor |
| Vanilla CSS over Tailwind | Full control over animation-friendly selectors, BEM naming |
| Flexible TS | Fast iteration without strict type overhead during delivery |
