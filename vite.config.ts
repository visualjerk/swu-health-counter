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
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
      },
      pwaAssets: {
        preset,
        image: 'public/icon.svg',
      },
    }),
  ],
  base: '/swu-health-counter/',
})
