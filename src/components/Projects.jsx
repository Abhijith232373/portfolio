import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Server,
  Play,
  Pause
} from 'lucide-react';

// =========================================================================
// COMPACT SMALL PROJECT CARD (FOR MOBILE AUTO-MOVING CONTINUOUS MARQUEE)
// =========================================================================
function SmallProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className={`w-[230px] h-[168px] shrink-0 rounded-xl overflow-hidden bg-[#11141c]/95 border flex flex-col justify-between shadow-xl cursor-pointer select-none active:scale-95 transition-all relative ${
        project.isImportant
          ? 'border-amber-400/40 shadow-[0_4px_20px_rgba(245,158,11,0.12)]'
          : 'border-white/[0.08] hover:border-cyan-400/50'
      }`}
    >
      {/* Thumbnail Banner */}
      <div className="relative h-[80px] w-full overflow-hidden bg-[#0c1017] shrink-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11141c] via-black/25 to-black/60 pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-1.5 left-1.5 z-10 flex items-center gap-1">
          {project.projectType === 'Full-Stack' ? (
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-emerald-950/90 backdrop-blur-md text-[8.5px] font-mono font-semibold text-emerald-300 border border-emerald-500/40">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              Full-Stack
            </span>
          ) : (
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded bg-blue-950/90 backdrop-blur-md text-[8.5px] font-mono font-semibold text-blue-300 border border-blue-500/40">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              Frontend
            </span>
          )}

          {project.isImportant && (
            <span className="inline-flex items-center gap-0.5 px-1 py-0.2 rounded bg-amber-950/90 backdrop-blur-md text-[8.5px] font-mono font-bold text-amber-300 border border-amber-400/80">
              <Star className="w-2 h-2 fill-amber-400 text-amber-400" />
              <span>Key</span>
            </span>
          )}
        </div>

        {/* Date */}
        <div className="absolute top-1.5 right-1.5 z-10">
          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-black/85 backdrop-blur-md text-[8px] font-mono text-cyan-200 border border-cyan-400/40">
            <Calendar className="w-2 h-2 text-cyan-400" />
            <span>{project.date}</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-2 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-xs font-bold text-white tracking-tight leading-tight truncate">
            {project.title}
          </h4>
          
          {/* Tech tags */}
          <div className="flex items-center gap-1 mt-1 overflow-hidden">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-0.5 px-1 py-0.2 rounded bg-white/[0.04] text-[8.5px] font-mono text-gray-300 border border-white/[0.08]"
              >
                <TechLogo name={t} className="w-2.5 h-2.5 shrink-0" />
                <span className="truncate max-w-[50px]">{t}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Architecture CTA */}
        <div className="pt-1 border-t border-white/[0.06] flex items-center justify-between text-[9.5px] font-mono text-cyan-300">
          <span className="flex items-center gap-1 font-medium">
            <Activity className="w-2.5 h-2.5" />
            <span>View Architecture</span>
          </span>
          <ArrowUpRight className="w-2.5 h-2.5 text-cyan-400" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileLineMode, setMobileLineMode] = useState('two'); // 'two' | 'one'
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  // Helper to build seamless infinite loop with identical halves for left-to-right animation
  const makeInfiniteLoop = (items) => {
    if (!items || items.length === 0) return [];
    let base = [...items];
    while (base.length < 4) {
      base = base.concat(items);
    }
    const firstHalf = base.map((item, idx) => ({ ...item, uniqueKey: `${item.id}-a-${idx}` }));
    const secondHalf = base.map((item, idx) => ({ ...item, uniqueKey: `${item.id}-b-${idx}` }));
    return [...firstHalf, ...secondHalf];
  };

  const filters = [
    { label: 'All', shortLabel: 'All', count: portfolioData.projects.length },
    { label: 'Key & Featured (imp!)', shortLabel: 'Featured', count: portfolioData.projects.filter(p => p.isImportant).length },
    { label: 'Full-Stack', shortLabel: 'Full-Stack', count: portfolioData.projects.filter(p => p.projectType === 'Full-Stack').length },
    { label: 'Frontend Only', shortLabel: 'Frontend', count: portfolioData.projects.filter(p => p.projectType === 'Frontend Only').length }
  ];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Key & Featured (imp!)') return project.isImportant;
    if (activeFilter === 'Full-Stack') return project.projectType === 'Full-Stack';
    if (activeFilter === 'Frontend Only') return project.projectType === 'Frontend Only';
    return true;
  });

  const midPoint = Math.ceil(filteredProjects.length / 2);
  const row1Projects = filteredProjects.slice(0, midPoint);
  const row2Projects = filteredProjects.slice(midPoint);

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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#0a0c0f] select-none">
      {/* Anchor for #work */}
      <div id="work" className="absolute -top-24 pointer-events-none" />

      {/* Subtle Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* =========================================================================
          LEFT SIDE TELEMETRY ANIMATION (Git Branch & Commit Stream)
         ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden 2xl:flex absolute left-4 3xl:left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-20"
      >
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
      </motion.div>

      {/* =========================================================================
          RIGHT SIDE TELEMETRY ANIMATION (CI/CD Pipeline & Cloud Runtime)
         ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden 2xl:flex absolute right-4 3xl:right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-20"
      >
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
      </motion.div>

      {/* Full Screen Width Utilization (Takes Left & Right Spaces) */}
      <div className="w-full max-w-[1480px] 3xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* =========================================================================
            CLEAN, MINIMAL HEADING + SIMPLE INLINE GITHUB PROFILE
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-row items-center justify-between gap-3 mb-4 pb-2.5 sm:pb-3 border-b border-white/[0.06]"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Works
            </h2>
            <span className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
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
            className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 text-[10.5px] sm:text-xs font-mono text-gray-200 hover:text-white transition-all shadow-md group cursor-pointer shrink-0"
          >
            <GithubIcon className="w-3.5 h-3.5 fill-current text-white group-hover:text-cyan-300" />
            <span className="hidden xs:inline">github.com/Abhijith232373</span>
            <span className="xs:hidden">GitHub</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* =========================================================================
            STANDARD COMPACT FILTER PILL BAR (Single Clean Row on Mobile, Flex on Desktop)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1 mb-4 sm:mb-6 sm:flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => {
                soundFX.playHover();
                setActiveFilter(f.label);
              }}
              className={`shrink-0 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full sm:rounded-lg text-[10.5px] sm:text-xs font-mono transition-all duration-200 cursor-pointer border flex items-center gap-1 sm:gap-1.5 ${
                activeFilter === f.label
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)] font-bold'
                  : 'bg-[#121620]/70 border-white/[0.08] text-gray-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {f.label === 'Key & Featured (imp!)' && <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400 fill-amber-400" />}
              <span className="hidden sm:inline">{f.label}</span>
              <span className="sm:hidden">{f.shortLabel}</span>
              <span className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.2 rounded-full bg-white/10 text-gray-300">
                {f.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* =========================================================================
            MOBILE ONLY: AUTO-MOVING LEFT-TO-RIGHT INFINITE MARQUEE (sm:hidden)
            - 1 Line or 2 Lines Toggle
            - Seamless continuous loop from Left to Right
            - Small, sleek, compact card size
            - Pause on Touch/Hover or manual toggle button
            - Tap to open full Architecture & System Details modal
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sm:hidden w-full space-y-2 mb-2"
        >
          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-2 px-1 mb-1 select-none">
            <span className="text-[10px] font-mono text-cyan-300/80 flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${isMarqueePaused ? 'bg-amber-400' : 'bg-cyan-400 animate-ping'}`} />
              <span>{isMarqueePaused ? 'Marquee Paused' : 'Auto-Moving Left → Right'}</span>
            </span>

            <div className="flex items-center gap-1.5">
              {/* 2 Lines vs 1 Line Toggle */}
              <div className="flex items-center bg-white/[0.05] border border-white/10 rounded-lg p-0.5 text-[9.5px] font-mono">
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setMobileLineMode('two');
                  }}
                  className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                    mobileLineMode === 'two'
                      ? 'bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-400/40 shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  2 Lines
                </button>
                <button
                  onClick={() => {
                    soundFX.playClick();
                    setMobileLineMode('one');
                  }}
                  className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                    mobileLineMode === 'one'
                      ? 'bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-400/40 shadow-sm'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  1 Line
                </button>
              </div>

              {/* Pause / Play Button */}
              <button
                onClick={() => {
                  soundFX.playClick();
                  setIsMarqueePaused(!isMarqueePaused);
                }}
                className={`p-1.5 rounded-lg border text-[10px] font-mono transition-all flex items-center justify-center cursor-pointer ${
                  isMarqueePaused
                    ? 'bg-amber-500/20 border-amber-400/50 text-amber-300'
                    : 'bg-white/[0.05] border-white/10 text-gray-300 hover:text-white'
                }`}
                title={isMarqueePaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              >
                {isMarqueePaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
              </button>
            </div>
          </div>

          {/* Marquee Viewport with Soft Horizontal Edge Vignette */}
          <div className="relative w-full overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a0c0f] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#0a0c0f] to-transparent z-10 pointer-events-none" />

            {mobileLineMode === 'two' && filteredProjects.length >= 4 ? (
              <div className="flex flex-col gap-2.5">
                {/* Row 1: Left to Right */}
                <div className="overflow-hidden w-full flex">
                  <div
                    className={`flex gap-2.5 w-max animate-marquee-right marquee-track ${
                      isMarqueePaused ? 'marquee-paused' : ''
                    }`}
                  >
                    {makeInfiniteLoop(row1Projects).map((p) => (
                      <SmallProjectCard
                        key={p.uniqueKey}
                        project={p}
                        onClick={openModal}
                      />
                    ))}
                  </div>
                </div>

                {/* Row 2: Left to Right (Staggered speed for natural cyber depth) */}
                <div className="overflow-hidden w-full flex">
                  <div
                    className={`flex gap-2.5 w-max animate-marquee-slow-right marquee-track ${
                      isMarqueePaused ? 'marquee-paused' : ''
                    }`}
                  >
                    {makeInfiniteLoop(row2Projects).map((p) => (
                      <SmallProjectCard
                        key={p.uniqueKey}
                        project={p}
                        onClick={openModal}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Single Line: Left to Right */
              <div className="overflow-hidden w-full flex">
                <div
                  className={`flex gap-2.5 w-max animate-marquee-right marquee-track ${
                    isMarqueePaused ? 'marquee-paused' : ''
                  }`}
                >
                  {makeInfiniteLoop(filteredProjects).map((p) => (
                    <SmallProjectCard
                      key={p.uniqueKey}
                      project={p}
                      onClick={openModal}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Tap / Pause Hint */}
            <div className="text-center mt-2 select-none">
              <span className="text-[9.5px] font-mono text-white/40 tracking-wider">
                ✦ Tap any card to inspect architecture • Touch to pause
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            DESKTOP ONLY: 8 STANDARDIZED PROJECT CARDS (4-Col Grid on Desktop)
            - 100% UNCHANGED AND PRESERVED FOR WEBSITE VIEW
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 xl:gap-5 items-stretch"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              onMouseEnter={() => soundFX.playHover()}
              className={`group rounded-lg sm:rounded-2xl overflow-hidden bg-[#11141c] hover:bg-[#141824] border transition-all duration-300 flex flex-col justify-between shadow-lg relative hover:-translate-y-1.5 cursor-pointer ${
                project.isImportant
                  ? 'border-amber-400/40 hover:border-amber-400/80 hover:shadow-[0_12px_35px_rgba(245,158,11,0.2)]'
                  : 'border-white/[0.08] hover:border-cyan-400/60 hover:shadow-[0_12px_35px_rgba(6,182,212,0.18)]'
              }`}
            >
              {/* Card Image Banner */}
              <div className="relative h-24 sm:h-48 w-full overflow-hidden bg-[#0c1017]">
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
                <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 z-10 flex flex-wrap items-center gap-1 sm:gap-1.5 max-w-[70%]">
                  {/* Type Badge */}
                  {project.projectType === 'Full-Stack' ? (
                    <span className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded bg-emerald-950/90 backdrop-blur-md text-[8.5px] sm:text-[10px] font-mono font-semibold text-emerald-300 border border-emerald-500/40 shadow-sm">
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Full-Stack
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded bg-blue-950/90 backdrop-blur-md text-[8.5px] sm:text-[10px] font-mono font-semibold text-blue-300 border border-blue-500/40 shadow-sm">
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-blue-400" />
                      Frontend
                    </span>
                  )}

                  {/* Group Project Badge */}
                  {project.isGroupProject && (
                    <span className="hidden xs:inline-flex items-center gap-0.5 sm:gap-1 px-1 sm:px-2 py-0.2 sm:py-0.5 rounded bg-purple-950/90 backdrop-blur-md text-[8px] sm:text-[10px] font-mono font-medium text-purple-300 border border-purple-500/50 shadow-sm">
                      <Users className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-purple-400" />
                      <span>Group</span>
                    </span>
                  )}

                  {/* Key Project Badge */}
                  {project.isImportant && (
                    <span className="inline-flex items-center gap-0.5 sm:gap-1 px-1 sm:px-2 py-0.2 sm:py-0.5 rounded bg-amber-950/90 backdrop-blur-md text-[8.5px] sm:text-[10px] font-mono font-bold text-amber-300 border border-amber-400/80 shadow-[0_0_10px_rgba(245,158,11,0.25)]">
                      <Star className="w-2 sm:w-2.5 h-2 sm:h-2.5 fill-amber-400 text-amber-400" />
                      <span>{project.id === 'furniture-booking' ? 'imp!' : 'Key'}</span>
                    </span>
                  )}
                </div>

                {/* TOP-RIGHT CORNER: Date */}
                <div className="absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5 z-10">
                  <span className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2.5 py-0.2 sm:py-0.5 rounded-full bg-black/85 backdrop-blur-md text-[8px] sm:text-[11px] font-mono text-cyan-200 border border-cyan-400/40 shadow-md">
                    <Calendar className="w-2 sm:w-3 h-2 sm:h-3 text-cyan-400" />
                    <span>{project.date}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-2 sm:p-4 flex-1 flex flex-col justify-between space-y-1 sm:space-y-3">
                <div>
                  <h3 className="text-xs sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  {/* Clean Description */}
                  <p className="text-[9.5px] sm:text-xs text-gray-300 leading-snug sm:leading-relaxed mt-0.5 sm:mt-1.5 line-clamp-1 sm:line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Clean Tech Stack Chips */}
                <div>
                  <div className="flex flex-wrap gap-0.5 sm:gap-1">
                    {project.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-0.5 sm:gap-1 px-1 sm:px-2 py-0.2 sm:py-0.5 rounded bg-white/[0.04] text-[8px] sm:text-[10px] font-mono text-gray-300 border border-white/[0.08]"
                      >
                        <TechLogo name={t} className="w-2 sm:w-3 h-2 sm:h-3 shrink-0" />
                        <span className="truncate max-w-[55px] sm:max-w-none">{t}</span>
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded bg-white/[0.03] text-[8px] sm:text-[9px] font-mono text-gray-400 border border-white/[0.06]">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Simple Footer */}
                <div className="pt-1 sm:pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[9.5px] sm:text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                  <span className="flex items-center gap-1">
                    <Activity className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                    <span>Architecture</span>
                  </span>
                  <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

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
            {/* =========================================================================
                1. MOBILE ONLY: NON-SCROLLABLE COMPACT POP-UP CARD (sm:hidden)
                - Fits entirely on screen without ANY scrolling (overflow-hidden)
                - Reduced content: title, badges, preview, 2-line summary, chips, action
               ========================================================================= */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="sm:hidden bg-[#0f141f] w-[88vw] max-w-[320px] rounded-2xl border border-cyan-400/50 p-3.5 space-y-2.5 relative shadow-2xl overflow-hidden select-none"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2.5 right-2.5 p-1 rounded-full bg-white/[0.08] hover:bg-white/20 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/10 z-20"
                aria-label="Close project preview"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {/* Badges & Date */}
              <div className="flex items-center gap-1.5 flex-wrap pr-6">
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.date}
                </span>
                <span className={`font-mono text-[9px] px-2 py-0.5 rounded border ${
                  selectedProject.projectType === 'Full-Stack'
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                    : 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                }`}>
                  {selectedProject.projectType}
                </span>
                {selectedProject.isImportant && (
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/40 flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    <span>Key</span>
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight leading-snug line-clamp-1">
                  {selectedProject.title}
                </h3>
                <p className="text-[10px] font-mono text-cyan-400/80 mt-0.5 truncate">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Compact Thumbnail Image */}
              <div className="rounded-xl overflow-hidden border border-white/10 h-24 w-full bg-[#0a0c10]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                />
              </div>

              {/* Short Summary Description (2 lines only) */}
              <p className="text-[11px] text-gray-300 leading-relaxed font-sans line-clamp-2">
                {selectedProject.description}
              </p>

              {/* Key Tech Stack Chips */}
              <div className="flex flex-wrap items-center gap-1 pt-0.5">
                {selectedProject.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[9.5px] font-mono text-gray-200"
                  >
                    <TechLogo name={t} className="w-2.5 h-2.5" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  onClick={closeModal}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-gray-300 text-[10.5px] font-mono border border-white/10 active:scale-95 transition-all cursor-pointer"
                >
                  Close
                </button>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playClick()}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-[10.5px] shadow-md shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3 h-3 fill-current text-white" />
                  <span>Open Code</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* =========================================================================
                2. DESKTOP ONLY: FULL ARCHITECTURE DEEP-DIVE MODAL (hidden sm:block)
                - 100% UNCHANGED AND PRESERVED FOR WEBSITE VIEW
               ========================================================================= */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="hidden sm:block bg-[#0f141f] max-w-2xl w-full rounded-2xl border border-cyan-400/50 p-6 space-y-5 relative max-h-[90vh] overflow-y-auto shadow-2xl select-none"
            >
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 p-1 sm:p-1.5 rounded-full bg-white/[0.08] hover:bg-white/20 text-gray-400 hover:text-white transition-colors cursor-pointer border border-white/10 z-20"
                aria-label="Close project modal"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Modal Header */}
              <div className="pr-6 sm:pr-0">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2 flex-wrap">
                  <span className="font-mono text-[9.5px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    {selectedProject.date}
                  </span>
                  <span className={`font-mono text-[9.5px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-md border ${
                    selectedProject.projectType === 'Full-Stack'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                      : 'bg-blue-950/80 text-blue-300 border-blue-500/40'
                  }`}>
                    {selectedProject.projectType}
                  </span>
                  {selectedProject.isImportant && (
                    <span className="font-mono text-[9.5px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-md bg-amber-950/80 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                      <span>Key {selectedProject.id === 'furniture-booking' ? '(imp!)' : ''}</span>
                    </span>
                  )}
                  {selectedProject.isGroupProject && (
                    <span className="font-mono text-[9.5px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-md bg-purple-950/80 text-purple-300 border border-purple-500/40 flex items-center gap-1">
                      <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
                      <span>Group Project</span>
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {selectedProject.title}
                </h3>
                <p className="text-[10.5px] sm:text-xs font-mono text-cyan-400/80 mt-0.5 sm:mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Modal Preview Image: Compact on Mobile, Grand on Desktop */}
              <div className="rounded-lg sm:rounded-xl overflow-hidden border border-white/10 h-28 xs:h-32 sm:h-60 w-full bg-[#0a0c10]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Metrics Highlights Grid: Compact on Mobile */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                {Object.entries(selectedProject.stats).map(([k, v]) => (
                  <div key={k} className="p-1.5 sm:p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-center">
                    <div className="text-[9px] sm:text-[10px] text-gray-400 font-mono capitalize">{k}</div>
                    <div className="text-[11px] sm:text-sm font-bold text-cyan-300 font-mono mt-0.5 sm:mt-1 truncate">{v}</div>
                  </div>
                ))}
              </div>

              {/* Scope & Description */}
              <div className="space-y-1 sm:space-y-1.5">
                <h4 className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                  <span>Project Overview</span>
                </h4>
                <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed bg-white/[0.02] p-2 sm:p-3 rounded-lg border border-white/[0.06]">
                  {selectedProject.description}
                </p>
              </div>

              {/* =========================================================================
                  BACKEND SKILLS & SYSTEMS ARCHITECTURE (HIGHLIGHTED DEEP DIVE)
                 ========================================================================= */}
              {selectedProject.backendDetails && selectedProject.backendDetails.length > 0 && (
                <div className="space-y-1.5 sm:space-y-2 rounded-lg sm:rounded-xl bg-[#0b1019] border border-cyan-500/40 p-2.5 sm:p-4 shadow-inner">
                  <div className="flex items-center justify-between pb-1.5 sm:pb-2 border-b border-cyan-500/20">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                      <h4 className="text-[11px] sm:text-sm font-bold text-white tracking-wide">
                        Backend & Architecture
                      </h4>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      Golang High-Concurrency
                    </span>
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2 pt-0.5 sm:pt-1">
                    {selectedProject.backendDetails.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs text-cyan-100 font-mono leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0 animate-pulse" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Collaborative Group Project Details (If applicable) */}
              {selectedProject.isGroupProject && (
                <div className="rounded-lg sm:rounded-xl bg-purple-950/25 border border-purple-500/40 p-2.5 sm:p-3.5 space-y-1 sm:space-y-1.5">
                  <div className="flex items-center gap-1.5 text-purple-300 font-bold text-[11px] sm:text-sm">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                    <span>Collaborative Team Architecture</span>
                  </div>
                  <p className="text-[10.5px] sm:text-xs text-purple-200/90 leading-relaxed font-mono">
                    {selectedProject.groupDetails || "Engineered as a collaborative group initiative. Implemented team Git branching strategies, pull request peer reviews on GitHub, and coordinated full-stack client/server API contracts."}
                  </p>
                </div>
              )}

              {/* Architecture Blueprint Summary */}
              <div className="space-y-1 sm:space-y-1.5">
                <h4 className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                  <span>Architecture Synopsis</span>
                </h4>
                <p className="text-[10.5px] sm:text-xs text-cyan-100 font-mono leading-relaxed bg-[#0b1019] p-2 sm:p-3 rounded-lg border border-cyan-500/30">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Full Tech Stack List with Icons */}
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold text-white mb-1.5 sm:mb-2 flex items-center gap-1.5">
                  <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                  <span>Implemented Technologies</span>
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/[0.05] border border-white/10 text-[10px] sm:text-xs font-mono text-gray-200"
                    >
                      <TechLogo name={t} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
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
