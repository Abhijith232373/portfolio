import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { soundFX } from '../utils/audioFX';
import {
  MapPin,
  Layers,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Download,
  Sparkles,
  Building2,
  Award
} from 'lucide-react';

// =========================================================================
// VERIFIED PROFILE CONFIGURATION
// =========================================================================
export const ABOUT_CONFIG = {
  CITY: "Kottayam",
  INTERNSHIP_LOCATION: "Kochi, Kerala",
  INTERNSHIP_ROLE: "Full-Stack Development Intern",
  COMPANY: "Bridgeon Solutions",
  INTERNSHIP_DATES: "Jun 25, 2025 – Sep 4, 2026",
  EDUCATION_BATCH: "2025 Batch",
  EDUCATION_DEGREE: "Diploma in Computer Engineering",
  EDUCATION_COLLEGE: "Government Polytechnic College Pala",
  EDUCATION_GPA: "7.28 / 10",
  RESUME_PDF_URL: "/Abhijith_PR_Golang_Developer_Resume.pdf",
  PHOTO_URL: "/images/about-abhijith.webp"
};

const quickFacts = [
  {
    id: "location",
    label: "HOME LOCATION",
    value: `${ABOUT_CONFIG.CITY}, Kerala, India`,
    icon: MapPin,
    accent: "text-amber-400"
  },
  {
    id: "internship-loc",
    label: "INTERNSHIP BASE",
    value: `${ABOUT_CONFIG.COMPANY} · Kochi`,
    icon: Building2,
    accent: "text-cyan-400"
  },
  {
    id: "focus",
    label: "CORE PROFICIENCIES",
    value: "Go Microservices (Fiber/Gin) · gRPC · Kafka · React",
    icon: Layers,
    accent: "text-purple-400"
  },
  {
    id: "status",
    label: "AVAILABILITY",
    value: "Open to work · Immediate joiner · Freelance",
    icon: CheckCircle2,
    accent: "text-emerald-400",
    hasPulse: true
  }
];

// =========================================================================
// 12 RADIANT BURST SPARKS CONFIGURATION (For Shuriken Impact Blast)
// =========================================================================
const blastSparks = [
  { x: -38, y: -48, color: "bg-amber-300" },
  { x: -52, y: -18, color: "bg-orange-400" },
  { x: -46, y: 26, color: "bg-cyan-300" },
  { x: -32, y: 56, color: "bg-amber-400" },
  { x: 18, y: -56, color: "bg-yellow-200" },
  { x: 38, y: -36, color: "bg-cyan-400" },
  { x: 48, y: 16, color: "bg-amber-300" },
  { x: 26, y: 46, color: "bg-orange-400" },
  { x: -12, y: -66, color: "bg-cyan-200" },
  { x: -56, y: 6, color: "bg-yellow-300" },
  { x: 32, y: -16, color: "bg-amber-200" },
  { x: -16, y: 42, color: "bg-cyan-400" },
];

