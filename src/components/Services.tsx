import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants.js';



export default function Services() {
  return (
    <section id="services" className="py-32 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
              What I <span className="text-stroke">Do</span>
            </h2>
            <div className="w-24 h-1 bg-accent mt-8" />
          </div>
          <p className="text-text-muted max-w-md text-lg font-light leading-relaxed">
            I offer a comprehensive suite of services to help you build, launch,
            and scale your digital presence.
          </p>
        </div>

        <div className="border-t border-border">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-border py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-surface-hover transition-colors duration-500 cursor-pointer px-4 -mx-4 rounded-xl"
            >
              <div className="flex items-center gap-8 md:w-1/2">
                <span className="text-4xl font-mono text-text-muted group-hover:text-accent transition-colors duration-300">
                  {service.id}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold group-hover:translate-x-4 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
              <div className="md:w-5/12 flex items-center justify-between gap-8">
                <p className="text-text-muted font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-40 overflow-hidden md:max-h-full md:opacity-100">
                  {service.description}
                </p>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-bg transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
