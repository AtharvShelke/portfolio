import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Clock,
  ArrowRight,
  Building2,
  FileText
} from 'lucide-react';
import { BROCHURE_TIERS, BrochureTier } from '../constants.js';
import type Lenis from 'lenis';

interface BrochureDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier?: (tierId: string) => void;
}

const STE_METRICS = [
  { value: '10,000+', label: 'Verified Invocations', sub: 'Zero inbound records lost' },
  { value: '100%', label: 'Schema Compliance', sub: 'Strict runtime validation' },
  { value: '< 120ms', label: 'P95 Ingestion Latency', sub: 'Redis task isolation' },
  { value: '99.9%', label: 'System Availability SLA', sub: 'Continuous operational uptime' },
];

export default function BrochureDrawer({ isOpen, onClose, onSelectTier }: BrochureDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | string>('all');

  // Pause Lenis smooth-scroller and lock document body scroll while drawer is open
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;

    if (isOpen) {
      lenis?.stop();
      lastActiveElementRef.current = document.activeElement as HTMLElement;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      lenis?.start();
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Focus Trap and Escape Key Dismissal
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
      messageBox.value = `Hello Atharv,

I reviewed the Technical Capabilities Specification.
I request an architecture review session for the following system:
- System: ${tier.name}
- Specification: ${tier.badge}
- Deployment Duration: ${tier.timeline}
- Problem Statement: ${tier.problem}

Please provide available times for an architecture review session.`;
    }
    if (subjectBox) {
      subjectBox.value = `Technical Architecture Review: ${tier.name}`;
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

          {/* Slide-in Specification Modal Panel */}
          <motion.div
            key="brochure-panel"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="fixed top-0 right-0 bottom-0 z-[130] w-full max-w-4xl bg-[#090B10] border-l border-white/10 shadow-2xl flex flex-col pointer-events-auto h-screen max-h-screen overflow-hidden overscroll-contain"
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
                      Technical Specification · Issue 2026 · ASD-STE100
                    </span>
                  </div>
                  <h3 id="brochure-drawer-title" className="text-lg sm:text-xl font-display font-bold text-text">
                    System Architecture and Technical Capabilities Specification
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrint}
                  aria-label="Export technical specification to PDF"
                  className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-white/[0.05] border border-white/10 text-text hover:bg-white/10 hover:border-accent/40 transition-colors hidden sm:flex items-center gap-2"
                >
                  <Printer className="w-3.5 h-3.5 text-accent" />
                  <span>Export Document (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close specification modal"
                  className="p-2 rounded-full border border-white/10 text-text-muted hover:text-text hover:border-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Document Body */}
            <div
              ref={drawerRef}
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="brochure-drawer-title"
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-8 space-y-8 focus:outline-none custom-scrollbar text-text"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {/* Architecture Thesis Specification */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>System Architecture Standard</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-display font-bold text-text leading-tight">
                    Deterministic System Architecture for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">Production Artificial Intelligence.</span>
                  </h4>

                  <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed max-w-2xl">
                    Standard language models fail in production because output schemas vary and response latency is high. This architecture enforces strict runtime validation schemas. The system routes inbound data in less than 120 milliseconds. Redis queues isolate tasks. The model outputs validated data without schema errors.
                  </p>

                  {/* High-Level Key Performance Signals */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/5">
                    {STE_METRICS.map((m) => (
                      <div key={m.label} className="p-3 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-xl sm:text-2xl font-display font-bold text-accent block">
                          {m.value}
                        </span>
                        <span className="text-[11px] font-mono text-text block mt-0.5 font-medium">
                          {m.label}
                        </span>
                        <span className="text-[10px] font-mono text-text-muted block mt-0.5">
                          {m.sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Summary: Core Operational Requirements */}
              <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Technical Summary: Core System Requirements
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Verified Test Data and Operational SLAs</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-accent font-bold block">1. TARGET USERS</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      Software engineering teams, enterprise operators, and commercial businesses that require deterministic software systems.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-rose-400 font-bold block">2. OPERATIONAL PROBLEM</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      Manual lead processing causes high record loss. Non-validated model outputs corrupt downstream database schemas.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-amber-300 font-bold block">3. TECHNICAL RESOLUTION</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      Inbound webhook pipelines process payloads under 120ms. Runtime schemas validate all model outputs before database execution.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold block">4. VERIFICATION DATA</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      10,000+ records processed at P95 latency under 120ms. 5,000+ documents generated with 100% schema adherence.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-sky-400 font-bold block">5. TECHNICAL REVIEW PROCEDURE</span>
                    <p className="text-text-muted text-[11px] font-light leading-snug">
                      Submit an architecture consultation request. Engineering response time is guaranteed under 4 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Architecture Catalog Tabs */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base font-display font-bold uppercase tracking-wider text-text flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-accent" />
                    <span>Technical Architecture Catalog</span>
                  </h4>
                  <span className="text-xs font-mono text-text-muted">
                    {BROCHURE_TIERS.length} Modular Configurations
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    type="button"
                    onClick={() => setActiveTab('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                      activeTab === 'all'
                        ? 'bg-accent text-bg font-bold border-accent shadow-md shadow-accent/20'
                        : 'bg-white/[0.02] border-white/5 text-text-muted hover:text-text hover:bg-white/5'
                    }`}
                  >
                    All Configurations
                  </button>
                  {BROCHURE_TIERS.map((tier, idx) => (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setActiveTab(tier.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                        activeTab === tier.id
                          ? 'bg-accent text-bg font-bold border-accent shadow-md shadow-accent/20'
                          : 'bg-white/[0.02] border-white/5 text-text-muted hover:text-text hover:bg-white/5'
                      }`}
                    >
                      System 0{idx + 1}
                    </button>
                  ))}
                </div>

                {/* System Configuration Cards */}
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
                            SPECIFICATION 0{idx + 1}
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
                              Operational Problem:
                            </span>
                            <p className="text-xs text-text-muted font-light leading-relaxed">
                              {tier.problem}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/15 space-y-1">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold block">
                              Technical Solution:
                            </span>
                            <p className="text-xs text-text-muted font-light leading-relaxed">
                              {tier.solution}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* System Deliverables */}
                      <div className="pt-3 border-t border-white/5 space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted font-medium block">
                          System Deliverables:
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

                      {/* Measurement and Selection Action */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1.5 max-w-md">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                            Measured Verification: {tier.roiMetric}
                          </span>
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
                        </div>

                        <button
                          type="button"
                          onClick={() => handleScopeTier(tier)}
                          className="px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-accent text-bg hover:bg-accent-hover transition-colors flex items-center gap-1.5 shadow-md shadow-accent/20"
                        >
                          <span>Select This Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Level Agreements & Delivery Options */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0F17] border border-white/10 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>Service Level Agreements and Delivery Options</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-text">
                    Fixed-Scope Sprint Delivery Framework
                  </h4>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed mt-1">
                    All projects use fixed-scope sprints with defined milestone acceptance tests. An engineering architect leads the technical implementation directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-xs font-mono text-accent font-bold">Option 01</span>
                    <h5 className="text-sm font-bold text-text">Two-Week Pipeline Deployment</h5>
                    <p className="text-xs text-text-muted font-light">
                      Duration: 1 to 2 weeks. Deploy a single production pipeline such as an inbound qualification agent, vector retrieval system, or document generator.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-xs font-mono text-accent font-bold">Option 02</span>
                    <h5 className="text-sm font-bold text-text">Four-Week Enterprise Platform</h5>
                    <p className="text-xs text-text-muted font-light">
                      Duration: 3 to 4 weeks. Build a complete operational application such as a multi-warehouse inventory console or multi-tenant web application.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-xs font-mono text-accent font-bold">Option 03</span>
                    <h5 className="text-sm font-bold text-text">Monthly Engineering Retainer</h5>
                    <p className="text-xs text-text-muted font-light">
                      Duration: Monthly schedule. Provide continuous architecture review, model optimization, latency reduction, and priority technical support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Technical Review Call to Action */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border border-accent/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-base font-display font-bold text-text">
                    Schedule a Technical Architecture Review
                  </h5>
                  <p className="text-xs text-text-muted font-light">
                    Request a 20-minute technical review session directly with the system architect.
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={() => onClose()}
                  className="px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-accent text-bg hover:bg-accent-hover transition-colors shrink-0 shadow-lg shadow-accent/25 flex items-center gap-2"
                >
                  <span>Schedule Technical Review</span>
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
