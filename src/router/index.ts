import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: App,
    children: [
      { path: '', redirect: '/home' },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue')
      },
      {
        path: '/session',
        name: 'session',
        component: () => import('@/views/test/store_test.vue')
      },
      {
        // vue-router@4的变化，舍弃*通配符
        // 官方文档：https://next.router.vuejs.org/zh/guide/migration/index.html#%E5%88%A0%E9%99%A4%E4%BA%86-%EF%BC%88%E6%98%9F%E6%A0%87%E6%88%96%E9%80%9A%E9%85%8D%E7%AC%A6%EF%BC%89%E8%B7%AF%E7%94%B1
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/views/404.vue')
      }
    ]
  }
]

const router = createRouter({
  // vueRouter@3版本的mode改成了history，hash模式配置createWebHashHistory，history模式配置createWebHistory
  history: createWebHistory(),
  routes
})

export default router
