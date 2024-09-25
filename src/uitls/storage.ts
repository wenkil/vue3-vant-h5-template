/**
 * 封装操作localstorage本地存储的方法
 */
export const localCache = {
  // 存储
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  // 取出数据
  get<T>(key: string) {
    const value = window.localStorage.getItem(key);
    if (value && value !== "undefined" && value !== "null") {
      return <T>JSON.parse(value);
    }
  },
  // 删除数据
  remove(key: string) {
    window.localStorage.removeItem(key);
  },

  // 清空所有数据
  clear() {
    window.localStorage.clear();
  }
};

/**
 * 封装操作sessionStorage本地存储的方法
 */
export const sessionCache = {
  // 存储
  set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  // 取出数据
  get(key: string) {
    const value = window.sessionStorage.getItem(key);
    if (value && value !== "undefined" && value !== "null") {
      return JSON.parse(value);
    }
    return null;
  },
  // 删除数据
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  },
  // 清空所有数据
  clear() {
    window.sessionStorage.clear();
  }
};
