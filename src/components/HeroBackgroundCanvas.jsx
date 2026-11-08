import React, { useEffect, useRef } from 'react';

export default function HeroBackgroundCanvas({ theme = 'amber' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const onResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', onResize);

    // Color palette based on theme
    const colors = {
      amber: { p1: 'rgba(243, 232, 210, 0.45)', p2: 'rgba(201, 151, 83, 0.35)', line: 'rgba(243, 232, 210, 0.04)' },
      cyan: { p1: 'rgba(0, 240, 255, 0.5)', p2: 'rgba(112, 0, 255, 0.35)', line: 'rgba(0, 240, 255, 0.05)' },
      emerald: { p1: 'rgba(0, 255, 136, 0.5)', p2: 'rgba(0, 102, 51, 0.35)', line: 'rgba(0, 255, 136, 0.05)' },
      violet: { p1: 'rgba(189, 0, 255, 0.5)', p2: 'rgba(67, 97, 238, 0.35)', line: 'rgba(189, 0, 255, 0.05)' }
    };
    const c = colors[theme] || colors.amber;

    // Particles
    const count = 45;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? c.p1 : c.p2
      });
    }

    let mouse = { x: width / 2, y: height / 2 };
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles and faint connection lines
      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < count; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = c.line;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-70"
    />
  );
}
