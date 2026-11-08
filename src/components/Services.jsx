import React from 'react';
import { soundFX } from '../utils/audioFX';
import {
  Layers,
  Terminal,
  Heart,
  Box,
  Sparkles,
  Cpu,
  Radio,
  Activity
} from 'lucide-react';

const serviceCards = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    explain: "Responsive single-page applications, enterprise dashboards, and fluid web interfaces built with modern React and optimized for peak Core Web Vitals.",
    icon: Layers,
    accent: "cyan",
    ropeHeight: "h-8 lg:h-9",
    waveMargin: "lg:mt-3",
    glow: "hover:border-cyan-400/70 hover:shadow-[0_16px_45px_rgba(6,182,212,0.22)]",
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    topGradient: "from-cyan-400 via-blue-500 to-transparent",
    dotColor: "bg-cyan-400"
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Development",
    explain: "High-throughput Golang cloud services, Clean Architecture, sub-millisecond Redis caching, PostgreSQL persistence, and distributed Kafka event streams.",
    icon: Terminal,
    accent: "amber",
    ropeHeight: "h-16 lg:h-18",
    waveMargin: "lg:mt-14",
    glow: "hover:border-amber-400/70 hover:shadow-[0_16px_45px_rgba(245,158,11,0.22)]",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    topGradient: "from-amber-400 via-orange-500 to-transparent",
    dotColor: "bg-amber-400"
  },
  {
    id: "wedding",
    number: "03",
    title: "Wedding Invitations",
    explain: "Bespoke digital marriage portals featuring luxury gold editorial aesthetics, real-time guest RSVP tracking, ceremony countdowns, and venue directions.",
    icon: Heart,
    accent: "gold",
    ropeHeight: "h-9 lg:h-10",
    waveMargin: "lg:mt-5",
    glow: "hover:border-amber-300/70 hover:shadow-[0_16px_45px_rgba(244,235,208,0.25)]",
    iconBg: "bg-rose-500/10 text-rose-300 border-rose-400/30",
    topGradient: "from-amber-200 via-rose-400 to-transparent",
    dotColor: "bg-amber-300"
  },
  {
    id: "portfolio",
    number: "04",
    title: "Portfolio Websites",
    explain: "Award-winning creative developer portfolios with interactive Three.js WebGL scenes, kinetic typography, and custom 3D companion mascots.",
    icon: Box,
    accent: "emerald",
    ropeHeight: "h-18 lg:h-20",
    waveMargin: "lg:mt-16",
    glow: "hover:border-emerald-400/70 hover:shadow-[0_16px_45px_rgba(16,185,129,0.22)]",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    topGradient: "from-emerald-400 via-teal-400 to-transparent",
    dotColor: "bg-emerald-400"
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen w-full relative flex flex-col justify-center items-center py-20 lg:py-0 overflow-hidden bg-[#0d0f12] select-none"
    >
      {/* =========================================================================
          BACKGROUND AMBIENCE
         ========================================================================= */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

      {/* =========================================================================
          LEFT SIDE ANIMATION (Cyber Radar & Orbital Tech Ring)
         ========================================================================= */}
      <div className="hidden 2xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-20 opacity-80">
        {/* Orbital Gyroscope */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer dashed spinning ring */}
          <div
            className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 animate-spin"
            style={{ animationDuration: '24s' }}
          />
          {/* Middle counter-rotating ring */}
          <div
            className="absolute inset-2.5 rounded-full border border-cyan-300/20 border-t-cyan-400/70 animate-spin"
            style={{ animationDuration: '14s', animationDirection: 'reverse' }}
          />
          {/* Inner pulsating core */}
          <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Radio className="w-4 h-4 text-cyan-300 animate-pulse" />
          </div>
        </div>

        {/* Vertical Audio/Data Frequency Waveform */}
        <div className="flex items-center gap-1 h-12">
          {[0.6, 1.2, 0.4, 1.5, 0.8, 1.3, 0.5].map((delay, idx) => (
            <div
              key={idx}
              className="w-1 bg-cyan-400/40 rounded-full animate-pulse"
              style={{
                height: `${24 + (idx % 3) * 10}px`,
                animationDelay: `${delay}s`,
                animationDuration: '1.8s'
              }}
            />
          ))}
        </div>

        {/* Telemetry Label */}
        <div className="text-[10px] font-mono tracking-widest text-cyan-400/60 uppercase [writing-mode:vertical-lr] rotate-180 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>SYS.TELEMETRY // LIVE</span>
        </div>
      </div>

      {/* =========================================================================
          RIGHT SIDE ANIMATION (Geometric Polyhedron & Matrix Stream)
         ========================================================================= */}
      <div className="hidden 2xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-20 opacity-80">
        {/* Rotating 3D Wireframe Polyhedron */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer spinning ring */}
          <div
            className="absolute inset-0 rounded-full border border-amber-400/30 border-b-transparent animate-spin"
            style={{ animationDuration: '20s' }}
          />
          {/* Inner counter-rotating diamond */}
          <div
            className="absolute inset-3 rotate-45 border border-dashed border-amber-300/40 animate-spin"
            style={{ animationDuration: '18s', animationDirection: 'reverse' }}
          />
          {/* Core Sparkle */}
          <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          </div>
        </div>

        {/* Vertical Equalizer Waveform */}
        <div className="flex items-center gap-1 h-12">
          {[0.5, 1.4, 0.9, 1.1, 0.3, 1.6, 0.7].map((delay, idx) => (
            <div
              key={idx}
              className="w-1 bg-amber-400/40 rounded-full animate-pulse"
              style={{
                height: `${20 + (idx % 4) * 8}px`,
                animationDelay: `${delay}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Telemetry Label */}
        <div className="text-[10px] font-mono tracking-widest text-amber-400/60 uppercase [writing-mode:vertical-lr] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <span>V-SYNC // 60 FPS</span>
        </div>
      </div>

      {/* =========================================================================
          MAIN CENTER CONTAINER (Full Page View)
         ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10 my-auto">
        
        {/* Clean, Bold, Minimal Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Services
          </h2>
        </div>

        {/* =========================================================================
            WAVE SUSPENSION CABLE & 4 CARDS (Single Layer / Row)
           ========================================================================= */}
        <div className="relative pt-6">
          
          {/* Overhead Horizontal Suspension Cable with Animated Pulse */}
          <div className="hidden lg:block absolute top-6 left-4 right-4 h-[2px]">
            {/* The Cable Line */}
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent relative overflow-hidden">
              {/* Traveling light pulse along the cable */}
              <div
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"
                style={{
                  animation: 'floatSlow 4s ease-in-out infinite'
                }}
              />
            </div>
            
            {/* Left and Right Wall Mount Anchor Brackets */}
            <div className="absolute -left-1 -top-1.5 w-3.5 h-3.5 rounded-full border border-cyan-400/60 bg-zinc-900 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
            <div className="absolute -right-1 -top-1.5 w-3.5 h-3.5 rounded-full border border-amber-400/60 bg-zinc-900 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
          </div>

          {/* 4 Cards Grid: Single Row / Layer on Desktop with Staggered Wave */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-start">
            {serviceCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className={`flex flex-col items-center ${card.waveMargin} transition-all duration-300`}
                >
                  {/* Suspended Cable from Overhead Rail */}
                  <div className={`hidden lg:flex flex-col items-center ${card.ropeHeight} w-full transition-all duration-300`}>
                    {/* Top Anchor Ring on the horizontal cable */}
                    <div className="w-2.5 h-2.5 rounded-full border border-white/60 bg-[#0d0f12] shadow-[0_0_8px_rgba(255,255,255,0.4)] z-10" />
                    
                    {/* Hanging Metallic Cord */}
                    <div className="w-[1.5px] flex-1 bg-gradient-to-b from-white/40 via-white/25 to-white/70" />
                    
                    {/* Top Fastener Clamp */}
                    <div className="w-4 h-1.5 rounded-t-sm bg-gradient-to-b from-white/60 to-white/30 border border-white/40 shadow-sm" />
                  </div>

                  {/* The Pure Card Component (NO bottom link jump, professional, clean) */}
                  <div
                    onMouseEnter={() => soundFX.playHover()}
                    className={`group w-full min-h-[290px] sm:min-h-[310px] rounded-2xl bg-gradient-to-b from-[#14171e] via-[#101318] to-[#0a0c10] border border-white/[0.08] ${card.glow} p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-default hover:-translate-y-2.5 hover:rotate-[0.4deg] shadow-2xl relative overflow-hidden`}
                  >
                    {/* Top Edge Gradient Accent Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${card.topGradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div>
                      {/* Top Header Row: Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs font-bold tracking-widest text-white/40 group-hover:text-white transition-colors">
                          {card.number}
                        </span>
                        
                        <div className={`w-10 h-10 rounded-xl ${card.iconBg} border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors tracking-tight">
                        {card.title}
                      </h3>

                      {/* Short, Refined Explanation */}
                      <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed group-hover:text-gray-300 transition-colors">
                        {card.explain}
                      </p>
                    </div>

                    {/* Bottom Status Dots Accent (No languages/tools, purely aesthetic) */}
                    <div className="pt-6 border-t border-white/[0.05] flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${card.dotColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
                      <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
