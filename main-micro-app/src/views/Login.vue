<template>
  <section class="login-container">
    <a-button size="large" type="primary" @click="login">Login</a-button>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ApiLoginQuickly } from '@/apis';

import shared from '@/shared';

const router = useRouter();

async function login() {
  const result = await ApiLoginQuickly();
  const token = result.data;

  console.log(token)

  shared.setToken(token);

  router.push('/');
}
</script>

<style lang="scss" scoped>
.login-container {
  padding: 30px;
}
</style>
