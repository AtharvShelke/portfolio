import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[var(--bg-base)] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Badge variant="primary" className="mb-4 uppercase tracking-wider font-mono">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Background
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-[#font-heading] uppercase tracking-tight">
            COMPUTER SCIENCE <span className="text-[#F27D26]">FOUNDATIONS</span>
          </h2>
          <div className="w-20 h-[3px] bg-[#F27D26] rounded-full mt-6 shadow-[0_0_12px_rgba(242,125,38,0.5)]" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--border-default)] -translate-x-1/2" />

          {EDUCATION.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#F27D26] rounded-full -translate-x-1/2 z-10 shadow-[0_0_16px_rgba(242,125,38,0.8)] border-2 border-[var(--bg-base)]" />

              {/* Card Container */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <Card variant="interactive" className="p-6">
                  <span className="text-[#F27D26] font-mono text-xs font-bold uppercase tracking-wider mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] mb-1">
                    {item.degree}
                  </h3>
                  <h4 className="text-xs font-mono font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
                    {item.institution}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </div>

              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}