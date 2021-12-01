import Vue from "vue";
import{ RouteConfig } from "vue-router";

import Home from "../views/Home.vue";
import List from '../views/List.vue'

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
];

export default routes;
