"use client";

import { type CSSProperties, type ReactNode } from "react";

export type TactileTone = "info" | "success" | "warning" | "error";

const mark = (tone: TactileTone) => tone === "success" ? "✓" : tone === "error" ? "!" : tone === "warning" ? "△" : "i";

export function TactileToast({ tone, title, onDismiss }: { tone: TactileTone; title: string; onDismiss: () => void }) {
  return <div className={`tactile-toast ${tone}`} role={tone === "error" ? "alert" : "status"}><i aria-hidden="true">{mark(tone)}</i><span>{title}</span><button onClick={onDismiss} aria-label="Dismiss notification">×</button></div>;
}

export function TactileAlert({ tone = "info", title, children, action }: { tone?: TactileTone; title: string; children: ReactNode; action?: ReactNode }) {
  return <div className={`tactile-alert ${tone}`} role={tone === "error" ? "alert" : "status"}><i aria-hidden="true">{mark(tone)}</i><div><b>{title}</b><p>{children}</p></div>{action}</div>;
}

export function TactileBadge({ tone = "info", children }: { tone?: TactileTone; children: ReactNode }) {
  return <span className={`tactile-badge ${tone}`}>{children}</span>;
}

export function TactileProgress({ value, indeterminate = false }: { value: number; indeterminate?: boolean }) {
  const amount = Math.max(0, Math.min(100, value));
  return <div className={indeterminate ? "tactile-progress indeterminate" : "tactile-progress"} role="progressbar" aria-label="Project progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={indeterminate ? undefined : amount}><i style={indeterminate ? undefined : { width: `${amount}%` }} /></div>;
}

export function TactileCircularProgress({ value }: { value: number }) {
  const amount = Math.max(0, Math.min(100, value));
  return <div className="tactile-circular-progress" role="progressbar" aria-label="Project progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={amount} style={{ "--progress": `${amount * 3.6}deg` } as CSSProperties}><span>{amount}%</span></div>;
}

export function TactileSpinner({ label = "Loading" }: { label?: string }) {
  return <span className="tactile-spinner" role="status" aria-label={label} />;
}

export function TactileSkeleton({ lines = 3 }: { lines?: number }) {
  return <div className="tactile-skeleton" role="status" aria-label="Loading content">{Array.from({ length: lines }, (_, index) => <i key={index} />)}</div>;
}

export function TactileState({ type, title, children, action }: { type: "empty" | "error" | "success"; title: string; children: ReactNode; action?: ReactNode }) {
  const icon = type === "success" ? "✓" : type === "error" ? "!" : "○";
  return <div className={`tactile-state ${type}`}><i aria-hidden="true">{icon}</i><b>{title}</b><p>{children}</p>{action}</div>;
}

export function TactileSteps({ steps, current }: { steps: string[]; current: number }) {
  return <ol className="tactile-steps">{steps.map((step, index) => <li key={step} className={index < current ? "done" : index === current ? "current" : ""}><i aria-hidden="true">{index < current ? "✓" : String(index + 1).padStart(2, "0")}</i><span>{step}</span></li>)}</ol>;
}
