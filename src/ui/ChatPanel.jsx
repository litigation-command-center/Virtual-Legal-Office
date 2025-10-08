import React from "react";
import { useStore } from "../store";

export default function ChatPanel(){
  const messages = useStore(s=>s.messages);
  return (
    <div className="chat-panel">
      <h3>Receptionist</h3>
      <div style={{maxHeight:220, overflowY:"auto"}}>
        {messages.length === 0 && <div style={{opacity:0.8}}>No messages yet.</div>}
        {messages.map((m,i)=>(
          <div key={i} style={{marginBottom:8}}>
            <div style={{fontSize:11,color:"#9af"}}>{new Date(m.ts).toLocaleTimeString()}</div>
            <div style={{fontSize:14}}>{m.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
