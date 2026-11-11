global.FileReader = class FileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then(buf => {
      this.result = buf;
      if (this.onloadend) this.onloadend();
    });
  }
};

import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import fs from 'fs';

console.log('Generating authentic STANDING 3D Go Gopher GLB (Renee French 3-view reference)...');

// Materials: Smooth vinyl/matte toy finish referencing original Renee French artwork
const gopherBlueMat = new THREE.MeshStandardMaterial({
  color: 0x56cbe4, // Authentic Go Gopher Cyan Blue
  roughness: 0.62,
  metalness: 0.02
});

const skinMat = new THREE.MeshStandardMaterial({
  color: 0xf5caa2, // Soft warm tan/beige for muzzle, paws, and feet
  roughness: 0.65,
  metalness: 0.02
});

const eyeWhiteMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.15,
  metalness: 0.0
});

const pupilMat = new THREE.MeshStandardMaterial({
  color: 0x141416,
  roughness: 0.25,
  metalness: 0.0
});

const noseMat = new THREE.MeshStandardMaterial({
  color: 0x222226,
  roughness: 0.5,
  metalness: 0.05
});

const teethMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.3,
  metalness: 0.0
});

// Root hierarchy
const root = new THREE.Group();
root.name = 'Armature';

// 1. Root / Hips Bone Node (Base ground level at y = 0)
// Elevated to y = 0.62 so the standing legs firmly touch ground at y = 0!
const hips = new THREE.Group();
hips.name = 'Hips';
hips.position.set(0, 0.62, 0);
root.add(hips);

// Authentic Renee French Go Gopher body (LatheGeometry)
// Spline profile from bottom pole (y = -0.52) to top dome (y = 0.72)
const bodyCurve = new THREE.SplineCurve([
  new THREE.Vector2(0, -0.52),      // Bottom center pole
  new THREE.Vector2(0.18, -0.50),   // Rounded lower base
  new THREE.Vector2(0.28, -0.42),   // Base transition
  new THREE.Vector2(0.35, -0.25),   // Lower belly (max radius 0.35, sleek & cute)
  new THREE.Vector2(0.34, 0.0),     // Mid torso
  new THREE.Vector2(0.32, 0.22),    // Gentle neck/torso taper
  new THREE.Vector2(0.30, 0.42),    // Head sides
  new THREE.Vector2(0.25, 0.58),    // Upper head curvature
  new THREE.Vector2(0.15, 0.68),    // Cranium dome
  new THREE.Vector2(0, 0.72)        // Top center pole
]);

const bodyPoints = bodyCurve.getPoints(32);
const bodyGeo = new THREE.LatheGeometry(bodyPoints, 36);
bodyGeo.computeVertexNormals();
const bodyMesh = new THREE.Mesh(bodyGeo, gopherBlueMat);
bodyMesh.name = 'GopherBody';
bodyMesh.castShadow = true;
hips.add(bodyMesh);

// Cute rounded stubby tail at the lower back
const tailGeo = new THREE.SphereGeometry(0.085, 14, 12);
const tail = new THREE.Mesh(tailGeo, gopherBlueMat);
tail.position.set(0, -0.34, -0.32);
tail.name = 'Tail';
hips.add(tail);

// 2. Head & Facial Features Node
const head = new THREE.Group();
head.name = 'Head';
head.position.set(0, 0.28, 0);
hips.add(head);

// Big bulging cartoon eyes (Characteristic Renee French aesthetic)
const eyeGeo = new THREE.SphereGeometry(0.175, 22, 20);
eyeGeo.scale(0.92, 1.05, 0.95);

const eyeL = new THREE.Mesh(eyeGeo, eyeWhiteMat);
eyeL.position.set(-0.16, 0.10, 0.24);
eyeL.rotation.y = -0.15;
eyeL.name = 'Eye_L';
head.add(eyeL);

const eyeR = new THREE.Mesh(eyeGeo, eyeWhiteMat);
eyeR.position.set(0.16, 0.10, 0.24);
eyeR.rotation.y = 0.15;
eyeR.name = 'Eye_R';
head.add(eyeR);

// Pupils (looking slightly forward/outward)
const pupilGeo = new THREE.SphereGeometry(0.068, 16, 14);
pupilGeo.scale(1.0, 1.0, 0.5);

const pupilL = new THREE.Mesh(pupilGeo, pupilMat);
pupilL.position.set(-0.175, 0.10, 0.39);
pupilL.name = 'Pupil_L';
head.add(pupilL);

