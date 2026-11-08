import React from 'react';
import { soundFX } from '../utils/audioFX';
import { TechLogo } from './TechIcons';
import {
  Server,
  Layout,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Radio,
  Sparkles,
  Layers,
  Network
} from 'lucide-react';

const skillColumns = [
  {
    id: "backend",
    number: "01",
    title: "Backend",
    badge: "Golang Primary",
    icon: Server,
    accent: "amber",
    ropeHeight: "h-8 lg:h-9",
    waveMargin: "lg:mt-2",
    glow: "hover:border-amber-400/80 hover:shadow-[0_16px_40px_rgba(245,158,11,0.22)]",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    topGradient: "from-amber-400 via-orange-500 to-transparent",
    badgeColor: "text-amber-300 bg-amber-950/40 border-amber-500/30",
    dotColor: "bg-amber-400",
    cableAccent: "border-amber-400/70 bg-amber-950",
    skills: [
      { name: "Golang", highlight: true },
      { name: "SQL" },
      { name: "Fiber" },
      { name: "Gin" },
      { name: "PostgreSQL", highlight: true },
      { name: "Redis", highlight: true },
      { name: "Kafka", highlight: true },
      { name: "gRPC" },
      { name: "REST APIs" },
      { name: "WebSocket" },
      { name: "GORM" },
      { name: "sqlc" },
      { name: "JWT / RBAC" },
      { name: "OTP Auth" },
      { name: "Clean Architecture" },
      { name: "Microservices" },
      { name: "Cron jobs" },
      { name: "Razorpay" },
      { name: "Cloudinary" },
      { name: "SendGrid" }
    ]
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend & 3D",
    badge: "React & Three.js",
    icon: Layout,
    accent: "cyan",
    ropeHeight: "h-16 lg:h-18",
    waveMargin: "lg:mt-12",
    glow: "hover:border-cyan-400/80 hover:shadow-[0_16px_40px_rgba(6,182,212,0.22)]",
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    topGradient: "from-cyan-400 via-blue-500 to-transparent",
    badgeColor: "text-cyan-300 bg-cyan-950/40 border-cyan-500/30",
    dotColor: "bg-cyan-400",
    cableAccent: "border-cyan-400/70 bg-cyan-950",
    skills: [
      { name: "React", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "Three.js", highlight: true },
      { name: "React Three Fiber (R3F)", highlight: true },
      { name: "HTML5 & CSS3" },
      { name: "Tailwind CSS" },
      { name: "Drei" },
      { name: "3D Scenes & Lighting" },
      { name: "GLTF / GLB Models" },
      { name: "Interactive 3D" },
      { name: "Framer Motion / GSAP" },
      { name: "Role Dashboards" },
      { name: "Real-Time WebSocket" },
      { name: "Flutter (Mobile)" }
    ]
  },
  {
    id: "devops",
    number: "03",
    title: "DevOps & Cloud",
    badge: "AWS & Docker",
    icon: Cloud,
    accent: "violet",
    ropeHeight: "h-9 lg:h-10",
    waveMargin: "lg:mt-4",
    glow: "hover:border-violet-400/80 hover:shadow-[0_16px_40px_rgba(167,139,250,0.22)]",
    iconBg: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    topGradient: "from-violet-400 via-purple-500 to-transparent",
    badgeColor: "text-violet-300 bg-violet-950/40 border-violet-500/30",
    dotColor: "bg-violet-400",
    cableAccent: "border-violet-400/70 bg-violet-950",
    skills: [
      { name: "AWS (EC2, S3)", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Kubernetes (familiar)" },
      { name: "CI/CD Pipelines" },
      { name: "Render" },
      { name: "Linux Administration" },
      { name: "SSL / Nginx" }
    ]
  },
  {
    id: "version-control",
    number: "04",
    title: "Version Control",
    badge: "Git & GitHub",
    icon: GitBranch,
    accent: "rose",
    ropeHeight: "h-18 lg:h-20",
    waveMargin: "lg:mt-14",
    glow: "hover:border-rose-400/80 hover:shadow-[0_16px_40px_rgba(244,63,94,0.22)]",
    iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    topGradient: "from-rose-400 via-pink-500 to-transparent",
    badgeColor: "text-rose-300 bg-rose-950/40 border-rose-500/30",
    dotColor: "bg-rose-400",
    cableAccent: "border-rose-400/70 bg-rose-950",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "Gitflow & Branching" },
      { name: "PRs & Code Review" },
      { name: "GitHub Actions" },
      { name: "Merge & Rebasing" }
    ]
  },
  {
    id: "api-testing",
    number: "05",
    title: "API Testing & Tools",
    badge: "Postman & Apidog",
    icon: Terminal,
    accent: "emerald",
    ropeHeight: "h-10 lg:h-12",
    waveMargin: "lg:mt-6",
    glow: "hover:border-emerald-400/80 hover:shadow-[0_16px_40px_rgba(16,185,129,0.22)]",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    topGradient: "from-emerald-400 via-teal-500 to-transparent",
    badgeColor: "text-emerald-300 bg-emerald-950/40 border-emerald-500/30",
    dotColor: "bg-emerald-400",
    cableAccent: "border-emerald-400/70 bg-emerald-950",
    skills: [
      { name: "Postman", highlight: true },
      { name: "Apidog", highlight: true },
      { name: "OpenAPI / Swagger" },
      { name: "Endpoint Mocking" },
      { name: "Automated Testing" },
      { name: "Telemetry Profiling" }
    ]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen w-full relative flex flex-col justify-center items-center py-20 lg:py-0 overflow-hidden bg-[#0a0c0f] select-none"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* =========================================================================
          LEFT SIDE TELEMETRY ANIMATION (Cyber Matrix CPU Node)
         ========================================================================= */}
      <div className="hidden 2xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-20 opacity-80">
        {/* Rotating CPU Core */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border border-dashed border-amber-400/30 animate-spin"
            style={{ animationDuration: '24s' }}
          />
          <div
            className="absolute inset-2.5 rounded-full border border-amber-300/20 border-t-amber-400/70 animate-spin"
            style={{ animationDuration: '14s', animationDirection: 'reverse' }}
          />
          <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <Cpu className="w-4 h-4 text-amber-300 animate-pulse" />
          </div>
        </div>

        {/* Vertical Equalizer Frequency Bars */}
        <div className="flex items-center gap-1 h-12">
          {[0.4, 1.1, 0.7, 1.4, 0.5, 1.2, 0.8].map((delay, idx) => (
            <div
              key={idx}
              className="w-1 bg-amber-400/40 rounded-full animate-pulse"
              style={{
                height: `${22 + (idx % 3) * 9}px`,
                animationDelay: `${delay}s`,
                animationDuration: '1.9s'
              }}
            />
          ))}
        </div>

        {/* Telemetry Label */}
        <div className="text-[10px] font-mono tracking-widest text-amber-400/60 uppercase [writing-mode:vertical-lr] rotate-180 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <span>STACK.MATRIX // ACTIVE</span>
        </div>
      </div>

      {/* =========================================================================
          RIGHT SIDE TELEMETRY ANIMATION (Git Mesh & Network Sphere)
         ========================================================================= */}
      <div className="hidden 2xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-20 opacity-80">
        {/* Rotating Network Orbit */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border border-cyan-400/30 border-b-transparent animate-spin"
            style={{ animationDuration: '20s' }}
          />
          <div
            className="absolute inset-3 rotate-45 border border-dashed border-cyan-300/40 animate-spin"
            style={{ animationDuration: '16s', animationDirection: 'reverse' }}
          />
          <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Network className="w-4 h-4 text-cyan-300 animate-pulse" />
          </div>
        </div>

        {/* Vertical Frequency Bars */}
        <div className="flex items-center gap-1 h-12">
          {[0.6, 1.3, 0.5, 1.5, 0.9, 1.1, 0.4].map((delay, idx) => (
            <div
              key={idx}
              className="w-1 bg-cyan-400/40 rounded-full animate-pulse"
              style={{
                height: `${20 + (idx % 4) * 8}px`,
                animationDelay: `${delay}s`,
                animationDuration: '2.1s'
              }}
            />
          ))}
        </div>

        {/* Telemetry Label */}
        <div className="text-[10px] font-mono tracking-widest text-cyan-400/60 uppercase [writing-mode:vertical-lr] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>VERIFIED // 100% READY</span>
        </div>
      </div>

      {/* =========================================================================
          MAIN CENTER CONTAINER (Full Width Utilization)
         ========================================================================= */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 my-auto">
        
        {/* Clean, Bold, Minimal Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Skills
          </h2>
        </div>

        {/* =========================================================================
            CYBER CONDUIT & 5 SUSPENDED SKILL PILLARS (Single Row Wave Model)
           ========================================================================= */}
        <div className="relative pt-6">
          
          {/* Overhead Horizontal High-Tech Data Bus Cable */}
          <div className="hidden lg:block absolute top-6 left-4 right-4 h-[2px]">
            {/* Cable Conduit Line */}
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent relative overflow-hidden">
              {/* Traveling Data Signal Pulse */}
              <div
                className="absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse"
                style={{ animation: 'floatSlow 3.8s ease-in-out infinite' }}
              />
            </div>

            {/* Left and Right Wall Mount Terminal Anchors */}
            <div className="absolute -left-1 -top-1.5 w-3.5 h-3.5 rounded-full border border-amber-400/60 bg-zinc-900 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
            <div className="absolute -right-1 -top-1.5 w-3.5 h-3.5 rounded-full border border-cyan-400/60 bg-zinc-900 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
          </div>

          {/* 5 Suspended Pillars: Single Layer on Desktop with Wave Elevation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-5 items-start">
            {skillColumns.map((col) => {
              const Icon = col.icon;

              return (
                <div
                  key={col.id}
                  className={`flex flex-col items-center ${col.waveMargin} transition-all duration-300`}
                >
                  {/* Suspended Fiber Data Cable */}
                  <div className={`hidden lg:flex flex-col items-center ${col.ropeHeight} w-full transition-all duration-300`}>
                    {/* Top Bus Connection Bead */}
                    <div className={`w-2.5 h-2.5 rounded-full border ${col.cableAccent} shadow-[0_0_8px_rgba(255,255,255,0.4)] z-10`} />

                    {/* Cyber Conduit Line */}
                    <div className="w-[1.5px] flex-1 bg-gradient-to-b from-white/40 via-white/20 to-white/70" />

                    {/* Jack Clip Fastener */}
                    <div className="w-5 h-1.5 rounded-t-sm bg-gradient-to-b from-white/60 to-white/30 border border-white/40 shadow-sm" />
                  </div>

                  {/* The Skill Pillar Card */}
                  <div
                    onMouseEnter={() => soundFX.playHover()}
                    className={`group w-full min-h-[340px] sm:min-h-[360px] rounded-2xl bg-gradient-to-b from-[#13161c] via-[#0f1217] to-[#0a0c10] border border-white/[0.08] ${col.glow} p-5 xl:p-6 flex flex-col justify-between transition-all duration-300 cursor-default hover:-translate-y-2 hover:rotate-[0.35deg] shadow-2xl relative overflow-hidden`}
                  >
                    {/* Top Edge Gradient Accent Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${col.topGradient} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div>
                      {/* Header Row: Icon, Title & Badge */}
                      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-lg ${col.iconBg} border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-mono text-[10px] text-white/40 block leading-none mb-1">
                              {col.number}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                              {col.title}
                            </h3>
                          </div>
                        </div>

                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-md border ${col.badgeColor} shrink-0`}>
                          {col.badge}
                        </span>
                      </div>

                      {/* Simply Listed Skills Chips (Clean, Professional & Compact) */}
                      <div className="space-y-1.5">
                        {col.skills.map((s) => (
                          <div
                            key={s.name}
                            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border transition-all duration-150 ${
                              s.highlight
                                ? 'bg-white/[0.04] border-white/[0.14] hover:border-white/40 hover:bg-white/[0.08]'
                                : 'bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/[0.08]'
                            }`}
                          >
                            <div className="w-4 h-4 flex items-center justify-center shrink-0">
                              <TechLogo name={s.name} className="w-3.5 h-3.5" />
                            </div>

                            <span className="text-xs text-gray-300 group-hover:text-white font-medium truncate">
                              {s.name}
                            </span>

                            {s.highlight && (
                              <span className={`w-1 h-1 rounded-full ${col.dotColor} shrink-0 ml-auto`} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Status Accent Dots */}
                    <div className="pt-4 mt-3 border-t border-white/[0.05] flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${col.dotColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
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
