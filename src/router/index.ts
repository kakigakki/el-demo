import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: "home",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: "about",
        name: "about",
        component: () => import("../views/About.vue"),
      },
    ],
  },
  // {
  //     path: "/",
  //     name: "Home",
  //     component: Home,
  // },
  // {
  //     path: "/about",
  //     name: "About",
  //     component: () => import("../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
