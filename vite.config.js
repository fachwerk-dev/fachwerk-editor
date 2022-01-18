import { defineConfig } from "vite";
import ViteVue from "@vitejs/plugin-vue";
import ViteFonts from "vite-plugin-fonts";

export default defineConfig({
  plugins: [
    ViteVue(),
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
  resolve: { alias: { vue: "vue/dist/vue.esm-bundler.js" } },
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
