<template>
  <view class="login-container">
    <!-- 登录表单 -->
    <u-form :model="formData" :rules="rules" ref="form">
      <!-- 用户名输入框 -->
      <u-form-item label="用户名" prop="username">
        <u-input v-model="formData.username" placeholder="请输入用户名" />
      </u-form-item>

      <!-- 密码输入框 -->
      <u-form-item label="密码" prop="password">
        <u-input
          type="password"
          v-model="formData.password"
          placeholder="请输入密码"
        />
      </u-form-item>

      <!-- 登录按钮 -->
      <u-button type="primary" @click="handleLogin">登录</u-button>
    </u-form>

    <!-- 错误提示 -->
    <view v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/store/modules/user'; // 引入用户状态管理
import { login } from '@/api/user'; // 引入登录接口

// 表单数据
const formData = ref({
  username: '',
  password: '',
});

// 表单验证规则
const rules = ref({
  username: [
    { required: true, message: '用户名不能为空' },
    { minLength: 3, maxLength: 20, message: '用户名长度为3-20个字符' },
  ],
  password: [
    { required: true, message: '密码不能为空' },
    { minLength: 6, maxLength: 20, message: '密码长度为6-20个字符' },
  ],
});

// 错误信息
const errorMessage = ref('');

// 表单引用
const form = ref(null);

// 处理登录
const handleLogin = async () => {
  try {
    // 表单验证
    await form.value.validate();

    // 调用登录接口
    const response = await login(formData.value);

    // 登录成功
    if (response.code == 0) {
      uni.showToast({
        title: '登录成功',
        icon: 'success',
      });

      // 保存用户信息到状态管理
      const userStore = useUserStore();
      userStore.setUserInfo(response.data);

      // 跳转到首页
      uni.switchTab({
        url: '/pages/index/index',
      });
    } else {
      // 登录失败
      errorMessage.value = response.message || '登录失败，请重试';
    }
  } catch (error) {
    // 表单验证失败或接口调用失败
    errorMessage.value = error.message || '登录失败，请检查输入';
  }
};
</script>

<style scoped>
.login-container {
  padding: 20px;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
