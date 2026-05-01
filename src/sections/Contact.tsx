import '@/styles/contact.css';

export function ContactSection() {
  return (
    <div className="wf-section wf-section--alt" id="contact">
      {/* Aside label */}
      <div className="wf-section__aside">
        <div className="wf-section__aside-label">CONTATO</div>
      </div>

      <div className="wf-section__inner wf-contact__inner">
        <h2 className="wf-contact__title" data-reveal="fade-up">
          VAMOS CONSTRUIR<br/>ALGO <span className="text-accent">JUNTOS</span>?
        </h2>
        
        <p className="wf-contact__desc" data-reveal="fade-up" data-delay="100">
          Estou disponível para novas oportunidades, projetos e colaborações em tecnologia.
        </p>

        <div className="wf-contact__links" data-reveal="fade-up" data-delay="200">
          <a href="mailto:seu@email.com" className="wf-contact__link" target="_blank" rel="noopener noreferrer">
            <span className="wf-contact__link-label">Email</span>
            <span className="wf-contact__link-value">seu@email.com</span>
          </a>
          <a href="https://linkedin.com/in/seu-perfil" className="wf-contact__link" target="_blank" rel="noopener noreferrer">
            <span className="wf-contact__link-label">LinkedIn</span>
            <span className="wf-contact__link-value">linkedin.com/in/seu-perfil</span>
          </a>
          <a href="https://github.com/seu-perfil" className="wf-contact__link" target="_blank" rel="noopener noreferrer">
            <span className="wf-contact__link-label">GitHub</span>
            <span className="wf-contact__link-value">github.com/seu-perfil</span>
          </a>
        </div>

        <footer className="wf-contact__footer" data-reveal="fade-up" data-delay="300">
          <div className="wf-contact__footer-info">
            <span className="wf-contact__footer-label">DESIGN & CODE</span>
            <span className="wf-contact__footer-value">PAULO HENRIQUE</span>
          </div>
          <div className="wf-contact__footer-year">
            © {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </div>
  );
}
