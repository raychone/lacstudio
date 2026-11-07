"use client";

import { useEffect, useRef, useState, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";

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
  const selected = options.find((option) => option.value === value);
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    window.addEventListener("mousedown", close);
    return () => window.removeEventListener("mousedown", close);
  }, []);
  const move = (direction: 1 | -1) => {
    const current = Math.max(0, options.findIndex((option) => option.value === value));
    onChange(options[(current + direction + options.length) % options.length].value);
  };
  return <div ref={root} className={open ? "nocturne-select-wrap open" : "nocturne-select-wrap"}>
    <button type="button" className="nocturne-select-trigger" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)} onKeyDown={(event) => { if (event.key === "ArrowDown") { event.preventDefault(); move(1); } if (event.key === "ArrowUp") { event.preventDefault(); move(-1); } }}>{selected?.label ?? label}<i aria-hidden="true">⌄</i></button>
    {open && <div className="nocturne-select-options" role="listbox" aria-label={label}>{options.map((option) => <button type="button" key={option.value} role="option" aria-selected={option.value === value} onClick={() => { onChange(option.value); setOpen(false); }}><span>{option.label}</span><i aria-hidden="true">{option.value === value ? "✓" : ""}</i></button>)}</div>}
  </div>;
}

export function NocturneCheck({ checked, onChange, children }: { checked: boolean; onChange: (checked: boolean) => void; children: ReactNode }) {
  return <label className="nocturne-check"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><i aria-hidden="true">✓</i><span>{children}</span></label>;
}

export function NocturneSwitch({ checked, onChange, label }: { checked: boolean; onChange: (checked: boolean) => void; label: string }) {
  return <label className="nocturne-switch"><span>{label}</span><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><i aria-hidden="true"><b /></i></label>;
}
