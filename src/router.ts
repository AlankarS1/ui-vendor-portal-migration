import { createRouter, createWebHistory } from "vue-router";
import type { RouteComponent, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: (): Promise<RouteComponent> => import("@/views/HomeView.vue"),
    props: true
  },
  {
    path: "/request-example",
    name: "RequestExample",
    component: (): Promise<RouteComponent> => import("@/views/RequestExample.vue"),
    props: true
  },
  { path: "/:pathMatch(.*)*", redirect: "/" }
];

const router = createRouter({
  history: createWebHistory("/"),
  // See https://router.vuejs.org/guide/advanced/scroll-behavior.html
  // Provides smooth scrolling back-to-top behaviour on page transition
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0, behaviour: "smooth" };
    }
  },
  routes
});

export default router;
