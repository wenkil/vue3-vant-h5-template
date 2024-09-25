import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { setupStore } from "./store"
import { setupI18n } from "./plugins/vue18n"
// 移动端适配
import "./plugins/flexible.js" // 使用flexible.js 动态自动指定px
// document.documentElement.style.fontSize = '16px'; // 使用固定px
// 全局引入按需引入UI库 vant
import { vantPlugins } from "./plugins/vant"

// 创建 Vue 应用实例
const app = createApp(App)
// 注册 Pinia 和持久化插件
setupStore(app)
// 注册 vue-i18n
setupI18n(app)

app.use(router)
app.use(vantPlugins)
app.mount("#app")
