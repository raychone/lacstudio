"use client";

import { useState } from "react";
import { DesignSwitcher } from "@/components/lab/design-switcher";

const studies = ["Foundations", "Typography", "Actions", "Motion", "Effects"] as const;
type Study = (typeof studies)[number];

function NocturneFoundations() {
  return <div className="nocturne-foundations">
    <div className="nocturne-swatch nocturne-swatch-night"><span>01</span><b>Night<br />field</b><i>#070A14</i></div>
    <div className="nocturne-swatch nocturne-swatch-glass"><span>02</span><b>Glass<br />plane</b><i>14% LIGHT</i></div>
    <div className="nocturne-swatch nocturne-swatch-signal"><span>03</span><b>Signal<br />violet</b><i>#B8AEFF</i></div>
    <div className="nocturne-foundation-note"><span>MATERIAL STUDY</span><strong>Darkness is a<br />place for light.</strong><p>Depth comes from layered transparency, a fine edge and controlled reflection—not from a darker copy of Tactile.</p></div>
  </div>;
}

function NocturneTypography() {
  return <div className="nocturne-type-study">
    <div className="nocturne-type-meta"><span>TYPE / NOCTURNE</span><span>01—06 / OPTICAL SCALE</span></div>
    <div className="nocturne-type-word">AFTER<span>LIGHT</span></div>
    <div className="nocturne-type-rhythm"><b>01 / DISPLAY</b><strong>Unhurried<br />and luminous.</strong><p>Light weight display faces meet compact mono labels and a deliberately open reading rhythm.</p></div>
    <div className="nocturne-type-levels"><span>H1 / 92</span><span>H2 / 48</span><span>H3 / 26</span><span>BODY / 15</span></div>
  </div>;
}

function NocturneActions() {
  const [mode, setMode] = useState<"still" | "signal" | "sweep">("still");
  const [feedback, setFeedback] = useState("Awaiting a signal.");
  return <div className="nocturne-actions-study">
    <div className="nocturne-action-orbit" aria-hidden="true"><i /><i /><i /></div>
    <div className="nocturne-action-copy"><span>INTERACTION / 01</span><strong>A response,<br />not a bounce.</strong><p>Hover pulls a thin edge of light across the action; press settles the surface into the scene.</p></div>
    <button className={`nocturne-primary-action ${mode}`} onClick={() => { setMode(mode === "signal" ? "sweep" : "signal"); setFeedback("Signal received. The action changes state without borrowing Tactile’s elevation."); }}>
      <span>INITIATE SEQUENCE</span><b>↗</b>
    </button>
    <div className="nocturne-action-controls" aria-label="Nocturne action variations">
      {(["still", "signal", "sweep"] as const).map((item) => <button key={item} className={mode === item ? "active" : ""} onClick={() => setMode(item)}>{item}</button>)}
    </div>
    <p className="nocturne-live" aria-live="polite">{feedback}</p>
  </div>;
}

function NocturneMotion({ reduced }: { reduced: boolean }) {
  const [replay, setReplay] = useState(0);
  return <div className={reduced ? "nocturne-motion-study reduced" : "nocturne-motion-study"}>
    <div className="nocturne-motion-head"><span>CINEMATIC TRANSITION</span><button onClick={() => setReplay((value) => value + 1)}>REPLAY / 680MS ↻</button></div>
    <div className="nocturne-motion-frame" key={replay}><i /><i /><b>ARRIVE<br />IN LAYERS</b><span>opacity · blur · depth</span></div>
    <p>{reduced ? "Reduced motion replaces the layered entrance with an immediate, stable state." : "Surfaces arrive in depth, with a short atmospheric delay instead of a spring lift."}</p>
  </div>;
}

function NocturneEffects() {
  const [light, setLight] = useState(false);
  return <div className={light ? "nocturne-effects-study active" : "nocturne-effects-study"}>
    <div className="nocturne-effects-glow" aria-hidden="true" /><div className="nocturne-effects-grid" aria-hidden="true" />
    <div><span>ATMOSPHERIC LIGHT / 02</span><strong>Hold the<br />darkness.</strong><p>A slow glass refraction replaces cursor spectacle. It rests when you leave it alone.</p><button onClick={() => setLight(!light)}>{light ? "DIM THE FIELD" : "RAISE THE FIELD"} <b>↗</b></button></div>
  </div>;
}

