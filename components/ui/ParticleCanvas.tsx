"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ParticleCanvas() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    
    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 250;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 4. Create particles (Data Nodes)
    const particleCount = 100;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    // Spread nodes in a 3D coordinate space
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 350;
      const y = (Math.random() - 0.5) * 350;
      const z = (Math.random() - 0.5) * 350;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities.push({
        x: (Math.random() - 0.5) * 0.15,
        y: (Math.random() - 0.5) * 0.15,
        z: (Math.random() - 0.5) * 0.15,
      });
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Custom glowing point material in warm tones
    const material = new THREE.PointsMaterial({
      color: 0xC46A3C, // Brand Accent Clay
      size: 3.5,
      transparent: true,
      opacity: 0.35,
      sizeAttenuation: true,
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // 5. Connection Lines (Network topology representation)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xA76B4F, // Terracotta Accent
      transparent: true,
      opacity: 0.06,
    });

    // We will dynamically construct connection lines in the update loop
    let lineSegments = new THREE.LineSegments();
    scene.add(lineSegments);

    // 6. Interactive mouse follow variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Scale mouse position to range [-1, 1]
      mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 7. Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth lag-behind camera movement (lerp)
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      camera.position.x = targetX * 120;
      camera.position.y = -targetY * 120;
      camera.lookAt(scene.position);

      // Rotate point clouds slightly
      pointCloud.rotation.y += 0.001;
      pointCloud.rotation.x += 0.0005;
      lineSegments.rotation.y += 0.001;
      lineSegments.rotation.x += 0.0005;

      // Update particle positions
      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        // Apply velocity
        posArray[i * 3] += velocities[i].x;
        posArray[i * 3 + 1] += velocities[i].y;
        posArray[i * 3 + 2] += velocities[i].z;

        // Boundaries checks (bounce nodes back)
        if (Math.abs(posArray[i * 3]) > 180) velocities[i].x *= -1;
        if (Math.abs(posArray[i * 3 + 1]) > 180) velocities[i].y *= -1;
        if (Math.abs(posArray[i * 3 + 2]) > 180) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Recalculate connection lines based on distance threshold
      const linePositions: number[] = [];
      const threshold = 65; // Distance to form network lines

      for (let i = 0; i < particleCount; i++) {
        const x1 = posArray[i * 3];
        const y1 = posArray[i * 3 + 1];
        const z1 = posArray[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = posArray[j * 3];
          const y2 = posArray[j * 3 + 1];
          const z2 = posArray[j * 3 + 2];

          const dist = Math.sqrt(
            Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2)
          );

          if (dist < threshold) {
            linePositions.push(x1, y1, z1);
            linePositions.push(x2, y2, z2);
          }
        }
      }

      // Dispose old line geometry and assign new
      if (lineSegments.geometry) {
        lineSegments.geometry.dispose();
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      lineSegments.geometry = lineGeometry;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Handle Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 9. Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -z-10 pointer-events-none opacity-45 overflow-hidden"
    />
  );
}

export default ParticleCanvas;
