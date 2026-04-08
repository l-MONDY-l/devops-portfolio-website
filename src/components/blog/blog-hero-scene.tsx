"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PointMaterial, Points, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { BlogPost } from "@/data/blog";

const ACCENT: Record<BlogPost["category"], { primary: string; secondary: string }> = {
  "Systems engineering": { primary: "#38bdf8", secondary: "#818cf8" },
  "Full stack": { primary: "#34d399", secondary: "#22d3ee" },
  "System administration": { primary: "#fbbf24", secondary: "#f97316" },
  "Bare metal": { primary: "#a78bfa", secondary: "#f472b6" },
};

function SparkField({
  count,
  color,
}: {
  count: number;
  color: string;
}) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 5;
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
    ref.current.rotation.y = state.clock.elapsedTime * 0.06;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.038}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function WireCore({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.22;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.28;
  });
  return (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={0.4}>
      <group ref={groupRef}>
        <mesh scale={0.95}>
          <octahedronGeometry args={[1.15, 0]} />
          <meshStandardMaterial
            color={color}
            wireframe
            emissive={color}
            emissiveIntensity={0.35}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
}

export function BlogHeroScene({ category }: Pick<BlogPost, "category">) {
  const { primary, secondary } = ACCENT[category];

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2)]}
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        style={{ background: "transparent", pointerEvents: "none" }}
      >
        <ambientLight intensity={0.28} />
        <pointLight position={[8, 6, 8]} intensity={0.9} color={primary} />
        <pointLight position={[-6, -4, -6]} intensity={0.45} color={secondary} />
        <Stars radius={65} depth={40} count={2200} factor={2.2} saturation={0} fade speed={0.5} />
        <SparkField count={1400} color={primary} />
        <SparkField count={600} color={secondary} />
        <WireCore color={primary} />
      </Canvas>
    </div>
  );
}
