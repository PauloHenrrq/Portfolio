import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/hero.css';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const bgLine1Ref = useRef<HTMLDivElement>(null);
  const bgLine2Ref = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline();
      const l1 = line1Ref.current;
      const l2 = line2Ref.current;
      const desc = descRef.current;

      if (!l1 || !l2 || !desc) return;

      const phText = "PH";
      const titleLine1 = "PAULO";
      const titleLine2 = "HENRIQUE";

      // ── Phase 0: Reset ──
      gsap.set([l1, l2, '.hero__description-wrapper', '.hero__action-card', '.hero__action-link--alt', '.hero__tag', '.wf-topbar', portraitRef.current], { 
        opacity: 0, 
        visibility: 'visible' 
      });
      l1.textContent = '';
      l2.textContent = '';

      // Create cursor element
      const cursor = document.createElement('span');
      cursor.className = 'typing-cursor';

      // ── Phase 1: Entrance ──
      masterTl
        .fromTo('.wf-topbar',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        )
        .fromTo('.hero__tag',
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );

      // ── Phase 2: PH Typing & Backspace ──
      masterTl.add(() => {
        const typeTl = gsap.timeline();
        l1.appendChild(cursor);
        l1.style.opacity = '1';
        l1.classList.add('typing-ph');

        // Type PH
        phText.split('').forEach((char) => {
          typeTl.to({}, {
            duration: 0.1,
            onComplete: () => {
              l1.textContent += char;
              l1.appendChild(cursor);
            }
          });
        });

        // Pause
        typeTl.to({}, { duration: 0.8 });

        // Backspace
        phText.split('').forEach(() => {
          typeTl.to({}, {
            duration: 0.1,
            onComplete: () => {
              l1.textContent = l1.textContent!.slice(0, -1);
              l1.appendChild(cursor);
            }
          });
        });

        // Change style for real name
        typeTl.to({}, {
          duration: 0.1,
          onComplete: () => {
            l1.classList.remove('typing-ph');
          }
        });

        // Type PAULO
        titleLine1.split('').forEach((char) => {
          typeTl.to({}, {
            duration: 0.08,
            onComplete: () => {
              l1.textContent += char;
              l1.appendChild(cursor);
            }
          });
        });

        // Move cursor to line 2
        typeTl.to({}, {
          duration: 0.1,
          onComplete: () => {
            if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
            l2.appendChild(cursor);
            l2.style.opacity = '1';
          }
        });

        // Type HENRIQUE
        titleLine2.split('').forEach((char) => {
          typeTl.to({}, {
            duration: 0.08,
            onComplete: () => {
              l2.textContent += char;
              l2.appendChild(cursor);
            }
          });
        });

        // Final cursor blink
        typeTl.to(cursor, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'steps(1)'
        });

        return typeTl; // Return timeline to masterTl
      });

      // ── Phase 3: Content & Portrait ──
      masterTl
        .fromTo('.hero__description-wrapper',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '+=0.2'
        )
        .fromTo(['.hero__action-card', '.hero__action-link--alt'],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(portraitRef.current,
          { scale: 0.95, opacity: 0, filter: 'blur(10px)' },
          { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power4.out' },
          '-=1.2'
        );

      // ── Phase 4: Background Parallax ──
      // Entrance
      masterTl
        .fromTo(bgLine1Ref.current,
          { opacity: 0, scale: 0.9, x: -150 },
          { opacity: 1, scale: 1, x: 0, duration: 2, ease: 'expo.out' },
          '-=1'
        )
        .fromTo(bgLine2Ref.current,
          { opacity: 0, scale: 0.9, x: 150 },
          { opacity: 1, scale: 1, x: 0, duration: 2, ease: 'expo.out' },
          '-=1.7'
        );

      // Scroll Parallax (Sincronizado com a direção de entrada)
      gsap.fromTo(bgLine1Ref.current, 
        { x: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
          x: -150, // Volta para a esquerda
          ease: 'none'
        }
      );

      gsap.fromTo(bgLine2Ref.current, 
        { x: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
          x: 150, // Volta para a direita
          ease: 'none'
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="wf-hero-wrapper" id="hero">
      <header className="wf-topbar">
        <nav className="wf-topbar__nav">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="wf-topbar__link">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="wf-topbar__link">LinkedIn</a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="wf-topbar__link">CV ↓</a>
        </nav>
        <a href="#contact" className="wf-topbar__cta">Contato</a>
      </header>

      <div className="wf-hero">
        <div className="hero__bg-gradient" />
        
        <div className="hero__bg-text" aria-hidden="true">
          <div ref={bgLine1Ref} className="hero__bg-line hero__bg-line--1">DEVE</div>
          <div ref={bgLine2Ref} className="hero__bg-line hero__bg-line--2">LOPER</div>
        </div>

        <div ref={portraitRef} className="hero__portrait-stage">
          <div className="hero__portrait">
            <div className="hero__portrait-image">
              <span className="hero__portrait-ph-text">PH</span>
            </div>
          </div>
        </div>

        <div className="hero__main-content">
          <div className="hero__tag">
            <span className="hero__tag-icon">◆</span>
            FULL STACK DEVELOPER & UI/UX DESIGNER
          </div>
          
          <h1 className="hero__title">
            <span ref={line1Ref} className="hero__title-line-1"></span>
            <span ref={line2Ref} className="hero__title-line-2 text-accent"></span>
          </h1>

          <div className="hero__description-wrapper">
            <p ref={descRef} className="hero__description">
              Construo sistemas performáticos com foco em experiência e escala.
            </p>
          </div>

          <div className="hero__actions">
            <div className="hero__action-card">
              <a href="#projects" className="hero__action-link">
                VER PROJETOS
                <svg className="hero__action-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <a href="#contact" className="hero__action-link hero__action-link--alt">ENTRAR EM CONTATO →</a>
          </div>
        </div>

        <div className="hero__scroll-indicator" />
      </div>
    </section>
  );
}
