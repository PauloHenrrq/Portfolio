import '@/styles/projects.css';

const PROJECTS = [
  {
    id: '01',
    title: 'Projeto 1',
    description: 'Descrição breve do projeto e o problema que ele resolve. Uma análise sobre o impacto.',
    techs: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
    icon: '🖥️'
  },
  {
    id: '02',
    title: 'Projeto 2',
    description: 'Plataforma web escalável com foco em performance e experiência do usuário.',
    techs: ['Next.js', 'Prisma', 'TypeScript'],
    link: '#',
    github: '#',
    icon: '🖥️'
  },
  {
    id: '03',
    title: 'Projeto 3',
    description: 'Aplicativo mobile multiplataforma para gestão de tarefas e produtividade.',
    techs: ['React Native', 'Expo'],
    link: '#',
    github: '#',
    icon: '📱'
  },
];

export function ProjectsSection() {
  return (
    <div className="wf-section" id="projects">
      <div className="wf-section__aside">
        <div className="wf-section__aside-label">02 // PORTFÓLIO</div>
      </div>
      
      <div className="wf-section__inner">
        <div className="wf-section__label" data-reveal="fade-up">◈ PROJETOS EM DESTAQUE</div>
        <h2 className="wf-section__title" data-reveal="fade-up" data-delay="100">
          Trabalhos <span>selecionados</span>
        </h2>
        <p className="wf-section__desc" data-reveal="fade-up" data-delay="200">
          Scroll horizontal para explorar os projetos →
        </p>

        {/* Horizontal scroll strip */}
        <div className="wf-horiz-scroller" data-reveal="fade-up" data-delay="300">
          {PROJECTS.map((project) => (
            <div className="wf-project-card-wrap" key={project.id}>
              <div className="wf-project-card">
                <div className="wf-project-card__preview">
                  <span className="wf-project-card__icon">{project.icon}</span>
                  <span className="wf-project-card__preview-text">Screenshot 360×200</span>
                </div>
                <div className="wf-project-card__body">
                  <div className="wf-project-card__num">{project.id}</div>
                  <div className="wf-project-card__title">{project.title}</div>
                  <div className="wf-project-card__desc">{project.description}</div>
                  <div className="wf-project-card__techs">
                    {project.techs.map((tech) => (
                      <span className="wf-tech-badge" key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="wf-project-card__links">
                    <a href={project.link} className="wf-link" target="_blank" rel="noopener noreferrer">Demo ↗</a>
                    <a href={project.github} className="wf-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* "Add more" placeholder card */}
          <div className="wf-project-card-placeholder">
            + Mais projetos em breve
          </div>
        </div>
        
        <div className="wf-horiz-hint" data-reveal="fade-up" data-delay="400">
          ← Arraste para explorar • {PROJECTS.length} projetos visíveis •
        </div>
      </div>
    </div>
  );
}
