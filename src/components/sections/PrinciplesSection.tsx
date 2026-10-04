import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PrincipleItem {
  id: string;
  name: string;
  definition: string;
  detail: string;
}

const principles: PrincipleItem[] = [
  {
    id: 'precise',
    name: 'Precise',
    definition: 'Deterministic engineering over speculative guesswork.',
    detail: 'Every interface and algorithm is calibrated with strict mathematical tolerance and zero fluff.',
  },
  {
    id: 'ambitious',
    name: 'Ambitious',
    definition: 'Solving structural bottlenecks that define entire industries.',
    detail: 'We build for enterprise scale and multi-decade leverage from the very first commit.',
  },
  {
    id: 'reliable',
    name: 'Reliable',
    definition: 'Resilient fault tolerance engineered into every layer.',
    detail: 'Mission-critical systems that execute flawlessly through unpredictable spikes and network volatility.',
  },
  {
    id: 'intelligent',
    name: 'Intelligent',
    definition: 'Context-aware automation that adapts to complex data signals.',
    detail: 'Transforming raw telemetry into high-conviction decisions with sub-second response times.',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    definition: 'Relentless subtraction of unnecessary friction.',
    detail: 'The purest architecture is not when there is nothing left to add, but when nothing can be removed.',
  },
  {
    id: 'forward-looking',
    name: 'Forward-looking',
    definition: 'Anchored by the North Star, architected for what comes next.',
    detail: 'Pioneering paradigms that outlast transient hype cycles and compound in enduring value.',
  },
];

export const PrinciplesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Auto-cycle every 2.5s when idle
  useEffect(() => {
    if (isUserInteracting) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % principles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const activePrinciple = principles[activeIndex];

  return (
    <section
      id="principles"
      className="relative min-h-screen w-full py-28 bg-[#070B14] select-none flex items-center overflow-hidden"
    >
      {/* 1. BACKGROUND LOOP: Horizontal Scan Line & Blinking Intersections */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        {/* Horizontal Slow Scan Line */}
        <motion.div
          animate={{ y: ['-10%', '110%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#6EA8FF] to-transparent shadow-[0_0_10px_#6EA8FF]"
        />

        {/* Blinking Grid Intersections */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-[#8DEBFF] animate-ping opacity-30" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-[#6EA8FF] animate-pulse opacity-40" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 w-full relative z-10">
        <div className="eyebrow text-[#6EA8FF] mb-4">
          05 // CORE PRINCIPLES
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F6F8] mb-12">
          The invariant standard
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Stacked Interactive Keywords */}
          <div
            className="lg:col-span-7 flex flex-col space-y-3"
            onMouseEnter={() => setIsUserInteracting(true)}
            onMouseLeave={() => setIsUserInteracting(false)}
          >
            {principles.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="relative flex items-center cursor-pointer group py-1"
                >
                  {/* Sliding 4-Point Star Marker via Framer Motion layoutId */}
                  {isActive && (
                    <motion.div
                      layoutId="principle-star-marker"
                      transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                      className="absolute -left-6 sm:-left-8 flex items-center justify-center text-[#6EA8FF]"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_0_8px_#6EA8FF]">
                        <path
                          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                          fill="#8DEBFF"
                        />
                      </svg>
                    </motion.div>
                  )}

                  {/* Keyword Title */}
                  <motion.span
                    animate={{
                      x: isActive ? 24 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                    className={`font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight transition-colors duration-200 ${
                      isActive
                        ? 'text-[#F4F6F8]'
                        : 'text-[#667085] group-hover:text-[#94A3B8]'
                    }`}
                  >
                    {item.name}
                  </motion.span>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Principle Card Definition */}
          <div className="lg:col-span-5">
            <div className="relative p-8 rounded-2xl bg-[#0D1422] border border-[#202B3D] min-h-[260px] flex flex-col justify-between shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePrinciple.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-xs font-mono text-[#6EA8FF] uppercase tracking-widest mb-3">
                    PRINCIPLE 0{activeIndex + 1}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F4F6F8] mb-3">
                    {activePrinciple.definition}
                  </h3>

                  <p className="text-sm text-[#667085] leading-relaxed">
                    {activePrinciple.detail}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress bar indicator for active principle */}
              <div className="pt-6 border-t border-[#202B3D] flex items-center justify-between text-xs font-mono text-[#667085]">
                <span>0{activeIndex + 1} / 0{principles.length}</span>
                <div className="flex gap-1.5">
                  {principles.map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-1 rounded-full transition-colors duration-300 ${
                        i === activeIndex ? 'bg-[#6EA8FF]' : 'bg-[#202B3D]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
