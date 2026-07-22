import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone, Copy, Check, Loader2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('atharvshelke964@gmail.com');
      setCopied(true);
      toast.success('Email copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Failed to copy email');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      toast.error('Please fill in your name, email, and message.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent! I will reply within 24 hours.');
        form.reset();
      } else {
        toast.error(result.message || 'Submission failed. Please try again.');
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-bg relative overflow-hidden">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#f4f4f5',
            border: '1px solid #27272a',
            borderRadius: '1rem',
          },
        }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              {/* Section label */}
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-6">
                Contact
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-none">
                Let's Build<br />
                <span className="text-stroke">Something.</span>
              </h2>

              <div className="w-16 h-[2px] bg-accent mb-8" />

              <p className="text-text-muted text-lg font-light leading-relaxed max-w-md">
                Whether you're hiring, scoping a project, or just want to talk tech —
                send a message and I'll reply within 24 hours.
              </p>

              {/* Response signal */}
              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <p className="text-xs text-text-muted tracking-wide font-mono uppercase">
                  Usually responds within 24h
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-border/40 hover:border-accent/40 transition-colors group">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:atharvshelke964@gmail.com"
                      className="text-sm sm:text-base md:text-lg font-display font-medium hover:text-accent transition-colors truncate block"
                    >
                      atharvshelke964@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full border border-border bg-surface hover:bg-surface-hover hover:border-accent/50 transition-all shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-text-muted" />
                      <span className="text-text-muted">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-2xl border border-border/40 hover:border-accent/40 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+917517616955"
                    className="text-base md:text-lg font-display font-medium hover:text-accent transition-colors"
                  >
                    +91 75176 16955
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-2xl border border-border/40 hover:border-accent/40 transition-colors group">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-0.5">
                    Location
                  </p>
                  <p className="text-base md:text-lg font-display font-medium">
                    Chh. Sambhajinagar, Maharashtra{' '}
                    <span className="text-text-muted text-xs font-sans font-light">
                      · Open to Remote
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn CTA */}
            <div className="pt-4 border-t border-border/30">
              <p className="text-sm text-text-muted mb-3">Also find me on</p>
              <a
                href="https://www.linkedin.com/in/atharv-shelke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
              >
                LinkedIn — Atharv Shelke
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Async Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-10 rounded-3xl"
          >
            <h3 className="text-2xl font-display font-bold mb-2">
              What are you working on?
            </h3>
            <p className="text-text-muted text-sm font-light mb-8">
              Tell me about your project or opportunity — the more detail, the better.
            </p>

            <form className="space-y-7" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Contact Form Submission - Portfolio" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-text-muted block">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-light text-base"
                    placeholder="Atharv Shelke"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-text-muted block">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-light text-base"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-text-muted block">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-light text-base"
                  placeholder="e.g. Full-stack build, freelance sprint, job opportunity"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-text-muted block">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-light text-base resize-none"
                  placeholder="What's the project? What's the timeline? What's the stack?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative px-10 py-5 bg-text text-bg font-medium rounded-full overflow-hidden transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 w-full flex items-center justify-center gap-4 cursor-pointer disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2 text-base">
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 className="w-4 h-4 animate-spin text-bg" />
                    </>
                  ) : (
                    <>
                      Send It
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
              </button>

              <p className="text-center text-[10px] text-text-muted/50 tracking-wide">
                No spam. No unsolicited follow-ups. Just a conversation.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}