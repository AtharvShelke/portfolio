import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Twitter, Terminal } from 'lucide-react';
import ResumeDrawer from './ResumeDrawer';

const MagneticLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.1 }}
      className="w-10 h-10 rounded-full border border-[var(--border-default)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[#F27D26] hover:border-[#F27D26] hover:text-[#050505] transition-colors duration-300 relative z-10"
    >
      {children}
    </motion.a>
  );
};

export default function Footer() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <footer className="bg-[var(--bg-elevation-2)] py-16 border-t border-[var(--border-default)] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F27D26]/15 border border-[#F27D26]/40 flex items-center justify-center text-[#F27D26]">
                <Terminal className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold font-[#font-heading] tracking-tight text-[var(--text-primary)]">
                ATHARV <span className="text-[#F27D26]">SHELKE</span>
              </h2>
            </a>

            <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed">
              Full-stack engineer crafting production-ready applications with Next.js, Node, and PostgreSQL. Type-safe architecture and 60fps user experiences.
            </p>

            <div className="flex items-center gap-3">
              <MagneticLink href="https://twitter.com/atharvshelke_">
                <Twitter className="w-4 h-4" />
              </MagneticLink>
              <MagneticLink href="https://www.linkedin.com/in/atharv-shelke">
                <Linkedin className="w-4 h-4" />
              </MagneticLink>
              <MagneticLink href="https://github.com/AtharvShelke">
                <Github className="w-4 h-4" />
              </MagneticLink>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#work' },
                { label: 'Experience', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-[var(--text-secondary)] hover:text-[#F27D26] transition-colors inline-flex items-center gap-1 group"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="text-xs text-[var(--text-secondary)] hover:text-[#F27D26] transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  Preview / Download CV
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <span className="text-xs font-mono text-[var(--text-tertiary)]">
                  Built with Next.js &amp; Tailwind CSS
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-tertiary)] font-mono">
            &copy; {new Date().getFullYear()} Atharv Shelke. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-tertiary)] font-mono flex items-center gap-1.5">
            Designed &amp; engineered in Aurangabad, IN
          </p>
        </div>
      </div>

      <ResumeDrawer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </footer>
  );
}