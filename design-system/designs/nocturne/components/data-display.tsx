"use client";

import { useMemo, useState, type ReactNode } from "react";

export type NocturneCardVariant = "basic" | "interactive" | "selectable" | "expandable" | "media" | "stat" | "feature" | "horizontal" | "compact" | "loading" | "empty";
export function NocturneCard({ variant = "basic", title, children, actions }: { variant?: NocturneCardVariant; title: string; children?: ReactNode; actions?: ReactNode }) {
  const [selected, setSelected] = useState(false); const [expanded, setExpanded] = useState(false); const interactive = variant === "interactive" || variant === "selectable" || variant === "expandable";
  return <article className={`nocturne-data-card ${variant} ${selected ? "selected" : ""}`}><div className="nocturne-card-edge" /><span>{variant.toUpperCase()}</span>{variant === "media" && <div className="nocturne-media-visual" aria-label="Abstract violet signal artwork" />}{variant === "loading" ? <div className="nocturne-card-loading"><i /><i /><i /></div> : variant === "empty" ? <div className="nocturne-card-empty">○<p>No signal<br />saved yet.</p></div> : <><h3>{title}</h3><p>{children}</p>{expanded && <small>Expanded detail stays within the card, preserving context while giving the content space.</small>}</>}{interactive && <button aria-pressed={variant === "selectable" ? selected : undefined} onClick={() => variant === "expandable" ? setExpanded(!expanded) : setSelected(!selected)}>{variant === "expandable" ? expanded ? "CLOSE DETAIL" : "EXPAND DETAIL" : selected ? "SELECTED" : "SELECT"} <b>↗</b></button>}{actions}</article>;
}

export function NocturneAvatar({ initials, label, status }: { initials: string; label: string; status?: "online" | "away" | "offline" }) { return <span className="nocturne-avatar" aria-label={label}>{initials}{status && <i className={status} />}</span>; }
export function NocturneAvatarGroup({ people }: { people: { initials: string; label: string }[] }) { return <div className="nocturne-avatar-group">{people.map((person) => <NocturneAvatar key={person.label} {...person} />)}<span>+{people.length}</span></div>; }
export function NocturneChip({ children }: { children: ReactNode }) { return <span className="nocturne-chip">{children}</span>; }
export function NocturneTimeline({ items }: { items: { title: string; time: string; detail: string }[] }) { return <ol className="nocturne-timeline">{items.map((item) => <li key={item.title}><i /><div><b>{item.title}</b><span>{item.time}</span><p>{item.detail}</p></div></li>)}</ol>; }

export type NocturneTableRow = { name: string; type: string; updated: string; status: string };
export function NocturneDataTable({ rows }: { rows: NocturneTableRow[] }) {
  const [sort, setSort] = useState<keyof NocturneTableRow>("name"); const [ascending, setAscending] = useState(true); const [page, setPage] = useState(0); const perPage = 3;
  const sorted = useMemo(() => [...rows].sort((a, b) => a[sort].localeCompare(b[sort]) * (ascending ? 1 : -1)), [rows, sort, ascending]); const visible = sorted.slice(page * perPage, page * perPage + perPage); const pages = Math.ceil(rows.length / perPage);
  const order = (key: keyof NocturneTableRow) => { setPage(0); if (sort === key) setAscending(!ascending); else { setSort(key); setAscending(true); } };
  return <div className="nocturne-table-wrap"><table className="nocturne-table"><thead><tr>{(["name", "type", "updated", "status"] as (keyof NocturneTableRow)[]).map((key) => <th key={key}><button onClick={() => order(key)}>{key} {sort === key && <i>{ascending ? "↑" : "↓"}</i>}</button></th>)}</tr></thead><tbody>{visible.map((row) => <tr key={row.name}><td>{row.name}</td><td>{row.type}</td><td>{row.updated}</td><td><span>{row.status}</span></td></tr>)}</tbody></table><div className="nocturne-pagination"><button disabled={page === 0} onClick={() => setPage(page - 1)}>←</button><span>PAGE {page + 1} / {pages}</span><button disabled={page === pages - 1} onClick={() => setPage(page + 1)}>→</button></div></div>;
}
