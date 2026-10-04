import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[110] pointer-events-none bg-white/[0.03]">
      <motion.div
        className="h-full bg-gradient-to-r from-accent via-amber-400 to-accent origin-left relative"
        style={{ scaleX }}
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full blur-sm opacity-80" />
      </motion.div>
    </div>
  );
}
