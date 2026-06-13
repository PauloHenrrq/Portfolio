import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectItem } from './types';

export interface ProjectModalProps {
  project: ProjectItem;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'tab1' | 'tab2'>('tab1');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showZoomHintAnimation, setShowZoomHintAnimation] = useState(true);

  // Reset modal state when the active project changes
  useEffect(() => {
    setActiveTab('tab1');
    setActiveImageIndex(0);
    setIsZoomed(false);
    setShowZoomHintAnimation(true);
  }, [project]);

  return (
    <motion.div 
      className="wf-project-modal-overlay"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="wf-project-modal wf-project-modal--alert"
        layoutId={project.id}
        transition={{ 
          layout: { type: 'spring', damping: 25, stiffness: 200 },
          opacity: { duration: 0.2 }
        }}
        style={{ 
          zIndex: 1001,
          '--project-color': project.themeColor || 'var(--color-accent-primary)',
          '--project-glow': project.themeGlow || 'rgba(255, 59, 59, 0.15)'
        } as React.CSSProperties}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="wf-modal-close" onClick={onClose}>
          <span className="wf-modal-close__icon">×</span>
          <span className="wf-modal-close__text">FECHAR [ESC]</span>
        </button>

        <motion.div 
          className="wf-modal-video"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {project.hasTabs ? (
            <>
              <div className="wf-modal-tabs">
                <button 
                  className={`wf-modal-tab-btn ${activeTab === 'tab1' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('tab1');
                    setActiveImageIndex(0);
                    setShowZoomHintAnimation(false);
                  }}
                >
                  <span className="wf-tab-long">{project.tab1LabelLong}</span>
                  <span className="wf-tab-short">{project.tab1LabelShort}</span>
                </button>
                <button 
                  className={`wf-modal-tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab('tab2');
                    setActiveImageIndex(0);
                    setShowZoomHintAnimation(false);
                  }}
                >
                  <span className="wf-tab-long">{project.tab2LabelLong}</span>
                  <span className="wf-tab-short">{project.tab2LabelShort}</span>
                </button>
              </div>

              <div className="wf-modal-gallery-container">
                <div 
                  className="wf-modal-gallery-view"
                  style={{
                    '--gallery-bg': `url(${project.cardImage})`,
                    '--gallery-bg-pos': project.watermarkPosition || 'center'
                  } as React.CSSProperties}
                >
                  <motion.img 
                    src={
                      activeTab === 'tab1' 
                        ? (project.tab1Images ? project.tab1Images[activeImageIndex] : '') 
                        : (project.tab2Images ? project.tab2Images[activeImageIndex] : '')
                    } 
                    className="wf-modal-gallery-img" 
                    alt="Screenshot" 
                    onClick={() => {
                      setIsZoomed(true);
                      setShowZoomHintAnimation(false);
                    }}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  />
                  <div className="wf-zoom-hint-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                    <span>Ampliar</span>
                  </div>

                  <AnimatePresence>
                    {showZoomHintAnimation && (
                      <motion.div
                        className="wf-virtual-click-hint"
                        initial={{ x: 60, y: 60, opacity: 0, scale: 1.2 }}
                        animate={{
                          x: [60, 0, 0, 0],
                          y: [60, 0, 0, 0],
                          opacity: [0, 1, 1, 0],
                          scale: [1.2, 1, 0.82, 1]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 1.7,
                          ease: 'easeInOut',
                          times: [0, 0.7, 0.82, 1]
                        }}
                      >
                        <motion.span 
                          className="wf-virtual-click-ripple"
                          animate={{
                            scale: [0.6, 2.0],
                            opacity: [0, 0.7, 0]
                          }}
                          transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 1.2
                          }}
                        />
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                          <path d="M13 13l6 6" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="wf-modal-gallery-nav">
                  {activeTab === 'tab1' 
                    ? project.tab1Images?.map((img, idx) => (
                        <button 
                          key={idx}
                          className={`wf-modal-gallery-thumb ${activeImageIndex === idx ? 'active' : ''}`}
                          onClick={() => {
                            setActiveImageIndex(idx);
                            setShowZoomHintAnimation(false);
                          }}
                        >
                          <img src={img} alt={`Thumb 1 ${idx + 1}`} />
                        </button>
                      ))
                    : project.tab2Images?.map((img, idx) => (
                        <button 
                          key={idx}
                          className={`wf-modal-gallery-thumb ${activeImageIndex === idx ? 'active' : ''}`}
                          onClick={() => {
                            setActiveImageIndex(idx);
                            setShowZoomHintAnimation(false);
                          }}
                        >
                          <img src={img} alt={`Thumb 2 ${idx + 1}`} />
                        </button>
                      ))
                  }
                </div>
              </div>
            </>
          ) : project.modalImage ? (
            <img src={project.modalImage} alt={project.title} className="wf-modal-video__img" />
          ) : (
            <div className="wf-modal-video__placeholder">
              <div className="wf-modal-video__overlay">
                <span className="wf-modal-video__label">SISTEMA ATIVO // MODO_SPOILER</span>
              </div>
              <div className="wf-modal-video__mock">
                <div className="wf-modal-video__scanline" />
                <span className="wf-modal-video__play-icon">▶</span>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div 
          className="wf-modal-info"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="wf-modal-info__header">
            <div className="wf-modal-info__num">{project.id}</div>
            <h2 className="wf-modal-info__title">{project.title}</h2>
            <div className="wf-modal-info__techs">
              {project.techs.map(tech => (
                <span key={tech} className="wf-tech-badge">{tech}</span>
              ))}
            </div>
          </div>
          <p className="wf-modal-info__desc">
            {project.details || project.description}
          </p>
          <div className="wf-modal-info__actions">
            <a href={project.link} className="wf-btn wf-btn--primary" target="_blank" rel="noopener noreferrer">ACESSAR PROJETO ↗</a>
            <a href={project.github} className="wf-btn wf-btn--outline" target="_blank" rel="noopener noreferrer">VER CÓDIGO NO GITHUB</a>
          </div>
        </motion.div>
      </motion.div>

      {/* Fullscreen Zoom Overlay */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="wf-gallery-zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.img
              src={
                activeTab === 'tab1' 
                  ? (project.tab1Images ? project.tab1Images[activeImageIndex] : '') 
                  : (project.tab2Images ? project.tab2Images[activeImageIndex] : '')
              }
              alt="Zoomed Screenshot"
              className="wf-gallery-zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default ProjectModal;
