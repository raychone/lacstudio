"use client";

import { useEffect, useState, type PointerEvent } from "react";

const sections = ["Color system", "Typography", "Buttons", "Motion", "Animations", "Effect studies"];

const experiments = [
  { id: "01", label: "Magnetic", className: "magnetic" },
  { id: "02", label: "Icon slide", className: "icon-slide" },
  { id: "03", label: "Glow", className: "glow" },
  { id: "04", label: "Morph", className: "morph" },
  { id: "05", label: "Loading", className: "loading" },
  { id: "06", label: "Electric", className: "electric" },
  { id: "07", label: "Ripple", className: "ripple" },
  { id: "08", label: "Flip", className: "flip" },
];

const projects = [
  { type: "Digital product", title: "A new type of studio site", tag: "Preview", tint: "violet" },
  { type: "Brand & web", title: "Objects made to move", tag: "Concept", tint: "lime" },
  { type: "E-commerce", title: "Quietly confident commerce", tag: "Coming soon", tint: "peach" },
];

function TypographyPreview() {
  const [phrase, setPhrase] = useState("MAKE IT");
  const characters = phrase.split("");
  return <div className="type-lab">
    <div className="type-toolbar"><span>TYPE SPECIMEN / VARIABLE RHYTHM</span><button onClick={() => setPhrase(phrase === "MAKE IT" ? "FEEL REAL" : "MAKE IT")}>CHANGE COPY ↻</button></div>
    <div className="split-type" aria-label={phrase}>{characters.map((letter, index) => <span key={`${letter}-${index}`} style={{ animationDelay: `${index * 55}ms` }}>{letter === " " ? " " : letter}</span>)}</div>
    <div className="type-scale"><div className="type-display"><span>H1 / DISPLAY</span><h1>Make the<br /><em>moment</em></h1></div><div className="type-ladder"><h2><small>H2</small>Clear, expressive hierarchy.</h2><h3><small>H3</small>A deliberate supporting voice</h3><h4><small>H4</small>A project with a point of view</h4><h5><small>H5</small>Small details, strong feeling</h5><h6><small>H6</small>Supporting information</h6></div><p><b>P / BODY 16</b> A readable body style that supports the work without competing for attention. The rhythm stays generous on every screen size.</p></div>
    <div className="type-breakpoints"><span>MOBILE <b>≤ 479</b></span><span>TABLET <b>480–767</b></span><span>LAPTOP <b>768–1199</b></span><span>DESKTOP <b>1200–1599</b></span><span>WIDE <b>≥ 1600</b></span></div>
    <div className="type-axis"><span>DISPLAY / 120</span><b>Weight<br />Contrast<br />Speed</b><i>0123456789<br />Aa Bb Cc /&amp;?</i></div>
  </div>;
}

function InputsPreview() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [projectType, setProjectType] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);
  const valid = /^\S+@\S+\.\S+$/.test(email);
  return <form className="inputs-lab" onSubmit={(event) => event.preventDefault()}>
    <label className={email ? "floating-field filled" : "floating-field"}><span>Your email</span><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="hello@studio.com" />{email && <b>{valid ? "✓" : "!"}</b>}</label>
    <div className={selectOpen ? "select-row custom-select open" : "select-row custom-select"}><span>PROJECT TYPE</span><button type="button" className="select-trigger" onClick={() => setSelectOpen(!selectOpen)}>{projectType || "Choose a direction"}<b>⌄</b></button>{selectOpen && <div className="select-options">{["Portfolio & studio", "Digital product", "Brand site"].map((item) => <button type="button" key={item} className={projectType === item ? "selected" : ""} onClick={() => { setProjectType(item); setSelectOpen(false); }}>{item}<i>↗</i></button>)}</div>}</div>
    <label className="message-field"><span>Tell us the shape of it</span><textarea maxLength={160} value={note} onChange={(event) => setNote(event.target.value)} placeholder="A short note is enough…" /><i>{note.length}/160</i></label>
    <button className="input-submit">SEND BRIEF <b>↗</b></button>
  </form>;
}