const pupilR = new THREE.Mesh(pupilGeo, pupilMat);
pupilR.position.set(0.175, 0.10, 0.39);
pupilR.name = 'Pupil_R';
head.add(pupilR);

// Specular white reflections on pupils
const specGeo = new THREE.SphereGeometry(0.02, 8, 8);
const specL = new THREE.Mesh(specGeo, eyeWhiteMat);
specL.position.set(-0.16, 0.12, 0.425);
head.add(specL);

const specR = new THREE.Mesh(specGeo, eyeWhiteMat);
specR.position.set(0.19, 0.12, 0.425);
head.add(specR);

// Snout / Muzzle
const snoutGeo = new THREE.SphereGeometry(0.13, 18, 14);
snoutGeo.scale(1.22, 0.85, 0.95);
const snout = new THREE.Mesh(snoutGeo, skinMat);
snout.position.set(0, -0.04, 0.30);
snout.name = 'Snout';
head.add(snout);

// Button nose on top of snout
const noseGeo = new THREE.SphereGeometry(0.046, 14, 12);
noseGeo.scale(1.2, 0.85, 0.95);
const nose = new THREE.Mesh(noseGeo, noseMat);
nose.position.set(0, 0.015, 0.40);
nose.name = 'Nose';
head.add(nose);

// Two signature white buck teeth
const toothGeo = new THREE.BoxGeometry(0.055, 0.088, 0.03);
const toothL = new THREE.Mesh(toothGeo, teethMat);
toothL.position.set(-0.036, -0.12, 0.30);
toothL.rotation.x = -0.08;
toothL.name = 'Tooth_L';
head.add(toothL);

const toothR = new THREE.Mesh(toothGeo, teethMat);
toothR.position.set(0.036, -0.12, 0.30);
toothR.rotation.x = -0.08;
toothR.name = 'Tooth_R';
head.add(toothR);

// Cute rounded ears on top head sides
const earGeo = new THREE.SphereGeometry(0.09, 16, 14);
earGeo.scale(0.85, 1.1, 0.65);

const earL = new THREE.Mesh(earGeo, gopherBlueMat);
earL.position.set(-0.26, 0.30, -0.05);
earL.rotation.z = 0.38;
earL.name = 'Ear_L';
head.add(earL);

const earR = new THREE.Mesh(earGeo, gopherBlueMat);
earR.position.set(0.26, 0.30, -0.05);
earR.rotation.z = -0.38;
earR.name = 'Ear_R';
head.add(earR);

// 3. Cute Little Arms at Sides (Matching Standing Reference)
// In the standing pose, arms hang naturally down along the body sides with cute paws
const armL = new THREE.Group();
armL.name = 'Arm_L';
armL.position.set(-0.31, 0.04, 0.04);
hips.add(armL);

const armGeo = new THREE.CylinderGeometry(0.046, 0.040, 0.18, 12);
armGeo.translate(0, -0.08, 0);
const armLMesh = new THREE.Mesh(armGeo, skinMat);
armL.add(armLMesh);

const pawGeo = new THREE.SphereGeometry(0.052, 12, 10);
const pawL = new THREE.Mesh(pawGeo, skinMat);
pawL.position.set(0, -0.17, 0.02);
armL.add(pawL);

const armR = new THREE.Group();
armR.name = 'Arm_R';
armR.position.set(0.31, 0.04, 0.04);
hips.add(armR);

const armRMesh = new THREE.Mesh(armGeo, skinMat);
armR.add(armRMesh);

const pawR = new THREE.Mesh(pawGeo, skinMat);
pawR.position.set(0, -0.17, 0.02);
armR.add(pawR);

// 4. STANDING LEGS & FEET (Matching Center Standing Image of Renee French Reference!)
// The gopher stands upright on its two little feet supporting its body off the floor!
const legL = new THREE.Group();
legL.name = 'Leg_L';
legL.position.set(-0.17, -0.46, 0.02);
hips.add(legL);

// Leg socket
const hipJointGeo = new THREE.SphereGeometry(0.052, 12, 10);
const hipJointL = new THREE.Mesh(hipJointGeo, skinMat);
legL.add(hipJointL);

// Leg limb cylinder extending vertically straight down
const legLimbGeo = new THREE.CylinderGeometry(0.046, 0.040, 0.14, 12);
legLimbGeo.translate(0, -0.07, 0);
const legLimbL = new THREE.Mesh(legLimbGeo, skinMat);
legL.add(legLimbL);

