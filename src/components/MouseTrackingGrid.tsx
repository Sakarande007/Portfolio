import { useEffect, useRef } from 'react';

export const MouseTrackingGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Grid configuration
    const spacing = 40; // Space between items
    const arrowSize = 6;
    
    // Mouse state
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const drawArrow = (x: number, y: number, angle: number, distanceToMouse: number) => {
      if (!ctx) return;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);

      // Opacity based on distance to mouse - closer arrows are brighter
      const maxDistance = 300;
      let opacity = 0.15; // Base opacity
      
      if (distanceToMouse < maxDistance) {
        // Boost opacity when mouse is close
        opacity += 0.5 * (1 - distanceToMouse / maxDistance);
      }

      ctx.beginPath();
      ctx.moveTo(-arrowSize, -arrowSize);
      ctx.lineTo(arrowSize, 0);
      ctx.lineTo(-arrowSize, arrowSize);
      ctx.lineTo(-arrowSize / 2, 0);
      ctx.closePath();
      
      // Use the primary color from Tailwind config (#00F5FF)
      ctx.fillStyle = `rgba(0, 245, 255, ${opacity})`;
      ctx.fill();
      
      ctx.restore();
    };

    const render = () => {
      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Draw grid
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          const dx = mouseX - x;
          const dy = mouseY - y;
          const angle = Math.atan2(dy, dx);
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          drawArrow(x, y, angle, distance);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-5]"
      style={{ opacity: 0.8 }}
    />
  );
};
