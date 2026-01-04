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
        project: "project.html",
        catalogObjects: "catalog-objects.html",
        articles: "articles.html",
        about: "about.html",
        partners: "partners.html",
        contacts: "contacts.html",
        serviceDesign: "service-design.html",
        serviceGluedTimber: "service-glued-timber.html",
        serviceProfiledTimber: "service-profiled-timber.html",
        serviceBathhouse: "service-bathhouse.html",
        servicePainting: "service-painting.html",
        serviceLogAssemply: "service-log-assembly.html",
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
