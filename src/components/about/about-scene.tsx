"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PointMaterial, Points, Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const mouse = { x: 0, y: 0 };

function useWindowMouse() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const reset = () => {
      mouse.x = 0;
      mouse.y = 0;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("blur", reset);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("blur", reset);
    };
  }, []);
}

function OrbitRings() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.11 + mouse.x * 0.35;
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.12 + mouse.y * 0.22;
    ref.current.rotation.z = Math.cos(t * 0.12) * 0.06;
  });

  return (
    <group ref={ref}>
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[2.35, 0.024, 12, 96]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.45}
          metalness={0.2}
          roughness={0.35}
          transparent
          opacity={0.75}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.15, 0.4, 0]}>
        <torusGeometry args={[2.5, 0.02, 12, 96]} />
        <meshStandardMaterial
          color="#7dd3fc"
          emissive="#7dd3fc"
          emissiveIntensity={0.45}
          metalness={0.2}
          roughness={0.35}
          transparent
          opacity={0.55}
        />
      </mesh>
      <mesh rotation={[0.35, Math.PI / 3.2, Math.PI / 4.2]}>
        <torusGeometry args={[2.15, 0.018, 12, 88]} />
        <meshStandardMaterial
          color="#fcd34d"
          emissive="#fcd34d"
          emissiveIntensity={0.45}
          metalness={0.2}
          roughness={0.35}
          transparent
          opacity={0.48}
        />
      </mesh>
    </group>
  );
}

function CorePolyhedron() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.x = t * 0.13 + mouse.y * 0.18;
    groupRef.current.rotation.y = t * 0.17 + mouse.x * 0.2;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.45}>
      <group ref={groupRef}>
        <mesh scale={0.78}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial
            color="#1e293b"
            wireframe
            emissive="#64748b"
            emissiveIntensity={0.35}
            transparent
            opacity={0.92}
          />
        </mesh>
      </group>
    </Float>
  );
}

function AmbientPoints({ count = 1600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.8 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.8;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.025 + mouse.x * 0.12;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#94a3b8"
        size={0.032}
        sizeAttenuation
        depthWrite={false}
        opacity={0.42}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function GoldAccentDust({ count = 420 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = -state.clock.elapsedTime * 0.08 - mouse.x * 0.15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#fbbf24"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.38}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export function AboutScene() {
  useWindowMouse();

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full min-h-[280px] md:min-h-[360px]">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2)]}
        camera={{ position: [0, 0, 9], fov: 40 }}
        style={{ background: "transparent", pointerEvents: "none" }}
      >
        <ambientLight intensity={0.28} />
        <pointLight position={[10, 8, 10]} intensity={0.95} color="#38bdf8" />
        <pointLight position={[-8, -5, 6]} intensity={0.5} color="#fbbf24" />
        <pointLight position={[4, -8, -4]} intensity={0.35} color="#a78bfa" />
        <directionalLight position={[2, 6, 4]} intensity={0.18} color="#f8fafc" />
        <Stars radius={75} depth={48} count={2400} factor={2.4} saturation={0} fade speed={0.38} />
        <AmbientPoints />
        <GoldAccentDust />
        <OrbitRings />
        <CorePolyhedron />
      </Canvas>
    </div>
  );
}
