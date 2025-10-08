import React from "react";
import { useStore } from "../store";
import ChatPanel from "./ChatPanel";

export default function HUD(){
  const enterRoom = useStore(s => s.enterRoom);
  const rooms = ["Strategy","Case Mgmt","Research","Documents","Evidence","Timeline","Parties","Pretrial","Trial"];
  return (
    <>
      <div className="hud">
        <h3>Litigation Command — Reception</h3>
        <div className="panel">Select a room to enter:</div>
        {rooms.map(r => <div key={r} className="room-btn" onClick={() => enterRoom(r)}>{r}</div>)}
      </div>

      <ChatPanel />
    </>
  );
}

