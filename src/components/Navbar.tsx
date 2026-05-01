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
      {/* Mobile only logo */}
      <span className="topbar--mobile-logo" aria-hidden="true">
        ◈ PH<span>.</span>dev
      </span>

      {/* Social links */}
      <nav className="topbar__links" aria-label="Links externos">
        <a
          href="https://github.com/seu-perfil"
          className="topbar__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/seu-perfil"
          className="topbar__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>

        <div className="topbar__separator" aria-hidden="true" />

        <a href="#contact" className="topbar__cta">
          Contato
        </a>
      </nav>
    </header>
  );
}
