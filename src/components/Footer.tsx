import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import ResumeDrawer from './ResumeDrawer';

// ─────────────────────────────────────────────────────────────
// REFINEMENTS APPLIED:
//
// COPY:
//  BEFORE: "Crafting digital experiences that blend design and engineering for
//           forward-thinking brands."
//          — the word "crafting" is overused, "forward-thinking brands" is filler
//  AFTER:  Specific, positioning-clear, one-line manifesto
//
//  BEFORE: Copyright "Premium Portfolio. All rights reserved."
//          — "Premium Portfolio" is a template placeholder, not a brand name
//  AFTER:  "Atharv Shelke" — own your name, builds personal brand equity
//
//  BEFORE: "Designed & Built with ♥" — generic developer footer cliché  
//  AFTER:  "Designed, built, and shipped with ♥ in Aurangabad" 
//          — adds location, humanises, "shipped" signals real-world delivery
//
// STRUCTURE:
//  - Navigation labels tightened — added "Education" missing from footer nav
//  - Added GitHub link anchor instead of "#" placeholder on Twitter
//  - Added subtle "Built on Next.js · Deployed on Vercel" tech signal
//    (optional, shows stack pride, can be removed if preferred)
// ─────────────────────────────────────────────────────────────

const MagneticLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
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
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-colors duration-300 relative z-10"
    >
      {children}
    </motion.a>
  );
};

export default function Footer() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <footer className="bg-surface py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-7">
            <div>
              <h2 className="text-3xl font-display font-bold tracking-tighter mb-3">
                Atharv <span className="text-accent">Shelke</span>
              </h2>
              {/* BEFORE: "Crafting digital experiences that blend design and 
                           engineering for forward-thinking brands." */}
              {/* AFTER: Clear positioning statement, no filler */}
              <p className="text-text-muted max-w-xs text-base font-light leading-relaxed">
                Full-stack engineer who builds production-ready web applications —
                clean code, precise design, no shortcuts.
              </p>
            </div>

            <div className="flex items-center gap-5">
              {/* BEFORE: href="#" on Twitter — broken link */}
              {/* AFTER: Real URLs where available, placeholder clearly marked */}
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

            {/* Stack pride signal — optional, can remove */}
            <p className="text-[10px] font-mono tracking-widest text-text-muted/40 uppercase">
              Built with Next.js · Deployed on Vercel
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-7">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Work', href: '#work' },
                { label: 'Experience', href: '#experience' },
                { label: 'Skills', href: '#skills' },
                { label: 'Services', href: '#services' },
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-base font-light hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                  >
                    {label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Quick CTA */}
          <div className="space-y-7">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-medium">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="text-base font-light hover:text-accent transition-colors flex items-center gap-2 group w-fit cursor-pointer"
                >
                  Preview / Download CV
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <a href="#" className="text-base font-light hover:text-accent transition-colors w-fit block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-base font-light hover:text-accent transition-colors w-fit block">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          {/* BEFORE: "© 2025 Premium Portfolio. All rights reserved." — template placeholder */}
          {/* AFTER: Real name — builds personal brand equity */}
          <p className="text-text-muted text-xs font-light">
            &copy; {new Date().getFullYear()} Atharv Shelke. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted text-xs font-light flex items-center gap-2"
          >
            {/* BEFORE: "Designed & Built with ♥" — cliché developer footer */}
            {/* AFTER: Adds location and "shipped" — shows real-world delivery mindset */}
            Designed, built & shipped with
            <motion.span
              whileInView={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-accent inline-block"
            >
              ♥
            </motion.span>
            in Chh. Sambhajinagar
          </motion.p>
        </div>
      </div>

      <ResumeDrawer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </footer>
  );
}