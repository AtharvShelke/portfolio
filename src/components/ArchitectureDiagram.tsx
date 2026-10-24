import React from 'react';

interface ArchitectureDiagramProps {
  projectId: number;
}

export default function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  if (projectId === 1) {
    // Project 1: LeadCopilot — Autonomous Lead Attribution & AI CRM
    return (
      <div className="w-full overflow-x-auto hide-scrollbar p-6 bg-[#0c0c0e] rounded-2xl border border-border/40">
        <div className="min-w-[700px] flex flex-col items-center gap-6">
          <div className="flex items-center justify-between w-full">
            <p className="text-xs font-mono text-accent uppercase tracking-widest">Autonomous AI Intake &amp; Attribution Architecture</p>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              P95 Latency &lt; 120ms
            </span>
          </div>
          
          <div className="w-full grid grid-cols-5 gap-3 text-center text-xs font-mono">
            {/* Layer 1: Multi-Channel Ingest */}
            <div className="p-3.5 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold text-[11px]">1. INTAKE</span>
              <span className="text-text font-sans font-medium text-[11px]">Multi-Channel Ingest</span>
              <span className="text-text-muted text-[10px]">Forms / Webhooks / API</span>
            </div>

            {/* Layer 2: Redis Ingestion Queue */}
            <div className="p-3.5 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold text-[11px]">2. QUEUE</span>
              <span className="text-text font-sans font-medium text-[11px]">Redis Queue (Upstash)</span>
              <span className="text-text-muted text-[10px]">Zero Lead Drop-off</span>
            </div>

            {/* Layer 3: AI Qualification */}
            <div className="p-3.5 rounded-xl bg-surface border border-accent/40 flex flex-col items-center justify-center gap-2 shadow-[0_0_15px_-3px_rgba(242,125,38,0.2)]">
              <span className="text-amber-300 font-bold text-[11px]">3. AI QUALIFIER</span>
              <span className="text-text font-sans font-medium text-[11px]">Google Gemini 2.0</span>
              <span className="text-text-muted text-[10px]">Intent &amp; Deal Scoring</span>
            </div>

            {/* Layer 4: Schema Guard */}
            <div className="p-3.5 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold text-[11px]">4. VALIDATION</span>
              <span className="text-text font-sans font-medium text-[11px]">Zod Schema Guard</span>
              <span className="text-text-muted text-[10px]">Zero Hallucination</span>
            </div>

            {/* Layer 5: Instant Dispatch */}
            <div className="p-3.5 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold text-[11px]">5. DISPATCH</span>
              <span className="text-text font-sans font-medium text-[11px]">Slack &amp; CRM Engine</span>
              <span className="text-text-muted text-[10px]">Real-Time Webhooks</span>
            </div>
          </div>

          {/* Flow Indicator */}
          <div className="w-full flex items-center justify-around text-text-muted text-[11px] font-mono border-t border-border/30 pt-3">
            <span>1. Lead submits inquiry</span>
            <span>&rarr;</span>
            <span>2. Background enrichment</span>
            <span>&rarr;</span>
            <span>3. Gemini AI intent score</span>
            <span>&rarr;</span>
            <span>4. Sub-120ms webhook dispatch</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 2) {
    // Project 2: OBSIDIAN — AI Biometric & Nutrition Protocol Engine
    return (
      <div className="w-full overflow-x-auto hide-scrollbar p-6 bg-[#0c0c0e] rounded-2xl border border-border/40">
        <div className="min-w-[640px] flex flex-col items-center gap-6">
          <div className="flex items-center justify-between w-full">
            <p className="text-xs font-mono text-accent uppercase tracking-widest">Deterministic LLM Synthesis Pipeline</p>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              100% Zod Verified
            </span>
          </div>
          
          <div className="w-full grid grid-cols-4 gap-4 text-center text-xs font-mono">
            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">1. BIOMETRIC INPUTS</span>
              <span className="text-text font-sans">TDEE / BMR Calculator</span>
              <span className="text-text-muted text-[10px]">Metabolic Baseline State</span>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">2. PROMPT ARCH</span>
              <span className="text-text font-sans">Next.js App Router</span>
              <span className="text-text-muted text-[10px]">Low-Latency Context Injection</span>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-accent/40 flex flex-col items-center justify-center gap-2 shadow-[0_0_15px_-3px_rgba(242,125,38,0.2)]">
              <span className="text-amber-300 font-bold">3. GEMINI AI ENGINE</span>
              <span className="text-text font-sans">Google Gemini SDK</span>
              <span className="text-text-muted text-[10px]">Structured JSON Prompt</span>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">4. ZOD SCHEMA GUARD</span>
              <span className="text-text font-sans">PDF &amp; UI Generation</span>
              <span className="text-text-muted text-[10px]">Strict Output Contracts</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-around text-text-muted text-[11px] font-mono border-t border-border/30 pt-3">
            <span>1. Biometric input</span>
            <span>2. Baseline calculations</span>
            <span>3. Streaming LLM generation</span>
            <span>4. Zod Schema parse &amp; PDF</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 3) {
    // Project 3: PC Builder & ERP
    return (
      <div className="w-full overflow-x-auto hide-scrollbar p-6 bg-[#0c0c0e] rounded-2xl border border-border/40">
        <div className="min-w-[640px] flex flex-col items-center gap-6">
          <p className="text-xs font-mono text-accent uppercase tracking-widest self-start">High-Concurrency System Architecture</p>
          
          <div className="w-full grid grid-cols-4 gap-4 text-center text-xs font-mono">
            {/* Layer 1: Client */}
            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">CLIENT LAYER</span>
              <span className="text-text font-sans">Next.js 16 + React 19</span>
              <span className="text-text-muted text-[10px]">Client-side PC Builder State</span>
            </div>

            {/* Layer 2: API & Engine */}
            <div className="p-4 rounded-xl bg-surface border border-accent/40 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">RULES ENGINE</span>
              <span className="text-text font-sans">Compatibility Matrix</span>
              <span className="text-text-muted text-[10px]">Socket / Chipset / TDP Rules</span>
            </div>

            {/* Layer 3: ORM & DB */}
            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">DATA LAYER</span>
              <span className="text-text font-sans">Prisma ORM + PostgreSQL</span>
              <span className="text-text-muted text-[10px]">Multi-Warehouse Stock &amp; Spec DB</span>
            </div>

            {/* Layer 4: Integrations */}
            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">INTEGRATIONS</span>
              <span className="text-text font-sans">Razorpay + WhatsApp</span>
              <span className="text-text-muted text-[10px]">Webhooks &amp; Order Alerts</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-around text-text-muted text-[11px] font-mono border-t border-border/30 pt-3">
            <span>1. User configures parts</span>
            <span>2. Real-time Zod check</span>
            <span>3. Relational inventory sync</span>
            <span>4. Checkout &amp; notification</span>
          </div>
        </div>
      </div>
    );
  }

  // Project 4 & default: Enrich Kitchen Studio / Enterprise Operations
  return (
    <div className="w-full overflow-x-auto hide-scrollbar p-6 bg-[#0c0c0e] rounded-2xl border border-border/40">
      <div className="min-w-[640px] flex flex-col items-center gap-6">
        <p className="text-xs font-mono text-accent uppercase tracking-widest self-start">Operations Hub Architecture</p>
        
        <div className="w-full grid grid-cols-4 gap-4 text-center text-xs font-mono">
          <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
            <span className="text-accent font-bold">FRONTEND</span>
            <span className="text-text font-sans">Next.js 14 + Recharts</span>
            <span className="text-text-muted text-[10px]">Live Inventory Dashboard</span>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-accent/40 flex flex-col items-center justify-center gap-2">
            <span className="text-accent font-bold">AUTH LAYER</span>
            <span className="text-text font-sans">NextAuth.js RBAC</span>
            <span className="text-text-muted text-[10px]">Admin &amp; Staff Role Guards</span>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
            <span className="text-accent font-bold">DATA LAYER</span>
            <span className="text-text font-sans">Prisma ORM + MongoDB</span>
            <span className="text-text-muted text-[10px]">Stock Movement History</span>
          </div>

          <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
            <span className="text-accent font-bold">SERVICES</span>
            <span className="text-text font-sans">Invoicing Engine</span>
            <span className="text-text-muted text-[10px]">Automated PDF Statements</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-around text-text-muted text-[11px] font-mono border-t border-border/30 pt-3">
          <span>1. Staff logs stock edit</span>
          <span>2. Role session validation</span>
          <span>3. Atomic log entry</span>
          <span>4. PDF bill generated</span>
        </div>
      </div>
    </div>
  );
}
