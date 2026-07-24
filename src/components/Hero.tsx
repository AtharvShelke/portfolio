import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight, Sparkles, FileText } from "lucide-react";
import HeroTerminal from "./HeroTerminal";
import ResumeDrawer from "./ResumeDrawer";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { containerVariants, itemVariants } from "../lib/motion-tokens";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16"
    >
      {/* Background Ambient Radial Gradient Aura Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div
          className="absolute top-[12%] left-[18%] w-[550px] h-[550px] bg-[#F27D26]/15 rounded-full blur-[140px] mix-blend-screen animate-pulse will-change-[opacity,transform]"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute bottom-[8%] right-[12%] w-[600px] h-[600px] bg-[#A855F7]/10 rounded-full blur-[160px] mix-blend-screen animate-pulse will-change-[opacity,transform]"
          style={{ animationDuration: "15s", animationDelay: "-4s" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center text-center"
      >
        <div className="max-w-4xl mx-auto w-full">
          {/* Live Status Badge */}
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <Badge variant="primary" pulseBeacon className="px-4 py-1.5 text-xs uppercase tracking-wider font-bold">
              Available for Full-time & Contract Roles
            </Badge>
          </motion.div>

          {/* H1 Hero Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-[#font-heading] tracking-tight leading-[1.05] mb-6 uppercase"
          >
            BUILDING HIGH-SCALE
            <br />
            <span className="text-[#F27D26] drop-shadow-[0_0_24px_rgba(242,125,38,0.4)]">FULL-STACK</span>
            <br />
            <span className="text-stroke">WEB PRODUCTS</span>
          </motion.h1>

          {/* Lead Subhead Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 font-normal leading-relaxed"
          >
            Full-stack engineer crafting production applications in Next.js, Node, and PostgreSQL. Focused on type-safe architecture, sub-100ms API responses, and resilient design systems.
          </motion.p>

          {/* Call-to-Action Group */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a href="#contact">
              <Button size="lg" variant="primary" className="w-full sm:w-auto text-base">
                Hire Me <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>

            <a href="#work">
              <Button size="lg" variant="glass" className="w-full sm:w-auto text-base">
                See the Work
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsResumeOpen(true)}
              className="w-full sm:w-auto text-base"
            >
              <FileText className="w-4 h-4 mr-1" /> Preview CV ↗
            </Button>
          </motion.div>

          <ResumeDrawer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

          {/* Interactive Live CLI Terminal */}
          <motion.div variants={itemVariants} className="w-full">
            <HeroTerminal />
          </motion.div>

          {/* Metrics Quick Tagline */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center justify-center gap-4 text-[var(--text-tertiary)] font-mono text-xs tracking-wider uppercase"
          >
            <div className="h-px w-10 bg-[var(--border-default)]" />
            <span>4 Production Apps shipped · 2+ Years Experience · Aurangabad, IN</span>
            <div className="h-px w-10 bg-[var(--border-default)]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 pt-6 shrink-0"
      >
        <div className="flex items-center gap-1.5">
          <ArrowDownRight className="w-3.5 h-3.5 text-[#F27D26]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--text-tertiary)]">
            Explore Portfolio
          </span>
        </div>
        <div className="w-px h-10 bg-[var(--border-default)] relative overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#F27D26] to-[#F27D26]/20"
            animate={{ y: ["-100%", "300%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
