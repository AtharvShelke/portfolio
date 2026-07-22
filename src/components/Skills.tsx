import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Variants } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { SKILLS } from '../constants';

export default function Skills() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  const toggleSkill = (skillName: string) => {
    setExpandedSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
            Technical <span className="text-stroke">Arsenal</span>
          </h2>
          <p className="text-text-muted font-mono text-sm mt-4">
            Click or hover any technology to view production architecture &amp; implementation depth
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        <div className="space-y-16">
          {SKILLS.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <motion.div variants={titleVariants} className="flex items-center gap-6 mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-text">
                  {skillGroup.category}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-border to-transparent" />
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {skillGroup.items.map((item) => {
                  const isExpanded = expandedSkill === item.name;
                  return (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      layout
                      onClick={() => toggleSkill(item.name)}
                      onMouseEnter={() => setExpandedSkill(item.name)}
                      onMouseLeave={() => setExpandedSkill(null)}
                      className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? 'bg-bg border-accent shadow-lg shadow-accent/5'
                          : 'bg-bg/50 border-border/60 hover:border-accent/40 hover:bg-bg'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-sm font-semibold text-text">
                          {item.name}
                        </span>
                        {item.context && (
                          <ChevronDown
                            className={`w-4 h-4 text-accent transition-transform duration-300 ${
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
                            className="mt-3 pt-3 border-t border-border/40 overflow-hidden"
                          >
                            <div className="flex items-start gap-2 text-xs font-mono text-text-muted leading-relaxed">
                              <Sparkles className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                              <span>{item.context}</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
