"use client";

import { useDesign } from "@/design-system/engine/provider";

function EditorialFoundations() {
  return <div className="editorial-signature editorial-foundations" data-component-id="foundation.palette"><div className="editorial-kicker">FOUNDATIONS / PAPER STUDIES</div><div className="editorial-paper-grid"><article><span>01 / CANVAS</span><strong>Paper holds<br />the pause.</strong><i>#F2EEE4</i></article><article><span>02 / INK</span><strong>Contrast<br />gives order.</strong><i>#1D1B18</i></article><article><span>03 / ACCENT</span><strong>One red<br />decision.</strong><i>#9D3C2F</i></article></div><div className="editorial-rule-study"><span>VOL. 03 — MATERIAL LANGUAGE</span><b>Whitespace,<br /><em>measured.</em></b><p>Paper tone, precise rules and a single accent create hierarchy without simulated depth.</p><i>72 / 24 / 12</i></div></div>;
}

function EditorialTypography() {
  return <div className="editorial-signature editorial-type" data-component-id="typography.scale"><div className="editorial-type-meta"><span>THE LAC REVIEW</span><span>ISSUE 03 / 2026</span></div><div className="editorial-type-feature"><span>03</span><h2>Designing<br />for the <em>long look.</em></h2><p>Typography is not an ornament. It is the structure that lets an idea take up space.</p></div><div className="editorial-type-article"><div><span>ESSAY / 01</span><b>When a page<br />becomes a room.</b></div><p>Display serif creates the gesture; an exacting sans carries the argument. Small metadata stays crisp, quiet and useful.</p><blockquote>“The best systems make room for attention.”</blockquote><small>FIG. 01 — HEADLINE / CAPTION / MEASURE</small></div></div>;
}

function EditorialPlanned() {
  const { activeCategory, activeComponent } = useDesign();
  return <div className="editorial-planned" data-component-id={activeComponent}><span>EDITORIAL / {activeCategory.toUpperCase()}</span><strong>This chapter is<br />still in <em>proof.</em></strong><p>The shared Lab position is reserved. Its Editorial component recipe begins after Foundations and Typography are approved.</p></div>;
}

export function EditorialWorkspaceStage() {
  const { activeCategory } = useDesign();
  return <div className="editorial-workspace-stage">{activeCategory === "foundations" ? <EditorialFoundations /> : activeCategory === "typography" ? <EditorialTypography /> : <EditorialPlanned />}</div>;
}
