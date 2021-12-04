<template>
  <div>
    Home
    <a-button type="primary" @click="goPage">返回主页</a-button>
    <a-button type="primary" @click="goReact">返回React 子应用</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Home',
})
export default class Home extends Vue {
  goPage() {
      history.pushState(null, '/', '/')
  }
  goReact(){
      history.pushState(null, 'react', '#/react')
  }
}
</script>
