import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import { TechLogo } from './TechIcons';
import { GithubIcon } from './SocialIcons';
import {
  ExternalLink,
  Calendar,
  Star,
  Layers,
  CheckCircle2,
  Cpu,
  X,
  ArrowUpRight,
  Users,
  Activity
} from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { label: 'All', count: portfolioData.projects.length },
    { label: 'Key & Featured (imp!)', count: portfolioData.projects.filter(p => p.isImportant).length },
    { label: 'Full-Stack', count: portfolioData.projects.filter(p => p.projectType === 'Full-Stack').length },
    { label: 'Frontend Only', count: portfolioData.projects.filter(p => p.projectType === 'Frontend Only').length }
  ];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Key & Featured (imp!)') return project.isImportant;
    if (activeFilter === 'Full-Stack') return project.projectType === 'Full-Stack';
    if (activeFilter === 'Frontend Only') return project.projectType === 'Frontend Only';
    return true;
  });

  const openModal = (project) => {
    soundFX.playClick();
    setSelectedProject(project);
  };

  const closeModal = () => {
    soundFX.playClick();
    setSelectedProject(null);
  };

  const githubProfileUrl = portfolioData.personal.github || "https://github.com/Abhijith232373";

  return (
    <section id="projects" className="py-16 lg:py-20 relative overflow-hidden bg-[#0a0c0f] select-none">
      {/* Anchor for #work */}
      <div id="work" className="absolute -top-24 pointer-events-none" />

      {/* Subtle Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Full Screen Width Utilization (Eliminates Left & Right Empty Spaces) */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* =========================================================================
            CLEAN, MINIMAL HEADING + SIMPLE INLINE GITHUB PROFILE
            (Removed line above & sentence below as requested)
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Works
            </h2>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              8 Projects
            </span>
          </div>

          {/* Simple, Compact GitHub Profile Link Inline with Heading */}
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 text-xs font-mono text-gray-200 hover:text-white transition-all shadow-md group cursor-pointer shrink-0"
          >
            <GithubIcon className="w-3.5 h-3.5 fill-current text-white group-hover:text-cyan-300" />
            <span>github.com/Abhijith232373</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* =========================================================================
            COMPACT CATEGORY & STATUS FILTERS
           ========================================================================= */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => {
                soundFX.playHover();
                setActiveFilter(f.label);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer border flex items-center gap-1.5 ${
                activeFilter === f.label
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] font-bold'
                  : 'bg-[#121620]/70 border-white/[0.08] text-gray-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {f.label === 'Key & Featured (imp!)' && <Star className="w-3 h-3 text-amber-400 fill-amber-400" />}
              <span>{f.label}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 text-gray-300">
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* =========================================================================
            8 COMPACT CARDS IN A 4-COLUMN GRID (2 Rows of 4 on Desktop)
            Chronological Order: Latest (Aug 2026) to Oldest (Apr 2025)
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => soundFX.playHover()}
              className={`group rounded-2xl overflow-hidden bg-gradient-to-b from-[#131722]/95 via-[#0e121a]/95 to-[#090c12]/95 border transition-all duration-300 flex flex-col justify-between shadow-xl relative hover:-translate-y-1.5 ${
                project.isImportant
                  ? 'border-amber-400/40 hover:border-amber-400/80 hover:shadow-[0_12px_35px_rgba(245,158,11,0.2)]'
                  : 'border-white/[0.08] hover:border-cyan-400/60 hover:shadow-[0_12px_35px_rgba(6,182,212,0.18)]'
              }`}
            >
              {/* Top Accent Gradient Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r transition-opacity duration-300 opacity-50 group-hover:opacity-100 ${
                  project.isImportant
                    ? 'from-amber-400 via-orange-400 to-amber-200'
                    : project.projectType === 'Full-Stack'
                    ? 'from-emerald-400 via-cyan-400 to-blue-400'
                    : 'from-cyan-400 via-blue-500 to-purple-500'
                }`}
              />

              {/* Compact Visual Preview Banner */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#0c1017]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                />
                
                {/* Vignette Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e121a] via-[#0e121a]/30 to-black/60" />

                {/* Top Badges Row */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10">
                  {/* Exact Date Mentioned */}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-[10px] font-mono text-cyan-200 border border-cyan-400/30 shadow-sm">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{project.date}</span>
                  </span>

                  {/* Key Project / Team Badge */}
                  <div className="flex items-center gap-1">
                    {project.isImportant && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-950/90 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-amber-400/70 shadow-sm">
                        <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                        <span>{project.id === 'furniture-booking' ? 'imp!' : 'KEY'}</span>
                      </span>
                    )}

                    {project.isGroupProject && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-950/90 backdrop-blur-md text-[10px] font-mono text-purple-300 border border-purple-500/40">
                        <Users className="w-2.5 h-2.5 text-purple-400" />
                        <span>Team</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Left: Full-Stack vs Frontend Only Badge */}
                <div className="absolute bottom-2 left-2.5 z-10 flex items-center gap-1.5">
                  {project.projectType === 'Full-Stack' ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/90 backdrop-blur-md text-[10px] font-mono font-semibold text-emerald-300 border border-emerald-500/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Full-Stack
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-950/90 backdrop-blur-md text-[10px] font-mono font-semibold text-blue-300 border border-blue-500/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Frontend Only
                    </span>
                  )}
                  
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md text-gray-300 border border-white/10 uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Compact Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  {/* Number & Title */}
                  <span className="font-mono text-[10px] text-white/40 block leading-none mb-1">
                    {project.number}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-mono text-cyan-400/80 line-clamp-1 mt-0.5">
                    {project.subtitle}
                  </p>

                  {/* Concise Description */}
                  <p className="text-xs text-gray-300 leading-relaxed mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Chips with Official TechLogo */}
                <div className="pt-1">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-gray-300 border border-white/[0.08]"
                      >
                        <TechLogo name={t} className="w-3 h-3 shrink-0" />
                        <span>{t}</span>
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-white/[0.03] text-[9px] font-mono text-gray-400 border border-white/[0.06]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-1">
                  {/* Architecture & Features Modal Trigger */}
                  <button
                    onClick={() => openModal(project)}
                    className="text-[11px] font-mono text-cyan-400 hover:text-white flex items-center gap-1 cursor-pointer group/btn"
                  >
                    <Activity className="w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                    <span>Details</span>
                  </button>

                  {/* Direct GitHub Code Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFX.playClick()}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.05] hover:bg-cyan-500/20 text-[11px] font-mono text-gray-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer"
                    title="Inspect GitHub Repository"
                  >
                    <GithubIcon className="w-3 h-3 fill-current text-white" />
                    <span>Code</span>
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            ARCHITECTURE DEEP-DIVE MODAL (Comprehensive Details on Demand)
           ========================================================================= */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="bg-[#0f141f] max-w-xl w-full rounded-2xl border border-cyan-400/50 p-6 space-y-5 relative max-h-[90vh] overflow-y-auto shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-white/[0.06] hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {selectedProject.date}
                  </span>
                  <span className={`font-mono text-xs px-2.5 py-0.5 rounded-md border ${
                    selectedProject.projectType === 'Full-Stack'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                      : 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                  }`}>
                    {selectedProject.projectType}
                  </span>
                  {selectedProject.isImportant && (
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-amber-950/80 text-amber-300 border border-amber-500/40">
                      ⭐ Key Project {selectedProject.id === 'furniture-booking' ? '(imp!)' : ''}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Metrics Highlights Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {Object.entries(selectedProject.stats).map(([k, v]) => (
                  <div key={k} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-center">
                    <div className="text-[10px] text-gray-400 font-mono capitalize">{k}</div>
                    <div className="text-xs sm:text-sm font-bold text-cyan-300 font-mono mt-1 truncate">{v}</div>
                  </div>
                ))}
              </div>

              {/* Scope & Description */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Project Overview</span>
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed bg-white/[0.02] p-3 rounded-lg border border-white/[0.06]">
                  {selectedProject.description}
                </p>
              </div>

              {/* Architecture Blueprint */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Engineering Architecture</span>
                </h4>
                <p className="text-xs text-cyan-100 font-mono leading-relaxed bg-[#0b1019] p-3 rounded-lg border border-cyan-500/30">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Full Tech Stack List */}
              <div>
                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>Implemented Technologies</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-200"
                    >
                      <TechLogo name={t} className="w-3.5 h-3.5" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gray-400 hover:text-white flex items-center gap-1"
                >
                  <GithubIcon className="w-3.5 h-3.5 fill-current text-white" />
                  <span>@Abhijith232373</span>
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5 fill-current text-white" />
                  <span>Open GitHub Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
