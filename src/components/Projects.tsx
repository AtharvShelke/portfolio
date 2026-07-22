import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github, X, ArrowRight, Check, Copy } from 'lucide-react';
import { PROJECTS, Project } from '../constants';
import ArchitectureDiagram from './ArchitectureDiagram';

const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: (p: Project) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      id={`project-card-${project.slug || project.id}`}
      ref={ref}
      tabIndex={0}
      role="button"
      aria-label={`View case study for ${project.title}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.01 }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-8 lg:gap-16 items-center group cursor-pointer p-4 md:p-8 rounded-3xl transition-colors hover:bg-surface/50 focus-visible:ring-2 focus-visible:ring-accent`}
      onClick={() => onClick(project)}
    >
      {/* Image Container */}
      <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl relative aspect-video will-change-transform bg-surface border border-border/30">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <motion.img
          style={{ y, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          src={project.image}
          alt={project.title}
          width={project.width}
          height={project.height}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='100%25' height='100%25' fill='%2318181b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23a1a1aa' font-family='sans-serif' font-size='18'%3EImage Preview Unavailable%3C/text%3E%3C/svg%3E";
          }}
          className="w-full h-full object-cover origin-center will-change-transform"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-2/5 space-y-6 will-change-transform">
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
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold group-hover:text-accent transition-colors duration-300">
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'schema' | 'metrics'>('overview');
  const [copiedCreds, setCopiedCreds] = useState(false);

  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // URL Deep-Linking & History Sync
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const projSlug = urlParams.get('project');

      if (projSlug) {
        const found = PROJECTS.find((p) => p.slug === projSlug || String(p.id) === projSlug);
        if (found) {
          setSelectedProject(found);
        } else {
          setSelectedProject(null);
        }
      } else {
        setSelectedProject(null);
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openProject = (project: Project) => {
    lastActiveElementRef.current = document.activeElement as HTMLElement;
    setSelectedProject(project);
    setActiveTab('overview');
    setCopiedCreds(false);

    const url = new URL(window.location.href);
    url.searchParams.set('project', project.slug || String(project.id));
    window.history.pushState({ modalOpen: true, projectId: project.id }, '', url.toString());
  };

  const closeProject = (fromHistory = false) => {
    setSelectedProject(null);

    if (!fromHistory && window.location.search.includes('project=')) {
      const url = new URL(window.location.href);
      url.searchParams.delete('project');
      window.history.pushState(null, '', url.pathname + url.hash);
    }
  };

  // Body Scroll Lock & Scrollbar Width Compensation
  useEffect(() => {
    if (selectedProject) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [selectedProject]);

  // Focus Trapping, Escape Listener, & Return Focus
  useEffect(() => {
    if (selectedProject) {
      setTimeout(() => {
        const firstFocusable = modalRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 60);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeProject();
          return;
        }

        if (e.key === 'Tab' && modalRef.current) {
          const focusables = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;

          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        lastActiveElementRef.current?.focus();
      };
    }
  }, [selectedProject]);

  const tabs: { key: 'overview' | 'architecture' | 'schema' | 'metrics'; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'architecture', label: 'Architecture' },
    { key: 'schema', label: 'Database Schema' },
    { key: 'metrics', label: 'Metrics & Impact' },
  ];

  const handleKeyDownTabs = (e: React.KeyboardEvent, currentKey: string) => {
    const keys = tabs.map((t) => t.key);
    const currentIndex = keys.indexOf(currentKey as any);
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % keys.length;
      setActiveTab(keys[nextIndex]);
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
      setActiveTab(keys[prevIndex]);
    }
  };

  const handleCopyCredentials = async () => {
    if (!selectedProject?.demoCredentials) return;
    const { email, password } = selectedProject.demoCredentials;
    const text = `Email: ${email}\nPassword: ${password}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCreds(true);
      setTimeout(() => setCopiedCreds(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <>
      <section id="work" className="py-16 md:py-24 bg-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter">
            Selected <span className="text-stroke">Work</span>
          </h2>
          <div className="w-24 h-1 bg-accent mt-8" />
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onClick={openProject} />
          ))}
        </div>
      </div>
    </section>

    {/* Accessible Tabbed Project Modal via React Portal */}
    {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[90] bg-bg/80 backdrop-blur-md"
                onClick={() => closeProject()}
              />

              <motion.div
                key="modal"
                initial={{ opacity: 0, y: '100vh' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '100vh' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 pointer-events-none"
              >
                <div
                  ref={modalRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-project-title"
                  className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto hide-scrollbar bg-surface border border-border rounded-3xl shadow-2xl pointer-events-auto flex flex-col focus:outline-none"
                >
                  <button
                    onClick={() => closeProject()}
                    aria-label="Close modal"
                    className="absolute top-6 right-6 z-20 w-10 h-10 bg-bg/50 backdrop-blur-md border border-border rounded-full flex items-center justify-center text-text hover:text-accent hover:border-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Banner Image */}
                  <div className="w-full aspect-video relative max-h-[340px] shrink-0">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      width={selectedProject.width}
                      height={selectedProject.height}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='100%25' height='100%25' fill='%2318181b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23a1a1aa' font-family='sans-serif' font-size='18'%3EImage Preview Unavailable%3C/text%3E%3C/svg%3E";
                      }}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  </div>

                  {/* Header Info */}
                  <div className="px-8 md:px-12 -mt-16 relative z-10 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-bg border border-border rounded-full text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 id="modal-project-title" className="text-3xl md:text-5xl font-display font-bold">
                      {selectedProject.title}
                    </h3>

                  {/* Accessible Tab Navigation */}
                  <div
                    role="tablist"
                    aria-label="Project Case Study Sections"
                    className="flex items-center gap-2 border-b border-border overflow-x-auto hide-scrollbar pb-1"
                  >
                    {tabs.map((tab) => {
                      const isActive = activeTab === tab.key;
                      return (
                        <button
                          key={tab.key}
                          id={`tab-${tab.key}`}
                          role="tab"
                          aria-selected={isActive}
                          aria-controls={`panel-${tab.key}`}
                          tabIndex={isActive ? 0 : -1}
                          onClick={() => setActiveTab(tab.key)}
                          onKeyDown={(e) => handleKeyDownTabs(e, tab.key)}
                          className={`px-4 py-3 text-sm font-medium transition-all relative whitespace-nowrap cursor-pointer ${
                            isActive
                              ? 'text-accent font-semibold'
                              : 'text-text-muted hover:text-text'
                          }`}
                        >
                          {tab.label}
                          {isActive && (
                            <motion.div
                              layoutId="active-modal-tab"
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tab Panel Content */}
                <div className="p-8 md:p-12 pt-6 flex-1">
                  {/* Overview Tab */}
                  {activeTab === 'overview' && (
                    <div
                      id="panel-overview"
                      role="tabpanel"
                      aria-labelledby="tab-overview"
                      tabIndex={0}
                      className="grid grid-cols-1 lg:grid-cols-3 gap-12 outline-none"
                    >
                      <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xl font-display font-bold text-text">About the Project</h4>
                        <p className="text-text-muted text-base md:text-lg font-light leading-relaxed whitespace-pre-line">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-display font-bold text-text mb-4">Granular Tech Stack</h4>
                          <ul className="space-y-2.5">
                            {selectedProject.granularTech.map((tech) => (
                              <li key={tech} className="flex items-center gap-3 text-text-muted text-sm font-light">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6 border-t border-border flex flex-col gap-3">
                          <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3.5 bg-text text-bg font-medium rounded-full hover:bg-accent transition-colors text-sm"
                          >
                            Visit Live Site <ExternalLink className="w-4 h-4" />
                          </a>
                          {selectedProject.github && (
                            <a
                              href={selectedProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 w-full py-3.5 border border-border text-text font-medium rounded-full hover:bg-surface-hover transition-colors text-sm"
                            >
                              View Source Code <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Architecture Tab */}
                  {activeTab === 'architecture' && (
                    <div
                      id="panel-architecture"
                      role="tabpanel"
                      aria-labelledby="tab-architecture"
                      tabIndex={0}
                      className="space-y-8 outline-none"
                    >
                      <ArchitectureDiagram projectId={selectedProject.id} />

                      <div>
                        <h4 className="text-xl font-display font-bold text-text mb-3">System Architecture &amp; Decisions</h4>
                        <p className="text-text-muted text-base font-light leading-relaxed">
                          {selectedProject.architectureNotes}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <h4 className="text-xl font-display font-bold text-text mb-3">Engineering Challenges Solved</h4>
                        <p className="text-text-muted text-base font-light leading-relaxed">
                          {selectedProject.challenges}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Database Schema Tab */}
                  {activeTab === 'schema' && (
                    <div
                      id="panel-schema"
                      role="tabpanel"
                      aria-labelledby="tab-schema"
                      tabIndex={0}
                      className="space-y-6 outline-none"
                    >
                      <h4 className="text-xl font-display font-bold text-text">Database Schema &amp; Data Modeling</h4>
                      <p className="text-text-muted text-base font-light leading-relaxed">
                        {selectedProject.schemaDecisions}
                      </p>
                    </div>
                  )}

                  {/* Metrics & Impact Tab */}
                  {activeTab === 'metrics' && (
                    <div
                      id="panel-metrics"
                      role="tabpanel"
                      aria-labelledby="tab-metrics"
                      tabIndex={0}
                      className="space-y-8 outline-none"
                    >
                      <div>
                        <h4 className="text-xl font-display font-bold text-text mb-4">Quantified Outcomes &amp; Impact</h4>
                        <ul className="space-y-3">
                          {selectedProject.metrics.map((metric, i) => (
                            <li key={i} className="flex items-start gap-3 p-4 rounded-2xl border border-border/40 bg-surface-hover/30">
                              <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                              <span className="text-text-muted text-base font-light leading-relaxed">{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Demo Credentials Pattern */}
                      <div className="pt-6 border-t border-border">
                        <h4 className="text-xl font-display font-bold text-text mb-3">Live Demo Access</h4>
                        {selectedProject.demoCredentials ? (
                          <div className="p-5 rounded-2xl border border-accent/40 bg-accent/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                              <p className="text-xs font-mono uppercase text-accent mb-1">Public Test Credentials Available</p>
                              <p className="text-sm text-text-muted font-mono">
                                Email: <span className="text-text">{selectedProject.demoCredentials.email}</span>
                              </p>
                              <p className="text-sm text-text-muted font-mono">
                                Password: <span className="text-text">{selectedProject.demoCredentials.password}</span>
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={handleCopyCredentials}
                              className="px-4 py-2 text-xs font-mono rounded-full bg-accent text-bg font-semibold flex items-center gap-2 hover:bg-accent-hover transition-colors shrink-0"
                            >
                              {copiedCreds ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  Copy Credentials
                                </>
                              )}
                            </button>
                          </div>
                        ) : (
                          <p className="text-sm text-text-muted font-light italic">
                            [Note / Gap]: Private production system or open-access demo site — no public demo test account credentials required or active.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}