function OverlaysPreview() {
  const [overlay, setOverlay] = useState<"modal" | "drawer" | "command" | null>(null);
  return <div className="overlays-lab">
    <div className="overlay-canvas"><div className="overlay-actions"><button onClick={() => setOverlay("modal")}>MODAL</button><button onClick={() => setOverlay("drawer")}>DRAWER</button><button onClick={() => setOverlay("command")}>COMMAND <span>⌘K</span></button></div><div className="tooltip-sample">Hover state <i>Built for a specific moment, never just for decoration.</i></div>{overlay && <div className={`overlay-preview ${overlay}`}><button className="overlay-scrim" onClick={() => setOverlay(null)} aria-label="Close overlay" /><div className="overlay-panel"><button className="overlay-close" onClick={() => setOverlay(null)}>×</button>{overlay === "modal" && <><span>NEW CONVERSATION</span><strong>What are we<br />making?</strong><button className="overlay-cta">START HERE ↗</button></>}{overlay === "drawer" && <><span>MENU / 01</span><strong>Index<br />Work<br />About</strong><small>Instagram · Behance · Email</small></>}{overlay === "command" && <><span>JUMP TO…</span><input autoFocus placeholder="Search pages or actions" /><div className="command-option">View selected work <b>↵</b></div><div className="command-option">Start a project <b>↵</b></div></>}</div></div>}</div>
  </div>;
}

function MotionPreview() {
  const [style, setStyle] = useState("Reveal");
  const names = ["Reveal", "Stagger", "Parallax", "Transition", "Scroll", "Orbit"];
  const descriptions: Record<string, string> = { Reveal: "Text arrives with a clear, unhurried entrance.", Stagger: "Sequences lead the eye through grouped information.", Parallax: "Layers create depth while the page progresses.", Transition: "A restrained handoff connects one view to the next.", Scroll: "The rhythm responds to progress through a scene.", Orbit: "A supporting element loops around a central focal point." };
  return <div className="motion-lab"><div className="motion-picker">{names.map((item) => <button key={item} onClick={() => setStyle(item)} className={style === item ? "active" : ""}>{item}</button>)}</div><div className={`motion-playground ${style.toLowerCase()}`} key={style}><span>{style.toUpperCase()} / 640MS</span><div className="motion-word">MOVE</div><div className="motion-word second">WITH</div><div className="motion-word third">INTENT</div><i className="motion-orb" /></div><div className="motion-note"><b>{style}</b><p>{descriptions[style]}</p></div></div>;
}

function AnimationsPreview() {
  const [mode, setMode] = useState("Button in");
  const [replay, setReplay] = useState(0);
  const modes = ["Button in", "Card in", "Badge pop", "Hover lift", "Loading"];
  const descriptions: Record<string, string> = { "Button in": "A single action arrives from depth, then settles into its raised resting state.", "Card in": "A project surface enters laterally, carrying its own visual weight.", "Badge pop": "A small status marker gets attention quickly, then rests without noise.", "Hover lift": "The component stays the same size; only the material shadows make it lift.", Loading: "A quiet waiting state uses rhythm instead of a generic spinner." };
  return <div className="animations-lab"><div className="animation-picker">{modes.map((item) => <button key={item} className={mode === item ? "active" : ""} onClick={() => setMode(item)}>{item}</button>)}</div><div className={`animation-stage ${mode.toLowerCase().replaceAll(" ", "-")}`} key={`${mode}-${replay}`}><span className="animation-stage-label">{mode.toUpperCase()}</span><button className="animated-button">LET&apos;S GO <b>↗</b></button><article className="animated-card"><span>PROJECT / 01</span><strong>Something<br />with pulse</strong><i /></article><div className="animated-badge">NEW</div><div className="loader-dots"><i /><i /><i /></div><div className="loader-track"><i /></div></div><div className="animation-footer"><p className="animation-caption">{descriptions[mode]}</p><button className="animation-replay" onClick={() => setReplay((value) => value + 1)}>REPLAY <b>↻</b></button></div></div>;
}

