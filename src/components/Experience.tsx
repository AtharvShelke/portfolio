import { motion } from 'motion/react';
import { EXPERIENCE, ExperienceEntry } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-surface relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-24">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            Experience
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
            Engineering <span className="text-stroke">Impact</span>
          </h2>

          <div className="w-16 h-[2px] bg-accent mt-8 mb-6" />

          <p className="text-text-muted font-light max-w-md">
            Production roles, founder experience, and client product delivery.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative overflow-hidden">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(242,125,38,0.5)]" />

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className="glass-panel p-7 rounded-2xl hover:border-accent transition-colors duration-300">
                  <span className="text-accent font-mono text-xs tracking-[0.18em] uppercase mb-3 block">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-1 leading-tight">
                    {item.role}
                  </h3>
                  <h4 className="text-text font-medium text-sm mb-4 tracking-wide text-accent/90">
                    {item.company}
                  </h4>
                  <p className="text-text-muted text-sm font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-2 border-t border-border/40 pt-4">
                    {item.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-text-muted font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for zigzag alignment */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
