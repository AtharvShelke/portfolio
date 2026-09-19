import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const sublineRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // In reduced motion, simply keep all words at full opacity
      wordsRef.current.forEach((word) => {
        if (word) word.style.opacity = '1';
      });
      if (sublineRef.current) sublineRef.current.style.opacity = '1';
      return;
    }

    const words = wordsRef.current.filter(Boolean);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
      },
    });

    // Stagger word opacities from 0.12 to 1
    tl.to(words, {
      opacity: 1,
      stagger: 0.2,
      ease: 'power2.inOut',
    });

    // Fade in supporting line at the end
    if (sublineRef.current) {
      tl.to(
        sublineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.1'
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, []);

  const manifestoWords = [
    { text: 'Every', highlight: false },
    { text: 'business', highlight: false },
    { text: 'needs', highlight: false },
    { text: 'a', highlight: false },
    { text: 'fixed', highlight: true },
    { text: 'point.', highlight: true },
  ];

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#070B14] py-24 select-none"
    >
      {/* 1. BACKGROUND LOOP: Concentric Compass Rings with Opposite Rotation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        {/* Ring 1 (Outer) - 90s Counter-Clockwise */}
        <div className="absolute w-[560px] md:w-[780px] h-[560px] md:h-[780px] rounded-full border border-[#202B3D] animate-[rotateSlowCounter_90s_linear_infinite]">
          {/* Compass Tick Marks */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-[#6EA8FF]/40 origin-bottom"
              style={{
                transform: `rotate(${i * 30}deg) translateY(0px)`,
                transformOrigin: '50% 390px',
              }}
            />
          ))}
        </div>

        {/* Ring 2 (Middle) - 60s Clockwise */}
        <div className="absolute w-[380px] md:w-[520px] h-[380px] md:h-[520px] rounded-full border border-[#202B3D] border-dashed animate-[rotateSlowClockwise_60s_linear_infinite]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#8DEBFF]/30 origin-bottom"
              style={{
                transform: `rotate(${i * 45}deg) translateY(0px)`,
                transformOrigin: '50% 260px',
              }}
            />
          ))}
        </div>

        {/* Ring 3 (Inner Hairline) */}
        <div className="absolute w-[220px] md:w-[300px] h-[220px] md:h-[300px] rounded-full border border-[#6EA8FF]/20" />

        {/* Center Pulsing Star Node */}
        <div className="absolute w-3 h-3 rounded-full bg-[#6EA8FF] shadow-[0_0_16px_#6EA8FF] animate-[starBreathe_4s_easeInOut_infinite]" />
      </div>

      {/* 2. MAIN MANIFESTO STATEMENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 text-center">
        {/* Eyebrow marker */}
        <div className="eyebrow text-[#667085] tracking-[0.3em] mb-8">
          02 // THE MANIFESTO
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold tracking-[-0.035em] leading-[1.05] text-[#F4F6F8] max-w-4xl mx-auto">
          {manifestoWords.map((item, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) wordsRef.current[index] = el;
              }}
              style={{ opacity: 0.12 }}
              className={`inline-block mr-[0.25em] transition-opacity duration-150 ${
                item.highlight
                  ? 'gradient-text-star font-extrabold'
                  : 'text-[#F4F6F8]'
              }`}
            >
              {item.text}
            </span>
          ))}
        </h2>

        {/* Supporting Line Beneath */}
        <p
          ref={sublineRef}
          style={{ opacity: 0, transform: 'translateY(15px)' }}
          className="text-base sm:text-xl text-[#667085] max-w-xl mx-auto mt-12 leading-relaxed"
        >
          In turbulent market landscapes, raw acceleration without bearing is noise. Long-term progress demands an unwavering standard.
        </p>
      </div>
    </section>
  );
};
