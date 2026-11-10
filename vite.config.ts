import tailwindcss from "@tailwindcss/postcss";
import { nitro } from "nitro/vite";
import vinext from "vinext";
import { defineConfig } from "vite";

// Vinext supplies the App Router runtime; Nitro emits Vercel's Build Output API
// artifact during production builds. Local development remains a plain Vite app.
export default defineConfig(({ command }) => ({
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [
    vinext(),
    ...(command === "build" ? [nitro({ preset: "vercel" })] : []),
  ],
}));