function CarouselApproved() {
  const [slide, setSlide] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setSlide((current) => (current + 1) % projects.length), 4500); return () => window.clearInterval(timer); }, []);
  return <div className="approved-carousel"><div className="mini-carousel-head"><span>AUTOPLAY / 4.5 SEC</span><span>{String(slide + 1).padStart(2, "0")} / 03</span></div><div className="mini-carousel-window"><div className="mini-carousel-track" style={{ transform: `translateX(-${slide * 100}%)` }}>{projects.map((item, index) => <article className={`mini-slide ${item.tint} ${slide === index ? "active-slide" : ""}`} key={item.title}><span>{item.type}</span><strong>{item.title}</strong><i>0{index + 1}</i></article>)}</div></div><div className="mini-carousel-controls"><button onClick={() => setSlide((slide - 1 + projects.length) % projects.length)}>←</button><div className="carousel-rail"><i style={{ transform: `translateX(${slide * 100}%)` }} />{projects.map((item, index) => <button className={slide === index ? "active" : ""} key={item.title} onClick={() => setSlide(index)}>{index + 1}</button>)}</div><button onClick={() => setSlide((slide + 1) % projects.length)}>→</button></div></div>;
}

function CardsApproved() {
  return <div className="cards-showcase approved-cards"><button className="lab-card primary-card"><span>01 / PROJECT CARD</span><strong>Future<br />objects</strong><i>↗</i><div className="card-shape" /></button><button className="lab-card outline-card"><span>02 / BENTO CARD</span><strong>A place<br />for detail</strong><i>+</i><div className="card-lines"><b /><b /><b /></div></button><button className="lab-card orbit-card"><span>03 / IMMERSIVE CARD</span><strong>Step<br />inside</strong><i>↗</i><div className="orbit-core" /><div className="orbit-ring" /></button><button className="lab-card index-card"><span>04 / INDEX CARD</span><strong>Proof of<br />craft</strong><i>04</i><div className="index-grid"><b /><b /><b /><b /></div></button></div>;
}

function NavigationApproved() {
  const [view, setView] = useState("Index");
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return <div className="navigation-showcase approved-navigation"><div className="nav-demo"><b>LAC.</b><div>{["Index", "Work", "About"].map((item) => <button key={item} className={view === item ? "selected" : ""} onClick={() => setView(item)}>{item}</button>)}</div><button className={megaOpen ? "nav-menu open" : "nav-menu"} onClick={() => setMegaOpen(!megaOpen)}>{megaOpen ? "CLOSE MENU" : "OPEN MEGA"} <span>{megaOpen ? "×" : "↗"}</span></button></div>{megaOpen && <div className="mini-mega"><button className="mega-close" onClick={() => setMegaOpen(false)} aria-label="Close mega menu">×</button><span>CAPABILITIES</span><b>Identity<br />Digital direction<br />Creative development</b><i>Desktop navigation with a large contextual panel.</i><button className="mega-cta" onClick={() => { setMegaOpen(false); setView("Work"); }}>VIEW WORK ↗</button></div>}<div className="nav-detail"><div className="nav-copy"><span>SELECTED VIEW / {view.toUpperCase()}</span><strong>{view === "Index" ? "An introduction, not an obstacle." : view === "Work" ? "Make the work easy to find." : "A studio with a point of view."}</strong><p>Desktop navigation, mega-menu and mobile drawer share a consistent material system.</p></div><div className={mobileOpen ? "mobile-nav-demo open" : "mobile-nav-demo"}><div className="mobile-top"><b>LAC.</b><button onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen}>{mobileOpen ? "CLOSE" : "MENU"}<i>{mobileOpen ? "×" : "☰"}</i></button></div>{mobileOpen && <div className="mobile-drawer"><span>NAVIGATE</span><b>Index<br />Work<br />About</b><i>hello@lac.studio</i></div>}</div></div></div>;
}

