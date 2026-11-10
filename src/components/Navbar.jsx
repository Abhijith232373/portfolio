import React, { useState, useEffect } from 'react';
import { soundFX } from '../utils/audioFX';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section in DOM order
      const sections = ['services', 'skills', 'projects', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'WORK', href: '#projects', id: 'projects' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'CONTACT', href: '#contact', id: 'contact' }
  ];

  const handleLinkClick = (e, href) => {
    soundFX.playClick();
    setMobileMenuOpen(false);
  };

  const WHATSAPP_NUMBER = "918590988810"; // country code + number, no + or spaces
  const WHATSAPP_MESSAGE = "Hi Abhijith, I saw your portfolio and would like to talk.";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* ---------------- TOP LUXURY NAVBAR ---------------- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 pointer-events-auto select-none ${
          scrolled
            ? 'bg-[#0d0f12]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 sm:py-4 shadow-2xl shadow-black/60'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="w-full px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
          
          {/* Left: Go Gopher with GO Badge (Exact Match to User Uploaded Image) */}
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="group flex items-center cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Go Gopher Developer"
          >
            <img
              src="/assets/go_gopher_badge.png"
              alt="Go Gopher"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain select-none filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
            />
          </a>

          {/* Right: Desktop Links & Pill Button */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {/* Links */}
            <div className="flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-xs tracking-[0.2em] font-medium transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Pill Button: LET'S TALK (Redirects directly to WhatsApp Chat) */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="group relative inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase shadow-md hover:bg-neutral-200 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              title="Chat directly on WhatsApp"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Mobile Actions: Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- MOBILE DRAWER MENU (Small, Compact Dropdown) ---------------- */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed right-4 top-16 z-50 w-48 p-2.5 rounded-xl bg-[#0e1014]/95 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-2 animate-fade-in select-none">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs tracking-[0.18em] font-medium text-white/75 hover:text-white py-1.5 px-2.5 rounded-md hover:bg-white/[0.08] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-1.5 border-t border-white/10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 w-full py-2 rounded-full bg-white text-black font-semibold text-[11px] tracking-wider uppercase shadow-md active:scale-95 transition-transform"
              title="Chat directly on WhatsApp"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
