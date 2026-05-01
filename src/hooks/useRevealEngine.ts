import { useEffect } from 'react';

/**
 * RevealEngine — Orquestra animações de entrada baseadas em scroll.
 * Usa IntersectionObserver para detectar quando elementos com [data-reveal]
 * entram na viewport e aplica a classe 'revealed' com delay configurável.
 * 
 * Também gerencia build-lines e energy-connectors.
 */
export function useRevealEngine() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight - 50) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || '0', 10);
            setTimeout(() => el.classList.add('revealed'), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Build lines
    const buildLineObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight - 50) {
            (entry.target as HTMLElement).classList.add('revealed');
            buildLineObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const buildLines = document.querySelectorAll('[data-build-line]');
    buildLines.forEach((el) => buildLineObs.observe(el));

    // Energy connectors
    const connectorObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('revealed');
            connectorObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const connectors = document.querySelectorAll('.energy-connector');
    connectors.forEach((el) => connectorObs.observe(el));

    return () => {
      observer.disconnect();
      buildLineObs.disconnect();
      connectorObs.disconnect();
    };
  }, []);
}
