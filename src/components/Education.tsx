import { motion } from 'motion/react';
import { EDUCATION } from '../constants.js';

// ─────────────────────────────────────────────────────────────
// REFINEMENTS APPLIED:
//
// COPY:
//  BEFORE: "Academic Journey" — sounds like a LinkedIn headline from 2017
//  AFTER:  "Education" as section label + "Built to Ship" as headline
//          — reframes education as applied, not theoretical
//          — signals that study led to real-world output
//
// STRUCTURE:
//  - Section label added above headline (consistent with other refined sections)
//  - Subtitle added below headline — contextualises why education matters here
//  - Timeline card hover border color is now accent (already in code, confirmed)
//  - Year font changed to match mono style used in other sections
//
// NOTE: The timeline layout itself is excellent — no structural changes needed.
//       The zigzag alternating pattern, the animated dot, the glass cards —
//       all work well. Refinement is copy-only here.
// ─────────────────────────────────────────────────────────────

export default function Education() {
  return (
    <section id="education" className="py-18 md:py-24 bg-bg relative">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          {/* Section label — consistency with other sections */}
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            Education
          </p>

          {/* BEFORE: "Academic Journey" — generic, tells you nothing */}
          {/* AFTER: "Built to Ship" — reframes education as applied output */}
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
            Built to <span className="text-stroke">Ship</span>
          </h2>

          <div className="w-16 h-[2px] bg-accent mt-8 mb-6" />

          {/* Subtitle — frames the education section with intent */}
          {/* BEFORE: Section jumped straight into timeline with no context */}
          {/* AFTER: One sentence that earns the section's presence on the page */}
          <p className="text-text-muted font-light max-w-md">
            Academic foundation in CS — complemented by 4 production applications
            built and shipped during the same period.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative overflow-hidden">
          {/* Vertical Line — unchanged, works well */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

          {EDUCATION.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline Dot — unchanged, good visual */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(242,125,38,0.5)]" />

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className="glass-panel p-7 rounded-2xl hover:border-accent transition-colors duration-300">
                  {/* Year — consistent mono style */}
                  <span className="text-accent font-mono text-xs tracking-[0.18em] uppercase mb-3 block">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-display font-bold mb-1 leading-tight">
                    {item.degree}
                  </h3>
                  <h4 className="text-text-muted text-sm font-medium mb-4 tracking-wide">
                    {item.institution}
                  </h4>
                  <p className="text-text-muted text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Empty space for zigzag alignment — unchanged */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}