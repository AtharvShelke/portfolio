import { motion } from 'motion/react';
import { Variants } from "framer-motion";
import { SKILLS } from '../constants';



export default function Skills() {
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 20 } 
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="skills" className="py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
            Technical <span className="text-stroke">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-8" />
        </div>

        <div className="space-y-20">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              <motion.div variants={titleVariants} className="flex items-center gap-6 mb-8">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-text">
                  {skillGroup.category}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-border to-transparent" />
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="flex flex-wrap gap-4"
              >
                {skillGroup.items.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      backgroundColor: 'var(--color-accent)', 
                      color: 'var(--color-bg)',
                      borderColor: 'var(--color-accent)',
                      boxShadow: '0 10px 30px -10px rgba(242, 125, 38, 0.5)'
                    }}
                    className="px-6 py-3 text-base font-mono bg-bg/40 backdrop-blur-sm border border-border rounded-2xl text-text-muted transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
