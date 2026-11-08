import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import { ArrowUp, Terminal, Heart } from 'lucide-react';

export default function Footer({ onToggleTerminal }) {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/60 py-12 bg-background/80 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm">
            A
          </div>
          <div>
            <p className="text-xs text-white font-bold">{portfolioData.personal.name} &bull; Portfolio 3D</p>
            <p className="text-[11px] font-mono text-muted-foreground">Architected with React, Three.js & Tailwind</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            99.99% Systems Nominal
          </span>
          <div className="w-[1px] h-3 bg-border" />
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
