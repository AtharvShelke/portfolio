import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Twitter, ShieldCheck } from 'lucide-react';

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
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-colors duration-300 relative z-10"
    >
      {children}
    </motion.a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-surface py-20 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                  Atharv Shelke Studio & Systems
                </span>
              </div>
              <h2 className="text-3xl font-display font-bold tracking-tight mb-3">
                Architecting High-Velocity <span className="text-accent">Digital Products.</span>
              </h2>
              <p className="text-text-muted max-w-sm text-sm font-light leading-relaxed">
                Full-stack engineering consultancy & product studio specializing in custom ERPs, transactional web platforms, and agentic AI pipelines.
              </p>
            </div>

            <div className="flex items-center gap-4">
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

            <p className="text-[11px] font-mono tracking-widest text-text-muted/50 uppercase">
              Next.js 16 • React 19 • PostgreSQL • Production SLA Guaranteed
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-mono">
              Systems Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Overview', href: '#home' },
                { label: 'Enterprise Solutions', href: '#solutions' },
                { label: 'Case Studies', href: '#work' },
                { label: 'Execution Model', href: '#framework' },
                { label: 'Scope Estimator', href: '#estimator' },
                { label: 'Philosophy & DNA', href: '#about' },
                { label: 'Technical Matrix', href: '#capabilities' },
                { label: 'Consultation Ingestion', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm font-light hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-mono">
              Client Dossier
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/Atharv_Shelke_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                >
                  Technical CV (PDF)
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:atharvshelke964@gmail.com"
                  className="text-sm font-light hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                >
                  Direct Scoping Request
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            &copy; {new Date().getFullYear()} Atharv Shelke Studio. All rights reserved.
          </p>
          <div className="text-text-muted text-xs font-mono flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Enterprise Quality & Security Assured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}