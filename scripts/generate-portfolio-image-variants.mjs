import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const asset = (...segments) => path.join(root, "public", ...segments);
const webProjects = (await readdir(asset("projects")))
  .filter((name) => name.endsWith("-work.webp"))
  .map((name) => asset("projects", name));
const androidProjects = (await readdir(asset("projects", "android")))
  .filter((name) => name.endsWith(".png"))
  .map((name) => asset("projects", "android", name));

const makeVariants = async (input, widths, quality = 76) => {
  const extension = path.extname(input);
  const stem = input.slice(0, -extension.length);

  await Promise.all(widths.map((width) => sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(`${stem}-${width}.webp`)));
};

await mkdir(asset("branding"), { recursive: true });
await Promise.all([
  makeVariants(asset("branding", "lac-studio-hero-healthcare.webp"), [640, 960, 1280, 1520]),
  makeVariants(asset("branding", "lac-studio-black.png"), [192], 82),
  makeVariants(asset("branding", "lac-studio-playground.png"), [192], 82),
  ...webProjects.map((input) => makeVariants(input, [480, 768, 1024])),
  ...androidProjects.map((input) => makeVariants(input, [480, 768, 1024])),
]);
