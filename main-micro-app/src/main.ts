import { createApp } from "vue";
import { Menu, Button } from 'ant-design-vue';
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import routes from "./router";
import store from "./store";
import micro from "./micro";

import '@/assets/styles/common.scss'

micro()

const app = createApp(App)

/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
  });

const AntdComp = [Menu, Button]
AntdComp.forEach(comp => {
    app.use(comp)
})

app.use(store).use(router).mount("#main");
