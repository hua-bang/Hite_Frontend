import { createRouter, createWebHashHistory } from "vue-router";
import constantRoutes from "./constant.js";

export const routes = [
    ...constantRoutes,
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;