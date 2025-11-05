import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/manifests.ts", // Bundle registers one or more manifests
      formats: ["es"],
      fileName: "umbraco-backoffice-extensions",
    },
    outDir: "../wwwroot/App_Plugins/UmbracoBackofficeExtensions", // your web component will be saved in this location
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    },
  },
});