<template>
    <div>
      <h3>pinia 持久化缓存示例</h3>
  
      <van-button type="primary" @click="setSession" size="small">set Session</van-button>
      <van-button type="primary" @click="clearSession" size="small">Clear Session</van-button>
  
      <p>Stored User Token: {{ storedUserToken }}</p>
      <p>Stored Session ID: {{ storedSessionId }}</p>


      <van-button type="primary" @click="goToHome" size="small">回到首页</van-button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useUserDataStore } from '@/store/useUserData';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  // 获取 Pinia store
  const sessionStore = useUserDataStore();
  const clearSession = () => {
    sessionStore.clear();
  };
  
  const setSession = () => {
    sessionStore.setItem('userToken', 'abcabc');
    sessionStore.setItem('sessionId', '123456');
  };

  const goToHome = () => {
    router.push('/home');
  };
  
  // 计算属性：从 sessionStore 中获取已存储的值
  const storedUserToken = computed(() => sessionStore.getItem<string>('userToken'));
  const storedSessionId = computed(() => sessionStore.getItem<string>('sessionId'));
  </script>
  
  <style scoped>
  .van-button {
    margin-right: 10px;
  }
  </style>