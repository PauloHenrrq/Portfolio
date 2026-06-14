import React, { useState, useEffect } from 'react';
import { StageCounter } from './StageCounter';
import type { MethodStage } from '@/lib/types';

interface Stage03DashboardProps {
  stage: MethodStage;
  isActive: boolean;
}

export function Stage03Dashboard({ stage, isActive }: Stage03DashboardProps) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Entrada', 'Análise', 'Geração', 'Validação', 'Entrega'];

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isActive, steps.length]);

  return (
    <div className="methodology__window-text full-width stage-03-variant">
      <div className="methodology__window-decor-grid"></div>
      <div className="stage-03-split-layout">
        <div className="stage-03-text-column">
          <StageCounter id={stage.id} isActive={isActive} />
          <h3 className="methodology__window-heading">{stage.title}</h3>
          <p className="methodology__window-desc">{stage.description}</p>
          <div className="impact-phrase-v2">{stage.impact}</div>
        </div>

        <div className="stage-03-dashboard-column">
          <div className="stage-03-review-terminal">
            <div className="review-header">
              <div className="review-header-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="review-title">Ambiente de Trabalho</span>
            </div>
            
            <div className="review-body">
              <div className="review-section">
                <div className="review-label">Fluxo Interno de Execução</div>
                <div className="pipeline-steps-v2">
                  {['Planejamento', 'Execução', 'Refino', 'Validação', 'Entrega'].map((step, idx) => (
                    <React.Fragment key={step}>
                      <div className={`step-item ${activeStep === idx ? 'active' : ''}`}>
                        {step}
                      </div>
                      {idx < 4 && <span className="step-sep">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="review-section">
                <div className="review-label">Parâmetros do Sistema</div>
                <div className="metrics-grid">
                  <div className="metric-card">
                    <span className="metric-bullet">›</span>
                    <div className="metric-content">Ambiente Antigravity IDE</div>
                  </div>
                  <div className="metric-card">
                    <span className="metric-bullet">›</span>
                    <div className="metric-content">Automação de fluxos complexos</div>
                  </div>
                  <div className="metric-card">
                    <span className="metric-bullet">›</span>
                    <div className="metric-content">Refinamento técnico contínuo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-footer">
              <div className="scan-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
