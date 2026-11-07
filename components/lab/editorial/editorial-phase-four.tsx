"use client";

import { useState, type PointerEvent } from "react";
import { useDesign } from "@/design-system/engine/provider";

const motionModes = ["Fade", "Directional reveal", "Stagger", "Scale", "Text mask", "Spring", "Exit"] as const;
const effectModes = ["Ink spread", "Rule reveal", "Paper texture", "Type direction", "Image frame", "Composition shift"] as const;

function MotionCanvas({ mode, run, reduced }: { mode: (typeof motionModes)[number]; run: number; reduced: boolean }) {
  return <div key={`${mode}-${run}`} className={`ed-motion-canvas ${mode.toLowerCase().replaceAll(" ", "-")} ${reduced ? "reduced" : ""}`}><span>PRIMITIVE / {mode.toUpperCase()}</span><h3><i>Move</i> with<br />intention.</h3><p>Editorial movement holds the reading order rather than demanding attention.</p><b /><b /><b /></div>;
}

export function EditorialMotion() {
  const { activeComponent, reducedMotion } = useDesign();
  const [mode, setMode] = useState<(typeof motionModes)[number]>("Fade");
  const [run, setRun] = useState(0);
  const [typeRun, setTypeRun] = useState(0);
  const [sequenceRun, setSequenceRun] = useState(0);
  const [columnShift, setColumnShift] = useState(false);
  const [exitState, setExitState] = useState<"ready" | "leaving" | "gone">("ready");
  const [exitRun, setExitRun] = useState(0);
  const replayExit = () => { setExitState("ready"); setExitRun((value) => value + 1); };
  return <div className="editorial-motion" data-component-id={activeComponent}>
    <div className="editorial-kicker">MOTION / READING RHYTHM</div>
    <section className="ed-motion-primitives"><span className="ed-section-label">COMMON VOCABULARY / REPLAYABLE</span><div className="ed-motion-tabs" role="tablist">{motionModes.map((item) => <button key={item} role="tab" aria-selected={mode === item} className={mode === item ? "active" : ""} onClick={() => { setMode(item); setRun((value) => value + 1); }}>{item}</button>)}</div><MotionCanvas mode={mode} run={run} reduced={reducedMotion} /><div className="ed-motion-footer"><p>{reducedMotion ? "Reduced motion holds the final reading state: every layer remains available." : "The study uses opacity and transform with a short, controlled publication cadence."}</p><button onClick={() => setRun((value) => value + 1)}>REPLAY ↻</button></div></section>
    <section className="ed-typesetting-study"><span className="ed-section-label">SIGNATURE / 01 — TYPESETTING REVEAL</span><div key={typeRun} className={`ed-typesetting-canvas ${reducedMotion ? "reduced" : ""}`}><small>ESSAY / 03</small><h3><span>Give each</span><span>line its own</span><span><em>arrival.</em></span></h3><p>Headline lines emerge as if set on a page, held by a precise clipping mask.</p><i /></div><button onClick={() => setTypeRun((value) => value + 1)}>RECOMPOSE HEADLINE ↻</button></section>
    <section className="ed-sequence-study"><span className="ed-section-label">SIGNATURE / 02 — EDITORIAL SEQUENCE</span><div key={sequenceRun} className={`ed-sequence-canvas ${reducedMotion ? "reduced" : ""}`}><small>THE LAC REVIEW / ISSUE 03</small><h3>Order creates<br /><em>attention.</em></h3><p>A headline, metadata, body excerpt and dividing rule enter as one readable argument.</p><i /><b>06 MIN READ · 03.11.26</b></div><button onClick={() => setSequenceRun((value) => value + 1)}>REPLAY SEQUENCE ↻</button></section>
    <section className="ed-column-motion"><span className="ed-section-label">SIGNATURE / 03 — COLUMN TRANSITION</span><div className={`ed-column-canvas ${columnShift ? "shifted" : ""} ${reducedMotion ? "reduced" : ""}`}><article><small>01 / OBSERVE</small><b>The subject holds the first column.</b></article><article><small>02 / ANNOTATE</small><b>A small note changes its position, not its meaning.</b></article><article><small>03 / PAUSE</small><b>Rules keep the reordering legible.</b></article></div><button onClick={() => setColumnShift((value) => !value)} aria-pressed={columnShift}>{columnShift ? "RESET COLUMNS" : "REORDER COLUMNS"} ↔</button></section>
    <section className="ed-exit-study"><span className="ed-section-label">SIGNATURE / 04 — PUBLICATION EXIT &amp; REPLAY</span><div key={exitRun} className={`ed-exit-canvas ${exitState} ${reducedMotion ? "reduced" : ""}`} onAnimationEnd={() => exitState === "leaving" && setExitState("gone")}><small>LAST PAGE / 24</small><h3>A final<br /><em>quiet exit.</em></h3><p>{exitState === "gone" ? "The page has left the reading surface." : "Exit is explicit; replay returns the page to its opening state."}</p></div><div><button disabled={exitState === "leaving"} onClick={() => exitState === "gone" ? replayExit() : setExitState("leaving")}>{exitState === "gone" ? "REPLAY PAGE ↻" : "EXIT PAGE →"}</button><span aria-live="polite">{exitState === "leaving" ? "Page is leaving" : exitState === "gone" ? "Page exited" : "Page ready"}</span></div></section>
  </div>;
}

