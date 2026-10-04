import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring for outer aura
  const auraX = useSpring(mouseX, { stiffness: 350, damping: 28, mass: 0.1 });
  const auraY = useSpring(mouseY, { stiffness: 350, damping: 28, mass: 0.1 });

  // Direct responsive spring for center pointer
  const dotX = useSpring(mouseX, { stiffness: 900, damping: 40, mass: 0.05 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 40, mass: 0.05 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Outer Smooth Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: auraX,
          y: auraY,
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          backgroundColor: isHovering ? 'rgba(242, 125, 38, 0.18)' : 'transparent',
          border: isHovering ? '1.5px solid rgba(242, 125, 38, 0.6)' : '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: isHovering ? '0 0 25px rgba(242, 125, 38, 0.3)' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: dotX,
          y: dotY,
          backgroundColor: isHovering ? '#F27D26' : '#FFFFFF',
        }}
      />
    </div>
  );
}
