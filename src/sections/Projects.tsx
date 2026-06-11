import React, { useState, useRef, useEffect } from 'react';
import { motion, animate, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/projects.css';
import phhubCard from '@/assets/projects/PHHub/view-image.jpg';
import phhubModal from '@/assets/projects/PHHub/spoiler-image.jpeg';
import odontoSyncCard from '@/assets/projects/OdontoSync/view-image.png';
import ortusAiCard from '@/assets/projects/OrtusAI/view-image.png';
import antigravityCard from '@/assets/projects/Antigravity/view-image.png';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: '01',
    title: 'PHHub',
    description: 'Um ecossistema unificado focado em alta performance e design premium. Substitui a fragmentação por eficiência centralizada e integração fluida.',
    details: 'Desenvolvido para centralizar ferramentas internas de desenvolvimento com foco em latência ultrabaixa e micro-frontends. Conta com um design system proprietário baseado em glassmorphism e animações fluidas via Framer Motion, integrando painéis de monitoramento de integridade e dados de telemetria em tempo real.',
    techs: ['Next.js', 'TypeScript', 'Vanilla CSS', 'Zustand'],
    link: 'https://github.com/PauloHenrrq/Portfolio',
    github: 'https://github.com/PauloHenrrq/Portfolio',
    cardImage: phhubCard,
    modalImage: phhubModal,
    themeColor: '#BD00FF',
    themeGlow: 'rgba(189, 0, 255, 0.15)'
  },
  {
    id: '02',
    title: 'OdontoSync',
    description: 'Sistema de gestão odontológica que unificou prontuários e agendamentos sob um dashboard em tempo real, gerando 30% mais eficiência operacional.',
    details: 'Uma plataforma SaaS completa desenvolvida para clínicas odontológicas. Resolve a fragmentação de prontuários clínicos e históricos médicos através de uma arquitetura modularizada, integrando calendários interativos, faturamento integrado e relatórios de métricas administrativas gerados de forma assíncrona.',
    techs: ['React', 'Node.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
    link: 'https://github.com/PauloHenrrq',
    github: 'https://github.com/PauloHenrrq',
    cardImage: odontoSyncCard,
    modalImage: odontoSyncCard,
    themeColor: '#00d2ff',
    themeGlow: 'rgba(0, 210, 255, 0.15)'
  },
  {
    id: '03',
    title: 'Ortus AI',
    description: 'Plataforma de inteligência artificial que automatiza a triagem de leads qualificados, reduzindo o tempo de resposta comercial de horas para segundos.',
    details: 'Uma solução inteligente para canais de atendimento e pré-vendas. Utiliza LLMs customizadas (via APIs da OpenAI e LangChain) para analisar intenções de mensagens recebidas em tempo real, estruturando leads automaticamente no banco de dados e disparando webhooks para CRMs parceiros.',
    techs: ['Next.js', 'Python', 'OpenAI', 'FastAPI', 'TailwindCSS'],
    link: 'https://github.com/PauloHenrrq',
    github: 'https://github.com/PauloHenrrq',
    cardImage: ortusAiCard,
    modalImage: ortusAiCard,
    themeColor: '#10b981',
    themeGlow: 'rgba(16, 185, 129, 0.15)'
  },
  {
    id: '04',
    title: 'Antigravity',
    description: 'Engine de animação física de alto desempenho que permite interfaces ultra-fluídas em ambientes mobile com baixo consumo de memória.',
    details: 'Uma biblioteca open-source voltada para performance gráfica extrema no ecossistema mobile. Implementa cálculos de física vetorial diretamente em C++ (via JSI no React Native) permitindo taxas constantes de 120 FPS em listagens complexas e transições de tela com zero sobrecarga na thread principal de JavaScript.',
    techs: ['React Native', 'Reanimated', 'Skia', 'C++', 'JSI'],
    link: 'https://github.com/PauloHenrrq',
    github: 'https://github.com/PauloHenrrq',
    cardImage: antigravityCard,
    modalImage: antigravityCard,
    themeColor: '#f59e0b',
    themeGlow: 'rgba(245, 158, 11, 0.15)'
  },
];

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    techs: string[];
    link: string;
    github: string;
    cardImage?: string;
    modalImage?: string;
    themeColor?: string;
    themeGlow?: string;
  };
  onBreach: (id: string) => void;
}

