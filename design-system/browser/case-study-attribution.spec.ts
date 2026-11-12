import { expect, test } from "@playwright/test";

const projects = ["medichelp", "dental-laboratory-management", "restaurant-saas", "gr-plus", "imperials-hotel", "bar-grill", "iwear", "innerly", "noped", "backly", "language-sprint", "hubig"];
const designs = ["tactile", "nocturne", "editorial", "brutalist", "playground"];
const widths = [320, 375, 768, 1024, 1440];

test.describe("case-study attribution and layout", () => {
  test("renders the central attribution fallback or verified notice for every public project", async ({ page }) => {
    test.setTimeout(90_000);
    for (const project of projects) {
      await page.goto(`/work/${project}?design=tactile`, { waitUntil: "networkidle" });
      const attribution = page.locator(".case-attribution");
      await expect(attribution).toBeVisible();
      if (["innerly", "noped", "backly", "language-sprint", "hubig"].includes(project)) {
        await expect(attribution).toContainText("© 2026 LAC STUDIO");
      } else {
        await expect(attribution).toContainText("Project presentation and development work by LAC STUDIO.");
      }
      await expect(page.getByRole("navigation", { name: "Case study navigation" })).toBeVisible();
    }
  });

  test("keeps the closing sequence usable across designs, locales and required widths", async ({ page }) => {
    test.setTimeout(120_000);
    for (const design of designs) {
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`/work/innerly?design=${design}`, { waitUntil: "networkidle" });
        await expect(page.locator(`.portfolio-shell[data-design="${design}"]`)).toBeVisible();
        await expect(page.locator(".case-attribution")).toContainText("© 2026 LAC STUDIO");
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `${design} at ${width}px must not overflow`).toBe(true);
        const sequence = await page.evaluate(() => [".case-attribution", ".case-study-navigation", ".case-study-contact-cta", ".portfolio-footer"].map((selector) => document.querySelector(selector)?.getBoundingClientRect().top ?? -1));
        expect(sequence.every((position, index) => index === 0 || position > sequence[index - 1]), `${design} at ${width}px preserves the closing sequence`).toBe(true);
      }
    }
    for (const locale of ["en", "fr", "ro", "es"]) {
      await page.setViewportSize({ width: 1024, height: 900 });
      await page.goto(`/${locale}/work/medichelp?design=nocturne`, { waitUntil: "networkidle" });
      await expect(page.locator(".case-attribution")).toBeVisible();
      await expect(page.locator(".case-study-navigation")).toBeVisible();
    }
  });
});
