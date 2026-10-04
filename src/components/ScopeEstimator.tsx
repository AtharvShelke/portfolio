import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Check, ArrowRight, Sparkles, Layers, ShieldCheck, Database, Cpu } from 'lucide-react';
import type Lenis from 'lenis';

const MODULES = [
  { id: 'custom-erp', label: 'Custom ERP & Inventory Dashboard', timeWeeks: 3, icon: Database, desc: 'Multi-warehouse, stock adjustments, GST invoicing' },
  { id: 'fullstack-web', label: 'Next.js 16 Web Application', timeWeeks: 2, icon: Layers, desc: 'React 19, TypeScript, Tailwind v4, Responsive UI' },
  { id: 'ai-pipeline', label: 'AI Protocol & Gemini LLM Integration', timeWeeks: 2, icon: Cpu, desc: 'Prompt engineering, structured Zod validation, PDF output' },
  { id: 'rbac-auth', label: 'Multi-Tier Role-Based Auth (RBAC)', timeWeeks: 1, icon: ShieldCheck, desc: 'NextAuth / JWT, permissions matrix, admin portal' },
  { id: 'payments', label: 'Payment Gateway (Razorpay/Stripe)', timeWeeks: 1, icon: Sparkles, desc: 'Webhook verification, transaction ledger, auto-receipts' },
];

export default function ScopeEstimator() {
  const [selectedModules, setSelectedModules] = useState<string[]>(['custom-erp', 'rbac-auth', 'payments']);
  const [timelineMode, setTimelineMode] = useState<'accelerated' | 'standard'>('standard');

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const totalWeeks = selectedModules.reduce((acc, curr) => {
    const mod = MODULES.find((m) => m.id === curr);
    return acc + (mod ? mod.timeWeeks : 0);
  }, 0);

  const calculatedWeeks = timelineMode === 'accelerated' ? Math.max(2, Math.ceil(totalWeeks * 0.7)) : totalWeeks;

  const handleApplyToContact = () => {
    const moduleNames = selectedModules
      .map((id) => MODULES.find((m) => m.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const text = `Hi Atharv, I configured an initial project blueprint:
- Target Architecture: ${moduleNames}
- Target Timeline: ${calculatedWeeks} Weeks (${timelineMode === 'accelerated' ? 'Accelerated Sprint' : 'Standard Sprint'})
Let's schedule technical scoping to finalize details.`;

    const messageBox = document.getElementById('message') as HTMLTextAreaElement | null;
    const subjectBox = document.getElementById('subject') as HTMLInputElement | null;
    if (messageBox) {
      messageBox.value = text;
    }
    if (subjectBox) {
      subjectBox.value = `Custom Architecture Scope (${selectedModules.length} Modules)`;
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


  return (
    <section id="estimator" className="py-24 bg-surface relative overflow-hidden border-t border-b border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Scoping Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
              Project Scope <span className="text-stroke">Estimator</span>
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 mb-4" />
            <p className="text-text-muted text-sm sm:text-base font-light max-w-xl mx-auto">
              Select your required architectural modules below to generate an instantaneous engineering scope & delivery timeline estimation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Modules Selector */}
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                Select Architectural Modules:
              </p>
              {MODULES.map((mod) => {
                const isSelected = selectedModules.includes(mod.id);
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-accent/10 border-accent/40 shadow-[0_4px_20px_rgba(242,125,38,0.1)]'
                        : 'glass-card hover:border-white/20'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected
                          ? 'bg-accent border-accent text-bg'
                          : 'border-white/20 bg-white/5 text-transparent'
                      }`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-text">{mod.label}</h4>
                        <span className="text-[11px] font-mono text-accent shrink-0">
                          ~{mod.timeWeeks}w
                        </span>
                      </div>
                      <p className="text-xs text-text-muted font-light mt-1">{mod.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 sticky top-24">
              <h3 className="text-xl font-display font-bold text-text flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Scope Summary
              </h3>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-text-muted">Selected Modules:</span>
                  <span className="font-mono font-bold text-text">{selectedModules.length} Active</span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-text-muted font-mono uppercase tracking-wider block">
                    Execution Pace:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTimelineMode('standard')}
                      className={`py-2 px-3 rounded-xl text-xs font-mono border transition-all ${
                        timelineMode === 'standard'
                          ? 'bg-accent/20 border-accent text-accent'
                          : 'bg-white/5 border-white/10 text-text-muted'
                      }`}
                    >
                      Standard Cadence
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimelineMode('accelerated')}
                      className={`py-2 px-3 rounded-xl text-xs font-mono border transition-all ${
                        timelineMode === 'accelerated'
                          ? 'bg-accent/20 border-accent text-accent'
                          : 'bg-white/5 border-white/10 text-text-muted'
                      }`}
                    >
                      Accelerated Sprint
                    </button>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider block">
                      Estimated Delivery
                    </span>
                    <span className="text-3xl font-display font-bold text-accent">
                      {calculatedWeeks} Weeks
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                    Production Ready
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleApplyToContact}
                className="w-full py-4 bg-text text-bg font-semibold rounded-full hover:bg-accent transition-colors flex items-center justify-center gap-2 text-sm group"
              >
                Apply Blueprint to Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[11px] text-text-muted/60 text-center font-mono">
                Auto-generates technical scope in the contact section below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
