import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/sidebar.css';

const NAV_SECTIONS = [
  { id: 'hero',     label: 'Início',     num: '01' },
  { id: 'about',    label: 'QUEM SOU EU',    num: '02' },
  { id: 'methodology',   label: 'MÉTODO',   num: '03' },
  { id: 'projects', label: 'Projetos', num: '04' },
  { id: 'contact',  label: 'Contato',  num: '05' },
];

export const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Track active section
    const sectionEls = NAV_SECTIONS
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: '-50% 0px -50% 0px' 
      }
    );

    sectionEls.forEach(el => observer.observe(el));

    // 2. Real-time scroll progress using ScrollTrigger (Perfect sync with Lenis)
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        setScrollProgress(self.progress * 100);
      }
    });
    
    return () => {
      observer.disconnect();
      st.kill();
    };
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const targetEl = el.parentElement?.classList.contains('pin-spacer') ? el.parentElement : el;
      const headerOffset = window.innerWidth <= 900 ? 70 : 0;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="wf-sidebar-container">
      <div className="wf-sidebar-trigger">
        <div className="trigger-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      
      <aside className="wf-sidebar">
        <div>
          <div className="wf-sidebar__logo">
            PH<span>.dev</span>
          </div>
          
          <nav className="wf-sidebar__nav">
            {NAV_SECTIONS.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={`wf-sidebar__nav-item ${activeSection === item.id ? 'wf-sidebar__nav-item--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <div className="wf-sidebar__nav-dot"></div>
                {item.label}
              </a>
            ))}
          </nav>
  
          <div className="wf-sidebar__progress-container">
            <div className="wf-sidebar__progress-bar">
              <div 
                className="wf-sidebar__progress-fill"
                style={{ 
                  height: `${scrollProgress}%`,
                  backgroundColor: 'var(--color-accent-primary)'
                }}
              ></div>
            </div>
            <div className="wf-sidebar__progress-text">
              {Math.round(scrollProgress)}%
            </div>
          </div>
        </div>
        
        <div className="wf-sidebar__footer">
          © PH {new Date().getFullYear()}
        </div>
      </aside>
    </div>
  );
};
