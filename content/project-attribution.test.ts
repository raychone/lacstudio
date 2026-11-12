import assert from "node:assert/strict";
import { getProjectAttribution, fallbackProjectAttribution, projectAttributionRecords } from "./project-attribution.ts";
import { publishedProjects } from "./projects.ts";

const projectIds = publishedProjects.map((project) => project.id).sort();
assert.deepEqual(Object.keys(projectAttributionRecords).sort(), projectIds, "every public project has one central attribution record");

const originalIds = new Set(["innerly", "noped", "backly", "language-sprint", "hubig"]);
for (const project of publishedProjects) {
  const attribution = getProjectAttribution(project);
  assert.equal(attribution.projectName, project.title, `${project.id}: attribution resolves its public project name`);
  if (originalIds.has(project.id)) {
    assert.equal(attribution.classification, "original-product", `${project.id}: original classification remains verified`);
    assert.equal(attribution.showCopyright, true, `${project.id}: verified copyright can be displayed`);
    assert.equal(attribution.rightsHolder, "LAC STUDIO", `${project.id}: verified holder remains intact`);
  } else {
    assert.equal(attribution.classification, "unconfirmed", `${project.id}: unsupported ownership stays neutral`);
    assert.equal(attribution.showCopyright, false, `${project.id}: unsupported copyright is never displayed`);
  }
}

assert.equal(fallbackProjectAttribution.classification, "unconfirmed", "unknown ownership fallback is neutral");
assert.equal(fallbackProjectAttribution.showCopyright, false, "unknown ownership fallback suppresses copyright");
console.log("project attribution tests passed");
