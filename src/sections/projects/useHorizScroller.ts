import { useEffect, useState } from 'react';
import type { RefObject } from 'react';
import { useMotionValue, animate, MotionValue } from 'framer-motion';

interface UseHorizScrollerReturn {
  scrollProgressPct: number;
  xDrag: MotionValue<number>;
}

export function useHorizScroller(
  scrollerRef: RefObject<HTMLDivElement | null>,
  contentRef: RefObject<HTMLDivElement | null>
): UseHorizScrollerReturn {
  const [scrollProgressPct, setScrollProgressPct] = useState(0);
  const xDrag = useMotionValue(0);

  useEffect(() => {
    const viewport = scrollerRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    let isDragging = false;
    let startX = 0;
    let startTranslateX = 0;
    const dragThreshold = 5;
    let hasDraggedPassedThreshold = false;

    // Inertia variables
    let lastX = 0;
    let lastTime = 0;
    let velocity = 0;

    const getMaxScroll = () => {
      const viewportWidth = viewport.offsetWidth;
      const contentWidth = content.scrollWidth;
      return Math.min(0, -(contentWidth - viewportWidth));
    };

    // Initialize/Reset positioning on mount
    xDrag.set(0);
    setScrollProgressPct(0);
    if (window.innerWidth >= 1000) {
      viewport.style.cursor = 'grab';
    }

    const handleStart = (clientX: number) => {
      isDragging = true;
      startX = clientX;
      startTranslateX = xDrag.get();
      hasDraggedPassedThreshold = false;
      viewport.style.cursor = 'grabbing';
      document.body.classList.add('is-dragging-projects');
      
      xDrag.stop(); // Stop any active inertial animations
      lastX = clientX;
      lastTime = performance.now();
      velocity = 0;
    };

    const handleMove = (clientX: number) => {
      if (!isDragging) return;
      const deltaX = clientX - startX;
      
      if (Math.abs(deltaX) > dragThreshold) {
        hasDraggedPassedThreshold = true;
      }
      
      let newTranslateX = startTranslateX + deltaX;
      const maxScroll = getMaxScroll();

      // Elastic boundary resistance
      if (newTranslateX > 0) {
        newTranslateX = newTranslateX * 0.25;
      } else if (newTranslateX < maxScroll) {
        newTranslateX = maxScroll + (newTranslateX - maxScroll) * 0.25;
      }

      xDrag.set(newTranslateX);

      // Track velocity
      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 0) {
        const instantVelocity = (clientX - lastX) / dt;
        velocity = velocity * 0.7 + instantVelocity * 0.3; // Low-pass filter to smooth out sudden ticks
      }
      lastX = clientX;
      lastTime = now;

      // Update progress bar
      const totalDist = Math.abs(maxScroll);
      if (totalDist > 0) {
        const pct = Math.min(100, Math.max(0, (Math.abs(newTranslateX) / totalDist) * 100));
        setScrollProgressPct(pct);
      }
    };

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      viewport.style.cursor = 'grab';
      document.body.classList.remove('is-dragging-projects');

      // Snap back if out of bounds
      const maxScroll = getMaxScroll();
      const currentX = xDrag.get();
      if (currentX > 0) {
        animate(xDrag, 0, { type: 'spring', stiffness: 300, damping: 30 });
        setScrollProgressPct(0);
      } else if (currentX < maxScroll) {
        animate(xDrag, maxScroll, { type: 'spring', stiffness: 300, damping: 30 });
        setScrollProgressPct(100);
      } else {
        // Within bounds: Apply inertia glide
        if (Math.abs(velocity) > 0.15) {
          const glideDistance = velocity * 220; // 220ms time constant
          let targetX = currentX + glideDistance;
          targetX = Math.max(maxScroll, Math.min(0, targetX));

          animate(xDrag, targetX, {
            type: 'spring',
            stiffness: 70, // Smooth gliding stiffness
            damping: 22,   // Prevent springy bouncing
            onUpdate: (latest) => {
              const totalDist = Math.abs(maxScroll);
              if (totalDist > 0) {
                const pct = Math.min(100, Math.max(0, (Math.abs(latest) / totalDist) * 100));
                setScrollProgressPct(pct);
              }
            }
          });
        }
      }

      // Block click propagation if we dragged
      if (hasDraggedPassedThreshold) {
        const preventClick = (e: MouseEvent) => {
          e.stopImmediatePropagation();
          window.removeEventListener('click', preventClick, true);
        };
        window.addEventListener('click', preventClick, true);
      }
    };

    // Desktop: Drag anywhere in the projects section
    const onMouseDown = (e: MouseEvent) => {
      if (window.innerWidth < 1000) return; // Only desktop
      if (e.button !== 0) return; // Only left click
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) return;
      handleStart(e.clientX);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1000) return;
      handleMove(e.clientX);
    };

    const onMouseUp = () => {
      if (window.innerWidth < 1000) return;
      handleEnd();
    };

    // Trackpad / Mouse Wheel Horizontal Scroll support on desktop
    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1000) return;
      if (Math.abs(e.deltaX) === 0) return; // Only process horizontal scroll wheel/trackpad

      const maxScroll = getMaxScroll();
      let newTranslateX = xDrag.get() - e.deltaX;
      
      // Clamp boundaries
      newTranslateX = Math.max(maxScroll, Math.min(0, newTranslateX));
      xDrag.set(newTranslateX);

      const totalDist = Math.abs(maxScroll);
      if (totalDist > 0) {
        const pct = Math.min(100, Math.max(0, (Math.abs(newTranslateX) / totalDist) * 100));
        setScrollProgressPct(pct);
      }
    };

    // Mobile: native scroll tracking
    const handleMobileScroll = () => {
      if (window.innerWidth >= 1000) return;
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const pct = maxScroll > 0 ? (viewport.scrollLeft / maxScroll) * 100 : 0;
      setScrollProgressPct(pct);
    };

    // Bind event listeners
    viewport.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    viewport.addEventListener('wheel', onWheel, { passive: true });

    viewport.addEventListener('scroll', handleMobileScroll, { passive: true });

    // Handle resize
    const handleResize = () => {
      const maxScroll = getMaxScroll();
      if (window.innerWidth >= 1000) {
        viewport.style.cursor = 'grab';
        if (xDrag.get() < maxScroll) {
          xDrag.set(maxScroll);
        }
      } else {
        viewport.style.cursor = '';
        // Reset translate on mobile, let CSS/native scroll handle it
        xDrag.set(0);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      viewport.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      viewport.removeEventListener('wheel', onWheel);

      viewport.removeEventListener('scroll', handleMobileScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollerRef, contentRef, xDrag]);

  return { scrollProgressPct, xDrag };
}