// =========================================================================
// 3D INTERACTIVE CIRCLE PORTRAIT WITH DYNAMIC PARALLAX & SPRING PHYSICS
// =========================================================================
function Interactive3DCirclePortrait({ isBlasting }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 160 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3D Tilt angles (realistic, smooth physical motion matching skills cards)
  const rotateX = useTransform(springY, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-14deg", "14deg"]);

  // Dynamic holographic light sheen tracking cursor across the glass surface
  const glareBackground = useTransform(
    [springX, springY],
    ([x, y]) => {
      const posX = ((x + 0.5) * 100).toFixed(1);
      const posY = ((y + 0.5) * 100).toFixed(1);
      return `radial-gradient(circle at ${posX}% ${posY}%, rgba(255, 255, 255, 0.28) 0%, rgba(245, 158, 11, 0.12) 35%, transparent 70%)`;
    }
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => soundFX.playHover()}
      animate={
        isBlasting
          ? {
              x: [0, 8, -6, 4, -2, 0],
              scale: [1, 0.985, 1.015, 1],
            }
          : { x: 0, scale: 1 }
      }
      transition={{ duration: 0.45, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-52 h-52 xs:w-60 xs:h-60 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-[340px] lg:h-[340px] xl:w-[370px] xl:h-[370px] flex items-center justify-center cursor-pointer [perspective:1000px] select-none group"
    >
      {/* Pure Borderless 3D Circular Portrait (Frame/Rings Removed) */}
      <div
        style={{
          transform: "translateZ(40px)",
          transformStyle: "preserve-3d"
        }}
        className={`relative w-full h-full rounded-full overflow-hidden bg-[#0d1017] shadow-[0_25px_65px_rgba(0,0,0,0.95)] transition-all duration-300 ${
          isBlasting
            ? "shadow-[0_0_50px_rgba(245,158,11,0.7)] ring-2 ring-amber-400/60"
            : "group-hover:shadow-[0_30px_70px_rgba(0,0,0,1)]"
        }`}
      >
        <img
          src={ABOUT_CONFIG.PHOTO_URL}
          alt="Abhijith P.R"
          loading="lazy"
          width={903}
          height={1024}
          className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
        />

        {/* Subtle dark bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10]/85 via-transparent to-transparent pointer-events-none" />

        {/* Dynamic Holographic 3D Specular Glare Sheen */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: glareBackground }}
        />

        {/* Impact glow overlay on left rim when blast strikes */}
        {isBlasting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0] }}
            transition={{ duration: 0.4 }}
            className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-amber-400/40 via-orange-500/20 to-transparent pointer-events-none"
          />
        )}
      </div>
    </motion.div>
  );
}

