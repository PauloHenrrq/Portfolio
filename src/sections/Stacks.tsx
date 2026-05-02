import React from 'react';
import '../styles/stacks.css';
import mcpIcon from '@/assets/model-context-protocol-icon.svg';
import promptIcon from '@/assets/prompt_17653455.png';

const getIconUrl = (name: string) => `https://raw.githubusercontent.com/devicons/devicon/master/icons/${name}/${name}-original.svg`;

const TECH_CONFIG: Record<string, { icon: string; color: string }> = {
  'React Native': { icon: getIconUrl('react'), color: '#61DAFB' },
  'TypeScript': { icon: getIconUrl('typescript'), color: '#3178C6' },
  'React / Next.js': { icon: getIconUrl('react'), color: '#61DAFB' },
  'Tailwind CSS': { icon: getIconUrl('tailwindcss'), color: '#38BDF8' },
  'Node.js / Express': { icon: getIconUrl('nodejs'), color: '#339933' },
  'Prisma ORM': { icon: getIconUrl('prisma'), color: '#5A67D8' },
  'PostgreSQL': { icon: getIconUrl('postgresql'), color: '#4169E1' },
  'MySQL': { icon: getIconUrl('mysql'), color: '#4479A1' },
  'Python': { icon: getIconUrl('python'), color: '#3776AB' },
  'Docker': { icon: getIconUrl('docker'), color: '#2496ED' },
  'MCPs': { icon: mcpIcon, color: '#FFFFFF' }, 
  'Prompts': { icon: promptIcon, color: '#00F5FF' }, 
  'Automação': { icon: getIconUrl('bash'), color: '#4EAA25' },
  'Agentes IA': { icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png', color: '#3776AB' }
};

const DATA_STREAM = [
  {
    id: 'ARC-01',
    category: 'ARQUITETURA MOBILE & WEB',
    color: '#61DAFB',
    items: [
      { name: 'React / Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'React Native' },
      { name: 'TypeScript' }
    ]
  },
  {
    id: 'INF-02',
    category: 'BACKEND & INFRAESTRUTURA',
    color: '#339933',
    items: [
      { name: 'Node.js / Express' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Docker' }
    ]
  },
  {
    id: 'INT-03',
    category: 'INTELIGÊNCIA & AUTOMAÇÃO',
    color: '#4285F4',
    items: [
      { name: 'Prompts' },
      { name: 'Agentes IA' },
      { name: 'MCPs' },
      { name: 'Automação' }
    ]
  }
];

const CAROUSEL_DATA = [
  { name: 'React / Next.js', icon: TECH_CONFIG['React / Next.js'].icon },
  { name: 'Node.js / Express', icon: TECH_CONFIG['Node.js / Express'].icon },
  { name: 'PostgreSQL', icon: TECH_CONFIG['PostgreSQL'].icon },
  { name: 'Python', icon: TECH_CONFIG['Python'].icon },
  { name: 'Prompts', icon: TECH_CONFIG['Prompts'].icon },
  { name: 'Docker', icon: TECH_CONFIG['Docker'].icon },
  { name: 'MySQL', icon: TECH_CONFIG['MySQL'].icon },
  { name: 'Agentes IA', icon: TECH_CONFIG['Agentes IA'].icon }
];

export function StacksSection() {
  return (
    <section className="wf-section stacks" id="stacks">
      <div className="wf-section__aside">
        <div className="wf-section__aside-label">04 // TECNOLOGIAS</div>
      </div>

      <div className="wf-section__inner">
        <div className="wf-section__label" data-reveal="fade-up">◈ TECNOLOGIAS</div>
        
        <h2 className="wf-section__title stacks__title-center" data-reveal="fade-up" data-delay="100">
          Principais <span>Tecnologias</span>
        </h2>

        <div className="stacks__terminal" data-reveal="fade-up" data-delay="200">
          {DATA_STREAM.map((col, i) => (
            <div 
              key={i} 
              className="stacks__column"
              style={{ '--accent-color': col.color } as React.CSSProperties}
            >
              <div className="stacks__sweep-line" />

              <div className="stacks__column-header">
                <span className="stacks__column-id">{col.id}</span>
                <h3 className="stacks__column-title">{col.category}</h3>
              </div>

              <div className="stacks__column-items">
                {col.items.map((item, j) => {
                  const tech = TECH_CONFIG[item.name];
                  return (
                    <div 
                      key={j} 
                      className={`stacks__item stacks__item--${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      style={{ '--tech-color': tech?.color } as React.CSSProperties}
                    >
                      <div className="stacks__icon-box">
                        <img 
                          src={tech?.icon} 
                          alt={item.name} 
                          className="stacks__tech-img"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      </div>

                      <span className="stacks__tech-name">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="stacks__carousel-wrap" data-reveal="fade-up" data-delay="400">
          <div className="stacks__carousel">
            <div className="stacks__carousel-track">
              {[...CAROUSEL_DATA, ...CAROUSEL_DATA, ...CAROUSEL_DATA, ...CAROUSEL_DATA].map((item, idx) => (
                <div key={idx} className="stacks__carousel-item">
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className={`stacks__carousel-img stacks__img--${item.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
