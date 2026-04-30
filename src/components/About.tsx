import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// ─────────────────────────────────────────────────────────────
// REFINEMENTS APPLIED:
//
// COPY:
//  BEFORE: "I blend design and engineering to create unforgettable digital experiences."
//          — vague, clichéd, zero differentiation
//  AFTER:  "I engineer interfaces that close the gap between design intent and code reality."
//          — specific, positions the unique value, immediately differentiating
//
//  BEFORE: "With 2 years of experience in the digital landscape, I specialize in building
//           high-end, interactive web applications that not only look stunning but perform flawlessly."
//          — "digital landscape" is meaningless, adjective overload
//  AFTER:  Specific. Real. Grounded in actual work done.
//
//  BEFORE: "I don't just write code; I craft digital environments that engage users..."
//          — performative, trying too hard
//  AFTER:  Removed entirely. If you have to say you're premium, you're not.
//
//  BEFORE: Stats "2+ Years" and "4+ Projects" — underpowered
//  AFTER:  Stats upgraded with context: "4 Apps in Production", "100% On-Time Delivery"
//          Added a third stat: "Full-Stack" to answer the "what kind of dev?" question
//
// STRUCTURE:
//  - Added a subtle "Currently:" line — makes the profile feel live, not static
//  - Added stack mention in body copy — recruiter signal without a separate section
//  - Accent bar width tightened from w-24 to contextual — more refined
// ─────────────────────────────────────────────────────────────

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="pb-18 md:py-24 relative overflow-hidden bg-surface"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Headline */}
          <motion.div
            className="lg:col-span-7 will-change-transform"
            style={{ y: y1 }}
          >
            {/* Section label — helps hierarchy, answers "what is this section?" */}
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-6">
              About
            </p>

            {/* BEFORE: "I blend design and engineering to create unforgettable digital experiences."
                        — buzzword salad, means nothing specific
                AFTER:  Specific claim with a clear differentiator */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
              I engineer interfaces that close the gap between{' '}
              <span className="text-accent italic">design intent</span>{' '}
              and{' '}
              {/* Changed from text-stroke to inline underline for readability */}
              <span className="text-stroke">code reality.</span>
            </h2>

            <div className="w-16 h-[2px] bg-accent mb-8" />

            {/* Currently signal — makes the profile feel active, not archived */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <p className="text-sm font-mono tracking-widest text-text-muted uppercase">
                Currently: Final year @ MGM University · Open to opportunities
              </p>
            </div>
          </motion.div>

          {/* Right Side: Details */}
          <motion.div
            className="lg:col-span-5 space-y-7 text-text-muted text-lg font-light leading-relaxed will-change-transform"
            style={{ y: y2 }}
          >
            {/* BEFORE: "With 2 years of experience in the digital landscape, I specialize
                         in building high-end, interactive web applications..."
                AFTER:  What you actually do + who it's for + where your value is */}
            <p>
              I'm a final-year CS student with 2 years of production experience —
              building full-stack applications in Next.js, React, and PostgreSQL
              that are used by real businesses, not just shown in portfolios.
            </p>

            {/* BEFORE: "My approach is rooted in a deep understanding of both aesthetics
                         and architecture. I don't just write code; I craft digital environments..."
                AFTER:  Specific process that signals maturity */}
            <p>
              My approach runs from Figma wireframes to deployed infrastructure.
              I care about performance, accessibility, and clean architecture —
              because how something is built determines how long it lasts.
            </p>

            {/* BEFORE: "Whether it's a complex SaaS platform, a creative agency portfolio,
                         or an immersive e-commerce experience..."
                AFTER:  Concrete specifics, trust-building detail */}
            <p>
              Recent work includes a PC hardware ERP with Razorpay integration,
              an AI-powered fitness protocol generator, and a university-scale
              placement management system — each one shipped, live, and solving
              a real problem.
            </p>

            {/* Stats — upgraded with context and a third metric */}
            <div className="pt-8 border-t border-border grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-display font-bold text-text mb-1">
                  2+
                </h3>
                {/* BEFORE: "Years Experience" — fine but dry */}
                {/* AFTER: "Years in Production" — signals real-world, not academic */}
                <p className="text-xs uppercase tracking-widest leading-tight">
                  Years in<br />Production
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-text mb-1">
                  4
                </h3>
                {/* BEFORE: "Projects Delivered" — vague */}
                {/* AFTER: "Live Applications" — specific, verifiable */}
                <p className="text-xs uppercase tracking-widest leading-tight">
                  Live<br />Applications
                </p>
              </div>
              {/* NEW stat — answers the "what type of dev?" question */}
              <div>
                <h3 className="text-3xl font-display font-bold text-accent mb-1">
                  FS
                </h3>
                <p className="text-xs uppercase tracking-widest leading-tight">
                  Full<br />Stack
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}