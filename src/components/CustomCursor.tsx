import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.4, ease: 'power3' });
    
    const xDotTo = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power3' });
    const yDotTo = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power3' });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xDotTo(e.clientX);
      yDotTo(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Add hover effects for links and buttons
    const links = document.querySelectorAll('a, button');
    
    const onMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, backgroundColor: 'rgba(0, 245, 255, 0.2)', duration: 0.3 });
    };
    
    const onMouseLeave = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
    };

    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnter);
        link.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-primary/50 pointer-events-none z-[100] hidden md:block"
        style={{ willChange: 'transform, background-color' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-primary pointer-events-none z-[100] hidden md:block shadow-[0_0_10px_rgba(0,245,255,0.8)]"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};
