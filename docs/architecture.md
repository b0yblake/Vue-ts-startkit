<h1 align="center">Architecture</h1>

### Standard directory structure

```
├── public/
└── src /
    ├── @types/                     // Contain all types TypeScript
    ├── api/                        // pattern api call
    ├── assets/                     // static resource & stypesheet CSS directory
    ├── components/                 // components(global & local) directory
    ├── composables/                // all functions reusable of compositionAPI
    ├── config/                     // contain all config of 3rd libs
    ├── helpers/                    // all functions type helper
    ├── plugins/                    // all functions wrap 3rd libs or function type plugin
    ├── router/                     // routing configuration Directory
    ├── store/                      // State management directory
    ├── templates/                  // Includes layout page
    ├── utils/                      // Tool function directory
    ├── views/                      // Page components directory
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts
├── __tests__/                      // Unit test directory
├── index.html
├── tsconfig.json                   // TypeScript configuration file
├── vite.config.ts                  // Vite configuration file
└── package.json

```

###
