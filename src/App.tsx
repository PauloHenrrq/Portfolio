import { useLenis } from '@/hooks/useLenis';
import { useRevealEngine } from '@/hooks/useRevealEngine';
import { useCardSpotlight } from '@/hooks/useCardSpotlight';
import { Sidebar } from '@/components/Sidebar';
import { EnergyConnector } from '@/components/EnergyConnector';
import { HeroSection } from '@/sections/Hero';
import { AboutSection } from '@/sections/About';
import { ProjectsSection } from '@/sections/Projects';
import { StacksSection } from '@/sections/Stacks';
import { ContactSection } from '@/sections/Contact';

import '@/styles/global.css';
import '@/styles/layout.css';
import '@/styles/sections.css';
import '@/styles/buttons.css';

function App() {
  useLenis();
  useRevealEngine();
  useCardSpotlight();

  return (
    <>
      <div className="global-particles" aria-hidden="true">
        <span style={{ '--x': '10%', '--y': '20%', '--s': '3px', '--d': '8s' } as React.CSSProperties} />
        <span style={{ '--x': '80%', '--y': '15%', '--s': '2px', '--d': '12s' } as React.CSSProperties} />
        <span style={{ '--x': '45%', '--y': '60%', '--s': '4px', '--d': '10s' } as React.CSSProperties} />
        <span style={{ '--x': '70%', '--y': '75%', '--s': '2px', '--d': '14s' } as React.CSSProperties} />
        <span style={{ '--x': '20%', '--y': '85%', '--s': '3px', '--d': '9s' } as React.CSSProperties} />
        <span style={{ '--x': '90%', '--y': '45%', '--s': '2px', '--d': '11s' } as React.CSSProperties} />
        <span style={{ '--x': '30%', '--y': '30%', '--s': '3px', '--d': '15s' } as React.CSSProperties} />
        <span style={{ '--x': '60%', '--y': '10%', '--s': '2px', '--d': '7s' } as React.CSSProperties} />
        <span style={{ '--x': '15%', '--y': '50%', '--s': '4px', '--d': '13s' } as React.CSSProperties} />
        <span style={{ '--x': '85%', '--y': '90%', '--s': '2px', '--d': '10s' } as React.CSSProperties} />
        <span style={{ '--x': '50%', '--y': '25%', '--s': '3px', '--d': '11s' } as React.CSSProperties} />
        <span style={{ '--x': '5%', '--y': '70%', '--s': '2px', '--d': '14s' } as React.CSSProperties} />
      </div>

      <div className="wf-shell">
        <Sidebar />
        
        <div className="wf-main">
          <main>
            <HeroSection />
            <EnergyConnector variant="p-p" />
            <AboutSection />
            <div className="hero__bg-gradient" style={{ top: '150vh', left: '-10%', background: 'radial-gradient(circle at center, rgba(255, 26, 26, 0.04) 0%, transparent 60%)' } as React.CSSProperties} />
            <EnergyConnector variant="p-s" />
            <ProjectsSection />
            <div className="hero__bg-gradient" style={{ top: '250vh', right: '-15%', background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.015) 0%, transparent 50%)' } as React.CSSProperties} />
            <EnergyConnector variant="s-p" />
            <StacksSection />
            <div className="hero__bg-gradient" style={{ bottom: '10vh', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle at center, rgba(255, 26, 26, 0.02) 0%, transparent 70%)' } as React.CSSProperties} />
            <EnergyConnector variant="p-p" />
            <ContactSection />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
