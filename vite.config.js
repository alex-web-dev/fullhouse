import path from "path";

export default {
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        indexFooters: "index-footers.html",
        catalog: "catalog.html",
        catalogArchitect: "catalog-architect.html",
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
