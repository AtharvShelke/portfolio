import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_SIGNAL } from '../constants.js';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Consultation Channels & Signal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
                  Initiate Technical Consultation
                </p>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight leading-none mb-6">
                Let's Build <br />
                <span className="text-stroke">Your System.</span>
              </h2>

              <div className="w-16 h-1 bg-accent mb-6" />

              <p className="text-text-muted text-base font-light leading-relaxed">
                Whether you're launching a new digital venture, re-architecting an ERP, or need specialized full-stack and AI engineering — let's review your specifications.
              </p>

              <div className="mt-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-xs font-mono text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>Response Guarantee: Under 24 Hours</span>
              </div>
            </div>

            {/* Direct Connect Grid */}
            <div className="space-y-4">
              <a
                href="mailto:atharvshelke964@gmail.com"
                className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-4 hover:border-accent/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-text-muted">Direct Email</p>
                  <p className="text-sm sm:text-base font-display font-semibold text-text group-hover:text-accent transition-colors">
                    atharvshelke964@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+917517616955"
                className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-4 hover:border-accent/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-text-muted">Telephone / WhatsApp</p>
                  <p className="text-sm sm:text-base font-display font-semibold text-text group-hover:text-accent transition-colors">
                    +91 75176 16955
                  </p>
                </div>
              </a>

              <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-text-muted">Headquarters & Remote</p>
                  <p className="text-sm sm:text-base font-display font-semibold text-text">
                    Maharashtra, India <span className="text-xs font-mono text-text-muted font-normal">· Worldwide Remote</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Client Testimonial Snippet */}
            {TESTIMONIALS_SIGNAL.length > 0 && (
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                <p className="text-xs text-text-muted italic leading-relaxed">
                  "{TESTIMONIALS_SIGNAL[0].quote}"
                </p>
                <div className="text-[11px] font-mono text-accent">
                  — {TESTIMONIALS_SIGNAL[0].author}, {TESTIMONIALS_SIGNAL[0].role}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column: Ingestion Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-12 rounded-3xl border border-white/10"
          >
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text mb-2">
                Project Specification Brief
              </h3>
              <p className="text-sm text-text-muted font-light">
                Submit your target deliverables, timeline, or inquiries directly to the engineering team.
              </p>
            </div>

            <form
              className="space-y-6"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE"}
              />
              <input type="hidden" name="redirect" value="false" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                    Your Name / Organization
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-sm font-light text-text transition-colors"
                    placeholder="e.g. Alex Vance, Retail Dynamics"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                    Business Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-sm font-light text-text transition-colors"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                  Project Engagement Type
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-sm font-light text-text transition-colors"
                  placeholder="e.g. Custom ERP Build, AI Pipeline Integration, Next.js Web App"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                  Specifications & Architectural Requirements
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent text-sm font-light text-text transition-colors resize-none"
                  placeholder="Describe your current bottleneck, target features, expected user scale, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="group relative px-8 py-5 bg-text text-bg font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_20px_50px_-10px_rgba(242,125,38,0.35)] w-full flex items-center justify-center gap-3 text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Transmit Technical Specification
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-text-muted/60 text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NDA / IP Protected
                </span>
                <span>•</span>
                <span>Direct Lead Architect Contact</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}