import React from 'react';
import { useBrand } from '../../lib/brandContext';
import { Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { name, tagline, coordinates, footerKeywords, mode, setBrandMode } = useBrand();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070B14] border-t border-[#202B3D] text-[#667085] py-16 select-none overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#202B3D]/50">
          {/* Brand Column (Left) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* 4-point star logo */}
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#6EA8FF]">
                  <path
                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                    fill="#6EA8FF"
                    stroke="#8DEBFF"
                    strokeWidth="0.8"
                  />
                  <circle cx="12" cy="12" r="2" fill="#070B14" />
                </svg>
                <span className="font-display text-2xl font-bold text-[#F4F6F8] tracking-tight">
                  {name}
                </span>
              </div>
              <p className="text-sm text-[#667085] max-w-sm mb-4">
                {tagline}
              </p>
              <div className="text-xs font-mono text-[#667085]/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FF]" />
                <span>{coordinates}</span>
              </div>
            </div>

            {/* Brand switcher preview indicator */}
            <div className="mt-8 flex items-center gap-2">
              <button
                onClick={() => setBrandMode(mode === 'polaris' ? 'atharv' : 'polaris')}
                className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-[#0D1422] border border-[#202B3D] text-[#667085] hover:text-[#6EA8FF] hover:border-[#6EA8FF]/40 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Switch view: {mode === 'atharv' ? 'ATHARV' : 'POLARIS'}</span>
              </button>
            </div>
          </div>

          {/* Navigation Links (Center) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div>
              <div className="font-mono uppercase text-[#F4F6F8] tracking-widest mb-4">
                Products
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#products" className="hover:text-[#F4F6F8] transition-colors">
                    LeadCopilot
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#F4F6F8] transition-colors">
                    OpsDirector (R&D)
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#F4F6F8] transition-colors">
                    SignalBridge (Planned)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-mono uppercase text-[#F4F6F8] tracking-widest mb-4">
                Framework
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#manifesto" className="hover:text-[#F4F6F8] transition-colors">
                    The Manifesto
                  </a>
                </li>
                <li>
                  <a href="#trajectory" className="hover:text-[#F4F6F8] transition-colors">
                    Methodology
                  </a>
                </li>
                <li>
                  <a href="#principles" className="hover:text-[#F4F6F8] transition-colors">
                    Core Principles
                  </a>
                </li>
                <li>
                  <a href="#direction" className="hover:text-[#F4F6F8] transition-colors">
                    Strategic Bearing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-mono uppercase text-[#F4F6F8] tracking-widest mb-4">
                Connect
              </div>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/AtharvShelke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#F4F6F8] transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/atharv-shelke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#F4F6F8] transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/atharvshelke_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#F4F6F8] transition-colors"
                  >
                    <span>X / Twitter</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Tracked Keywords & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="tracking-[0.25em] text-[#6EA8FF]/80 uppercase">
            {footerKeywords.join(' · ')}
          </div>

          <div className="flex items-center gap-6 text-[#667085]">
            <span>© {new Date().getFullYear()} {name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#F4F6F8] transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
