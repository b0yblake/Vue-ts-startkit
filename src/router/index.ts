import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue'), // use default page
    children: [
      // { path: '/', component: () => import('./views/index.vue') },
      // { path: '/album/:path/:id.html', component: () => import('./views/album.vue') },
      // { path: '/song/:path/:id.html', component: () => import('./views/song.vue')},
      {
        path: '/:path(.*)*',
        component: () => import('@/views/NotFound.vue'),
      },
    ],
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
