import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import vueJsx from '@vitejs/plugin-vue-jsx';

const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, '/src')
      },
      {
        find: "~",
        replacement: path.resolve(__dirname, '/src')
      },
      // {find: 'views', replacement: path.resolve(__dirname, 'src/views')},
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/stylesheets/_variables";
          @import "./src/assets/stylesheets/include-media";
        `
      }
    } 
  },
  plugins: [
    vue(),
    ViteComponents({
      // relative paths to the directory to search for components.
      dirs: ['src/components/global'],

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
    // vueJsx({
    //   options are passed on to @vue/babel-plugin-jsx
    // })
  ]
})
