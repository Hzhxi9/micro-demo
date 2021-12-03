<template>
  <section class="login-container">
    <a-button size="large" type="primary" @click="login">Login</a-button>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ApiLoginQuickly } from '@/apis';
import { onMounted } from 'vue';

import action from '@/shared/action';

const router = useRouter();

async function login() {
  const result = await ApiLoginQuickly();
  const token = result.data;

  console.log(token);

  action.setGlobalState({ token });
}

onMounted(() => {
  /**注册一个观察者函数 */
  action.onGlobalStateChange((state, prevState) => {
    // state: 变更后的状态; prevState: 变更前的状态
    console.log('主应用观察者：token 改变前的值为 ', prevState.token);
    console.log('主应用观察者：登录状态发生改变，改变后的 token 的值为 ', state.token);

    router.push('/');
  });
});
</script>

<style lang="scss" scoped>
.login-container {
  padding: 30px;
}
</style>
