import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Zap,
  Activity,
  Layers,
  ChevronRight,
  Calculator,
  Terminal,
  Server,
  Clock,
  Code2
} from 'lucide-react';
import type Lenis from 'lenis';

interface ShowcaseProject {
  id: string;
  tabTitle: string;
  badge: string;
  title: string;
  client: string;
  impactMetric: string;
  impactSub: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  logLines: { text: string; type: 'success' | 'info' | 'warn' }[];
  timeline: string;
  deliverables: string[];
}

const SHOWCASE_SYSTEMS: ShowcaseProject[] = [
  {
    id: 'erp',
    tabTitle: 'Enterprise ERP & Retail',
    badge: 'LIVE IN PRODUCTION',
    title: 'PC Builder & Enterprise Operations ERP',
    client: 'Hardware Retail Client',
    impactMetric: '₹10L+ Inventory Processed',
    impactSub: '100% automated purchase-to-sale invoicing & multi-warehouse stock sync',
    description: 'High-concurrency ERP platform with real-time hardware compatibility matrix, multi-depot stock synchronization, and webhook-verified Razorpay checkout.',
    tech: ['Next.js 16', 'React 19', 'PostgreSQL', 'Prisma ORM', 'Razorpay', 'Tailwind v4'],
    image: '/project-images/ecommerce.png',
    liveUrl: 'https://ecommerce-md.vercel.app/',
    timeline: '3–4 Weeks Deployment',
    deliverables: ['Multi-Warehouse Inventory', 'Automated GST Invoicing', 'Role-Based Access Control', 'Razorpay & Webhooks'],
    logLines: [
      { text: '[DB] PostgreSQL connection pool active (latency: 4ms)', type: 'info' },
      { text: '[PRISMA] Transaction isolation SERIALIZABLE: Stock lock acquired', type: 'success' },
      { text: '[RAZORPAY] Webhook signature verified: capture_id #77492', type: 'success' },
      { text: '[AUDIT] Generated compliant GST tax invoice PDF in 240ms', type: 'info' },
    ],
  },
  {
    id: 'studio',
    tabTitle: 'Operations & Inventory',
    badge: 'COMMERCIAL USE',
    title: 'Enrich Kitchen Studio Operations Hub',
    client: 'Enrich Furniture & Kitchens',
    impactMetric: '12+ Spreadsheets Eliminated',
    impactSub: '-92% inventory discrepancies across regional manufacturing & showroom depots',
    description: 'Mission-critical enterprise dashboard handling live stock allocations, multi-tier supplier catalogs, client ledgers, and automated quote-to-bill pipelines.',
    tech: ['React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Radix UI', 'TanStack Table'],
    image: '/project-images/enrich.png',
    liveUrl: 'https://enrich-furniture.vercel.app/',
    timeline: '2–3 Weeks Deployment',
    deliverables: ['Multi-Depot Inventory', 'Automated Supplier Purchase Orders', 'Customer Ledger Engine', 'Role Separation (Admin/Sales)'],
    logLines: [
      { text: '[SYNC] Multi-warehouse ledger synced across 3 regional depots', type: 'success' },
      { text: '[RBAC] Authorization verified: Studio Manager clearance', type: 'info' },
      { text: '[RECON] Zero stock drift detected across 1,420 catalog SKUs', type: 'success' },
      { text: '[PERF] Client quote generation completed in 1.1s', type: 'info' },
    ],
  },
  {
    id: 'ai',
    tabTitle: 'AI Automation & LLMs',
    badge: 'DETERMINISTIC AI',
    title: 'Biometric AI Health Protocol Engine',
    client: 'High-Growth Fitness Platform',
    impactMetric: '100% Zod Schema Adherence',
    impactSub: 'Sub-1.2s LLM prompt generation with zero non-deterministic text fallbacks',
    description: 'Generative AI pipeline translating biometric metrics into verified clinical workout protocols using Google Gemini SDK with strict schema enforcement.',
    tech: ['Google Gemini 2.0', 'Zod Validation', 'Next.js App Router', 'TypeScript', 'Tailwind'],
    image: '/project-images/ai-fitness.png',
    liveUrl: 'https://ai-workout-app-tau.vercel.app/',
    timeline: '1–2 Weeks Deployment',
    deliverables: ['Strict Zod Schema Enforcement', 'Streaming AI Protocols', 'Low-Latency Prompt Architecture', 'Exportable Technical Reports'],
    logLines: [
      { text: '[AI-SDK] Connecting to Google Gemini 2.0 Flash stream...', type: 'info' },
      { text: '[ZOD] Enforcing strict JSON schema on biometric payload', type: 'info' },
      { text: '[VALIDATION] 100% Schema conformity: 0 retries required', type: 'success' },
      { text: '[STREAM] First token time: 310ms | Total generation: 1.18s', type: 'success' },
    ],
  },
];

