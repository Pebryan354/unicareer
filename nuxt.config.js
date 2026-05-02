// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Devtools diaktifkan untuk mempermudah debugging
  devtools: { enabled: true },
  
  ssr: true,

  app: {
    // Base URL disesuaikan dengan folder di GitHub Pages
    baseURL: "/unicareer/",
    head: {
      htmlAttrs: { lang: "id" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "UniCareer Portal",
      meta: [
        {
          name: "description",
          content: "Portal resmi pengembangan karir universitas",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss"],

  // Paksa vite untuk menggunakan host lokal yang stabil
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "localhost",
      },
    },
  },

  nitro: {
    // Gunakan preset github-pages (dengan tanda hubung) yang standar untuk Nitro
    preset: "github-pages",
    prerender: {
      failOnError: false,
    },
    experimental: {
      wasm: false,
    },
  },

  // Gunakan tanggal yang valid (format YYYY-MM-DD)
  compatibilityDate: "2024-04-03",
});
