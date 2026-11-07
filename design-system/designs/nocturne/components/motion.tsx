"use client";
import { useState } from "react";

const modes = ["Fade", "Directional", "Stagger", "Scale", "Text mask", "Spring", "Exit"] as const;
export function NocturneMotionPrimitives({ reduced = false }: { reduced?: boolean }) {
  const [mode, setMode] = useState<(typeof modes)[number]>("Fade"); const [replay, setReplay] = useState(0);
  return <div className={reduced ? "nocturne-motion-primitives reduced" : "nocturne-motion-primitives"}><div className="nocturne-motion-tabs">{modes.map((item) => <button key={item} className={mode === item ? "active" : ""} onClick={() => setMode(item)}>{item}</button>)}</div><div className={`nocturne-motion-canvas ${mode.toLowerCase().replaceAll(" ", "-")}`} key={`${mode}-${replay}`}><span>PRIMITIVE / {mode.toUpperCase()}</span><b>ARRIVE<br />WITH INTENT</b><i /><i /><i /></div><div className="nocturne-motion-footer"><p>{reduced ? "Reduced motion renders a stable final state; information remains present." : `${mode} uses transform and opacity only, with a cinematic 520ms maximum.`}</p><button onClick={() => setReplay((value) => value + 1)}>REPLAY ↻</button></div></div>;
}
