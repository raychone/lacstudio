"use client";

import { useState, type PointerEvent } from "react";
import { DesignSwitcher } from "@/components/lab/design-switcher";
import { NocturneButton, NocturneCopyButton, NocturneHoldButton, NocturneIconButton, NocturneSplitButton, NocturneToggle } from "@/design-system/designs/nocturne/components/actions";
import { NocturneCheck, NocturneField, NocturneInput, NocturneSelect, NocturneSwitch, NocturneTextarea } from "@/design-system/designs/nocturne/components/forms";
import { NocturneDisclosureStudy, NocturneFeedbackStudy } from "@/components/lab/nocturne/nocturne-batch-two";

const studies = ["Foundations", "Typography", "Actions", "Forms", "Disclosure", "Feedback", "Motion", "Effects"] as const;
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
  const [loading, setLoading] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [feedback, setFeedback] = useState("Choose an action to inspect its signal.");
  const transmit = () => { setLoading(true); setFeedback("Transmission in progress."); window.setTimeout(() => { setLoading(false); setFeedback("Transmission complete. The button returns to its resting light state."); }, 900); };
  return <div className="nocturne-actions-study nocturne-actions-library">
    <div className="nocturne-action-orbit" aria-hidden="true"><i /><i /><i /></div>
    <div className="nocturne-action-copy"><span>ACTIONS / CORE RECIPES</span><strong>Light follows<br />intent.</strong><p>Every variant has a distinct job: signal, supporting action, quiet utility, caution, or irreversible confirmation.</p></div>
    <div className="nocturne-action-grid">
      <NocturneButton loading={loading} onClick={transmit} icon="↗">TRANSMIT</NocturneButton><NocturneButton variant="secondary" onClick={() => setFeedback("Secondary action selected.")} icon="→">SECONDARY</NocturneButton><NocturneButton variant="ghost" onClick={() => setFeedback("Ghost action selected.")}>GHOST ACTION</NocturneButton><NocturneButton variant="outline" onClick={() => setFeedback("Outline action selected.")}>OUTLINE</NocturneButton><NocturneButton variant="luminous" onClick={() => setFeedback("Luminous edge activated.")}>LUMINOUS EDGE</NocturneButton><NocturneButton variant="destructive" onClick={() => setFeedback("Destructive action requires a separate confirmation flow.")}>DESTRUCTIVE</NocturneButton><NocturneIconButton label="Open signal map" onClick={() => setFeedback("Icon action selected.")}>⌁</NocturneIconButton><NocturneToggle pressed={pressed} onPressedChange={setPressed}>ORBIT MODE</NocturneToggle><NocturneSplitButton onPrimary={() => setFeedback("Primary channel opened.")} /><NocturneCopyButton value="--nocturne-signal: #b8aeff" /><NocturneHoldButton onConfirm={() => setFeedback("Hold confirmed. A deliberate action completed.")} /><NocturneButton disabled>DISABLED</NocturneButton>
    </div>
    <p className="nocturne-live" aria-live="polite">{feedback}</p>
  </div>;
}

function NocturneForms() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remember, setRemember] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [channel, setChannel] = useState("identity");
  const validEmail = /^\S+@\S+\.\S+$/.test(email);
  return <div className="nocturne-forms-study">
    <div className="nocturne-form-intro"><span>FORMS / SIGNAL FIELDS</span><strong>Clarity, held<br />in a quiet line.</strong><p>Labels remain visible, validation is explicit and the focus state illuminates only the active field.</p></div>
    <form className="nocturne-form-grid" onSubmit={(event) => event.preventDefault()}>
      <NocturneField label="CONTACT ADDRESS" status={email && !validEmail ? "error" : validEmail ? "success" : "default"} hint={email ? validEmail ? "Signal address verified" : "Enter a valid email address" : "We only use this to answer your brief."}><NocturneInput type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@studio.com" /></NocturneField>
      <NocturneField label="CHANNEL TYPE"><NocturneSelect value={channel} onChange={setChannel} label="Channel type" options={[{ value: "identity", label: "Identity system" }, { value: "product", label: "Digital product" }, { value: "experience", label: "Interactive experience" }]} /></NocturneField>
      <NocturneField label="PRIVATE KEY"><span className="nocturne-password-row"><NocturneInput type={passwordVisible ? "text" : "password"} placeholder="••••••••" /><button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? "HIDE" : "SHOW"}</button></span></NocturneField>
      <NocturneField label="SHORT TRANSMISSION"><NocturneTextarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="Tell us the shape of the work…" maxLength={180} /><small>{note.length}/180</small></NocturneField>
      <div className="nocturne-form-options"><NocturneCheck checked={remember} onChange={setRemember}>Remember this device</NocturneCheck><NocturneSwitch checked={notifications} onChange={setNotifications} label="Signal updates" /></div>
      <div className="nocturne-form-submit"><NocturneButton type="submit" icon="↗">SEND TRANSMISSION</NocturneButton><NocturneButton type="button" variant="ghost" disabled>UNAVAILABLE</NocturneButton></div>
    </form>
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
  const moveLight = (event: PointerEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--light-x", `${((event.clientX - box.left) / box.width) * 100}%`);
    event.currentTarget.style.setProperty("--light-y", `${((event.clientY - box.top) / box.height) * 100}%`);
  };
  return <div className={light ? "nocturne-effects-study active" : "nocturne-effects-study"} onPointerMove={moveLight} onPointerLeave={(event) => { event.currentTarget.style.setProperty("--light-x", "74%"); event.currentTarget.style.setProperty("--light-y", "35%"); }}>
    <div className="nocturne-effects-glow" aria-hidden="true" /><div className="nocturne-effects-grid" aria-hidden="true" />
    <div><span>ATMOSPHERIC LIGHT / 02</span><strong>Hold the<br />darkness.</strong><p>Move through the field to shift the refraction. Raise it to increase the luminous depth.</p><button onClick={() => setLight(!light)}>{light ? "DIM THE FIELD" : "RAISE THE FIELD"} <b>↗</b></button></div>
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
  if (study === "Forms") return <NocturneForms />;
  if (study === "Disclosure") return <NocturneDisclosureStudy />;
  if (study === "Feedback") return <NocturneFeedbackStudy />;
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
    <section className="nocturne-explorer" aria-labelledby="nocturne-explorer-title"><aside><span>STUDIES</span>{studies.map((item, index) => <button key={item} className={study === item ? "active" : ""} onClick={() => setStudy(item)}><small>{String(index + 1).padStart(2, "0")}</small>{item}</button>)}<p>Components inherit behavior, not the visual rules of Tactile.</p></aside><div className="nocturne-stage"><div className="nocturne-stage-head"><span>NOCTURNE / {study.toUpperCase()}</span><span>PREVIEW 01</span></div><h2 id="nocturne-explorer-title">{study === "Foundations" ? "Set the scene." : study === "Typography" ? "Let type breathe." : study === "Actions" ? "Send a signal." : study === "Forms" ? "Make intent legible." : study === "Disclosure" ? "Reveal with purpose." : study === "Feedback" ? "Make state visible." : study === "Motion" ? "Move through depth." : "Shape the atmosphere."}</h2><NocturnePanel study={study} reduced={reduced} /></div></section>
    <NocturneControls />
    <footer className="nocturne-footer"><span>LAC. / SYSTEM 02</span><span>NOCTURNE IS IN DEVELOPMENT</span><a href="#nocturne-top">RETURN TO TOP ↑</a></footer>
  </main>;
}
