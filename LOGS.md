# Portfolio PH — Project Logs

This document tracks the evolution, technical decisions, and customization of the Portfolio PH project.

### [2026-05-03] Refinamento do Background e Fluxo de Luz
- **Unificação do Gradiente**: Substituímos as divs de gradiente dispersas por um container unificado (`wf-light-path-container`) que engloba as seções *Methodology* e *Projects*.
- **Fluxo Linear**: Implementamos um gradiente linear contínuo que evolui de **Vermelho Escuro** (0.02 opacity) no início da metodologia até **Vermelho Brilhante** (0.1 opacity) no final da seção de projetos.
- **Corte Profissional**: Definimos um distanciamento de `100px` na base do container para garantir que a linha de luz não vaze para a seção de *Contato*.
- **Estrutura Limpa**: Limpeza de chamadas duplicadas e organização semântica no `App.tsx`.
- **Arquitetura CSS (`hero.css`)**: Desacoplado o estilo `.hero__bg-gradient` de restrições rígidas (`inset: 0`), permitindo posicionamento livre e alturas customizadas via inline styles no `App.tsx`, mantendo a compatibilidade com a seção Hero.
- **Corte de Seção**: Garantida a integridade visual da seção de Contato através de ajustes precisos na altura do último gradiente, criando um corte seco e profissional entre o brilho dos projetos e o escuro do rodapé.

---

*Maintained by Antigravity AI.*

## Initial Foundation & Architecture
- **Tech Stack:** Vite + React 19 + TypeScript 6.
- **Animation Core:** GSAP 3.15 (ScrollTrigger) for cinematic orchestration, Lenis for smooth scrolling.
- **3D Anchor:** Three.js/R3F minimal implementation for the interactive Notebook component.
- **Design System:** Sleek dark mode, glassmorphism, and high-performance micro-animations.

## 1. Hero Section & Branding Evolution
- **The "PH" Entrance:** Developed a custom typewriter sequence where the "PH" branding is established first. The "H" then physically moves down via GSAP `transform` to initiate the simultaneous typing of "PAULO" and "HENRIQUE".
- **Background Typography:** Giant "DEVE LOPER" text implemented with a custom CSS/GSAP shimmer effect. Optimized for RTL (Right-to-Left) direction with invisible loops to avoid jumps.
- **Action Card:** Interactive "VER PROJETOS" card with glassmorphism, responsive hover arrow animation, and full-area clickability.
- **Notebook Animation:** 0.6s entrance animation centered on the screen, transitioning to its final layout position.

## 2. Global Navigation & Layout
- **Sticky Navbar:** Refactored from a local Hero header to a global, floating capsule Navbar.
  - Features: Glassmorphism (`backdrop-filter`), scroll-triggered background transitions, and responsive width (adjusted to not overlap the Sidebar).
- **Interactive Sidebar:** Permanent left-side navigation with section tracking and smooth-scroll integration via GSAP/Lenis.
- **Energy Connector:** Background visual element connecting sections, with logic for context-aware background variants.

## 3. About Section (Sobre) — Professional Positioning
- **Visual Depth:** Giant "ENGINEER" background typography with:
  - Vertical gradient (transparent to semi-visible).
  - GSAP Parallax synchronized with scroll.
  - 3D depth effect via distant text-shadows.
- **Core Pillars Grid:** Replaced generic cards with a "Tech Excellence" grid:
  - [01] Performance, [02] Experience, [03] Structure.
  - Micro-interactions: Radial glow on hover and floating animations.
- **Copywriting:** Refocused narrative on engineering results, scalability, and performance to boost employability.

## 4. Stacks & Projects Section
- **Infinite Carousel:** Developed a high-performance "marquee" style carousel for Stacks.
  - Design: Capsule-style containers, high-contrast borders, and minimal padding for a dense, professional look.
- **Ecosystem Cards:** Dedicated cards for GitHub and other links, featuring a premium "shimmer" effect and theme-consistent color palette (e.g., dead red `#b43232`).
- **Standardized Headers:** Synchronized section titles and labels across the entire portfolio for visual cohesion.

## 5. Performance & Polish
- **Custom Preloader:** Implemented a "PH" logo preloader that seamlessly animates into its final position in the Hero section upon completion.
- **Responsive Audit:** Fixed layout overlaps between Navbar and Sidebar; ensured full functionality across mobile and desktop.
- **Refinement Loops:** Multiple iterations on shimmer speed, typography legibility (avoiding low-opacity for core content), and animation easing (preferring `expo.out`).
- **Stacks Section Redesign:** 
  - Simplified tech cards: Removed experience timelines ("TEMPO") for a more minimalist and focused look.
  - Replaced "LangChain" with "Prompts", utilizing a custom local PNG icon (`prompt_17653455.png`) for a unique visual identity.
  - Implemented a 3D "flip" (viradinha) effect on icon hover using CSS perspective and `rotateY`.
  - Added a dynamic vertical accent bar that appears on hover for each tech item.
  - Refined typography and color contrast for better legibility on dark backgrounds.
