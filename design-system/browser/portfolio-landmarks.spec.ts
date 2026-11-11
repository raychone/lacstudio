import { expect, test } from "@playwright/test";

const routes = ["/", "/work", "/services", "/process", "/about", "/contact", "/legal", "/privacy", "/work/medichelp", "/missing-route"];

test("every public route exposes one primary main landmark", async ({ page }) => {
  for (const locale of ["en", "fr", "ro", "es"]) {
    for (const route of routes) {
      await page.goto(`/${locale}${route === "/" ? "/" : route}?design=tactile`);
      await expect(page.locator("main")).toHaveCount(1);
    }
  }
});
