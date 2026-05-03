import { useEffect } from 'react';

/**
 * useCardSpotlight — Efeito de luz que segue o mouse em .glass-card.
 * Usa delegação de eventos + requestAnimationFrame para performance.
 */
export function useCardSpotlight() {
  useEffect(() => {
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, target } = e;

      if (rafId) return;

      rafId = window.requestAnimationFrame(() => {
        const card = (target as HTMLElement).closest('.spotlight-card') as HTMLElement | null;

        if (card) {
          const rect = card.getBoundingClientRect();
          const x = clientX - rect.left;
          const y = clientY - rect.top;

          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }

        rafId = null;
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
}
