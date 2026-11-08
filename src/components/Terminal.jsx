import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import confetti from 'canvas-confetti';
import { Terminal as TerminalIcon, X, Minus, Square, Send, CornerDownLeft } from 'lucide-react';

export default function Terminal({ isOpen, onClose, onThemeChange }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Initializing Abijith CLI Kernel v4.2.0...' },
    { type: 'system', text: 'Type "help" to view available commands. Type "sudo hire" for direct recruiter access.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    soundFX.playClick();
    const newHistory = [...history, { type: 'user', text: `abijith@cloud:~$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  • about         : Read background & professional bio
  • skills        : List technical skills & proficiencies
  • projects      : View top featured software projects
  • architecture  : Scroll to interactive system lab
  • contact       : Display email, LinkedIn & GitHub coordinates
  • sudo hire     : Priority recruiter action & celebration
  • theme         : Cycle visual theme (cyan / emerald / violet)
  • clear         : Clear terminal output screen
  • exit          : Close the terminal modal`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `${portfolioData.personal.name} — ${portfolioData.personal.title}
${portfolioData.personal.tagline}
Location: ${portfolioData.personal.location}
Status: ${portfolioData.personal.availability}`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Core Tech Stack:
- Backend: Go, Node.js, Python, PostgreSQL, Redis, Kafka, gRPC
- Frontend & 3D: React, TypeScript, Three.js, WebGL, Next.js
- Cloud & DevOps: Docker, Kubernetes, AWS, Terraform, CI/CD`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: portfolioData.projects
            .map(p => `• [${p.category}] ${p.title} — ${p.stats.latency || p.stats.opsPerSec || p.stats.fps}`)
            .join('\n')
        });
        break;

      case 'architecture':
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
        newHistory.push({ type: 'output', text: 'Navigating to Interactive Architecture Lab...' });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${portfolioData.personal.email}
GitHub: ${portfolioData.personal.github}
LinkedIn: ${portfolioData.personal.linkedin}`
        });
        break;

      case 'sudo hire':
        soundFX.playSuccess();
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        newHistory.push({
          type: 'success',
          text: `🎉 Access Granted! Abijith is ready for your team.
Direct Email: ${portfolioData.personal.email}
Let's build something exceptional together!`
        });
        break;

      case 'theme':
        if (onThemeChange) {
          onThemeChange();
          newHistory.push({ type: 'output', text: 'Visual theme cycled successfully.' });
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-xl px-4 sm:px-0">
      <div className="glass-panel border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl">
        {/* Terminal Header */}
        <div className="bg-secondary/70 px-4 py-3 border-b border-border flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs font-bold text-gray-200">abijith@cloud-terminal:~</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-muted-foreground hover:text-white p-1 rounded transition-colors cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-red-400 p-1 rounded transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Content Body */}
        {!isMinimized && (
          <div className="p-4 bg-background/90 font-mono text-xs max-h-80 overflow-y-auto">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={`mb-2 leading-relaxed whitespace-pre-wrap ${
                  item.type === 'user'
                    ? 'text-cyan-400 font-bold'
                    : item.type === 'system'
                    ? 'text-muted-foreground'
                    : item.type === 'success'
                    ? 'text-emerald-400 font-bold'
                    : item.type === 'error'
                    ? 'text-rose-400'
                    : 'text-gray-300'
                }`}
              >
                {item.text}
              </div>
            ))}
            <div ref={bottomRef} />

            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-3 pt-2 border-t border-border/40">
              <span className="text-cyan-400 font-bold">abijith@cloud:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type help, skills, sudo hire..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0"
              />
              <button type="submit" className="text-cyan-400 hover:text-white transition-colors cursor-pointer">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
