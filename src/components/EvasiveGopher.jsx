import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { soundFX } from '../utils/audioFX';

export default function EvasiveGopher() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    if (window.innerWidth < 768) return;

    let animationFrameId;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Soft Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.45);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffaed, 1.7);
    dirLight.position.set(4, 8, 6);
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0x75c8ff, 0.65);
    fillLight.position.set(-4, 3, -3);
    scene.add(fillLight);

    // 3. Evasion & Interactive State (Toy Sized Desk Companion)
    let modelGroup = null;
    let mixer = null;
    const actions = {};

    // Base coordinate system
    // Can roam and perch at bottom, mid-level, or rise to top!
    const FLOOR_Y = -2.35;
    const TOP_PERCH_Y = 1.95;
    const MID_PERCH_Y = 0.2;

    // Start sitting peacefully on floor
    const initialPos = new THREE.Vector3(1.8, FLOOR_Y, 0);
    const targetPos = initialPos.clone();
    const currentPos = initialPos.clone();
    const mouse3D = new THREE.Vector3(999, 999, 0);

    let isRunning = false;
    let isHoveringGopher = false;
    let jumpOffset = 0;
    let jumpVelocity = 0;
    let jumpSpin = 0;

    // Timer for gentle autonomous exploration when nobody interacts
    let timeSinceLastDisturbance = 0;

    const BASE_SCALE = 0.36;
    const currentScale = new THREE.Vector3(BASE_SCALE, BASE_SCALE, BASE_SCALE);
    const clock = new THREE.Clock();

    // 4. Load authentic standing animated Go Gopher (Cache-busted)
    const loader = new GLTFLoader();
    loader.load(
      `/standing-gopher.glb?v=${Date.now()}`,
      (gltf) => {
        modelGroup = gltf.scene;

        modelGroup.scale.copy(currentScale);
        modelGroup.position.copy(currentPos);
        scene.add(modelGroup);

        // Setup Animation Mixer & Actions
        mixer = new THREE.AnimationMixer(modelGroup);
        gltf.animations.forEach((clip) => {
          actions[clip.name] = mixer.clipAction(clip);
        });

        // Start in Standing Idle action (upright on two feet)
        if (actions['Idle']) {
          actions['Idle'].play();
        }
      },
      undefined,
      (err) => {
        console.warn('Failed to load standing-gopher.glb:', err);
      }
    );

    // 5. Raycasting for Direct Touch & Cursor Interaction
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const raycaster = new THREE.Raycaster();
    const mouseNormalized = new THREE.Vector2(999, 999);

    const updateMouseCoords = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      mouseNormalized.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouseNormalized.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseNormalized, camera);
      raycaster.ray.intersectPlane(plane, mouse3D);
    };

    // Calculate dynamic screen boundary limits
    const getBounds = () => {
      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const visibleHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;
      return {
        minX: -visibleWidth / 2 + 1.2,
        maxX: visibleWidth / 2 - 1.2,
        minY: -visibleHeight / 2 + 0.8, // Floor level
        maxY: visibleHeight / 2 - 1.4   // Top level below navbar
      };
    };

    // Trigger Startle Jump & Scramble to a new perch (can be up or down)
    const triggerStartleJump = (pushVector = null) => {
      timeSinceLastDisturbance = 0;
      soundFX.playGopherSqueak();

      // Jump Impulse Physics
      jumpVelocity = 0.16;
      jumpSpin = Math.PI * 2 * (Math.random() > 0.5 ? 1 : -1);

      // Squish & spring stretch effect
      currentScale.set(BASE_SCALE * 1.15, BASE_SCALE * 0.78, BASE_SCALE * 1.15);

      // Transition to Run sprint
      if (!isRunning) {
        isRunning = true;
        actions['Idle']?.fadeOut(0.12);
        actions['Run']?.reset().fadeIn(0.12).play();
      }

      const bounds = getBounds();

      // Calculate new target in both X and Y
      let moveDirX = 0;
      let moveDirY = 0;

      if (pushVector) {
        moveDirX = pushVector.x;
        moveDirY = pushVector.y;
      } else {
        // Random scramble direction
        moveDirX = Math.random() > 0.5 ? 1 : -1;
        // Alternate between moving up and moving down
        moveDirY = currentPos.y < 0 ? 1 : -1;
      }

      // If currently near floor, encourage rising to top!
      // If currently high on top, encourage dropping down or staying high!
      const distance = 2.4 + Math.random() * 1.8;
      let newX = currentPos.x + moveDirX * distance;
      let newY = currentPos.y + moveDirY * (1.8 + Math.random() * 1.5);

      // Select perch height levels: Floor (-2.3), Mid (0.2), or Top (1.9)
      if (Math.abs(moveDirY) > 0.3) {
        if (currentPos.y < -1.0) {
          // Rise up toward top or mid!
          newY = Math.random() > 0.4 ? TOP_PERCH_Y : MID_PERCH_Y;
        } else if (currentPos.y > 1.2) {
          // Drop down to floor or mid!
          newY = Math.random() > 0.4 ? FLOOR_Y : MID_PERCH_Y;
        } else {
          // In mid: can go to top or floor
          newY = Math.random() > 0.5 ? TOP_PERCH_Y : FLOOR_Y;
        }
      }

      // Clamp within screen boundaries
      if (newX > bounds.maxX) newX = bounds.maxX - 1.2;
      if (newX < bounds.minX) newX = bounds.minX + 1.2;
      newY = THREE.MathUtils.clamp(newY, bounds.minY, bounds.maxY);

      targetPos.x = newX;
      targetPos.y = newY;
    };

    // Check if ray hits the gopher or close proximity
    const checkGopherHit = () => {
      if (!modelGroup) return false;
      const dist = currentPos.distanceTo(mouse3D);
      if (dist < 0.48) return true;

      const intersects = raycaster.intersectObjects(modelGroup.children, true);
      return intersects.length > 0;
    };

    // Pointer move listener
    const onPointerMove = (e) => {
      updateMouseCoords(e.clientX, e.clientY);

      const hit = checkGopherHit();
      if (hit !== isHoveringGopher) {
        isHoveringGopher = hit;
        container.style.pointerEvents = hit ? 'auto' : 'none';
        container.style.cursor = hit ? 'pointer' : 'default';
      }
    };

    // Direct Touch / Click Event Handler
    const onPointerDown = (e) => {
      updateMouseCoords(e.clientX, e.clientY);
      const hit = checkGopherHit();

      if (hit) {
        const repulsion = new THREE.Vector3()
          .subVectors(currentPos, mouse3D)
          .normalize();
        triggerStartleJump(repulsion);
        e.stopPropagation();
      }
    };

    // Touch event listener for mobile/tablets
    const onTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        updateMouseCoords(touch.clientX, touch.clientY);
        const hit = checkGopherHit();
        if (hit) {
          triggerStartleJump();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('touchstart', onTouchStart, { passive: false });

    // 6. Window Resize
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    // 7. Render Loop with Authentic 2D Roaming & Perching Physics
    const CRITICAL_BREACH_RADIUS = 0.55;
    const SAFE_REST_DISTANCE = 0.18;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);

      if (mixer) {
        mixer.update(delta);
      }

      if (modelGroup) {
        const distToMouse = currentPos.distanceTo(mouse3D);
        const bounds = getBounds();

        // 1. Proximity breach: Cursor approaches gopher
        if (distToMouse < CRITICAL_BREACH_RADIUS) {
          timeSinceLastDisturbance = 0;

          if (!isRunning) {
            isRunning = true;
            actions['Idle']?.fadeOut(0.12);
            actions['Run']?.reset().fadeIn(0.12).play();
          }

          // Repulsion in both X and Y away from cursor!
          const repulsionForce = new THREE.Vector3()
            .subVectors(currentPos, mouse3D)
            .normalize();

          // If cursor is close, push away in both directions
          const pushDist = 2.4;
          let newTargetX = currentPos.x + (repulsionForce.x >= 0 ? 1 : -1) * (pushDist * 0.9);
          let newTargetY = currentPos.y + (repulsionForce.y >= 0 ? 1 : -1) * (pushDist * 0.7);

          // Bound limits
          targetPos.x = THREE.MathUtils.clamp(newTargetX, bounds.minX, bounds.maxX);
          targetPos.y = THREE.MathUtils.clamp(newTargetY, bounds.minY, bounds.maxY);

        } else if (isRunning && currentPos.distanceTo(targetPos) < SAFE_REST_DISTANCE) {
          // Reached safety: Transition to Idle and HOLD THERE as long as nobody hovers!
          isRunning = false;
          actions['Run']?.fadeOut(0.25);
          actions['Idle']?.reset().fadeIn(0.2).play();

        } else if (!isRunning) {
          // HOLD POSITION: When nobody's cursor is hovering, it holds firmly in Idle!
          timeSinceLastDisturbance += delta;

          // Optional gentle curiosity: After 14s of total inactivity,
          // the gopher can casually climb to another perch (e.g. rising to top or descending to floor)
          if (timeSinceLastDisturbance > 14.0 && distToMouse > 2.0) {
            timeSinceLastDisturbance = 0;
            // Rise to top if at bottom, or descend to floor if on top!
            const newY = currentPos.y < 0 ? TOP_PERCH_Y : FLOOR_Y;
            const newX = THREE.MathUtils.clamp(
              currentPos.x + (Math.random() > 0.5 ? 2.0 : -2.0),
              bounds.minX,
              bounds.maxX
            );

            isRunning = true;
            actions['Idle']?.fadeOut(0.2);
            actions['Run']?.reset().fadeIn(0.2).play();
            targetPos.set(newX, newY, 0);
          }
        }

        // Jump physics (when poked / clicked)
        if (jumpVelocity > 0 || jumpOffset > 0) {
          jumpOffset += jumpVelocity;
          jumpVelocity -= delta * 0.95;
          if (jumpOffset <= 0) {
            jumpOffset = 0;
            jumpVelocity = 0;
          }
        }

        // Jump spin decay
        if (Math.abs(jumpSpin) > 0.05) {
          jumpSpin = THREE.MathUtils.lerp(jumpSpin, 0, delta * 8);
        }

        // Scale restoration
        currentScale.x = THREE.MathUtils.lerp(currentScale.x, BASE_SCALE, delta * 8);
        currentScale.y = THREE.MathUtils.lerp(currentScale.y, BASE_SCALE, delta * 8);
        currentScale.z = THREE.MathUtils.lerp(currentScale.z, BASE_SCALE, delta * 8);
        modelGroup.scale.copy(currentScale);

        // Smooth position interpolation in both X and Y
        currentPos.x = THREE.MathUtils.lerp(currentPos.x, targetPos.x, delta * 5.5);
        currentPos.y = THREE.MathUtils.lerp(currentPos.y, targetPos.y, delta * 5.5) + jumpOffset;
        modelGroup.position.copy(currentPos);

        // Smooth orientation
        if (isRunning) {
          // Face the direction of horizontal movement
          const moveDirX = targetPos.x - currentPos.x;
          const targetRotY = (moveDirX >= 0 ? Math.PI * 0.45 : -Math.PI * 0.45) + jumpSpin;
          modelGroup.rotation.y = THREE.MathUtils.lerp(modelGroup.rotation.y, targetRotY, delta * 10);
          
          // Slight upward/downward body pitch when climbing or descending
          const moveDirY = targetPos.y - currentPos.y;
          const targetPitch = THREE.MathUtils.clamp(-moveDirY * 0.25, -0.3, 0.3);
          modelGroup.rotation.x = THREE.MathUtils.lerp(modelGroup.rotation.x, targetPitch, delta * 8);
        } else {
          // Holds position: Sits facing front-forward in Idle
          modelGroup.rotation.y = THREE.MathUtils.lerp(modelGroup.rotation.y, 0.08 + jumpSpin, delta * 4);
          modelGroup.rotation.x = THREE.MathUtils.lerp(modelGroup.rotation.x, 0, delta * 4);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="hidden md:block absolute inset-0 w-full h-screen pointer-events-none z-30 overflow-hidden"
      style={{ willChange: 'transform' }}
    />
  );
}
