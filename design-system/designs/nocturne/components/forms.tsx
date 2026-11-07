"use client";

import { type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, type TextareaHTMLAttributes } from "react";

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

export function NocturneSelect({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <span className="nocturne-select-wrap"><select {...props} className={`nocturne-select ${props.className ?? ""}`.trim()}>{children}</select><i aria-hidden="true">⌄</i></span>;
}

export function NocturneCheck({ checked, onChange, children }: { checked: boolean; onChange: (checked: boolean) => void; children: ReactNode }) {
  return <label className="nocturne-check"><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><i aria-hidden="true">✓</i><span>{children}</span></label>;
}

export function NocturneSwitch({ checked, onChange, label }: { checked: boolean; onChange: (checked: boolean) => void; label: string }) {
  return <label className="nocturne-switch"><span>{label}</span><input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /><i aria-hidden="true"><b /></i></label>;
}