function EditorialEffectCanvas({ effect, raised, reduced }: { effect: (typeof effectModes)[number]; raised: boolean; reduced: boolean }) {
  const move = (event: PointerEvent<HTMLDivElement>) => { if (reduced) return; const box = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--pointer-x", `${((event.clientX - box.left) / box.width) * 100}%`); event.currentTarget.style.setProperty("--pointer-y", `${((event.clientY - box.top) / box.height) * 100}%`); };
  return <div onPointerMove={move} className={`ed-effects-canvas ${effect.toLowerCase().replaceAll(" ", "-")} ${raised ? "raised" : ""} ${reduced ? "reduced" : ""}`}><span>{effect.toUpperCase()} / INTERACTIVE</span><h3>{effect === "Ink spread" ? <>Ink finds<br /><em>the margin.</em></> : effect === "Rule reveal" ? <>A line makes<br /><em>its point.</em></> : effect === "Type direction" ? <>Direct the<br /><em>reading.</em></> : effect === "Image frame" ? <>Hold the<br /><em>image.</em></> : effect === "Composition shift" ? <>Shift the<br /><em>composition.</em></> : <>Paper holds<br /><em>the trace.</em></>}</h3><p>{reduced ? "A static proof preserves the content and contrast." : "Move through the page or use the control to change the editorial emphasis."}</p><i /><i /><i /></div>;
}

export function EditorialEffects() {
  const { activeComponent, reducedMotion } = useDesign();
  const [effect, setEffect] = useState<(typeof effectModes)[number]>("Ink spread");
  const [raised, setRaised] = useState(false);
  const [spotlight, setSpotlight] = useState("type");
  const [framed, setFramed] = useState(false);
  const [shifted, setShifted] = useState(false);
  return <div className="editorial-effects" data-component-id={activeComponent}>
    <div className="editorial-kicker">EFFECTS / INK, PAPER &amp; COMPOSITION</div>
    <section className="ed-effects-primitives"><span className="ed-section-label">SHARED EFFECT VOCABULARY / PRINT INTERPRETATION</span><div className="ed-effect-tabs" role="tablist">{effectModes.map((item) => <button key={item} role="tab" aria-selected={effect === item} className={effect === item ? "active" : ""} onClick={() => setEffect(item)}>{item}</button>)}</div><EditorialEffectCanvas effect={effect} raised={raised} reduced={reducedMotion} /><div className="ed-motion-footer"><p>{reducedMotion ? "Effects hold a static, high-contrast proof." : "CSS-only effects respond to pointer position without an animation loop."}</p><button onClick={() => setRaised((value) => !value)} aria-pressed={raised}>{raised ? "FLATTEN PROOF" : "CHANGE EMPHASIS"} ↗</button></div></section>
    <section className="ed-ink-study"><span className="ed-section-label">SIGNATURE / 01 — INK SPREAD</span><div className={`ed-ink-field ${reducedMotion ? "reduced" : ""}`} onPointerMove={(event) => { if (reducedMotion) return; const box = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--ink-x", `${((event.clientX - box.left) / box.width) * 100}%`); event.currentTarget.style.setProperty("--ink-y", `${((event.clientY - box.top) / box.height) * 100}%`); }}><small>HOVER / TRACE THE FIELD</small><h3>Ink begins<br />at the <em>edge.</em></h3><p>The spread follows the reader with a restrained printed texture.</p></div></section>
    <section className="ed-rule-study"><span className="ed-section-label">SIGNATURE / 02 — EDITORIAL RULE REVEAL</span><div className="ed-rule-field"><button>INDEX <i /></button><button>ESSAYS <i /></button><button>NOTES <i /></button><button>ARCHIVE <i /></button></div></section>
    <section className="ed-typographic-spotlight"><span className="ed-section-label">SIGNATURE / 03 — TYPOGRAPHIC DIRECTION</span><div className={`ed-type-field focus-${spotlight}`}><p><button onClick={() => setSpotlight("type")}>Type</button> builds the architecture. <button onClick={() => setSpotlight("margin")}>Margins</button> make room for the thought. A <button onClick={() => setSpotlight("caption")}>caption</button> returns the eye to evidence.</p><small>SELECT A WORD TO RECOMPOSE THE READING PATH.</small></div></section>
    <section className="ed-image-frame-study"><span className="ed-section-label">SIGNATURE / 04 — IMAGE FRAME STUDY</span><button className={`ed-image-frame ${framed ? "open" : ""}`} onClick={() => setFramed((value) => !value)} aria-pressed={framed}><span>PLATE / 09</span><i /><b>{framed ? "CLOSE CROPPING" : "OPEN CROPPING"}</b><small>THE IMAGE IS A COMPOSED PIECE OF TYPESETTING.</small></button></section>
    <section className="ed-composition-study"><span className="ed-section-label">SIGNATURE / 05 — COMPOSITION SHIFT</span><div className={`ed-composition-field ${shifted ? "shifted" : ""}`}><article><small>03</small><b>Objects<br />in time.</b></article><p>A controlled composition change keeps content in its frame while giving a new reading emphasis.</p><i /></div><button onClick={() => setShifted((value) => !value)} aria-pressed={shifted}>{shifted ? "RESET COMPOSITION" : "SHIFT COMPOSITION"} ↔</button></section>
  </div>;
}
