"use client";

import { useDesign } from "@/design-system/engine/provider";
import { showcaseFor } from "@/design-system/showcase/schema";

export function SharedShowcase() {
  const { activeCategory, activeComponent, activeDesign, setActiveComponent } = useDesign();
  const showcase = showcaseFor(activeCategory);
  if (!showcase) return null;
  const selected = activeComponent.startsWith("action.") ? activeComponent.slice("action.".length) : "primary";
  return <section className={`shared-showcase ${activeDesign.id}`} data-component-id={showcase.componentId} aria-labelledby="showcase-title">
    <div className="shared-showcase-head"><div><span>COMMON REFERENCE / {showcase.size.toUpperCase()}</span><h2 id="showcase-title">{showcase.title}</h2></div><p>{showcase.description}</p></div>
    {activeCategory === "foundations" && <div className="showcase-foundations"><div><span>Canvas</span><i /><b>Surface / 01</b></div><div><span>Raised</span><i /><b>Surface / 02</b></div><div><span>Recessed</span><i /><b>Surface / 03</b></div><div><span>Accent</span><i /><b>Signal</b></div><div><span>Ink</span><i /><b>Text / primary</b></div><div><span>Radius + spacing</span><i /><b>16 px · 24 px</b></div></div>}
    {activeCategory === "typography" && <div className="showcase-type"><span className="showcase-display">The work should<br />feel inevitable.</span><div className="showcase-type-grid"><h1>H1 / Make it clear</h1><h2>H2 / Give it room</h2><h3>H3 / A considered detail</h3><h4>H4 / Supporting structure</h4><h5>H5 / Quiet hierarchy</h5><h6>H6 / Useful context</h6><p><b>Body / 16</b> A shared specimen sentence lets typography remain comparable without making its voice identical.</p><small>CAPTION / Label 0123456789</small></div></div>}
    {activeCategory === "actions" && <><div className="showcase-actions">{showcase.variants?.map((variant) => <button key={variant.id} className={selected === variant.id ? `active ${variant.id}` : variant.id} aria-pressed={selected === variant.id} onClick={() => setActiveComponent(`action.${variant.id}`)}>{variant.label === "Primary" ? "Explore work ↗" : variant.label === "Secondary" ? "View project" : variant.label === "Destructive" ? "Remove draft" : variant.label}</button>)}<button className="icon" aria-label="Open reference action">↗</button><button className="loading" aria-busy="true">Loading <i>◌</i></button><button disabled>Disabled</button></div><div className="showcase-state-row"><span>CONTROL / {selected.toUpperCase()}</span><span>SIZE / MD 42PX</span><span>FOCUS / BRAND TOKEN</span></div></>}
    {activeCategory === "forms" && <form className="showcase-form" onSubmit={(event) => event.preventDefault()}><label>NAME<input placeholder="Alex Morgan" /></label><label>EMAIL<input type="email" placeholder="alex@studio.com" /></label><label>PASSWORD<input type="password" placeholder="••••••••" /></label><label>PROJECT TYPE<select defaultValue=""><option value="" disabled>Choose a direction</option><option>Identity system</option><option>Digital product</option></select></label><label className="wide">MESSAGE<textarea placeholder="Tell us the shape of the work…" defaultValue="" /></label><label className="check"><input type="checkbox" /> Send occasional Lab updates</label><label className="check"><input type="checkbox" disabled /> Disabled option</label><small className="validation">Validation example: enter a valid email address.</small><button type="submit">Send brief ↗</button></form>}
  </section>;
}
