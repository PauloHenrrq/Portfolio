import React from 'react';
import { useLenis } from '@/hooks/useLenis';
import { useRevealEngine } from '@/hooks/useRevealEngine';
import { useCardSpotlight } from '@/hooks/useCardSpotlight';
import { Sidebar } from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';
import { EnergyConnector } from '@/components/EnergyConnector';
import { HeroSection } from '@/sections/Hero';
import { AboutSection } from '@/sections/About';
import { ProjectsSection } from '@/sections/Projects';
import { MethodologySection } from '@/sections/Methodology';
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

      <Navbar />

      <div className="wf-shell">
        <Sidebar />
        
        <div className="wf-main">
          <main>
            <HeroSection />
            <EnergyConnector variant="p-p" />
            <AboutSection />
            
            {/* Unified Light Path: Methodology -> Projects */}
            <div className="wf-light-path-container" style={{ position: 'relative' }}>
              <EnergyConnector variant="p-s" />
              <MethodologySection />
              
              <EnergyConnector variant="s-p" />
              <ProjectsSection />

              {/* Tapering Continuous Light Line: Starts thin/dark and grows to 35% width/bright */}
              <div 
                className="hero__bg-gradient" 
                style={{ 
                  top: 0, 
                  bottom: '120px',
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  /* 
                    Linear gradient for the vertical progression of color.
                    Radial gradient for the horizontal "thick line" effect.
                    The tapering effect is achieved by blending multiple layers or using a mask-image approach.
                    Here we use a combination that feels continuous.
                  */
                  background: `
                    linear-gradient(to bottom, 
                      transparent 0%, 
                      rgba(255, 26, 26, 0.02) 5%, 
                      rgba(255, 45, 45, 0.05) 50%, 
                      rgba(255, 65, 65, 0.1) 100%
                    )
                  `,
                  maskImage: 'radial-gradient(ellipse 35% 100% at 50% 100%, black 0%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 35% 100% at 50% 100%, black 0%, transparent 100%)',
                  width: '100%', 
                  height: '100%',
                  opacity: 0.9,
                  zIndex: 0
                } as React.CSSProperties} 
              />
            </div>

            <EnergyConnector variant="p-p" />
            <ContactSection />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
