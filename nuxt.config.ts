import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'

const isProduction = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  devtools: { enabled: !isProduction },

  css: ['~/app/main.css'],

  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n'
  ],

  alias: {
    '@app': resolve(__dirname, 'src/app'),
    '@pages': resolve(__dirname, 'src/pages'),
    '@shared': resolve(__dirname, 'src/shared'),
    '@entities': resolve(__dirname, 'src/entities'),
    '@features': resolve(__dirname, 'src/features'),
    '@widgets': resolve(__dirname, 'src/widgets'),
  },

  i18n: {
    langDir: '',
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'kk', iso: 'kk-KZ', file: 'kk.json', name: 'Қазақша' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' },
    ],

    defaultLocale: 'ru',

    strategy: 'no_prefix',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'noble_i18n',
      redirectOn: 'root',
    },
  },

  imports: {
    dirs: ['shared', 'entities', 'features', 'widgets'],
    presets: [
      {
        from: '@shared',
        imports: ['useDebounceFn', 'useSidebar', 'useTruncateText'],
      },
    ],
  },

  vite: {
    build: {
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia', 'axios'],
      exclude: ['xlsx'],
    },
    server: {
      hmr: {
        overlay: true,
      },
      fs: {
        strict: false,
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },

  nitro: {
    publicAssets: [
      {
        baseURL: '/_nuxt/',
        dir: 'public/_nuxt',
        maxAge: 31536000,
      },
    ],
    routeRules: {
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
    },
  },

  router: {
    options: {
      strict: false,
    },
  },

  sourcemap: {
    server: !isProduction,
    client: !isProduction,
  },
})