- **Contact Finalization:** Updated placeholders with real professional data (Email, LinkedIn, GitHub).
- **MCP Integration:** Implemented a white-themed local SVG logo for the Model Context Protocol (MCP) for maximum theme compatibility.

## Session [2026-05-01] - Responsividade Global e Refinamentos

**Contexto:** O projeto alcançou uma estabilidade visual premium nas seções de Stacks, Hero, About e Contact. O foco desta etapa foi garantir que a fidelidade e a acessibilidade fossem mantidas em dispositivos móveis.

**Ações Realizadas:**
1. **Hero Section (`hero.css`)**: Margens laterais (que antes empurravam o texto em telas pequenas) foram removidas em dispositivos móveis, centralizando o conteúdo. A topografia foi suavizada no background para evitar conflito com os botões principais.
2. **Navegação (`navbar.css` & `sidebar.css`)**: Como a Sidebar desaparece abaixo de `900px`, a Topbar foi aprimorada para assumir a navegação principal, alinhando-se melhor e ganhando fundo opaco/blur no scroll.
3. **Stacks Section (`stacks.css`)**: Os cards de tecnologia ganharam respiro reduzindo os espaçamentos internos e o gap do grid no mobile. O carrossel infinito foi ajustado para evitar espaços mortos em telas reduzidas.
4. **About Section (`about.css`)**: Os cards empilham graciosamente abaixo de `768px` com gaps balanceados, enquanto a fonte decorativa de fundo ("ABOUT") sofreu redução para não poluir o layout em smartphones.
5. **Contact Section (`contact.css`)**: Refinamento da lógica de empilhamento já existente para melhor leitura.

6. **Navegação Mobile Finalizada**: Modificado o componente `Navbar.tsx` com rolagem `smooth` para as seções via âncoras e `window.scrollTo` para a Home. Ajustada a estilização visual no `navbar.css` (displays menores) aumentando legibilidade com texto em branco (`#ffffff`) e corrigindo o overlay do modal para evitar escurecimento excessivo, melhorando a experiência UX no celular.

**Status Atual:** As camadas base, Hero, About, Stacks e Contact estão com visual final e totalmente responsivas, incluindo menu hambúrguer interativo otimizado.
**Próximo Passo:** Aguardando os assets finais (fotos e descritivos) para a integração completa da seção "Projetos".

---

*Maintained by Antigravity AI.*

## Session [2026-05-02] - Navegação Estruturada e Modais Premium

**Contexto:** Finalização da arquitetura de navegação híbrida (Header/Sidebar) e restauração do layout de grade para projetos em telas grandes, garantindo que a experiência desktop não fosse prejudicada pelas otimizações mobile.

**Ações Realizadas:**
1. **Arquitetura de Navegação Híbrida**:
   - **Desktop**: O Header agora atua como uma "barra de utilitários", exibindo apenas links externos (`GitHub` e `Currículo`), mantendo a navegação principal focada na Sidebar.
   - **Mobile**: Implementação de um menu overlay em tela cheia com todos os links de navegação, acessível via menu hambúrguer.
2. **Refinamento da Seção de Projetos**:
   - **Contêiner Industrial**: Adicionada borda, fundo com blur e cabeçalho de status ("SISTEMA DE PROJETOS // ATIVO") ao viewport do scroller no PC.
   - **Alinhamento**: Projetos agora começam da esquerda com padding de `48px`, abandonando a centralização forçada.
   - **Modais Premium**: Restaurado o layout `grid` (coluna dupla) para PC e `flex-column` para mobile, corrigindo falhas de visualização e erros de parsing JSX.
3. **Correções Técnicas**:
   - Implementação de `ResizeObserver` (via useEffect) para recalcular restrições de arraste do scroller.
   - Ajuste de `z-index` no overlay do menu mobile para garantir interatividade total.
   - Reversão dos termos técnicos para "DEVELOPER" e "ENGINEER" conforme solicitado.

**Status Atual:** Navegação e Projetos totalmente estabilizados. O portfólio agora possui uma distinção clara e funcional entre a experiência de "monitor" (industrial/detalhada) e "mobile" (focada em conteúdo).

---

