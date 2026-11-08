import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const copyEmail = () => {
    soundFX.playSuccess();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFX.playCyberPulse();
    setStatus('sending');

    // Simulate sending message
    setTimeout(() => {
      setStatus('success');
      soundFX.playSuccess();
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Outreach & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Connect</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Initiate <span className="text-gradient-cyan">Contact</span>
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              Have an ambitious distributed systems project, engineering leadership vacancy, or need a high-impact full-stack consultant? Drop a message or copy my email directly.
            </p>

            {/* Direct Copy Email Box */}
            <div className="glass-panel p-4 rounded-2xl border border-border flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 truncate">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <p className="text-[11px] font-mono text-muted-foreground">DIRECT EMAIL</p>
                  <p className="font-mono text-sm text-white font-bold truncate">{personal.email}</p>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="px-3 py-2 rounded-xl bg-secondary hover:bg-cyan-500/20 text-xs font-mono text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 border border-border hover:border-cyan-400"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="glass-card p-4 rounded-2xl border border-border hover:border-cyan-500/50 flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <GithubIcon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono text-muted-foreground group-hover:text-white">GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="glass-card p-4 rounded-2xl border border-border hover:border-cyan-500/50 flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <LinkedinIcon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono text-muted-foreground group-hover:text-white">LinkedIn</span>
              </a>

              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playClick()}
                className="glass-card p-4 rounded-2xl border border-border hover:border-cyan-500/50 flex flex-col items-center justify-center gap-2 group transition-all"
              >
                <TwitterIcon className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono text-muted-foreground group-hover:text-white">Twitter / X</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-border relative">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Dispatch</span>
              </h3>
              <p className="text-xs text-muted-foreground font-mono mb-6">
                All communications encrypted & delivered directly to personal endpoint.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/70 border border-border text-white text-sm focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/70 border border-border text-white text-sm focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">Project Scope / Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your architecture goals, project requirements, or team opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/70 border border-border text-white text-sm focus:outline-none focus:border-cyan-400 font-mono transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary py-3.5 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span className="font-mono text-xs">Dispatching Packet...</span>
                  ) : status === 'success' ? (
                    <span className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> Message Delivered Successfully!
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span className="font-mono text-xs font-bold">Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
