"use client";

import { useState } from "react";
import { TactileAccordion, TactileBreadcrumb, TactileCollapsible, TactileContextMenu, TactileDropdown, TactileHoverCard, TactilePopover, TactileSegmented, TactileTabs, TactileTooltip } from "@/design-system/designs/tactile/components/disclosure";

export function TactileDisclosureStudy() {
  const [segment, setSegment] = useState("Surface");
  const [message, setMessage] = useState("Choose a tactile primitive to inspect its behavior.");
  return <div className="tactile-study-gallery">
    <article><span>ACCORDION / MULTI</span><TactileAccordion multiple items={[{ title: "Raised when resting", content: "Each closed item sits gently above the material so it reads as something you can press." }, { title: "Recessed when open", content: "The active surface sinks into the same warm field instead of adding a generic panel." }, { title: "Choose one or many", content: "This study keeps multiple details open for comparison; the component also supports a single-open mode." }]} /></article>
    <article><span>TABS / ARROW KEYS</span><TactileTabs tabs={[{ label: "Surface", content: <p>Warm surfaces guide attention through depth, not contrast alone.</p> }, { label: "Pressure", content: <p>Pressed states become subtly recessed without moving the surrounding layout.</p> }, { label: "Rhythm", content: <p>Soft transitions make changes feel physical while keeping the interface quiet.</p> }]} /></article>
    <article><span>POPOVER + TOOLTIP</span><div className="tactile-inline-tools"><TactilePopover trigger="MATERIAL NOTE"><p>Small supporting content can float above the surface without leaving the local context.</p></TactilePopover><TactileTooltip label="Hover or focus for a concise label"><button className="tactile-mini-control" aria-label="Tooltip example">?</button></TactileTooltip><TactileHoverCard trigger={<button className="tactile-mini-control" aria-label="Hover card example">◌</button>}><b>Surface note</b><p>A richer detail appears on hover or keyboard focus.</p></TactileHoverCard></div><TactileCollapsible title="Show material guidance"><p>Collapsible content keeps a useful explanation close to its trigger while avoiding visual noise.</p></TactileCollapsible></article>
    <article><span>MENU + CONTEXT</span><TactileDropdown onSelect={(value) => setMessage(`${value} selected.`)} /><TactileContextMenu><div className="tactile-context-target">Right-click here, or use Shift + F10.</div></TactileContextMenu><p className="tactile-study-live" aria-live="polite">{message}</p></article>
    <article><span>SEGMENTED + BREADCRUMB</span><TactileSegmented options={["Surface", "Object", "Space"]} value={segment} onChange={setSegment} /><TactileBreadcrumb items={["Lab", "Disclosure", segment]} /></article>
  </div>;
}
