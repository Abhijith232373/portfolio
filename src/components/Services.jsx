import React from 'react';
import { soundFX } from '../utils/audioFX';
import { InteractiveTravelCard } from './ui/3d-card';
import {
  Layers,
  Terminal,
  Heart,
  Box,
  Sparkles,
  Radio
} from 'lucide-react';

const serviceCards = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    subtitle: "React • Next.js • Fluid 3D UI",
    explain: "Responsive single-page applications, enterprise dashboards, and fluid web interfaces built with modern React and optimized for peak Core Web Vitals.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    actionText: "Request Frontend",
    href: "#contact",
    icon: Layers,
    accent: "cyan",
    ropeHeight: "h-8 lg:h-9",
    waveMargin: "lg:mt-3"
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Development",
    subtitle: "Golang • Microservices • Redis",
    explain: "High-throughput Golang cloud services, Clean Architecture, sub-millisecond Redis caching, PostgreSQL persistence, and distributed Kafka event streams.",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    actionText: "Request Backend",
    href: "#contact",
    icon: Terminal,
    accent: "amber",
    ropeHeight: "h-16 lg:h-18",
    waveMargin: "lg:mt-14"
  },
  {
    id: "wedding",
    number: "03",
    title: "Wedding Invitations",
    subtitle: "Luxury Portals • Live RSVP",
    explain: "Bespoke digital marriage portals featuring luxury gold editorial aesthetics, real-time guest RSVP tracking, ceremony countdowns, and venue directions.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    actionText: "Explore Invitations",
    href: "#contact",
    icon: Heart,
    accent: "gold",
    ropeHeight: "h-9 lg:h-10",
    waveMargin: "lg:mt-5"
  },
  {
    id: "portfolio",
    number: "04",
    title: "Portfolio Websites",
    subtitle: "Creative 3D • WebGL Visuals",
    explain: "Award-winning creative developer portfolios with interactive Three.js WebGL scenes, kinetic typography, and custom 3D companion mascots.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    actionText: "Build My Portfolio",
    href: "#contact",
    icon: Box,
    accent: "emerald",
    ropeHeight: "h-18 lg:h-20",
    waveMargin: "lg:mt-16"
  }
];

export default function Services() {
  const handleServiceClick = (title) => {
    soundFX.playClick();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="min-h-screen w-full relative flex flex-col justify-center items-center py-20 lg:py-16 overflow-hidden bg-[#0d0f12] select-none"
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
          <div
            className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 animate-spin"
            style={{ animationDuration: '24s' }}
          />
          <div
            className="absolute inset-2.5 rounded-full border border-cyan-300/20 border-t-cyan-400/70 animate-spin"
            style={{ animationDuration: '14s', animationDirection: 'reverse' }}
          />
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
          <div
            className="absolute inset-0 rounded-full border border-amber-400/30 border-b-transparent animate-spin"
            style={{ animationDuration: '20s' }}
          />
          <div
            className="absolute inset-3 rotate-45 border border-dashed border-amber-300/40 animate-spin"
            style={{ animationDuration: '18s', animationDirection: 'reverse' }}
          />
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 my-auto">
        
        {/* Clean, Bold, Minimal Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Services
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-400 mt-2">
            Interactive 3D Solutions & Architectural Engineering
          </p>
        </div>

        {/* =========================================================================
            WAVE SUSPENSION CABLE & 4 3D MODEL CARDS (Single Layer / Row)
           ========================================================================= */}
        <div className="relative pt-4">
          
          {/* Overhead Horizontal Suspension Cable with Animated Pulse */}
          <div className="hidden lg:block absolute top-4 left-4 right-4 h-[2px]">
            {/* The Cable Line */}
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent relative overflow-hidden">
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

          {/* 4 Cards Grid: Single Row / Layer on Desktop with 3D Tilt & Parallax */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-start">
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className={`flex flex-col items-center ${card.waveMargin} transition-all duration-300 w-full`}
              >
                {/* Suspended Cable from Overhead Rail */}
                <div className={`hidden lg:flex flex-col items-center ${card.ropeHeight} w-full transition-all duration-300 mb-2`}>
                  <div className="w-2.5 h-2.5 rounded-full border border-white/60 bg-[#0d0f12] shadow-[0_0_8px_rgba(255,255,255,0.4)] z-10" />
                  <div className="w-[1.5px] flex-1 bg-gradient-to-b from-white/40 via-white/25 to-white/70" />
                  <div className="w-4 h-1.5 rounded-t-sm bg-gradient-to-b from-white/60 to-white/30 border border-white/40 shadow-sm" />
                </div>

                {/* 3D Tilt Model Card with Parallax Depth Layers */}
                <InteractiveTravelCard
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.explain}
                  number={card.number}
                  icon={card.icon}
                  imageUrl={card.imageUrl}
                  actionText={card.actionText}
                  href={card.href}
                  onActionClick={() => handleServiceClick(card.title)}
                  className="h-[27rem] sm:h-[28rem]"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
