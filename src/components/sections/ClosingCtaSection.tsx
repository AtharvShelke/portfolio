import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useBrand } from '../../lib/brandContext';
import { ArrowRight } from 'lucide-react';

interface ClosingCtaProps {
  onOpenContact: () => void;
}

export const ClosingCtaSection: React.FC<ClosingCtaProps> = ({ onOpenContact }) => {
  const { signOff, name } = useBrand();

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

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

  return (
    <section
      id="contact"
      className="relative min-h-[85vh] w-full flex flex-col items-center justify-center bg-[#070B14] py-28 select-none overflow-hidden text-center"
    >
      {/* 1. CELESTIAL BACKGROUND SCENE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Mountain Silhouette Base */}
        <div className="absolute bottom-0 inset-x-0 h-40 opacity-40">
          <svg
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            className="w-full h-full text-[#0D1422] fill-current"
          >
            <path d="M0 200L180 130L340 180L500 100L680 160L840 90L1000 170L1000 200Z" />
          </svg>
        </div>

        {/* Rising North Star with Vertical Beam */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center">
          {/* North Star */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-32 h-32 rounded-full bg-[#6EA8FF]/10 blur-xl animate-[starBreathe_6s_easeInOut_infinite]" />
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#8DEBFF] drop-shadow-[0_0_12px_#6EA8FF]">
              <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                fill="#F4F6F8"
                stroke="#8DEBFF"
                strokeWidth="0.8"
              />
            </svg>
          </div>

          {/* Vertical Light Beam */}
          <div className="w-[1px] h-64 bg-gradient-to-b from-[#8DEBFF]/60 via-[#6EA8FF]/20 to-transparent" />
        </div>
      </div>

      {/* 2. CENTERED CALL TO ACTION CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 flex flex-col items-center">
        <div className="eyebrow text-[#6EA8FF] mb-6">
          07 // THE INVITATION
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F4F6F8] leading-[1.05] mb-6">
          {signOff}
        </h2>

        <p className="text-base sm:text-lg text-[#667085] max-w-xl mx-auto mb-10 leading-relaxed">
          Whether capturing high-velocity demand or automating enterprise infrastructure, let’s build what comes next.
        </p>

        {/* CTA Button with expanding pulse ring & magnetic hover */}
        <div className="relative flex items-center justify-center">
          {/* Animated 4s Expanding Pulse Ring */}
          <div className="absolute w-16 h-16 rounded-full border border-[#6EA8FF]/40 animate-[pulseExpand_4s_ease-out_infinite] pointer-events-none" />

          <motion.button
            ref={buttonRef}
            animate={{ x: btnOffset.x, y: btnOffset.y }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-3 h-14 px-9 rounded-xl bg-[#6EA8FF] hover:bg-[#8DEBFF] text-[#070B14] font-semibold text-base tracking-tight shadow-[0_0_30px_rgba(110,168,255,0.4)] transition-all duration-200 focus:outline-none"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
