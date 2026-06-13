import { useState, useEffect } from 'react';
import '@/styles/navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    
    // Give a small delay for the menu closure animation to begin
    setTimeout(() => {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const el = document.getElementById(id);
      if (el) {
        // Adjust for fixed header height
        const targetEl = el.parentElement?.classList.contains('pin-spacer') ? el.parentElement : el;
        const headerOffset = window.innerWidth <= 500 ? 70 : 0;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <header className={`topbar${scrolled ? ' scrolled' : ''}`} role="banner">
        {/* Mobile: Hamburger */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>

        {/* Desktop: Specific Links (GitHub + CV) */}
        <div className="topbar__desktop-links">
          <a 
            href="https://github.com/PauloHenrrq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="topbar__link"
          >
            GITHUB
          </a>

          <div className="topbar__divider" aria-hidden="true" />

          <a 
            href="/cv.pdf" 
            download="Paulo_Henrique_Curriculo.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="topbar__link topbar__link--cv"
          >
            CURRÍCULO
            <svg 
              className="cv-icon" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Overlay Content */}
        <nav className={`topbar__nav ${menuOpen ? 'open' : ''}`} aria-label="Navegação Principal">
          <div className="topbar__group">
            <a href="#hero" className="topbar__link" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>INÍCIO</a>
            <a href="#about" className="topbar__link" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>QUEM SOU EU</a>
            <a href="#methodology" className="topbar__link" onClick={(e) => { e.preventDefault(); handleNavClick('methodology'); }}>MÉTODO</a>
            <a href="#projects" className="topbar__link" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>PROJETOS</a>
            <a href="#contact" className="topbar__link" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>CONTATO</a>
          </div>

          <div className="topbar__divider" aria-hidden="true" />

          <a 
            href="/cv.pdf" 
            download="Paulo_Henrique_Curriculo.pdf"
            className="topbar__link topbar__link--cv-mobile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            CURRÍCULO
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </nav>
      </header>
      
      <div 
        className={`topbar__overlay ${menuOpen ? 'open' : ''}`} 
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
