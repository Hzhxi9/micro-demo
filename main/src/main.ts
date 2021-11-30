import { createApp } from "vue";

import { Menu } from 'ant-design-vue';

import App from "./App.vue";
import router from "./router";
import store from "./store";
import micro from "./micro";

micro()

const app = createApp(App)

const AntdComp = [Menu]

AntdComp.forEach(comp => {
    app.use(comp)
})

app.use(store).use(router).mount("#app");
