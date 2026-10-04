import { Variants } from 'framer-motion';

export const MOTION_EASINGS = {
  easeOutCubic: [0.33, 1, 0.68, 1] as const,
  easeInOutCubic: [0.65, 0, 0.35, 1] as const,
  smoothSpring: [0.16, 1, 0.3, 1] as const,      // Apple / Linear style smooth spring
  kineticBounce: [0.34, 1.56, 0.64, 1] as const,  // Interactive hover physics
};

export const MOTION_DURATIONS = {
  instant: 0.1,
  fast: 0.2,
  base: 0.35,
  slow: 0.6,
  slower: 0.9,
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      mass: 1,
    },
  },
};

export const fadeInScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: MOTION_DURATIONS.base,
      ease: MOTION_EASINGS.smoothSpring,
    },
  },
};
