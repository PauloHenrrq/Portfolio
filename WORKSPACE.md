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
> Maintained by /log.

<!-- LOG_START -->
- [2026-04-27] Project initialized via /init
- [2026-05-01] Refinamento Premium das seções Sobre e Stacks.
- [2026-05-02] Finalização da navegação responsiva e modais de projeto.
- [2026-05-03] Finalização da seção de Metodologia e responsividade mobile profunda.
- [2026-06-13] perf: Otimizações de performance mobile no Stage 04 e no Modal de Projetos
  - What: Desativadas animações complexas no mobile e adicionado ocultamento de seções em background via visibility:hidden durante exibição do modal de projetos.
  - Decisions: Preservar layout idêntico no desktop, desativando componentes dinâmicos pesados apenas no mobile para otimização extrema de CPU/GPU.
  - Workflows: /perf, /commit, /log
  - Next: Aguardar validação do usuário em dispositivos móveis reais.
- [2026-06-14] perf: Faxina extrema de performance móvel nos Stages 04 e 05
  - What: Desativados elementos 3D traseiros, texturas de ruído (soft-light) e máscara fractal de carimbo (ink stamp) no Stage 04; removido backdrop-filter, partículas de fundo e drop-shadow do SVG de telemetria no Stage 05; desacoplado ScrollTrigger do carrossel no mobile.
  - Decisions: Remover do viewport mobile tudo o que gera repaints de GPU excessivos, mantendo apenas a estrutura limpa dos painéis de relatório e dashboard.
  - Workflows: /perf, /commit, /log
- [2026-06-14] fix: Correção de layout e escala no Stage 05 no mobile
  - What: Ajustados padding do dashboard, gap e font-size das métricas para evitar que a palavra "ESTABILIDADE" seja cortada na lateral em celulares estreitos.
  - Decisions: Reduzir a escala das fontes e espaçamentos no mobile para manter toda a informação textual do painel em tela cheia sem vazamento.
  - Workflows: /commit, /log
- [2026-06-14] style: Escala e posicionamento da imagem da pasta no Stage 02 no mobile
  - What: Aumentado o tamanho da imagem da pasta para 80% (com max-width de 310px) e aplicada translação translateY de 45px para deslocar o wrapper mais para baixo no mobile.
  - Decisions: Melhorar o impacto visual da árvore de arquivos no celular e ajustar o alinhamento em relação às chamadas flutuantes, posicionando-a mais baixa e 10% maior que o reajuste anterior.
  - Workflows: /commit, /log
- [2026-06-14] fix: Limpeza de console.log do GSAP e novos textos dos projetos
  - What: Corrigido o seletor `.wf-topbar` para `.topbar` nas animações de HeroSection, adicionadas validações prévias de nulidade nas referências do GSAP no HeroSection e no MethodologySection; Atualizados os resumos e descrições do PHHub e OdontoSync.
  - Decisions: Garantir um console 100% limpo sem alertas de seletores GSAP não encontrados e refletir com exatidão a natureza e o escopo de cada projeto no portfólio.
  - Workflows: /commit, /log
- [2026-06-14] style: Refinamento profissional dos textos dos projetos
  - What: Reescritas as descrições e detalhes do PHHub e OdontoSync para um tom altamente profissional e técnico, preservando a essência original.
  - Decisions: Apresentar a stack e a finalidade de cada projeto com um vocabulário refinado, ressaltando o valor técnico e prático de cada solução.
  - Workflows: /commit, /log
- [2026-06-14] style: Background 100% opaco para todas as janelas de Metodologia
  - What: Alterada a regra de background de `.methodology__window` em `methodology-base.css` de translúcida (`rgba(12, 12, 12, 0.85)`) para sólido (`#0c0c0c`).
  - Decisions: Eliminar a transparência nos cards da seção de metodologia, garantindo que o conteúdo da página não vaze pelo fundo durante a rolagem de todos os stages.
  - Workflows: /commit, /log
<!-- LOG_END -->

> Para o histórico detalhado de todas as alterações técnicas e decisões de design, consulte o arquivo [LOGS.md](file:///c:/Users/paulo/workspace/projetos/Portfolio%20PH/LOGS.md).

---
*Maintained by Antigravity AI.*
