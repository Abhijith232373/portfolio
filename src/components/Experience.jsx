import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Engineering <span className="text-gradient-cyan">Track Record</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            High-responsibility roles leading technical architecture, scaling distributed platforms, and delivering mission-critical applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border/80 ml-4 md:ml-32 space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Glowing Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(0,240,255,0.8)]" />

              {/* Period Label (Desktop Left) */}
              <div className="md:absolute md:-left-36 md:top-1 font-mono text-xs text-cyan-400 font-bold mb-2 md:mb-0">
                {item.period}
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 md:p-8 rounded-3xl border border-border group-hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="text-sm font-semibold text-gray-300 mb-4 font-mono">
                  {item.company}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5">
                  {item.highlights.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
