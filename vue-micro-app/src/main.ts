import Vue from "vue";
import VueRouter from "vue-router";

import { Menu, Card, Button } from 'ant-design-vue';

import App from "./App.vue";
import routes, { base } from "./router";
import actions from "@/shared/actions";

import "./public-path";

Vue.config.productionTip = false;
Vue.use(VueRouter)

const AntdComp = [Menu, Card, Button]
AntdComp.forEach(component => Vue.use(component))

let instance: any = null, router: VueRouter | null = null

function render(props?: any) {
  if (props) {
    /**注入 actions 实例 */
    actions.setAction(props)
  }
  router = new VueRouter({
    // base: (window as any).__POWERED_BY_QIANKUN__ ? "/vue" : process.env.BASE_URL,
    mode: 'hash',
    routes
  })

  if ((window as any).__POWERED_BY_QIANKUN__) {
    router.beforeEach((to, from, next) => {
      if (!to.path.includes('/vue')) {
        const path = base + (to.path === '/' ? '' : to.path)
        next({ path })
      }
      else next()
    })
  }


  instance = router && new Vue({ router, render: (h) => h(App) }).$mount("#app");
}

/**独立运行时，直接挂载应用 */
if (!(window as any).__POWERED_BY_QIANKUN__) render()


/**
 * bootstrap 只会在微应用初始化的时候调用一次，
 * 下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，
 * 比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("VueMicroApp bootstraped");
}

/**
* 应用每次进入都会调用 mount 方法，
* 通常我们在这里触发应用的渲染方法 
**/
export async function mount(props: any) {
  console.log("VueMicroApp mount", props);
  render(props)
}

/**
* 应用每次 切出/卸载 会调用的方法，
* 通常在这里我们会卸载微应用的应用实例
*/
export async function unmount() {
  console.log("VueMicroApp unmount");
  instance.$destroy();
  instance = null;
  router = null
}