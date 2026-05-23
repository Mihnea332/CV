import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // --- ADAUGĂ ACEASTĂ SECȚIUNE ---
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Portul unde va rula Vercel
        changeOrigin: true,
        secure: false,
      },
    },
  },
  // -------------------------------
});
