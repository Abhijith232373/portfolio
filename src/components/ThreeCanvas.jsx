import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { soundFX } from '../utils/audioFX';
import { Sparkles, Eye, RefreshCw } from 'lucide-react';

export default function ThreeCanvas({ currentTheme = 'cyan' }) {
  const mountRef = useRef(null);
  const [viewMode, setViewMode] = useState('core'); // 'core' | 'wireframe' | 'particles'
  const sceneElementsRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Theme color mapping
    const themeColors = {
      cyan: { primary: 0x00f0ff, secondary: 0x7000ff, particles: 0x00b4d8 },
      emerald: { primary: 0x00ff88, secondary: 0x006633, particles: 0x38bdf8 },
      violet: { primary: 0xbd00ff, secondary: 0x4361ee, particles: 0xf72585 }
    };
    const activeColor = themeColors[currentTheme] || themeColors.cyan;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 1. Central Holographic Core (Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: activeColor.primary,
      wireframe: viewMode === 'wireframe',
      roughness: 0.15,
      metalness: 0.85,
      emissive: activeColor.primary,
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: viewMode === 'particles' ? 0.05 : 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // 2. Outer Wireframe Cage (Dodecahedron)
    const cageGeo = new THREE.DodecahedronGeometry(2.3, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: activeColor.secondary,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    scene.add(cageMesh);

    // 3. Orbital Torus Ring
    const ringGeo = new THREE.TorusGeometry(2.9, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: activeColor.primary,
      transparent: true,
      opacity: 0.6
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    scene.add(ringMesh);

    // 4. Orbiting Data Nodes (Spheres)
    const nodeCount = 5;
    const nodeGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.9;
      node.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      nodeGroup.add(node);
      nodes.push(node);
    }
    nodeGroup.rotation.x = Math.PI / 3;
    scene.add(nodeGroup);

    // 5. Surrounding Deep Particle Starfield
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(activeColor.primary);
    const c2 = new THREE.Color(activeColor.secondary);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      const mixed = Math.random() > 0.5 ? c1 : c2;
      colors[i] = mixed.r;
      colors[i + 1] = mixed.g;
      colors[i + 2] = mixed.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(activeColor.primary, 2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(activeColor.secondary, 1.5);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // Mouse Parallax Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 1.5;
      targetY = (y / rect.height) * 1.5;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Click Shockwave
    const handleCanvasClick = () => {
      soundFX.playCyberPulse();
      coreMesh.scale.set(1.25, 1.25, 1.25);
      coreMat.emissiveIntensity = 0.9;
    };
    container.addEventListener('click', handleCanvasClick);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse tracking with inertia
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate objects
      coreMesh.rotation.x = elapsedTime * 0.2 + mouseY;
      coreMesh.rotation.y = elapsedTime * 0.3 + mouseX;

      cageMesh.rotation.x = -elapsedTime * 0.15 + mouseY * 0.5;
      cageMesh.rotation.y = -elapsedTime * 0.25 + mouseX * 0.5;

      ringMesh.rotation.z = elapsedTime * 0.1;
      nodeGroup.rotation.z = elapsedTime * 0.15;

      particleSystem.rotation.y = elapsedTime * 0.03;
      particleSystem.rotation.x = elapsedTime * 0.02;

      // Rebound scale smoothly
      coreMesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08);
      coreMat.emissiveIntensity = THREE.MathUtils.lerp(coreMat.emissiveIntensity, 0.25, 0.05);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    sceneElementsRef.current = {
      coreMat,
      cageMat,
      activeColor
    };

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('click', handleCanvasClick);
      cancelAnimationFrame(animationId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [currentTheme, viewMode]);

  const cycleViewMode = () => {
    soundFX.playClick();
    const modes = ['core', 'wireframe', 'particles'];
    const next = modes[(modes.indexOf(viewMode) + 1) % modes.length];
    setViewMode(next);
  };

  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing"
        title="Interactive 3D Core: Click to pulse, move mouse to rotate"
      />

      {/* Floating 3D Controls HUD */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 bg-card/80 backdrop-blur-md px-3 py-2 rounded-full border border-border text-xs text-muted-foreground shadow-2xl">
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-400">
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          WebGL 60FPS
        </span>
        <div className="w-[1px] h-3 bg-border" />
        <button
          onClick={cycleViewMode}
          className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer px-2 py-1 rounded bg-secondary/40 hover:bg-secondary"
          title="Switch 3D Render Mode"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="capitalize font-mono">{viewMode} Mode</span>
        </button>
      </div>

      {/* Subtle Hint */}
      <div className="absolute top-6 left-6 z-10 pointer-events-none opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        Click core to pulse &bull; Move cursor to tilt
      </div>
    </div>
  );
}