export default function Hero() {
  const [activeSystemId, setActiveSystemId] = useState<string>('erp');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isPinging, setIsPinging] = useState(false);
  const [pingLatency, setPingLatency] = useState<number>(14);

  const activeSystem = SHOWCASE_SYSTEMS.find((s) => s.id === activeSystemId) || SHOWCASE_SYSTEMS[0];

  // Smooth scroll helper that works with Lenis or native fallback
  const scrollToSection = (sectionId: string, prefillSubject?: string, prefillMessage?: string) => {
    if (prefillSubject || prefillMessage) {
      const subjectInput = document.getElementById('subject') as HTMLInputElement | null;
      const messageInput = document.getElementById('message') as HTMLTextAreaElement | null;
      if (subjectInput && prefillSubject) {
        subjectInput.value = prefillSubject;
      }
      if (messageInput && prefillMessage) {
        messageInput.value = prefillMessage;
      }
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) {
      lenis.scrollTo(element, { offset: -70, duration: 1.2 });
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('atharvshelke964@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // fallback
    }
  };

  const handlePingProbe = () => {
    setIsPinging(true);
    setTimeout(() => {
      setPingLatency(Math.floor(11 + Math.random() * 8));
      setIsPinging(false);
    }, 450);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Precision Background Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle radial warmth centered near top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/8 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />
        
        {/* Precise hairline grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 60%, transparent 100%)',
          }}
        />
      </div>

      {/* Main Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center flex-1 my-auto">
        
        {/* ── LEFT COLUMN: Value Proposition & High-Conversion Funnel ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-center text-left"
        >
          {/* Availability Pill & Role Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-medium shadow-[0_0_20px_-3px_rgba(16,185,129,0.25)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Q2–Q3 Engagements</span>
            </div>

            <span className="text-white/20 hidden sm:inline">•</span>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-text-muted text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>&lt; 4hr Response SLA</span>
            </div>
          </div>

          {/* Primary Punchy Headline */}
          <h1 className="text-[clamp(32px,4.5vw,56px)] font-display font-bold tracking-tight leading-[1.05] text-text mb-4 sm:mb-5">
            Architecting <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
              High-Velocity Web Systems
            </span>{' '}
            <br />
            &amp; Enterprise Platforms.
          </h1>

          {/* Executive Subtitle: Concrete, Meaningful, Grounded */}
          <p className="text-sm sm:text-base md:text-lg text-text-muted font-light leading-relaxed max-w-xl mb-6 sm:mb-8 text-balance">
            I help businesses, fast-scaling startups, and modern founders replace manual operational chaos with bulletproof web products, custom ERP engines, and automated AI pipelines.
          </p>

          {/* Conversion Fast-Track Selector (Intent Trigger) */}
          <div className="mb-8 p-4 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Select Your Project Goal:
              </span>
              <span className="text-[11px] font-mono text-emerald-400 font-medium">
                {activeSystem.timeline}
              </span>
            </div>

            {/* Quick Intent Pills */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {SHOWCASE_SYSTEMS.map((system) => {
                const isSelected = system.id === activeSystemId;
                return (
                  <button
                    key={system.id}
                    onClick={() => setActiveSystemId(system.id)}
                    className={`py-2 px-2.5 rounded-xl text-left text-xs font-medium transition-all flex flex-col justify-between gap-1 border ${
                      isSelected
                        ? 'bg-accent/15 border-accent text-white shadow-[0_0_15px_-3px_rgba(242,125,38,0.3)]'
                        : 'bg-white/[0.02] border-white/5 text-text-muted hover:text-white hover:bg-white/[0.05] hover:border-white/15'
                    }`}
                  >
                    <span className="font-semibold truncate">{system.tabTitle}</span>
                    <span className="text-[10px] font-mono text-text-muted/80 truncate">
                      {system.id === 'erp' ? 'Inventory & RBAC' : system.id === 'studio' ? 'Custom Ops Hub' : 'LLM & Zod AI'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Micro value reassurance */}
            <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-text-muted font-mono">
              <span className="flex items-center gap-1.5 truncate">
                <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>{activeSystem.deliverables[0]} &amp; {activeSystem.deliverables[1]}</span>
              </span>
              <button
                onClick={() =>
                  scrollToSection(
                    'contact',
                    `Inquiry: ${activeSystem.title}`,
                    `Hi Atharv, I want to discuss a project in ${activeSystem.tabTitle}. Target turnaround: ${activeSystem.timeline}. Let's schedule technical scoping.`
                  )
                }
                className="text-accent hover:underline inline-flex items-center gap-1 shrink-0 ml-2 font-medium"
              >
                Fast-Track Scope <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Primary High-Impact CTA Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
            <button
              onClick={() =>
                scrollToSection(
                  'contact',
                  `Architecture Consultation: ${activeSystem.title}`,
                  `Hi Atharv, I'm interested in building a high-velocity system. Let's schedule a call to explore architecture and delivery.`
                )
              }
              className="group relative px-7 py-4 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-[0_12px_35px_-8px_rgba(242,125,38,0.45)] hover:shadow-[0_16px_45px_-6px_rgba(242,125,38,0.6)] flex items-center justify-center gap-2 text-sm"
            >
              <span>Start Project Inquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('estimator')}
              className="px-6 py-4 glass-card hover:border-accent/40 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium text-text hover:text-white"
            >
              <Calculator className="w-4 h-4 text-accent" />
              <span>Instant Scope Estimator</span>
            </button>
          </div>

          {/* Direct Email Quick-Copy & Direct Channels */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted font-mono">
            <span>Direct Inquiries:</span>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 hover:border-accent/40 hover:text-white transition-colors cursor-pointer group"
              title="Click to copy email"
            >
              <span className="text-text group-hover:text-accent transition-colors">
                atharvshelke964@gmail.com
              </span>
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-text-muted group-hover:text-accent transition-colors" />
              )}
            </button>
            {copiedEmail && (
              <span className="text-emerald-400 font-semibold animate-fade-in text-[11px]">
                Copied to clipboard!
              </span>
            )}
          </div>
        </motion.div>


        {/* ── RIGHT COLUMN: Live Operations Cockpit (Proof & Visual Showcase) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full"
        >
          <div className="rounded-2xl md:rounded-3xl bg-[#090A0E] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden">
            
            {/* Top Cockpit Title & Telemetry Bar */}
            <div className="px-4 py-3 bg-[#0E1017] border-b border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="ml-2 text-text-muted text-[11px] font-semibold hidden sm:inline-block">
                  SYSTEM CONSOLE · V2.4
                </span>
              </div>

              {/* Live Telemetry Ping & Probe */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePingProbe}
                  disabled={isPinging}
                  title="Run simulated network ping probe"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 hover:border-accent/40 text-[11px] text-text-muted hover:text-white transition-all cursor-pointer"
                >
                  <Activity className={`w-3 h-3 text-emerald-400 ${isPinging ? 'animate-spin' : ''}`} />
                  <span>{pingLatency}ms P95</span>
                </button>

                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </div>
              </div>
            </div>

            {/* Showcase System Navigation Tabs */}
            <div className="px-3 pt-2 pb-0 bg-[#0B0C12] border-b border-white/5 flex gap-1 overflow-x-auto hide-scrollbar">
              {SHOWCASE_SYSTEMS.map((system) => {
                const isActive = system.id === activeSystemId;
                return (
                  <button
                    key={system.id}
                    onClick={() => setActiveSystemId(system.id)}
                    className={`px-3.5 py-2 rounded-t-xl text-xs font-medium transition-all shrink-0 flex items-center gap-1.5 border-t border-x ${
                      isActive
                        ? 'bg-[#090A0E] border-white/15 text-white font-semibold'
                        : 'bg-transparent border-transparent text-text-muted hover:text-text hover:bg-white/[0.02]'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-accent' : 'bg-white/20'}`} />
                    <span>{system.tabTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Active System Showcase Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSystem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-4 sm:p-6 space-y-4"
              >
                {/* Visual Preview Card with Screenshot */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 group aspect-video sm:aspect-[16/9] bg-black/50">
                  <img
                    src={activeSystem.image}
                    alt={activeSystem.title}
                    className="w-full h-full object-cover object-top filter brightness-[0.92] group-hover:scale-[1.02] group-hover:brightness-100 transition-all duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-transparent to-transparent opacity-80" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-accent tracking-wider uppercase">
                    {activeSystem.badge}
                  </div>

                  {/* Quick Action Overlay Buttons */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <a
                      href={activeSystem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded-md bg-black/80 hover:bg-accent hover:text-bg backdrop-blur-md border border-white/15 text-[11px] font-mono text-white transition-all flex items-center gap-1 shadow-lg"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Bottom Impact Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-mono uppercase text-accent font-semibold tracking-wider">
                        Verified Business Metric
                      </p>
                      <p className="text-base sm:text-lg font-display font-bold text-white leading-tight">
                        {activeSystem.impactMetric}
                      </p>
                    </div>

                    <button
                      onClick={() => scrollToSection('work')}
                      className="text-xs font-mono text-text-muted hover:text-white underline decoration-white/30 hover:decoration-white transition-colors"
                    >
                      Case Study →
                    </button>
                  </div>
                </div>

                {/* System Title & Architecture Specs */}
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-display font-bold text-text truncate">
                      {activeSystem.title}
                    </h3>
                    <span className="text-xs font-mono text-text-muted shrink-0">
                      Client: {activeSystem.client}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-muted font-light line-clamp-2">
                    {activeSystem.impactSub}
                  </p>
                </div>

                {/* Tech Architecture Stack Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {activeSystem.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Simulated Live Console Log Feed */}
                <div className="p-3 rounded-xl bg-[#06070A] border border-white/5 font-mono text-[11px] space-y-1">
                  <div className="flex items-center justify-between text-text-muted/60 text-[10px] pb-1 border-b border-white/5 mb-1.5">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-accent" />
                      OPERATIONAL LOG STREAM
                    </span>
                    <span className="text-emerald-400">READY</span>
                  </div>

                  {activeSystem.logLines.map((log, idx) => (
                    <div
                      key={idx}
                      className={`truncate flex items-center gap-2 ${
                        log.type === 'success'
                          ? 'text-emerald-400'
                          : log.type === 'warn'
                          ? 'text-amber-400'
                          : 'text-zinc-400'
                      }`}
                    >
                      <span className="text-text-muted/50 select-none">➜</span>
                      <span>{log.text}</span>
                    </div>
                  ))}
                </div>

                {/* Cockpit Action Fast-Link */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    onClick={() =>
                      scrollToSection(
                        'contact',
                        `Build Request: ${activeSystem.title}`,
                        `Hi Atharv, I want to engineer a system with capabilities similar to ${activeSystem.title}. My target timeline is ${activeSystem.timeline}.`
                      )
                    }
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-accent hover:text-bg border border-white/10 text-xs font-mono font-semibold text-text transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Request Blueprint Like This</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom Proof Strip & Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="pt-10 sm:pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 text-xs font-mono text-text-muted"
      >
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
          <span className="flex items-center gap-1.5 text-text">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            100% Type-Safe Architecture
          </span>
          <span className="text-border hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-accent" />
            PostgreSQL &amp; Next.js 16
          </span>
          <span className="text-border hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            99.9% Production SLA
          </span>
        </div>

        <button
          onClick={() => scrollToSection('solutions')}
          className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors group cursor-pointer"
        >
          <span className="text-[11px] uppercase tracking-wider">Explore Architectural Capabilities</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
