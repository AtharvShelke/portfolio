import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    step: '01',
    title: 'Point',
    subtitle: 'Zero In on the North Star',
    description:
      'We establish absolute clarity on core leverage points before writing code. Eliminating speculative friction creates deterministic execution.',
    activeStage: 0,
  },
  {
    step: '02',
    title: 'Path',
    subtitle: 'Engineer the Trajectory',
    description:
      'Architecting resilient automated pipelines and intelligent routing. Every operational step connects directly to business velocity.',
    activeStage: 1,
  },
  {
    step: '03',
    title: 'Progress',
    subtitle: 'Exponential Scale & Autonomy',
    description:
      'Compounding operational gains without linear headcount growth. Systems that self-optimize and guide enterprise momentum forward.',
    activeStage: 2,
  },
];

export const PointPathProgressSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 0.6,
      onUpdate: (self) => {
        const p = self.progress;
        if (p < 0.33) {
          setActiveStep(0);
        } else if (p < 0.66) {
          setActiveStep(1);
        } else {
          setActiveStep(2);
        }

        // Scrub SVG path offset
        if (pathRef.current) {
          const totalLength = 1000;
          const drawProgress = p * totalLength;
          pathRef.current.style.strokeDashoffset = `${totalLength - drawProgress}`;
        }
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section
      id="trajectory"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center bg-[#070B14] py-24 select-none overflow-hidden"
    >
      {/* 1. BACKGROUND LOOP: Subtle Curved Parallel Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg
          viewBox="0 0 1440 900"
          className="w-full h-full text-[#202B3D] animate-[driftGradient_30s_ease-in-out_infinite]"
          fill="none"
        >
          <path
            d="M-200 450 C 300 200, 700 700, 1600 350"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M-200 480 C 300 230, 700 730, 1600 380"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M-200 510 C 300 260, 700 760, 1600 410"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M-200 540 C 300 290, 700 790, 1600 440"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* 2. SPLIT LAYOUT: Stages (Left) & Dynamic Trajectory SVG (Right) */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Interactive Stages */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="eyebrow text-[#6EA8FF] mb-4">
            03 // METHODOLOGY
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#F4F6F8] tracking-tight mb-12">
            Point <span className="text-[#6EA8FF]">→</span> Path <span className="text-[#8DEBFF]">→</span> Progress
          </h2>

          <div className="space-y-8">
            {stages.map((stage, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer group relative pl-6 border-l-2 transition-all duration-500 ${
                    isActive
                      ? 'border-[#6EA8FF] translate-x-3'
                      : 'border-[#202B3D] hover:border-[#667085]'
                  }`}
                >
                  <div className="flex items-baseline gap-3 mb-1">
                    <span
                      className={`font-mono text-xs ${
                        isActive ? 'text-[#6EA8FF] font-semibold' : 'text-[#667085]'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <h3
                      className={`font-display text-2xl font-bold transition-colors duration-300 ${
                        isActive ? 'text-[#F4F6F8]' : 'text-[#667085] group-hover:text-[#94A3B8]'
                      }`}
                    >
                      {stage.title}
                    </h3>
                  </div>

                  <p
                    className={`text-sm leading-relaxed transition-all duration-300 max-w-md ${
                      isActive
                        ? 'text-[#94A3B8] opacity-100 max-h-24 mt-2'
                        : 'text-[#667085]/60 opacity-0 max-h-0 overflow-hidden lg:opacity-60 lg:max-h-24'
                    }`}
                  >
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Scrubbed Trajectory SVG Instrument */}
        <div className="lg:col-span-6 flex items-center justify-center relative h-[380px] sm:h-[460px] bg-[#0D1422]/60 border border-[#202B3D] rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <svg
            viewBox="0 0 500 400"
            fill="none"
            className="w-full h-full"
          >
            {/* Grid intersections */}
            <line x1="50" y1="200" x2="450" y2="200" stroke="#202B3D" strokeDasharray="4 4" />
            <line x1="250" y1="50" x2="250" y2="350" stroke="#202B3D" strokeDasharray="4 4" />

            {/* Base Dim Line */}
            <path
              d="M 50 320 C 120 320, 180 280, 240 200 C 300 120, 360 80, 440 60"
              stroke="#202B3D"
              strokeWidth="3"
            />
            {/* Branching secondary trajectories */}
            <path
              d="M 240 200 C 290 220, 380 250, 440 260"
              stroke="#202B3D"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Active Scrubbed Path */}
            <path
              ref={pathRef}
              d="M 50 320 C 120 320, 180 280, 240 200 C 300 120, 360 80, 440 60"
              stroke="url(#trajectoryGrad)"
              strokeWidth="3.5"
              strokeDasharray="1000"
              strokeDashoffset={1000 - (activeStep + 1) * 333}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-700 ease-out"
            />

            {/* Stage Nodes */}
            {/* Node 1: Point */}
            <g className={`transition-opacity duration-300 ${activeStep >= 0 ? 'opacity-100' : 'opacity-30'}`}>
              <circle cx="50" cy="320" r="8" fill="#0D1422" stroke="#6EA8FF" strokeWidth="2" />
              <circle cx="50" cy="320" r="3" fill="#6EA8FF" />
              <text x="50" y="348" textAnchor="middle" fill="#6EA8FF" fontSize="10" fontFamily="monospace">
                01 POINT
              </text>
            </g>

            {/* Node 2: Path */}
            <g className={`transition-opacity duration-300 ${activeStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
              <circle cx="240" cy="200" r="8" fill="#0D1422" stroke="#8DEBFF" strokeWidth="2" />
              <circle cx="240" cy="200" r="3" fill="#8DEBFF" />
              <text x="240" y="175" textAnchor="middle" fill="#8DEBFF" fontSize="10" fontFamily="monospace">
                02 PATH
              </text>
            </g>

            {/* Node 3: Progress */}
            <g className={`transition-opacity duration-300 ${activeStep >= 2 ? 'opacity-100' : 'opacity-30'}`}>
              <circle cx="440" cy="60" r="12" fill="#0D1422" stroke="#6EA8FF" strokeWidth="2" className="animate-pulse" />
              <circle cx="440" cy="60" r="4" fill="#F4F6F8" />
              {/* Star flare on finish */}
              <polygon
                points="440,46 443,57 454,60 443,63 440,74 437,63 426,60 437,57"
                fill="#8DEBFF"
              />
              <text x="440" y="95" textAnchor="middle" fill="#F4F6F8" fontSize="10" fontFamily="monospace">
                03 PROGRESS
              </text>
            </g>

            <defs>
              <linearGradient id="trajectoryGrad" x1="50" y1="320" x2="440" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#6EA8FF" />
                <stop offset="50%" stopColor="#8DEBFF" />
                <stop offset="100%" stopColor="#F4F6F8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
