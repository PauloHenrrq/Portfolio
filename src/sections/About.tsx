import '@/styles/about.css';

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: 'Web Design',
    text: 'Sites modernos, rápidos e otimizados para qualquer dispositivo.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Mobile Apps',
    text: 'Aplicativos fluidos para iOS e Android com alta performance.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'UI/UX Design',
    text: 'Interfaces intuitivas focadas em experiência e conversão.',
  },
];

const storyText = [
  "Desenvolvedor focado em transformar ideias em produtos digitais de alta performance.",
  "Unindo engenharia sólida e design refinado para criar soluções que escalam."
];

export function AboutSection() {
  return (
    <div className="wf-section" id="about">
      {/* Aside label */}
      
      <div className="wf-section__inner">
        <div className="wf-section__label" data-reveal="fade-up">◈ QUEM SOU EU</div>
        <h2 className="wf-section__title" data-reveal="fade-up" data-delay="100">
          Minha <span>Jornada</span>
        </h2>
        <p className="wf-section__desc" data-reveal="fade-up" data-delay="200">
          Especialista em construir experiências digitais que combinam estética premium com performance técnica.
        </p>

        {/* Story text */}
        <div className="wf-about__story" data-reveal="fade-up" data-delay="300">
          {storyText.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>


        {/* Services as flat list rows */}
        <div className="wf-about__services">
          {services.map((service, i) => (
            <div 
              className="wf-about__service-row" 
              key={service.title}
              data-reveal="fade-up" 
              data-delay={String(100 * i + 400)}
            >
              <div className="wf-about__service-icon">{service.icon}</div>
              <div className="wf-about__service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
