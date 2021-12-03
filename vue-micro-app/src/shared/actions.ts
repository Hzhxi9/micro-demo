function emptyAction() {
    /**警告: 提示当前使用的是空 Action */
    console.warn('Current execute action is empty!')
}

type ActionsType = {
    onGlobalStateChange: (args?: any[]) => void
    setGlobalState: (args?: any[]) => void
}

class Actions {
    /**默认值为空 Action */
    actions: ActionsType = {
        onGlobalStateChange: emptyAction,
        setGlobalState: emptyAction
    }

    /**设置 action */
    setAction(actions: ActionsType) {
        this.actions = actions
    }

    /**映射 */
    onGlobalStateChange(...args: any[]) {
        return this.actions.onGlobalStateChange(...args);
    }

    /**映射 */
    setGlobalState(...args: any[]) {
        return this.actions.setGlobalState(...args)
    }
}

const actions = new Actions()

export default actions