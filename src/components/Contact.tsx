import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, Copy, Check, Loader2, Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';
import { Input, Textarea } from './ui/Input';

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
    <section id="contact" className="py-24 bg-[var(--bg-elevation-1)] border-t border-[var(--border-default)] relative overflow-hidden">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#141A24',
            color: '#F8FAFC',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.75rem',
          },
        }}
      />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <Badge variant="primary" className="mb-4 uppercase tracking-wider font-mono">
                <Send className="w-3.5 h-3.5" /> Direct Contact
              </Badge>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[#font-heading] uppercase tracking-tight mb-4">
                LET'S BUILD <span className="text-[#F27D26]">TOGETHER</span>
              </h2>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                Whether you're hiring for full-stack engineering, scoping a client build, or discussing system architecture — feel free to reach out.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-[var(--text-tertiary)] font-mono uppercase tracking-wider">
                  Average response time: &lt;24 hours
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Card variant="interactive" className="p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#F27D26]/15 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-mono text-[var(--text-tertiary)]">Email</p>
                    <a
                      href="mailto:atharvshelke964@gmail.com"
                      className="text-sm font-bold text-[var(--text-primary)] hover:text-[#F27D26] transition-colors truncate block"
                    >
                      atharvshelke964@gmail.com
                    </a>
                  </div>
                </div>

                <Button size="sm" variant="outline" onClick={handleCopyEmail}>
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </Button>
              </Card>

              <Card variant="solid" className="p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F27D26]/15 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono text-[var(--text-tertiary)]">Phone</p>
                  <a href="tel:+917517616955" className="text-sm font-bold text-[var(--text-primary)] hover:text-[#F27D26] transition-colors">
                    +91 75176 16955
                  </a>
                </div>
              </Card>

              <Card variant="solid" className="p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F27D26]/15 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono text-[var(--text-tertiary)]">Location</p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">
                    Aurangabad, MH <span className="text-xs text-[var(--text-tertiary)] font-normal">· Open to Remote</span>
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Right Column: Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Card variant="glass" className="p-8">
              <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Fill out the fields below and I'll get back to you directly.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New Contact Form Submission - Portfolio" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono font-bold text-[var(--text-secondary)] block">
                      Name <span className="text-[#F27D26]">*</span>
                    </label>
                    <Input name="name" id="name" required placeholder="Atharv Shelke" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono font-bold text-[var(--text-secondary)] block">
                      Email <span className="text-[#F27D26]">*</span>
                    </label>
                    <Input name="email" type="email" id="email" required placeholder="you@company.com" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono font-bold text-[var(--text-secondary)] block">
                    Subject
                  </label>
                  <Input name="subject" id="subject" placeholder="Full-stack role, project brief, consulting" />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-bold text-[var(--text-secondary)] block">
                    Message <span className="text-[#F27D26]">*</span>
                  </label>
                  <Textarea name="message" id="message" required placeholder="Project details, scope, timelines..." />
                </div>

                <Button size="lg" variant="primary" type="submit" isLoading={isSubmitting} className="w-full mt-2">
                  Send Message <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}