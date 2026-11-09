import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import { TechLogo } from './TechIcons';
import { GithubIcon } from './SocialIcons';
import {
  Calendar,
  Star,
  Layers,
  CheckCircle2,
  Cpu,
  X,
  ArrowUpRight,
  Activity,
  GitBranch,
  Terminal,
  Users,
  Server
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

  // Lock background scrolling completely when project modal is open
  useEffect(() => {
    if (selectedProject) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
      };
    }
  }, [selectedProject]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const githubProfileUrl = portfolioData.personal.github || "https://github.com/Abhijith232373";

  return (
    <section id="projects" className="py-16 lg:py-20 relative overflow-hidden bg-[#0a0c0f] select-none">
      {/* Anchor for #work */}
      <div id="work" className="absolute -top-24 pointer-events-none" />

      {/* Subtle Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* =========================================================================
          LEFT SIDE TELEMETRY ANIMATION (Git Branch & Commit Stream)
         ========================================================================= */}
      <div className="hidden 2xl:flex absolute left-4 3xl:left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-20 opacity-80">
        {/* Rotating Git Branch Node */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border border-dashed border-emerald-400/35 animate-spin"
            style={{ animationDuration: '24s' }}
          />
          <div
            className="absolute inset-2.5 rounded-full border border-emerald-300/20 border-t-emerald-400/80 animate-spin"
            style={{ animationDuration: '14s', animationDirection: 'reverse' }}
          />
          <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <GitBranch className="w-4 h-4 text-emerald-300 animate-pulse" />
          </div>
        </div>

        {/* Vertical Equalizer Frequency Bars */}
        <div className="flex items-center gap-1 h-12">
          {[0.3, 1.2, 0.6, 1.5, 0.4, 1.1, 0.8].map((delay, idx) => (
            <div
              key={idx}
              className="w-1 bg-emerald-400/50 rounded-full animate-pulse"
              style={{
                height: `${20 + (idx % 3) * 10}px`,
                animationDelay: `${delay}s`,
                animationDuration: '1.8s'
              }}
            />
          ))}
        </div>

        {/* Telemetry Label */}
        <div className="text-[10px] font-mono tracking-widest text-emerald-400/70 uppercase [writing-mode:vertical-lr] rotate-180 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>GIT.STREAM // REPOS VERIFIED</span>
        </div>
      </div>

      {/* =========================================================================
          RIGHT SIDE TELEMETRY ANIMATION (CI/CD Pipeline & Cloud Runtime)
         ========================================================================= */}
      <div className="hidden 2xl:flex absolute right-4 3xl:right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-20 opacity-80">
        {/* Rotating Cloud Deployment Node */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border border-purple-400/35 border-b-transparent animate-spin"
            style={{ animationDuration: '20s' }}
          />
          <div
            className="absolute inset-3 rotate-45 border border-dashed border-cyan-300/40 animate-spin"
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
          />
          <div className="w-9 h-9 rounded-full bg-purple-500/10 border border-purple-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Server className="w-4 h-4 text-purple-300 animate-pulse" />
          </div>
        </div>

        {/* Vertical Frequency Bars */}
        <div className="flex items-center gap-1 h-12">
          {[0.5, 1.4, 0.7, 1.2, 0.9, 0.4, 1.3].map((delay, idx) => (
            <div
              key={idx}
              className="w-1 bg-purple-400/50 rounded-full animate-pulse"
              style={{
                height: `${22 + (idx % 4) * 8}px`,
                animationDelay: `${delay}s`,
                animationDuration: '2.0s'
              }}
            />
          ))}
        </div>

        {/* Telemetry Label */}
        <div className="text-[10px] font-mono tracking-widest text-purple-400/70 uppercase [writing-mode:vertical-lr] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
          <span>CI/CD.PIPELINE // PRODUCTION READY</span>
        </div>
      </div>

      {/* Full Screen Width Utilization (Takes Left & Right Spaces) */}
      <div className="w-full max-w-[1480px] 3xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* =========================================================================
            CLEAN, MINIMAL HEADING + SIMPLE INLINE GITHUB PROFILE
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 text-xs font-mono text-gray-200 hover:text-white transition-all shadow-md group cursor-pointer shrink-0"
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
            8 STANDARDIZED PROJECT CARDS (4-Column Grid, 2 Rows of 4)
            - Date pinned in Right Top Corner
            - Full-Stack / Frontend / Group Project / Key Project Badges in Top Left
            - Code option removed from card face
            - Photorealistic landing page preview images
           ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              onMouseEnter={() => soundFX.playHover()}
              className={`group rounded-2xl overflow-hidden bg-[#11141c] hover:bg-[#141824] border transition-all duration-300 flex flex-col justify-between shadow-lg relative hover:-translate-y-1.5 cursor-pointer ${
                project.isImportant
                  ? 'border-amber-400/40 hover:border-amber-400/80 hover:shadow-[0_12px_35px_rgba(245,158,11,0.2)]'
                  : 'border-white/[0.08] hover:border-cyan-400/60 hover:shadow-[0_12px_35px_rgba(6,182,212,0.18)]'
              }`}
            >
              {/* Card Image Banner */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#0c1017]">
                {/* Realistic Website Preview Screenshot */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 select-none"
                />
                
                {/* Subtle gradient overlay for clean contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#11141c] via-black/20 to-black/60 pointer-events-none" />

                {/* TOP-LEFT: Clean Status, Group & Key Badges */}
                <div className="absolute top-2.5 left-2.5 z-10 flex flex-wrap items-center gap-1.5 max-w-[70%]">
                  {/* Type Badge */}
                  {project.projectType === 'Full-Stack' ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/90 backdrop-blur-md text-[10px] font-mono font-semibold text-emerald-300 border border-emerald-500/40 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Full-Stack
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-950/90 backdrop-blur-md text-[10px] font-mono font-semibold text-blue-300 border border-blue-500/40 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      Frontend
                    </span>
                  )}

                  {/* Group Project Badge */}
                  {project.isGroupProject && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-950/90 backdrop-blur-md text-[10px] font-mono font-medium text-purple-300 border border-purple-500/50 shadow-sm">
                      <Users className="w-2.5 h-2.5 text-purple-400" />
                      <span>Group</span>
                    </span>
                  )}

                  {/* Key Project Badge */}
                  {project.isImportant && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-950/90 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-amber-400/80 shadow-[0_0_10px_rgba(245,158,11,0.25)]">
                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      <span>{project.id === 'furniture-booking' ? 'imp!' : 'Key'}</span>
                    </span>
                  )}
                </div>

                {/* TOP-RIGHT CORNER: Date (Pinned in Top-Right Corner) */}
                <div className="absolute top-2.5 right-2.5 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-cyan-200 border border-cyan-400/40 shadow-md">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{project.date}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Clean, Easy-to-Understand Description */}
                  <p className="text-xs text-gray-300 leading-relaxed mt-1.5 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Clean Tech Stack Chips */}
                <div>
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

                {/* Simple Footer: View Project Architecture (NO Code option on card) */}
                <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>View Architecture & Details</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            ARCHITECTURE DEEP-DIVE MODAL (Mounted via Portal at Body Level)
           ========================================================================= */}
        {selectedProject && createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f141f] max-w-2xl w-full rounded-2xl border border-cyan-400/50 p-6 space-y-5 relative max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              
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
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-amber-950/80 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>Key Project {selectedProject.id === 'furniture-booking' ? '(imp!)' : ''}</span>
                    </span>
                  )}
                  {selectedProject.isGroupProject && (
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-purple-950/80 text-purple-300 border border-purple-500/40 flex items-center gap-1">
                      <Users className="w-3 h-3 text-purple-400" />
                      <span>Group Project</span>
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

              {/* Modal Preview Image */}
              <div className="rounded-xl overflow-hidden border border-white/10 h-52 sm:h-60 w-full bg-[#0a0c10]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
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

              {/* =========================================================================
                  BACKEND SKILLS & SYSTEMS ARCHITECTURE (HIGHLIGHTED DEEP DIVE)
                 ========================================================================= */}
              {selectedProject.backendDetails && selectedProject.backendDetails.length > 0 && (
                <div className="space-y-2 rounded-xl bg-[#0b1019] border border-cyan-500/40 p-4 shadow-inner">
                  <div className="flex items-center justify-between pb-2 border-b border-cyan-500/20">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        Backend Engineering & Systems Architecture
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      Golang High-Concurrency
                    </span>
                  </div>
                  
                  <div className="space-y-2 pt-1">
                    {selectedProject.backendDetails.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-cyan-100 font-mono leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 animate-pulse" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Collaborative Group Project Details (If applicable) */}
              {selectedProject.isGroupProject && (
                <div className="rounded-xl bg-purple-950/25 border border-purple-500/40 p-3.5 space-y-1.5">
                  <div className="flex items-center gap-2 text-purple-300 font-bold text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>Collaborative Team Architecture</span>
                  </div>
                  <p className="text-xs text-purple-200/90 leading-relaxed font-mono">
                    {selectedProject.groupDetails || "Engineered as a collaborative group initiative. Implemented team Git branching strategies, pull request peer reviews on GitHub, and coordinated full-stack client/server API contracts."}
                  </p>
                </div>
              )}

              {/* Architecture Blueprint Summary */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Architecture Synopsis</span>
                </h4>
                <p className="text-xs text-cyan-100 font-mono leading-relaxed bg-[#0b1019] p-3 rounded-lg border border-cyan-500/30">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Full Tech Stack List with Icons */}
              <div>
                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>Implemented Technologies & Libraries</span>
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
          </div>,
          document.body
        )}

      </div>
    </section>
  );
}
