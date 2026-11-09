import { expect, test } from "@playwright/test";

const categories = ["foundations", "typography", "actions", "forms", "disclosure", "feedback", "data-display", "carousels", "overlays", "advanced", "motion", "effects"] as const;
const viewports = [[320, 700], [375, 812], [768, 1024], [1024, 768], [1440, 900]] as const;

test("Phase 5B.3 preserves Editorial readability and responsive bounds", async ({ page }) => {
  test.setTimeout(180_000);
  const overflow: string[] = [];
  for (const [width, height] of viewports) {
    await page.setViewportSize({ width, height });
    for (const category of categories) {
      await page.goto(`/lab?design=editorial&category=${category}&component=${category}.reference`, { waitUntil: "networkidle" });
      await expect(page.locator('main[data-design="editorial"]')).toBeVisible();
      await expect(page.locator(".shared-showcase")).toBeVisible();
      const state = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      if (state) overflow.push(`${category}@${width}`);
      await page.screenshot({ path: `qa-artifacts/editorial-visual/${category}-${width}-after.png`, fullPage: true });
    }
  }
  expect(overflow, "Editorial visual polish must not introduce page overflow").toEqual([]);
});

test("Phase 5B.3 retains Editorial expanded menus and overlay readability", async ({ page }) => {
  test.setTimeout(60_000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/lab?design=editorial&category=disclosure&component=disclosure.reference", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /OPTIONS/ }).click();
  await expect(page.getByRole("menu")).toBeVisible();
  await page.screenshot({ path: "qa-artifacts/editorial-visual/disclosure-menu-open-desktop-after.png", fullPage: true });
  await page.keyboard.press("Escape");

  await page.goto("/lab?design=editorial&category=overlays&component=overlays.reference", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /^OPEN MODAL/ }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.screenshot({ path: "qa-artifacts/editorial-visual/overlays-modal-open-desktop-after.png", fullPage: true });
});
