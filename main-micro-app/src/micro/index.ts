import { registerMicroApps, addGlobalUncaughtErrorHandler, runAfterFirstMounted, start } from 'qiankun';

/**子应用注册信息 */
import apps from './apps';

import { message } from 'ant-design-vue';

/**一个进度条插件 */
import NProgress from "nprogress";
import "nprogress/nprogress.css";

/**
 * 注册子应用
 * @param 子应用的注册信息
 * @param 全局生命周期钩子
 */
registerMicroApps(apps, {
    /**qiankun 生命周期钩子 - 加载前 */
    beforeLoad: (app: any) => {
        /**加载子应用前，加载进度条 */
        NProgress.start()
        console.log('before load', app.name)
        return Promise.resolve()
    },
    /**qiankun 生命周期钩子 - 挂载前 */
    beforeMount: (app: any) => {
        console.log('before mount', app.name)
        return Promise.resolve()
    },
    /**qiankun 生命周期钩子 - 挂载后 */
    afterMount: (app: any) => {
        /**加载子应用前，进度条加载完成 */
        NProgress.done()
        console.log("after mount", app.name);
        return Promise.resolve()
    },
    /**qiankun 生命周期钩子 - 卸载前 */
    beforeUnmount: (app: any) => {
        console.log('before unmount', app.name)
        return Promise.resolve()
    },
    /**qiankun 生命周期钩子 - 卸载后 */
    afterUnmount: (app: any) => {
        console.log('after unmount', app.name)
        return Promise.resolve()
    },
})

/**添加全局的未捕获异常处理器 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
    console.error(event)
    const { message: msg } = event as any;
    /**加载失败时提示 */
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        message.error("子应用加载失败，请检查应用是否可运行");
    }
})

/**第一个微应用 mount 后需要调用的方法 */
runAfterFirstMounted(() => {
    console.log("[MainApp] first app mounted");
})

/**导出 qiankun 的启动函数 */
export default start