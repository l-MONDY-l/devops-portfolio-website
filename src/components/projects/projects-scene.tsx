"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Stars } from "@react-three/drei";
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

function DataNodes({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const layer = Math.floor(i / (count / 3));
      const r = 2 + Math.random() * 5.5 + layer * 0.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.75;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.045 + mouse.x * 0.28;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1 + mouse.y * 0.18;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22d3ee"
        size={0.042}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ModuleGrid() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.09 + mouse.x * 0.2;
    ref.current.rotation.x = Math.sin(t * 0.18) * 0.14 + mouse.y * 0.12;
  });

  const boxes = useMemo(() => {
    const b: [number, number, number][] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if ((Math.abs(x) + Math.abs(y) + Math.abs(z)) % 2 === 0) continue;
          b.push([x * 0.95, y * 0.95, z * 0.95]);
        }
      }
    }
    return b;
  }, []);

  return (
    <group ref={ref} scale={0.85}>
      {boxes.map((pos, i) => (
        <mesh key={i} position={pos} scale={0.38}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#0ea5e9"
            wireframe
            emissive="#0369a1"
            emissiveIntensity={0.5}
            transparent
            opacity={0.88}
          />
        </mesh>
      ))}
    </group>
  );
}

function AccentRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 2.1;
    ref.current.rotation.z = state.clock.elapsedTime * 0.07 + mouse.x * 0.15;
  });
  return (
    <mesh ref={ref} scale={1.35}>
      <torusGeometry args={[2.4, 0.03, 10, 80]} />
      <meshStandardMaterial
        color="#a78bfa"
        emissive="#7c3aed"
        emissiveIntensity={0.35}
        transparent
        opacity={0.65}
      />
    </mesh>
  );
}

export function ProjectsScene() {
  useWindowMouse();

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full min-h-[260px] md:min-h-[320px]">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2)]}
        camera={{ position: [0, 0, 8.5], fov: 42 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.32} />
        <pointLight position={[10, 8, 10]} intensity={1} color="#38bdf8" />
        <pointLight position={[-8, -5, 6]} intensity={0.5} color="#c084fc" />
        <directionalLight position={[3, 6, 4]} intensity={0.22} color="#f1f5f9" />
        <Stars radius={70} depth={45} count={2000} factor={2.5} saturation={0} fade speed={0.4} />
        <DataNodes />
        <AccentRing />
        <ModuleGrid />
      </Canvas>
    </div>
  );
}
