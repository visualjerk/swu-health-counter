import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { minimal2023Preset as preset } from '@vite-pwa/assets-generator/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Star Wars Unlimited Health Counter',
        short_name: 'SWUHC',
        description: 'Heatlh Counter for Star Wars Unlimited Bases',
      },
      pwaAssets: {
        preset,
        image: 'public/icon.svg',
      },
    }),
  ],
  base: '/swu-health-counter/',
})
