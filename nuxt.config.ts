import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'

const isProduction = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  devtools: { enabled: !isProduction },

  css: ['~/app/main.css'],

  alias: {
    '@app': resolve(__dirname, 'src/app'),
    '@pages': resolve(__dirname, 'src/pages'),
    '@shared': resolve(__dirname, 'src/shared'),
    '@entities': resolve(__dirname, 'src/entities'),
    '@features': resolve(__dirname, 'src/features'),
    '@widgets': resolve(__dirname, 'src/widgets'),
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