function NocturneControls() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState("signal");
  const [overlay, setOverlay] = useState(false);
  return <section className="nocturne-controls" aria-labelledby="nocturne-controls-title">
    <div className="nocturne-section-head"><span>CORE COMPONENT STUDIES</span><h2 id="nocturne-controls-title">Same intent.<br /><em>Different world.</em></h2></div>
    <div className="nocturne-controls-grid">
      <article className="nocturne-glass-card nocturne-card-study"><span>CARDS / EDGE LIGHT</span><strong>Scenes,<br />not tiles.</strong><p>Cards frame a layered scene and travel along their light edge on hover.</p><button>OPEN SCENE <b>↗</b></button><i className="nocturne-card-halo" /></article>
      <article className="nocturne-glass-card nocturne-field-study"><span>INPUTS / SIGNAL FIELD</span><label><small>TRANSMISSION ADDRESS</small><input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@studio.com" type="email" /></label><button className="nocturne-send" disabled={!email}>SEND SIGNAL <b>↗</b></button></article>
      <article className="nocturne-glass-card nocturne-accordion-study"><span>ACCORDION / FREQUENCY</span>{[["signal", "Signal found", "A thin bright line expands into readable detail."], ["depth", "Depth, without weight", "Layered borders give the panel presence without material bulk."], ["rest", "A measured rest", "Open panels reveal; they do not sink into a tactile surface."]].map(([id, title, copy]) => <div className={open === id ? "nocturne-disclosure open" : "nocturne-disclosure"} key={id}><button aria-expanded={open === id} onClick={() => setOpen(open === id ? "" : id)}><small>0{["signal", "depth", "rest"].indexOf(id) + 1}</small><b>{title}</b><i>{open === id ? "−" : "+"}</i></button>{open === id && <p>{copy}</p>}</div>)}</article>
      <article className="nocturne-glass-card nocturne-overlay-study"><span>OVERLAY / ORBITAL DIALOG</span><strong>A focused<br />transmission.</strong><p>The dialog is a framed light field, not a raised cream panel.</p><button onClick={() => setOverlay(true)}>OPEN DIALOG <b>↗</b></button>{overlay && <div className="nocturne-dialog" role="dialog" aria-modal="true" aria-labelledby="nocturne-dialog-title"><button className="nocturne-dialog-backdrop" onClick={() => setOverlay(false)} aria-label="Close dialog" /><div className="nocturne-dialog-panel"><button onClick={() => setOverlay(false)} aria-label="Close dialog">×</button><span>ORBITAL DIALOG / 01</span><strong id="nocturne-dialog-title">What enters<br />the frame?</strong><p>One focused decision, held in a luminous boundary.</p><a href="#nocturne-top" onClick={() => setOverlay(false)}>RETURN TO FIELD ↗</a></div></div>}</article>
    </div>
  </section>;
}

function NocturnePanel({ study, reduced }: { study: Study; reduced: boolean }) {
  if (study === "Foundations") return <NocturneFoundations />;
  if (study === "Typography") return <NocturneTypography />;
  if (study === "Actions") return <NocturneActions />;
  if (study === "Motion") return <NocturneMotion reduced={reduced} />;
  return <NocturneEffects />;
}

export function NocturneLab() {
  const [study, setStudy] = useState<Study>("Foundations");
  const [reduced, setReduced] = useState(false);
  return <main id="nocturne-top" className={reduced ? "nocturne-lab reduce-motion" : "nocturne-lab"} data-design="nocturne">
    <div className="nocturne-atmosphere" aria-hidden="true" />
    <header className="nocturne-masthead"><a href="#nocturne-top" aria-label="Nocturne Design Lab home"><b>LAC.</b><span>NOCTURNE / 02</span></a><span>COMPONENT CINEMA</span><button onClick={() => setReduced(!reduced)} aria-pressed={reduced}>{reduced ? "MOTION / OFF" : "MOTION / ON"}<i /></button></header>
    <section className="nocturne-intro"><p>DESIGN SYSTEM 02 / IN DEVELOPMENT</p><h1>Every surface<br />has an <em>afterglow.</em></h1><div><span>NOCTURNE</span><p>A separate component language for scenes that need depth, restraint and a trace of light.</p></div></section>
    <section className="nocturne-engine"><DesignSwitcher /></section>
    <section className="nocturne-explorer" aria-labelledby="nocturne-explorer-title"><aside><span>STUDIES</span>{studies.map((item, index) => <button key={item} className={study === item ? "active" : ""} onClick={() => setStudy(item)}><small>0{index + 1}</small>{item}</button>)}<p>Components inherit behavior, not the visual rules of Tactile.</p></aside><div className="nocturne-stage"><div className="nocturne-stage-head"><span>NOCTURNE / {study.toUpperCase()}</span><span>PREVIEW 01</span></div><h2 id="nocturne-explorer-title">{study === "Foundations" ? "Set the scene." : study === "Typography" ? "Let type breathe." : study === "Actions" ? "Send a signal." : study === "Motion" ? "Move through depth." : "Shape the atmosphere."}</h2><NocturnePanel study={study} reduced={reduced} /></div></section>
    <NocturneControls />
    <footer className="nocturne-footer"><span>LAC. / SYSTEM 02</span><span>NOCTURNE IS IN DEVELOPMENT</span><a href="#nocturne-top">RETURN TO TOP ↑</a></footer>
  </main>;
}
