import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("../views/login/index.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;