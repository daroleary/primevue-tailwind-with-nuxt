import path from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-primevue'
    // '@nuxtjs/supabase',
  ],
  css: ['~/assets/css/main.css'],
  primevue: {
    unstyled: true,
    importPT: { from: path.resolve(__dirname, './presets/lara/') },
    components: {
      exclude: ['Editor', 'Chart']
    }
  },
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK
    }
  },
  app: {
    head: {
      script: [{ src: 'https://js.stripe.com/v3', defer: true }]
    }
  }
})
