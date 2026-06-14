import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '@/styles/projects.css';
import { PROJECTS } from './projects/projectsData';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectModal } from './projects/ProjectModal';
import { useHorizScroller } from './projects/useHorizScroller';

export function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const { xDrag } = useHorizScroller(scrollerRef, contentRef, progressBarRef);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const activeProject = PROJECTS.find((p) => p.id === selectedId);

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
            ref={contentRef}
            className="wf-horiz-scroller-content"
            style={{ x: xDrag }}
          >
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onBreach={(id) => setSelectedId(id)} 
              />
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
              ref={progressBarRef}
              className="wf-horiz-progress__bar" 
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && activeProject && (
          <ProjectModal 
            project={activeProject} 
            onClose={() => setSelectedId(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
export default ProjectsSection;
