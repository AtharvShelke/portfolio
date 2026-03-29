import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-bg relative overflow-hidden">
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
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter mb-8">
                Let's <br />
                <span className="text-stroke">Talk</span>
              </h2>
              <div className="w-24 h-1 bg-accent mb-8" />
              <p className="text-text-muted text-xl font-light leading-relaxed max-w-md">
                Have a project in mind or just want to say hi? Feel free to
                reach out. I'm always open to discussing new projects, creative
                ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-text-muted mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:atharvshelke964@gmail.com"
                    className="text-lg md:text-2xl font-display font-medium hover:text-accent transition-colors break-all"
                  >
                    atharvshelke964@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-text-muted mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="text-lg md:text-2xl font-display font-medium hover:text-accent transition-colors"
                  >
                    +91 7517616955
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-text-muted mb-1">
                    Location
                  </p>
                  <p className="text-lg md:text-2xl font-display font-medium break-words">
                    Chhatrapati Sambhajinagar, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-12 rounded-3xl"
          >
            <h3 className="text-3xl font-display font-bold mb-8">
              Send a Message
            </h3>
            <form className="space-y-8" action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
              />
              <input type="hidden" name="redirect" value="false" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm uppercase tracking-widest text-text-muted">
                    Name
                  </label>
                  <input
                    name="name" type="text" id="name"
                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors font-light text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm uppercase tracking-widest text-text-muted">
                    Email
                  </label>
                  <input
                    name="email" type="email" id="email"
                    className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors font-light text-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm uppercase tracking-widest text-text-muted">
                  Subject
                </label>
                <input
                  name="subject" type="text" id="subject"
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors font-light text-lg"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm uppercase tracking-widest text-text-muted">
                  Message
                </label>
                <textarea
                  name="message" id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-colors font-light text-lg resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="group relative px-12 py-6 bg-text text-bg font-medium rounded-full overflow-hidden transition-transform hover:scale-105 w-full flex items-center justify-center gap-4"
              >
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