function ProjectCard({ project, onBreach }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBreached, setIsBreached] = useState(false);
  
  // Progress logic using Framer Motion for buttery smooth animation
  const progressValue = useMotionValue(0);
  const [progressDisplay, setProgressDisplay] = useState(0);

  // Sync state with motion value for the SVG dash offset
  useEffect(() => {
    return progressValue.on('change', (v) => setProgressDisplay(v));
  }, [progressValue]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);
  const titleX = useTransform(mouseXSpring, [-0.5, 0.5], [-6, 6]);
  const titleY = useTransform(mouseYSpring, [-0.5, 0.5], [-6, 6]);
  const techsX = useTransform(mouseXSpring, [-0.5, 0.5], [-3, 3]);
  const techsY = useTransform(mouseYSpring, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Smoothly animate from current progress to 100
    animate(progressValue, 100, {
      duration: 1.2,
      ease: "linear",
      onComplete: () => {
        setIsBreached(true);
        onBreach(project.id);
      }
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsBreached(false);
    // Smoothly drain progress back to 0 instead of snapping
    animate(progressValue, 0, {
      duration: 0.4,
      ease: "easeOut"
    });
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsBreached(true);
      onBreach(project.id);
    }
  };

  return (
    <motion.div 
      className={`wf-project-card-wrap ${isBreached ? 'breached' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ 
        perspective: 1000,
        '--project-color': project.themeColor || 'var(--color-accent-primary)',
        '--project-glow': project.themeGlow || 'rgba(255, 59, 59, 0.15)'
      } as React.CSSProperties}
    >
      <motion.div 
        className="wf-project-card"
        layoutId={project.id}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02 }}
      >
        <svg className="wf-project-card__border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect 
            x="0" y="0" width="100" height="100" 
            fill="none" 
            stroke="var(--project-color)" 
            strokeWidth="1.5"
            pathLength="100"
            style={{ 
              strokeDasharray: 100, 
              strokeDashoffset: 100 - progressDisplay,
              opacity: isHovered ? 1 : 0,
              transition: progressDisplay === 0 ? 'opacity 0.3s' : 'none'
            }}
          />
        </svg>

        <AnimatePresence>
          {isBreached && (
            <motion.div 
              className="wf-project-card__flash"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>

        <div className="wf-project-card__preview">
          {project.cardImage && <img src={project.cardImage} alt={project.title} className="wf-project-card__img" />}
          <div className="wf-project-card__grain" />
          
          <AnimatePresence>
            {isHovered && !isBreached && (
              <motion.div 
                className="wf-project-card__hold-hint"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="wf-hold-label">SEGURE PARA ABRIR</div>
                <div className="wf-hold-progress">{Math.round(progressDisplay)}%</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="wf-project-card__body">
          <motion.div className="wf-project-card__title-wrap" style={{ x: titleX, y: titleY }}>
            <h3 className="wf-project-card__title"><span>{">"}</span> {project.title}</h3>
          </motion.div>
          <p className="wf-project-card__desc">{project.description}</p>
          <motion.div className="wf-project-card__techs" style={{ x: techsX, y: techsY }}>
            {project.techs.map((tech) => (
              <span className="wf-tech-badge" key={tech}>{tech}</span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgressPct, setScrollProgressPct] = useState(0);
  const xDrag = useMotionValue(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = scrollerRef.current;
    const content = contentRef.current;
    if (!section || !viewport || !content) return;

    let isDragging = false;
    let startX = 0;
    let startTranslateX = 0;
    const dragThreshold = 5;
    let hasDraggedPassedThreshold = false;

    // Inertia variables
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;

    const getMaxScroll = () => {
      const viewportWidth = viewport.offsetWidth;
      const contentWidth = content.scrollWidth;
      return Math.min(0, -(contentWidth - viewportWidth));
    };

    // Initialize/Reset positioning on mount
    xDrag.set(0);
    setScrollProgressPct(0);
    if (window.innerWidth >= 1000) {
      viewport.style.cursor = 'grab';
    }

    const handleStart = (clientX: number) => {
      isDragging = true;
      startX = clientX;
      startTranslateX = xDrag.get();
      hasDraggedPassedThreshold = false;
      viewport.style.cursor = 'grabbing';
      document.body.classList.add('is-dragging-projects');
      
      xDrag.stop(); // Stop any active inertial animations
      lastX = clientX;
      lastTime = performance.now();
      velocity = 0;
    };

    const handleMove = (clientX: number) => {
      if (!isDragging) return;
      const deltaX = clientX - startX;
      
      if (Math.abs(deltaX) > dragThreshold) {
        hasDraggedPassedThreshold = true;
      }
      
      let newTranslateX = startTranslateX + deltaX;
      const maxScroll = getMaxScroll();

      // Elastic boundary resistance
      if (newTranslateX > 0) {
        newTranslateX = newTranslateX * 0.25;
      } else if (newTranslateX < maxScroll) {
        newTranslateX = maxScroll + (newTranslateX - maxScroll) * 0.25;
      }

      xDrag.set(newTranslateX);

      // Track velocity
      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 0) {
        const instantVelocity = (clientX - lastX) / dt;
        velocity = velocity * 0.7 + instantVelocity * 0.3; // Low-pass filter to smooth out sudden ticks
      }
      lastX = clientX;
      lastTime = now;

      // Update progress bar
      const totalDist = Math.abs(maxScroll);
      if (totalDist > 0) {
        const pct = Math.min(100, Math.max(0, (Math.abs(newTranslateX) / totalDist) * 100));
        setScrollProgressPct(pct);
      }
    };

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      viewport.style.cursor = 'grab';
      document.body.classList.remove('is-dragging-projects');

      // Snap back if out of bounds
      const maxScroll = getMaxScroll();
      const currentX = xDrag.get();
      if (currentX > 0) {
        animate(xDrag, 0, { type: 'spring', stiffness: 300, damping: 30 });
        setScrollProgressPct(0);
      } else if (currentX < maxScroll) {
        animate(xDrag, maxScroll, { type: 'spring', stiffness: 300, damping: 30 });
        setScrollProgressPct(100);
      } else {
        // Within bounds: Apply inertia glide
        if (Math.abs(velocity) > 0.15) {
          const glideDistance = velocity * 220; // 220ms time constant
          let targetX = currentX + glideDistance;
          targetX = Math.max(maxScroll, Math.min(0, targetX));

          animate(xDrag, targetX, {
            type: 'spring',
            stiffness: 70, // Smooth gliding stiffness
            damping: 22,   // Prevent springy bouncing
            onUpdate: (latest) => {
              const totalDist = Math.abs(maxScroll);
              if (totalDist > 0) {
                const pct = Math.min(100, Math.max(0, (Math.abs(latest) / totalDist) * 100));
                setScrollProgressPct(pct);
              }
            }
          });
        }
      }

      // Block click propagation if we dragged
      if (hasDraggedPassedThreshold) {
        const preventClick = (e: MouseEvent) => {
          e.stopImmediatePropagation();
          window.removeEventListener('click', preventClick, true);
        };
        window.addEventListener('click', preventClick, true);
      }
    };

    // Desktop: Drag anywhere in the projects section
    const onMouseDown = (e: MouseEvent) => {
      if (window.innerWidth < 1000) return; // Only desktop
      if (e.button !== 0) return; // Only left click
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) return;
      handleStart(e.clientX);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1000) return;
      handleMove(e.clientX);
    };

    const onMouseUp = () => {
      if (window.innerWidth < 1000) return;
      handleEnd();
    };

    // Trackpad / Mouse Wheel Horizontal Scroll support on desktop
    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1000) return;
      if (Math.abs(e.deltaX) === 0) return; // Only process horizontal scroll wheel/trackpad

      const maxScroll = getMaxScroll();
      let newTranslateX = xDrag.get() - e.deltaX;
      
      // Clamp boundaries
      newTranslateX = Math.max(maxScroll, Math.min(0, newTranslateX));
      xDrag.set(newTranslateX);

      const totalDist = Math.abs(maxScroll);
      if (totalDist > 0) {
        const pct = Math.min(100, Math.max(0, (Math.abs(newTranslateX) / totalDist) * 100));
        setScrollProgressPct(pct);
      }
    };

    // Mobile: native scroll tracking
    const handleMobileScroll = () => {
      if (window.innerWidth >= 1000) return;
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const pct = maxScroll > 0 ? (viewport.scrollLeft / maxScroll) * 100 : 0;
      setScrollProgressPct(pct);
    };

    // Bind event listeners
    viewport.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    viewport.addEventListener('wheel', onWheel, { passive: true });

    viewport.addEventListener('scroll', handleMobileScroll, { passive: true });

    // Handle resize
    const handleResize = () => {
      const maxScroll = getMaxScroll();
      if (window.innerWidth >= 1000) {
        viewport.style.cursor = 'grab';
        if (xDrag.get() < maxScroll) {
          xDrag.set(maxScroll);
        }
      } else {
        viewport.style.cursor = '';
        // Reset translate on mobile, let CSS/native scroll handle it
        xDrag.set(0);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      viewport.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      viewport.removeEventListener('wheel', onWheel);

      viewport.removeEventListener('scroll', handleMobileScroll);
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('is-dragging-projects');
    };
  }, []);

  const activeProject = PROJECTS.find(p => p.id === selectedId);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="wf-section" id="projects" ref={sectionRef}>
      <div className="wf-section__aside">
        <div className="wf-section__aside-label">03 // PROJETOS</div>
      </div>
      
      <div className="wf-section__inner">
        <div className="wf-section__label" data-reveal="fade-up">◈ PROJETOS PESSOAIS</div>
        <h2 className="wf-section__title" data-reveal="fade-up" data-delay="100">
          Ecossistema <span>Pessoal</span>
        </h2>
        <div style={{ height: '16px' }} />
        <p className="wf-section__desc" data-reveal="fade-up" data-delay="200">
          Uma vitrine de projetos autorais, experimentos técnicos e soluções desenvolvidas de ponta a ponta.
        </p>

        <div className="wf-horiz-scroller-viewport" ref={scrollerRef}>
          <div className="wf-scroller-header">
            <div className="wf-scroller-header__status">
              <span className="wf-scroller-header__dot" />
              SISTEMA DE PROJETOS // ATIVO
            </div>
          </div>

          <div className="wf-horiz-bg-text">
            PROJETOS
          </div>

          <motion.div 
            ref={contentRef}
            className="wf-horiz-scroller-content"
            style={{ x: xDrag }}
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} onBreach={(id) => setSelectedId(id)} />
            ))}
            <a 
              href="https://github.com/PauloHenrrq" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="wf-project-card-placeholder"
            >
              <div className="wf-project-card-placeholder__inner">
                <div className="wf-github-icon-large">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <div className="wf-placeholder-text">
                  <span className="wf-placeholder-label">REPOSITÓRIO COMPLETO</span>
                  <p>Explore meu ecossistema completo de repositórios e experimentos no GitHub</p>
                  <span className="wf-placeholder-link">github.com/PauloHenrrq ↗</span>
                </div>
              </div>
            </a>
          </motion.div>

          <div className={`wf-horiz-hint ${isSectionInView && !selectedId ? 'is-visible' : ''}`}>
            <svg width="20" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 1L1 6L6 11" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 6H20" strokeLinecap="round"/>
            </svg>
            <span className="wf-horiz-hint-text">Arraste para explorar</span>
            <svg width="20" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 1L23 6L18 11" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 6H4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        
        <div className="wf-horiz-footer" data-reveal="fade-up" data-delay="400">
          <div className="wf-horiz-progress">
            <div 
              className="wf-horiz-progress__bar" 
              style={{ width: `${scrollProgressPct}%` }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && activeProject && (
          <motion.div 
            className="wf-project-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              className="wf-project-modal wf-project-modal--alert"
              layoutId={selectedId!}
              transition={{ 
                layout: { type: 'spring', damping: 25, stiffness: 200 },
                opacity: { duration: 0.2 }
              }}
              style={{ 
                zIndex: 1001,
                '--project-color': activeProject.themeColor || 'var(--color-accent-primary)',
                '--project-glow': activeProject.themeGlow || 'rgba(255, 59, 59, 0.15)'
              } as React.CSSProperties}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="wf-modal-close" onClick={() => setSelectedId(null)}>
                <span className="wf-modal-close__icon">×</span>
                <span className="wf-modal-close__text">FECHAR [ESC]</span>
              </button>

              <motion.div 
                className="wf-modal-video"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {activeProject.modalImage ? (
                  <img src={activeProject.modalImage} alt={activeProject.title} className="wf-modal-video__img" />
                ) : (
                  <div className="wf-modal-video__placeholder">
                    <div className="wf-modal-video__overlay">
                      <span className="wf-modal-video__label">SISTEMA ATIVO // MODO_SPOILER</span>
                    </div>
                    <div className="wf-modal-video__mock">
                      <div className="wf-modal-video__scanline" />
                      <span className="wf-modal-video__play-icon">▶</span>
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div 
                className="wf-modal-info"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="wf-modal-info__header">
                  <div className="wf-modal-info__num">{activeProject.id}</div>
                  <h2 className="wf-modal-info__title">{activeProject.title}</h2>
                  <div className="wf-modal-info__techs">
                    {activeProject.techs.map(tech => (
                      <span key={tech} className="wf-tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                <p className="wf-modal-info__desc">
                  {activeProject.details || activeProject.description}
                </p>
                <div className="wf-modal-info__actions">
                  <a href={activeProject.link} className="wf-btn wf-btn--primary" target="_blank" rel="noopener noreferrer">ACESSAR PROJETO ↗</a>
                  <a href={activeProject.github} className="wf-btn wf-btn--outline" target="_blank" rel="noopener noreferrer">VER CÓDIGO NO GITHUB</a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
