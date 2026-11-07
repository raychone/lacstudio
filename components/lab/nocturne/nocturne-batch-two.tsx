"use client";

import { useState } from "react";
import { NocturneAccordion, NocturneBreadcrumb, NocturneCollapsible, NocturneContextMenu, NocturneDropdown, NocturnePopover, NocturneSegmented, NocturneTabs, NocturneTooltip } from "@/design-system/designs/nocturne/components/disclosure";
import { NocturneAlert, NocturneBadge, NocturneCircularProgress, NocturneProgress, NocturneSkeleton, NocturneSpinner, NocturneState, NocturneSteps, NocturneToast, type NocturneTone } from "@/design-system/designs/nocturne/components/feedback";
import { NocturneButton } from "@/design-system/designs/nocturne/components/actions";

export function NocturneDisclosureStudy() {
  const [segment, setSegment] = useState("Signal"); const [message, setMessage] = useState("Choose a primitive to inspect its behavior.");
  return <div className="nocturne-study-gallery">
    <article><span>ACCORDION / MULTI</span><NocturneAccordion multiple items={[{ title: "Layered information", content: "Multiple channels can remain open when comparison matters." }, { title: "Single focus", content: "Use the default single-open mode when attention needs a sequence." }, { title: "Keyboard reachable", content: "Every disclosure is a native button with expanded state." }]} /></article>
    <article><span>TABS / ARROW KEYS</span><NocturneTabs tabs={[{ label: "Frame", content: <p>Structural details remain quiet until selected.</p> }, { label: "Light", content: <p>Light is a directional cue, not decoration.</p> }, { label: "Motion", content: <p>Motion connects related states with restraint.</p> }]} /></article>
    <article><span>POPOVER + TOOLTIP</span><div className="nocturne-inline-tools"><NocturnePopover trigger="READ NOTE">A transient glass layer for supporting decisions.</NocturnePopover><NocturneTooltip label="Shows on hover or keyboard focus"><button className="nocturne-mini-control">?</button></NocturneTooltip></div><NocturneCollapsible title="Show implementation note"><p>Use collapsible content for optional detail that belongs within the current flow.</p></NocturneCollapsible></article>
    <article><span>MENU + CONTEXT</span><NocturneDropdown onSelect={(value) => setMessage(`${value} selected.`)} /><NocturneContextMenu><div className="nocturne-context-target">Right-click, or press the Context Menu key.</div></NocturneContextMenu><p className="nocturne-study-live" aria-live="polite">{message}</p></article>
    <article><span>SEGMENTED + BREADCRUMB</span><NocturneSegmented options={["Signal", "Orbit", "Still"]} value={segment} onChange={setSegment} /><NocturneBreadcrumb items={["Lab", "Disclosure", segment]} /></article>
  </div>;
}

export function NocturneFeedbackStudy() {
  const [toast, setToast] = useState<NocturneTone | null>(null); const [progress, setProgress] = useState(42);
  const next = () => setProgress((value) => value >= 100 ? 0 : value + 20);
  return <div className="nocturne-feedback-study">
    {toast && <div className="nocturne-toast-region" aria-live="polite"><NocturneToast tone={toast} title={`${toast[0].toUpperCase()}${toast.slice(1)} transmission`} onDismiss={() => setToast(null)} /></div>}
    <div className="nocturne-feedback-grid">
      <article><span>TOAST + ALERT</span><div className="nocturne-toast-triggers">{(["success", "error", "info", "warning"] as NocturneTone[]).map((tone) => <button key={tone} onClick={() => setToast(tone)}>{tone}</button>)}</div><NocturneAlert tone="warning" title="Signal attenuation">This channel needs confirmation before it can continue.</NocturneAlert></article>
      <article><span>STATUS + PROGRESS</span><div className="nocturne-badge-row"><NocturneBadge tone="success">SYNCED</NocturneBadge><NocturneBadge tone="warning">REVIEW</NocturneBadge><NocturneBadge tone="error">BLOCKED</NocturneBadge></div><NocturneProgress value={progress} /><div className="nocturne-progress-row"><NocturneCircularProgress value={progress} /><div><NocturneProgress value={0} indeterminate /><button onClick={next}>ADVANCE SIGNAL ↗</button></div></div></article>
      <article><span>LOADING + SKELETON</span><div className="nocturne-loading-row"><NocturneSpinner label="Preparing scene" /><b>PREPARING SCENE</b></div><NocturneSkeleton lines={3} /></article>
      <article><span>RESULT STATES</span><div className="nocturne-result-row"><NocturneState type="empty" title="No saved signals">Start a study to place it here.</NocturneState><NocturneState type="error" title="Channel unavailable" action={<NocturneButton variant="ghost">RETRY</NocturneButton>}>Try again when the connection is restored.</NocturneState><NocturneState type="success" title="Sequence saved">Continue shaping the next state.</NocturneState></div></article>
      <article className="nocturne-steps-study"><span>STEPS / TRANSMISSION</span><NocturneSteps current={1} steps={["Prepare", "Transmit", "Confirm", "Archive"]} /></article>
    </div>
  </div>;
}
