import { motion } from 'motion/react';
import { EDUCATION } from '../constants.js';



export default function Education() {
  return (
    <section id="education" className="py-32 bg-bg relative">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">
            Academic <span className="text-stroke">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-accent mt-8" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

          {EDUCATION.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(242,125,38,0.5)]" />

              {/* Content Box */}
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className="glass-panel p-8 rounded-2xl hover:border-accent transition-colors duration-300">
                  <span className="text-accent font-mono text-sm tracking-widest mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {item.degree}
                  </h3>
                  <h4 className="text-text-muted font-medium mb-4">
                    {item.institution}
                  </h4>
                  <p className="text-text-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Empty Space for alignment */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
