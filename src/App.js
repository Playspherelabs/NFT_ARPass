import * as THREE from "three";
import { OrbitControls, Text, Stars } from "@react-three/drei";
import { XR, VRButton, ARButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { MeshPhongMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model({ url }) {
  const { scene } = useGLTF(url);

  return (
    <primitive
      object={scene}
      scale={[0.15, 0.15, 0.15]}
      position={[-1, -1, -1]}
    />
  );
}

export default function App() {
  return (
    <>
      <ARButton />
      <Canvas
        camera={{ position: [0, 2, 5] }}
        style={{ background: "black" }}
      >
        <XR referenceSpace="local-floor">
          <ambientLight intensity={2} />
          <pointLight position={[20, 10, -10]} intensity={2} />
          <Suspense fallback={null}>
            <Model url="/victormodel.glb" />
          </Suspense>
          <Text
            position={[0.5, 2.5, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            Aptos Victors Passes
          </Text>
        </XR>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </>
  );
}