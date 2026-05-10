# Portfolio PH — Workspace Context

## Project Identity

| Field            | Value                                                                    |
| ---------------- | ------------------------------------------------------------------------ |
| **Goal**         | Portfólio pessoal interativo com animações 3D e scroll-driven experience |
| **Type**         | Vite + React SPA                                                         |
| **Focus**        | Fast Delivery                                                            |
| **Size**         | Small                                                                    |
| **Governance**   | Continuous Flow                                                          |
| **TypeScript**   | Flexible TS                                                              |
| **SOLID**        | No (pragmatic)                                                           |
| **Architecture** | Standard flat                                                            |
| **Explanation**  | Minimal                                                                  |
| **Criticism**    | Ruthless                                                                 |

## Active Stack

- **Runtime:** Vite 8 + React 19 + TypeScript 6
- **3D:** Three.js 0.184 + React Three Fiber 9 + Drei 10
- **Animation:** GSAP 3.15 + ScrollTrigger (scroll/timeline), Framer Motion 12 (micro only)
- **Scroll:** Lenis 1.3
- **Quality:** ESLint 10, Prettier 3.8

## Folder Structure + Responsibilities

```
src/
├── animations/      # GSAP timelines and scroll orchestration
├── assets/          # Static files (images, fonts, 3D models)
├── components/
│   ├── canvas/      # R3F components (notebook 3D only)
│   ├── layout/      # Structural wrappers
│   └── ui/          # Reusable UI components
├── hooks/           # useLenis, useGsap, custom hooks
├── lib/             # Utilities, data, constants
├── sections/        # Page sections (Hero, About, Projects, Stacks, Contact)
├── styles/          # CSS: global tokens, section styles, component styles
├── types/           # TypeScript definitions
├── App.tsx          # Root composition
└── main.tsx         # Entry point
```

## True North

> **The notebook is the visual anchor. Animations are the narrative thread. Everything else supports that.**

- Entry: `src/App.tsx`
- First section: `src/sections/Hero.tsx`
- Animation pattern: `src/animations/heroTimeline.ts`
- GSAP hook: `src/hooks/useGsap.ts`

## Project Conventions

- **Naming:** camelCase (variables/functions), PascalCase (components/types)
- **CSS:** Vanilla CSS, BEM-inspired (`.block__element--modifier`)
- **Animation ownership:** GSAP owns scroll + timeline; Framer Motion owns hover + fade
- **3D scope:** Only the notebook element uses R3F — nothing else
- **Imports:** Use `@/` alias for all `src/` imports

## Architectural Decisions

| Decision             | Why                                                               |
| -------------------- | ----------------------------------------------------------------- |
| Vite SPA             | No SSR; maximum build/dev performance for animation-heavy app     |
| GSAP + ScrollTrigger | Industry standard for scroll-driven animation precision           |
| Lenis                | Smooth scroll that integrates with GSAP ScrollTrigger             |
| R3F minimal          | Notebook as visual anchor only — avoid 3D overhead                |
| Vanilla CSS          | Full selector control for animation classes, no utility conflicts |

## Active Workflows

- `/build` — iterative section construction
- `/review` — ruthless quality check
- `/commit` — semantic commits
- `/log` — progress tracking

## Progress Log
- [2026-04-27] Project initialized via /init
- [2026-05-01] Refinamento Premium das seções Sobre e Stacks.
- [2026-05-02] Finalização da navegação responsiva e modais de projeto.
- [2026-05-03] Finalização da seção de Metodologia e responsividade mobile profunda.

> Para o histórico detalhado de todas as alterações técnicas e decisões de design, consulte o arquivo [LOGS.md](file:///c:/Users/paulo/workspace/projetos/Portfolio%20PH/LOGS.md).

---
*Maintained by Antigravity AI.*
