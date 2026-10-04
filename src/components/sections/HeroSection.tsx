import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useBrand } from '../../lib/brandContext';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  onExploreProducts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onExploreProducts,
}) => {
  const { purposeLine, coordinates } = useBrand();
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax layers
  const mountainNearX = useTransform(smoothMouseX, [-500, 500], [-18, 18]);
  const mountainMidX = useTransform(smoothMouseX, [-500, 500], [-10, 10]);
  const mountainFarX = useTransform(smoothMouseX, [-500, 500], [-4, 4]);
  const starParallaxX = useTransform(smoothMouseX, [-500, 500], [6, -6]);
  const starParallaxY = useTransform(smoothMouseY, [-500, 500], [6, -6]);

  const [starProximity, setStarProximity] = useState(1);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);

    // Calculate proximity to star (approx right side center)
    const starTargetX = rect.width * 0.75;
    const starTargetY = rect.height * 0.35;
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    const dist = Math.hypot(currentX - starTargetX, currentY - starTargetY);
    const maxDist = rect.width * 0.5;
    const prox = Math.max(1, 1.8 - dist / maxDist);
    setStarProximity(prox);
  };

  const scrollToManifesto = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('manifesto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 overflow-hidden select-none"
    >
      {/* 1. SCENE: Celestial Mountain Silhouettes & Luminous North Star Path */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Perspective Grid on Ground */}
        <div className="absolute bottom-0 inset-x-0 h-80 opacity-20 [perspective:600px] overflow-hidden">
          <div className="w-full h-full [transform:rotateX(65deg)] origin-bottom bg-[linear-gradient(to_right,#202B3D_1px,transparent_1px),linear-gradient(to_bottom,#202B3D_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]" />
        </div>

        {/* Far Mountains Silhouette Layer */}
        <motion.div
          style={{ x: mountainFarX }}
          className="absolute bottom-16 right-0 w-full md:w-[70%] h-64 opacity-35"
        >
          <svg
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
            className="w-full h-full text-[#0D1422] fill-current"
          >
            <path d="M0 300L120 180L240 230L380 140L520 220L660 110L800 200L920 130L1000 190L1000 300Z" />
          </svg>
        </motion.div>

        {/* Mid Mountains Silhouette Layer */}
        <motion.div
          style={{ x: mountainMidX }}
          className="absolute bottom-8 right-0 w-full md:w-[65%] h-56 opacity-60"
        >
          <svg
            viewBox="0 0 1000 260"
            preserveAspectRatio="none"
            className="w-full h-full text-[#080E1A] fill-current"
          >
            <path d="M0 260L160 170L310 210L470 110L620 190L770 120L910 180L1000 130L1000 260Z" />
          </svg>
        </motion.div>

        {/* Near Mountains Silhouette Layer */}
        <motion.div
          style={{ x: mountainNearX }}
          className="absolute bottom-0 right-0 w-full md:w-[60%] h-44 opacity-90"
        >
          <svg
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            className="w-full h-full text-[#070B14] fill-current"
          >
            <path d="M0 200L140 130L290 170L460 90L610 150L780 80L930 140L1000 110L1000 200Z" />
          </svg>
        </motion.div>

        {/* Winding Luminous Vector Path */}
        <div className="absolute right-0 bottom-0 w-full md:w-[60%] h-[75%]">
          <svg
            viewBox="0 0 800 600"
            fill="none"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Background Path Glow */}
            <motion.path
              d="M 580 190 C 560 270, 480 340, 520 420 C 560 500, 380 540, 200 600"
              stroke="url(#pathGlowGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              className="opacity-40 blur-md"
            />

            {/* Sharp Luminous Core Path */}
            <motion.path
              d="M 580 190 C 560 270, 480 340, 520 420 C 560 500, 380 540, 200 600"
              stroke="url(#pathSharpGrad)"
              strokeWidth="2"
              strokeDasharray="1200"
              initial={{ strokeDashoffset: 1200 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            />

            {/* Traveling Light Pulse on Path */}
            <motion.path
              d="M 580 190 C 560 270, 480 340, 520 420 C 560 500, 380 540, 200 600"
              stroke="#8DEBFF"
              strokeWidth="4"
              strokeDasharray="60 1000"
              strokeLinecap="round"
              className="opacity-80 blur-[1px]"
              animate={{
                strokeDashoffset: [1200, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Sequential Nodes along the path */}
            <circle cx="580" cy="190" r="3" fill="#8DEBFF" className="animate-ping opacity-60" />
            <circle cx="535" cy="310" r="2.5" fill="#6EA8FF" />
            <circle cx="510" cy="410" r="3" fill="#8DEBFF" />
            <circle cx="430" cy="510" r="2.5" fill="#6EA8FF" />

            <defs>
              <linearGradient id="pathGlowGrad" x1="580" y1="190" x2="200" y2="600" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8DEBFF" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#6EA8FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#202B3D" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="pathSharpGrad" x1="580" y1="190" x2="200" y2="600" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8DEBFF" />
                <stop offset="50%" stopColor="#6EA8FF" />
                <stop offset="100%" stopColor="#202B3D" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Descending Vertical Light Beam from North Star */}
        <div className="absolute top-[28%] md:top-[22%] right-[22%] md:right-[26%] w-[2px] h-[55%] pointer-events-none">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full origin-top bg-gradient-to-b from-[#8DEBFF]/80 via-[#6EA8FF]/40 to-transparent shadow-[0_0_12px_rgba(110,168,255,0.8)]"
          />
          {/* Subtle beam shimmer */}
          <div className="absolute inset-0 w-8 -left-4 bg-gradient-to-b from-[#6EA8FF]/20 via-[#8DEBFF]/10 to-transparent blur-md animate-[beamShimmer_9s_easeInOut_infinite]" />
        </div>

        {/* Upward Drifting Light Dust Particles */}
        <div className="absolute top-[25%] right-[22%] md:right-[26%] w-12 h-64 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#8DEBFF]"
              style={{
                left: `${(i * 18) % 36}px`,
                bottom: 0,
              }}
              animate={{
                y: [-20, -220],
                opacity: [0, 0.8, 0],
                scale: [0.6, 1.2, 0.4],
              }}
              transition={{
                duration: 5 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* The Bright Four-Point North Star */}
        <motion.div
          style={{ x: starParallaxX, y: starParallaxY }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: starProximity, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[26%] md:top-[20%] right-[21%] md:right-[25.2%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center pointer-events-none"
        >
          {/* Star Radial Flare */}
          <div className="absolute w-44 h-44 rounded-full bg-[#6EA8FF]/15 blur-2xl animate-[starBreathe_6s_easeInOut_infinite]" />
          <div className="absolute w-24 h-24 rounded-full bg-[#8DEBFF]/25 blur-lg" />

          {/* Cross Flare Sweeps */}
          <div className="absolute w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#8DEBFF] to-transparent opacity-75" />
          <div className="absolute h-36 w-[1.5px] bg-gradient-to-b from-transparent via-[#8DEBFF] to-transparent opacity-75" />

          {/* 4-Point Compass Star Polygon */}
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 text-[#8DEBFF] drop-shadow-[0_0_16px_#6EA8FF]"
          >
            <path
              d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z"
              fill="#F4F6F8"
              stroke="#8DEBFF"
              strokeWidth="0.6"
            />
            <circle cx="12" cy="12" r="2.2" fill="#6EA8FF" />
          </svg>
        </motion.div>
      </div>

      {/* 2. MAIN CONTENT (Hero Left-Aligned Composition) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-block"
          >
            <div className="flex items-center gap-3">
              <span className="eyebrow text-[#6EA8FF]">
                {purposeLine}
              </span>
              <div className="w-12 h-[1px] bg-[#6EA8FF]/50" />
            </div>
          </motion.div>

          {/* Big Confident Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-7xl lg:text-[92px] font-bold tracking-[-0.035em] leading-[0.94] text-[#F4F6F8]"
            >
              Technology <br />
              <span className="gradient-text-drifting">with direction.</span>
            </motion.h1>
          </div>

          {/* Body Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-[#667085] leading-relaxed max-w-xl mb-10 font-normal"
          >
            We build intelligent software that helps businesses capture opportunities, automate operations, and move forward.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            {/* Primary CTA */}
            <button
              onClick={onExploreProducts}
              className="group h-12 px-7 rounded-xl bg-[#6EA8FF] hover:bg-[#8DEBFF] text-[#070B14] font-semibold text-sm tracking-tight inline-flex items-center gap-2.5 transition-all duration-200 shadow-[0_0_24px_rgba(110,168,255,0.3)] focus:outline-none"
            >
              <span>Explore our products</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA */}
            <a
              href="#manifesto"
              onClick={scrollToManifesto}
              className="group relative text-sm font-medium text-[#F4F6F8] hover:text-[#8DEBFF] transition-colors py-2"
            >
              <span className="inline-flex items-center gap-1.5">
                Learn more <span className="text-[#6EA8FF]">→</span>
              </span>
              {/* Underline segment */}
              <div className="absolute bottom-1 left-0 right-0 h-[1px] bg-[#202B3D]">
                <div className="w-6 group-hover:w-full h-full bg-[#6EA8FF] transition-all duration-300" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* 3. RIGHT EDGE VERTICAL KEYWORDS */}
      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[10px] font-mono tracking-[0.25em] text-[#667085]/60 select-none">
        <span>PEOPLE</span>
        <span className="w-1 h-1 rounded-full bg-[#202B3D]" />
        <span>IDEAS</span>
        <span className="w-1 h-1 rounded-full bg-[#202B3D]" />
        <span>OPERATIONS</span>
        <span className="w-1 h-1 rounded-full bg-[#202B3D]" />
        <span>A BRIGHTER</span>
        <span className="w-1 h-1 rounded-full bg-[#202B3D]" />
        <span className="text-[#6EA8FF]/80">TOMORROW</span>
      </div>

      {/* 4. BOTTOM BAR: STATS ROW (LEFT) & COORDINATES (RIGHT) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full pt-12 border-t border-[#202B3D]/40 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        {/* Three Truthful Stats / Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
          <div className="pr-6 md:border-r border-[#202B3D]/60">
            <div className="font-display text-2xl font-bold text-[#F4F6F8]">
              03 Systems
            </div>
            <div className="text-xs text-[#667085] mt-0.5">
              In Architecture Roadmap
            </div>
          </div>

          <div className="pr-6 md:border-r border-[#202B3D]/60">
            <div className="font-display text-2xl font-bold text-[#F4F6F8]">
              99.99%
            </div>
            <div className="text-xs text-[#667085] mt-0.5">
              Target Engine Availability
            </div>
          </div>

          <div>
            <div className="font-display text-2xl font-bold text-[#F4F6F8]">
              &lt; 120ms
            </div>
            <div className="text-xs text-[#667085] mt-0.5">
              Mean Decision Latency
            </div>
          </div>
        </div>

        {/* Coordinates Label */}
        <div className="text-xs font-mono text-[#667085] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FF] animate-pulse" />
          <span>{coordinates}</span>
        </div>
      </motion.div>
    </section>
  );
};