// Defined cute standing foot flat on ground supporting body
const footGeo = new THREE.SphereGeometry(0.065, 14, 12);
footGeo.scale(0.85, 0.60, 1.35);
const footLMesh = new THREE.Mesh(footGeo, skinMat);
footLMesh.position.set(0, -0.14, 0.035);
legL.add(footLMesh);

const legR = new THREE.Group();
legR.name = 'Leg_R';
legR.position.set(0.17, -0.46, 0.02);
hips.add(legR);

const hipJointR = new THREE.Mesh(hipJointGeo, skinMat);
legR.add(hipJointR);

const legLimbR = new THREE.Mesh(legLimbGeo, skinMat);
legR.add(legLimbR);

const footRMesh = new THREE.Mesh(footGeo, skinMat);
footRMesh.position.set(0, -0.14, 0.035);
legR.add(footRMesh);


// =========================================================================
// ACTION TRACK 1: "Idle" (STAND UPON REST - Matching Reference Center)
// Stands proudly upright on two little feet, breathing subtly, looking around
// =========================================================================

const idleDuration = 2.4;
const idleTimes = [0, 0.6, 1.2, 1.8, 2.4];

function eulerToQuatArray(times, eulers) {
  const quats = [];
  const q = new THREE.Quaternion();
  for (const e of eulers) {
    q.setFromEuler(new THREE.Euler(e[0], e[1], e[2]));
    quats.push(q.x, q.y, q.z, q.w);
  }
  return quats;
}

// Standing upright with subtle breathing bob
const idleHipsPosTrack = new THREE.VectorKeyframeTrack(
  'Hips.position',
  idleTimes,
  [
    0, 0.62, 0,
    0, 0.635, 0, // Gentle inhale rise
    0, 0.62, 0,
    0, 0.635, 0,
    0, 0.62, 0
  ]
);

const idleHipsRotTrack = new THREE.QuaternionKeyframeTrack(
  'Hips.quaternion',
  idleTimes,
  eulerToQuatArray(idleTimes, [
    [0, 0, 0],
    [0.01, 0.01, 0],
    [0, 0, 0],
    [0.01, -0.01, 0],
    [0, 0, 0]
  ])
);

// Curious head tilt & look around
const idleHeadRotTrack = new THREE.QuaternionKeyframeTrack(
  'Head.quaternion',
  idleTimes,
  eulerToQuatArray(idleTimes, [
    [0, 0, 0],
    [0.03, 0.08, 0.02],
    [0.05, -0.06, -0.02],
    [0.02, 0.05, 0.01],
    [0, 0, 0]
  ])
);

// Arms resting at sides in standing pose (matching reference image)
const idleArmLRotTrack = new THREE.QuaternionKeyframeTrack(
  'Arm_L.quaternion',
  idleTimes,
  eulerToQuatArray(idleTimes, [
    [0.10, 0.05, -0.12],
    [0.14, 0.07, -0.14],
    [0.08, 0.04, -0.10],
    [0.13, 0.06, -0.13],
    [0.10, 0.05, -0.12]
  ])
);

const idleArmRRotTrack = new THREE.QuaternionKeyframeTrack(
  'Arm_R.quaternion',
  idleTimes,
  eulerToQuatArray(idleTimes, [
    [0.10, -0.05, 0.12],
    [0.14, -0.07, 0.14],
    [0.08, -0.04, 0.10],
    [0.13, -0.06, 0.13],
    [0.10, -0.05, 0.12]
  ])
);

// STANDING FEET: Firmly planted straight down under body supporting gopher standing upright!
const idleLegLRotTrack = new THREE.QuaternionKeyframeTrack(
  'Leg_L.quaternion',
  idleTimes,
  eulerToQuatArray(idleTimes, [
    [0.02, 0, -0.06],
    [0.01, 0, -0.06],
    [0.03, 0, -0.06],
    [0.01, 0, -0.06],
    [0.02, 0, -0.06]
  ])
);

const idleLegRRotTrack = new THREE.QuaternionKeyframeTrack(
  'Leg_R.quaternion',
  idleTimes,
  eulerToQuatArray(idleTimes, [
    [0.02, 0, 0.06],
    [0.01, 0, 0.06],
    [0.03, 0, 0.06],
    [0.01, 0, 0.06],
    [0.02, 0, 0.06]
  ])
);

