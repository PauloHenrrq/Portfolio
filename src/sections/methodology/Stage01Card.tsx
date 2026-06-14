import React, { useMemo } from 'react';
import { StageCounter } from './StageCounter';
import type { MethodStage } from '@/lib/types';

interface Stage01CardProps {
  stage: MethodStage;
  isActive: boolean;
}

export function Stage01Decoration() {
  const bits = useMemo(() => {
    return [...Array(6)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      moveX: `${(Math.random() - 0.5) * 200}px`,
      moveY: `${(Math.random() - 0.5) * 200}px`,
      delay: `${Math.random() * 5}s`
    }));
  }, []);

  return (
    <div className="stage-01-decoration">
      <div className="stage-01-grid"></div>
      <div className="stage-01-scanner"></div>
      {bits.map((bit, i) => (
        <div 
          key={i} 
          className="data-bit"
          style={{
            left: bit.left,
            top: bit.top,
            '--move-x': bit.moveX,
            '--move-y': bit.moveY,
            animationDelay: bit.delay
          } as React.CSSProperties}
        ></div>
      ))}
    </div>
  );
}

export function Stage01Card({ stage, isActive }: Stage01CardProps) {
  return (
    <div className="methodology__window-text full-width">
      <Stage01Decoration />
      <div className="methodology__window-decor-grid"></div>
      <div className="stage-01-split-layout">
        <div className="stage-01-left">
          <StageCounter id={stage.id} isActive={isActive} />
          <h3 className="methodology__window-heading">{stage.title}</h3>
          <p className="methodology__window-desc">{stage.description}</p>
          <div className="methodology__window-tag">
            <span className="tag-dot"></span> {stage.bullet}
          </div>
        </div>
        <div className="stage-01-right">
          <div className="conceptual-clean-block">
            <div className="conceptual-clean-header">
              <span className="file-icon">📄</span> planejamento.md
            </div>
            <div className="conceptual-markdown-content">
              <h4 className="markdown-h1"># Levantamento de requisitos</h4>
              <ul className="conceptual-clean-list">
                <li className="clean-line"><span className="clean-check">[✓]</span> Objetivos do projeto e visão de sucesso</li>
                <li className="clean-line"><span className="clean-check">[✓]</span> Mapeamento de restrições técnicas</li>
                <li className="clean-line"><span className="clean-check">[✓]</span> Identificação de riscos e gargalos <span className="blinking-cursor">_</span></li>
              </ul>
            </div>
            <div className="clean-status">
              <span className="status-indicator"></span> Status: Validado
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
