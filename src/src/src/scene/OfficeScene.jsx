import React from "react";
import ReceptionDesk from "./ReceptionDesk";
import Doorway from "./Doorway";
import ReceptionistHolo from "./ReceptionistHolo";

export default function OfficeScene(){
  const doors = [
    ["Strategy", -9, 0, -6],
    ["Case Mgmt", -4, 0, -9],
    ["Research", 1, 0, -9],
    ["Documents", 6, 0, -9],
    ["Evidence", 9, 0, -6],
    ["Timeline", 9, 0, -0.5],
    ["Parties", 9, 0, 5],
    ["Pretrial", 4, 0, 8],
    ["Trial", -4, 0, 8]
  ];

  return (
    <>
      {/* floor */}
      <mesh rotation-x={-Math.PI/2} position={[0,0,0]}>
        <planeGeometry args={[40,20]} />
        <meshStandardMaterial color={"#202124"} />
      </mesh>

      {/* back wall */}
      <mesh position={[0,3,-9.5]}>
        <boxGeometry args={[40,6,1]} />
        <meshStandardMaterial color={"#161618"} />
      </mesh>

      <ReceptionDesk position={[0,0.3,2]} />
      <ReceptionistHolo position={[0,1.2,2.4]} />

      {doors.map(([name,x,y,z], i) => <Doorway key={i} name={name} position={[x,y,z]} />)}
    </>
  );
}