*Maintained by Antigravity AI.*

## Session [2026-05-03] - Refinamento de Identidade e Metodologia Estratégica

**Contexto:** Transição da apresentação puramente técnica para uma abordagem de engenharia estratégica, humanizando a narrativa e elevando a percepção de autoridade.

**Ações Realizadas:**
1. **Refinamento "Quem Sou Eu"**:
   - Copywriting humanizado e assertivo: Foco em princípios (Performance, UX Real, Sistemas Evolutivos).
   - UI Premium: Implementação de ritmo visual (card central mais largo) e fundo em grid sutil.
   - Micro-interações: Adição de `spotlight glow` dinâmico (follow-mouse) e transições `cubic-bezier`.
2. **Nova Seção "Método"**:
   - Substituição da antiga seção de "Stacks" pela seção **"Como Eu Trabalho"**.
   - Foco em Processos: Arquitetura, Performance Preditiva, UX Estrutural e Mentoria.
   - Integração do ecossistema de ferramentas via carrossel dinâmico como elemento de suporte.
3. **Evolução Técnica**:
   - Refatoração do hook `useCardSpotlight` para suporte genérico via classe `.spotlight-card`.
   - Atualização da navegação global (Sidebar, Navbar e Progress) para o novo mapeamento de seções.
   - Padronização de variáveis CSS (`--mouse-x`, `--mouse-y`) para efeitos de luz interativos.

**Status Atual:** O portfólio agora comunica uma postura de Tech Lead/Senior Engineer. A experiência de navegação está fluida e visualmente rica, com um equilíbrio entre técnica e processo.
**Próximo Passo:** Revisão final de copy em dispositivos móveis e verificação de assets de projetos.
### [2026-05-03] Refinamento de Interatividade (About)
- **Sombra Fluida**: Aumentada transição de box-shadow para 2s para efeito 'slow-rise'.
- **Grid de Fundo**: Máscara radial ajustada (0% a 75%) para garantir bordas suaves em 360 graus, corrigindo cortes bruscos no topo e esquerda.
- **Hierarquia Visual**: Reforço da transição ultra-suave nos cards de pilares.

### [2026-05-03] Ajuste de Sombras e Reequilíbrio Visual (About)
- **Cards**: Revertida transição de sombra para 1.2s e reduzida opacidade (0.8 -> 0.5) para evitar 'consumo' visual.
- **Grid**: Transferido efeito de transição lenta (2s) para o container do grid, adicionando um brilho sutil (glow) no hover.
- **Máscara**: Mantido o refinamento de bordas suaves (loose lines) no topo/esquerda.

### [2026-05-03] Refinamento do Grid Industrial (About)
- **Grid**: Aplicada máscara radial elíptica para criar formato ( ) que consome as bordas.
- **Linhas Soltas**: Aumentado padding/margin para 60px e ajustada máscara para garantir que as linhas não toquem bordas rígidas.
- **Preservação**: Cards (.about__pillar-card) mantidos sem alterações.

### [2026-05-03] Organização de Textos (About)
- **Layout**: Implementado Flexbox vertical nos cards para controle de posicionamento.
- **Alinhamento**: Definida min-height nos títulos para garantir que todas as descrições iniciem na mesma linha horizontal.
- **Preservação**: Design base, cores e efeitos visuais mantidos integralmente sem alterações.

### [2026-05-03] Refatoração do Como Eu Trabalho (Pipeline HUD)
- **Estrutura de Componentes**: Alterada a ordem no App.tsx e Sidebar.tsx (Método agora precede Projetos).
- **Design de Metodologia**: Abandonados os cards convencionais em favor do design "Mesa de Trabalho (Blueprint) + Linha de Circuito (Pipeline)".
- **Animações (GSAP)**: Linha de fluxo vermelha ativada e dimensionada via GSAP ScrollTrigger para preencher conforme a rolagem da página.
- **Micro-interações**: Elementos com opacity e deslocamento revelados dinamicamente na descida do scroll. Efeito visual clean com fontes monoespaçadas, mantendo o nível técnico e elegante.

### [2026-05-03] Refatoração do Como Eu Trabalho (Dashboard Interativo)
- **Design de Metodologia**: Abandonado o design de Pipeline em favor de um Layout de Dashboard/Painel de Controle, resolvendo o problema de espaço vertical.
- **Interatividade**: Criado um sistema de abas utilizando estado React (ctiveStage) para navegar pelos 5 passos da metodologia na mesma viewport.
- **Transições**: Adicionadas animações GSAP de fade e blur para a troca fluida de conteúdo no painel principal, sem causar saltos na tela.
