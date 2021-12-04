import { initGlobalState, MicroAppStateActions } from 'qiankun'

const initialState: { [key: string]: any } = {
    user: { name: 'main' }
}
const actions: MicroAppStateActions = initGlobalState(initialState)


actions.onGlobalStateChange((state, prev) => {
    for (const key in state) {
        initialState[key] = state[key];
    }
});

(actions as any).getGlobalState = (key: string) => {
    return key ? initialState[key] : initialState;
}

export default actions