import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Database, Sparkles } from 'lucide-react';
import { SOLUTIONS } from '../constants.js';

const iconMap: Record<string, typeof Layers> = {
  '01': Database,
  '02': Layers,
  '03': Cpu,
  '04': Sparkles,
};

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-surface relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
                Core Capabilities & Enterprise Offerings
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tight text-text">
              Enterprise{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
                Solutions
              </span>
            </h2>
            <div className="w-20 h-1 bg-accent mt-6" />
          </div>

          <p className="text-text-muted max-w-md text-base font-light leading-relaxed">
            We don't assemble generic cookie-cutter templates. Every system is custom-engineered for your operational workflow, transactional scale, and proprietary business logic.
          </p>
        </div>

        {/* 2x2 Bento Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOLUTIONS.map((solution, index) => {
            const IconComponent = iconMap[solution.id] || Layers;
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 sm:p-10 rounded-3xl glass-card glass-card-hover flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle card glow accent on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/15 transition-colors duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Badge + Number */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider bg-accent/10 border border-accent/20 text-accent">
                      {solution.badge}
                    </span>
                    <span className="text-2xl font-mono text-white/20 group-hover:text-accent/60 transition-colors">
                      {solution.id}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-bg transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-text group-hover:text-accent transition-colors">
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-amber-300/90 mb-4 font-mono">
                    {solution.tagline}
                  </p>

                  <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8 pt-6 border-t border-white/5">
                    <p className="text-[11px] uppercase tracking-widest font-mono text-text-muted">
                      Key Deliverables:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs text-text-muted font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Tech Pills + Action */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {solution.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono text-text-muted bg-white/[0.02] border border-white/5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-accent hover:underline underline-offset-4"
                  >
                    Request Scoping <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
