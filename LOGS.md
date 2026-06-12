# Portfolio PH — Project Logs

This document tracks the evolution, technical decisions, and customization of the Portfolio PH project.

### [2026-06-11] Redesenho da Seção de Projetos (Modelo de Arraste Livre) e Alinhamento do Header

- **Redesenho do Carrossel de Projetos (Desktop & Mobile)**:
  - Removido o pinning vertical e a rolagem horizontal vinculada do GSAP ScrollTrigger, adequando a seção de Projetos ao modelo clássico de fluxo e alinhamento natural.
  - O primeiro projeto (`PHHub`) agora aparece perfeitamente alinhado na extrema esquerda ao carregar a página.
  - Implementado sistema de arraste livre (mouse/touch drag-to-scroll) acionável ao segurar em **qualquer parte** dentro do componente de Projetos (incluindo títulos, textos ou o próprio grid), transladando horizontalmente o conteúdo de forma responsiva.
  - Adicionado suporte a gestos de rolagem horizontal nativos de trackpad/mouse-wheel (wheel deltaX), amortecimento suave com comportamento de rebote elástico nas extremidades, cancelamento de cliques acidentais nos cartões durante movimentos de arraste, e aplicação global de cursor `grabbing` no `document.body` durante o arraste para evitar oscilações.
- **Redução de Tamanho de Pastas no Stage 02**:
  - Reduzido o tamanho da imagem de estrutura de pastas (`.architecture-img`) para `55%` de largura com limite máximo de `220px` sob o breakpoint responsivo (`max-width: 999px`), evitando que a visualização de estrutura de pastas ocupe espaço exagerado no mobile.
- **Correção de Largura de Header e Breakpoints**:
  - Adicionada regra de estilo para `.topbar` com `width: 100%` e `left: 0` a partir de `1600px` em `navbar.css` para cobrir o espaço vazio deixado quando o menu lateral entra em modo colapsado/gaveta flutuante.
  - Unificados os breakpoints de navegação no `Navbar.tsx` para coincidir com as regras responsivas globais de `999px`.

### [2026-06-10] Otimização de Resolução e Proteção de Layout no Stage 03

- **Colapso da Sidebar (1600px)**: Aumentado o breakpoint de recolhimento da sidebar (`.wf-sidebar`) de `1300px` para `1600px`. O menu lateral agora se oculta automaticamente e funciona como um drawer flutuante (ativado por hover) em todas as telas com largura de até 1600px, otimizando o espaço útil das seções de conteúdo do portfólio.
- **Resolução ~1200px (Stage 03)**: Ajustadas as colunas do `.stage-03-split-layout` no breakpoint de `1280px` a `901px` para usar a proporção `1fr 1.15fr`, garantindo que a coluna direita tenha largura suficiente para renderizar a janela de revisão técnica.
- **Prevenção de Truncamento**: Elevada a propriedade `max-width` do `.stage-03-review-terminal` de `440px` para `500px` nesta faixa de resolução, eliminando o corte horizontal da palavra "Entrega" no fluxo interno de execução.
- **Formalização do Layout de Métricas**: Substituída a definição base do `.metrics-grid` de `grid` para `flex` horizontal (`display: flex; flex-direction: row;`), tornando o layout nativamente robusto contra colisões e compatível com o design planejado em todas as resoluções de desktop.

### [2026-06-09] Ajuste de Responsividade e Efeito 3D no Stage 02

- **Efeito 3D no Mobile (Stage 02)**: Removido o reset de transformações 3D no dispositivo móvel para o `.architecture-img` (estrutura de pastas), permitindo que ele mantenha a mesma rotação e perspectiva isométrica (`rotateX(10deg) rotateY(-20deg)`) da versão desktop ("ficando meio de lado").
- **Remoção de Linha Divisória**: Adicionada regra de ocultação do pseudo-elemento `::after` do `.methodology__window-content` sob o breakpoint mobile (`max-width: 999px`). Isso remove a linha branca vertical que aparecia de forma incorreta no centro da tela ao empilhar o layout em colunas únicas nos dispositivos móveis.
- **Fluxo Contínuo no Stage 03**: Alterado o fluxo de execução interna no Stage 03 para rodar incondicionalmente de forma cíclica e infinita, removendo a dependência do estado `isActive` para que a animação continue ativa independente da posição do scroll do usuário.

