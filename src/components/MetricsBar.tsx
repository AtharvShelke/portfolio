import { motion } from 'motion/react';
import { METRICS } from '../constants.js';

export default function MetricsBar() {
  return (
    <section className="relative z-20 -mt-8 mb-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className={`flex flex-col justify-center ${i > 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text tracking-tight">
                  {metric.value}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-text uppercase tracking-wider mb-0.5">
                {metric.label}
              </p>
              <p className="text-[11px] sm:text-xs text-text-muted font-light">
                {metric.sub}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
