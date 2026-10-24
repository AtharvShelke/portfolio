import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  AlertTriangle,
  Cpu,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import type Lenis from 'lenis';

interface ExecutiveClarityBriefProps {
  onOpenBrochure?: () => void;
}

interface QuestionItem {
  id: string;
  number: string;
  question: string;
  shortLabel: string;
  icon: typeof Users;
  answerSummary: string;
  detailedPoints: string[];
  proofBadge: string;
}

const FIVE_QUESTIONS: QuestionItem[] = [
  {
    id: 'who',
    number: '01',
    question: 'Who do you help?',
    shortLabel: 'Target Clients',
    icon: Users,
    answerSummary: 'High-growth B2B SaaS founders, commercial retail operators, and product leadership who need mission-critical web systems and production AI without agency bloat.',
    detailedPoints: [
      'B2B SaaS companies needing autonomous inbound lead qualification & CRM routing',
      'Brick-and-mortar retail & showroom enterprises modernizing legacy spreadsheets',
      'Tech startups needing deterministic, zero-hallucination Gemini/OpenAI pipelines',
      'Founders requiring a principal-level software engineer from day 1 to deployment',
    ],
    proofBadge: 'Direct Architect Collaboration · Zero Middlemen',
  },
  {
    id: 'problem',
    number: '02',
    question: 'What expensive problem do you solve?',
    shortLabel: 'Expensive Friction',
    icon: AlertTriangle,
    answerSummary: 'Lost sales from slow inbound lead response (>40% drop-off), fragile AI wrappers that hallucinate in production, and inventory discrepancies that bleed retail margins.',
    detailedPoints: [
      'Pipeline Loss: Leads cooling down before sales reps manually review forms (>40% lost)',
      'AI Wrapper Risk: Brittle prompt chains that hallucinate schemas and break API contracts',
      'Operational Chaos: 12+ disconnected spreadsheets causing stock drift & billing errors',
      'Slow Release Velocity: Months spent on bloated agency retainers with zero shipped software',
    ],
    proofBadge: 'Eliminating Costly Operational Bleed',
  },
  {
    id: 'solution',
    number: '03',
    question: 'What does the solution do?',
    shortLabel: 'Engineered Solution',
    icon: Cpu,
    answerSummary: 'Deploys sub-120ms autonomous inbound intake agents, deterministic Gemini LLM pipelines with 100% Zod schema validation, and custom high-concurrency enterprise ERPs.',
    detailedPoints: [
      'Autonomous LeadCopilot: Ingests, qualifies, and routes leads to Slack/CRM in under 120ms',
      'Deterministic LLMs: Translates biometric/business data into validated PDFs with 0% hallucination',
      'Intelligent ERPs: Multi-warehouse stock sync, compatibility engines & automated GST invoices',
      'Strict Type-Safety: Next.js 16 App Router, React 19, PostgreSQL, and Prisma transaction isolation',
    ],
    proofBadge: 'Sub-120ms P95 · Deterministic Execution',
  },
  {
    id: 'evidence',
    number: '04',
    question: 'What evidence supports your claims?',
    shortLabel: 'Verified Proof',
    icon: ShieldCheck,
    answerSummary: '10,000+ leads ingested with 0% drop-off, 5,000+ AI protocols generated with 100% Zod schema adherence, ₹10L+ inventory automated, and 99.9% production uptime SLA.',
    detailedPoints: [
      '10,000+ Autonomous Inbound Invocations on LeadCopilot with <120ms P95 latency',
      '5,000+ Biometric Protocols Generated via OBSIDIAN with zero prompt retries',
      '12+ Spreadsheets Eliminated for Enrich Kitchen Studio (-92% stock discrepancy)',
      '₹10L+ Commercial Hardware Processed with 100% automated purchase-to-sale invoicing',
    ],
    proofBadge: 'Active Commercial Systems · 100% In Production',
  },
  {
    id: 'book',
    number: '05',
    question: 'How does a prospect book a conversation?',
    shortLabel: 'Book Consultation',
    icon: Calendar,
    answerSummary: 'Direct 1-click consultation scheduler with a strict <4-hour response SLA, pre-populated architecture briefs, or a 20-minute technical scoping call with Atharv.',
    detailedPoints: [
      '1-Click Technical Inquiry Form with instant architecture scope pre-filling',
      'Guaranteed < 4-Hour Response SLA during active business hours',
      'Direct email access: atharvshelke964@gmail.com with zero gatekeepers',
      'Rapid Technical Scoping Call (20 minutes, zero sales pressure, architectural focus)',
    ],
    proofBadge: '&lt; 4hr Response SLA · Direct Access',
  },
];