### [2026-05-10] Atualização de Métricas (Stage 05)

- **Métricas de Performance**: Atualizados os KPIs do Stage 05 para refletir dados mais precisos e realistas:
  - Performance: **94/100** (anteriormente 95).
  - Latência: **38ms** (anteriormente 42ms).
  - Estabilidade: **99.5%** (anteriormente 99.8%).
- **Sincronização de Animação**: Ajustados os keyframes de `counter-perf`, `counter-lat` e `counter-stab-dec` no `methodology.css` para garantir que a animação de contagem termine exatamente nos novos valores.

### [2026-05-08] Refinamento Cinematográfico e Efeito de Profundidade (Stage 04)

- **Refinamento Stage 04 (QA Dossier)**: Transformação completa do estágio de qualidade em um dossiê técnico cinematográfico com materialidade de papel, iluminação física e selo de validação.
- **Efeito de Profundidade (Dossiê Stacked)**: Adicionadas múltiplas folhas de fundo com deslocamentos horizontais progressivos (`calc(-50% + 15px)` e `calc(-50% + 30px)`) e rotações variadas. Isso cria um efeito 3D de "leque" de documentos, reforçando a ideia de um dossiê técnico com múltiplos relatórios de auditoria.
- **Micro-animações**: Sincronização da entrada da folha de fundo com o relatório principal usando Framer Motion para um efeito de "foco" suave.

### [2026-05-04] Refatoração Modular e Isolamento de Estágios (Methodology)

- **Isolamento de Layouts**: Refatorada a estrutura de renderização para garantir que cada estágio (Discovery, Architecture, Development, etc.) possua sua própria lógica de UI isolada, evitando que alterações em uma janela afetam as demais.
- [x] Finalização do STAGE 05 (Monitoramento e Sucesso) com a simetria A-B-C-B-A.
- [x] Implementação de 4 propostas de design para a coluna direita do STAGE 05:
  1. **Pulse Dashboard**: Telemetria ao vivo.
  2. **Deployment Terminal**: Simulação de pipeline CLI.
  3. **KPI Cards**: Visão executiva com glassmorphism.
  4. **Success Seal**: Selo holográfico de certificação e validação.
- [x] Ajuste de background do STAGE 05 para espelhar a degradação de pixels do STAGE 01.
- **Stage 03 (Development) - Redesign Industrial/Cyber**:
  - Implementada uma estética exclusiva de "Laboratório de Desenvolvimento" para diferenciar o Stage 03 dos demais.
  - **Background Técnico**: Adicionado um grid de circuitos vermelhos (`red circuit grid`) e um identificador gigante "03" sutil no fundo da janela.
  - **Glow & Neon**: O bloco de pipeline agora possui bordas brilhantes em vermelho (`#b43232`), reforçando o acento principal do portfólio.
  - **Brain Control**: Aplicado efeito de glass-morphism with borda lateral em destaque e textura técnica.
  - **Terminal**: Ajustado o tema de cores para tons industriais com status de aprovação neon.
- **Responsividade & Integridade**:
  - Implementados ajustes de escala e grid adaptativo para garantir que o conteúdo técnico não seja cortado em resoluções entre 900px e 1100px.
  - Scroll vertical ativado automaticamente para o layout de dashboard em dispositivos móveis, mantendo a legibilidade total.

### [2026-05-04] Refinamento de Layout (Stage 01 Methodology)

