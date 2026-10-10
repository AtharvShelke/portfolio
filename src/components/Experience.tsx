import { motion } from 'motion/react';
import { Briefcase, Building2, Quote, ShieldCheck, Star, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE, TESTIMONIALS_SIGNAL } from '../constants.js';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record & Commercial Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-text">
            Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
              Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6 mb-6" />
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            From co-founding AI platforms to delivering custom commercial ERPs for brick-and-mortar retail and hardware stores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT 7 COLS: Career Timeline ── */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent via-white/10 to-transparent" />

            <div className="space-y-10 sm:space-y-12">
              {EXPERIENCE.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-16 group"
                >
                  {/* Timeline Pulse Marker */}
                  <div className="absolute left-2.5 sm:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-accent shadow-[0_0_12px_rgba(242,125,38,0.7)] group-hover:scale-125 transition-transform" />

                  <div className="p-6 sm:p-7 rounded-2xl glass-card glass-card-hover border border-white/10 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-semibold">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-text-muted uppercase tracking-wider flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-accent" />
                        {item.company}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-text group-hover:text-accent transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-text-muted text-sm font-light leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-2 pt-3 border-t border-white/5">
                      {item.highlights.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted font-light">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT 5 COLS: Client Proof & Testimonials ── */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090B10] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Client Endorsements
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {TESTIMONIALS_SIGNAL.map((testimonial, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 relative"
                  >
                    <Quote className="w-6 h-6 text-accent/30 absolute top-4 right-4" />
                    <p className="text-sm text-text font-light italic leading-relaxed pr-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-display font-semibold text-text">
                          {testimonial.author}
                        </p>
                        <p className="text-[11px] font-mono text-text-muted">
                          {testimonial.role}
                        </p>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                        Verified Contract
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Metric Snapshot */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-2xl font-display font-bold text-accent">100%</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted">On-Time Milestones</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="text-2xl font-display font-bold text-emerald-400">0%</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-text-muted">Unhandled Regressions</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
