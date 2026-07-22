import React from 'react';

interface ArchitectureDiagramProps {
  projectId: number;
}

export default function ArchitectureDiagram({ projectId }: ArchitectureDiagramProps) {
  if (projectId === 1) {
    // PC Builder & ERP
    return (
      <div className="w-full overflow-x-auto hide-scrollbar p-6 bg-[#0c0c0e] rounded-2xl border border-border/40">
        <div className="min-w-[640px] flex flex-col items-center gap-6">
          <p className="text-xs font-mono text-accent uppercase tracking-widest self-start">System Architecture Diagram</p>
          
          <div className="w-full grid grid-cols-4 gap-4 text-center text-xs font-mono">
            {/* Layer 1: Client */}
            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">CLIENT LAYER</span>
              <span className="text-text font-sans">Next.js 16 + React 19</span>
              <span className="text-text-muted text-[10px]">Client-side PC Builder State</span>
            </div>

            {/* Layer 2: API & Engine */}
            <div className="p-4 rounded-xl bg-surface border border-accent/40 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">API &amp; ENGINE</span>
              <span className="text-text font-sans">Compatibility Engine</span>
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

          {/* Flow Indicator */}
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

  if (projectId === 2) {
    // Enrich Kitchen Studio
    return (
      <div className="w-full overflow-x-auto hide-scrollbar p-6 bg-[#0c0c0e] rounded-2xl border border-border/40">
        <div className="min-w-[640px] flex flex-col items-center gap-6">
          <p className="text-xs font-mono text-accent uppercase tracking-widest self-start">System Architecture Diagram</p>
          
          <div className="w-full grid grid-cols-4 gap-4 text-center text-xs font-mono">
            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">FRONTEND</span>
              <span className="text-text font-sans">Next.js 14 + Recharts</span>
              <span className="text-text-muted text-[10px]">Live Inventory Dashboard</span>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-accent/40 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">AUTH LAYER</span>
              <span className="text-text font-sans">NextAuth.js</span>
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

  if (projectId === 3) {
    // OBSIDIAN AI Fitness
    return (
      <div className="w-full overflow-x-auto hide-scrollbar p-6 bg-[#0c0c0e] rounded-2xl border border-border/40">
        <div className="min-w-[640px] flex flex-col items-center gap-6">
          <p className="text-xs font-mono text-accent uppercase tracking-widest self-start">System Architecture Diagram</p>
          
          <div className="w-full grid grid-cols-4 gap-4 text-center text-xs font-mono">
            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">BIOMETRICS INPUT</span>
              <span className="text-text font-sans">TDEE / BMR Calculator</span>
              <span className="text-text-muted text-[10px]">Client Biometric State</span>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">API ROUTE</span>
              <span className="text-text font-sans">Next.js App Router</span>
              <span className="text-text-muted text-[10px]">Serverless Prompt Handler</span>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-accent/40 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">AI ENGINE</span>
              <span className="text-text font-sans">Google Gemini SDK</span>
              <span className="text-text-muted text-[10px]">Structured JSON Prompt</span>
            </div>

            <div className="p-4 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-2">
              <span className="text-accent font-bold">VALIDATION</span>
              <span className="text-text font-sans">Zod Schema Guard</span>
              <span className="text-text-muted text-[10px]">Workout &amp; Macro Output</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-around text-text-muted text-[11px] font-mono border-t border-border/30 pt-3">
            <span>1. Biometric input</span>
            <span>2. TDEE baseline computed</span>
            <span>3. Gemini LLM generation</span>
            <span>4. Zod Schema parse</span>
          </div>
        </div>
      </div>
    );
  }

  // Project 4: TNP Portal
  return (
    <div className="w-full overflow-x-auto hide-scrollbar p-6 bg-[#0c0c0e] rounded-2xl border border-border/40">
      <div className="min-w-[680px] flex flex-col items-center gap-6">
        <p className="text-xs font-mono text-accent uppercase tracking-widest self-start">5-Role Security &amp; Execution Architecture</p>
        
        <div className="w-full grid grid-cols-5 gap-3 text-center text-xs font-mono">
          <div className="p-3 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-1.5">
            <span className="text-accent font-bold text-[10px]">1. 5-ROLE UI</span>
            <span className="text-text font-sans text-[11px]">Admin / Recruiter / Student</span>
          </div>

          <div className="p-3 rounded-xl bg-surface border border-accent/40 flex flex-col items-center justify-center gap-1.5">
            <span className="text-accent font-bold text-[10px]">2. AUTH GUARD</span>
            <span className="text-text font-sans text-[11px]">NextAuth Credential Guard</span>
          </div>

          <div className="p-3 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-1.5">
            <span className="text-accent font-bold text-[10px]">3. SESSION GUARD</span>
            <span className="text-text font-sans text-[11px]">JWT Session Verification</span>
          </div>

          <div className="p-3 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-1.5">
            <span className="text-accent font-bold text-[10px]">4. DATA &amp; ORM</span>
            <span className="text-text font-sans text-[11px]">Prisma ORM + MongoDB</span>
          </div>

          <div className="p-3 rounded-xl bg-surface border border-border/60 flex flex-col items-center justify-center gap-1.5">
            <span className="text-accent font-bold text-[10px]">5. AI &amp; MAIL</span>
            <span className="text-text font-sans text-[11px]">Gemini/OpenAI + Nodemailer</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-around text-text-muted text-[10px] font-mono border-t border-border/30 pt-3">
          <span>Auth &rarr; Session &rarr; Tool &rarr; Execution Authorization Pipeline</span>
        </div>
      </div>
    </div>
  );
}