- **Reposicionamento Estratégico**: A tag `Brainstorming & Escopo` foi movida para dentro da coluna de texto esquerda, logo abaixo da descrição, criando um fluxo de leitura mais natural e coeso.
- **Equilíbrio de Viewport**:
  - Ajustada a proporção do layout split para `1.2:1`, dando mais destaque ao conteúdo textual sem comprometer o bloco técnico.
  - Reduzido o `margin-bottom` da descrição para `24px` para aproximar o elemento de ação (tag) ao contexto.
  - Implementada centralização vertical total (`justify-content: center`) no container principal de texto do Stage 01.
- **Otimização de Respiro**: Reduzido o padding horizontal de `15%` para `8%` no desktop, permitindo que os elementos "respirem" melhor em resoluções menores antes do breakpoint mobile.

### [2026-05-03] Finalização da Metodologia e Responsividade Mobile

- **Centralização Responsiva**: Implementada centralização total do conteúdo dos cards (`StageCounter`, `Heading`, `Description`, `Tag`) para telas abaixo de `900px`.
- **Refinamento StageCounter**: Corrigida a transição inicial de '00' para '01' no primeiro estágio, garantindo que o contador exiba '01' imediatamente ao entrar na viewport.
- **Responsividade Profunda (<480px)**:
  - Removidos elementos decorativos laterais (`side-line`) e grades de fundo (`decor-grid`) em smartphones pequenos para reduzir poluição visual.
  - Escalonamento agressivo de fontes para manter a hierarquia sem quebrar o layout.
  - Desativação de efeitos de inclinação 3D no mouse para preservar a estabilidade em telas touch.
- **Otimização de Performance (Mobile Balanced)**:
  - Reequilibrada a distância de scroll por estágio para `500px` (ajuste fino após feedback).
  - Suavizados thresholds de `ScrollTrigger` para `0.45/0.55`.
  - Equilíbrio ideal entre rapidez de navegação e percepção das transições fluidas.
- **Consolidação Dashboard**: A seção de Metodologia agora atua como o núcleo estratégico do portfólio, integrando o carrossel de tecnologias como base de suporte técnico.

### [2026-05-03] Refinamento do Background e Fluxo de Luz

- **Unificação do Gradiente**: Substituímos as divs de gradiente dispersas por um container unificado (`wf-light-path-container`) que engloba as seções _Methodology_ e _Projects_.
- **Fluxo Linear**: Implementamos um gradiente linear contínuo que evolui de **Vermelho Escuro** (0.02 opacity) no início da metodologia até **Vermelho Brilhante** (0.1 opacity) no final da seção de projetos.
- **Corte Profissional**: Definimos um distanciamento de `100px` na base do container para garantir que a linha de luz não vaze para a seção de _Contato_.
- **Estrutura Limpa**: Limpeza de chamadas duplicadas e organização semântica no `App.tsx`.
- **Arquitetura CSS (`hero.css`)**: Desacoplado o estilo `.hero__bg-gradient` de restrições rígidas (`inset: 0`), permitindo posicionamento livre e alturas customizadas via inline styles no `App.tsx`, mantendo a compatibilidade com a seção Hero.
- **Design Conceitual (STAGE 01)**: Removida a área gráfica para dar lugar a um bloco de texto técnico (`discovery.md`). Implementada estética de arquivo markdown com status de validação, focando no pensamento estratégico e planejamento.
- **Customização por Estágio**: Implementada lógica de classes dinâmicas (`window-stage-XX`).
- **Refinamento de UI (Topbar)**: Padronizado padding de `4px 2px` e layout mobile invertido.

---

### [2026-05-05] - Padronização e Refino de Responsividade (Methodology)

