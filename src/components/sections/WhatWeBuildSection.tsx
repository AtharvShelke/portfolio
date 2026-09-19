import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useBrand } from '../../lib/brandContext';
import { Zap, ArrowRight, Lock, Orbit, Compass, Layers } from 'lucide-react';

interface WhatWeBuildProps {
  onOpenLeadCopilot: () => void;
}

export const WhatWeBuildSection: React.FC<WhatWeBuildProps> = ({ onOpenLeadCopilot }) => {
  const { name } = useBrand();

  // 3D Tilt for LeadCopilot live card
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [3, -3]);
  const rotateY = useTransform(mouseX, [0, 1], [-3, 3]);

  // Spotlight border coordinates
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isCardHovered, setIsCardHovered] = useState(false);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    setSpotlightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="products"
      className="relative min-h-screen w-full py-28 bg-[#070B14] select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        {/* Section Eyebrow & Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow text-[#6EA8FF] mb-3">
            04 // PRODUCT ARCHITECTURE
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#F4F6F8] tracking-tight mb-4">
            Systems built for velocity
          </h2>
          <p className="text-sm sm:text-base text-[#667085]">
            Modular, high-throughput software designed to capture high-value signals and orchestrate autonomous business operations.
          </p>
        </div>

        {/* 1. ROOT LOGOTYPE & BRANCHING HAIRLINE TREE */}
        <div className="flex flex-col items-center">
          {/* Brand Root Node */}
          <div className="relative z-20 flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#0D1422] border border-[#202B3D] shadow-lg shadow-black/40">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6EA8FF]">
              <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                fill="#6EA8FF"
              />
            </svg>
            <span className="font-display font-bold text-sm tracking-wider text-[#F4F6F8]">
              {name} CORE
            </span>
          </div>

          {/* Branching SVG Trunk */}
          <div className="w-full max-w-4xl h-24 sm:h-32 -my-2 relative pointer-events-none">
            <svg
              viewBox="0 0 800 120"
              fill="none"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Main Trunk */}
              <line x1="400" y1="0" x2="400" y2="40" stroke="#202B3D" strokeWidth="1.5" />
              {/* Horizontal Split */}
              <line x1="130" y1="40" x2="670" y2="40" stroke="#202B3D" strokeWidth="1.5" />
              {/* 3 Drops to Cards */}
              <line x1="130" y1="40" x2="130" y2="120" stroke="#202B3D" strokeWidth="1.5" />
              <line x1="400" y1="40" x2="400" y2="120" stroke="#202B3D" strokeWidth="1.5" />
              <line x1="670" y1="40" x2="670" y2="120" stroke="#202B3D" strokeWidth="1.5" />

              {/* Looping Light Pulses along Trunk */}
              <circle r="3" fill="#8DEBFF" className="blur-[1px]">
                <animateMotion
                  path="M400,0 L400,40 L130,40 L130,120"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="3" fill="#6EA8FF" className="blur-[1px]">
                <animateMotion
                  path="M400,0 L400,40 L400,120"
                  dur="4s"
                  repeatCount="indefinite"
                  begin="1.2s"
                />
              </circle>
              <circle r="3" fill="#8DEBFF" className="blur-[1px]">
                <animateMotion
                  path="M400,0 L400,40 L670,40 L670,120"
                  dur="4s"
                  repeatCount="indefinite"
                  begin="2.4s"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* 2. THREE PRODUCT NODES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2 items-stretch">
          {/* Product 1: Live LeadCopilot Card with Spotlight Border & 3D Tilt */}
          <motion.div
            ref={cardRef}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            onMouseMove={handleCardMouseMove}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
            onClick={onOpenLeadCopilot}
            className="cursor-pointer relative group rounded-2xl bg-[#0D1422] p-8 border border-[#202B3D] transition-all duration-300 hover:shadow-2xl hover:shadow-[#6EA8FF]/10 flex flex-col justify-between overflow-hidden"
          >
            {/* Dynamic Spotlight Radial Gradient */}
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(110, 168, 255, 0.15), transparent 80%)`,
              }}
            />

            <div>
              {/* Badge + Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#6EA8FF]/10 border border-[#6EA8FF]/30 flex items-center justify-center text-[#6EA8FF] group-hover:scale-110 group-hover:bg-[#6EA8FF] group-hover:text-[#070B14] transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#8DEBFF] bg-[#8DEBFF]/10 px-2.5 py-1 rounded-md border border-[#8DEBFF]/20">
                  ACTIVE DEPLOYMENT
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#F4F6F8] mb-2 group-hover:text-[#8DEBFF] transition-colors">
                LeadCopilot
              </h3>

              <div className="text-sm font-medium text-[#8DEBFF] mb-3">
                Never lose a lead in the noise.
              </div>

              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                Autonomous multi-channel intake and attribution engine that classifies inbound prospects and triggers real-time response workflows within 120ms.
              </p>
            </div>

            <div className="pt-4 border-t border-[#202B3D] flex items-center justify-between text-xs font-semibold text-[#6EA8FF]">
              <span>Explore system capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </motion.div>

          {/* Product 2: Future Node (Product B) */}
          <div className="relative rounded-2xl bg-[#0D1422]/60 p-8 border border-[#202B3D] border-dashed flex flex-col items-center justify-center text-center group hover:border-[#6EA8FF]/40 transition-colors duration-300 min-h-[320px]">
            {/* Rotating Dashed Orbital Ring (40s Loop) */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#202B3D] group-hover:border-[#6EA8FF]/50 animate-[rotateSlowClockwise_40s_linear_infinite] transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-[#070B14] border border-[#202B3D] flex items-center justify-center text-[#667085] group-hover:text-[#8DEBFF] transition-colors">
                <Orbit className="w-6 h-6" />
              </div>
            </div>

            <h3 className="font-display text-xl font-bold text-[#F4F6F8] mb-1">
              OpsDirector
            </h3>
            <div className="text-xs font-mono text-[#667085] uppercase tracking-widest mb-3">
              PRODUCT B · IN R&D
            </div>
            <p className="text-xs text-[#667085] max-w-xs">
              Autonomous orchestration layer for enterprise telemetry, incident routing, and cross-team execution.
            </p>
            <span className="mt-4 text-[11px] font-mono px-3 py-1 rounded-full bg-[#202B3D]/50 text-[#667085]">
              Coming Q3
            </span>
          </div>

          {/* Product 3: Future Node (Product C) */}
          <div className="relative rounded-2xl bg-[#0D1422]/60 p-8 border border-[#202B3D] border-dashed flex flex-col items-center justify-center text-center group hover:border-[#6EA8FF]/40 transition-colors duration-300 min-h-[320px]">
            {/* Rotating Dashed Orbital Ring (40s Loop Counter) */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#202B3D] group-hover:border-[#8DEBFF]/50 animate-[rotateSlowCounter_40s_linear_infinite] transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-[#070B14] border border-[#202B3D] flex items-center justify-center text-[#667085] group-hover:text-[#6EA8FF] transition-colors">
                <Compass className="w-6 h-6" />
              </div>
            </div>

            <h3 className="font-display text-xl font-bold text-[#F4F6F8] mb-1">
              SignalBridge
            </h3>
            <div className="text-xs font-mono text-[#667085] uppercase tracking-widest mb-3">
              PRODUCT C · PLANNED
            </div>
            <p className="text-xs text-[#667085] max-w-xs">
              Deterministic data synchronizer bridging legacy infrastructure with high-fidelity streaming agents.
            </p>
            <span className="mt-4 text-[11px] font-mono px-3 py-1 rounded-full bg-[#202B3D]/50 text-[#667085]">
              Coming Q4
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