function ReadyComponents() {
  const [open, setOpen] = useState("A clear question");
  const questions = ["A clear question", "A considered answer", "A useful next step"];
  return <section id="ready" className="approved section-wrap"><div className="approved-heading"><div><p className="eyebrow">APPROVED COMPONENTS</p><h2>Ready to use,<br /><em>kept apart.</em></h2></div><p>Patterns that have passed the Lab review move here. They remain easy to inspect without competing with experiments still in progress.</p></div><div className="approved-grid"><div className="approved-surface"><div className="approved-label">ACCORDIONS / PRODUCTION READY</div><div className="lab-accordions">{questions.map((item, index) => <div key={item} className={open === item ? "lab-accordion open" : "lab-accordion"}><button onClick={() => setOpen(open === item ? "" : item)}><small>0{index + 1}</small><span>{item}</span><b>{open === item ? "−" : "+"}</b></button>{open === item && <p>{index === 0 ? "A reliable disclosure pattern: raised when closed, pressed into the material when open." : index === 1 ? "The visual state follows the physical metaphor, so the interaction is readable before the copy is." : "This component is now ready to be used in FAQs, services or project details."}</p>}</div>)}</div></div><div className="approved-surface input-surface"><div className="approved-label">INPUTS / PRODUCTION READY</div><InputsPreview /></div><div className="approved-surface navigation-surface"><div className="approved-label">NAVIGATION / PRODUCTION READY</div><NavigationApproved /></div><div className="approved-surface cards-surface"><div className="approved-label">CARDS / PRODUCTION READY</div><CardsApproved /></div><div className="approved-surface carousel-surface"><div className="approved-label">CAROUSELS / PRODUCTION READY</div><CarouselApproved /></div><div className="approved-surface visual-surface"><div className="approved-label">VISUAL EFFECTS / PRODUCTION READY</div><EffectsPreview /></div><div className="approved-surface overlay-surface"><div className="approved-label">OVERLAYS / PRODUCTION READY</div><OverlaysPreview /></div></div></section>;
}

function EffectsPreview() {
  const moveSpotlight = (event: PointerEvent<HTMLDivElement>) => {
    const stage = event.currentTarget;
    const box = stage.getBoundingClientRect();
    stage.style.setProperty("--x", `${event.clientX - box.left}px`);
    stage.style.setProperty("--y", `${event.clientY - box.top}px`);
    const copy = stage.querySelector<HTMLElement>(".effect-copy");
    if (copy) {
      const copyBox = copy.getBoundingClientRect();
      stage.style.setProperty("--copy-x", `${event.clientX - copyBox.left}px`);
      stage.style.setProperty("--copy-y", `${event.clientY - copyBox.top}px`);
    }
  };
  return <div className="effects-lab">
    <div className="effect-study-head"><span>SPOTLIGHT / 01</span><b>Pointer-reactive brush light</b></div>
    <div className="effect-stage spotlight" onPointerMove={moveSpotlight}><span className="effect-copy">Move through light</span><span className="effect-copy effect-copy-lit" aria-hidden="true">Move through light</span><div className="glass-chip">LAC / 2026</div></div>
  </div>;
}

