<h1 align="center">Routing, layouts, and views</h1>

### Routing

- `VueX3 for Vue2` https://vuex.vuejs.org/installation.html
- `VueX4 for Vue3 optionAPI` https://next.vuex.vuejs.org/installation.html
- `VueX5 for CompositionAPI (not production, it's RFC)` https://www.youtube.com/watch?v=WmgQH4pOhUc

```
// Install VueX4
npm install vuex@next --save

// Path
@/router/index.ts

└── src/
    ├── router/
      ├── index.ts  // Routing configuration file

// Config main.ts
import router from '@/router'
app.use(router)

// Load in view App.vue
<template>
  <router-view />
</template>
```

### Layouts (@/templates/layouts)

- Layout's useful when project get the different layout, reuse components effective

```
// Path @/templates/layouts/LayoutDefault.vue

// Declare the template layout with slot tag
<TheHeader />
<main :class="$style.main">
  <slot />
</main>
<TheFooter />

// Calling like normal component and put data in it @/views/HomePage.vue
import LayoutDefault from '@/templates/layouts/LayoutDefault.vue'
<template>
  <div class="home-layout">
    <LayoutDefault>
      Main home
    </LayoutDefault>
  </div>
</template>

```

### Views

- Calling all files *.vue

```
└── src/
    ├── views/
      ├── About.vue 
      ├── HomePage.vue
      ├── NotFound.vue
```
