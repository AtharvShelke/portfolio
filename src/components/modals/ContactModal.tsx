import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useBrand } from '../../lib/brandContext';
import { X, Send, CheckCircle2, ArrowRight, Mail, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { name, coordinates, signOff } = useBrand();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Products & Platforms',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds or keep confirmed
    }, 3000);
  };

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
            className="fixed inset-0 bg-[#070B14]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            className="relative w-full max-w-2xl bg-[#0D1422] border border-[#202B3D] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Ambient Star Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#6EA8FF]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-lg text-[#667085] hover:text-[#F4F6F8] hover:bg-[#202B3D]/50 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#6EA8FF]/20 border border-[#6EA8FF] flex items-center justify-center mb-6 text-[#6EA8FF]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F4F6F8] mb-2">
                  Transmission Received
                </h3>
                <p className="text-[#667085] max-w-md text-sm mb-6">
                  Thank you for reaching out to {name}. Our engineering and product leadership will review your inquiry and follow up within 24 hours.
                </p>
                <div className="text-xs font-mono text-[#6EA8FF]">
                  {signOff}
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="mt-8 px-6 py-2.5 rounded-xl bg-[#202B3D] hover:bg-[#202B3D]/80 text-[#F4F6F8] text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#6EA8FF] tracking-widest uppercase mb-1">
                    <span>TRANSMISSION CHANNEL</span>
                    <span>·</span>
                    <span>{coordinates}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F6F8]">
                    Initiate Contact
                  </h2>
                  <p className="text-sm text-[#667085] mt-1">
                    Connect with {name} regarding enterprise implementations, product inquiries, or partnerships.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#667085] mb-1.5 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        className="w-full bg-[#070B14] border border-[#202B3D] rounded-xl px-4 py-2.5 text-sm text-[#F4F6F8] placeholder-[#667085]/50 focus:border-[#6EA8FF] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#667085] mb-1.5 uppercase tracking-wider">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full bg-[#070B14] border border-[#202B3D] rounded-xl px-4 py-2.5 text-sm text-[#F4F6F8] placeholder-[#667085]/50 focus:border-[#6EA8FF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#667085] mb-1.5 uppercase tracking-wider">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full bg-[#070B14] border border-[#202B3D] rounded-xl px-4 py-2.5 text-sm text-[#F4F6F8] placeholder-[#667085]/50 focus:border-[#6EA8FF] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#667085] mb-1.5 uppercase tracking-wider">
                        Inquiry Scope
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-[#070B14] border border-[#202B3D] rounded-xl px-4 py-2.5 text-sm text-[#F4F6F8] focus:border-[#6EA8FF] focus:outline-none transition-colors"
                      >
                        <option value="LeadCopilot Access">LeadCopilot Enterprise Access</option>
                        <option value="Custom Engineering">Custom Intelligence Platform</option>
                        <option value="Partnership">Strategic Partnership</option>
                        <option value="Careers">Join the Engineering Team</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#667085] mb-1.5 uppercase tracking-wider">
                      Brief Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your initiative or operational requirements..."
                      className="w-full bg-[#070B14] border border-[#202B3D] rounded-xl p-4 text-sm text-[#F4F6F8] placeholder-[#667085]/50 focus:border-[#6EA8FF] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-[#667085]">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-[#6EA8FF]" /> contact@polaris-arc.com
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#6EA8FF] hover:bg-[#8DEBFF] text-[#070B14] font-semibold text-sm transition-all shadow-[0_0_20px_rgba(110,168,255,0.25)]"
                    >
                      <span>Send inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
