import { useState, useEffect } from 'react';
import '@/styles/sidebar.css';

interface NavSection {
  id: string;
  label: string;
  num: string;
}

const NAV_SECTIONS: NavSection[] = [
  { id: 'hero',     label: 'Home',     num: '01' },
  { id: 'about',    label: 'Quem Sou Eu',    num: '02' },
  { id: 'projects', label: 'Projetos', num: '03' },
  { id: 'methodology',   label: 'Método',    num: '04' },
  { id: 'contact',  label: 'Contato',  num: '05' },
];

export function SidebarProgress() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    // Track active section
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
        rootMargin: '-50% 0px -50% 0px' // Gatilho exatamente no meio da tela
      }
    );

    sectionEls.forEach(el => observer.observe(el));

    // Track scroll progress
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? Math.round((scrolled / total) * 100) : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="sidebar" role="navigation" aria-label="Navegação lateral">
      {/* Logo */}
      <a href="#hero" className="sidebar__logo" onClick={e => { e.preventDefault(); handleNavClick('hero'); }}>
        <span className="sidebar__logo-mark">◈</span>
        <span className="sidebar__logo-text">
          PH<span className="sidebar__logo-dot">.</span>dev
        </span>
      </a>

      {/* Section Nav */}
      <nav className="sidebar__nav" aria-label="Seções da página">
        {NAV_SECTIONS.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`sidebar__nav-item${activeSection === section.id ? ' active' : ''}`}
            onClick={e => { e.preventDefault(); handleNavClick(section.id); }}
            aria-current={activeSection === section.id ? 'true' : undefined}
          >
            <span className="sidebar__nav-dot" aria-hidden="true" />
            <span className="sidebar__nav-num">{section.num}</span>
            <span className="sidebar__nav-label">{section.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar__divider" aria-hidden="true" />

      {/* Scroll Progress */}
      <div className="sidebar__progress">
        <div className="sidebar__progress-label">
          <span>SCROLL</span>
          <span>{scrollProgress}%</span>
        </div>
        <div className="sidebar__progress-bar" role="progressbar" aria-valuenow={scrollProgress} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="sidebar__progress-fill"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Availability Badge */}
      <div className="sidebar__availability">
        <span className="sidebar__availability-dot" aria-hidden="true" />
        <span className="sidebar__availability-text">Disponível para projetos</span>
      </div>
    </aside>
  );
}
