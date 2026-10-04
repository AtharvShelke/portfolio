import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ShieldCheck, Cpu, Code2, Compass, ArrowUpRight } from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.1 });
  const y1 = useTransform(smoothProgress, [0, 1], [40, -40]);
  const y2 = useTransform(smoothProgress, [0, 1], [-30, 30]);


  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-surface border-t border-b border-white/5"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Vision & Philosophy */}
          <motion.div
            className="lg:col-span-7 will-change-transform space-y-8"
            style={{ y: y1 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
                Engineering DNA & Philosophy
              </p>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              We engineer architectures where{' '}
              <span className="text-accent italic">high visual polish</span>{' '}
              meets{' '}
              <span className="text-stroke">bulletproof reliability.</span>
            </h2>

            <div className="w-20 h-1 bg-accent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-bold text-text">Resilient Systems</h4>
                <p className="text-xs text-text-muted font-light leading-relaxed">
                  Strict schema contracts with Zod & Prisma, isolated transactional databases, and predictable state management.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-display font-bold text-text">Direct Engineering</h4>
                <p className="text-xs text-text-muted font-light leading-relaxed">
                  Direct collaboration with the solutions architect. Zero agency markup, zero bureaucratic delays, rapid deployment cycles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Narrative & Metrics */}
          <motion.div
            className="lg:col-span-5 space-y-8 will-change-transform"
            style={{ y: y2 }}
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono tracking-wider uppercase text-emerald-400">
                  Lead Solutions Architect
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-text">
                Atharv Shelke
              </h3>

              <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed">
                Specialized in Full-Stack Web Architecture, Distributed ERPs, and Agentic AI Workflows. I partner with founders, retail enterprises, and tech companies to turn high-complexity specifications into intuitive, revenue-generating software.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-text-muted">Academic Baseline:</span>
                  <span className="text-text font-medium">B.E. Computer Science @ MGM</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-text-muted">Core Focus:</span>
                  <span className="text-accent font-medium">Next.js 16 • PostgreSQL • AI SDKs</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-text-muted">Deployment Standard:</span>
                  <span className="text-emerald-400 font-medium">Zero-Downtime Edge Releases</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="/Atharv_Shelke_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full border border-white/15 hover:border-accent hover:text-accent font-mono text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  Download Complete Engineering Dossier (CV) <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}