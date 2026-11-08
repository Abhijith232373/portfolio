import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import { 
  Monitor, 
  Shield, 
  Cpu, 
  Server, 
  Zap, 
  Database, 
  Play, 
  Flame, 
  CheckCircle, 
  Activity,
  Terminal as TerminalIcon
} from 'lucide-react';

const iconMap = {
  Monitor,
  Shield,
  Cpu,
  Server,
  Zap,
  Database
};

export default function ArchitectureLab() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [cacheHit, setCacheHit] = useState(true);
  const [metrics, setMetrics] = useState({
    totalRequests: 148200,
    avgLatency: '14.2ms',
    cacheHitRatio: '94.8%',
    systemHealth: '100% Optimal'
  });
  const [logs, setLogs] = useState([
    { id: 1, time: '14:20:01', msg: 'System initialized. 6 microservices healthy on K8s cluster.', status: 'info' },
    { id: 2, time: '14:20:04', msg: 'Cloudflare Edge WAF active (0 blocked malicious threats).', status: 'success' },
    { id: 3, time: '14:20:10', msg: 'Redis cache primed: 120,400 keys in memory.', status: 'info' }
  ]);

  const pipeline = portfolioData.architecturePipeline;

  const triggerRequest = (isSpike = false) => {
    if (isSimulating) return;
    soundFX.playCyberPulse();
    setIsSimulating(true);
    setActiveStep(0);

    const now = new Date().toLocaleTimeString();
    setLogs(prev => [
      { id: Date.now(), time: now, msg: isSpike ? '🔥 High-load spike simulated: 5,000 concurrent req/sec routed through Gateway.' : '⚡ HTTP/3 GET /api/v1/metrics dispatched from Client.', status: 'info' },
      ...prev.slice(0, 5)
    ]);

    // Animate through pipeline
    let step = 0;
    const interval = setInterval(() => {
      step++;
      soundFX.playClick();
      setActiveStep(step);

      if (step >= pipeline.length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveStep(-1);
          setIsSimulating(false);
          soundFX.playSuccess();
          setMetrics(prev => ({
            ...prev,
            totalRequests: prev.totalRequests + (isSpike ? 5000 : 1),
            avgLatency: isSpike ? '18.4ms' : '11.8ms'
          }));
          setLogs(prev => [
            { id: Date.now(), time: new Date().toLocaleTimeString(), msg: isSpike ? '✅ Auto-scaler stabilized. 0 dropped packets.' : '✅ 200 OK — Payload served via Redis cache in 1.2ms.', status: 'success' },
            ...prev.slice(0, 5)
          ]);
        }, 400);
      }
    }, 320);
  };

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive System Architecture Visualizer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Distributed Systems <span className="text-gradient-cyan">Engineered for Scale</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Experience the real-time request lifecycle across the resilient, low-latency microservice topology I architect for production workloads.
          </p>
        </div>

        {/* Control Toolbar */}
        <div className="glass-panel p-4 rounded-2xl mb-8 flex flex-wrap items-center justify-between gap-4 border border-border">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => triggerRequest(false)}
              disabled={isSimulating}
              className="btn-primary flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Play className="w-4 h-4" />
              <span>Send Live Request (GET)</span>
            </button>
            <button
              onClick={() => triggerRequest(true)}
              disabled={isSimulating}
              className="btn-secondary flex items-center gap-2 cursor-pointer disabled:opacity-50 border-amber-500/30 hover:border-amber-500/60"
            >
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Simulate Load Spike (5k req/s)</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground">
            <div>
              <span className="text-gray-400">Total Simulated: </span>
              <span className="text-white font-bold">{metrics.totalRequests.toLocaleString()}</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-gray-400">Avg Latency: </span>
              <span className="text-cyan-400 font-bold">{metrics.avgLatency}</span>
            </div>
            <div className="hidden md:block">
              <span className="text-gray-400">Cache Hit: </span>
              <span className="text-emerald-400 font-bold">{metrics.cacheHitRatio}</span>
            </div>
          </div>
        </div>

        {/* Architecture Pipeline Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          {pipeline.map((node, index) => {
            const Icon = iconMap[node.icon] || Server;
            const isActive = activeStep === index;
            const isPassed = activeStep > index;

            return (
              <div
                key={node.id}
                className={`relative p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-cyan-500/15 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.4)] scale-105 z-20'
                    : isPassed
                    ? 'bg-emerald-500/10 border-emerald-500/50'
                    : 'glass-card border-border hover:border-cyan-500/40'
                }`}
              >
                {/* Node Status Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/50'
                        : isPassed
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-secondary text-cyan-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {node.latency}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{node.label}</h4>
                  <p className="text-xs text-muted-foreground">{node.sub}</p>
                </div>

                {/* Packet Pulse Animation */}
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                )}
              </div>
            );
          })}
        </div>

        {/* Live Architecture Cyber Console Logs */}
        <div className="glass-panel p-5 rounded-2xl border border-border font-mono text-xs">
          <div className="flex items-center justify-between mb-3 border-b border-border/50 pb-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <TerminalIcon className="w-4 h-4" />
              <span>LIVE SYSTEM EVENT BUS</span>
            </div>
            <span className="text-[11px] text-muted-foreground">Status: Active &bull; TLS 1.3 Secured</span>
          </div>
          <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2">
                <span className="text-muted-foreground text-[10px]">[{log.time}]</span>
                <span className={log.status === 'success' ? 'text-emerald-400' : 'text-gray-300'}>
                  {log.msg}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
