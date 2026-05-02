import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/projects.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: '01',
    title: 'OdontoSync',
    description: 'Sistema de gestão odontológica que eliminou a fragmentação de dados através de um dashboard unificado, resultando em 30% mais eficiência operacional.',
    techs: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    id: '02',
    title: 'Ortus AI',
    description: 'Plataforma de IA que automatiza a triagem de leads qualificados, reduzindo o tempo de resposta comercial de horas para segundos.',
    techs: ['React', 'Node.js', 'OpenAI', 'TypeScript'],
    link: '#',
    github: '#',
  },
  {
    id: '03',
    title: 'Antigravity',
    description: 'Engine de animação física de alto desempenho que permite interfaces ultra-fluídas em ambientes mobile com baixo consumo de memória.',
    techs: ['React Native', 'Reanimated', 'Skia'],
    link: '#',
    github: '#',
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
    import('framer-motion').then(({ animate }) => {
      animate(progressValue, 100, {
        duration: 1.2,
        ease: "linear",
        onComplete: () => {
          setIsBreached(true);
          onBreach(project.id);
        }
      });
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsBreached(false);
    // Smoothly drain progress back to 0 instead of snapping
    import('framer-motion').then(({ animate }) => {
      animate(progressValue, 0, {
        duration: 0.4,
        ease: "easeOut"
      });
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
      style={{ perspective: 1000 }}
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
            stroke="var(--color-accent-primary)" 
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });





  useEffect(() => {
    const updateConstraints = () => {
      if (scrollerRef.current) {
        const viewport = scrollerRef.current;
        const content = viewport.querySelector('.wf-horiz-scroller-content') as HTMLElement;
        if (content) {
          const viewportWidth = viewport.offsetWidth;
          const contentWidth = content.scrollWidth;
          setDragConstraints({ left: -(contentWidth - viewportWidth), right: 0 });
        }
      }
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  const activeProject = PROJECTS.find(p => p.id === selectedId);
  const xDrag = useMotionValue(0);
  const scrollProgress = useTransform(
    xDrag, 
    [dragConstraints.left, 0], 
    ["100%", "0%"]
  );

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="wf-section" id="projects">
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
            className="wf-horiz-scroller-content"
            style={{ x: xDrag }}
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={0.1}
            whileTap={{ cursor: "grabbing" }}
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
          <div className="wf-horiz-hint">
            <svg width="20" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 1L1 6L6 11" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 6H20" strokeLinecap="round"/>
            </svg>
            <span>Arraste para explorar</span>
            <svg width="20" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 1L23 6L18 11" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 6H4" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        
        <div className="wf-horiz-footer" data-reveal="fade-up" data-delay="400">
          <div className="wf-horiz-progress">
            <motion.div 
              className="wf-horiz-progress__bar" 
              style={{ width: scrollProgress }}
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
              style={{ zIndex: 1001 }}
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
                <div className="wf-modal-video__placeholder">
                  <div className="wf-modal-video__overlay">
                    <span className="wf-modal-video__label">SISTEMA ATIVO // MODO_SPOILER</span>
                  </div>
                  <div className="wf-modal-video__mock">
                    <div className="wf-modal-video__scanline" />
                    <span className="wf-modal-video__play-icon">▶</span>
                  </div>
                </div>
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
                  {activeProject.description}
                  <br /><br />
                  Este projeto foi construído focando em escalabilidade e performance. 
                  A solução implementada resolve problemas críticos de latência e garante uma experiência fluida para o usuário final.
                </p>
                <div className="wf-modal-info__actions">
                  <a href={activeProject.link} className="wf-btn wf-btn--primary" target="_blank" rel="noopener noreferrer">ACESSAR DEMO ↗</a>
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
