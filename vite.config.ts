/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'DuguitSharedLibrary',
      fileName: 'duguit-shared-library',
    },
    rollupOptions: {
      // éventuellement external si tu veux exclure Vue, etc.
      external: ['vue']
    }
  }
})
