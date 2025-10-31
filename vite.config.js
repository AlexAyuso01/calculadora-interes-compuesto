import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { copyFileSync, existsSync } from "fs";

export default defineConfig({
  plugins: [
    react(),
    {
      // 👇 Plugin personalizado para copiar ads.txt al finalizar el build
      name: "copy-ads-txt",
      closeBundle() {
        const source = "ads.txt";
        const destination = "dist/ads.txt";
        try {
          if (existsSync(source)) {
            copyFileSync(source, destination);
            console.log("✅ ads.txt copiado correctamente a dist/");
          } else {
            console.warn("⚠️ No se encontró ads.txt en la raíz del proyecto");
          }
        } catch (err) {
          console.error("❌ Error al copiar ads.txt:", err);
        }
      },
    },
  ],
  base: "/", // usa "/" si vas a dominio propio
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
