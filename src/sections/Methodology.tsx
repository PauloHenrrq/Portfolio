import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TECH_CONFIG } from '@/lib/techConfig';
import type { MethodStage } from '@/lib/types';
import '@/styles/methodology.css';
import '@/styles/stacks.css';

// Sub-componentes extraídos
import { StageCounter } from './methodology/StageCounter';
import { Stage01Card } from './methodology/Stage01Card';
import { Stage03Dashboard } from './methodology/Stage03Dashboard';
import { Stage04Report } from './methodology/Stage04Report';
import { Stage05Dashboard } from './methodology/Stage05Dashboard';
import { ArchitectureExplorer } from './methodology/ArchitectureExplorer';

const CAROUSEL_DATA = [
  { name: 'Next.js', icon: TECH_CONFIG['Next.js'].icon },
  { name: 'React Native', icon: TECH_CONFIG['React Native'].icon },
  { name: 'Vite', icon: TECH_CONFIG['Vite'].icon },
  { name: 'Express', icon: TECH_CONFIG['Express'].icon },
  { name: 'Tailwind CSS', icon: TECH_CONFIG['Tailwind CSS'].icon },
  { name: 'Prisma ORM', icon: TECH_CONFIG['Prisma ORM'].icon },
  { name: 'PostgreSQL', icon: TECH_CONFIG['PostgreSQL'].icon },
  { name: 'Python', icon: TECH_CONFIG['Python'].icon },
  { name: 'Docker', icon: TECH_CONFIG['Docker'].icon },
  { name: 'MySQL', icon: TECH_CONFIG['MySQL'].icon }
];

const METHOD_STAGES: MethodStage[] = [
  {
    id: '01',
    tab: 'Descoberta',
    title: 'Planejamento / Entendimento',
    description: 'Entendimento profundo do problema antes da primeira linha de código. É aqui que o sucesso do projeto é definido através de uma estratégia técnica clara.',
    bullet: 'Brainstorming & Escopo'
  },
  {
    id: '02',
    tab: 'Arquitetura',
    title: 'Arquitetura para o futuro',
    description: 'A fundação é o que sustenta o crescimento. Aplico princípios de engenharia para criar sistemas desacoplados que sejam rápidos hoje e fáceis de evoluir amanhã.',
    bullet: 'Engenharia de Software'
  },
  {
    id: '03',
    tab: 'Desenvolvimento',
    title: 'Engenharia Assistida',
    description: 'Utilizo o Antigravity como meu ecossistema de desenvolvimento, aproveitando seus fluxos agênticos para acelerar a construção de software com precisão e alta performance.',
    impact: 'Potencializado por IA. Validado e guiado por mim.',
    signature: 'PH_03_V1.0',
    bullet: 'Fluxos Agênticos'
  },
  {
    id: '04',
    tab: 'Qualidade',
    title: 'Qualidade & Auditoria Técnica',
    description: 'Refino técnico para garantir resiliência, fluidez e segurança absoluta em cada detalhe.',
    bullet: 'Certificação de Qualidade'
  },
  {
    id: '05',
    tab: 'Lançamento',
    title: 'Monitoramento e Sucesso',
    description: 'A entrega é apenas o começo do ciclo. Acompanho a performance em produção e aplico ajustes finos de infraestrutura para garantir eficiência total e contínua.',
    bullet: 'Monitoramento Contínuo'
  }
];

/**
 * Renderiza o conteúdo interno de cada stage card baseado no ID.
 */
