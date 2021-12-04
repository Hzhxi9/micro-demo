import config from "@/config"
import shared from "@/shared"

const { REACT_MICRO_APP, VUE_MICRO_APP, REACT_SUB_MICRO_APP } = config

const apps = [
    /**
     * name: 微应用名称 - 具有唯一性
     * entry: 微应用入口 - 通过该地址加载微应用
     * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
     * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
     */
    {
        name: 'ReactMicroApp',
        entry: REACT_MICRO_APP,
        container: '#frame',
        activeRule: '/#/react',
        /**通过 props 将 shared 传递给 微应用 */
        props: { shared }
    },
    {
        name: "VueMicroApp",
        entry: VUE_MICRO_APP,
        container: "#frame",
        activeRule: "/#/vue",
        /**通过 props 将 shared 传递给 微应用 */
        props: { shared }
    },
    {
        name: "ReactSubMicroApp",
        entry: REACT_SUB_MICRO_APP,
        container: "#frame",
        activeRule: "/#/react-sub",
        /**通过 props 将 shared 传递给 微应用 */
        props: { shared }
    },
]

export default apps