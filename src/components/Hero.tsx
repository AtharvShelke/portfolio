import { motion } from "motion/react";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { Variants } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 1,
        restDelta: 0.001
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col overflow-hidden pt-22 md:pt-24"
    >
      {/* Background — optimized with will-change and smoother pulses */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] left-[15%] w-[520px] h-[520px] bg-accent/15 rounded-full blur-[120px] mix-blend-screen animate-pulse will-change-[opacity,transform]"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse will-change-[opacity,transform]"
          style={{ animationDuration: "15s", animationDelay: "-4s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.035'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 will-change-[opacity]"
      >
        <div className="max-w-5xl mx-auto text-center w-full">
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(36px,8.5vw,112px)] font-display font-bold tracking-[-0.03em] leading-[0.88] mb-7 will-change-transform"
          >
            INTERFACES
            <br />
            THAT <span className="text-accent">PERFORM</span>
            <br />
            <span className="text-stroke">& CONVERT</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-text-muted max-w-[480px] mx-auto mb-11 font-light leading-relaxed will-change-transform"
          >
            I design backend systems that handle concurrency, scale predictably,
            and stay reliable under load — not just polished UIs.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 will-change-transform"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-text text-bg font-medium rounded-full overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-10px_rgba(242,125,38,0.35)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 rounded-full" />
            </a>

            <a
              href="#work"
              className="px-8 py-4 font-medium rounded-full border border-border/50 hover:border-accent/40 hover:text-accent backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              See the Work
            </a>

            <a
              href="/Atharv_Shelke_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
            >
              Download CV ↗
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center gap-6 text-text-muted will-change-transform"
          >
            <div className="h-px w-12 bg-border" />
            <span className="text-xs tracking-widest uppercase font-light">
              4 Projects · 2+ Years · Based in Aurangabad
            </span>
            <div className="h-px w-12 bg-border" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center gap-2.5 pb-8 pt-6 will-change-[opacity,transform]"
      >
        <div className="flex items-center gap-2">
          <ArrowDownRight className="w-3 h-3 text-text-muted/50" />
          <span className="text-[9px] font-mono uppercase tracking-[0.28em] text-text-muted">
            Explore
          </span>
        </div>
        <div className="w-px h-12 bg-border/30 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-accent to-accent/20"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

