import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EvasiveGopher from './components/EvasiveGopher';
import Services from './components/Services';
import Skills from './components/Skills';
import ArchitectureLab from './components/ArchitectureLab';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import ScrollToTop from './components/ScrollToTop';
import { soundFX } from './utils/audioFX';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('amber');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Cycle themes
  const cycleTheme = () => {
    const themes = ['amber', 'cyan', 'emerald', 'violet'];
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Toggle terminal
  const toggleTerminal = () => {
    setIsTerminalOpen(prev => !prev);
  };

  // Toggle sound
  const toggleSound = () => {
    const state = soundFX.toggle();
    setSoundEnabled(state);
  };

  // Global Keyboard Shortcuts (~ to toggle terminal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        soundFX.playClick();
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Floating Navbar with Contact CTA */}
      <Navbar
        currentTheme={currentTheme}
        onThemeChange={cycleTheme}
        onToggleTerminal={toggleTerminal}
      />

      {/* Main Content Sections */}
      <main>
        <div id="about" className="relative">
          <EvasiveGopher />
          <Hero
            currentTheme={currentTheme}
            onToggleTerminal={toggleTerminal}
            soundEnabled={soundEnabled}
            onToggleSound={toggleSound}
          />
        </div>

        <Services />

        <Skills />

        <ArchitectureLab />

        <Projects />

        <Experience />

        <Contact />
      </main>

      {/* Footer */}
      <Footer onToggleTerminal={toggleTerminal} />

      {/* Floating Bottom-Right Arrow to Scroll to Top */}
      <ScrollToTop />

      {/* Interactive Floating Developer Terminal */}
      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onThemeChange={cycleTheme}
      />
    </div>
  );
}
