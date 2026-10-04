import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';

interface DirectionMode {
  id: string;
  title: string;
  bearing: number;
  bearingLabel: string;
  headline: string;
  description: string;
  stats: string;
  pathNodes: { x: number; y: number }[];
}

const directionModes: DirectionMode[] = [
  {
    id: 'capture',
    title: 'Capture opportunities',
    bearing: 45,
    bearingLabel: '045° NE · ACQUISITION BEARING',
    headline: 'Zero lead loss across every inbound vector.',
    description:
      'Instantly ingest, enrich, score, and dispatch buyer signals directly to designated revenue pipelines before momentum cools.',
    stats: '120ms Ingestion Latency · 100% Attribution Precision',
    pathNodes: [
      { x: 30, y: 120 },
      { x: 90, y: 80 },
      { x: 170, y: 110 },
      { x: 250, y: 50 },
    ],
  },
  {
    id: 'automate',
    title: 'Automate operations',
    bearing: 180,
    bearingLabel: '180° S · DETERMINISTIC FLOW',
    headline: 'Eliminate manual bottlenecks with autonomous execution.',
    description:
      'Bridge siloed systems, orchestrate high-throughput event queues, and automate multi-step operational logic with zero downtime.',
    stats: '99.99% Reliability SLA · End-to-End Encryption',
    pathNodes: [
      { x: 30, y: 60 },
      { x: 100, y: 130 },
      { x: 180, y: 70 },
      { x: 250, y: 140 },
    ],
  },
  {
    id: 'forward',
    title: 'Move forward',
    bearing: 315,
    bearingLabel: '315° NW · EXPONENTIAL SCALE',
    headline: 'Architect durable leverage for long-term category leadership.',
    description:
      'Unify intelligence, execution, and customer telemetry into a single compounding growth engine aligned to your North Star.',
    stats: '10x Throughput Capacity · Zero Linear Headcount Need',
    pathNodes: [
      { x: 30, y: 140 },
      { x: 90, y: 110 },
      { x: 160, y: 80 },
      { x: 250, y: 30 },
    ],
  },
];

interface FindDirectionProps {
  onOpenContact: () => void;
}

