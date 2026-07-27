'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sparkles, Float } from '@react-three/drei';

const PALETTE = ['#63a8ee', '#a26bf0', '#f0699a', '#f0a84a', '#63a8ee'];

function Blob({ colorIndex }) {
  const meshRef = useRef(null);
  const matRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.22;
      meshRef.current.rotation.x += delta * 0.08;
    }
    if (matRef.current) {
      const t = state.clock.getElapsedTime();
      matRef.current.distort = 0.42 + Math.sin(t * 0.6) * 0.12;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.1}>
      <mesh ref={meshRef} scale={1.7}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          ref={matRef}
          color={PALETTE[colorIndex]}
          distort={0.42}
          speed={2.4}
          roughness={0.15}
          metalness={0.6}
          emissive={PALETTE[colorIndex]}
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D({ colorIndex = 0 }) {
  return (
    <Canvas
      className="hero3d-canvas"
      camera={{ position: [0, 0, 4.6], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-4, -2, -3]} intensity={1.4} color={PALETTE[colorIndex]} />
      <Suspense fallback={null}>
        <Blob colorIndex={colorIndex} />
        <Sparkles count={60} scale={[6, 6, 6]} size={2.4} speed={0.35} color="#aad6ff" />
      </Suspense>
    </Canvas>
  );
}
