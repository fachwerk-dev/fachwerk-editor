import { defineConfig } from "vite";
import ViteMonaco from "vite-plugin-monaco-editor";
import ViteVue from "@vitejs/plugin-vue";
import ViteFonts from "vite-plugin-fonts";
import postcss from "./postcss.config";

export default defineConfig({
  resolve: { alias: { vue: "vue/dist/vue.esm-bundler.js" } },
  css: { postcss },
  plugins: [
    ViteMonaco(),
    ViteVue({ reactivityTransform: true }),
    ViteFonts({
      google: {
        families: [
          {
            name: "IBM Plex Sans",
            styles: "ital,wght@0,400;0,500;0,700;1,400;1,500;1,700",
          },
          { name: "Cousine" },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          htmlWorker: [`monaco-editor/esm/vs/language/html/html.worker`],
          editorWorker: [`monaco-editor/esm/vs/editor/editor.worker`],
        },
      },
    },
  },
});
