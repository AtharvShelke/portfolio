import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle, Clock, FileCode, Layers, Shield, Zap } from 'lucide-react';
import { FRAMEWORK_STEPS } from '../constants.js';

export default function Framework() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.1 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);


  return (
    <section
      id="framework"
      ref={containerRef}
      className="py-24 bg-bg relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>High-Velocity Execution Model</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tight text-text">
            How We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
              Deliver
            </span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 mb-6" />
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            A battle-tested 4-phase engineering lifecycle designed to eliminate scope creep, guarantee zero-regression releases, and deliver production-ready software on time.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Connecting Progress Line */}
          <div className="absolute top-8 bottom-8 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-white/10 hidden sm:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent via-amber-300 to-accent origin-top shadow-[0_0_15px_#f27d26]"
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {FRAMEWORK_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 md:gap-12 relative`}
                >
                  {/* Step Card */}
                  <div className="w-full md:w-1/2 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-accent/40 transition-colors">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-white/[0.04] text-accent border border-white/5">
                        {step.phase}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-text mb-3">
                      {step.title}
                    </h3>

                    <p className="text-text-muted text-sm font-light leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Deliverables tags */}
                    <div className="pt-4 border-t border-white/5 space-y-2">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                        Verified Outputs:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.outputs.map((out) => (
                          <span
                            key={out}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5 text-xs font-mono text-text-muted"
                          >
                            <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                            {out}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 rounded-full bg-surface border-2 border-accent items-center justify-center shadow-[0_0_20px_rgba(242,125,38,0.4)] z-10">
                    <span className="text-xs font-mono font-bold text-accent">
                      {step.step}
                    </span>
                  </div>

                  {/* Spacer for 2-column alignment */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