const idleClip = new THREE.AnimationClip('Idle', idleDuration, [
  idleHipsPosTrack,
  idleHipsRotTrack,
  idleHeadRotTrack,
  idleArmLRotTrack,
  idleArmRRotTrack,
  idleLegLRotTrack,
  idleLegRRotTrack
]);


// =========================================================================
// ACTION TRACK 2: "Run" (Frantic Cartoon Sprint)
// Antiphase legs & arms pumping frantically, body pitched forward
// =========================================================================

const runDuration = 0.52; // Rapid 0.52s cartoon dash
const runTimes = [0, 0.13, 0.26, 0.39, 0.52];

const runHipsPosTrack = new THREE.VectorKeyframeTrack(
  'Hips.position',
  runTimes,
  [
    0, 0.58, 0,
    0, 0.67, 0, // Spring bounce
    0, 0.58, 0,
    0, 0.67, 0,
    0, 0.58, 0
  ]
);

const runHipsRotTrack = new THREE.QuaternionKeyframeTrack(
  'Hips.quaternion',
  runTimes,
  eulerToQuatArray(runTimes, [
    [0.26, 0.08, -0.04],
    [0.22, 0, 0],
    [0.26, -0.08, 0.04],
    [0.22, 0, 0],
    [0.26, 0.08, -0.04]
  ])
);

const runHeadRotTrack = new THREE.QuaternionKeyframeTrack(
  'Head.quaternion',
  runTimes,
  eulerToQuatArray(runTimes, [
    [-0.14, 0.05, -0.02],
    [-0.10, 0, 0],
    [-0.14, -0.05, 0.02],
    [-0.10, 0, 0],
    [-0.14, 0.05, -0.02]
  ])
);

// Arms pumping frantically in sprint
const runArmLRotTrack = new THREE.QuaternionKeyframeTrack(
  'Arm_L.quaternion',
  runTimes,
  eulerToQuatArray(runTimes, [
    [1.05, 0.18, -0.18],
    [0.0, 0.18, -0.22],
    [-1.15, 0.32, -0.28],
    [0.0, 0.18, -0.22],
    [1.05, 0.18, -0.18]
  ])
);

const runArmRRotTrack = new THREE.QuaternionKeyframeTrack(
  'Arm_R.quaternion',
  runTimes,
  eulerToQuatArray(runTimes, [
    [-1.15, -0.32, 0.28],
    [0.0, -0.18, 0.22],
    [1.05, -0.18, 0.18],
    [0.0, -0.18, 0.22],
    [-1.15, -0.32, 0.28]
  ])
);

// Antiphase leg sprint: legs kick wide forward and backward below body!
const runLegLRotTrack = new THREE.QuaternionKeyframeTrack(
  'Leg_L.quaternion',
  runTimes,
  eulerToQuatArray(runTimes, [
    [-1.25, -0.10, 0.08], // Full forward kick
    [0.0, -0.10, 0.08],
    [1.18, -0.10, 0.08],  // Full backward kick
    [0.0, -0.10, 0.08],
    [-1.25, -0.10, 0.08]
  ])
);

const runLegRRotTrack = new THREE.QuaternionKeyframeTrack(
  'Leg_R.quaternion',
  runTimes,
  eulerToQuatArray(runTimes, [
    [1.18, 0.10, -0.08],  // Full backward kick
    [0.0, 0.10, -0.08],
    [-1.25, 0.10, -0.08], // Full forward kick
    [0.0, 0.10, -0.08],
    [1.18, 0.10, -0.08]
  ])
);

const runClip = new THREE.AnimationClip('Run', runDuration, [
  runHipsPosTrack,
  runHipsRotTrack,
  runHeadRotTrack,
  runArmLRotTrack,
  runArmRRotTrack,
  runLegLRotTrack,
  runLegRRotTrack
]);


// Export scene to public/standing-gopher.glb
const exporter = new GLTFExporter();
exporter.parse(
  root,
  (buffer) => {
    const outputPath = 'public/standing-gopher.glb';
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    console.log(`Successfully generated authentic STANDING ${outputPath}! File size: ${(buffer.byteLength / 1024).toFixed(1)} KB`);

    const loader = new GLTFLoader();
    loader.parse(buffer, '', (gltf) => {
      console.log('--- Verification ---');
      console.log('Scene nodes count:', gltf.scene.children.length);
      console.log('Clips:', gltf.animations.map(a => `${a.name} (${a.duration}s)`).join(', '));
      console.log('Done!');
    });
  },
  (err) => console.error(err),
  {
    binary: true,
    animations: [idleClip, runClip]
  }
);
