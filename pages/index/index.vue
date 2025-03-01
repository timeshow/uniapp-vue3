<template>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <up-button type="success" text="成功"></up-button>
        <view class="text-area">
            <text class="title">欢迎, {{ userStore.userInfo?.userInfo.username }}</text>
        </view>
    </view>
</template>

<script setup>
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore()
</script>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
