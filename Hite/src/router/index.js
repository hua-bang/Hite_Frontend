import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/index.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/Test",
        name: "test",
        component: () => import("../views/Test.vue")
    },
    {
        path: "/Login",
        name: "login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/Console",
        name: "console",
        component: Layout,
        children: [
            {
                path: "index",
                component: () => import("../views/console/Index.vue"),
                name: "console",
                meta: {
                    title: "控制台"
                }
            },
            {
                path: "welcome",
                component: () => import("../views/console/Welcome.vue"),
                name: "welcome",
                meta: {
                    title: "welcome"
                }
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;