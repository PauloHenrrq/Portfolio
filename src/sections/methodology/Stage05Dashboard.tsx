import React, { useState, useEffect } from 'react';
import { StageCounter } from './StageCounter';
import { Stage01Decoration } from './Stage01Card';
import type { MethodStage } from '@/lib/types';

interface Stage05DashboardProps {
  stage: MethodStage;
  isActive: boolean;
}

export function Stage05Dashboard({ stage, isActive }: Stage05DashboardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1000);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="methodology__window-text full-width stage-05-variant">
      {!isMobile && <Stage01Decoration />}
      <div className="methodology__window-decor-grid"></div>
      
      <div className="stage-05-split-layout">
        <div className="stage-05-left">
          <StageCounter id={stage.id} isActive={isActive} />
          <h3 className="methodology__window-heading">{stage.title}</h3>
          <p className="methodology__window-desc">{stage.description}</p>
          <div className="methodology__window-tag">
            <span className="tag-dot"></span> {stage.bullet}
          </div>
        </div>

        <div className="stage-05-right">
          <div className="premium-dashboard">
            <div className="dashboard-glow-atmosphere"></div>
            <div className="dashboard-noise-texture"></div>
            
            <div className="dashboard-content">
              <header className="dashboard-header">
                <h2 className="system-title">ANÁLISE DE SISTEMA</h2>
                <p className="system-subtext">Monitoramento contínuo e estabilidade operacional.</p>
              </header>

              <div className="dashboard-main-panel">
                <div className="metrics-grid">
                  <div className="metric-item">
                    <span className="metric-label">PERFORMANCE</span>
                    <span className="metric-value animate-perf">/100</span>
                  </div>
                  <div className="metric-divider"></div>
                  <div className="metric-item">
                    <span className="metric-label">LATÊNCIA</span>
                    <span className="metric-value animate-lat">ms</span>
                  </div>
                  <div className="metric-divider"></div>
                  <div className="metric-item">
                    <span className="metric-label">ESTABILIDADE</span>
                    <span className="metric-value animate-stab">
                      <span className="stab-decimal"></span>%
                    </span>
                  </div>
                </div>

                <div className="telemetry-display-v2">
                  <svg className="telemetry-svg-v2" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path 
                      className="flow-line flow-1" 
                      d="M 0 50 L 50 50 L 60 48 L 70 52 L 80 50 L 150 50 L 155 45 L 165 55 L 175 50 L 250 50 L 260 49 L 270 51 L 280 50 L 350 50 L 355 42 L 365 58 L 375 50 L 450 50 L 460 47 L 475 53 L 490 50 L 550 50 L 565 40 L 580 60 L 595 50 L 650 50 L 660 49 L 675 51 L 690 50 L 750 50 L 760 42 L 775 58 L 790 50 L 850 50 L 865 48 L 880 52 L 895 50 L 1000 50" 
                      pathLength="1000"
                    />
                    <path 
                      className="flow-line flow-2" 
                      d="M 0 50 L 50 50 L 60 48 L 70 52 L 80 50 L 150 50 L 155 45 L 165 55 L 175 50 L 250 50 L 260 49 L 270 51 L 280 50 L 350 50 L 355 42 L 365 58 L 375 50 L 450 50 L 460 47 L 475 53 L 490 50 L 550 50 L 565 40 L 580 60 L 595 50 L 650 50 L 660 49 L 675 51 L 690 50 L 750 50 L 760 42 L 775 58 L 790 50 L 850 50 L 865 48 L 880 52 L 895 50 L 1000 50" 
                      pathLength="1000"
                    />
                  </svg>
                  <div className="display-overlay-v2"></div>
                </div>

                <footer className="dashboard-footer">
                  <div className="status-badge">
                    <span className="status-icon">✓</span> PROJETO VALIDADO PARA PRODUÇÃO
                  </div>
                </footer>
              </div>
            </div>

            {/* Ambient Particles */}
            <div className="dashboard-particles">
              <span className="particle p1"></span>
              <span className="particle p2"></span>
              <span className="particle p3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
