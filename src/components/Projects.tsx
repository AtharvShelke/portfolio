import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import {
  ExternalLink,
  Github,
  X,
  ArrowRight,
  TrendingUp,
  Cpu,
  Server,
  LayoutGrid,
  Layers,
  Sparkles,
  Maximize2,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { PROJECTS, Project } from '../constants.js';
import type Lenis from 'lenis';

const CATEGORIES = ['All Systems', 'ERP & Operations', 'AI & Automation', 'Multi-Tenant Platforms'] as const;

// Browser Chrome Header
const WindowChrome = ({ title, url }: { title: string; url?: string }) => (
  <div className="flex items-center justify-between px-4 py-2.5 bg-black/70 backdrop-blur-md border-b border-white/10 select-none">
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 border border-[#E0443E]/50 shadow-sm" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 border border-[#DEA123]/50 shadow-sm" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 border border-[#1AAB29]/50 shadow-sm" />
    </div>
    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.05] border border-white/5 text-[10px] font-mono text-text-muted truncate max-w-[200px] sm:max-w-xs">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="truncate">{url ? new URL(url).hostname : title}</span>
    </div>
    <div className="w-8" />
  </div>
);

// Showcase Card (Alternating Split Layout)
const ShowcaseCard = ({
  project,
  index,
  onInspect,
}: {
  project: Project;
  index: number;
  onInspect: (p: Project) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.1 });
  const yImg = useTransform(smoothProgress, [0, 1], ['-4%', '4%']);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } gap-8 lg:gap-12 items-stretch group rounded-3xl glass-card glass-card-hover border border-white/10 p-6 sm:p-8 md:p-10 relative overflow-hidden`}
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/10 transition-colors duration-500" />

      {/* Image / Visual Showcase with Window Frame */}
      <div
        className="w-full lg:w-7/12 flex flex-col rounded-2xl overflow-hidden bg-[#0A0C10] border border-white/10 shadow-2xl relative cursor-pointer"
        onClick={() => onInspect(project)}
      >
        <WindowChrome title={project.title} url={project.link} />

        <div className="relative aspect-[16/10] overflow-hidden bg-surface/90 flex items-center justify-center">
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider bg-black/75 backdrop-blur-md border border-white/15 text-amber-300 shadow-md">
              {project.tag}
            </span>
          </div>

          <motion.img
            style={{ y: yImg }}
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top origin-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

          {/* Quick Hover Overlay Badge */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
            <span className="px-4 py-2 rounded-full bg-white text-bg font-semibold text-xs flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Maximize2 className="w-3.5 h-3.5" /> Inspect Architecture
            </span>
          </div>
        </div>
      </div>

      {/* Narrative & Metrics */}
      <div className="w-full lg:w-5/12 flex flex-col justify-between space-y-6">
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
              Client: <strong className="text-text font-normal">{project.client}</strong>
            </span>
            <span className="text-xs font-mono text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
              0{index + 1}
            </span>
          </div>

          <h3
            onClick={() => onInspect(project)}
            className="text-2xl sm:text-3xl font-display font-bold text-text group-hover:text-accent transition-colors leading-tight mb-3 cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Quantified Impact Banner */}
          <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/15 mb-5 relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Production Impact</span>
            </div>
            <p className="text-xs text-text-muted font-light leading-snug">
              {project.impact}
            </p>
          </div>

          {/* Metric Pills */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center p-2 rounded-xl bg-white/[0.02] border border-white/5">
                <p className="text-xs sm:text-sm font-display font-bold text-text">{m.value}</p>
                <p className="text-[9px] sm:text-[10px] text-text-muted font-mono uppercase truncate">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls & Tech */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-mono text-text-muted bg-white/[0.03] border border-white/5 rounded-md"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-1 text-[11px] font-mono text-accent bg-accent/5 rounded-md">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Source Code"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-text hover:text-accent hover:border-accent/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-text text-bg hover:bg-accent transition-colors text-xs font-semibold"
            >
              <span>Live System</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Grid Card (Compact Matrix View)
const GridCard = ({
  project,
  index,
  onInspect,
}: {
  project: Project;
  index: number;
  onInspect: (p: Project) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col justify-between rounded-2xl glass-card glass-card-hover border border-white/10 overflow-hidden group cursor-pointer"
      onClick={() => onInspect(project)}
    >
      <div>
        {/* Window Chrome & Image */}
        <div className="bg-[#0A0C10] border-b border-white/10 overflow-hidden">
          <WindowChrome title={project.title} url={project.link} />
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute top-2.5 left-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/80 backdrop-blur-md border border-white/10 text-amber-300">
                {project.tag}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span>{project.category}</span>
            <span className="text-accent font-semibold">0{index + 1}</span>
          </div>

          <h3 className="text-lg font-display font-bold text-text group-hover:text-accent transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-text-muted text-xs font-light line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/5">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-1.5 rounded-lg bg-white/[0.02] text-center">
                <p className="text-xs font-display font-bold text-text">{m.value}</p>
                <p className="text-[8px] text-text-muted font-mono uppercase truncate">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Tech */}
      <div className="p-5 pt-0 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 2).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono text-text-muted bg-white/[0.03] border border-white/5 rounded"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 2 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-accent">
              +{project.tech.length - 2}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-accent group-hover:translate-x-0.5 transition-transform">
          Details <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All Systems');
  const [viewMode, setViewMode] = useState<'showcase' | 'grid'>('showcase');

  const filteredProjects =
    activeTab === 'All Systems'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  // Keyboard escape listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="work" className="py-24 sm:py-32 bg-bg relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-[#6EA8FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent">
                Production Artifacts & Case Studies
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold uppercase tracking-tight text-text">
              Selected{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-300 to-accent">
                Work
              </span>
            </h2>
            <p className="text-text-muted text-sm sm:text-base mt-4 max-w-xl font-light">
              End-to-end architectures, high-concurrency ERP suites, and autonomous AI pipelines engineered for verified commercial scale.
            </p>
          </div>

          {/* View Mode & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((tab) => {
                const count =
                  tab === 'All Systems'
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === tab).length;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 ${
                      activeTab === tab
                        ? 'bg-accent text-bg font-semibold shadow-[0_4px_20px_rgba(242,125,38,0.3)]'
                        : 'glass-card text-text-muted hover:text-text hover:border-white/20'
                    }`}
                  >
                    <span>{tab}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        activeTab === tab ? 'bg-black/20 text-bg' : 'bg-white/10 text-text-muted'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-1 rounded-xl bg-white/[0.03] border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode('showcase')}
                aria-label="Showcase View"
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'showcase'
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                <Layers className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-label="Grid View"
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-accent/20 text-accent border border-accent/30'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Render Matrix */}
        <AnimatePresence mode="wait">
          {viewMode === 'showcase' ? (
            <motion.div
              key="showcase-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12 sm:space-y-16"
            >
              {filteredProjects.map((project, index) => (
                <ShowcaseCard
                  key={project.id}
                  project={project}
                  index={index}
                  onInspect={setSelectedProject}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <GridCard
                  key={project.id}
                  project={project}
                  index={index}
                  onInspect={setSelectedProject}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Architectural Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 30 }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6 pointer-events-none"
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-project-title"
                className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto hide-scrollbar bg-[#0C0E14] border border-white/15 rounded-3xl shadow-2xl pointer-events-auto flex flex-col"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-black/75 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-text hover:text-accent hover:border-accent transition-colors shadow-lg"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Visual Banner with macOS Frame */}
                <div className="w-full bg-[#080A0E] border-b border-white/10">
                  <WindowChrome title={selectedProject.title} url={selectedProject.link} />
                  <div className="relative aspect-[21/9] max-h-[360px] overflow-hidden bg-bg">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E14] via-[#0C0E14]/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 sm:left-10 z-10 max-w-2xl">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent/20 border border-accent/40 text-accent mb-2 inline-block">
                        {selectedProject.tag}
                      </span>
                      <h3 id="modal-project-title" className="text-2xl sm:text-4xl font-display font-bold text-text">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-10 space-y-8">
                  {/* Quantified Metrics Highlight */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-4 rounded-2xl glass-card border border-white/10 relative overflow-hidden"
                      >
                        <div className="flex items-center gap-2 text-accent mb-1">
                          <Zap className="w-4 h-4 text-accent" />
                          <p className="text-xl sm:text-2xl font-display font-bold text-accent">{m.value}</p>
                        </div>
                        <p className="text-xs font-mono text-text-muted uppercase tracking-wider">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left 2 Cols: Architectural Narrative */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-base font-display font-bold text-text mb-3 flex items-center gap-2">
                          <Server className="w-4 h-4 text-accent" />
                          System Problem & Engineering Blueprint
                        </h4>
                        <p className="text-text-muted text-sm sm:text-base font-light leading-relaxed whitespace-pre-line">
                          {selectedProject.fullDescription}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                        <p className="text-xs font-mono uppercase text-accent font-semibold flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4" /> Client Verified Outcome
                        </p>
                        <p className="text-sm text-text font-light leading-relaxed">
                          {selectedProject.impact}
                        </p>
                      </div>
                    </div>

                    {/* Right Col: Stack & Action Buttons */}
                    <div className="space-y-6">
                      <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-text flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-accent" />
                          Granular Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
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
                        <button
                          onClick={() => {
                            const projectTitle = selectedProject.title;
                            setSelectedProject(null);
                            const subjectBox = document.getElementById('subject') as HTMLInputElement | null;
                            const messageBox = document.getElementById('message') as HTMLTextAreaElement | null;
                            if (subjectBox) subjectBox.value = `Architecture Inquiry: ${projectTitle}`;
                            if (messageBox) {
                              messageBox.value = `Hi Atharv, I reviewed the case study for "${projectTitle}" and would like to build a system with similar architectural specifications. Let's schedule technical scoping.`;
                            }
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                              const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
                              if (lenis) {
                                lenis.scrollTo(contactSection, { offset: -70, duration: 1.2 });
                              } else {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                              }
                            }
                          }}
                          className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent hover:bg-accent-hover text-bg font-semibold rounded-2xl transition-all text-sm shadow-lg shadow-accent/25 cursor-pointer"
                        >
                          <span>Inquire About Similar Architecture</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-white/[0.06] hover:bg-white/15 text-text font-medium rounded-2xl transition-colors text-sm border border-white/10"
                        >
                          <span>Visit Live Production Site</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>

                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 glass-card text-text-muted hover:text-text font-mono text-xs rounded-2xl hover:border-accent transition-colors"
                          >
                            <span>View Source Code</span>
                            <Github className="w-3.5 h-3.5" />
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
