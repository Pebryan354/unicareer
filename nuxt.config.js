import { routes } from "vue-router/auto-routes";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Gunakan mode default (true) untuk dev agar vite-node tidak bingung,
  // kita akan atur SSG di level perintah build/generate saja.
  devtools: { enabled: true },
  ssr: true,

  app: {
    // Kita kosongkan baseURL dulu untuk development agar tidak konflik dengan socketPath
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
    // Menghindari masalah eksperimental pada Nuxt 4
    preset: "github_pages",
    prerender: {
      failOnError: false,
    },
    experimental: {
      wasm: false,
    },
  },

  compatibilityDate: "2026-04-03",
});
