import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import { 
  ExternalLink, 
  Layers, 
  Activity, 
  Cpu, 
  X, 
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Full-Stack', 'Cloud/DevOps', '3D & AI'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  const openModal = (project) => {
    soundFX.playClick();
    setSelectedProject(project);
  };

  const closeModal = () => {
    soundFX.playClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Production-Ready <span className="text-gradient-cyan">Systems & Apps</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A curated selection of high-availability cloud platforms, distributed systems, and real-time WebGL engines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                soundFX.playHover();
                setActiveFilter(f);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                activeFilter === f
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20 font-bold'
                  : 'glass-card border-border text-muted-foreground hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-border hover:border-cyan-500/50 transition-all duration-300 flex flex-col group"
            >
              {/* Project Image Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Live Stats Pill */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{Object.values(project.stats)[0]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mb-3">{project.subtitle}</p>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-secondary/80 text-[11px] font-mono text-gray-300 border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                  <button
                    onClick={() => openModal(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>View Architecture</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-secondary hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400 transition-colors"
                      title="View GitHub Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                      title="Live System Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Deep Dive Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel max-w-2xl w-full rounded-3xl border border-cyan-500/40 p-6 md:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-secondary text-muted-foreground hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
                <p className="text-xs font-mono text-muted-foreground">{selectedProject.subtitle}</p>
              </div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-3 gap-3">
                {Object.entries(selectedProject.stats).map(([k, v]) => (
                  <div key={k} className="glass-card p-3 rounded-xl border border-border text-center">
                    <div className="text-xs text-muted-foreground font-mono capitalize">{k}</div>
                    <div className="text-lg font-bold text-cyan-400 font-mono mt-1">{v}</div>
                  </div>
                ))}
              </div>

              {/* Description & Architecture Details */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  System Overview & Impact
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Underlying Architecture
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-mono bg-secondary/50 p-3 rounded-xl border border-border">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2 text-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 text-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Platform</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
