<template>
  <view class="user">
    <h1>用户信息</h1>
    <p v-if="userStore.isLogin">
      欢迎, {{ userStore.userInfo.userInfo.username }}
    </p>
    <p v-else>请先登录</p>
    <button @click="handleLogout">退出登录</button>
  </view>
</template>

<script setup>
import { useUserStore } from '@/store/modules/user';
import RouterUtils from '@/utils/router';

const userStore = useUserStore();

// 退出登录逻辑
const handleLogout = () => {
  userStore.clearUser();
  RouterUtils.goTo('/pages/index/login');
};
</script>

<style scoped>
.user {
  padding: 20px;
}
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
button {
  width: 100%;
  height: 40px;
  background-color: #ff3b30;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}
</style>
