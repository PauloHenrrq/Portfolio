import '@/styles/stacks.css';

const STACKS = [
  { category: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'GSAP', 'CSS/SASS'] },
  { category: 'Back-end', items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL'] },
  { category: 'Mobile', items: ['React Native', 'Expo'] },
  { category: 'DevOps & Tools', items: ['Git', 'Docker', 'Vercel', 'Figma'] },
];

export function StacksSection() {
  return (
    <div className="wf-section" id="stacks">
      {/* Aside label */}
      <div className="wf-section__aside">
        <div className="wf-section__aside-label">TECNOLOGIAS</div>
      </div>

      <div className="wf-section__inner">
        <div className="wf-section__label" data-reveal="fade-up">◈ TECNOLOGIAS</div>
        <h2 className="wf-section__title" data-reveal="fade-up" data-delay="100">
          Stack & <span>Ferramentas</span>
        </h2>
        <p className="wf-section__desc" data-reveal="fade-up" data-delay="200">
          As ferramentas que utilizo para construir aplicações modernas, desde a interface até o backend e infraestrutura.
        </p>

        <div className="stacks__categories">
          {STACKS.map((stack, i) => (
            <div
              key={stack.category}
              className="stacks__category"
              data-reveal="fade-up"
              data-delay={String(100 * i + 300)}
            >
              <h3 className="stacks__category-label">{stack.category}</h3>
              <div className="stacks__pills">
                {stack.items.map((item) => (
                  <div key={item} className="stacks__pill">
                    <div className="stacks__pill-icon">
                      {/* Optional: Add exact SVGs here later */}
                      <span>⚡</span>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