export default function ExecutiveClarityBrief({ onOpenBrochure }: ExecutiveClarityBriefProps) {
  const [activeQuestionId, setActiveQuestionId] = useState<string>('who');

  const activeQuestion = FIVE_QUESTIONS.find((q) => q.id === activeQuestionId) || FIVE_QUESTIONS[0];

  const scrollToContact = (customMessage?: string) => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    if (customMessage) {
      const messageInput = document.getElementById('message') as HTMLTextAreaElement | null;
      const subjectInput = document.getElementById('subject') as HTMLInputElement | null;
      if (messageInput) {
        messageInput.value = customMessage;
      }
      if (subjectInput) {
        subjectInput.value = '20-Minute Technical Architecture Scoping Session';
      }
    }

    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) {
      lenis.scrollTo(contactSection, { offset: -70, duration: 1.2 });
    } else {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative z-20 -mt-6 mb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl glass-panel p-6 sm:p-8 lg:p-10 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[140px] pointer-events-none" />

        {/* Top Header Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent font-semibold">
                Executive Clarity Framework · Answers in Seconds
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text">
              The 5 Questions Every Executive &amp; Founder Asks
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="px-4 py-2 rounded-full text-xs font-mono font-semibold bg-white/[0.05] border border-white/10 hover:border-accent/40 text-text hover:text-accent transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Executive Brochure</span>
              </button>
            )}

            <button
              onClick={() => scrollToContact('Hi Atharv, I reviewed your 5-Question Executive Brief and would like to schedule an introductory 20-minute architecture scoping call.')}
              className="px-4 py-2 rounded-full text-xs font-mono font-bold bg-accent text-bg hover:bg-accent-hover transition-colors flex items-center gap-1.5 shadow-md shadow-accent/20 cursor-pointer"
            >
              <span>Book Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5-Question Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6">
          {FIVE_QUESTIONS.map((item) => {
            const isSelected = item.id === activeQuestionId;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setActiveQuestionId(item.id)}
                className={`p-3 rounded-2xl text-left transition-all flex flex-col justify-between gap-2 border cursor-pointer ${
                  isSelected
                    ? 'bg-accent/15 border-accent text-white shadow-[0_0_20px_-4px_rgba(242,125,38,0.35)]'
                    : 'bg-white/[0.02] border-white/5 text-text-muted hover:text-white hover:bg-white/[0.05] hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-accent' : 'text-text-muted/60'}`}>
                    Q{item.number}
                  </span>
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-accent' : 'text-text-muted/60'}`} />
                </div>
                <div>
                  <span className="text-xs font-semibold block leading-tight truncate">
                    {item.shortLabel}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted/80 block mt-0.5 truncate">
                    {item.question}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Question Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeQuestion.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-7 rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left 7 cols: Direct Answer & Sub-Points */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-accent/15 border border-accent/30 text-accent">
                    Question {activeQuestion.number} of 05
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {activeQuestion.proofBadge}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-display font-bold text-text">
                  {activeQuestion.question}
                </h4>

                <p className="text-sm sm:text-base text-amber-200/90 font-light leading-relaxed">
                  {activeQuestion.answerSummary}
                </p>

                {/* Concrete Deliverables / Points */}
                <div className="space-y-2 pt-2">
                  {activeQuestion.detailedPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted font-light">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 5 cols: Fast Action & Direct Proof Snapshot */}
              <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-4 h-full">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted font-medium block mb-2">
                    Commercial Proof &amp; SLA
                  </span>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-text-muted">Direct Response SLA:</span>
                      <span className="text-emerald-400 font-bold">&lt; 4 Hours Guaranteed</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-text-muted">Turnaround Sprint:</span>
                      <span className="text-accent font-bold">1–3 Weeks to Production</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-text-muted">Active Work:</span>
                      <span className="text-text font-bold">10k+ Leads · 5k+ AI Protocols</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-text-muted">Schema Determinism:</span>
                      <span className="text-emerald-400 font-bold">100% Zod Validated</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() =>
                      scrollToContact(
                        `Hi Atharv, regarding Question #${activeQuestion.number} (${activeQuestion.question}): I'd like to explore how this applies to our business roadmap.`
                      )
                    }
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-mono font-bold bg-accent text-bg hover:bg-accent-hover transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-accent/20"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="mailto:atharvshelke964@gmail.com"
                    className="py-2.5 px-3 rounded-xl text-xs font-mono text-center text-text-muted hover:text-text bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors"
                  >
                    Direct Email ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
