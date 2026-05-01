import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Provides a GSAP context scoped to a container ref.
 * Automatically handles cleanup on unmount.
 */
export function useGsap(callback: (ctx: gsap.Context) => void, deps: any[] = []) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      callback(ctx);
    }, containerRef);

    return () => ctx.revert();
  }, deps);

  return containerRef;
}

export { gsap, ScrollTrigger };
