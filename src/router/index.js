import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/beers",
    name: "Beers",
    component: () => import("../views/Beers.vue"),
  },
  {
    path: "/beer/:id",
    name: "Beer",
    component: () => import("../views/Beer.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