function StageContent({ stage, isActive, handleMouseMove, handleMouseLeave }: {
  stage: MethodStage;
  isActive: boolean;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  switch (stage.id) {
    case '01':
      return <Stage01Card stage={stage} isActive={isActive} />;
    case '02':
      return (
        <>
          <div className="methodology__window-text">
            <div className="methodology__window-side-line"></div>
            <div className="methodology__window-decor-grid"></div>
            <StageCounter id={stage.id} isActive={isActive} />
            <h3 className="methodology__window-heading">{stage.title}</h3>
            <p className="methodology__window-desc">{stage.description}</p>
            <div className="methodology__window-tag">
              <span className="tag-dot"></span> {stage.bullet}
            </div>
          </div>
          <div className="methodology__window-graphic">
            <div className="methodology__blueprint-grid"></div>
            <ArchitectureExplorer onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
          </div>
        </>
      );
    case '03':
      return <Stage03Dashboard stage={stage} isActive={isActive} />;
    case '04':
      return <Stage04Report stage={stage} isActive={isActive} />;
    case '05':
      return <Stage05Dashboard stage={stage} isActive={isActive} />;
    default:
      return null;
  }
}

export function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('.architecture-img, .discovery-terminal, .methodology__stage-img') as HTMLElement;
    if (!img || window.matchMedia('(max-width: 480px)').matches) return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const moveX = (x - 0.5) * 30; 
    const moveY = (y - 0.5) * 30;

    gsap.to(img, {
      rotateY: moveX,
      rotateX: -moveY,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('.architecture-img, .discovery-terminal, .methodology__stage-img') as HTMLElement;
    if (img) {
      const isArch = img.classList.contains('architecture-img');
      gsap.to(img, {
        rotateX: isArch ? 15 : 10,
        rotateY: isArch ? -25 : -15,
        duration: 0.8,
        ease: 'power2.out'
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (!cards.length || !carouselRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1000px)", () => {
        const isMobile = window.innerWidth <= 768;
        const isSmallMobile = window.innerWidth <= 480;
        const gapY = isSmallMobile ? 15 : (isMobile ? 25 : 40); 
        const gapX = isSmallMobile ? 8 : (isMobile ? 15 : 40); 
        
        cards.forEach((card, i) => {
          gsap.set(card, { 
            x: i === 0 ? 0 : -window.innerWidth, 
            y: 0, 
            opacity: i === 0 ? 1 : 0,
            filter: "blur(0px)",
            brightness: 1
          });
        });

        const recededState = new Array(cards.length).fill(false);

        ScrollTrigger.create({
          id: "methodology-st",
          trigger: stackRef.current,
          pin: sectionRef.current,
          start: "top 15%",
          end: isMobile ? `+=${cards.length * 400}px` : `+=${cards.length * 700}px`,
          scrub: isMobile ? 0.5 : 0.6,
          onUpdate: (self) => {
            const total = cards.length;
            const sectionProgress = self.progress * (total - 1);
            const currentIndex = Math.floor(sectionProgress);
            const nextIndex = currentIndex + 1;
            const localProgress = sectionProgress - currentIndex;

            const startThreshold = isMobile ? 0.28 : 0.15;
            const endThreshold = isMobile ? 0.90 : 0.90;
            let transitionProgress = 0;
            
            if (localProgress > endThreshold) transitionProgress = 1;
            else if (localProgress < startThreshold) transitionProgress = 0;
            else transitionProgress = (localProgress - startThreshold) / (endThreshold - startThreshold);

            const isScrollingDown = self.direction > 0;
            const threshold = isScrollingDown ? 0.25 : 0.75; 
            const anticipatedIndex = Math.floor(sectionProgress + threshold);
            
            if (anticipatedIndex !== activeIndex && anticipatedIndex >= 0 && anticipatedIndex < total) {
              setActiveIndex(anticipatedIndex);
            }

            if (nextIndex < total) {
              const nextCard = cards[nextIndex];
              const xPos = gsap.utils.interpolate(-window.innerWidth, 0, transitionProgress);
              gsap.set(nextCard, { 
                x: xPos, 
                opacity: transitionProgress > 0.01 ? 1 : 0,
                filter: "blur(0px)"
              });

              if (transitionProgress > 0.25 && !recededState[currentIndex]) {
                recededState[currentIndex] = true;
                gsap.to(cards[currentIndex], {
                  x: gapX,
                  y: -gapY,
                  filter: "blur(2px)",
                  duration: isMobile ? 0.25 : 0.6,
                  ease: "power2.out",
                  overwrite: "auto"
                });
              } 
              else if (transitionProgress < 0.1 && recededState[currentIndex]) {
                recededState[currentIndex] = false;
                gsap.to(cards[currentIndex], {
                  x: 0,
                  y: 0,
                  filter: "blur(0px)",
                  duration: isMobile ? 0.25 : 0.6,
                  ease: "power2.out",
                  overwrite: "auto"
                });
              }
            }

            cards.forEach((card, idx) => {
              if (idx < currentIndex) {
                gsap.set(card, { x: gapX, y: -gapY, filter: "blur(2px)", opacity: 1 });
              } else if (idx > nextIndex) {
                gsap.set(card, { x: -window.innerWidth, opacity: 0 });
              }
            });
          }
        });

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
      });

      // Mobile Flow Default
      mm.add("(max-width: 999px)", () => {
        cards.forEach((card, i) => {
          gsap.set(card, { 
            x: 0, 
            y: 0, 
            opacity: 1,
            filter: "blur(0px)",
            clearProps: "all" 
          });

          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => setActiveIndex(i),
            onEnterBack: () => setActiveIndex(i),
          });
        });

        gsap.set(carouselRef.current, { opacity: 1, y: 0 });
      });

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
    if (index === activeIndex) return;
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
                className={`methodology__window window-stage-${stage.id} ${isEven ? 'layout-left' : 'layout-right'} ${isActive ? 'is-active' : ''}`}
                ref={el => { cardsRef.current[idx] = el; }}
                style={{ 
                  zIndex: idx + 1,
                  pointerEvents: idx <= activeIndex ? 'auto' : 'none'
                }}
                onClick={() => handleWindowClick(idx)}
              >
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

                <div className="methodology__window-content">
                  <StageContent 
                    stage={stage} 
                    isActive={isActive} 
                    handleMouseMove={handleMouseMove} 
                    handleMouseLeave={handleMouseLeave} 
                  />
                </div>
                <div className="methodology__window-version">PH_{stage.id}_v1.0</div>
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
