import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import HeroBackgroundCanvas from './HeroBackgroundCanvas';
import { soundFX } from '../utils/audioFX';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero({ currentTheme }) {
  const { personal } = portfolioData;

  const scrollToProjects = (e) => {
    e.preventDefault();
    soundFX.playClick();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#0d0f12] text-[#f2f4f8] overflow-hidden selection:bg-amber-400/20 selection:text-amber-100">
      {/* =========================================================================
          FIRST LANDING PAGE: 100VH LUXURY EDITORIAL HERO
          - Fixed, Impressive 3D Word Model: FULLSTACK DEVELOPER (No mouse wiggle)
          - Eyebrow: DIGITAL EXPERIENCES THAT INSPIRE
          - Clean Bio Subtitle + Action Buttons
          - Subject: Cutout portrait standing on the right
          - Blank Area Graphic Design: Subtle orbital arc + ✦ diamond star
          - Corner: AVAILABLE FOR FREELANCE PROJECTS ↗
         ========================================================================= */}
      <div className="relative w-full h-screen min-h-[700px] overflow-hidden select-none bg-[#0d0f12] flex items-center">
        
        {/* Soft atmospheric ambient light behind subject & typography */}
        <div 
          className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-white/[0.025] rounded-full blur-[150px] pointer-events-none" 
        />
        <div 
          className="absolute top-[45%] right-[15%] w-[600px] h-[600px] bg-amber-500/[0.035] rounded-full blur-[160px] pointer-events-none" 
        />

        {/* Deep background particle canvas */}
        <HeroBackgroundCanvas theme={currentTheme} />

        {/* ---------------- BLANK AREA GRAPHIC DESIGN ---------------- */}
        {/* Large delicate orbital arc framing the right blank area behind the subject */}
        <div className="absolute right-[-10vw] sm:right-[-5vw] lg:right-[2vw] top-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[650px] sm:h-[650px] lg:w-[780px] lg:h-[780px] pointer-events-none z-10">
          {/* Subtle curved arc */}
          <div className="w-full h-full rounded-full border border-white/[0.10] shadow-[0_0_50px_rgba(255,255,255,0.02)]" />
          
          {/* Sparkling 4-point Diamond Star ✦ along the curve */}
          <div className="absolute top-[58%] -left-3 sm:-left-4 -translate-y-1/2 flex items-center justify-center">
            <div className="relative">
              {/* Star Glow */}
              <div className="absolute inset-0 w-8 h-8 -top-2 -left-2 bg-white/20 rounded-full blur-md animate-pulse" />
              {/* 4-point sparkle SVG */}
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-white/85 animate-pulse-glow" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* ---------------- LAYER 1 (z-10): PROPER IMPRESSIVE 3D WORD MODEL (FIXED, NO MOVEMENT) ---------------- */}
        <div className="absolute top-[50%] -translate-y-1/2 left-6 sm:left-12 md:left-16 lg:left-20 xl:left-24 z-10 pointer-events-auto select-none max-w-[75vw] sm:max-w-[70vw] lg:max-w-[66vw]">
          
          {/* Eyebrow Label: DIGITAL EXPERIENCES THAT INSPIRE */}
          <div className="mb-3 sm:mb-4">
            <span className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.28em] text-white/50 uppercase font-sans">
              DIGITAL EXPERIENCES THAT INSPIRE
            </span>
          </div>

          {/* Line 1: FULLSTACK (Crisp Silver-White 3D Typography - Extra Impact) */}
          <h1 className="font-display-condensed text-3d-fullstack text-[clamp(5.2rem,12.8vw,12.2rem)] leading-[0.83] select-none tracking-[-0.015em] m-0 p-0 block">
            FULLSTACK
          </h1>

          {/* Line 2: DEVELOPER (Imposing Warm Champagne-Cream 3D Typography - Extra Size) */}
          <div className="font-display-condensed text-3d-developer text-[clamp(7.2rem,17.8vw,17rem)] leading-[0.83] select-none tracking-[-0.015em] mt-1 sm:mt-2">
            DEVELOPER
          </div>

          {/* Subtitle Bio: Positioned comfortably below with ample margin */}
          <p className="mt-6 sm:mt-8 max-w-md lg:max-w-lg text-xs sm:text-sm md:text-[15px] text-white/65 font-sans leading-relaxed">
            I design and build elegant, high-performing web applications and distributed architectures that merge aesthetics, clean code, and interactive technology.
          </p>

          {/* CTA Action Buttons: VIEW MY WORK ↗ & DOWNLOAD RESUME ↓ */}
          <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-4 sm:gap-6">
            {/* View My Work Button (Brushed Metallic Silver Pill/Rectangle) */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-[#eaeaea] to-[#c7c7c7] text-[#111] font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:from-white hover:to-[#dadada] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Download Resume Link */}
            <a
              href="/resume.pdf"
              download="Abhijith_PR_Resume.pdf"
              onClick={() => soundFX.playSuccess()}
              className="group inline-flex items-center gap-2 px-2 py-3 text-xs sm:text-sm tracking-wider uppercase text-white/75 hover:text-white font-medium transition-colors cursor-pointer"
            >
              <span className="underline-offset-4 group-hover:underline">DOWNLOAD RESUME</span>
              <ArrowDown className="w-4 h-4 text-white/50 group-hover:text-white transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ---------------- LAYER 2 (z-20): SUBJECT PORTRAIT (RIGHT SIDE - 100% FIXED) ---------------- */}
        <div
          className="absolute bottom-0 right-0 sm:right-[2%] md:right-[5%] lg:right-[8%] xl:right-[10%] z-20 pointer-events-none flex items-end justify-center"
        >
          <img
            src="/assets/bgme_cutout.png"
            onError={(e) => {
              e.currentTarget.src = '/assets/bgme.png';
            }}
            alt="Abhijith PR - Fullstack Developer"
            style={{
              maskImage: 'linear-gradient(to top, transparent 0%, black 20px, black 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20px, black 100%)'
            }}
            className="h-[84vh] sm:h-[88vh] md:h-[92vh] lg:h-[95vh] max-h-[1050px] w-auto max-w-[85vw] md:max-w-[1100px] object-contain object-bottom select-none filter contrast-[1.04]"
          />
        </div>

        {/* ---------------- BOTTOM CORNER (LEFT): FULL NAME ---------------- */}
        <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-12 md:left-16 lg:left-20 xl:left-24 z-40 pointer-events-auto select-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/80 uppercase font-medium">
              ABHIJITH PR
            </span>
          </div>
        </div>

        {/* ---------------- BOTTOM CORNER (RIGHT): AVAILABLE FOR FREELANCE / PROJECTS ---------------- */}
        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 md:right-14 z-40 pointer-events-auto select-none">
          <div className="flex flex-col items-end text-right">
            {/* AVAILABLE FOR: static text with green indicator dot */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-white/50 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR</span>
            </div>

            {/* FREELANCE: static text, NO color change, NO size change on hover */}
            <div className="text-xl sm:text-2xl md:text-3xl font-display-condensed tracking-wider text-white leading-none">
              FREELANCE
            </div>

            {/* PROJECTS ↗: The only element that is an interactive link, slightly improves size on hover */}
            <a
              href="#projects"
              onClick={() => soundFX.playClick()}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-white/70 hover:text-white transition-all duration-200 mt-1 cursor-pointer hover:scale-110 active:scale-95 origin-right"
            >
              <span>PROJECTS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
