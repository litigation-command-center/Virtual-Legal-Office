import React from "react";
import { Html } from "@react-three/drei";
import { useStore } from "../store";

export default function Doorway({ position=[0,0,0], name }){
  const enterRoom = useStore((s) => s.enterRoom);
  return (
    <group position={position}>
      <mesh onClick={() => enterRoom(name)} position={[0,1.9,0]}>
        <boxGeometry args={[2.2,3.6,0.12]} />
        <meshStandardMaterial color={"#154f3f"} />
      </mesh>

      {/* label via HTML overlay so we avoid textGeometry issues */}
      <Html position={[0,1.1,0.13]} distanceFactor={8} >
        <div style={{ width:140, textAlign:"center", background:"rgba(0,0,0,0.45)", color:"#fff", padding:"6px 8px", borderRadius:6, fontSize:13 }}>
          <div style={{fontWeight:600}}>{name}</div>
          <div style={{fontSize:11, opacity:0.8}}>Click to enter</div>
        </div>
      </Html>
    </group>
  );
}
