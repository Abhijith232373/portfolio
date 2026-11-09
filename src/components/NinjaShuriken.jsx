import React from 'react';

export function NinjaShuriken({ className = "w-10 h-10", glowing = true }) {
  return (
    <div className={`relative ${className} flex items-center justify-center select-none pointer-events-none`}>
      {/* Cyan Energy Glow Core */}
      {glowing && (
        <div className="absolute inset-0 bg-cyan-400/40 blur-md rounded-full animate-pulse" />
      )}
      
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(6,182,212,0.6)]"
      >
        <defs>
          <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="35%" stopColor="#475569" />
            <stop offset="70%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="edgeGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="60%" stopColor="#0284c7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 4-Pointed Curved Aerodynamic Shuriken Blades */}
        <path
          d="M 50 4 
             C 48 34 38 42 42 42 
             C 42 38 34 48 4 50 
             C 34 52 42 38 42 58 
             C 38 58 48 66 50 96 
             C 52 66 58 58 58 58 
             C 58 62 66 52 96 50 
             C 66 48 58 62 58 42 
             C 62 42 52 34 50 4 Z"
          fill="url(#bladeGrad)"
          stroke="url(#edgeGrad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Inner Blade Ridges */}
        <line x1="50" y1="12" x2="50" y2="42" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="50" y1="88" x2="50" y2="58" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="12" y1="50" x2="42" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="88" y1="50" x2="58" y2="50" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Central Recessed Ring */}
        <circle cx="50" cy="50" r="14" fill="#090d16" stroke="#38bdf8" strokeWidth="2" />
        
        {/* Glowing Center Core */}
        <circle cx="50" cy="50" r="8" fill="url(#coreGlow)" />
        <circle cx="50" cy="50" r="4" fill="#ffffff" />
      </svg>
    </div>
  );
}
