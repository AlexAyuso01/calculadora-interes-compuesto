import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { copyFileSync, existsSync } from "fs";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      // 🧩 Plugin: copiar archivos estáticos extra tras el build
      name: "copy-static-files",
      closeBundle() {
        const filesToCopy = ["404.html", "ads.txt"];

        filesToCopy.forEach((file) => {
          const src = path.resolve(file);
          const dest = path.resolve("dist", file);

          if (existsSync(src)) {
            try {
              copyFileSync(src, dest);
              console.log(`✅ ${file} copiado correctamente a dist/`);
            } catch (err) {
              console.error(`⚠️ Error al copiar ${file}:`, err);
            }
          } else {
            console.warn(`⚠️ No se encontró el archivo ${file} en la raíz del proyecto.`);
          }
        });
      },
    },
  ],

  // 🌍 Base URL
  // Usa "/" si tu dominio es calculadorainteres.es o tienes CNAME personalizado
  // Usa "/nombre-repo/" si publicas como usuario.github.io/nombre-repo
  base: "/",

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
