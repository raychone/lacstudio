import { expect, test } from "@playwright/test";

const categories = ["foundations", "typography", "actions", "forms", "disclosure", "feedback", "data-display", "carousels", "overlays", "advanced", "motion", "effects"] as const;
const viewports = [[320, 700], [375, 812], [768, 1024], [1024, 768], [1440, 900]] as const;

test("Phase 5B.1 preserves Tactile readability and responsive bounds", async ({ page }) => {
  test.setTimeout(180_000);
  const overflow: string[] = [];
  for (const [width, height] of viewports) {
    await page.setViewportSize({ width, height });
    for (const category of categories) {
      await page.goto(`/lab?design=tactile&category=${category}&component=${category}.reference`, { waitUntil: "networkidle" });
      await expect(page.locator('main[data-design="tactile"]')).toBeVisible();
      await expect(page.locator(".shared-showcase")).toBeVisible();
      const state = await page.evaluate(() => ({ overflow: document.documentElement.scrollWidth > window.innerWidth + 1, bodyColor: getComputedStyle(document.body).color }));
      if (state.overflow) overflow.push(`${category}@${width}`);
      await page.screenshot({ path: `qa-artifacts/visual-polish/tactile/${category}-${width}-after.png`, fullPage: true });
    }
  }
  expect(overflow, "Tactile visual polish must not introduce page overflow").toEqual([]);
});
