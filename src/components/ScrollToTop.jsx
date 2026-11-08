import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFX } from '../utils/audioFX';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-panel border border-border shadow-2xl flex items-center justify-center text-white hover:text-amber-300 hover:border-amber-400 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
      title="Back to Top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      {/* Subtle Ping Ring */}
      <span className="absolute inset-0 rounded-full border border-amber-300/30 animate-ping pointer-events-none opacity-40" />
    </button>
  );
}
