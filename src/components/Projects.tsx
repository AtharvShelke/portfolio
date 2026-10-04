import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { ExternalLink, Github, X, ArrowRight, TrendingUp, Cpu, Server } from 'lucide-react';
import { PROJECTS } from '../constants.js';

const CATEGORIES = ['All Systems', 'ERP & Operations', 'AI & Automation', 'Multi-Tenant Platforms'];

const CaseStudyCard = ({
  project,
  index,
  onClick,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  onClick: (p: (typeof PROJECTS)[0]) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.1 });
  const yImg = useTransform(smoothProgress, [0, 1], ['-6%', '6%']);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-10 items-stretch group cursor-pointer p-6 sm:p-8 md:p-10 rounded-3xl glass-card glass-card-hover border border-white/10`}
      onClick={() => onClick(project)}
    >
      {/* Image / Visual Showcase */}
      <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl relative aspect-[16/10] bg-surface/80 border border-white/5 flex items-center justify-center">
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-amber-300">
            {project.tag}
          </span>
        </div>

        <motion.img
          style={{ y: yImg }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top origin-center group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
      </div>

      {/* Narrative & Metrics */}
      <div className="w-full lg:w-2/5 flex flex-col justify-between space-y-6">
        <div>
          {/* Client & Category */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
              Client: {project.client}
            </span>
            <span className="text-xs font-mono text-accent">0{index + 1}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-text group-hover:text-accent transition-colors leading-tight mb-4">
            {project.title}
          </h3>

          <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Quantified Impact Callout */}
          <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/15 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Production Impact:</span>
            </div>
            <p className="text-xs text-text-muted font-light leading-snug">
              {project.impact}
            </p>
          </div>

          {/* Granular metric pills */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
            {project.metrics?.map((m) => (
              <div key={m.label} className="text-center p-2 rounded-lg bg-white/[0.02]">
                <p className="text-xs sm:text-sm font-display font-bold text-text">{m.value}</p>
                <p className="text-[9px] sm:text-[10px] text-text-muted font-mono uppercase">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-mono text-text-muted bg-white/[0.03] border border-white/5 rounded"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-0.5 text-[10px] font-mono text-accent">
                +{project.tech.length - 3} more
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-accent group-hover:translate-x-1 transition-transform">
            Inspect Architecture <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);
  const [activeTab, setActiveTab] = useState('All Systems');

  const filteredProjects = activeTab === 'All Systems'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeTab);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent">
                Commercial Case Studies & Deployed Systems
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tight">
              Selected <span className="text-stroke">Work</span>
            </h2>
            <div className="w-20 h-1 bg-accent mt-6" />
          </div>

          {/* Industry / Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  activeTab === tab
                    ? 'bg-accent text-bg font-semibold shadow-[0_4px_20px_rgba(242,125,38,0.3)]'
                    : 'glass-card text-text-muted hover:text-text hover:border-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies List */}
        <div className="space-y-16 sm:space-y-20">
          {filteredProjects.map((project, index) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Interactive Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
            >
              <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto hide-scrollbar bg-surface border border-white/10 rounded-3xl shadow-2xl pointer-events-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-30 w-11 h-11 bg-bg/80 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-text hover:text-accent hover:border-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Visual Banner */}
                <div className="w-full aspect-[21/9] relative overflow-hidden bg-bg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <div className="absolute bottom-6 left-8 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent/20 border border-accent/40 text-accent mb-2 inline-block">
                      {selectedProject.tag}
                    </span>
                    <h3 className="text-3xl sm:text-5xl font-display font-bold text-text">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Content Details */}
                <div className="p-6 sm:p-10 space-y-10">
                  {/* Quantified Metrics Highlight */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.metrics?.map((m) => (
                      <div key={m.label} className="p-4 rounded-2xl glass-card border border-white/10">
                        <p className="text-xl sm:text-2xl font-display font-bold text-accent">{m.value}</p>
                        <p className="text-xs font-mono text-text-muted uppercase tracking-wider">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left 2 Cols: Architectural Narrative */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-display font-bold text-text mb-2 flex items-center gap-2">
                          <Server className="w-4 h-4 text-accent" />
                          System Problem & Engineering Blueprint
                        </h4>
                        <p className="text-text-muted text-base font-light leading-relaxed whitespace-pre-line">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                        <p className="text-xs font-mono uppercase text-accent font-semibold">
                          Client Verified Outcome:
                        </p>
                        <p className="text-sm text-text-muted font-light leading-relaxed">
                          {selectedProject.impact}
                        </p>
                      </div>
                    </div>

                    {/* Right Col: Stack & Action Buttons */}
                    <div className="space-y-6">
                      <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
                        <h4 className="text-sm font-mono uppercase tracking-wider text-text flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-accent" />
                          Granular Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.granularTech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-mono text-text-muted bg-white/[0.04] border border-white/5 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-4 bg-text text-bg font-semibold rounded-full hover:bg-accent transition-colors text-sm"
                        >
                          Visit Live Production Site <ExternalLink className="w-4 h-4" />
                        </a>

                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-4 glass-card text-text font-medium rounded-full hover:border-accent hover:text-accent transition-colors text-sm"
                          >
                            View Repository <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
