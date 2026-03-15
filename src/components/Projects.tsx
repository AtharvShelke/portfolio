import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github, X, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants.js';



const ProjectCard = ({ project, index, onClick }: { project: typeof PROJECTS[0], index: number, onClick: (p: typeof PROJECTS[0]) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03, boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8)' }}
      className={`flex flex-col ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-12 items-center group cursor-pointer p-4 md:p-8 rounded-3xl transition-colors hover:bg-surface/50`}
      onClick={() => onClick(project)}
    >
      {/* Image Container */}
      <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl relative aspect-video">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <motion.img
          style={{ y, scale: 1 }}
          whileHover={{ scale: 1.25 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain origin-center"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-2/5 space-y-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-border rounded-full text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-4xl md:text-5xl font-display font-bold group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-text-muted text-lg font-light leading-relaxed">
          {project.description}
        </p>

        <div className="flex items-center gap-6 pt-6">
          <span className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-accent group-hover:translate-x-2 transition-transform duration-300">
            Explore Project <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

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
    <section id="work" className="py-32 bg-bg relative">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter">
            Selected <span className="text-stroke">Work</span>
          </h2>
          <div className="w-24 h-1 bg-accent mt-8" />
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[90] bg-bg/90 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: '100vh' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100vh' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 pointer-events-none"
            >
              <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto hide-scrollbar bg-surface border border-border rounded-3xl shadow-2xl pointer-events-auto">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-20 w-10 h-10 bg-bg/50 backdrop-blur-md border border-border rounded-full flex items-center justify-center text-text hover:text-accent hover:border-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-full aspect-video relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                </div>

                <div className="p-8 md:p-12 -mt-20 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-bg border border-border rounded-full text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">
                    {selectedProject.title}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                      <h4 className="text-xl font-display font-bold text-text">About the Project</h4>
                      <p className="text-text-muted text-lg font-light leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-xl font-display font-bold text-text mb-4">Granular Tech Stack</h4>
                        <ul className="space-y-3">
                          {selectedProject.granularTech.map((tech) => (
                            <li key={tech} className="flex items-center gap-3 text-text-muted font-light">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-8 border-t border-border flex flex-col gap-4">
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-4 bg-text text-bg font-medium rounded-full hover:bg-accent transition-colors"
                        >
                          Visit Live Site <ExternalLink className="w-4 h-4" />
                        </a>
                        {selectedProject.github && (
                          <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-4 border border-border text-text font-medium rounded-full hover:bg-surface-hover transition-colors"
                        >
                          View Source Code <Github className="w-4 h-4" />
                        </a>)}
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
