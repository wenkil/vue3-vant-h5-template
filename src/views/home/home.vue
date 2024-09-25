<template>
  <div class="home">
    <h3>首页</h3>
    <van-button type="primary" @click="goToLogin" size="small">登录页</van-button>
    <van-button type="primary" @click="goToSession" size="small">Session测试页</van-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push('/login');
};

const goToSession = () => {
  router.push('/session');
};
</script>

<style lang="less" scoped>
.home {
  padding: 20px;
}

.van-button {
  margin-right: 10px;
}
</style>
