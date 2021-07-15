<h1 align="center">Routing, layouts, and views</h1>

### Routing

- https://next.router.vuejs.org/installation.html

```
// Install Router
npm install vue-router@4

// Path: @/router/index.ts

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

- Calling all files \*.vue

```
└── src/
    ├── views/
      ├── About.vue
      ├── HomePage.vue
      ├── NotFound.vue
```
