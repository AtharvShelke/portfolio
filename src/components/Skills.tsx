import { motion } from 'motion/react';
import { TECH_MATRIX } from '../constants.js';
import { Cpu, Terminal, Shield, Sparkles } from 'lucide-react';

export default function Skills() {
  return (
    <section id="capabilities" className="py-24 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Systems & Architecture Matrix</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tight text-text">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
              Matrix
            </span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 mb-6" />
          <p className="text-text-muted text-base font-light leading-relaxed">
            Our technological selections prioritize zero-regression reliability, memory efficiency, and maximum developer velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_MATRIX.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono text-accent">Node 0{idx + 1}</span>
                  <Sparkles className="w-4 h-4 text-accent/60" />
                </div>

                <h3 className="text-xl font-display font-bold text-text mb-2">
                  {group.category}
                </h3>

                <p className="text-xs text-text-muted font-light leading-relaxed mb-6">
                  {group.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-text-muted hover:text-text hover:border-accent/30 transition-colors"
                    >
                      <span>{skill}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted/60">
                <span>Status: Enterprise Ready</span>
                <span className="text-accent">100% Tested</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
