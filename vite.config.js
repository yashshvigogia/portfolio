import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes the build work on GitHub Pages (any repo name), Netlify and Vercel.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
