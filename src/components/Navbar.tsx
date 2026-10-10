import { motion, LayoutGroup } from 'motion/react';
import { useEffect, useState } from 'react';
import { Home, Briefcase, Layers, GitFork, Calculator, User, Mail, FileText } from 'lucide-react';
import type Lenis from 'lenis';

interface NavbarProps {
  onOpenResume?: () => void;
}

const navItems = [
  { name: 'Overview', href: '#home', id: 'home', icon: Home },
  { name: 'Solutions', href: '#solutions', id: 'solutions', icon: Layers },
  { name: 'Work', href: '#work', id: 'work', icon: Briefcase },
  { name: 'Process', href: '#framework', id: 'framework', icon: GitFork },
  { name: 'Track Record', href: '#experience', id: 'experience', icon: User },
  { name: 'Scoping', href: '#estimator', id: 'estimator', icon: Calculator },
  { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
];

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setActiveSection(targetId);

    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;

    if (targetId === 'home') {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      if (lenis) {
        lenis.scrollTo(element, { offset: -70, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed bottom-6 sm:bottom-auto sm:top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none"
    >
      <LayoutGroup>
        <nav
          className="pointer-events-auto flex items-center gap-1 p-1.5 sm:p-2 rounded-full glass-panel shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10"
          style={{ backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.id)}
                className={`relative flex items-center justify-center px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full outline-none transition-colors duration-300 ${
                  isActive ? 'text-white font-medium' : 'text-white/50 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="frontier-nav-indicator"
                    className="absolute inset-0 bg-accent/20 border border-accent/40 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon
                    className={`w-4 h-4 sm:w-3.5 sm:h-3.5 ${isActive ? 'text-accent' : ''}`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className="hidden lg:block text-xs font-semibold tracking-wide">
                    {item.name}
                  </span>
                </span>
              </a>
            );
          })}

          {/* Quick CV Trigger */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="ml-1 sm:ml-2 px-3 py-1.5 sm:py-2 rounded-full bg-accent/15 hover:bg-accent text-accent hover:text-bg border border-accent/30 hover:border-accent transition-all duration-300 flex items-center gap-1.5 text-xs font-mono font-semibold shadow-sm cursor-pointer"
              title="Preview Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CV</span>
            </button>
          )}
        </nav>
      </LayoutGroup>
    </motion.div>
  );
}
