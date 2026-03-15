import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Variants } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants:Variants  = {
    hidden: { y: 40, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 100, damping: 20, mass: 1 },
    },
  };

  return (
   <section className="relative min-h-[100svh] flex flex-col overflow-visible pt-24">

  {/* Background — z-0, pointer-events-none */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute top-[10%] left-[15%] w-[520px] h-[520px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
    <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '11s', animationDelay: '-4s' }} />
    <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '14s', animationDelay: '-7s' }} />
    {/* Subtle grain overlay */}
    <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.035'/%3E%3C/svg%3E")` }} />
  </div>

  {/* ── MAIN COPY — flex-1 fills the space, centers the content ── */}
  {/* KEY FIX: this div takes up all remaining vertical space     */}
  {/* The scroll indicator is OUTSIDE this div, in normal flow    */}
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="relative z-10 flex-1 flex flex-col items-center justify-center px-6"
  >
    <div className="max-w-5xl mx-auto text-center w-full">

      <motion.div variants={itemVariants} className="mb-8 inline-block">
        <span className="px-5 py-2.5 rounded-full border border-border/50 bg-surface/30 backdrop-blur-md text-[10px] font-semibold tracking-[0.22em] uppercase text-accent">
          Creative Developer &amp; Designer
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-[clamp(52px,9vw,120px)] font-display font-bold tracking-[-0.03em] leading-[0.88] mb-7"
      >
        CRAFTING <br />
        <span className="text-stroke">DIGITAL</span> <br />
        EXPERIENCES
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg md:text-xl text-text-muted max-w-[520px] mx-auto mb-11 font-light leading-relaxed"
      >
        I build immersive, high-performance web applications that blend
        cutting-edge technology with premium design.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="group relative px-8 py-4 bg-text text-bg font-medium rounded-full overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-10px_rgba(200,136,58,0.35)]"
        >
          <span className="relative z-10 flex items-center gap-2">
            Let's Talk <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0 rounded-full" />
        </a>
        <a
          href="#work"
          className="px-8 py-4 font-medium rounded-full border border-border/50 hover:border-accent/40 hover:text-accent backdrop-blur-sm transition-all hover:-translate-y-0.5"
        >
          View Selected Work
        </a>
      </motion.div>
    </div>
  </motion.div>


  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative z-10 flex flex-col items-center gap-2.5 pb-8 pt-6"
  >
    <span className="text-[9px] font-mono uppercase tracking-[0.28em] text-text-muted">Scroll</span>
    <div className="w-px h-12 bg-border/30 relative overflow-hidden rounded-full">
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-accent to-accent/20"
        animate={{ y: ['-100%', '300%'] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
      />
    </div>
  </motion.div>

</section>
  )
}
