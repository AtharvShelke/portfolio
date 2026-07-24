import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Cpu } from 'lucide-react';
import { SKILLS } from '../constants';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { containerVariants, itemVariants } from '../lib/motion-tokens';

export default function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    setExpandedSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <section id="skills" className="py-24 bg-[var(--bg-elevation-1)] border-t border-[var(--border-default)] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <Badge variant="primary" className="mb-4 uppercase tracking-wider font-mono">
            <Cpu className="w-3.5 h-3.5" /> Technical Arsenal
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-[#font-heading] uppercase tracking-tight">
            FULL-STACK <span className="text-[#F27D26]">CAPABILITIES</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] font-mono mt-3">
            Click or hover any technology card to view architectural context & implementation depth
          </p>
          <div className="w-20 h-[3px] bg-[#F27D26] rounded-full mt-6 shadow-[0_0_12px_rgba(242,125,38,0.5)]" />
        </div>

        <div className="space-y-12">
          {SKILLS.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                  {skillGroup.category}
                </h3>
                <div className="h-px flex-grow bg-gradient-to-r from-[var(--border-default)] to-transparent" />
              </div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {skillGroup.items.map((item) => {
                  const isExpanded = expandedSkill === item.name;
                  return (
                    <motion.div key={item.name} variants={itemVariants} layout>
                      <Card
                        variant={isExpanded ? 'interactive' : 'solid'}
                        onClick={() => toggleSkill(item.name)}
                        onMouseEnter={() => setExpandedSkill(item.name)}
                        onMouseLeave={() => setExpandedSkill(null)}
                        className={`p-4 cursor-pointer transition-all duration-200 select-none ${
                          isExpanded ? 'border-[#F27D26] shadow-[0_0_20px_rgba(242,125,38,0.2)]' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                            {item.name}
                          </span>
                          {item.context && (
                            <ChevronDown
                              className={`w-4 h-4 text-[#F27D26] transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          )}
                        </div>

                        <AnimatePresence>
                          {isExpanded && item.context && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-3 pt-3 border-t border-[var(--border-default)] overflow-hidden"
                            >
                              <div className="flex items-start gap-2 text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                                <Sparkles className="w-3.5 h-3.5 text-[#F27D26] shrink-0 mt-0.5" />
                                <span>{item.context}</span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
