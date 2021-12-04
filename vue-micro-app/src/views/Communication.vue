<template>
  <div class="container">
    <a-card :title="`欢迎你，${userInfo.nickname}`" v-if="userInfo">
      <section class="container">
        <div><span>用户名：</span>{{ userInfo.nickname }}</div>
        <div><span>性别：</span> {{ userInfo.gender ? '男' : '女' }}</div>
        <div><span>所在地：</span> {{ `${userInfo.country} ${userInfo.province} ${userInfo.city}` }}</div>
      </section>
    </a-card>
    <div v-else>暂无数据</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ApiGetUserInfo } from '@/apis';
import { message } from 'ant-design-vue';
import actions from '@/shared/actions';

type UserInfo = {
  nickname: string;
  gender: number;
  country: string;
  province: string;
  city: string;
};

@Component({
  name: 'Communication',
})
export default class Communication extends Vue {
  userInfo: UserInfo | null = null;

  mounted() {
    /**添加 观察者 */
    /**onGlobalStateChange 第二个入参为 true，代表立即执行一次观察者函数 */
    actions.onGlobalStateChange((state: any) => {
      const { token } = state;
      if (!token) {
        /**未登录 - 返回主页 */
        message.error('未登录');
        return setTimeout(() => {
          history.pushState(null, 'login', '#/login')
        }, 1000)
      }
      this.getUserInfo(token)
    }, true);
  }

  async getUserInfo(token: string) {
    const result = await ApiGetUserInfo(token)
    console.log(result.data)
    this.userInfo = result.data;
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 30px;
  flex-wrap: wrap;
  div {
    width: 100%;
    margin: 10px;
    text-align: center;
    font-size: 16px;
    span {
      font-weight: bold;
    }
  }
}
</style>
