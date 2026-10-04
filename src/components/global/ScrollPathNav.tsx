import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const sections = [
  { id: 'hero', label: '01', title: 'ORIGIN' },
  { id: 'manifesto', label: '02', title: 'MANIFESTO' },
  { id: 'trajectory', label: '03', title: 'TRAJECTORY' },
  { id: 'products', label: '04', title: 'SYSTEMS' },
  { id: 'principles', label: '05', title: 'PRINCIPLES' },
  { id: 'direction', label: '06', title: 'DIRECTION' },
  { id: 'contact', label: '07', title: 'FORWARD' },
];

export const ScrollPathNav: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
      setScrollProgress(progress);

      // Determine active section
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center select-none"
    >
      {/* Background Track Hairline */}
      <div className="relative h-64 w-[1px] bg-[#202B3D]">
        {/* Active Progress Line */}
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#6EA8FF] to-[#8DEBFF] shadow-[0_0_8px_rgba(110,168,255,0.6)]"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        {/* Traveling North Star Node */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center transition-all duration-75"
          style={{ top: `${scrollProgress * 100}%` }}
        >
          <div className="w-2 h-2 rounded-full bg-[#8DEBFF] shadow-[0_0_10px_#6EA8FF]" />
          <div className="absolute inset-0 rounded-full border border-[#6EA8FF]/50 animate-ping opacity-30" />
        </div>
      </div>

      {/* Section Indicators */}
      <div className="flex flex-col justify-between h-64 absolute inset-0 -left-2 pointer-events-none">
        {sections.map((sec, idx) => {
          const isActive = idx === activeSection;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="pointer-events-auto group flex items-center gap-2 -translate-x-1 text-left focus:outline-none"
              title={sec.title}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  isActive
                    ? 'bg-[#6EA8FF] shadow-[0_0_8px_#6EA8FF]'
                    : 'bg-[#202B3D] group-hover:bg-[#667085]'
                }`}
              />
              <span
                className={`text-[10px] font-mono transition-all duration-300 ${
                  isActive
                    ? 'text-[#F4F6F8] translate-x-1 font-semibold'
                    : 'text-[#667085]/60 group-hover:text-[#667085]'
                }`}
              >
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