- **Ajustes de Layout**: Implementada responsividade completa no Stage 03, com suporte a mobile (coluna única) e scroll horizontal no pipeline.
- **Padronização de Assinatura**: Alinhamento posicional absoluto da versão `PH_XX_V1.0` em todos os estágios (01-05).
- **Estética Tech**: O identificador de versãio agora utiliza um tom de vermelho vinho (#722F37) com opacidade de 0.5, criando um visual de "marca d'água" sofisticado.
- **Correções**: Adição de estilos de terminal faltantes (`.stage-03-review-terminal`) e cleanup de CSS redundante.
- **Status**: Stages 01, 02 e 03 finalizados, responsivos e visualmente consistentes.

---

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

### [2026-05-09] Stage 04: Premium Technical Dossier & QA Report

- **Estética Cinematográfica**: Transformação do Stage 04 em um relatório técnico físico de alta fidelidade (estilo editorial).
- **Materialidade & Iluminação**:
  - Implementação de iluminação direcional via CSS gradients, simulando luz física sobre o "papel" técnico.
  - Adição de textura de grão (Material Grain) e bordas com variação de luz (Top-light/Bottom-shadow).
  - Atmosfera técnica profunda com `backdrop-filter` ultra-difuso e animações de respiração de luz.
- **Selo de Validação Realista**:
  - Novo selo de validação "físico" com máscara de imperfeição (`mask-image`), tipografia mono-espaçada e micro-interação 3D de inclinação.
- **Micro-Interações & UX**:
  - Checklist de auditoria com revelação sequencial e animações de entrada suaves.
  - Refinamento de textos para uma linguagem profissional, técnica e direta em português.
- **Responsividade**: Garantida a integridade visual do dossiê em dispositivos mobile, mantendo a sensação premium através de ajustes de escala e padding.

### [2026-05-09] Stage 04: Refinamento de Interatividade e Detalhes Técnicos

- **Selo de Validação "Impacto"**: Refatorado o selo de validação para uma estética de tinta vermelha vibrante (`#b43232`). Adicionada animação de impacto físico (stamping) com Framer Motion, simulando o peso do carimbo no papel.
- **Tooltips Técnicos**: Implementados tooltips flutuantes nos itens do checklist de auditoria. Ao passar o mouse, descrições técnicas detalhadas são reveladas, reforçando o caráter de "Dossiê Técnico" do estágio.
- **Materialidade de Tinta**: Aplicada nova máscara de ruído (`mask-image`) ao selo para simular a imperfeição da tinta seca sobre o papel.

### [2026-05-09] Stage 05: Refinamento de Telemetria e Simetria Final

- **Gráfico de Pulso Customizado**: Refinamento da lógica do SVG de telemetria para alinhar com a análise técnica real.
  - **Baseline**: Fixada em 85% para um visual "low-profile".
  - **Picos Iniciais (0-30%)**: Implementados picos agudos ascendentes simulando o "noise" inicial de processamento.
  - **Estabilização**: Linha reta após o processamento inicial.
  - **Pico de Validação (80%)**: Adicionado um pico descendente único e expressivo aos 80% do percurso, servindo como assinatura visual de conclusão de ciclo.
- **Animação "Snake" Fluida**: Refatoração da animação para um efeito de "escaneamento" orgânico.
  - **Formação Dinâmica**: A linha agora se "forma" (cresce) no início do ciclo e sua cauda começa a sumir com um delay estratégico, criando um movimento fluido de pulso contínuo.
  - **Camada de Glow (Ghost Path)**: Adicionada uma segunda via de pulso com blur e baixa opacidade para criar um rastro luminoso (bloom effect), eliminando o aspecto artificial de linhas sólidas.
  - **Timing Suavizado**: Uso de `cubic-bezier` para aceleração e desaceleração natural do sinal.
- **Loop Infinito Sem Emendas**: Correção da animação de telemetria para um ciclo contínuo (ECG style).
  - **PathLength Normalizado**: Utilização de `pathLength="100"` para garantir que o cálculo de `dasharray` (40/60) seja independente da largura do SVG.
  - **Overlapping Loop**: Configuração onde o novo sinal começa a se formar no início do gráfico exatamente no momento em que o sinal anterior está finalizando sua trajetória, eliminando pausas e "piscadas".
- **Fidelidade CRT/Monitor**:
  - **Física de Ondas**: Transição de linhas retas para curvas de Bezier (Quadratic Bezier), simulando picos P, QRS e T reais de um eletrocardiograma.
  - **Efeito 'Glow Head'**: Implementação de um `linearGradient` dinâmico que faz com que a ponta do sinal seja mais brilhante (branco/vermelho intenso) e a cauda se apague suavemente, imitando o feixe de elétrons de um monitor CRT.
  - **Grid Realista**: Ajuste das cores da grade para tons avermelhados sutis, aumentando a imersão.
- **Correção de Estilo**: Remoção de estilos inline e centralização da lógica de espessura no CSS.
- **Simetria A-B-C-B-A**: Consolidação visual do Stage 05 como o espelho do Stage 01, fechando a narrativa da metodologia.

---

_Maintained by Antigravity AI._

### 11/05/2026 - Auditoria de Responsividade Desktop (>768px)

- **Workflow:** `/review` + `/refactor` (Desktop Polish)
- **Ações:**
  - Padronização de padding global `.wf-section` usando `--section-padding-x/y`.
  - Refatoração do `hero.css`: Margens escalonadas (staggered) agora usam `clamp()` para fluidez em ultra-wide.
  - Sincronização do `about.css` e `projects.css` (scroller) com o grid lateral dinâmico.
  - Ajuste de escala do `methodology.css`: Altura do stack container expandida para `clamp(600px, 75vh, 850px)` para impacto visual.
- **Resultado:** Alinhamento lateral perfeito entre seções e eliminação de paddings hardcoded. Layout pronto para telas 4K+.
- **Próximo Passo:** Refinamento mobile (<768px).

---

### [2026-05-22] Ajuste do Breakpoint de Navegação e Responsividade

- **Ajuste de Breakpoint:** Elevado o breakpoint responsivo de **1200px** para **1300px** de forma global nos arquivos CSS principais (`sidebar.css`, `hero.css`, `about.css`).
- **Sidebar drawer e Hover Trigger:** A funcionalidade de ocultação automática do menu lateral (Navbar fixa) com o aparecimento do acionador lateral (`wf-sidebar-trigger`) em hover agora entra em vigor a partir de **1300px** de largura da tela.
- **Sincronização Visual:**
  - Ajustadas as posições absolutas da tipografia e imagens do Hero (`hero.css`) para sincronizarem perfeitamente no novo limite de 1300px, deslocando a foto da direita e o texto "DEVE/LOPER" em **25px para a esquerda** (`right: calc(5% + 25px)`) para garantir melhor legibilidade e evitar sobreposições.
  - Sincronizado o grid de cards da seção de sobre (`about.css`) para se adaptar a 3 colunas fluídas a partir do novo breakpoint.
- **Refinamento do Menu Lateral (Sidebar Nav Items):**
  - Removido o fundo cinza (`background: rgba(255, 255, 255, 0.03)`) ao passar o mouse.
  - Implementada uma regra de exclusão `:not(.wf-sidebar__nav-item--active)` que garante que os itens ativos/selecionados não tenham qualquer interação de hover.
  - Ajustado o hover dos itens inativos (apagados) para brilharem mais intensamente (elevação da opacidade de `0.15` para `0.85`), aplicando um efeito suave de brilho (`text-shadow`) e glow no marcador visual correspondente (`.wf-sidebar__nav-dot`).
  - Corrigido conflito duplicado de classe no arquivo `layout.css`, garantindo que o comportamento exclusivo de hover sem interações nos itens ativos também seja respeitado de forma global.
- **Scroll Inteligente de Elementos Pinficados (GSAP Pin-Spacers):**
  - Refatorados os métodos de clique (`handleNavClick`) em `Sidebar.tsx` e `Navbar.tsx` para detectar automaticamente se a seção de destino possui uma embalagem de espaçamento (`.pin-spacer`) gerada dinamicamente pelo GSAP ScrollTrigger.
  - Ao clicar no botão **Método**, o sistema agora calcula a posição unpinned exata do topo do elemento pai (o `.pin-spacer`), rolando a página de forma fluida de volta ao início unpinned da seção. Isso força o GSAP a executar o _scrubbing_ reverso passando de forma sequencial pelas janelas e parando exatamente no topo com a visualização do título principal **"Como eu trabalho"**.
- **Refinamento Visual da Seção de Metodologia:**
  - Removida a linha vermelha decorativa da extrema esquerda (`.methodology__window-side-line`) especificamente dos componentes **STAGE 01** e **STAGE 03**, otimizando a harmonia e o aproveitamento do layout de largura total (full-width) dessas janelas conceituais.

---

### [2026-06-10] Refinamentos Premium de UX, Responsividade e SEO

- **Unificação de Breakpoints Responsivos**:
  - Alinhados e unificados todos os breakpoints de celular/tablet em `@media (max-width: 999px)` no `global.css`, `layout.css` e `projects.css`.
- **Navegação de Sidebar por Clique com Overlay**:
  - Removido gatilho indesejado de hover para telas médias até `1600px`.
  - Implementado sistema de clique via estado React (`isOpen`) no acionador com movimento síncrono e rotação da seta.
  - Adicionado overlay de blur (`.wf-sidebar-overlay`) sob a sidebar para fechar o menu ao clicar fora.
- **Scroll Horizontal de Projetos via GSAP ScrollTrigger**:
  - Desenvolvido pinning horizontal com efeito scrub suave para computadores (telas >= `1000px`).
  - Habilitada rolagem nativa por swipe com suporte a `scroll-snap-align: center` para celulares/tablets (telas < `1000px`).
  - Integrada a barra de progresso aos eventos ScrollTrigger e scroll nativo.
- **Conteúdo Real de Projetos com Mockups IA**:
  - Preenchidos os campos de detalhes, tecnologias e métricas de impacto reais na constante `PROJECTS`.
  - Gerados 3 mockups de projetos e 1 banner de compartilhamento social usando IA, salvos diretamente na árvore de arquivos do projeto.
- **Melhorias de SEO**:
  - Adicionadas tags de Open Graph e Twitter Cards no cabeçalho do `index.html`.
  - Vinculado o banner do site (`public/og-image.png`) como imagem padrão de compartilhamento.
- **Verificação de Build**:
  - Validada a compilação do TypeScript e empacotamento do Vite via `npm run build` com sucesso absoluto (Exit Code 0).

---

### [2026-06-11] Alinhamento de Breakpoints Responsivos da Metodologia

- **Unificação de Breakpoints nos Stages**:
  - Padronizado o breakpoint de colapso de layout de **900px** para **999px** nos arquivos `methodology-stage01.css`, `methodology-stage03.css` e `methodology-stage04.css` para coincidir perfeitamente com a transição de layout global da seção.
  - Ajustada a faixa de transição do layout desktop intermediário no Stage 03 para cobrir de `1000px` a `1280px` (anteriormente `901px` a `1280px`), evitando quebra de layouts split-grid no intervalo de transição.
- **Resolução de Overflow no Stage 04**:
  - Eliminado o corte horizontal (truncamento) do texto à esquerda ("Auditoria Técnica") e do cartão de relatório à direita sob a resolução de 950px, forçando o colapso limpo para coluna única (empilhado).
- **Verificação Visual e Navegador**:
  - Auditados visualmente todos os estágios via subagent de navegador sob a resolução de 950px, com validação de fluidez e adaptabilidade.

---

### [2026-06-11] Refinamentos de Design Premium de Projetos, Modais e Inércia

- **Melhorias de Visual e Cores Temáticas de Projetos**:
  - Alterada a cor predominante do projeto **PHHub** para roxo neon (`#BD00FF`) com brilho temático correspondente, sincronizando a interface com as imagens.
  - Aplicada borda temática sutil nos cards de projetos antes do clique (`color-mix(in srgb, var(--project-color) 18%, rgba(255, 255, 255, 0.05))`) acompanhada por sombra dispersa e neon fraco.
  - Modificada a borda padrão das caixinhas de tecnologias (badges) para herdar a cor do projeto com efeito dinâmico no hover.
  - Ajustada a opacidade global de todos os textos dos projetos (títulos, descrições e badges do card e do modal) para um branco com **85% de força** (`rgba(255, 255, 255, 0.85)`).
- **Ajustes de UX e Navegação Horizontal**:
  - Implementada física de inércia (momentum) com animação de mola (`spring` do Framer Motion) no scroll horizontal do mouse/drag para computadores.
  - Reposicionado o texto indicativo `"ARRASTE PARA EXPLORAR"` de volta para dentro do componente de carrossel de projetos, posicionado de forma fixa e absoluta na base da viewport, preservando um espaçamento elegante de `90px` abaixo dos cards. No mobile, a classe foi configurada como `position: sticky` para permanecer fixada horizontalmente no centro da tela sem deslizar junto com os cards durante o swipe lateral.
- **Responsividade e Modais Mobile**:
  - Criados modais de projetos adaptados para dispositivos móveis com limite de altura a `85vh` e rolagem vertical restrita à caixa de informações textual (`.wf-modal-info`).
  - Posicionado o botão de fechar (X) como um círculo flutuante translúcido com desfoque de fundo (`backdrop-filter`) travado no topo direito do modal.
  - Corrigido o alinhamento da imagem de capa nos modais mobile, forçando `object-position: center center` para remover a barra preta lateral.
  - Reduzido o tamanho dos textos e cartões da metodologia (Stage 04) sob telas de `999px` em exatamente `8px`.
  - Configurada a exibição do menu sanduíche (trigger sidebar) apenas para telas menores que `500px`.
  - Corrigida a ordem dos links no menu suspenso mobile (overlay da Navbar), garantindo que o link **MÉTODO** se posicione antes de **PROJETOS** para manter a consistência absoluta com a rolagem vertical da página e a Sidebar desktop.
- **Simplificação do Portfólio**:
  - Removidos os projetos **Ortus AI** (ainda em planejamento) e **Antigravity** (não alinhado à proposta atual) da constante de projetos em `Projects.tsx`, exibindo agora exclusivamente os cases reais finalizados: **PHHub** e **OdontoSync**.
- **Mockup e Galeria Interativa do OdontoSync**:
  - Organizados, renomeados e movidos os assets de imagens reais do OdontoSync para `src/assets/projects/OdontoSync/`.
  - Gerada uma imagem de exibição global cinematográfica em 3D (mockup com celulares flutuantes sob glow neon) para o card frontal do projeto.
  - Construído um sistema de galeria interativa de screenshots dentro do modal do OdontoSync, incluindo abas de navegação para alternar entre os fluxos (🏥 Painel da Clínica e 📱 App do Paciente) e navegação individual de telas via miniaturas (thumbnails).
- **Ajustes Finais na Galeria do OdontoSync**:
  - Removidas as barras de rolagem (scrollbars) nativas no desktop para a navegação de miniaturas e visualizadores através de propriedades específicas CSS (`scrollbar-width: none`, `-ms-overflow-style: none` e pseudoelemento `::-webkit-scrollbar`).
  - Corrigido o layout quebrado do modal no mobile: aumentado o espaço da área da galeria (`.wf-modal-video` ampliado para `340px` no mobile geral e `300px` em telas pequenas), permitindo a perfeita visualização dos celulares em tamanho confortável.
  - Resolvida a colisão com o botão de fechar (X) no mobile adicionando um espaçamento seguro (`padding-right: 44px`) na barra de abas e implementando textos responsivos inteligentes (exibindo "🏥 Painel da Clínica" no desktop e reduzindo para "🏥 Clínica" no mobile).

