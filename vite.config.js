import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/exploring_athens/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        caffee: resolve(__dirname, "caffee.html"),
        lunch: resolve(__dirname, "lunch.html"),
        visit: resolve(__dirname, "visit.html"),
      },
    },
  },
});
