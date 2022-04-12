import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@mdi/font/css/materialdesignicons.css',
  ],
  app: {
    baseURL: '/base/'
  }
})
