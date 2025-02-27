"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

interface GLTFResult {
  scene: THREE.Group;
}

const Keyboard = () => {
  const { scene } = useGLTF("/models/keyboard.glb") as GLTFResult;
  return <primitive object={scene} scale={2} />;
}

const AdjustCamera = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 10, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
}

export default function KeyboardModel() {
  return (
    <Canvas 
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight
        color={"#fff1e0"} 
        position={[5, 8, 5]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize-width={256} 
        shadow-mapSize-height={256} 
        shadow-radius={25} 
      />
      <Suspense fallback={null}>
        <Keyboard />
      </Suspense>
      <OrbitControls minDistance={3} maxDistance={10}/>
      <AdjustCamera />
    </Canvas>
  );
}
