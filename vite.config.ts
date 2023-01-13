import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    fs: {
      strict: true,
    },
    hmr: { overlay: true },
  },
  preview: {
    port: 8081,
  },
  resolve: {
    alias: {
      "#": resolve(__dirname, "public"),
      "@": resolve(__dirname, "./src"),
    },
  },
})
