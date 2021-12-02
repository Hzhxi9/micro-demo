import { createApp } from "vue";
import { Menu } from 'ant-design-vue';
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import routes from "./router";
import store from "./store";
import micro from "./micro";

micro()

const app = createApp(App)

/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

const AntdComp = [Menu]
AntdComp.forEach(comp => {
    app.use(comp)
})

app.use(store).use(router).mount("#main");
