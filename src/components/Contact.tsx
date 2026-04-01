import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// REFINEMENTS APPLIED:
//
// COPY:
//  BEFORE: "Let's Talk" headline — too casual, low commitment signal
//  AFTER:  "Let's Build Something." — outcome-oriented, confident, not loud
//
//  BEFORE: "Have a project in mind or just want to say hi? Feel free to reach out.
//           I'm always open to discussing new projects, creative ideas, or 
//           opportunities to be part of your visions."
//          — padding words, "be part of your visions" is hollow
//  AFTER:  Specific. Tells the user exactly what to expect after sending.
//          Answers: "what happens when I contact you?"
//
//  BEFORE: Form title "Send a Message" — bland
//  AFTER:  "What are you working on?" — conversational, lowers friction psychologically
//
//  BEFORE: Subject placeholder "Project Inquiry" — defaults to generic
//  AFTER:  "e.g. Full-stack build, freelance sprint, job opportunity" — guided, specific
//
//  BEFORE: Button "Send Message" — standard
//  AFTER:  "Send It →" — confident, casual but intentional (matches brand tone)
//
// STRUCTURE:
//  - Added a "Response time" signal — manages expectations, increases trust
//  - Added a LinkedIn link alongside email/phone/location — recruiter-critical
//  - Tightened left-side layout — removed 2 lines of filler copy
// ─────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <section id="contact" className="py-18 md:py-24 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
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

              {/* BEFORE: "Let's\nTalk" — casual, low commitment */}
              {/* AFTER: Outcome-oriented, still warm */}
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-none">
                Let's Build<br />
                <span className="text-stroke">Something.</span>
              </h2>

              <div className="w-16 h-[2px] bg-accent mb-8" />

              {/* BEFORE: Generic "feel free to reach out" paragraph */}
              {/* AFTER: Sets expectations + removes vagueness + speaks to both audiences */}
              <p className="text-text-muted text-lg font-light leading-relaxed max-w-md">
                Whether you're hiring, scoping a project, or just want to talk tech —
                send a message and I'll reply within 24 hours.
              </p>

              {/* Response signal — small but trust-building */}
              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <p className="text-xs text-text-muted tracking-wide font-mono uppercase">
                  Usually responds within 24h
                </p>
              </div>
            </div>

            {/* Contact details — unchanged structure, refined microcopy */}
            <div className="space-y-5">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:atharvshelke964@gmail.com"
                    className="text-base md:text-xl font-display font-medium hover:text-accent transition-colors break-all"
                  >
                    atharvshelke964@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+917517616955"
                    className="text-base md:text-xl font-display font-medium hover:text-accent transition-colors"
                  >
                    +91 75176 16955
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">
                    Location
                  </p>
                  {/* BEFORE: "Chhatrapati Sambhajinagar, Maharashtra, India" — correct but wordy */}
                  {/* AFTER: Shortened, with remote signal */}
                  <p className="text-base md:text-xl font-display font-medium">
                    Chh. Sambhajinagar, Maharashtra{' '}
                    <span className="text-text-muted text-sm font-sans font-light">
                      · Open to Remote
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn CTA — critical for recruiters, was missing */}
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

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-10 rounded-3xl"
          >
            {/* BEFORE: "Send a Message" — mechanical */}
            {/* AFTER: Conversational opener — lowers form anxiety, feels human */}
            <h3 className="text-2xl font-display font-bold mb-2">
              What are you working on?
            </h3>
            <p className="text-text-muted text-sm font-light mb-8">
              Tell me about your project or opportunity — the more detail, the better.
            </p>

            <form className="space-y-7" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="redirect" value="false" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-text-muted">
                    Your Name
                  </label>
                  <input
                    name="name" type="text" id="name"
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-light text-base"
                    placeholder="Atharv Shelke"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-text-muted">
                    Email Address
                  </label>
                  <input
                    name="email" type="email" id="email"
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-light text-base"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-text-muted">
                  Subject
                </label>
                {/* BEFORE: Placeholder "Project Inquiry" — defaults to vague */}
                {/* AFTER: Guided examples — shows range of what you're open to */}
                <input
                  name="subject" type="text" id="subject"
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-light text-base"
                  placeholder="e.g. Full-stack build, freelance sprint, job opportunity"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-text-muted">
                  Message
                </label>
                <textarea
                  name="message" id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent transition-colors font-light text-base resize-none"
                  placeholder="What's the project? What's the timeline? What's the stack?"
                />
              </div>

              <button
                type="submit"
                className="group relative px-10 py-5 bg-text text-bg font-medium rounded-full overflow-hidden transition-transform hover:scale-[1.02] w-full flex items-center justify-center gap-4"
              >
                <span className="relative z-10 flex items-center gap-2 text-base">
                  {/* BEFORE: "Send Message" — functional but flat */}
                  {/* AFTER: "Send It →" — confident, intentional, matches brand tone */}
                  Send It
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
              </button>

              {/* Trust signal below form */}
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