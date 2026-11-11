import React, { useEffect, useRef } from 'react';

/**
 * PortfolioBackgroundCanvas
 * 
 * High-performance full-portfolio ambient cosmos, spider-net constellation, and cursor fog animation:
 * - Refined, subtle twinkling star dust & glowing celestial nodes
 * - 4-point diamond sparkle stars (matching editorial aesthetics)
 * - Dynamic spider-net mesh connecting nearby star nodes (softened & balanced)
 * - Delicate, ethereal cursor fog / mist trail tracking pointer motion
 * - Interactive mouse spider filaments with smooth attraction
 * - Theme-reactive colors (amber, cyan, emerald, violet)
 * - 60 FPS requestAnimationFrame with high-DPI canvas & auto mobile adaptation
 */
export default function PortfolioBackgroundCanvas({ theme = 'amber' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // High-DPI support
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setCanvasSize();

    // Theme color presets with softened line & node opacities
    const palettes = {
      amber: {
        lineRgb: '243, 230, 205',
        lineMaxAlpha: 0.14,
        starPrimary: 'rgba(255, 248, 235, ',
        starAccent: 'rgba(245, 185, 90, ',
        glowRgb: '245, 195, 110',
        diamondColor: '#ffd79a'
      },
      cyan: {
        lineRgb: '180, 240, 255',
        lineMaxAlpha: 0.14,
        starPrimary: 'rgba(240, 250, 255, ',
        starAccent: 'rgba(0, 230, 255, ',
        glowRgb: '6, 182, 212',
        diamondColor: '#7ae9ff'
      },
      emerald: {
        lineRgb: '180, 255, 225',
        lineMaxAlpha: 0.14,
        starPrimary: 'rgba(240, 255, 245, ',
        starAccent: 'rgba(16, 185, 129, ',
        glowRgb: '16, 185, 129',
        diamondColor: '#80ffc4'
      },
      violet: {
        lineRgb: '225, 200, 255',
        lineMaxAlpha: 0.14,
        starPrimary: 'rgba(250, 245, 255, ',
        starAccent: 'rgba(168, 85, 247, ',
        glowRgb: '168, 85, 247',
        diamondColor: '#dcb5ff'
      }
    };

    const pTheme = palettes[theme] || palettes.amber;

    // Detect mobile viewport for lightweight particle counts
    // Slightly reduced counts as requested ("reduce little bit, don't too much, just a little bit")
    const isMobile = width < 768;
    const nodeCount = isMobile ? 18 : 44;
    const starCount = isMobile ? 22 : 50;
    const diamondCount = isMobile ? 2 : 5;
    const maxDist = isMobile ? 80 : 118;
    const maxDistSq = maxDist * maxDist;
    const mouseDist = isMobile ? 95 : 140;
    const mouseDistSq = mouseDist * mouseDist;

    // 1. Constellation Nodes (Spider-Net points)
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.22 : 0.28),
        vy: (Math.random() - 0.5) * (isMobile ? 0.22 : 0.28),
        radius: Math.random() * 1.1 + 1.0,
        baseAlpha: Math.random() * 0.25 + 0.45,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.012 + Math.random() * 0.018,
        isAccent: Math.random() > 0.65
      });
    }

    // 2. Micro Twinkling Star Dust (Distant stars)
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.06,
        radius: Math.random() * 0.6 + 0.45,
        baseAlpha: Math.random() * 0.3 + 0.2,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.02 + Math.random() * 0.03
      });
    }

    // 3. 4-Point Diamond Sparkle Stars (✦)
    const diamonds = [];
    for (let i = 0; i < diamondCount; i++) {
      diamonds.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 3 + 5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.025
      });
    }

    // 4. Subtle Cursor Fog / Mist Trail (Balanced Soft Glow)
    const fogParticles = [];
    const maxFogParticles = isMobile ? 0 : 28;
    let lastMousePos = { x: -1000, y: -1000 };

    // Mouse Tracking for Interactive Spider Net & Fog
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
      opacity: 0,
      targetOpacity: 0
    };

    let mouseTimeout;
    const onMouseMove = (e) => {
      const dx = e.clientX - lastMousePos.x;
      const dy = e.clientY - lastMousePos.y;
      const dist = Math.hypot(dx, dy);

      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      mouse.targetOpacity = 1;

      // Spawn delicate cursor fog puffs when moving
      if (!isMobile && dist > 4 && lastMousePos.x > 0) {
        if (fogParticles.length < maxFogParticles) {
          fogParticles.push({
            x: e.clientX + (Math.random() - 0.5) * 5,
            y: e.clientY + (Math.random() - 0.5) * 5,
            vx: (Math.random() - 0.5) * 0.25 - dx * 0.035,
            vy: (Math.random() - 0.5) * 0.25 - dy * 0.035,
            radius: Math.random() * 5 + 11,
            maxRadius: Math.random() * 14 + 28,
            alpha: Math.random() * 0.03 + 0.08, // Balanced soft mist
            decay: 0.003 + Math.random() * 0.002
          });
        }
      }

      lastMousePos.x = e.clientX;
      lastMousePos.y = e.clientY;

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.targetOpacity = 0;
      }, 2000);
    };

    const onMouseLeave = () => {
      mouse.targetOpacity = 0;
      lastMousePos = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });
    window.addEventListener('resize', setCanvasSize, { passive: true });

    // Draw a single 4-point diamond sparkle star
    const drawDiamondStar = (x, y, size, alpha, color) => {
      if (alpha <= 0.02) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = Math.min(1, Math.max(0, alpha));
      ctx.fillStyle = color;

      ctx.beginPath();
      const inner = size * 0.22;
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(0, -inner, inner, 0);
      ctx.quadraticCurveTo(0, inner, 0, size);
      ctx.quadraticCurveTo(0, inner, -inner, 0);
      ctx.quadraticCurveTo(0, -inner, 0, -size);
      ctx.closePath();
      ctx.fill();

      // Gleam core
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      ctx.restore();
    };

    let time = 0;
    let isTabVisible = true;
    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // =========================================================================
    // MAIN RENDER LOOP (60 FPS)
    // =========================================================================
    const render = () => {
      if (!isTabVisible) {
        animationId = requestAnimationFrame(render);
        return;
      }

      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse opacity interpolation
      mouse.opacity += (mouse.targetOpacity - mouse.opacity) * 0.06;

      // -----------------------------------------------------------------------
      // 0. DRAW CURSOR FOG / MIST TRAIL
      // -----------------------------------------------------------------------
      if (fogParticles.length > 0) {
        for (let i = fogParticles.length - 1; i >= 0; i--) {
          const f = fogParticles[i];
          f.x += f.vx;
          f.y += f.vy;
          f.radius += (f.maxRadius - f.radius) * 0.04;
          f.alpha -= f.decay;

          if (f.alpha <= 0.005) {
            fogParticles.splice(i, 1);
            continue;
          }

          const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius);
          grad.addColorStop(0, `rgba(${pTheme.glowRgb}, ${f.alpha})`);
          grad.addColorStop(0.45, `rgba(${pTheme.glowRgb}, ${f.alpha * 0.4})`);
          grad.addColorStop(1, `rgba(${pTheme.glowRgb}, 0)`);

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // -----------------------------------------------------------------------
      // 1. DRAW DISTANT STAR DUST (Twinkling micro stars)
      // -----------------------------------------------------------------------
      for (let i = 0; i < starCount; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = width;
        else if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        else if (s.y > height) s.y = 0;

        const twinkle = Math.sin(time * s.twinkleSpeed + s.phase);
        const alpha = Math.max(0.06, Math.min(0.7, s.baseAlpha + twinkle * 0.28));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      // -----------------------------------------------------------------------
      // 2. DRAW 4-POINT DIAMOND SPARKLE STARS (✦)
      // -----------------------------------------------------------------------
      for (let i = 0; i < diamondCount; i++) {
        const d = diamonds[i];
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < -10) d.x = width + 10;
        else if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10;
        else if (d.y > height + 10) d.y = -10;

        const shimmer = Math.sin(time * d.speed + d.phase);
        const alpha = 0.2 + 0.45 * Math.max(0, shimmer);
        drawDiamondStar(d.x, d.y, d.size, alpha, pTheme.diamondColor);
      }

      // -----------------------------------------------------------------------
      // 3. UPDATE & DRAW CONSTELLATION NODES & SPIDER NET FILAMENTS
      // -----------------------------------------------------------------------
      for (let i = 0; i < nodeCount; i++) {
        const p1 = nodes[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap around viewport edges
        if (p1.x < -20) p1.x = width + 20;
        else if (p1.x > width + 20) p1.x = -20;
        if (p1.y < -20) p1.y = height + 20;
        else if (p1.y > height + 20) p1.y = -20;

        // Pulsing star node core
        const pulse = Math.sin(time * p1.pulseSpeed + p1.phase);
        const currentAlpha = Math.max(0.2, Math.min(0.85, p1.baseAlpha + pulse * 0.2));

        // Outer soft glow halo
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pTheme.glowRgb}, ${currentAlpha * 0.14})`;
        ctx.fill();

        // Inner bright node center
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        const colorPrefix = p1.isAccent ? pTheme.starAccent : pTheme.starPrimary;
        ctx.fillStyle = `${colorPrefix}${currentAlpha})`;
        ctx.fill();

        // Spider Net Lines to other nodes (reduced opacity as requested)
        for (let j = i + 1; j < nodeCount; j++) {
          const p2 = nodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDist) * pTheme.lineMaxAlpha;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${pTheme.lineRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Spider Net Lines to Mouse Cursor
        if (mouse.active && mouse.opacity > 0.02) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mDistSq = mdx * mdx + mdy * mdy;

          if (mDistSq < mouseDistSq) {
            const mDist = Math.sqrt(mDistSq);
            const mAlpha = (1 - mDist / mouseDist) * 0.18 * mouse.opacity;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${pTheme.lineRgb}, ${mAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();

            // Subtle smooth elastic attraction toward cursor
            p1.x -= (mdx / mDist) * 0.1;
            p1.y -= (mdy / mDist) * 0.1;
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', setCanvasSize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      clearTimeout(mouseTimeout);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none w-full h-full z-[1] select-none"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    />
  );
}
