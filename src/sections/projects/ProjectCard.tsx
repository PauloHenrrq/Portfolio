import React, { useState, useEffect } from 'react';
import { motion, animate, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { ProjectCardProps } from './types';

export function ProjectCard({ project, onBreach }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBreached, setIsBreached] = useState(false);
  
  // Progress logic using Framer Motion for buttery smooth animation
  const progressValue = useMotionValue(0);
  const [progressDisplay, setProgressDisplay] = useState(0);

  // Sync state with motion value for the SVG dash offset
  useEffect(() => {
    return progressValue.on('change', (v) => setProgressDisplay(v));
  }, [progressValue]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);
  const titleX = useTransform(mouseXSpring, [-0.5, 0.5], [-6, 6]);
  const titleY = useTransform(mouseYSpring, [-0.5, 0.5], [-6, 6]);
  const techsX = useTransform(mouseXSpring, [-0.5, 0.5], [-3, 3]);
  const techsY = useTransform(mouseYSpring, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Smoothly animate from current progress to 100
    animate(progressValue, 100, {
      duration: 1.2,
      ease: "linear",
      onComplete: () => {
        setIsBreached(true);
        onBreach(project.id);
      }
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsBreached(false);
    // Smoothly drain progress back to 0 instead of snapping
    animate(progressValue, 0, {
      duration: 0.4,
      ease: "easeOut"
    });
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsBreached(true);
      onBreach(project.id);
    }
  };

  return (
    <motion.div 
      className={`wf-project-card-wrap ${isBreached ? 'breached' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ 
        perspective: 1000,
        '--project-color': project.themeColor || 'var(--color-accent-primary)',
        '--project-glow': project.themeGlow || 'rgba(255, 59, 59, 0.15)'
      } as React.CSSProperties}
    >
      <motion.div 
        className="wf-project-card"
        layoutId={project.id}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02 }}
      >
        <svg className="wf-project-card__border-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect 
            x="0" y="0" width="100" height="100" 
            fill="none" 
            stroke="var(--project-color)" 
            strokeWidth="1.5"
            pathLength="100"
            style={{ 
              strokeDasharray: '100', 
              strokeDashoffset: 100 - progressDisplay,
              opacity: isHovered ? 1 : 0,
              transition: progressDisplay === 0 ? 'opacity 0.3s' : 'none'
            }}
          />
        </svg>

        <AnimatePresence>
          {isBreached && (
            <motion.div 
              className="wf-project-card__flash"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.4 }}
            />
          )}
        </AnimatePresence>

        <div className="wf-project-card__preview">
          {project.cardImage && (
            <img 
              src={project.cardImage} 
              alt={project.title} 
              className="wf-project-card__img" 
              style={{ objectPosition: project.objectPosition || 'center' }} 
            />
          )}
          <div className="wf-project-card__grain" />
          
          <AnimatePresence>
            {isHovered && !isBreached && (
              <motion.div 
                className="wf-project-card__hold-hint"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="wf-hold-label">SEGURE PARA ABRIR</div>
                <div className="wf-hold-progress">{Math.round(progressDisplay)}%</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="wf-project-card__body">
          <motion.div className="wf-project-card__title-wrap" style={{ x: titleX, y: titleY }}>
            <h3 className="wf-project-card__title"><span>{">"}</span> {project.title}</h3>
          </motion.div>
          <p className="wf-project-card__desc">{project.description}</p>
          <motion.div className="wf-project-card__techs" style={{ x: techsX, y: techsY }}>
            {project.techs.map((tech) => (
              <span className="wf-tech-badge" key={tech}>{tech}</span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default ProjectCard;
