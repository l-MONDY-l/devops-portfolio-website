"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
    const onLeave = () => {
      mouse.x = 0;
      mouse.y = 0;
    };
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);
}

function CameraRig() {
  const { camera } = useThree();
  useFrame(() => {
    const tx = mouse.x * 0.55;
    const ty = mouse.y * 0.42;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, tx, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, ty, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8.2 + Math.abs(mouse.x) * 0.15 + Math.abs(mouse.y) * 0.12, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function CursorField({ count = 2200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 6.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.9;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.035 + mouse.x * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.06 + mouse.y * 0.2;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.58}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function InnerGlow({ count = 720 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 2.4;
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
    ref.current.rotation.y = -state.clock.elapsedTime * 0.1 - mouse.x * 0.35;
    ref.current.rotation.x = state.clock.elapsedTime * 0.04 + mouse.y * 0.15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c4b5fd"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.42}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function MouseTorusKnot() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    const tx = mouse.x * 0.5;
    const ty = mouse.y * 0.38;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      ty + state.clock.elapsedTime * 0.12,
      0.08,
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      tx + state.clock.elapsedTime * 0.18,
      0.08,
    );
  });

  return (
    <Float speed={2.2} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={groupRef}>
        <mesh scale={1.05}>
          <torusKnotGeometry args={[1, 0.28, 96, 14]} />
          <meshStandardMaterial
            color="#0ea5e9"
            wireframe
            emissive="#0369a1"
            emissiveIntensity={0.45}
            transparent
            opacity={0.95}
          />
        </mesh>
      </group>
    </Float>
  );
}

function MouseLights() {
  const lightA = useRef<THREE.PointLight>(null);
  const lightB = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (lightA.current) {
      lightA.current.position.x = THREE.MathUtils.lerp(lightA.current.position.x, 8 + mouse.x * 5, 0.06);
      lightA.current.position.y = THREE.MathUtils.lerp(lightA.current.position.y, 6 + mouse.y * 4, 0.06);
    }
    if (lightB.current) {
      lightB.current.position.x = THREE.MathUtils.lerp(lightB.current.position.x, -7 - mouse.x * 4, 0.06);
      lightB.current.position.y = THREE.MathUtils.lerp(lightB.current.position.y, -4 + mouse.y * 3, 0.06);
    }
  });

  return (
    <>
      <pointLight ref={lightA} position={[8, 6, 10]} intensity={1.2} color="#38bdf8" />
      <pointLight ref={lightB} position={[-8, -4, 6]} intensity={0.65} color="#a78bfa" />
    </>
  );
}

export function ContactScene() {
  useWindowMouse();

  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full min-h-[70vh]">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2)]}
        camera={{ position: [0, 0, 8.2], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.32} />
        <MouseLights />
        <directionalLight position={[2, 4, 3]} intensity={0.2} color="#e2e8f0" />
        <CameraRig />
        <Stars radius={85} depth={52} count={3800} factor={2.6} saturation={0} fade speed={0.42} />
        <CursorField />
        <InnerGlow />
        <MouseTorusKnot />
      </Canvas>
    </div>
  );
}
