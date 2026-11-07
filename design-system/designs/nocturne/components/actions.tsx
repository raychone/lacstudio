"use client";

import { useRef, useState, type ButtonHTMLAttributes, type ReactNode } from "react";

export type NocturneButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "destructive" | "luminous";

type NocturneButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: NocturneButtonVariant;
  loading?: boolean;
  icon?: ReactNode;
};

export function NocturneButton({ children, className = "", variant = "primary", loading = false, icon, disabled, ...props }: NocturneButtonProps) {
  return <button {...props} disabled={disabled || loading} className={`nocturne-button nocturne-button-${variant} ${loading ? "is-loading" : ""} ${className}`.trim()}>
    <span>{loading ? "TRANSMITTING" : children}</span>{loading ? <i className="nocturne-button-loader" aria-hidden="true" /> : icon && <b aria-hidden="true">{icon}</b>}
  </button>;
}

export function NocturneIconButton({ label, children, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return <button {...props} className={`nocturne-icon-button ${className}`.trim()} aria-label={label}>{children}</button>;
}

export function NocturneToggle({ pressed, onPressedChange, children }: { pressed: boolean; onPressedChange: (pressed: boolean) => void; children: ReactNode }) {
  return <button type="button" className={pressed ? "nocturne-toggle is-pressed" : "nocturne-toggle"} aria-pressed={pressed} onClick={() => onPressedChange(!pressed)}><i aria-hidden="true" />{children}</button>;
}

export function NocturneSplitButton({ onPrimary }: { onPrimary: () => void }) {
  const [open, setOpen] = useState(false);
  return <div className="nocturne-split-button"><NocturneButton onClick={onPrimary} icon="↗">OPEN CHANNEL</NocturneButton><NocturneIconButton label="More channel actions" aria-expanded={open} onClick={() => setOpen(!open)}>⌄</NocturneIconButton>{open && <div className="nocturne-split-menu"><button onClick={() => setOpen(false)}>Save signal</button><button onClick={() => setOpen(false)}>Duplicate channel</button></div>}</div>;
}

export function NocturneCopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard?.writeText(value); } catch { /* A readable fallback state is still provided. */ }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  return <NocturneButton variant="ghost" onClick={copy} icon={copied ? "✓" : "⧉"}>{copied ? "COPIED" : "COPY TOKEN"}</NocturneButton>;
}

export function NocturneHoldButton({ onConfirm }: { onConfirm: () => void }) {
  const [holding, setHolding] = useState(false);
  const holdTimer = useRef<number | null>(null);
  const cancel = () => { if (holdTimer.current) window.clearTimeout(holdTimer.current); holdTimer.current = null; setHolding(false); };
  const begin = () => { cancel(); setHolding(true); holdTimer.current = window.setTimeout(() => { setHolding(false); onConfirm(); }, 900); };
  return <button type="button" className={holding ? "nocturne-hold-button is-holding" : "nocturne-hold-button"} onPointerDown={begin} onPointerUp={cancel} onPointerLeave={cancel} onKeyDown={(event) => { if (event.key === " ") begin(); }} onKeyUp={(event) => { if (event.key === " ") cancel(); }}>HOLD TO CONFIRM <i aria-hidden="true" /></button>;
}
