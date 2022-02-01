import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        name: "Beers",
        component: () =>
            import ("../views/Beers.vue"),
    },
    {
        path: "/beer/:id",
        name: "Beer",
        component: () =>
            import ("../views/Beer.vue"),
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;