function EffectStudies() {
  const [effect, setEffect] = useState("Aurora haze");
  const effects = ["Aurora haze", "Glass lens", "Soft grid"];
  const descriptions: Record<string, string> = { "Aurora haze": "Slow, diffuse colour fields that make a quiet hero feel alive.", "Glass lens": "A refracted, tactile layer for emphasising a small piece of content.", "Soft grid": "A subtle spatial system that brings depth without visual noise." };
  const moveEffect = (event: PointerEvent<HTMLDivElement>) => { const box = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--px", `${event.clientX - box.left}px`); event.currentTarget.style.setProperty("--py", `${event.clientY - box.top}px`); };
  return <div className="effect-studies"><div className="effect-study-tabs">{effects.map((item) => <button key={item} className={effect === item ? "active" : ""} onClick={() => setEffect(item)}>{item}</button>)}</div><div className={`effect-study-canvas ${effect.toLowerCase().replaceAll(" ", "-")}`} key={effect} onPointerMove={moveEffect}><span>{effect}<i>MOVE POINTER</i></span><b>{effect === "Aurora haze" ? "Slow colour.\nSoft atmosphere." : effect === "Glass lens" ? "Focus a\nmoment." : "Structure\nwith air."}</b><i className="study-orb one" /><i className="study-orb two" /><i className="study-lens" /></div><p>{descriptions[effect]}</p></div>;
}

const palettes = [
  { id: "original", name: "Original LAC", colors: ["#f2efe9", "#151515", "#d7ff3f", "#7967ff"] },
  { id: "cream", name: "Warm cream", colors: ["#e7e3db", "#26313b", "#c5c0b6", "#a3ad82"] },
  { id: "sage", name: "Soft sage", colors: ["#dfe3d7", "#26312b", "#b7c0ae", "#7e9b7a"] },
  { id: "clay", name: "Muted clay", colors: ["#e8ddd4", "#332c29", "#c9b8ac", "#b1846d"] },
  { id: "lilac", name: "Dusty lilac", colors: ["#e5e1e7", "#2d2c34", "#c1bac7", "#9382a0"] },
];

function ColorSystemPreview({ palette, setPalette }: { palette: string; setPalette: (palette: string) => void }) {
  const selected = palettes.find((item) => item.id === palette) ?? palettes[0];
  return <div className="color-lab"><div className="color-intro"><span>FOUNDATION / LIVE THEME</span><strong>Colour is material,<br />not decoration.</strong><p>The warm cream foundation remains the anchor. Select a palette to test its material response across the Lab.</p></div><div className="palette-grid">{palettes.map((item) => <button key={item.id} className={palette === item.id ? "palette-card active" : "palette-card"} onClick={() => setPalette(item.id)}><div>{item.colors.map((color) => <i key={color} style={{ background: color }} />)}</div><span>{item.name}</span><b>{palette === item.id ? "Selected" : "Use palette"}</b></button>)}</div><div className="color-tokens"><span>ACTIVE TOKENS</span>{selected.colors.map((color) => <div key={color}><i style={{ background: color }} /><b>{color.toUpperCase()}</b></div>)}</div></div>;
}

type LabPanelProps = {
  section: string;
  activeButton: string;
  setActiveButton: (value: string) => void;
  message: string;
  setMessage: (value: string) => void;
  navView: string;
  setNavView: (value: string) => void;
  labOpen: string;
  setLabOpen: (value: string) => void;
  carouselSlide: number;
  goToSlide: (index: number) => void;
  previousSlide: () => void;
  nextSlide: () => void;
  palette: string;
  setPalette: (palette: string) => void;
};

function LabPanel({ section, activeButton, setActiveButton, message, setMessage, navView, setNavView, labOpen, setLabOpen, carouselSlide, goToSlide, previousSlide, nextSlide, palette, setPalette }: LabPanelProps) {
  const label = section.toUpperCase();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [carouselPointer, setCarouselPointer] = useState<number | null>(null);
  const [carouselFullscreen, setCarouselFullscreen] = useState(false);
  const activeExperiment = experiments.find((item) => item.id === activeButton);
  const runButton = () => {
    if (activeButton !== "05") { setMessage("A tiny interaction, with a clear destination."); return; }
    setButtonLoading(true);
    window.setTimeout(() => { setButtonLoading(false); setMessage("Ready. Loading can still feel considered."); }, 1100);
  };
  return <div className="lab-stage">
    <div className="stage-head"><span>{label} EXPLORATION</span><span>{label} — ACTIVE</span></div>
    {section === "Color system" && <ColorSystemPreview palette={palette} setPalette={setPalette} />}
    {section === "Typography" && <TypographyPreview />}
    {section === "Buttons" && <>
      <div className="button-showcase">
        <div className="type-sample"><span>Explore work</span><strong>Explore<br />work</strong></div>
        <button className={`demo-button ${activeExperiment?.className} ${buttonLoading ? "is-loading" : ""}`} onClick={runButton}><span>{buttonLoading ? "Loading" : activeButton === "02" ? "View project" : "Explore work"}</span><b>{buttonLoading ? "◌" : "↗"}</b></button>
        <p className="stage-message" aria-live="polite">{message}</p>
      </div>
      <div className="variant-tabs button-variants">{experiments.map((item) => <button key={item.id} className={activeButton === item.id ? "selected" : ""} onClick={() => { setActiveButton(item.id); setMessage(`${item.label} selected.`); }}><small>{item.id}</small>{item.label}</button>)}</div>
      <div className="button-state-board"><span>STATE SYSTEM</span><button>DEFAULT</button><button className="hover-state">HOVER</button><button className="active-state">ACTIVE</button><button className="focus-state">FOCUS</button><button disabled>DISABLED</button></div>
    </>}
    {section === "Cards" && <>
      <div className="cards-showcase">
        <button className="lab-card primary-card" onClick={() => setMessage("Project card: title, category and movement in one gesture.")}><span>01 / PROJECT CARD</span><strong>Future<br />objects</strong><i>↗</i><div className="card-shape" /></button>
        <button className="lab-card outline-card" onClick={() => setMessage("Bento card: designed for scanning and discovery.")}><span>02 / BENTO CARD</span><strong>A place<br />for detail</strong><i>+</i><div className="card-lines"><b /><b /><b /></div></button>
        <button className="lab-card orbit-card" onClick={() => setMessage("Orbit card: a more sculptural direction for featured projects.")}><span>03 / IMMERSIVE CARD</span><strong>Step<br />inside</strong><i>↗</i><div className="orbit-core" /><div className="orbit-ring" /></button>
        <button className="lab-card index-card" onClick={() => setMessage("Index card: a quieter project listing pattern.")}><span>04 / INDEX CARD</span><strong>Proof of<br />craft</strong><i>04</i><div className="index-grid"><b /><b /><b /><b /></div></button>
      </div>
      <p className="stage-message" aria-live="polite">{message}</p>
    </>}
    {section === "Navigation" && <>
      <div className="navigation-showcase">
        <div className="nav-demo"><b>LAC.</b><div>{["Index", "Work", "About"].map((item) => <button key={item} className={navView === item ? "selected" : ""} onClick={() => setNavView(item)}>{item}</button>)}</div><button className={menuOpen ? "nav-menu open" : "nav-menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "CLOSE MENU" : "OPEN MEGA"} <span>{menuOpen ? "×" : "↗"}</span></button></div>
        {menuOpen && <div className="mini-mega"><button className="mega-close" onClick={() => setMenuOpen(false)} aria-label="Close mega menu">×</button><span>CAPABILITIES</span><b>Identity<br />Digital direction<br />Creative development</b><i>Desktop navigation with a large contextual panel.</i><button className="mega-cta" onClick={() => { setMenuOpen(false); setNavView("Work"); }}>VIEW WORK ↗</button></div>}
        <div className="nav-detail"><div className="nav-copy"><span>SELECTED VIEW / {navView.toUpperCase()}</span><strong>{navView === "Index" ? "An introduction, not an obstacle." : navView === "Work" ? "Make the work easy to find." : "A studio with a point of view."}</strong><p>Try the links above: the selected state changes independently from the main site navigation.</p></div><div className={mobileNavOpen ? "mobile-nav-demo open" : "mobile-nav-demo"}><div className="mobile-top"><b>LAC.</b><button onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-expanded={mobileNavOpen}>{mobileNavOpen ? "CLOSE" : "MENU"}<i>{mobileNavOpen ? "×" : "☰"}</i></button></div>{mobileNavOpen && <div className="mobile-drawer"><span>NAVIGATE</span><b>Index<br />Work<br />About</b><i>hello@lac.studio</i></div>}</div></div>
      </div>
      <p className="stage-message" aria-live="polite">{message}</p>
    </>}
    {section === "Accordions" && <>
      <div className="lab-accordions">{["A clear question", "A considered answer", "A useful next step"].map((item, index) => <div key={item} className={labOpen === item ? "lab-accordion open" : "lab-accordion"}><button onClick={() => setLabOpen(labOpen === item ? "" : item)}><small>0{index + 1}</small><span>{item}</span><b>{labOpen === item ? "−" : "+"}</b></button>{labOpen === item && <p>{index === 0 ? "Accordions are ideal when a visitor wants detail on their own terms." : index === 1 ? "The reveal is deliberate, with a generous pace and a visible close control." : "Every expanded state should point toward a meaningful action or decision."}</p>}</div>)}</div>
      <p className="stage-message" aria-live="polite">Click a row to test the open state.</p>
    </>}
    {section === "Carousels" && <>
      <div className="mini-carousel">
        <div className="mini-carousel-head"><span>AUTOPLAY / 4.5 SEC</span><button onClick={() => setCarouselFullscreen(true)}>FULL SCREEN ↗</button><span>{String(carouselSlide + 1).padStart(2, "0")} / 03</span></div>
        <div className="mini-carousel-window" onPointerDown={(event) => setCarouselPointer(event.clientX)} onPointerUp={(event) => { if (carouselPointer === null) return; if (event.clientX - carouselPointer > 38) previousSlide(); if (carouselPointer - event.clientX > 38) nextSlide(); setCarouselPointer(null); }}><div className="mini-carousel-track" style={{ transform: `translateX(-${carouselSlide * 100}%)` }}>{projects.map((item, index) => <article className={`mini-slide ${item.tint} ${carouselSlide === index ? "active-slide" : ""}`} key={item.title}><span>{item.type}</span><strong>{item.title}</strong><i>0{index + 1}</i></article>)}</div></div>
        <div className="mini-carousel-controls"><button onClick={previousSlide} aria-label="Previous carousel slide">←</button><div className="carousel-rail" aria-label={`Slide ${carouselSlide + 1} of ${projects.length}`}><i style={{ transform: `translateX(${carouselSlide * 100}%)` }} />{projects.map((item, index) => <button key={item.title} className={carouselSlide === index ? "active" : ""} onClick={() => goToSlide(index)}>{index + 1}</button>)}</div><button onClick={nextSlide} aria-label="Next carousel slide">→</button></div>
      </div>
      {carouselFullscreen && <div className="carousel-fullscreen"><button onClick={() => setCarouselFullscreen(false)} aria-label="Close fullscreen carousel">×</button><article className={`mini-slide ${projects[carouselSlide].tint}`}><span>FULLSCREEN / {projects[carouselSlide].type}</span><strong>{projects[carouselSlide].title}</strong><i>{String(carouselSlide + 1).padStart(2, "0")}</i></article><div><button onClick={previousSlide}>←</button><button onClick={nextSlide}>→</button></div></div>}
      <p className="stage-message">Auto-advance · drag/snap ready · loop · full-screen trigger.</p>
    </>}
    {section === "Inputs" && <InputsPreview />}
    {section === "Motion" && <MotionPreview />}
    {section === "Animations" && <AnimationsPreview />}
    {section === "Overlays" && <OverlaysPreview />}
    {section === "Effect studies" && <EffectStudies />}
  </div>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("Buttons");
  const [activeButton, setActiveButton] = useState("01");
  const [openItem, setOpenItem] = useState("Why a lab first?");
  const [project, setProject] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [message, setMessage] = useState("Ready to explore.");
  const [navView, setNavView] = useState("Index");
  const [labOpen, setLabOpen] = useState("A clear question");
  const [carouselSlide, setCarouselSlide] = useState(0);
  const [workPaused, setWorkPaused] = useState(false);
  const [palette, setPalette] = useState("cream");

  const cycleProject = () => setProject((current) => (current + 1) % projects.length);
  const previousProject = () => setProject((current) => (current - 1 + projects.length) % projects.length);
  const nextCarouselSlide = () => setCarouselSlide((current) => (current + 1) % projects.length);
  const previousCarouselSlide = () => setCarouselSlide((current) => (current - 1 + projects.length) % projects.length);

  useEffect(() => {
    if (reducedMotion || workPaused) return;
    const timer = window.setInterval(cycleProject, 4500);
    return () => window.clearInterval(timer);
  }, [reducedMotion, workPaused]);

  useEffect(() => {
    if (reducedMotion || activeSection !== "Carousels") return;
    const timer = window.setInterval(nextCarouselSlide, 4500);
    return () => window.clearInterval(timer);
  }, [activeSection, reducedMotion]);

  return (
    <main className={reducedMotion ? `site neumorphic palette-${palette} reduce-motion` : `site neumorphic palette-${palette}`}>
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#top" aria-label="LAC Studio home">
          <span className="brand-mark">LAC.</span><span>STUDIO</span>
        </a>
        <div className="header-center"><span className="live-dot" /> INTERACTIVE DESIGN SYSTEM</div>
        <nav className="top-links" aria-label="Primary navigation">
          <a href="#work">WORK</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section id="top" className="hero section-wrap">
        <div className="hero-meta"><span>01 — LAC / LAB</span><span>Preview v0.1</span></div>
        <div className="hero-main">
          <p className="eyebrow">Creative development studio</p>
          <h1>Designing the <em>unexpected,</em><br />making it feel inevitable.</h1>
          <div className="hero-foot">
            <p>Independent digital experiences for people and brands with something meaningful to say.</p>
            <a className="arrow-link" href="#lab">ENTER THE LAB <span>↘</span></a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true"><span>L</span><span>A</span><span>C</span><i /></div>
      </section>

      <section id="lab" className="lab-shell">
        <div className="lab-top">
          <div><p className="eyebrow">LAC / LAB</p><h2>Build the feeling<br />before the page.</h2></div>
          <div className="lab-note">A growing shelf of interaction patterns: tested in public, refined for real projects.</div>
        </div>
        <div className="lab-layout">
          <aside className="lab-nav" aria-label="Lab categories">
            <span className="nav-label">COMPONENTS</span>
            {sections.map((section, index) => <button key={section} onClick={() => setActiveSection(section)} className={activeSection === section ? "active" : ""}><small>0{index + 1}</small>{section}</button>)}
            <div className="motion-toggle">
              <span>REDUCE MOTION</span>
              <button onClick={() => setReducedMotion(!reducedMotion)} className={reducedMotion ? "switch on" : "switch"} aria-pressed={reducedMotion}><i /></button>
            </div>
          </aside>

          <LabPanel section={activeSection} activeButton={activeButton} setActiveButton={setActiveButton} message={message} setMessage={setMessage} navView={navView} setNavView={setNavView} labOpen={labOpen} setLabOpen={setLabOpen} carouselSlide={carouselSlide} goToSlide={setCarouselSlide} previousSlide={previousCarouselSlide} nextSlide={nextCarouselSlide} palette={palette} setPalette={setPalette} />
        </div>
      </section>

      <ReadyComponents />

      <section id="work" className="work section-wrap">
        <div className="section-heading"><p className="eyebrow">SELECTED DIRECTION</p><span>02 — PREVIEW</span></div>
        <div key={project} className={`project-card carousel-enter ${projects[project].tint}`} onMouseEnter={() => setWorkPaused(true)} onMouseLeave={() => setWorkPaused(false)} onFocus={() => setWorkPaused(true)} onBlur={() => setWorkPaused(false)}>
          <div className="project-copy"><span>{projects[project].type} · {projects[project].tag}</span><h2>{projects[project].title}</h2><button onClick={cycleProject}>NEXT STUDY <b>→</b></button></div>
          <div className="project-visual" aria-label="Abstract project art">
            <div className="visual-window"><i /><i /><i /></div><div className="visual-disc" /><div className="visual-stamp">LAC<br />{String(project + 1).padStart(2, "0")}</div>
          </div>
        </div>
        <div className="project-carousel-bar"><div className="project-progress" aria-label={`Project ${project + 1} of ${projects.length}`}>{projects.map((_, index) => <button key={index} className={index === project ? "current" : ""} onClick={() => setProject(index)} aria-label={`Show project ${index + 1}`} />)}</div><div className="work-carousel-controls"><span>{workPaused ? "PAUSED" : "AUTOPLAY ON"}</span><button onClick={previousProject} aria-label="Previous project">←</button><button onClick={cycleProject} aria-label="Next project">→</button></div></div>
      </section>

      <section className="principles section-wrap">
        <div><p className="eyebrow">OUR APPROACH</p><h2>Distinctive doesn&apos;t<br />need to be difficult.</h2></div>
        <div className="accordion">
          {["Why a lab first?", "What makes an interaction work?", "What reaches production?"].map((item, index) => <div className={openItem === item ? "accordion-item open" : "accordion-item"} key={item}><button onClick={() => setOpenItem(openItem === item ? "" : item)}><span>0{index + 1}</span>{item}<b>{openItem === item ? "−" : "+"}</b></button>{openItem === item && <p>{index === 0 ? "It lets a visual language become a system. Each motion, contrast and detail earns its place before it meets a real project." : index === 1 ? "The best interactions answer a question, reward curiosity, and never slow down the person using them." : "Only the patterns that stay useful, accessible and fast make the transition from experiment to the live site."}</p>}</div>)}
        </div>
      </section>

      <section id="contact" className="contact section-wrap">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>Have a project<br />worth <em>remembering?</em></h2>
        <a href="mailto:hello@lac.studio" className="contact-button">LET&apos;S MAKE IT REAL <span>↗</span></a>
        <footer><span>© 2026 LAC. STUDIO</span><span>BUILT WITH CURIOSITY</span><a href="#top">BACK TO TOP ↑</a></footer>
      </section>
    </main>
  );
}
