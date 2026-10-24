import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Download,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Clock,
  ArrowRight,
  Layers,
  Database,
  Building2,
  FileText,
  TrendingUp,
  Server,
  Code2
} from 'lucide-react';
import { BROCHURE_TIERS, BrochureTier, METRICS } from '../constants.js';
import type Lenis from 'lenis';

interface BrochureDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier?: (tierId: string) => void;
}

export default function BrochureDrawer({ isOpen, onClose, onSelectTier }: BrochureDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  // Body Scroll Lock & Scrollbar Width Compensation
  useEffect(() => {
    if (isOpen) {
      lastActiveElementRef.current = document.activeElement as HTMLElement;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Focus Trap & Escape Dismissal
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
          return;
        }

        if (e.key === 'Tab' && drawerRef.current) {
          const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;

          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        lastActiveElementRef.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleScopeTier = (tier: BrochureTier) => {
    onClose();
    if (onSelectTier) {
      onSelectTier(tier.id);
    }

    const messageBox = document.getElementById('message') as HTMLTextAreaElement | null;
    const subjectBox = document.getElementById('subject') as HTMLInputElement | null;
    if (messageBox) {
      messageBox.value = `Hi Atharv, I reviewed your AI Solutions Brochure and want to scope:
- Package: ${tier.name} (${tier.badge})
- Target Timeline: ${tier.timeline}
- Key Need: ${tier.problem}
Let's schedule a technical architecture session.`;
    }
    if (subjectBox) {
      subjectBox.value = `AI Solution Scoping: ${tier.name}`;
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
      if (lenis) {
        lenis.scrollTo(contactSection, { offset: -70, duration: 1.2 });
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const displayedTiers = activeTab === 'all' ? BROCHURE_TIERS : BROCHURE_TIERS.filter((t) => t.id === activeTab);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="brochure-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Slide-in Brochure Modal Panel */}
          <motion.div
            key="brochure-panel"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-[130] w-full max-w-4xl bg-[#090B10] border-l border-white/10 shadow-2xl flex flex-col pointer-events-auto"
          >
            {/* Top Bar Header */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between gap-4 bg-[#0A0D14]/95 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent/15 border border-accent/30 text-accent">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent font-semibold">
                      Official Capabilities Brochure · 2026
                    </span>
                  </div>
                  <h3 id="brochure-drawer-title" className="text-lg sm:text-xl font-display font-bold text-text">
                    AI Solutions Architecture &amp; Capabilities Dossier
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrint}
                  aria-label="Print or save PDF brochure"
                  className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-white/[0.05] border border-white/10 text-text hover:bg-white/10 hover:border-accent/40 transition-colors hidden sm:flex items-center gap-2"
                >
                  <Printer className="w-3.5 h-3.5 text-accent" />
                  <span>Print / PDF</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close brochure modal"
                  className="p-2 rounded-full border border-white/10 text-text-muted hover:text-text hover:border-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Brochure Body */}
            <div
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="brochure-drawer-title"
              className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-10 focus:outline-none hide-scrollbar text-text"
            >
              {/* Executive Thesis Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>The Production AI Thesis</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-display font-bold text-text leading-tight">
                    Moving Beyond Brittle Chatbots to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">Deterministic Systems.</span>
                  </h4>

                  <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed max-w-2xl">
                    Most AI wrappers fail in production because they lack deterministic type-safety, suffer from non-repeatable prompt outputs, and introduce massive latency. We engineer production-grade Generative AI pipelines with strict runtime Zod schemas, sub-120ms webhook dispatch, Redis task isolation, and zero-hallucination boundaries.
                  </p>

                  {/* High-Level Key Performance Signals */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/5">
                    {METRICS.map((m) => (
                      <div key={m.label} className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-xl sm:text-2xl font-display font-bold text-text block text-accent">
                          {m.value}
                        </span>
                        <span className="text-[11px] font-mono text-text-muted leading-tight block mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5-Question Executive Clarity Fast Brief */}
              <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Executive Briefing: 5 Fast Answers
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Verified SLAs &amp; Production Metrics</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-accent font-bold block">1. WHO WE HELP</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      B2B SaaS founders, retail operators, &amp; engineering teams needing production-grade AI &amp; systems.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-rose-400 font-bold block">2. EXPENSIVE PROBLEM</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      Slow lead triage (&gt;40% drop-off), hallucinating AI wrappers that break schemas, and spreadsheet chaos.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-amber-300 font-bold block">3. THE SOLUTION</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      Sub-120ms autonomous inbound intake, 100% Zod-validated Gemini LLMs, and high-concurrency ERPs.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold block">4. VERIFIED EVIDENCE</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      10k+ leads scored (&lt;120ms P95), 5k+ protocols with 0% hallucination, ₹10L+ volume automated.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-sky-400 font-bold block">5. BOOK A CALL</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      1-Click Technical Consultation with guaranteed &lt;4hr response or 20-min architecture scoping call.
                    </p>
                  </div>
                </div>
              </div>

              {/* Filter Tabs for Packages */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-display font-bold uppercase tracking-wider text-text flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-accent" />
                    <span>Executive AI Capabilities Catalog</span>
                  </h4>
                  <span className="text-xs font-mono text-text-muted">
                    {BROCHURE_TIERS.length} Modular Tiers
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                      activeTab === 'all'
                        ? 'bg-accent text-bg font-bold border-accent shadow-md shadow-accent/20'
                        : 'bg-white/[0.02] border-white/5 text-text-muted hover:text-text hover:bg-white/5'
                    }`}
                  >
                    All Capabilities
                  </button>
                  {BROCHURE_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setActiveTab(tier.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                        activeTab === tier.id
                          ? 'bg-accent text-bg font-bold border-accent shadow-md shadow-accent/20'
                          : 'bg-white/[0.02] border-white/5 text-text-muted hover:text-text hover:bg-white/5'
                      }`}
                    >
                      {tier.name.split('&')[0]}
                    </button>
                  ))}
                </div>

                {/* Solution Tiers Cards */}
                <div className="space-y-6">
                  {displayedTiers.map((tier, idx) => (
                    <div
                      key={tier.id}
                      className="p-6 sm:p-7 rounded-2xl glass-card border border-white/10 hover:border-accent/40 transition-colors space-y-5 relative overflow-hidden"
                    >
                      {/* Top Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-accent px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
                            0{idx + 1}
                          </span>
                          <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
                            {tier.badge}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{tier.timeline}</span>
                        </div>
                      </div>

                      {/* Title & Narrative */}
                      <div>
                        <h5 className="text-xl sm:text-2xl font-display font-bold text-text mb-2">
                          {tier.name}
                        </h5>
                        
                        {/* Problem / Solution Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold block">
                              Operational Friction:
                            </span>
                            <p className="text-xs text-text-muted font-light leading-relaxed">
                              {tier.problem}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/15 space-y-1">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold block">
                              Architected Solution:
                            </span>
                            <p className="text-xs text-text-muted font-light leading-relaxed">
                              {tier.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="pt-3 border-t border-white/5 space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted font-medium block">
                          Included Deliverables:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {tier.deliverables.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-xs text-text-muted">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack & ROI Trigger */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5">
                          {tier.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-[10px] font-mono text-text-muted bg-white/[0.03] border border-white/5 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => handleScopeTier(tier)}
                          className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-accent text-bg hover:bg-accent-hover transition-colors flex items-center gap-1.5 shadow-md shadow-accent/20"
                        >
                          <span>Scope This Solution</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engagement Models & SLAs */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0F17] border border-white/10 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>Commercial Engagement Frameworks</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-text">
                    Transparent, Sprint-Based Delivery
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed mt-1">
                    Every project runs on fixed-scope, milestone-gated sprints with direct architect collaboration. No junior delegates, no scope creep.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-xs font-mono text-accent font-bold">Model 01</span>
                    <h5 className="text-sm font-bold text-text">Rapid AI Sprint</h5>
                    <p className="text-xs text-text-muted font-light">
                      1–2 Weeks. Fast deployment of a single high-impact AI pipeline: Lead Qualification Agent, Biometric Generator, or Vector RAG engine.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-xs font-mono text-accent font-bold">Model 02</span>
                    <h5 className="text-sm font-bold text-text">Full Platform Architecture</h5>
                    <p className="text-xs text-text-muted font-light">
                      3–4 Weeks. End-to-end commercial product engineering: Custom ERP, Multi-Tenant SaaS, or full autonomous operations console.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-xs font-mono text-accent font-bold">Model 03</span>
                    <h5 className="text-sm font-bold text-text">Fractional AI Solutions Lead</h5>
                    <p className="text-xs text-text-muted font-light">
                      Monthly Retainer. Ongoing architecture governance, prompt optimization, model fine-tuning, and priority 24/7 SLA escalation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Call to Action */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border border-accent/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-base font-display font-bold text-text">
                    Ready to operationalize AI in your business?
                  </h5>
                  <p className="text-xs text-text-muted font-light">
                    Book an initial 20-minute technical architecture consultation directly with Atharv.
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={() => onClose()}
                  className="px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-accent text-bg hover:bg-accent-hover transition-colors shrink-0 shadow-lg shadow-accent/25 flex items-center gap-2"
                >
                  <span>Initiate Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
