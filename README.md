# Vue3 + Vant4 + Vite5 移动端项目模板

这是一个基于 Vue 3、Vant 4 和 Vite 5 构建的移动端项目模板。它集成了多种现代前端开发工具和库，旨在提供一个高效、可扩展的开发环境。

## 技术栈

- Vue 3
- Vant 4
- Vite 5
- TypeScript   类型检查
- Pinia        状态管理
- Vue Router   路由管理
- Vue I18n     国际化
- ESLint       代码规范
- Prettier     代码格式化
- PostCSS      样式处理
- axios        api请求

## 特性

1. **响应式布局**: 使用 Vant 组件库和自定义 CSS 实现移动端适配。

2. **状态管理**: 使用 Pinia 进行状态管理，支持持久化存储。

3. **国际化**: 集成 Vue I18n 实现多语言支持。

4. **路由管理**: 使用 Vue Router 进行路由管理。

5. **HTTP 请求**: 封装 Axios 进行 API 请求，支持拦截器和全局配置。

6. **代码规范**: 集成 ESLint 和 Prettier 保证代码质量和一致性。

7. **CSS 预处理**: 使用 Less 作为 CSS 预处理器。

8. **移动端适配**: 集成 postcss-pxtorem 实现 px 到 rem 的自动转换。

9. **自动导入**: 使用 unplugin-auto-import 和 unplugin-vue-components 实现组件和 API 的自动导入。

10. **构建优化**: 使用 Vite 插件优化构建过程和输出。


## 注意事项

- 确保 Node.js 版本 >= 18.0.0，框架搭建时的node版本是v18.20.4
- 开发时请遵循项目既定的代码规范和目录结构
- 提交代码前请运行 `npm run lint:fix` 进行代码格式化和错误修复




## 快速开始

1. 克隆项目

```bash
git clone xxxxx
```

2. 安装依赖

```bash
npm install
```

3. 运行开发服务器

```bash
npm run dev
```

## 项目命令

```json
{
    "scripts": {
        "dev": "vite --mode dev",
        "uat": "vite --mode uat",
        "build": "vite build --mode prod",
        "build:report": "cross-env VITE_REPORT=true vite build --mode prod",
        "lint:fix": "eslint . --fix"
    }
}
```

```
- `npm run dev`: 启动开发服务器
- `npm run uat`: 以 UAT 模式启动开发服务器
- `npm run build`: 构建生产版本
- `npm run build:report`: 构建生产版本并生成报告
- `npm run lint:fix`: 运行 ESLint 并自动修复问题
```

## 项目结构

```
src/
├── api/ # API 请求
├── assets/ # 静态资源
├── components/ # 公共组件
├── locales/ # 国际化文件
├── plugins/ # 插件配置
├── router/ # 路由配置
├── store/ # Pinia 状态管理
├── types/ # TypeScript 类型定义
├── utils/ # 工具函数
├── views/ # 页面组件
├── App.vue # 根组件
└── main.ts # 入口文件
```



## 使用到的库
```
- 使用dayjs代替moment，体积更小，性能更好，地址：https://day.js.org/

- 使用@vueuse 工具函数库，地址：https://vueuse.org/

- postcss-pxtorem 移动端适配，地址：https://github.com/cuth/postcss-pxtorem

- unplugin-auto-import 自动导入，地址：https://github.com/antfu/unplugin-auto-import

- unplugin-vue-components 自动导入组件，地址：https://github.com/antfu/unplugin-vue-components

```

## 开发指南

1. **添加新页面**:
   - 在 `src/views` 目录下创建新的 Vue 组件
   - 在 `src/router/index.ts` 中添加相应的路由配置

2. **状态管理**:
   - 在 `src/store` 目录下创建新的 store
   - 使用 `useStore` 组合式函数在组件中访问状态

3. **API 请求**:
   - 在 `src/api` 目录下添加新的 API 请求函数
   - 使用 `src/utils/request.ts` 中封装的 Axios 实例发送请求

4. **国际化**:
   - 在 `src/locales` 目录下的语言文件中添加新的翻译键值对
   - 在组件中使用 `$t` 函数访问翻译

5. **样式开发**:
   - 组件级别的样式直接在 `.vue` 文件的 `<style>` 标签中编写
   - 全局样式可以在 `src/assets/styles` 目录下编写

6. **移动端适配**:
   - 直接使用 px 单位进行开发，postcss-pxtorem 插件会自动转换为 rem