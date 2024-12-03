import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "origin",
    redirect: "/home"
  },
  {
    path: "/login&register",
    name: "Login&Register",
    component: () => import("@/views/login&register/index.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;