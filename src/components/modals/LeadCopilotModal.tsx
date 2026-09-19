import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ShieldCheck, Zap, Layers, Cpu } from 'lucide-react';

interface LeadCopilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const LeadCopilotModal: React.FC<LeadCopilotModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070B14]/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            className="relative w-full max-w-3xl bg-[#0D1422] border border-[#202B3D] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg text-[#667085] hover:text-[#F4F6F8] hover:bg-[#202B3D]/50 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#6EA8FF]/10 border border-[#6EA8FF]/30 text-[#6EA8FF] text-xs font-mono mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6EA8FF] animate-pulse" />
                <span>ACTIVE PLATFORM · V1.4 PRODUCTION</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-[#F4F6F8]">
                LeadCopilot
              </h2>
              <p className="text-[#8DEBFF] font-medium text-base mt-1">
                Never lose a lead in the noise.
              </p>
              <p className="text-sm text-[#667085] mt-2 max-w-xl">
                An intelligent multi-channel intake and attribution engine built to classify, enrich, and route inbound opportunities with deterministic precision.
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#070B14] border border-[#202B3D]">
                <div className="w-8 h-8 rounded-lg bg-[#6EA8FF]/10 flex items-center justify-center text-[#6EA8FF] mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#F4F6F8] mb-1">Instant Enrichment</h4>
                <p className="text-xs text-[#667085]">
                  Automated background lookups across 40+ corporate telemetry databases within 120ms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B14] border border-[#202B3D]">
                <div className="w-8 h-8 rounded-lg bg-[#6EA8FF]/10 flex items-center justify-center text-[#6EA8FF] mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#F4F6F8] mb-1">Deterministic Routing</h4>
                <p className="text-xs text-[#667085]">
                  Rules and semantic classifiers matching high-intent deals straight to dedicated reps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070B14] border border-[#202B3D]">
                <div className="w-8 h-8 rounded-lg bg-[#6EA8FF]/10 flex items-center justify-center text-[#6EA8FF] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#F4F6F8] mb-1">Enterprise Shield</h4>
                <p className="text-xs text-[#667085]">
                  Zero hallucination boundaries, strict SOC2 compliance, and full audit logs on every decision.
                </p>
              </div>
            </div>

            {/* Live Pipeline Mockup Visual */}
            <div className="p-4 rounded-xl bg-[#070B14]/80 border border-[#202B3D] mb-6">
              <div className="flex items-center justify-between text-xs text-[#667085] pb-3 border-b border-[#202B3D]">
                <span className="font-mono">INBOUND INTAKE PIPELINE</span>
                <span className="text-[#6EA8FF] font-mono">LATENCY: 42ms · 99.99% UPTIME</span>
              </div>
              <div className="mt-3 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-[#0D1422] border border-[#202B3D]/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[#F4F6F8]">Inbound #8492 — Series B SaaS (500-1000 FTE)</span>
                  </div>
                  <span className="text-[#8DEBFF]">Score: 98/100 · Routed</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#0D1422] border border-[#202B3D]/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[#F4F6F8]">Inbound #8491 — FinTech Infrastructure</span>
                  </div>
                  <span className="text-[#8DEBFF]">Score: 94/100 · Routed</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-[#667085]">
                Available for enterprise deployment & pilots.
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs text-[#667085] hover:text-[#F4F6F8] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#6EA8FF] hover:bg-[#8DEBFF] text-[#070B14] font-semibold text-xs transition-colors shadow-[0_0_15px_rgba(110,168,255,0.3)]"
                >
                  <span>Request enterprise demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
