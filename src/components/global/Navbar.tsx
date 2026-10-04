import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useBrand } from '../../lib/brandContext';
import { ArrowRight, Menu, X, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { name, mode, setBrandMode } = useBrand();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  // Magnetic CTA button coordinates
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 80);

    const diff = latest - lastScrollY.current;
    if (latest > 200 && diff > 10) {
      setIsHidden(true);
    } else if (diff < -10 || latest <= 200) {
      setIsHidden(false);
    }
    lastScrollY.current = latest;
  });

  const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.25;
    const distanceY = (e.clientY - centerY) * 0.25;
    setBtnOffset({ x: distanceX, y: distanceY });
  };

  const handleMagneticLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled
            ? 'bg-[#0D1422]/85 backdrop-blur-md border-b border-[#202B3D]/70 shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
          {/* Logo + Brand Wordmark */}
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="flex items-center gap-3 group focus:outline-none"
            >
              {/* Four-point compass star logo */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-7 h-7 text-[#6EA8FF] transition-transform duration-500 group-hover:rotate-45"
                >
                  <path
                    d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                    fill="#6EA8FF"
                    stroke="#8DEBFF"
                    strokeWidth="0.8"
                  />
                  <circle cx="12" cy="12" r="2.2" fill="#070B14" />
                  <circle cx="12" cy="12" r="1.2" fill="#F4F6F8" />
                </svg>
              </div>

              {/* Wordmark */}
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-bold tracking-tight text-[#F4F6F8] group-hover:text-white transition-colors">
                  {name}
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border border-[#202B3D] text-[#667085]">
                  {mode === 'atharv' ? 'ATHARV' : 'ARC'}
                </span>
              </div>
            </a>

            {/* Subtle Brand Switcher for live preview/testing */}
            <button
              onClick={() => setBrandMode(mode === 'polaris' ? 'atharv' : 'polaris')}
              title={`Switch preview between POLARIS and ATHARV`}
              className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono px-2 py-1 rounded-md border border-[#202B3D]/80 bg-[#0D1422]/50 text-[#667085] hover:text-[#6EA8FF] hover:border-[#6EA8FF]/40 transition-colors"
            >
              <Globe className="w-3 h-3 text-[#6EA8FF]" />
              <span>Domain: {mode === 'atharv' ? 'atharv-shelke' : 'polaris-arc'}</span>
            </button>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#667085]">
            <button
              onClick={() => scrollToSection('products')}
              className="hover:text-[#F4F6F8] transition-colors focus:outline-none"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('principles')}
              className="hover:text-[#F4F6F8] transition-colors focus:outline-none"
            >
              Principles
            </button>
            <button
              onClick={() => scrollToSection('direction')}
              className="hover:text-[#F4F6F8] transition-colors focus:outline-none"
            >
              Direction
            </button>
            <button
              onClick={() => scrollToSection('manifesto')}
              className="hover:text-[#F4F6F8] transition-colors focus:outline-none"
            >
              Manifesto
            </button>
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              ref={buttonRef}
              animate={{ x: btnOffset.x, y: btnOffset.y }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              onClick={onOpenContact}
              className="group relative inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#6EA8FF] text-[#070B14] font-semibold text-[13px] tracking-tight hover:bg-[#8DEBFF] transition-colors duration-200 shadow-[0_0_20px_rgba(110,168,255,0.25)] focus:outline-none"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#667085] hover:text-[#F4F6F8] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-20 z-40 bg-[#0D1422] border-b border-[#202B3D] p-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          <nav className="flex flex-col gap-4 text-base font-medium text-[#667085]">
            <button
              onClick={() => scrollToSection('products')}
              className="text-left hover:text-[#F4F6F8] py-1 border-b border-[#202B3D]/50"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('principles')}
              className="text-left hover:text-[#F4F6F8] py-1 border-b border-[#202B3D]/50"
            >
              Principles
            </button>
            <button
              onClick={() => scrollToSection('direction')}
              className="text-left hover:text-[#F4F6F8] py-1 border-b border-[#202B3D]/50"
            >
              Direction
            </button>
            <button
              onClick={() => scrollToSection('manifesto')}
              className="text-left hover:text-[#F4F6F8] py-1 border-b border-[#202B3D]/50"
            >
              Manifesto
            </button>
          </nav>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setBrandMode(mode === 'polaris' ? 'atharv' : 'polaris')}
              className="flex items-center gap-1.5 text-xs text-[#6EA8FF]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Switch: {mode === 'atharv' ? 'ATHARV' : 'POLARIS'}</span>
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-[#6EA8FF] text-[#070B14] font-semibold text-sm"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </>
  );
};
