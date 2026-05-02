import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/about.css';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: '01',
    title: 'Performance',
    text: 'Aplicações rápidas, otimizadas e preparadas para escalar.',
    accent: 'var(--accent-main)'
  },
  {
    num: '02',
    title: 'Experiência',
    text: 'Interfaces intuitivas com foco em usabilidade real.',
    accent: 'var(--accent-secondary)'
  },
  {
    num: '03',
    title: 'Estrutura',
    text: 'Código limpo, organizado e fácil de manter.',
    accent: 'var(--accent-main)'
  }
];

export function AboutSection() {
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgTextRef.current) {
      gsap.to(bgTextRef.current, {
        y: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: '#about',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, []);

  return (
    <section className="wf-section about" id="about">
      {/* Visual Element: Giant background text with parallax */}
      <div className="about__bg-text" aria-hidden="true" ref={bgTextRef}>
        ENGINEER
      </div>

      {/* Control Layer: Overlay for contrast management */}
      <div className="about-overlay" aria-hidden="true" />

      <div className="wf-section__inner about__container">
        {/* 1. Label pequeno */}
        <div className="about__label" data-reveal="fade-up">
          <span className="about__label-dot"></span> QUEM SOU EU
        </div>

        <div className="about__content">
          <div className="about__header">
            {/* 2. Headline principal */}
            <h2 className="about__title" data-reveal="fade-up" data-delay="100">
              Desenvolvedor focado em construir sistemas <span className="highlight">rápidos</span>, <span className="highlight">escaláveis</span> e com <span className="highlight">experiência</span> refinada.
            </h2>

            {/* 3. Subheadline */}
            <p className="about__subtitle" data-reveal="fade-up" data-delay="200">
              Transformo ideias em aplicações funcionais, priorizando performance, clareza e manutenibilidade.
            </p>
          </div>

          {/* Separator line between content and description/pillars */}
          <div className="about__separator" data-reveal="fade-up" data-delay="250" />

          <div className="about__body">
            {/* 4. Diferencial */}
            <p className="about__description" data-reveal="fade-up" data-delay="300">
              Minha abordagem une engenharia sólida com atenção ao detalhe visual, garantindo soluções eficientes, intuitivas e prontas para evoluir.
            </p>

            {/* 5. Grid de pilares */}
            <div className="about__pillars">
              {pillars.map((pillar, i) => (
                <div 
                  className="about__pillar-card" 
                  key={pillar.num}
                  data-reveal="fade-up" 
                  data-delay={String(400 + i * 100)}
                >
                  <div className="about__pillar-num" style={{ color: pillar.accent }}>
                    {pillar.num}
                  </div>
                  <h3 className="about__pillar-title">{pillar.title}</h3>
                  <p className="about__pillar-text">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
