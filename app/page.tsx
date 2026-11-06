"use client";

import { useState } from "react";

const sections = ["Buttons", "Cards", "Navigation", "Accordions", "Motion"];

const experiments = [
  { id: "01", label: "Magnetic", className: "magnetic" },
  { id: "02", label: "Icon slide", className: "icon-slide" },
  { id: "03", label: "Glow", className: "glow" },
];

const projects = [
  { type: "Digital product", title: "A new type of studio site", tag: "Preview", tint: "violet" },
  { type: "Brand & web", title: "Objects made to move", tag: "Concept", tint: "lime" },
  { type: "E-commerce", title: "Quietly confident commerce", tag: "Coming soon", tint: "peach" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("Buttons");
  const [activeButton, setActiveButton] = useState("01");
  const [openItem, setOpenItem] = useState("Why a lab first?");
  const [project, setProject] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [message, setMessage] = useState("Ready to explore.");

  const cycleProject = () => setProject((current) => (current + 1) % projects.length);

  return (
    <main className={reducedMotion ? "site reduce-motion" : "site"}>
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

          <div className="lab-stage">
            <div className="stage-head"><span>BUTTON EXPLORATION / {activeButton}</span><span>{activeSection.toUpperCase()} — ACTIVE</span></div>
            <div className="button-showcase">
              <div className="type-sample"><span>Explore work</span><strong>Explore<br />work</strong></div>
              <button className={`demo-button ${experiments.find((item) => item.id === activeButton)?.className}`} onClick={() => setMessage("A tiny interaction, with a clear destination.")}>
                <span>{activeButton === "02" ? "View project" : "Explore work"}</span><b>↗</b>
              </button>
              <p className="stage-message" aria-live="polite">{message}</p>
            </div>
            <div className="variant-tabs">
              {experiments.map((item) => <button key={item.id} className={activeButton === item.id ? "selected" : ""} onClick={() => { setActiveButton(item.id); setMessage(`${item.label} selected.`); }}><small>{item.id}</small>{item.label}</button>)}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="work section-wrap">
        <div className="section-heading"><p className="eyebrow">SELECTED DIRECTION</p><span>02 — PREVIEW</span></div>
        <div className={`project-card ${projects[project].tint}`}>
          <div className="project-copy"><span>{projects[project].type} · {projects[project].tag}</span><h2>{projects[project].title}</h2><button onClick={cycleProject}>NEXT STUDY <b>→</b></button></div>
          <div className="project-visual" aria-label="Abstract project art">
            <div className="visual-window"><i /><i /><i /></div><div className="visual-disc" /><div className="visual-stamp">LAC<br />{String(project + 1).padStart(2, "0")}</div>
          </div>
        </div>
        <div className="project-progress" aria-label={`Project ${project + 1} of ${projects.length}`}>{projects.map((_, index) => <button key={index} className={index === project ? "current" : ""} onClick={() => setProject(index)} aria-label={`Show project ${index + 1}`} />)}</div>
      </section>

      <section className="principles section-wrap">
        <div><p className="eyebrow">OUR APPROACH</p><h2>Distinctive doesn't<br />need to be difficult.</h2></div>
        <div className="accordion">
          {["Why a lab first?", "What makes an interaction work?", "What reaches production?"].map((item, index) => <div className={openItem === item ? "accordion-item open" : "accordion-item"} key={item}><button onClick={() => setOpenItem(openItem === item ? "" : item)}><span>0{index + 1}</span>{item}<b>{openItem === item ? "−" : "+"}</b></button>{openItem === item && <p>{index === 0 ? "It lets a visual language become a system. Each motion, contrast and detail earns its place before it meets a real project." : index === 1 ? "The best interactions answer a question, reward curiosity, and never slow down the person using them." : "Only the patterns that stay useful, accessible and fast make the transition from experiment to the live site."}</p>}</div>)}
        </div>
      </section>

      <section id="contact" className="contact section-wrap">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>Have a project<br />worth <em>remembering?</em></h2>
        <a href="mailto:hello@lac.studio" className="contact-button">LET'S MAKE IT REAL <span>↗</span></a>
        <footer><span>© 2026 LAC. STUDIO</span><span>BUILT WITH CURIOSITY</span><a href="#top">BACK TO TOP ↑</a></footer>
      </section>
    </main>
  );
}
