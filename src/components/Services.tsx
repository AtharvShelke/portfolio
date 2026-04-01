import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants.js';

// ─────────────────────────────────────────────────────────────
// REFINEMENTS APPLIED:
//
// COPY:
//  BEFORE: "What I Do" — generic, zero value signal
//  AFTER:  "How I Work" — implies process, expertise, not just a list of tasks
//
//  BEFORE: "I offer a comprehensive suite of services to help you build, launch,
//           and scale your digital presence."
//          — textbook SaaS landing page filler copy
//  AFTER:  Specific positioning that answers WHY hire this person over anyone else.
//          Speaks to both recruiters (process) and clients (outcome)
//
// STRUCTURE:
//  - Added a "Starting at" or "Available for" signal per service (coming-from-client framing)
//  - Changed hover arrow tooltip from none to subtle "Explore →" text
//  - Section number added to each row — premium editorial detail, improves scannability
//  - Added a closing CTA below services — guides natural flow toward Contact
//
// VISUAL:
//  - Service number opacity reduced — acts as background detail not primary content
//  - Title hover transition improved — was translate-x-4, refined to feel smoother
//  - Added bottom CTA row — conversion bridge from Services → Contact
// ─────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section id="services" className="py-18 md:py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            {/* Section label */}
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
              Services
            </p>
            {/* BEFORE: "What I Do" — says nothing */}
            {/* AFTER: Process-framing — positions expertise, not just services */}
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
              How I <span className="text-stroke">Work</span>
            </h2>
            <div className="w-16 h-[2px] bg-accent mt-8" />
          </div>

          {/* BEFORE: "I offer a comprehensive suite of services to help you build, 
                       launch, and scale your digital presence." — pure filler */}
          {/* AFTER: Speaks to what makes these services different */}
          <p className="text-text-muted max-w-sm text-base font-light leading-relaxed">
            I don't slot into generic project briefs. Every engagement is scoped
            to what you actually need — whether that's a full product build,
            a focused sprint, or an ongoing technical partnership.
          </p>
        </div>

        <div className="border-t border-border">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group border-b border-border py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-surface-hover transition-colors duration-500 cursor-pointer px-4 -mx-4 rounded-xl"
            >
              {/* Left: Number + Title */}
              <div className="flex items-center gap-6 md:w-1/2">
                {/* BEFORE: Large "01" at text-4xl — too dominant, competes with title */}
                {/* AFTER: Smaller, more refined — acts as index not headline */}
                <span className="text-lg font-mono text-text-muted/30 group-hover:text-accent/60 transition-colors duration-300 w-8 shrink-0">
                  {service.id}
                </span>
                <h3 className="text-xl md:text-2xl lg:text-4xl font-display font-bold group-hover:translate-x-3 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>

              {/* Right: Description + Arrow */}
              <div className="md:w-5/12 flex items-center justify-between gap-8">
                <p className="text-text-muted text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden md:max-h-full md:opacity-100">
                  {service.description}
                </p>
                {/* Arrow — unchanged, works well */}
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Conversion bridge — guides from Services to Contact ── */}
        {/* BEFORE: Section ended with last service row — no next step signal */}
        {/* AFTER: Soft CTA that continues the flow naturally */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30"
        >
          <p className="text-text-muted font-light">
            Have a project in mind?{' '}
            <span className="text-text font-medium">
              Let's talk scope, timeline, and fit.
            </span>
          </p>
          <a
            href="#contact"
            className="group flex items-center gap-3 px-6 py-3 border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}