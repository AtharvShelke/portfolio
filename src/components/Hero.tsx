import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck, Cpu } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.1 });
  const yBg = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const opacityHero = useTransform(smoothProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-[100svh] max-h-[100svh] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-6 px-4 sm:px-6"
    >
      {/* Ambient background glows */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="radial-glow-top" />
        <div
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] mix-blend-screen animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] mix-blend-screen"
        />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      {/* Main Hero Content */}
      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto text-center w-full my-auto"
      >
        {/* Live Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 text-xs font-mono text-text-muted mb-4 sm:mb-6 hover:border-accent/40 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_#34d399]" />
          <span className="text-text font-medium">Atharv Shelke Studio</span>
          <span className="text-border">|</span>
          <span>Open for Q2–Q3 Client Engagements</span>
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(32px,5.8vw,80px)] font-display font-bold tracking-[-0.03em] leading-[0.94] mb-5 sm:mb-6"
        >
          ARCHITECTING HIGH-VELOCITY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
            DIGITAL SYSTEMS
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="text-stroke">& ENTERPRISE APPS</span>
        </motion.h1>

        {/* Executive Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed text-balance"
        >
          We engineer high-performance web products, custom ERP platforms, and AI automation engines for modern businesses that prioritize speed, transactional security, and scale.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="group relative px-7 py-3.5 bg-text text-bg font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_20px_50px_-10px_rgba(242,125,38,0.35)] w-full sm:w-auto text-center text-sm"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Project Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
          </a>

          <a
            href="#work"
            className="px-7 py-3.5 font-medium rounded-full glass-card hover:border-accent/40 hover:text-accent transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2 text-sm"
          >
            <Cpu className="w-4 h-4 text-accent" />
            Explore Case Studies
          </a>

          <a
            href="#estimator"
            className="px-5 py-3.5 font-mono text-xs uppercase tracking-wider text-text-muted hover:text-accent transition-colors flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Scope Estimator
          </a>
        </motion.div>

        {/* Floating Trust Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-text-muted font-mono"
        >
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Type-Safe Clean Architecture
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
            Next.js 16 + React 19 + PostgreSQL
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
            Production SLA Support
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-1.5 shrink-0"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-text-muted/60">
          Scroll To Inspect
        </span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-0.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}



