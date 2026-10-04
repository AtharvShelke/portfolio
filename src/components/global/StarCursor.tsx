import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const StarCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 260, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check touch device or reduced motion
    const touch = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touch || reduced) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-interactive="true"]');
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, cursorX, cursorY]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="star-cursor pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="relative flex items-center justify-center pointer-events-none"
      >
        {/* Interactive expanding ring */}
        <motion.div
          animate={{
            scale: isHovered ? 1.6 : 0,
            opacity: isHovered ? 0.9 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute w-10 h-10 rounded-full border border-[#6EA8FF]/60 bg-[#6EA8FF]/10 backdrop-blur-[1px]"
        />

        {/* 4-Point Compass Star */}
        <motion.svg
          animate={{
            scale: isHovered ? 1.3 : 1,
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#6EA8FF] drop-shadow-[0_0_8px_rgba(110,168,255,0.8)]"
        >
          {/* 4-Point Star Polygon */}
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="#6EA8FF"
            stroke="#8DEBFF"
            strokeWidth="0.8"
          />
          {/* Center core node */}
          <circle cx="12" cy="12" r="2" fill="#F4F6F8" />
        </motion.svg>
      </motion.div>
    </div>
  );
};
