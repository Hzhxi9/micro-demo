<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { base } from './router';

type MenuItem = {
  key: string;
  route: string;
  title: string;
};

@Component({
  name: 'App',
})
export default class App extends Vue {
  menus = [
    { key: 'vue', route: base === '/' ? '' : base, title: '主页' },
    { key: 'vue-list', route: base + '/list', title: '列表页' },
    { key: 'vue-communication', route: base + '/communication', title: '通讯页' },
  ] as MenuItem[];

  get currentRoute(): string {
    const menu = this.menus.find((menu: MenuItem) => menu.route === this.$route.path);
    return menu ? menu.key : 'vue';
  }
}
</script>

<template>
  <div id="app">
    <a-menu :selectedKeys="[currentRoute]" mode="horizontal" theme="dark">
      <a-menu-item v-for="item in menus" :key="item.key">
        <router-link :to="item.route">{{ item.title }}</router-link>
      </a-menu-item>
    </a-menu>
    <router-view :key="new Date().getTime()" />
  </div>
</template>

<style lang="scss"></style>
