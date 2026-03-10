"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

function GlassCube({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    ref.current.rotation.x = Math.sin(t) * 0.3;
    ref.current.rotation.y = Math.cos(t) * 0.4;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={ref} position={position} scale={scale}>
        <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4}>
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={0.4}
            chromaticAberration={0.1}
            anisotropy={0.2}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={0.1}
            color="#b197fc"
            roughness={0.1}
            transmission={0.95}
            ior={1.5}
          />
        </RoundedBox>
      </group>
    </Float>
  );
}

function Particles() {
  const count = 60;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#91a7ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-3, 2, 4]} intensity={0.4} color="#b197fc" />

      <GlassCube position={[0, 0.3, 0]} scale={1.2} speed={0.3} />
      <GlassCube position={[1.8, -0.8, -1]} scale={0.7} speed={0.4} />
      <GlassCube position={[-1.5, 1, -0.5]} scale={0.5} speed={0.5} />
      <GlassCube position={[2.2, 1.2, -1.5]} scale={0.4} speed={0.35} />
      <GlassCube position={[-2, -0.5, -1]} scale={0.6} speed={0.45} />

      <Particles />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
