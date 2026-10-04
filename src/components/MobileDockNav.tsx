import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Award, Cpu, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#work', label: 'Projects', icon: Briefcase },
  { href: '#experience', label: 'Experience', icon: Award },
  { href: '#skills', label: 'Skills', icon: Cpu },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function MobileDockNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[80] lg:hidden w-auto max-w-[92vw]">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full glass-modal border border-[var(--border-default)] shadow-[0_10px_38px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.substring(1);

          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                isActive
                  ? 'text-[#050505] bg-[#F27D26] font-bold shadow-[0_0_16px_rgba(242,125,38,0.5)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
              }`}
            >
              <Icon className="w-4 h-4" />
              {isActive && (
                <motion.span
                  layoutId="activeDockBubble"
                  className="absolute inset-0 rounded-full bg-[#F27D26] -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
}
