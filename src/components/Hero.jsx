import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import { ArrowUpRight, ArrowDown, Mail } from 'lucide-react';
import { RealGithubIcon, RealLinkedinIcon, RealInstagramIcon } from './SocialIcons';

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

  const scrollToContact = (e) => {
    e.preventDefault();
    soundFX.playClick();
    const el = document.getElementById('contact');
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
      <div className="relative w-full h-[100dvh] min-h-[580px] sm:min-h-[700px] overflow-hidden select-none bg-[#0d0f12] flex items-center">
        
        {/* Soft atmospheric ambient light behind subject & typography */}
        <div 
          className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-white/[0.025] rounded-full blur-[150px] pointer-events-none" 
        />
        <div 
          className="absolute top-[45%] right-[15%] w-[600px] h-[600px] bg-amber-500/[0.035] rounded-full blur-[160px] pointer-events-none" 
        />

        {/* ---------------- BLANK AREA GRAPHIC DESIGN ---------------- */}
        {/* Large delicate orbital arc framing the right blank area behind the subject - hidden on mobile to avoid overflow */}
        <div className="hidden sm:block absolute right-[-10vw] sm:right-[-5vw] lg:right-[2vw] top-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[650px] sm:h-[650px] lg:w-[780px] lg:h-[780px] pointer-events-none z-10">
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

        {/* ---------------- LAYER 1 (z-20): PROPER IMPRESSIVE 3D WORD MODEL (FIXED, NO MOVEMENT) ---------------- */}
        <div className="absolute top-[18%] sm:top-[50%] sm:-translate-y-1/2 left-5 sm:left-12 md:left-16 lg:left-20 xl:left-24 z-20 pointer-events-auto select-none max-w-[92vw] sm:max-w-[70vw] lg:max-w-[66vw]">
          
          {/* Eyebrow Label: DIGITAL EXPERIENCES THAT INSPIRE */}
          <div className="mb-1.5 sm:mb-4">
            <span className="text-[9.5px] sm:text-xs md:text-sm font-medium tracking-[0.22em] sm:tracking-[0.28em] text-white/50 uppercase font-sans">
              DIGITAL EXPERIENCES THAT INSPIRE
            </span>
          </div>

          {/* Line 1: FULLSTACK (Crisp Silver-White 3D Typography - Extra Impact) */}
          <h1 className="font-display-condensed text-3d-fullstack text-[clamp(2.1rem,10.2vw,2.9rem)] sm:text-[clamp(2.3rem,11.5vw,12.2rem)] leading-[0.85] select-none tracking-[-0.015em] m-0 p-0 block">
            FULLSTACK
          </h1>

          {/* Line 2: DEVELOPER (Imposing Warm Champagne-Cream 3D Typography - Extra Size) */}
          <div className="font-display-condensed text-3d-developer text-[clamp(2.6rem,13vw,3.7rem)] sm:text-[clamp(3rem,15.2vw,17rem)] leading-[0.85] select-none tracking-[-0.015em] mt-0.5 sm:mt-2">
            DEVELOPER
          </div>

          {/* Subtitle Bio: Positioned comfortably below with ample margin */}
          <p className="mt-2.5 sm:mt-8 max-w-xs sm:max-w-md lg:max-w-lg text-[11px] sm:text-sm md:text-[15px] text-white/65 font-sans leading-relaxed">
            I design and build elegant, high-performing web applications and distributed architectures that merge aesthetics, clean code, and interactive technology.
          </p>

          {/* Desktop CTA Action Buttons (Inside editorial column on desktop) */}
          <div className="hidden sm:flex items-center gap-6 mt-9">
            {/* View My Work Button (Brushed Metallic Silver Pill/Rectangle) */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#eaeaea] to-[#c7c7c7] text-[#111] font-semibold text-sm tracking-wider uppercase shadow-xl hover:from-white hover:to-[#dadada] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Download Resume Link */}
            <a
              href="/Abhijith_PR_Golang_Developer_Resume.pdf"
              download="Abhijith_PR_Resume.pdf"
              onClick={() => soundFX.playSuccess()}
              className="group inline-flex items-center gap-2 px-2 py-3 text-sm tracking-wider uppercase text-white/75 hover:text-white font-medium transition-colors cursor-pointer"
            >
              <span className="underline-offset-4 group-hover:underline">DOWNLOAD RESUME</span>
              <ArrowDown className="w-4 h-4 text-white/50 group-hover:text-white transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Mobile CTA Action Buttons: Aligned down in the lower section of the page to uncover portrait */}
        <div className="sm:hidden absolute bottom-11 left-4 z-40 flex items-center gap-2 pointer-events-auto">
          {/* View My Work Button */}
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#eaeaea] to-[#c7c7c7] text-[#111] font-semibold text-[10px] tracking-wider uppercase shadow-xl hover:from-white active:scale-95 transition-all cursor-pointer"
          >
            <span>VIEW MY WORK</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          {/* Download Resume Link */}
          <a
            href="/Abhijith_PR_Golang_Developer_Resume.pdf"
            download="Abhijith_PR_Resume.pdf"
            onClick={() => soundFX.playSuccess()}
            className="group inline-flex items-center gap-1 px-2 py-1.5 text-[10px] tracking-wider uppercase text-white/75 hover:text-white font-medium active:scale-95 transition-colors cursor-pointer"
          >
            <span className="underline underline-offset-2">DOWNLOAD RESUME</span>
            <ArrowDown className="w-3 h-3 text-white/50" />
          </a>
        </div>

        {/* ---------------- LAYER 2 (z-10): SUBJECT PORTRAIT (High Visibility on Mobile & Fixed on Desktop) ---------------- */}
        <div
          className="absolute bottom-0 right-[-6%] sm:right-[2%] md:right-[5%] lg:right-[8%] xl:right-[10%] z-10 pointer-events-none flex items-end justify-center opacity-80 sm:opacity-90 md:opacity-100 transition-opacity duration-300"
        >
          <img
            src="/assets/bgme_cutout.png"
            alt="Abhijith PR - Fullstack Developer"
            style={{
              maskImage: 'linear-gradient(to top, transparent 0%, black 25px, black 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 25px, black 100%)'
            }}
            className="h-[58vh] sm:h-[72vh] md:h-[92vh] lg:h-[95vh] max-h-[1050px] w-auto max-w-[85vw] md:max-w-[1100px] object-contain object-bottom select-none filter contrast-[1.05] brightness-[1.02]"
          />
        </div>

        {/* Mobile subtle text backdrop (only shields the left text, keeping photo bright and vivid on the right) */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-r from-[#0d0f12]/90 via-[#0d0f12]/40 to-transparent pointer-events-none z-10" />

        {/* ---------------- BOTTOM CORNER (LEFT): FULL NAME & SOCIAL ICONS ---------------- */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-12 md:left-16 lg:left-20 xl:left-24 z-40 pointer-events-auto select-none">
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Name */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="text-[11px] sm:text-sm font-mono tracking-[0.2em] sm:tracking-[0.25em] text-white/85 uppercase font-medium">
                ABHIJITH PR
              </span>
            </div>

            {/* Subtle Divider */}
            <div className="w-[1px] h-3 sm:h-3.5 bg-white/20" />

            {/* Small Social Media & Mail Icons */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* LinkedIn -> Direct Account */}
              <a
                href={personal.linkedin || "https://www.linkedin.com/in/abhijith-p-r--/"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="p-1 text-white/60 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <RealLinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              {/* GitHub -> Direct Account */}
              <a
                href={personal.github || "https://github.com/Abhijith232373"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="p-1 text-white/60 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <RealGithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              {/* Instagram -> Direct Account */}
              <a
                href={personal.instagram || "https://www.instagram.com/_.abhi_jith_._/"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="p-1 text-white/60 hover:text-pink-400 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                title="Instagram: @_.abhi_jith_._"
                aria-label="Instagram"
              >
                <RealInstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              {/* Mail -> Smoothly Redirects to Contact Section */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="p-1 text-white/60 hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                title="Jump to Contact Area"
                aria-label="Contact Area"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ---------------- BOTTOM CORNER (RIGHT): AVAILABLE FOR FREELANCE / PROJECTS ---------------- */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-10 md:right-14 z-40 pointer-events-auto select-none">
          {/* Desktop editorial block */}
          <div className="hidden sm:flex flex-col items-end text-right">
            {/* AVAILABLE FOR: static text with green indicator dot */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-white/50 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR</span>
            </div>

            {/* FREELANCE: static text */}
            <div className="text-xl sm:text-2xl md:text-3xl font-display-condensed tracking-wider text-white leading-none">
              FREELANCE
            </div>

            {/* PROJECTS ↗: interactive link */}
            <a
              href="#projects"
              onClick={() => soundFX.playClick()}
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono tracking-widest uppercase text-white/70 hover:text-white transition-all duration-200 mt-1 cursor-pointer hover:scale-110 active:scale-95 origin-right"
            >
              <span>PROJECTS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile compact badge: clean, unobtrusive, no collision */}
          <a
            href="#projects"
            onClick={() => soundFX.playClick()}
            className="sm:hidden inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-mono text-[9px] tracking-wider uppercase active:scale-95 transition-transform"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>FREELANCE ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