export const FindDirectionSection: React.FC<FindDirectionProps> = ({ onOpenContact }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = directionModes[selectedIdx];

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      setSelectedIdx((prev) => (prev + 1) % directionModes.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      setSelectedIdx((prev) => (prev - 1 + directionModes.length) % directionModes.length);
    }
  };

  return (
    <section
      id="direction"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative min-h-screen w-full py-28 bg-[#070B14] select-none flex items-center overflow-hidden focus:outline-none"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 w-full relative z-10">
        {/* Eyebrow & Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow text-[#6EA8FF] mb-3">
            06 // INTERACTIVE INSTRUMENT
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#F4F6F8] tracking-tight mb-4">
            Find your direction
          </h2>
          <p className="text-sm sm:text-base text-[#667085]">
            Align operational capabilities with strategic outcomes using the interactive celestial compass.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: SVG Celestial Compass Instrument */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-[#0D1422] border border-[#202B3D] p-6 shadow-2xl flex items-center justify-center">
              {/* Outer Ticked Ring */}
              <div className="absolute inset-4 rounded-full border border-[#202B3D]/80">
                {/* 36 Tick Marks */}
                {[...Array(36)].map((_, i) => {
                  const isMajor = i % 9 === 0;
                  return (
                    <div
                      key={i}
                      className={`absolute top-0 left-1/2 -translate-x-1/2 ${
                        isMajor ? 'w-[1.5px] h-3 bg-[#6EA8FF]' : 'w-[1px] h-1.5 bg-[#202B3D]'
                      }`}
                      style={{
                        transform: `rotate(${i * 10}deg) translateY(0px)`,
                        transformOrigin: '50% 194px',
                      }}
                    />
                  );
                })}

                {/* Cardinal Points */}
                <span className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[11px] font-bold text-[#6EA8FF]">
                  N
                </span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] text-[#667085]">
                  S
                </span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[11px] text-[#667085]">
                  E
                </span>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[11px] text-[#667085]">
                  W
                </span>
              </div>

              {/* Inner Dial Glass */}
              <div className="absolute inset-16 rounded-full border border-[#202B3D]/50 bg-[#070B14]/40 backdrop-blur-sm flex items-center justify-center" />

              {/* Rotating Compass Slender Needle */}
              <motion.div
                animate={{ rotate: active.bearing }}
                transition={{ type: 'spring', stiffness: 90, damping: 14 }}
                className="relative w-full h-full flex items-center justify-center pointer-events-none z-10"
              >
                {/* Magnetic settlement subtle oscillation loop */}
                <div className="relative w-12 h-64 flex flex-col items-center justify-between animate-[starBreathe_4s_easeInOut_infinite]">
                  {/* North Needle Tip (North Star Blue) */}
                  <div className="w-0 h-0 border-x-8 border-x-transparent border-b-[90px] border-b-[#8DEBFF] drop-shadow-[0_0_12px_#6EA8FF]" />
                  {/* Center Node Star */}
                  <div className="w-6 h-6 rounded-full bg-[#0D1422] border-2 border-[#6EA8FF] flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-[#F4F6F8]" />
                  </div>
                  {/* South Needle Tip (Slate) */}
                  <div className="w-0 h-0 border-x-8 border-x-transparent border-t-[90px] border-t-[#202B3D]" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Mode Selectors & Illustrated Path Output */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* 3 Selectable Mode Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8" role="tablist">
              {directionModes.map((mode, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={mode.id}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedIdx(idx)}
                    className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 focus:outline-none ${
                      isSelected
                        ? 'bg-[#6EA8FF] text-[#070B14] font-semibold shadow-[0_0_15px_rgba(110,168,255,0.35)]'
                        : 'bg-[#0D1422] text-[#667085] hover:text-[#F4F6F8] border border-[#202B3D]'
                    }`}
                  >
                    <span>{mode.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Panel with ARIA Live */}
            <div
              aria-live="polite"
              className="p-8 rounded-2xl bg-[#0D1422] border border-[#202B3D] shadow-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8DEBFF] mb-3">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{active.bearingLabel}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F6F8] mb-3 leading-tight">
                    {active.headline}
                  </h3>

                  <p className="text-sm text-[#667085] leading-relaxed mb-6">
                    {active.description}
                  </p>

                  {/* Illustrated Dynamic Node Path */}
                  <div className="p-4 rounded-xl bg-[#070B14] border border-[#202B3D] mb-6">
                    <div className="text-[10px] font-mono text-[#667085] uppercase mb-2">
                      SYSTEM TOPOLOGY PREVIEW
                    </div>
                    <svg viewBox="0 0 280 160" className="w-full h-24">
                      {/* Grid */}
                      <line x1="0" y1="80" x2="280" y2="80" stroke="#202B3D" strokeDasharray="3 3" />
                      {/* Connecting Line */}
                      <path
                        d={`M ${active.pathNodes[0].x} ${active.pathNodes[0].y} Q ${active.pathNodes[1].x} ${active.pathNodes[1].y}, ${active.pathNodes[2].x} ${active.pathNodes[2].y} T ${active.pathNodes[3].x} ${active.pathNodes[3].y}`}
                        stroke="#6EA8FF"
                        strokeWidth="2"
                        fill="none"
                      />
                      {/* Nodes */}
                      {active.pathNodes.map((node, i) => (
                        <circle
                          key={i}
                          cx={node.x}
                          cy={node.y}
                          r={i === 3 ? 5 : 3.5}
                          fill={i === 3 ? '#8DEBFF' : '#6EA8FF'}
                        />
                      ))}
                    </svg>
                    <div className="text-xs font-mono text-[#6EA8FF] mt-2">
                      {active.stats}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#667085]">
                      Deploy customized enterprise solution
                    </span>
                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#6EA8FF] hover:bg-[#8DEBFF] text-[#070B14] font-semibold text-xs transition-colors shadow-[0_0_15px_rgba(110,168,255,0.25)]"
                    >
                      <span>Inquire now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
