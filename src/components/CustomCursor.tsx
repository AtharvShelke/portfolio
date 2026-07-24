import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 450, damping: 30, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const spotX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const spotY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const pointerCoarse = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (pointerCoarse || reducedMotion) {
      setIsDisabled(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="hover"]') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isDisabled || !isVisible) return null;

  return (
    <>
      {/* Ambient Spotlight Follower */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 w-[360px] h-[360px] pointer-events-none z-[40] opacity-35 rounded-full blur-[90px] bg-[radial-gradient(circle_at_center,#F27D26_0%,transparent_70%)]"
        style={{
          x: spotX,
          y: spotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Tactile Cursor Dot */}
      <motion.div
        aria-hidden="true"
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
}
