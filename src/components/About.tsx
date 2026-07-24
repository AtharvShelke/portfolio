import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Sparkles, Terminal, Code2, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-[var(--bg-elevation-1)] border-y border-[var(--border-default)]"
    >
      {/* Background Subtle Gradient Aura */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#F27D26]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Philosophy */}
          <motion.div className="lg:col-span-7" style={{ y: y1 }}>
            <Badge variant="primary" className="mb-6 uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" /> Engineering Philosophy
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[#font-heading] tracking-tight leading-tight mb-6">
              Bridging complex{' '}
              <span className="text-[#F27D26]">backend logic</span>{' '}
              with{' '}
              <span className="text-stroke">60fps frontend</span>{' '}
              user experiences.
            </h2>

            <div className="w-20 h-[3px] bg-[#F27D26] rounded-full mb-8 shadow-[0_0_12px_rgba(242,125,38,0.5)]" />

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              Final-year CS student with 2+ years of production experience — building full-stack applications in Next.js, React, and PostgreSQL that are deployed for real businesses and active users.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-tertiary)] pt-2">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--surface-card)] border border-[var(--border-default)]">
                <Terminal className="w-3.5 h-3.5 text-[#F27D26]" /> MGM University (2022–2026)
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--surface-card)] border border-[var(--border-default)]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> WCAG 2.1 AA Compliant
              </span>
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--surface-card)] border border-[var(--border-default)]">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> Type-Safe Schema Architecture
              </span>
            </div>
          </motion.div>

          {/* Right Column: Elevated Glass Cards & Stats Bar */}
          <motion.div className="lg:col-span-5 space-y-6" style={{ y: y2 }}>
            <Card variant="interactive" className="p-6">
              <CardContent className="space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  Production Engineering Mindset
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  My process bridges Figma component design directly to deployed Edge infrastructure. I prioritize sub-100ms API responses, zero layout shifts, and predictable state management.
                </p>
              </CardContent>
            </Card>

            {/* Benchmark Statistics Grid */}
            <div className="grid grid-cols-3 gap-4">
              <Card variant="glass" className="p-5 text-center">
                <h4 className="text-3xl font-extrabold text-[#F27D26] font-mono mb-1">2+</h4>
                <p className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-tertiary)] leading-tight">
                  Years in<br />Production
                </p>
              </Card>

              <Card variant="glass" className="p-5 text-center">
                <h4 className="text-3xl font-extrabold text-[var(--text-primary)] font-mono mb-1">4</h4>
                <p className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-tertiary)] leading-tight">
                  Live<br />Applications
                </p>
              </Card>

              <Card variant="glass" className="p-5 text-center">
                <h4 className="text-3xl font-extrabold text-[#FF9545] font-mono mb-1">100%</h4>
                <p className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-tertiary)] leading-tight">
                  Type-Safe<br />Coverage
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}