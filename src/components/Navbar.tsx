import React, { useEffect, useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Home, User, FolderGit2, Briefcase, Code, Sparkles, GraduationCap, Mail, Terminal } from 'lucide-react';
import { Badge } from './ui/Badge';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#work', icon: FolderGit2 },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Services', href: '#services', icon: Sparkles },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Progress Percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      setIsScrolled(window.scrollY > 40);

      // Section Highlight Tracking
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    setActiveSection(targetId);

    const element = document.getElementById(targetId);
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[90] w-full transition-all duration-300">
      {/* Top Scroll Progress Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#F27D26] via-[#FF9545] to-[#F27D26] shadow-[0_0_12px_rgba(242,125,38,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-modal border-b border-[var(--border-default)] shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#F27D26]/15 border border-[#F27D26]/40 flex items-center justify-center text-[#F27D26] group-hover:bg-[#F27D26] group-hover:text-[#050505] transition-all duration-300 shadow-[0_0_16px_rgba(242,125,38,0.2)]">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold font-[#font-heading] tracking-tight text-[var(--text-primary)] group-hover:text-[#F27D26] transition-colors">
                ATHARV SHELKE
              </span>
              <span className="text-[10px] font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <LayoutGroup>
            <nav className="hidden lg:flex items-center gap-1 bg-[var(--bg-elevation-1)] border border-[var(--border-default)] p-1.5 rounded-full shadow-inner">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-[#050505] font-bold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#F27D26] rounded-full shadow-[0_0_16px_rgba(242,125,38,0.5)] -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </LayoutGroup>

          {/* Action / Availability Badge */}
          <div className="flex items-center gap-3">
            <Badge variant="primary" pulseBeacon className="hidden sm:inline-flex">
              Available for Hire
            </Badge>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-bold rounded-xl bg-[#F27D26] text-[#050505] hover:bg-[#FF9545] hover:shadow-[0_0_20px_rgba(242,125,38,0.4)] transition-all duration-200 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
