import React from "react";

export default function ReceptionDesk({ position=[0,0,0] }){
  return (
    <group position={position}>
      <mesh position={[0,0.2,0]}>
        <boxGeometry args={[6,0.6,1.6]} />
        <meshStandardMaterial color={"#3b302b"} />
      </mesh>
      <mesh position={[0,0.9,0.45]}>
        <boxGeometry args={[2.4,0.2,0.4]} />
        <meshStandardMaterial color={"#0e0e0e"} />
      </mesh>
      <mesh position={[0.9,1.0,0.24]}>
        <boxGeometry args={[0.6,0.4,0.02]} />
        <meshStandardMaterial color={"#0b6"} />
      </mesh>
    </group>
  );
}
