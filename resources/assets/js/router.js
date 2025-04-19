import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./components/App.vue"),
    },
    {
        path: "/dashboard",
        component: () => import("./components/pages/Dashboard.vue"),
    },
    {
        path: "/create-new-client",
        component: () => import("./components/modals/CreateNewClient.vue"),
    },
    {
        path: "/chat",
        component: () => import("./components/pages/Chat.vue"),
    },
    // {
    //     path: "/import",
    //     // component: () => import("./components/pages/About.vue"),
    // },
    // {
    //     path: "/export",
    //     // component: () => import("./components/pages/About.vue"),
    // },
    {
        path: "/history",
        component: () => import("./components/pages/History.vue"),
    },
    {
        path: "/finance",
        component: () => import("./components/pages/Finance.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
