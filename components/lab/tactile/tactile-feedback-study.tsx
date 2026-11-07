"use client";

import { useState } from "react";
import { TactileAlert, TactileBadge, TactileCircularProgress, TactileProgress, TactileSkeleton, TactileSpinner, TactileState, TactileSteps, TactileToast, type TactileTone } from "@/design-system/designs/tactile/components/feedback";

export function TactileFeedbackStudy() {
  const [toast, setToast] = useState<TactileTone | null>(null);
  const [progress, setProgress] = useState(42);
  const advance = () => setProgress((value) => value >= 100 ? 0 : value + 20);
  return <div className="tactile-feedback-study">
    <div className="tactile-toast-region" aria-live="polite" aria-atomic="true">{toast && <TactileToast tone={toast} title={`${toast[0].toUpperCase()}${toast.slice(1)} update`} onDismiss={() => setToast(null)} />}</div>
    <div className="tactile-feedback-grid">
      <article><span>TOAST + ALERT</span><div className="tactile-toast-triggers">{(["success", "error", "info", "warning"] as TactileTone[]).map((tone) => <button key={tone} onClick={() => setToast(tone)}>{tone}</button>)}</div><TactileAlert tone="warning" title="A small decision is needed">Review the project details before this tactile surface is shared.</TactileAlert></article>
      <article><span>STATUS + PROGRESS</span><div className="tactile-badge-row"><TactileBadge tone="success">READY</TactileBadge><TactileBadge tone="warning">REVIEW</TactileBadge><TactileBadge tone="error">PAUSED</TactileBadge></div><TactileProgress value={progress} /><div className="tactile-progress-row"><TactileCircularProgress value={progress} /><div><TactileProgress value={0} indeterminate /><button onClick={advance}>ADVANCE MATERIAL ↗</button></div></div></article>
      <article><span>LOADING + SKELETON</span><div className="tactile-loading-row"><TactileSpinner label="Preparing material" /><b>PREPARING MATERIAL</b></div><TactileSkeleton lines={3} /></article>
      <article><span>RESULT STATES</span><div className="tactile-result-row"><TactileState type="empty" title="Nothing here yet">Start a material study to place it here.</TactileState><TactileState type="error" title="Surface unavailable" action={<button className="tactile-state-action">RETRY</button>}>Try again when the connection returns.</TactileState><TactileState type="success" title="Material saved">Continue shaping the next state.</TactileState></div></article>
      <article className="tactile-steps-study"><span>STEPS / HANDOFF</span><TactileSteps current={1} steps={["Prepare", "Shape", "Review", "Share"]} /></article>
    </div>
  </div>;
}
