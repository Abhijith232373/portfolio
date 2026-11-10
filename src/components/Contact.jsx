import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone,
  ArrowRight, 
  Check, 
  Copy, 
  Sparkles,
  Clock,
  AlertCircle
} from 'lucide-react';
import { RealGithubIcon, RealLinkedinIcon, RealInstagramIcon } from './SocialIcons';
import { GlobeWireframe, FormDots } from '@/components/ui/contact-with-globe';
import { Button } from '@/components/ui/button';

const smoothEase = [0.25, 0.1, 0.25, 1];

export default function Contact() {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', opportunity: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    soundFX.playSuccess();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    soundFX.playSuccess();
    navigator.clipboard.writeText("8590988810");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const WEB3FORMS_ACCESS_KEY =
    import.meta.env.VITE_WEB3FORMS_KEY ||
    import.meta.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    "e5da06c8-5872-4d48-8c5e-59a7164a2ad2";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFX.playCyberPulse();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          opportunity: formData.opportunity || "General Inquiry",
          subject: `Portfolio Message from ${formData.name} [${formData.opportunity || "Inquiry"}]`,
          message: formData.message,
          from_name: formData.name,
          botcheck: ""
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        soundFX.playSuccess();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
        setFormData({ name: '', opportunity: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || "Unable to send message. Please copy direct email instead.");
        setTimeout(() => setStatus('idle'), 6000);
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      setStatus('error');
      setErrorMessage("Network error occurred. Please try again or reach out directly via email.");
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const instagramUrl = "https://www.instagram.com/_.abhi_jith_._/";
  const phoneDisplay = "+91 8590988810";
  const phoneRaw = "8590988810";

  return (
    <section id="contact" className="relative w-full bg-[#080a0f] overflow-hidden py-12 sm:py-24">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* =========================================================================
            1. SECTION HEADER (Open for work & 24-hr guarantee)
           ========================================================================= */}
        <div className="flex flex-col items-center text-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-14">
          
          {/* Badge: Open to work & 24-hr reply guarantee */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-[10px] sm:text-xs font-mono font-medium"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
            <span>OPEN TO WORK · 24-HOUR REPLY GUARANTEE</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: smoothEase }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Initiate Contact
          </motion.h2>

          {/* Description tailored for job seeking, freelance & contracts */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.18, ease: smoothEase }}
            className="text-[11px] sm:text-base text-gray-400 max-w-2xl text-center leading-relaxed px-2 sm:px-0"
          >
            Actively seeking job opportunities! Connect with me for any full-time engineering roles, job invitations, freelance projects, or contract work. I will reply within 24 hours.
          </motion.p>
        </div>

        {/* =========================================================================
            2. FULL PAGE 2-COLUMN STAGE (Integrated directly into the page without box)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: GET IN TOUCH + EMAIL & PHONE + SOCIAL ICONS + HALF GLOBE
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.1, ease: smoothEase }}
            className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-6"
          >
            <div className="flex flex-col gap-1 sm:gap-2">
              <h3 className="text-lg sm:text-3xl font-bold text-white tracking-tight">
                Get in touch
              </h3>
              <p className="text-[11px] sm:text-sm text-gray-400 leading-relaxed max-w-md">
                <span className="sm:hidden">
                  Seeking full-time roles, freelance contracts, or consulting. Reach out anytime — I reply within 24 hours.
                </span>
                <span className="hidden sm:inline">
                  I am actively seeking job opportunities and available for immediate joining, freelance contracts, or project consulting. Reach out for any role or inquiry — I will reply to your mail within 24 hours.
                </span>
              </p>
            </div>

            {/* Direct Contact Entries: Email & Phone (Compact on mobile, grand on desktop) */}
            <div className="flex flex-col gap-2 sm:gap-3">
              
              {/* --- EMAIL --- */}
              <div className="flex items-center gap-1.5 sm:gap-2 group w-fit">
                <a
                  href={`mailto:${personal.email}`}
                  onClick={() => soundFX.playClick()}
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base text-gray-200 hover:text-white transition-colors duration-200"
                >
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#121522] border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 flex items-center justify-center shrink-0 transition-all duration-200 text-gray-300 group-hover:text-cyan-400 shadow-sm">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="font-mono font-medium sm:font-semibold text-[11px] sm:text-base">{personal.email}</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="ml-0.5 sm:ml-1 p-1 sm:p-2 rounded-lg sm:rounded-xl bg-[#121522] hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> : <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                </button>
              </div>

              {/* --- PHONE NUMBER --- */}
              <div className="flex items-center gap-1.5 sm:gap-2 group w-fit">
                <a
                  href={`tel:${phoneRaw}`}
                  onClick={() => soundFX.playClick()}
                  onMouseEnter={() => soundFX.playHover()}
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base text-gray-200 hover:text-white transition-colors duration-200"
                >
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#121522] border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 flex items-center justify-center shrink-0 transition-all duration-200 text-gray-300 group-hover:text-cyan-400 shadow-sm">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="font-mono font-medium sm:font-semibold text-[11px] sm:text-base tracking-wide">{phoneDisplay}</span>
                </a>

                <button
                  onClick={copyPhone}
                  className="ml-0.5 sm:ml-1 p-1 sm:p-2 rounded-lg sm:rounded-xl bg-[#121522] hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> : <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                </button>
              </div>

            </div>

            {/* =========================================================================
                PROMINENT SOCIAL ICONS (Directly under phone number)
                Order: LinkedIn, Instagram, GitHub
               ========================================================================= */}
            <div className="flex items-center gap-2 sm:gap-3 pt-0.5 sm:pt-1">
              
              {/* LinkedIn */}
              <a
                href={personal.linkedin || "https://www.linkedin.com/in/abhijith-p-r--/"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#121522] border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-500/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group cursor-pointer"
                title="LinkedIn: abhijith-p-r--"
              >
                <RealLinkedinIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              </a>

              {/* Instagram */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#121522] border border-white/10 hover:border-pink-500/60 hover:bg-pink-500/10 flex items-center justify-center text-gray-300 hover:text-pink-400 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] group cursor-pointer"
                title="Instagram: @_.abhi_jith_._"
              >
                <RealInstagramIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              </a>

              {/* GitHub */}
              <a
                href={personal.github || "https://github.com/Abhijith232373"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                onMouseEnter={() => soundFX.playHover()}
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#121522] border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-500/10 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group cursor-pointer"
                title="GitHub Profile"
              >
                <RealGithubIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              </a>

            </div>

            {/* =========================================================================
                THE HALF GLOBE ANIMATION (Continuously rotating 360° horizon arc)
               ========================================================================= */}
            <div className="relative overflow-hidden h-48 sm:h-72 lg:h-80 w-full mt-1 sm:mt-2 select-none">
              <GlobeWireframe
                className="w-full aspect-square max-w-full absolute top-0 left-0"
                variant="wireframe"
                strokeColor="rgba(255, 255, 255, 0.75)"
                strokeWidth={0.7}
                graticuleColor="rgba(255, 255, 255, 0.12)"
                graticuleOpacity={0.15}
                sphereOutlineColor="rgba(255, 255, 255, 0.25)"
                sphereOutlineWidth={1.2}
                autoRotate={true}
                autoRotateSpeed={0.5}
                showGraticule={true}
                rotateCities={[]}
                enableInteraction={true}
                initialRotation={[0, -15]}
              />
              
              {/* Seamless bottom fade mask into page background */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/85 to-transparent" />
            </div>

          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN: SEND A MESSAGE FORM CARD
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.15, ease: smoothEase }}
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0e111a]/85 p-4 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-5 shadow-2xl backdrop-blur-sm"
          >
            <div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-0.5 sm:mb-1">
                Send a message
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans">
                Fill out the form below for job offers, freelance inquiries, or contracts — I'll get back to you promptly within 24 hours.
              </p>
            </div>

            {/* Dotted FormDots Separator */}
            <FormDots />

            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
              {/* Row: Full Name & Opportunity / Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#141826]/80 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/15 transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1 sm:gap-1.5">
                  <label className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                    Opportunity / Inquiry
                  </label>
                  <input
                    type="text"
                    placeholder="Job Invitation / Freelance / Contract"
                    value={formData.opportunity}
                    onChange={(e) => setFormData({ ...formData, opportunity: e.target.value })}
                    className="w-full bg-[#141826]/80 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/15 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <label className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141826]/80 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/15 transition-all duration-200"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <label className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-gray-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about the job role, freelance project requirements, or contract opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#141826]/80 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-white placeholder:text-gray-500 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/15 resize-none transition-all duration-200"
                />
              </div>

              {/* Error Message Display */}
              {errorMessage && (
                <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button (Reduced on Mobile, Grand on Desktop) */}
              <div className="pt-1 flex items-center gap-3">
                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-fit h-9 sm:h-11 px-5 sm:px-8 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm bg-white hover:bg-zinc-100 text-zinc-900 group shadow-lg transition-all cursor-pointer active:scale-95 disabled:opacity-60 flex items-center gap-2"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </span>
                  ) : status === 'success' ? (
                    <span className="flex items-center gap-2 text-emerald-600 font-bold">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span>Message Sent to Abhijith!</span>
                    </span>
                  ) : status === 'error' ? (
                    <span className="flex items-center gap-2 text-red-600 font-bold">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <span>Retry Dispatch</span>
                    </span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1 text-zinc-900" />
                    </>
                  )}
                </Button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
