import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, '/src')
      },
      // {find: 'views', replacement: path.resolve(__dirname, 'src/views')},
      // {find: 'components', replacement: path.resolve(__dirname, 'src/components')},
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/assets/stylesheets/_variables";` 
      } 
    } 
  },
  plugins: [
    vue(),
    ViteComponents({
      // relative paths to the directory to search for components.
      dirs: ['src/components'],

      // valid file extensions for components.
      extensions: ['vue'],
      // search for subdirectories
      deep: true,

      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: false,
      // Subdirectory paths for ignoring namespace prefixes
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],
    }),
  ]
})
