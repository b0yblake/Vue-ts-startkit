import { createApp } from 'vue'

/**
* @description loads all Plugins
* @param { ReturnType<typeofcreateApp> } app An instance of the entire application
*/
export function loadAllPlugins(app: ReturnType<typeof createApp>) {
  // const files = require.context('.', true, /\.ts$/)
  // const requireModule = import.meta.globEager('./*.js');

  // const files = import.meta.globEager('./*.ts')
  // files.keys().forEach(key => {
  //   if (typeof files(key).default === 'function') {
  //     if (key !== './index.ts') files(key).default(app)
  //   }
  // })
}