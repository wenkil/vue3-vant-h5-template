import { defineStore } from 'pinia';

const storeKey = 'userData';

export const useUserDataStore = defineStore(storeKey, {
  // 正确声明 state 函数及其返回类型
  state: () => ({
    userToken: '',
    sessionId: '',
    commonCode: '',
  }),
  actions: {
    // 设置临时变量
    setItem(key: string, value: any) {
      this[key] = value; // 使用 this 直接访问状态
    },

    // 获取临时变量
    getItem<T>(key: string): T | null {
      return this[key] ?? null; // 同样使用 this 访问状态
    },

    // 删除临时变量
    removeItem(key: string) {
      delete this[key]; // 直接删除 this 上的键
    },

    // 清空所有存储的临时变量
    clear() {
      this.$reset(); // Pinia 提供的重置方法
    },
  },
  // 持久化配置
  persist: {
    key: storeKey,// 动态传递的 key
    storage: sessionStorage,// 使用 sessionStorage 进行存储
    serializer: {
      // 自定义序列化方法，使用 JSON.stringify 进行序列化
      serialize: (state) => {
        return JSON.stringify(state);
      },
      // 自定义反序列化方法，使用 JSON.parse 解析数据
      deserialize: (storedValue) => {
        try {
          return JSON.parse(storedValue);
        } catch (error) {
          return storedValue;
        }
      },
    },
  },
});