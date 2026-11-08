import { expect, test } from "@playwright/test";

const categories = ["foundations", "typography", "actions", "forms", "disclosure", "feedback", "data-display", "carousels", "overlays", "advanced", "motion", "effects"] as const;
const viewports = [[320, 700], [375, 812], [768, 1024], [1024, 768], [1440, 900]] as const;

test("Phase 5B.2 preserves Nocturne readability and responsive bounds", async ({ page }) => {
  test.setTimeout(180_000);
  const overflow: string[] = [];
  for (const [width, height] of viewports) {
    await page.setViewportSize({ width, height });
    for (const category of categories) {
      await page.goto(`/?design=nocturne&category=${category}&component=${category}.reference`, { waitUntil: "networkidle" });
      await expect(page.locator('main[data-design="nocturne"]')).toBeVisible();
      await expect(page.locator(".shared-showcase")).toBeVisible();
      const state = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      if (state) overflow.push(`${category}@${width}`);
      await page.screenshot({ path: `qa-artifacts/nocturne-visual/${category}-${width}-after.png`, fullPage: true });
    }
  }
  expect(overflow, "Nocturne visual polish must not introduce page overflow").toEqual([]);
});

test("Phase 5B.2 retains readable Nocturne expanded surfaces", async ({ page }) => {
  test.setTimeout(60_000);
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/?design=nocturne&category=forms&component=forms.reference", { waitUntil: "networkidle" });
  const trigger = page.locator("[aria-controls='nocturne-select-options']");
  await trigger.click();
  await expect(page.locator("#nocturne-select-options")).toBeVisible();
  await page.screenshot({ path: "qa-artifacts/nocturne-visual/forms-select-open-desktop-after.png", fullPage: true });
  await page.keyboard.press("Escape");

  await page.goto("/?design=nocturne&category=overlays&component=overlays.reference", { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /OPEN COMMAND/ }).click();
  await expect(page.getByRole("dialog", { name: "Command palette" })).toBeVisible();
  await page.screenshot({ path: "qa-artifacts/nocturne-visual/overlays-command-open-desktop-after.png", fullPage: true });
});
