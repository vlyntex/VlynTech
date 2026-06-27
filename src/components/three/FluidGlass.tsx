"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { MathUtils } from "three";

function GlassShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Deform the geometry over time
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      
      const position = meshRef.current.geometry.attributes.position;
      const vertex = new THREE.Vector3();
      for (let i = 0; i < position.count; i++) {
        vertex.fromBufferAttribute(position, i);
        // Add some procedural noise to vertices
        const time = state.clock.elapsedTime * 0.5;
        const noise = MathUtils.lerp(
          vertex.length(),
          vertex.length() + Math.sin(vertex.x * 2 + time) * 0.2 + Math.cos(vertex.y * 2 + time) * 0.2,
          0.05
        );
        vertex.normalize().multiplyScalar(noise);
        // Note: For a true liquid geometry, a custom vertex shader is better, 
        // but for a highly performant smooth glass effect, a simple TorusKnot or Icosahedron 
        // with transmission material looks incredibly premium.
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.4, 256, 64]} />
        {/* Premium Apple-like glass material */}
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.03}
          anisotropy={0.1}
          color="#f2f5f8"
        />
      </mesh>
    </Float>
  );
}

export default function FluidGlass() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-gradient-radial from-white via-white to-secondary opacity-80 mix-blend-normal">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#B8FF5A" />
        <spotLight
          position={[0, 5, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          color="#C7FF6B"
        />
        
        {/* Soft volumetric floating lights instead of tiny particles */}
        <Sparkles count={40} scale={10} size={15} speed={0.4} opacity={0.1} color="#B8FF5A" />
        <Sparkles count={20} scale={12} size={25} speed={0.2} opacity={0.05} color="#FFE65A" />
        
        <GlassShape />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
