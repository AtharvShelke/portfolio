import { motion, LayoutGroup } from 'motion/react';
import { useEffect, useState } from 'react';
import { Home, User, Briefcase, Code, Sparkles, GraduationCap, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#work', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Services', href: '#services', icon: Sparkles },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
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
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    const targetId = href.substring(1);
    setActiveSection(targetId);

    const element = document.getElementById(targetId);
    if (element) {
      // Extremely consistent, non-conflicting smooth scroll
      const topPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed bottom-6 sm:bottom-auto sm:top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none"
    >
      <LayoutGroup>
        <nav 
          className="pointer-events-auto flex items-center p-1.5 sm:p-2 rounded-full glass-panel shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10" 
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative flex items-center justify-center px-3.5 py-3 sm:px-5 sm:py-2.5 rounded-full outline-none transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/40 hover:text-white/90 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="aesthetic-navbar-indicator"
                    className="absolute inset-0 bg-white/15 rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30, mass: 1 }}
                  />
                )}
                
                <span className="relative z-10 flex flex-col items-center gap-1">
                  {/* Apple mobile style: Icon only on very small screens */}
                  <Icon 
                    className={`w-5 h-5 sm:w-4 sm:h-4 md:hidden transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} 
                    strokeWidth={isActive ? 2.5 : 2} 
                  />
                  {/* Text only on larger screens */}
                  <span className="hidden md:block text-sm font-semibold tracking-wide">
                    {item.name}
                  </span>
                </span>
              </a>
            );
          })}
        </nav>
      </LayoutGroup>
    </motion.div>
  );
}
