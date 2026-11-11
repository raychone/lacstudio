import type { PublicProject } from "@/content/projects";
import type { Locale } from "./config.ts";
import { isLocaleReady } from "./portfolio.ts";

/**
 * Project identity, URLs and verified technical facts stay in `content/projects.ts`.
 * Phase 2B.2 adds locale-specific editorial fields here, keyed by the stable project id.
 */
export function localizeProject(project: PublicProject, locale: Locale): PublicProject {
  if (!isLocaleReady(locale)) throw new Error(`No complete project translation is available for locale: ${locale}`);
  return project;
}
