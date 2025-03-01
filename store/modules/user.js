import { defineStore } from 'pinia';

// 定义用户模块
export const useUserStore = defineStore('user', {
  // 状态
  state: () => ({
    token: '', // 用户 token
    userInfo: null, // 用户信息
  }),

  // Getters（可选）
  getters: {
    isLoggedIn: (state) => !!state.token, // 判断用户是否登录
  },

  // Actions
  actions: {
    // 设置 token
    setToken(token) {
      this.token = token;
    },

    // 设置用户信息
    setUserInfo(userInfo) {
      this.userInfo = userInfo;
    },

    // 清除用户信息（退出登录）
    clearUser() {
      this.token = '';
      this.userInfo = null;
    },
  },

  // 持久化配置
  persist: {
    enabled: true, // 开启持久化
    strategies: [
      {
        key: 'user', // 存储的键名
        storage: localStorage, // 持久化方式（H5 使用 localStorage）
      },
    ],
  },
});
