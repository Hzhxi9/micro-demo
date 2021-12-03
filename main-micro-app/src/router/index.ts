import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Communication from '../views/Communication.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/communication",
    name: "Communication",
    component: Communication,
  },
  {
    path: "/login",
    name: "Login",
    meta: { withoutLayout: true },
    component: Login,
  },
];


export default routes;
