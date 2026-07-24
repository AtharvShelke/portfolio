import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Code, Cpu, Layout, Terminal } from 'lucide-react';
import { SERVICES } from '../constants';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const SERVICE_ICONS = [Layout, Cpu, Code, Terminal];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--bg-base)] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <Badge variant="primary" className="mb-4 uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" /> Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-[#font-heading] uppercase tracking-tight">
              ENGINEERING <span className="text-[#F27D26]">SERVICES</span>
            </h2>
            <div className="w-20 h-[3px] bg-[#F27D26] rounded-full mt-6 shadow-[0_0_12px_rgba(242,125,38,0.5)]" />
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md font-normal leading-relaxed">
            Every engagement is scoped to exact technical requirements — from greenfield product architecture to zero-CLS design systems and backend optimizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="interactive" className="p-8 h-full flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#F27D26]/15 border border-[#F27D26]/30 flex items-center justify-center text-[#F27D26] group-hover:bg-[#F27D26] group-hover:text-[#050505] transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[var(--text-tertiary)] group-hover:text-[#F27D26] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <CardHeader className="p-0 mb-0">
                      <CardTitle className="text-2xl font-extrabold group-hover:text-[#F27D26] transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardDescription className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--border-default)] flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--text-tertiary)] uppercase tracking-wider group-hover:text-[var(--text-primary)] transition-colors">
                      Scoped Engagement
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[var(--border-default)] flex items-center justify-center text-[var(--text-secondary)] group-hover:bg-[#F27D26] group-hover:border-[#F27D26] group-hover:text-[#050505] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Footer Row */}
        <div className="mt-16 pt-8 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[var(--text-secondary)]">
            Have a project in mind? <span className="text-[var(--text-primary)] font-bold">Let's discuss architecture and timeline.</span>
          </p>
          <a href="#contact">
            <Button variant="primary">
              Start a Conversation <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}