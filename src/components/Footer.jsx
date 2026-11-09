import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import { Terminal } from 'lucide-react';

export default function Footer({ onToggleTerminal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] py-8 bg-[#06080d] relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          {/* =========================================================================
              LEFT: CLEAN NAME & ROLE (No "A" box, no color badges)
             ========================================================================= */}
          <div>
            <p className="text-xs text-white font-bold tracking-tight">
              {portfolioData.personal.name}
            </p>
            <p className="text-[11px] font-mono text-gray-400 mt-0.5">
              Full-Stack Go Developer · Kerala, India
            </p>
          </div>

          {/* =========================================================================
              CENTER: PROFESSIONAL COPYRIGHT & ENGINEERING STATEMENT
             ========================================================================= */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-xs font-mono text-gray-300">
              &copy; {currentYear} <span className="text-white font-semibold">{portfolioData.personal.name}</span>. All rights reserved.
            </p>
            <p className="text-[11px] font-mono text-gray-500 mt-0.5">
              Engineered with clean architecture, React & Tailwind CSS.
            </p>
          </div>

          {/* =========================================================================
              RIGHT: STATUS & CLI TRIGGER (Clean neutral styling, no green color)
             ========================================================================= */}
          <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <span>Available for Hire</span>
            </div>

            {onToggleTerminal && (
              <button
                onClick={() => {
                  soundFX.playClick();
                  onToggleTerminal();
                }}
                className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white border border-white/10 text-[11px] transition-all cursor-pointer"
                title="Open Cyber Terminal (~)"
              >
                <Terminal className="w-3.5 h-3.5 text-gray-400" />
                <span>CLI</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
}
