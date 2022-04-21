import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@mdi/font/css/materialdesignicons.css',
  ],
  generate: {
    routes: [
      '/pageA',
    ]
  }
})
