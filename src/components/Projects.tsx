import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Check, Copy, Sparkles, Database, Layers, BarChart2 } from 'lucide-react';
import { PROJECTS, Project } from '../constants';
import ArchitectureDiagram from './ArchitectureDiagram';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card } from './ui/Card';
import { Dialog } from './ui/Dialog';

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

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      id={`project-card-${project.slug || project.id}`}
      ref={ref}
      tabIndex={0}
      role="button"
      aria-label={`View case study for ${project.title}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group cursor-pointer p-6 sm:p-8 rounded-3xl glass-panel border border-[var(--border-default)] hover:border-[var(--border-hover)] hover:shadow-[0_0_32px_rgba(242,125,38,0.20)] transition-all duration-300 ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}
      onClick={() => onClick(project)}
    >
      {/* Image Container (7 Cols on desktop) */}
      <div className={`lg:col-span-7 overflow-hidden rounded-2xl relative aspect-video bg-[var(--bg-elevation-2)] border border-[var(--border-default)] ${
        index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
      }`}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <motion.img
          style={{ y }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          src={project.image}
          alt={project.title}
          width={project.width}
          height={project.height}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='100%25' height='100%25' fill='%2318181b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23a1a1aa' font-family='sans-serif' font-size='18'%3EImage Preview Unavailable%3C/text%3E%3C/svg%3E";
          }}
          className="w-full h-full object-cover origin-center"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content Container (5 Cols on desktop) */}
      <div className={`lg:col-span-5 space-y-5 ${
        index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
      }`}>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="neutral">
              {t}
            </Badge>
          ))}
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold font-[#font-heading] text-[var(--text-primary)] group-hover:text-[#F27D26] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {project.description}
        </p>

        <div className="pt-4 flex items-center gap-4">
          <Button variant="ghost" className="px-0 hover:bg-transparent text-[#F27D26] group-hover:translate-x-1 transition-transform">
            Explore Case Study <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'schema' | 'metrics'>('overview');
  const [copiedCreds, setCopiedCreds] = useState(false);

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

  const tabs: { key: 'overview' | 'architecture' | 'schema' | 'metrics'; label: string; icon: any }[] = [
    { key: 'overview', label: 'Overview', icon: Sparkles },
    { key: 'architecture', label: 'Architecture', icon: Layers },
    { key: 'schema', label: 'Database Schema', icon: Database },
    { key: 'metrics', label: 'Metrics & Impact', icon: BarChart2 },
  ];

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
      <section id="work" className="py-24 relative overflow-hidden bg-[var(--bg-base)]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <Badge variant="primary" className="mb-4 uppercase tracking-wider font-mono">
              Selected Work
            </Badge>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-[#font-heading] uppercase tracking-tight">
              PROVEN PRODUCTION <span className="text-[#F27D26]">APPLICATIONS</span>
            </h2>
            <div className="w-20 h-[3px] bg-[#F27D26] rounded-full mt-6 shadow-[0_0_12px_rgba(242,125,38,0.5)]" />
          </div>

          <div className="space-y-12">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onClick={openProject} />
            ))}
          </div>
        </div>
      </section>

      {/* Accessible Tabbed Project Modal Dialog */}
      <Dialog
        isOpen={Boolean(selectedProject)}
        onClose={() => closeProject()}
        title={selectedProject?.title || 'Case Study'}
        maxWidth="max-w-4xl"
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Banner Image */}
            <div className="w-full aspect-video relative max-h-[300px] rounded-xl overflow-hidden bg-[var(--bg-elevation-2)] border border-[var(--border-default)]">
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
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((t) => (
                <Badge key={t} variant="primary">
                  {t}
                </Badge>
              ))}
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-2 border-b border-[var(--border-default)] overflow-x-auto pb-1 hide-scrollbar">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.key;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold font-mono tracking-wide transition-all rounded-lg cursor-pointer ${
                      isActive
                        ? 'bg-[#F27D26] text-[#050505] shadow-[0_0_16px_rgba(242,125,38,0.4)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="pt-2">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <h4 className="text-lg font-bold text-[var(--text-primary)]">Project Summary</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">Granular Tech Stack</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.granularTech.map((tech) => (
                          <Badge key={tech} variant="neutral" className="text-[11px]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[var(--border-default)] flex flex-col gap-3">
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" className="w-full text-xs">
                          Visit Live Site <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </Button>
                      </a>
                      {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Button variant="secondary" className="w-full text-xs">
                            View Source Code <Github className="w-3.5 h-3.5 ml-1" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-6">
                  <ArchitectureDiagram projectId={selectedProject.id} />
                  <div>
                    <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">Architecture Notes</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {selectedProject.architectureNotes}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-default)]">
                    <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">Engineering Challenges Solved</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'schema' && (
                <div className="space-y-4">
                  <h4 className="text-base font-bold text-[var(--text-primary)]">Database Schema & Decisions</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {selectedProject.schemaDecisions}
                  </p>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="space-y-6">
                  <h4 className="text-base font-bold text-[var(--text-primary)]">Quantified Outcomes</h4>
                  <ul className="space-y-2.5">
                    {selectedProject.metrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--bg-elevation-2)] border border-[var(--border-default)] text-xs text-[var(--text-secondary)]">
                        <span className="w-2 h-2 rounded-full bg-[#F27D26] mt-1.5 shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>

                  {selectedProject.demoCredentials && (
                    <Card variant="solid" className="p-4 bg-[#F27D26]/10 border-[#F27D26]/30">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-mono font-bold text-[#F27D26]">Demo Credentials Available</p>
                          <p className="text-xs font-mono text-[var(--text-secondary)]">Email: {selectedProject.demoCredentials.email}</p>
                          <p className="text-xs font-mono text-[var(--text-secondary)]">Password: {selectedProject.demoCredentials.password}</p>
                        </div>
                        <Button size="sm" variant="primary" onClick={handleCopyCredentials}>
                          {copiedCreds ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          {copiedCreds ? 'Copied' : 'Copy'}
                        </Button>
                      </div>
                    </Card>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}
