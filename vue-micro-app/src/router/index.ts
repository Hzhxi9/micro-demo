import Vue from "vue";
import { RouteConfig } from "vue-router";

import Home from "../views/Home.vue";
import List from '../views/List.vue'


export const base = (window as any).__POWERED_BY_QIANKUN__ ? "/vue" : '/'

export const homePath = base === '/' ? '' : base

const routes: Array<RouteConfig> = [
  {
    path: homePath,
    name: "Home",
    component: Home,
  },
  {
    path: base + "/list",
    name: "List",
    component: List,
  },
];

export default routes;
