import { useState, useEffect } from 'react';
import '@/styles/navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`topbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <nav className="topbar__nav" aria-label="Navegação Principal">
        <div className="topbar__group">
          <a
            href="https://github.com/PauloHenrrq"
            className="topbar__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            href="/cv.pdf"
            className="topbar__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            CURRÍCULO
          </a>
        </div>

        <div className="topbar__divider" aria-hidden="true" />

        <a href="#contact" className="topbar__cta">
          CONTATO
        </a>
      </nav>
    </header>
  );
}
