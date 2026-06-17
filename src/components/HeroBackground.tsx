'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Lightweight, decorative three.js scene for the hero section:
 * a slowly rotating globe of points (gold + electric-blue) wrapped around a
 * faint wireframe icosahedron, with subtle mouse parallax. Purely ambient —
 * it sits behind the hero content and never captures pointer events.
 *
 * Respects `prefers-reduced-motion` (renders a single static frame) and tears
 * everything down on unmount to avoid WebGL context leaks.
 */
export default function HeroBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const WHITE = new THREE.Color('#FFFFFF');
    const SKY = new THREE.Color('#93C5FD');

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // ─── Point globe (Fibonacci sphere) ──────────────────────────────────
    const COUNT = 1600;
    const RADIUS = 7;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      positions[i * 3] = Math.cos(theta) * r * RADIUS;
      positions[i * 3 + 1] = y * RADIUS;
      positions[i * 3 + 2] = Math.sin(theta) * r * RADIUS;

      // Mostly white with a scattering of sky-blue accent points
      const c = Math.random() > 0.72 ? SKY : WHITE;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // ─── Faint wireframe core ─────────────────────────────────────────────
    const coreGeo = new THREE.IcosahedronGeometry(4.4, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xA8C8FF,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    const group = new THREE.Group();
    group.add(points);
    group.add(core);
    scene.add(group);
    group.rotation.x = 0.4;

    // ─── Interaction: gentle mouse parallax ───────────────────────────────
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };
    window.addEventListener('pointermove', onPointerMove);

    // ─── Resize ───────────────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ─── Render loop ──────────────────────────────────────────────────────
    let frameId = 0;
    const clock = new THREE.Clock();

    const renderFrame = () => {
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.06;
      core.rotation.y = -t * 0.04;
      core.rotation.z = t * 0.02;

      // Ease camera toward the mouse target for parallax
      camera.position.x += (target.x * 3 - camera.position.x) * 0.03;
      camera.position.y += (-target.y * 3 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    if (prefersReducedMotion) {
      renderFrame();
    } else {
      const animate = () => {
        renderFrame();
        frameId = requestAnimationFrame(animate);
      };
      animate();
    }

    // ─── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      pointsGeo.dispose();
      pointsMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 z-[1] pointer-events-none"
    />
  );
}
