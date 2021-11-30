<template>
  <section class="login-container">
     <a-button size="large" type="primary" @click="login">Login</a-button>
  </section>
</template>

<script lang="ts" setup>
  function login() {
    console.log('login');
  };
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/flex.less";
.login-container { padding: 30px; }
</style>
