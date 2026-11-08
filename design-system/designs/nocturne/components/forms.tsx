"use client";

import { useEffect, useRef, useState, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";
import { nextRovingIndex } from "@/design-system/engine/keyboard";

type FieldStatus = "default" | "error" | "success";
type FieldProps = { label: string; hint?: string; status?: FieldStatus; children: ReactNode };

export function NocturneField({ label, hint, status = "default", children }: FieldProps) {
  return <label className={`nocturne-field nocturne-field-${status}`}><span>{label}</span>{children}{hint && <small>{status === "error" ? "! " : status === "success" ? "✓ " : ""}{hint}</small>}</label>;
}

export function NocturneInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`nocturne-input ${props.className ?? ""}`.trim()} />;
}

export function NocturneTextarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`nocturne-textarea ${props.className ?? ""}`.trim()} />;
}

export type NocturneSelectOption = { value: string; label: string };

export function NocturneSelect({ options, value, onChange, label = "Choose an option" }: { options: NocturneSelectOption[]; value: string; onChange: (value: string) => void; label?: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = options.find((option) => option.value === value);
  const selectedIndex = Math.max(0, options.findIndex((option) => option.value === value));
  const focusOption = (index: number) => window.requestAnimationFrame(() => optionRefs.current[index]?.focus());
  const close = (restoreFocus = false) => { setOpen(false); if (restoreFocus) window.requestAnimationFrame(() => triggerRef.current?.focus()); };
  useEffect(() => {
    const dismiss = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    window.addEventListener("pointerdown", dismiss);
    return () => window.removeEventListener("pointerdown", dismiss);
  }, []);
  const openAt = (index = selectedIndex) => { setOpen(true); focusOption(index); };
  return <div ref={root} className={open ? "nocturne-select-wrap open" : "nocturne-select-wrap"}>
    <button ref={triggerRef} type="button" className="nocturne-select-trigger" aria-haspopup="listbox" aria-expanded={open} onClick={() => open ? close() : openAt()} onKeyDown={(event) => { const next = nextRovingIndex(event.key, selectedIndex, options.length); if (next !== null) { event.preventDefault(); openAt(next); } if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openAt(); } if (event.key === "Escape") close(true); }}>{selected?.label ?? label}<i aria-hidden="true">⌄</i></button>
    {open && <div className="nocturne-select-options" role="listbox" aria-label={label}>{options.map((option, index) => <button ref={(node) => { optionRefs.current[index] = node; }} type="button" key={option.value} role="option" aria-selected={option.value === value} onKeyDown={(event) => { const next = nextRovingIndex(event.key, index, options.length); if (next !== null) { event.preventDefault(); focusOption(next); } if (event.key === "Enter" || event.key === " ") { event.preventDefault(); onChange(option.value); close(true); } if (event.key === "Escape") { event.preventDefault(); close(true); } }} onClick={() => { onChange(option.value); close(); }}><span>{option.label}</span><i aria-hidden="true">{option.value === value ? "✓" : ""}</i></button>)}</div>}
  </div>;
}

export function NocturneCheck({ checked, onChange, children }: { checked: boolean; onChange: (checked: boolean) => void; children: ReactNode }) {
  return <label className="nocturne-check"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><i aria-hidden="true">✓</i><span>{children}</span></label>;
}

export function NocturneSwitch({ checked, onChange, label }: { checked: boolean; onChange: (checked: boolean) => void; label: string }) {
  return <label className="nocturne-switch"><span>{label}</span><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><i aria-hidden="true"><b /></i></label>;
}
