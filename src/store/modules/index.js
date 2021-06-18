//Webpack
// const requireModule = require.context('.', false, /\.js$/) 

// Vite
// Script will required all file *.js in folder modules
const requireModule = import.meta.globEager('./*.js');
const modules = {};

// prettier-ignore
requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return;
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '');
  modules[moduleName] = requireModule(fileName).default;
})
export default modules;