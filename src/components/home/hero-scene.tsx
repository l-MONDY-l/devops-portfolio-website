"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PointMaterial, Points, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleCloud({ count = 3200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 7.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.85;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.038;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.11) * 0.07;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.62}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function InnerBurst({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 2.2;
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
    ref.current.rotation.y = -state.clock.elapsedTime * 0.12;
    ref.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c084fc"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.45}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function CoreLattice() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.14;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.19;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.55}>
      <group ref={groupRef}>
        <mesh scale={1.15}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshStandardMaterial
            color="#0ea5e9"
            wireframe
            emissive="#0369a1"
            emissiveIntensity={0.42}
            transparent
            opacity={0.92}
          />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 2.35;
    ref.current.rotation.z = state.clock.elapsedTime * 0.09;
  });

  return (
    <mesh ref={ref} position={[1.4, -0.6, -1.2]} scale={0.62}>
      <torusGeometry args={[1, 0.28, 14, 56]} />
      <meshStandardMaterial
        color="#64748b"
        wireframe
        emissive="#475569"
        emissiveIntensity={0.28}
        transparent
        opacity={0.75}
      />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 h-full min-h-[520px] w-full md:min-h-[640px]">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2)]}
        camera={{ position: [0, 0, 9.2], fov: 42 }}
        style={{ background: "transparent", pointerEvents: "none" }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[12, 8, 10]} intensity={1.15} color="#38bdf8" />
        <pointLight position={[-10, -6, -8]} intensity={0.55} color="#a855f7" />
        <directionalLight position={[4, 6, 4]} intensity={0.25} color="#e2e8f0" />
        <Stars radius={90} depth={55} count={4200} factor={2.8} saturation={0} fade speed={0.35} />
        <ParticleCloud />
        <InnerBurst />
        <CoreLattice />
        <OrbitRing />
      </Canvas>
    </div>
  );
}
