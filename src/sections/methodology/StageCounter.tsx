import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StageCounterProps {
  id: string;
  isActive: boolean;
}

export function StageCounter({ id, isActive }: StageCounterProps) {
  // Inicializa com o próprio ID para o primeiro estágio para evitar o "00"
  const [displayId, setDisplayId] = useState(id === "01" ? "01" : "00");
  const directionRef = useRef(1);

  useEffect(() => {
    if (isActive) {
      if (displayId !== id) {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const timer = setTimeout(() => {
          directionRef.current = 1;
          setDisplayId(id);
        }, isMobile ? 80 : 150);
        return () => clearTimeout(timer);
      }
    }
    // Removemos o reset para "00" ao ficar inativo para manter o ID no background
  }, [isActive, id, displayId]);

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  return (
    <div className="methodology__window-step">
      <span>STAGE</span>
      <div className="stage-number-wrap">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={displayId}
            initial={{ y: directionRef.current > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: directionRef.current > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ 
              duration: isMobile ? 0.3 : 0.5, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{ 
              position: 'absolute', 
              left: 0,
              top: 0,
              display: 'block',
              width: '100%'
            }}
          >
            {displayId}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
