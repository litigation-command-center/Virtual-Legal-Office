import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useStore } from "../store";

export default function ReceptionistHolo({ position=[0,0,0] }){
  const ref = useRef();
  const pushMessage = useStore(s => s.pushMessage);

  useEffect(()=>{
    pushMessage("Receptionist: Welcome. Please provide the case title or upload a file. Tap a door to explore the office.");
  },[pushMessage]);

  useFrame((state)=> {
    if(ref.current){
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.15;
      ref.current.position.y = 1.2 + Math.sin(state.clock.elapsedTime * 0.7) * 0.02;
    }
  });

  return (
    <group position={position}>
      <mesh ref={ref}>
        <coneGeometry args={[0.45,1.2,32]} />
        <meshStandardMaterial transparent opacity={0.18} color={"#67f0ff"} emissive={"#67f0ff"} emissiveIntensity={0.2} />
      </mesh>

      <mesh position={[0,-0.1,0]}>
        <cylinderGeometry args={[0.5,0.5,0.08,32]} />
        <meshStandardMaterial color={"#181818"} />
      </mesh>
    </group>
  );
}
