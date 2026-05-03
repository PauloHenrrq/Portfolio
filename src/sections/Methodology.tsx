import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/methodology.css';
import '../styles/stacks.css';
import mcpIcon from '@/assets/model-context-protocol-icon.svg';
import promptIcon from '@/assets/prompt_17653455.png';

const getIconUrl = (name: string) => `https://raw.githubusercontent.com/devicons/devicon/master/icons/${name}/${name}-original.svg`;

const TECH_CONFIG: Record<string, { icon: string; color: string }> = {
  'React Native': { icon: getIconUrl('react'), color: '#61DAFB' },
  'TypeScript': { icon: getIconUrl('typescript'), color: '#3178C6' },
  'React / Next.js': { icon: getIconUrl('react'), color: '#61DAFB' },
  'Tailwind CSS': { icon: getIconUrl('tailwindcss'), color: '#38BDF8' },
  'Node.js / Express': { icon: getIconUrl('nodejs'), color: '#339933' },
  'Prisma ORM': { icon: getIconUrl('prisma'), color: '#5A67D8' },
  'PostgreSQL': { icon: getIconUrl('postgresql'), color: '#4169E1' },
  'MySQL': { icon: getIconUrl('mysql'), color: '#4479A1' },
  'Python': { icon: getIconUrl('python'), color: '#3776AB' },
  'Docker': { icon: getIconUrl('docker'), color: '#2496ED' },
  'MCPs': { icon: mcpIcon, color: '#FFFFFF' }, 
  'Prompts': { icon: promptIcon, color: '#00F5FF' }, 
  'Automação': { icon: getIconUrl('bash'), color: '#4EAA25' },
  'Agentes IA': { icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png', color: '#3776AB' }
};

const CAROUSEL_DATA = [
  { name: 'React / Next.js', icon: TECH_CONFIG['React / Next.js'].icon },
  { name: 'Node.js / Express', icon: TECH_CONFIG['Node.js / Express'].icon },
  { name: 'PostgreSQL', icon: TECH_CONFIG['PostgreSQL'].icon },
  { name: 'Python', icon: TECH_CONFIG['Python'].icon },
  { name: 'Prompts', icon: TECH_CONFIG['Prompts'].icon },
  { name: 'Docker', icon: TECH_CONFIG['Docker'].icon },
  { name: 'MySQL', icon: TECH_CONFIG['MySQL'].icon },
  { name: 'Agentes IA', icon: TECH_CONFIG['Agentes IA'].icon }
];

gsap.registerPlugin(ScrollTrigger);

const METHOD_STAGES = [
  {
    id: '01',
    tab: 'Discovery',
    title: 'Diagnóstico antes de código',
    description: 'Antes de escrever código, eu entendo o problema a fundo. Defino a estratégia técnica e estruturo a solução para evitar retrabalho e garantir eficiência desde o início.',
    bullet: 'Mapeamento Técnico'
  },
  {
    id: '02',
    tab: 'Architecture',
    title: 'Arquitetura para o futuro',
    description: 'A fundação é o que sustenta o crescimento. Aplico princípios de engenharia para criar sistemas desacoplados que sejam rápidos hoje e fáceis de evoluir amanhã.',
    bullet: 'Engenharia de Software'
  },
  {
    id: '03',
    tab: 'Development',
    title: 'Execução de Alta Performance',
    description: 'Desenvolvimento ágil potencializado por ferramentas de IA, mas guiado por rigor técnico. O resultado é um ciclo de entrega acelerado com código limpo e seguro.',
    bullet: 'Desenvolvimento Agêntico'
  },
  {
    id: '04',
    tab: 'Quality',
    title: 'Refino e Validação Real',
    description: 'Nenhuma funcionalidade é entregue sem passar por um processo rigoroso de QA. Valido performance e segurança para garantir que tudo suporte o mundo real.',
    bullet: 'Garantia de Qualidade'
  },
  {
    id: '05',
    tab: 'Launch',
    title: 'Monitoramento e Sucesso',
    description: 'A entrega é apenas o começo do ciclo. Acompanho a performance em produção e aplico ajustes finos de infraestrutura para garantir eficiência total e contínua.',
    bullet: 'Monitoramento Contínuo'
  }
];

function StageCounter({ id, isActive }: { id: string; isActive: boolean }) {
  // Começamos sempre com "00"
  const [displayId, setDisplayId] = useState(id === "01" ? "01" : "00");
  const directionRef = useRef(1);

  useEffect(() => {
    if (isActive) {
      if (displayId !== id) {
        const timer = setTimeout(() => {
          directionRef.current = 1;
          setDisplayId(id);
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // Exceção: O Stage 01 nunca volta para 00
      if (displayId !== "00" && id !== "01") {
        setDisplayId("00");
      }
    }
  }, [isActive, id, displayId]);

  return (
    <div className="methodology__window-step">
      <span>STAGE</span>
      <div className="stage-number-wrap">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={displayId}
            initial={{ y: directionRef.current > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: directionRef.current > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{ 
              position: 'absolute', 
              left: 0,
              top: 0,
              display: 'block',
              width: '100%'
            }}
          >
            {displayId}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length) return;

      const isMobile = window.innerWidth <= 768;
      const gapY = isMobile ? 25 : 40; 
      const gapX = isMobile ? 15 : 40; 
      
      // 1. Limpeza e Estado Inicial (Tudo centralizado ou fora da tela)
      cards.forEach((card, i) => {
        gsap.set(card, { 
          x: i === 0 ? 0 : -window.innerWidth, 
          y: 0, 
          opacity: i === 0 ? 1 : 0,
          filter: "blur(0px)",
          brightness: 1
        });
      });

      // Ref para rastrear quais abas já recuaram para evitar disparos repetitivos de animação
      const recededState = new Array(cards.length).fill(false);

      ScrollTrigger.create({
        id: "methodology-st",
        trigger: stackRef.current,
        pin: sectionRef.current,
        start: "top 15%",
        end: `+=${cards.length * 1200}px`, // Scroll mais longo para precisão
        scrub: true,
        onUpdate: (self) => {
          const total = cards.length;
          const sectionProgress = self.progress * (total - 1);
          const currentIndex = Math.floor(sectionProgress);
          const nextIndex = currentIndex + 1;
          const localProgress = sectionProgress - currentIndex;

          // 1. ZONA DE DESCANSO: A animação de movimento só ocorre entre 0.15 e 0.85 do estágio
          // Isso evita que a aba comece a recuar imediatamente após chegar
          const startThreshold = 0.15;
          const endThreshold = 0.85;
          let transitionProgress = 0;
          
          if (localProgress > endThreshold) transitionProgress = 1;
          else if (localProgress < startThreshold) transitionProgress = 0;
          else transitionProgress = (localProgress - startThreshold) / (endThreshold - startThreshold);

          // GATILHO DE ATIVAÇÃO BIDIRECIONAL:
          // Descendo: Ativa cedo (0.25) para o flip acontecer durante o movimento
          // Subindo: Ativa no ponto simétrico (0.75) para o flip acontecer na volta
          const isScrollingDown = self.direction > 0;
          const threshold = isScrollingDown ? 0.25 : 0.75; 
          const anticipatedIndex = Math.floor(sectionProgress + threshold);
          
          if (anticipatedIndex !== activeIndex && anticipatedIndex >= 0 && anticipatedIndex < total) {
            setActiveIndex(anticipatedIndex);
          }

          // A. ENTRADA DA PRÓXIMA ABA (Atrelada ao scroll com platô)
          if (nextIndex < total) {
            const nextCard = cards[nextIndex];
            const xPos = gsap.utils.interpolate(-window.innerWidth, 0, transitionProgress);
            gsap.set(nextCard, { 
              x: xPos, 
              opacity: transitionProgress > 0.01 ? 1 : 0,
              filter: "blur(0px)" // Garante que a aba vindo da esquerda seja nítida
            });

            // B. RECUO DA ABA ATUAL (Independente, disparado pelo avanço do transitionProgress)
            // Recua quando a próxima aba entra significativamente (> 25% do seu caminho)
            if (transitionProgress > 0.25 && !recededState[currentIndex]) {
              recededState[currentIndex] = true;
              gsap.to(cards[currentIndex], {
                x: gapX,
                y: -gapY,
                filter: "blur(4px)",
                duration: 0.6,
                ease: "power2.out",
                overwrite: "auto"
              });
            } 
            // Retorna quando a aba da frente recua no scroll (< 10% do caminho de entrada)
            else if (transitionProgress < 0.1 && recededState[currentIndex]) {
              recededState[currentIndex] = false;
              gsap.to(cards[currentIndex], {
                x: 0,
                y: 0,
                filter: "blur(0px)",
                duration: 0.6,
                ease: "power2.out",
                overwrite: "auto"
              });
            }
          }

          // C. LIMPEZA SEGURA (Ignora abas em transição para evitar 'piscagem')
          cards.forEach((card, idx) => {
            if (idx < currentIndex) {
              // Já passou e não é a atual: força estado de fundo
              gsap.set(card, { x: gapX, y: -gapY, filter: "blur(4px)", opacity: 1 });
            } else if (idx > nextIndex) {
              // Ainda não chegou: força estado fora
              gsap.set(card, { x: -window.innerWidth, opacity: 0 });
            }
          });
        }
      });

      // 2. Fade-in for the Carousel
      gsap.fromTo(carouselRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top 30%",
            toggleActions: "play none none none"
          }
        }
      );

    }, sectionRef);

    return () => {
      ScrollTrigger.getById("methodology-st")?.kill();
      ctx.revert();
    }
  }, []);

  const scrollToIndex = (index: number) => {
    const st = ScrollTrigger.getById("methodology-st");
    if (st) {
      const progress = index / (METHOD_STAGES.length - 1);
      const targetScroll = st.start + (st.end - st.start) * progress;
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const handleWindowClick = (index: number) => {
    if (index === activeIndex) return; // Se for a ativa, não faz nada
    scrollToIndex(index);
  };

  return (
    <section className="wf-section methodology" id="methodology" ref={sectionRef}>
      <div className="wf-section__aside">
        <div className="wf-section__aside-label">03 // MÉTODO</div>
      </div>

      <div className="wf-section__inner methodology__inner">
        <div className="methodology__header">
          <div className="wf-section__label" data-reveal="fade-up">◈ COMO EU TRABALHO</div>
          <h2 className="wf-section__title" data-reveal="fade-up" data-delay="100">
            Ideias em sistemas reais, com <span style={{ color: 'var(--accent-main)' }}>estratégia</span> em cada <span style={{ color: 'var(--accent-main)' }}>decisão</span>.
          </h2>
          <p className="methodology__context-phrase" data-reveal="fade-up" data-delay="200">
            Cada projeto segue um fluxo estruturado para garantir performance, clareza e escalabilidade.
          </p>
        </div>

        <div className="methodology__stack-container" ref={stackRef}>
          {METHOD_STAGES.map((stage, idx) => {
            const isEven = idx % 2 === 0;
            const isActive = activeIndex === idx;
            return (
              <div 
                key={stage.id}
                className={`methodology__window ${isEven ? 'layout-left' : 'layout-right'} ${isActive ? 'is-active' : ''}`}
                ref={el => { cardsRef.current[idx] = el; }}
                style={{ 
                  zIndex: idx + 1,
                  pointerEvents: idx <= activeIndex ? 'auto' : 'none' // Impede clique em janelas invisíveis (fantasmas) que ainda não entraram
                }}
                onClick={() => handleWindowClick(idx)}
              >
                {/* OS Window Topbar */}
                <div className="methodology__window-topbar">
                  <div className="methodology__window-controls">
                    <span className="control-btn close"></span>
                    <span className="control-btn min"></span>
                    <span className="control-btn max"></span>
                  </div>
                  <div className="methodology__window-title">
                    ~/methodology/{stage.tab.toLowerCase()}.ts
                  </div>
                </div>

                {/* Content */}
                <div className="methodology__window-content">
                  <div className="methodology__window-text">
                    <StageCounter id={stage.id} isActive={isActive} />
                    <h3 className="methodology__window-heading">{stage.title}</h3>
                    <p className="methodology__window-desc">{stage.description}</p>
                    <div className="methodology__window-tag">
                      <span className="tag-dot"></span> {stage.bullet}
                    </div>
                  </div>
                  
                  {/* Decorative Tech Graphic */}
                  <div className="methodology__window-graphic">
                    <div className="methodology__blueprint-grid"></div>
                    <div className="methodology__graphic-label">{stage.tab.toUpperCase()}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Technologies Carousel */}
        <div 
          className="stacks__carousel-wrap methodology__carousel" 
          ref={carouselRef}
          style={{ marginTop: '40px', opacity: 0 }}
        >
          <div className="stacks__carousel">
            <div className="stacks__carousel-track">
              {[...CAROUSEL_DATA, ...CAROUSEL_DATA, ...CAROUSEL_DATA, ...CAROUSEL_DATA].map((item, idx) => (
                <div key={idx} className="stacks__carousel-item">
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className={`stacks__carousel-img stacks__img--${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

