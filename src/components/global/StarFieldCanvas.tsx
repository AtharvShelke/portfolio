import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  period: number;
  phase: number;
  depth: number;
}

export const StarFieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let isVisible = true;
    let scrollY = window.scrollY;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 60 : 120;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initStars(width, height);
    };

    const initStars = (width: number, height: number) => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 0.7 + 0.8, // 0.8 - 1.5px
          baseOpacity: Math.random() * 0.35 + 0.15, // 0.15 - 0.50
          period: Math.random() * 6000 + 3000, // 3 - 9s cycle
          phase: Math.random() * Math.PI * 2,
          depth: Math.random() * 0.3 + 0.05, // subtle scroll parallax multiplier
        });
      }
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resize);
    resize();

    // Visibility observer to pause when offscreen
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Calculate twinkle
        let opacity = star.baseOpacity;
        if (!prefersReducedMotion) {
          const sine = Math.sin((time / star.period) * Math.PI * 2 + star.phase);
          opacity = star.baseOpacity + sine * 0.25;
          opacity = Math.max(0.08, Math.min(0.75, opacity));
        }

        // Slight parallax displacement with wrapping
        let currentY = (star.y - scrollY * star.depth) % height;
        if (currentY < 0) currentY += height;

        ctx.fillStyle = `rgba(244, 246, 248, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, currentY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle faint blue halo on a select few stars (top 15%)
        if (star.size > 1.25) {
          ctx.fillStyle = `rgba(110, 168, 255, ${opacity * 0.4})`;
          ctx.beginPath();
          ctx.arc(star.x, currentY, star.size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