// =========================================================================
// NINJA GOPHER ANIMATION STAGE: LEFT STANDING, SHURIKEN THROW & PHOTO BLAST
// =========================================================================
function NinjaGopherAttackStage() {
  const [attackPhase, setAttackPhase] = useState('idle'); // 'idle' | 'aim' | 'flying' | 'blast'
  const [blastKey, setBlastKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const runAttackCycle = () => {
    // 1. Aim / Wind up
    setAttackPhase('aim');

    // 2. Launch shuriken towards photo
    setTimeout(() => {
      setAttackPhase('flying');
    }, 650);

    // 3. Impact & Blast at left edge of photo
    setTimeout(() => {
      setAttackPhase('blast');
      setBlastKey((prev) => prev + 1);
      try {
        soundFX.playClick();
      } catch (e) {}
    }, 1200);

    // 4. Settle / Cooldown
    setTimeout(() => {
      setAttackPhase('idle');
    }, 1900);
  };

  useEffect(() => {
    // Initial attack after 1.2s
    const initialTimer = setTimeout(runAttackCycle, 1200);

    // Continuous loop every 3.8 seconds
    const interval = setInterval(runAttackCycle, 3800);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const isBlasting = attackPhase === 'blast';

  return (
    <div className="relative w-full max-w-[520px] flex items-center justify-center sm:justify-end lg:justify-end xl:justify-center">
      
      {/* =========================================================================
          1. NINJA GOPHER (Positioned generously to the left, ample distance)
         ========================================================================= */}
      <div className="absolute left-1 xs:left-3 sm:-left-6 lg:-left-16 xl:-left-24 bottom-3 sm:bottom-10 lg:bottom-12 z-30 select-none">
        <motion.div
          animate={
            attackPhase === 'aim'
              ? { x: -10, rotate: -8, scale: 1.05 }
              : attackPhase === 'flying'
              ? { x: 14, rotate: 6, scale: 1 }
              : attackPhase === 'blast'
              ? { y: [0, -12, 0], scale: [1, 1.15, 1] }
              : { y: [0, -5, 0] }
          }
          transition={
            attackPhase === 'idle'
              ? { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
              : { duration: 0.35, ease: "easeOut" }
          }
          whileHover={{ scale: 1.2, rotate: 6 }}
          onClick={() => {
            soundFX.playClick();
            runAttackCycle();
          }}
          className="cursor-pointer relative flex flex-col items-center group"
          title="Click to throw shuriken!"
        >
          {/* Tooltip Badge */}
          <div className="opacity-0 group-hover:opacity-100 transition-opacity px-2 py-0.5 rounded-md bg-[#131722]/95 border border-cyan-400/50 text-[10px] font-mono text-cyan-200 shadow-xl mb-1 whitespace-nowrap pointer-events-none">
            Ninja Go! 🎯
          </div>

          <img
            src="/assets/ninja_gopher.png"
            alt="Ninja Go Gopher"
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-26 lg:h-26 xl:w-28 xl:h-28 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] pointer-events-none"
          />

          {/* Ground shadow beneath feet */}
          <div className="w-12 sm:w-18 h-2 sm:h-2.5 bg-black/60 blur-sm rounded-full -mt-1.5 sm:-mt-2 pointer-events-none" />
        </motion.div>
      </div>

      {/* =========================================================================
          2. THE 3D CIRCULAR PORTRAIT (Spaced with breathing room from Gopher)
         ========================================================================= */}
      <div className="sm:translate-x-6 lg:translate-x-8 xl:translate-x-10 transition-transform">
        <Interactive3DCirclePortrait isBlasting={isBlasting} />
      </div>

      {/* =========================================================================
          3. FLYING SHURIKEN (Travels wide gap from Gopher hand across to Photo rim)
         ========================================================================= */}
      {attackPhase === 'flying' && (
        <motion.div
          initial={{
            left: isMobile ? "calc(50% - 135px)" : "calc(50% - 240px)",
            top: isMobile ? "54%" : "56%",
            scale: isMobile ? 0.45 : 0.5,
            rotate: 0,
            opacity: 1
          }}
          animate={{
            left: isMobile ? "calc(50% - 70px)" : "calc(50% - 110px)",
            top: "50%",
            scale: isMobile ? 0.85 : 1,
            rotate: 1440,
            opacity: 1
          }}
          transition={{ duration: 0.55, ease: "easeIn" }}
          className="absolute z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative">
            {/* Speed trail streak */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-14 h-1.5 bg-gradient-to-r from-transparent via-cyan-400/80 to-white blur-[1px]" />
            <img
              src="/assets/ninja_shuriken.png"
              alt="Ninja Shuriken"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_14px_rgba(56,189,248,0.95)]"
            />
          </div>
        </motion.div>
      )}

      {/* =========================================================================
          4. THE BLAST EXPLOSION (Triggers on contact at photo rim)
         ========================================================================= */}
      {isBlasting && (
        <div
          style={{
            left: isMobile ? "calc(50% - 70px)" : "calc(50% - 110px)",
            top: "50%"
          }}
          className="absolute z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        >
          {/* Shockwave Ring 1 (Amber) */}
          <motion.div
            key={`shock1-${blastKey}`}
            initial={{ scale: 0.1, opacity: 1 }}
            animate={{ scale: [0.1, 2.6], opacity: [1, 0] }}
            transition={{ duration: 0.48, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.9)]"
          />

          {/* Shockwave Ring 2 (Cyan) */}
          <motion.div
            key={`shock2-${blastKey}`}
            initial={{ scale: 0.1, opacity: 0.85 }}
            animate={{ scale: [0.1, 3.2], opacity: [0.85, 0] }}
            transition={{ duration: 0.55, delay: 0.04, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.9)]"
          />

          {/* Fireball Flash Core */}
          <motion.div
            key={`fire-${blastKey}`}
            initial={{ scale: 0.2, opacity: 1 }}
            animate={{ scale: [0.2, 1.8, 0], opacity: [1, 1, 0] }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-amber-300 via-orange-500 to-cyan-400 blur-sm"
          />

          {/* 12 Radiant Bursting Sparks */}
          {blastSparks.map((spark, idx) => (
            <motion.div
              key={`spark-${blastKey}-${idx}`}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{
                x: spark.x,
                y: spark.y,
                scale: [1, 1.3, 0],
                opacity: [1, 0.85, 0]
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${spark.color} shadow-[0_0_8px_currentColor]`}
            />
          ))}

          {/* Smoke Cloud Puff */}
          <motion.div
            key={`smoke-${blastKey}`}
            initial={{ scale: 0.3, opacity: 0.8, y: 0 }}
            animate={{ scale: [0.3, 1.7], opacity: [0.8, 0], y: -16 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-zinc-600/40 blur-md"
          />
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen lg:h-screen w-full relative flex flex-col justify-center items-center py-12 lg:py-0 overflow-hidden bg-[#0b0d10] text-[#fcfbf9] select-none"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/5 w-[650px] h-[650px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/5 w-[650px] h-[650px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* Main Full-Page Container (Blends seamlessly into the page, NO outer enclosing box) */}
      <div className="w-full max-w-7xl 2xl:max-w-[1520px] 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 flex flex-col justify-center my-auto">
        
        {/* =========================================================================
            1. TOP HEADER & INTRODUCTORY BIO (Full Width, Crisp & Professional)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 lg:mb-8 pb-4 border-b border-white/[0.08]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
           
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                About Me
              </h2>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[11px] sm:text-sm font-mono text-cyan-300/80 block">
                Full-Stack Go Developer • Backend Systems Specialist
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-gray-400 block mt-0.5">
                {ABOUT_CONFIG.CITY}, Kerala • Open for Immediate Joining
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-base text-gray-300 font-sans leading-relaxed max-w-5xl">
            I'm <strong className="text-white font-semibold">Abhijith P.R</strong>, a Golang Backend & Full-Stack Developer based in{" "}
            <span className="text-amber-300 font-semibold">{ABOUT_CONFIG.CITY}, Kerala</span>. During my 1-year intensive engineering internship at{" "}
            <strong className="text-white font-semibold">{ABOUT_CONFIG.COMPANY}</strong> in{" "}
            <span className="text-cyan-300 font-mono font-medium">{ABOUT_CONFIG.INTERNSHIP_LOCATION}</span> ({ABOUT_CONFIG.INTERNSHIP_DATES}), working in an agile sprint team with daily stand-ups and code reviews, I engineered production platforms from ground up to live deployment. I specialize in building secure <span className="text-cyan-300 font-mono">REST & gRPC microservices in Go (Fiber & Gin)</span> following Clean Architecture, with JWT/RBAC security, Redis sub-millisecond caching, Kafka event streaming, and PostgreSQL persistence with sqlc, paired with responsive single-page interfaces in React.
          </p>
        </motion.div>

        {/* =========================================================================
            2. MAIN CONTENT STAGE (Spacious 2-Column: Photo Left, Cards Right)
               Directly integrated into the canvas without square border constraints
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: 3D INTERACTIVE CIRCLE PORTRAIT + NINJA GOPHER + COMPACT BUTTONS
              (Ninja Gopher throws shuriken -> hits photo -> blasts on impact on loop)
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center space-y-5"
          >
            
            {/* Ninja Gopher Throw & Photo Impact Stage */}
            <NinjaGopherAttackStage />

            {/* Download Resume Button (Clean Dark Glass Theme) */}
            <div className="flex items-center justify-center pt-0.5 sm:translate-x-6 lg:translate-x-8 xl:translate-x-10 transition-transform">
              <a
                href={ABOUT_CONFIG.RESUME_PDF_URL}
                download="Abhijith_PR_Golang_Developer_Resume.pdf"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 hover:text-white border border-white/15 hover:border-cyan-400/50 text-[10.5px] sm:text-xs font-mono tracking-wider uppercase shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>

          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN: 4 QUICK FACTS (2x2) + 2 FULL SEPARATION CARDS
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 flex flex-col space-y-4 lg:space-y-5"
          >
            
            {/* Quick Facts Grid (2x2 Grid on Mobile & Desktop) */}
            <dl className="grid grid-cols-2 gap-2 sm:gap-3.5">
              {quickFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.id}
                    onMouseEnter={() => soundFX.playHover()}
                    className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/40 hover:bg-white/[0.06] transition-all duration-300 shadow-sm flex items-start gap-2 sm:gap-3 group"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${fact.accent}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <dt className="text-[8.5px] sm:text-[10px] font-mono tracking-wider text-gray-400 uppercase">
                        {fact.label}
                      </dt>
                      <dd className="text-[10.5px] sm:text-sm font-medium text-gray-100 mt-0.5 flex items-center gap-1 sm:gap-1.5 leading-snug">
                        {fact.hasPulse && (
                          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        )}
                        <span className="truncate">{fact.value}</span>
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>

            {/* DUAL CORE SEPARATION CARDS (Education & Full-Stack Internship) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
              
              {/* --- CARD 1: EDUCATION (2025 BATCH) --- */}
              <div
                onMouseEnter={() => soundFX.playHover()}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#131620]/90 to-[#0e1118]/90 border border-white/[0.08] hover:border-cyan-400/50 hover:bg-[#151926]/90 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                      <span>EDUCATION · {ABOUT_CONFIG.EDUCATION_BATCH}</span>
                    </span>
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-sm sm:text-lg font-bold text-white tracking-tight">
                    {ABOUT_CONFIG.EDUCATION_DEGREE}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 font-sans">
                    {ABOUT_CONFIG.EDUCATION_COLLEGE}
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed mt-2 sm:mt-2.5 font-sans">
                    Rigorous engineering foundations in Data Structures & Algorithms, Relational Database Management Systems (PostgreSQL / SQL), Operating Systems, Computer Networking & Protocols, and Object-Oriented Software Design.
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-300 font-semibold">{ABOUT_CONFIG.EDUCATION_BATCH}</span>
                  <span className="px-2 sm:px-2.5 py-0.5 rounded-lg bg-white/[0.05] border border-white/10 font-bold text-white text-[11px] sm:text-xs">
                    GPA {ABOUT_CONFIG.EDUCATION_GPA}
                  </span>
                </div>
              </div>

              {/* --- CARD 2: FULL-STACK INTERNSHIP & PRODUCTION PLATFORMS --- */}
              <div
                onMouseEnter={() => soundFX.playHover()}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#161a24]/90 to-[#0f121b]/90 border border-white/[0.08] hover:border-amber-400/50 hover:bg-[#1a1f2e]/90 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                    <span className="text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                      <span>FULL-STACK INTERNSHIP</span>
                    </span>
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-sm sm:text-lg font-bold text-white tracking-tight">
                    {ABOUT_CONFIG.INTERNSHIP_ROLE}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-300/90 mt-1 font-sans font-medium flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{ABOUT_CONFIG.COMPANY} • {ABOUT_CONFIG.INTERNSHIP_LOCATION}</span>
                  </p>
                  <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed mt-2 sm:mt-2.5 font-sans">
                    Agile engineering with daily stand-ups, sprint planning, and code reviews. Architected production platforms from scratch: <strong className="text-gray-200">LendoGo</strong> (full-stack loan engine with JWT/RBAC, Kafka events, Redis OTP caching & Razorpay) and <strong className="text-gray-200">MoneyMate</strong> (UPI fintech platform with Go microservices, gRPC, sqlc type-safe queries & Docker CI/CD).
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-300 font-semibold">Agile Sprint Team</span>
                  <span className="px-2 sm:px-2.5 py-0.5 rounded-lg bg-white/[0.05] border border-white/10 font-bold text-gray-200 text-[11px] sm:text-xs">
                    {ABOUT_CONFIG.INTERNSHIP_DATES}
                  </span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
