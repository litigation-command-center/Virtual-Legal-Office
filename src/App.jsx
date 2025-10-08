import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import OfficeScene from "./scene/OfficeScene";
import HUD from "./ui/HUD";
import { useStore } from "./store";

export default function App(){
  const inRoom = useStore(s => s.inRoom);
  return (
    <div className="app">
      <Canvas camera={{ position: [0, 2.4, 6], fov: 60 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[6, 10, 6]} intensity={1.0} />
        <Environment preset="studio" />
        <OfficeScene />
      </Canvas>

      <HUD />
      <div className="footer">Virtual Office — Reception Area {inRoom ? ` · ${inRoom}` : ""}</div>
    </div>
  );
}
