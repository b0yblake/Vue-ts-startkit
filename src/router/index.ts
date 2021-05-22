import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
  Router,
} from "vue-router";

import NotFound from "@/views/NotFound.vue";
import About from "@/views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  { path: '/:path(.*)', name: "NotFound", component: NotFound, },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;