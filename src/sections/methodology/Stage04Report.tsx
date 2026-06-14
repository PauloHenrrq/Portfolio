import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StageCounter } from './StageCounter';
import type { MethodStage } from '@/lib/types';

interface Stage04ReportProps {
  stage: MethodStage;
  isActive: boolean;
}

const checklistItems = [
  { label: 'Resiliência e estabilidade', tooltip: 'Testes de estresse para garantir que o sistema nunca falhe.' },
  { label: 'Segurança de dados', tooltip: 'Criptografia e proteção absoluta em todas as camadas.' },
  { label: 'Fluidez e Performance', tooltip: 'Otimização máxima para carregamento instantâneo.' },
  { label: 'Experiência Impecável', tooltip: 'Refino visual e de interações para o usuário final.' },
  { label: 'Pronto para Produção', tooltip: 'Certificação final de que tudo está em excelência.' }
];

export function Stage04Report({ stage, isActive }: Stage04ReportProps) {
  const [hasBeenActive, setHasBeenActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1000);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isActive) setHasBeenActive(true);
  }, [isActive]);

  const showContent = isActive || hasBeenActive;

  return (
    <div className="methodology__window-text full-width stage-04-variant">
      <div className="methodology__window-side-line"></div>
      <div className="methodology__window-decor-grid"></div>
      
      <div className="stage-04-split-layout">
        <div className="stage-04-text-column">
          <StageCounter id={stage.id} isActive={isActive} />
          <h3 className="methodology__window-heading">{stage.title}</h3>
          <p className="methodology__window-desc">{stage.description}</p>
          
          <div className="report-annotations">
            <div className="annotation-item">
              <span className="annotation-dot"></span>
              Monitoramento de integridade em tempo real
            </div>
            <div className="annotation-item">
              <span className="annotation-dot"></span>
              Métricas de Experiência e Performance
            </div>
          </div>
        </div>

        <div className="stage-04-report-column">
          <div className="report-atmosphere-glow"></div>
          
            <div className="report-sheet-stack">
              <motion.div 
                className="tech-report-sheet-bg-3"
                initial={isMobile ? { opacity: 1, rotate: 8, x: 15, y: 8 } : { opacity: 0, rotate: 0, x: 0, y: 15 }}
                animate={isMobile ? {} : (showContent ? { opacity: 1, rotate: 8, x: 15, y: 8 } : {})}
                transition={isMobile ? { duration: 0 } : { duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div 
                className="tech-report-sheet-bg-2"
                initial={isMobile ? { opacity: 1, rotate: 5, x: 10, y: 5 } : { opacity: 0, rotate: 0, x: 0, y: 10 }}
                animate={isMobile ? {} : (showContent ? { opacity: 1, rotate: 5, x: 10, y: 5 } : {})}
                transition={isMobile ? { duration: 0 } : { duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div 
                className="tech-report-sheet-bg-1"
                initial={isMobile ? { opacity: 1, rotate: 2, x: 5, y: 2 } : { opacity: 0, rotate: 0, x: 0, y: 5 }}
                animate={isMobile ? {} : (showContent ? { opacity: 1, rotate: 2, x: 5, y: 2 } : {})}
                transition={isMobile ? { duration: 0 } : { duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />

          <motion.div 
            className="tech-report-sheet"
            initial={isMobile ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            animate={isMobile ? {} : (showContent ? { y: 0, opacity: 1 } : {})}
            transition={isMobile ? { duration: 0 } : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="report-sheet-clip"></div>
            <div className="report-header-premium">
              <h3 className="report-main-title">Validação Final</h3>
              <p className="report-brief-desc">
                Antes do deploy, cada detalhe passa por revisão técnica, testes e otimizações para garantir estabilidade real.
              </p>
            </div>
            
            <div className="report-sheet-body">
              <div className="report-checklist">
                {checklistItems.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="checklist-row has-tooltip"
                    initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    animate={isMobile ? {} : (showContent ? { opacity: 1, x: 0 } : {})}
                    transition={isMobile ? { duration: 0 } : { delay: 0.2, duration: 0.8 }}
                  >
                    <span className="check-box">✔</span>
                    <span className="check-text">{item.label}</span>
                    <div className="tech-tooltip">{item.tooltip}</div>
                  </motion.div>
                ))}
              </div>

              <div className="report-footer-meta">
                <div className="meta-left">
                  <span className="report-status-text">Deploy preparado para produção</span>
                </div>
                <div className="report-footer-stamp">
                  <motion.div 
                    className="stamp-circle ink-variant"
                    initial={isMobile ? { scale: 1, opacity: 1, rotate: -12 } : { scale: 2, opacity: 0, rotate: -25 }}
                    animate={isMobile ? {} : (showContent ? { 
                      scale: 1,
                      opacity: 1, 
                      rotate: -12
                    } : { scale: 2, opacity: 0 })}
                    transition={isMobile ? { duration: 0 } : { 
                      delay: 0.3, 
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      mass: 1
                    }}
                    style={{ marginTop: '5px' }}
                  >
                    <span>VALIDADO</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}
