import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import prettier from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"
import unusedImports from "eslint-plugin-unused-imports"

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,vue}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/essential"],
	prettier,
	{
		files: ["**/*.vue"],
		languageOptions: { parserOptions: { parser: tseslint.parser } }
	},
	{
		plugins: {
			prettier: prettierPlugin,
			"unused-imports": unusedImports // 添加 unused-imports 插件
		},
		rules: {
			"prettier/prettier": "error", // 使用 Prettier 的规则
			"vue/script-setup-uses-vars": "error", // 确保 <script setup> 中声明的变量被使用
			"@typescript-eslint/explicit-function-return-type": "off", // 关闭显式函数返回类型检查
			"vue/custom-event-name-casing": "off", // 关闭自定义事件名称的大小写检查
			"no-use-before-define": "off", // 允许在定义前使用变量
			"@typescript-eslint/no-use-before-define": "off", // 允许在定义前使用变量（TypeScript）
			"@typescript-eslint/ban-ts-comment": "off", // 允许使用 @ts-comment 注释
			"@typescript-eslint/ban-types": "off", // 允许使用特定类型（如 {}、Object 等）
			"@typescript-eslint/no-non-null-assertion": "off", // 允许使用非空断言（!）
			"@typescript-eslint/explicit-module-boundary-types": "off", // 关闭显式模块边界类型检查
			"@typescript-eslint/no-var-requires": "off", // 允许使用 require 语句
			"@typescript-eslint/no-empty-function": "off", // 允许空函数
			"@typescript-eslint/ban-ts-ignore": "off", // 允许使用 @ts-ignore 注释
			"@typescript-eslint/no-unused-vars": "error", // 不允许未使用的变量（TypeScript）
			"no-unused-vars": "error", // 不允许未使用的变量
			"@typescript-eslint/no-explicit-any": "off", // 关闭 no-explicit-any 规则，允许使用 any 类型
			"no-console": "warn", // 允许 console，但会有警告
			"space-before-function-paren": "off", // 关闭函数括号前的空格检查
			"vue/attributes-order": "off", // 关闭 Vue 组件属性顺序检查
			"vue/one-component-per-file": "off", // 允许每个文件多个组件
			"vue/html-closing-bracket-newline": "off", // 关闭 HTML 关闭括号换行检查
			"vue/max-attributes-per-line": "off", // 关闭每行最大属性数检查
			"vue/multiline-html-element-content-newline": "off", // 关闭多行 HTML 元素内容换行检查
			"vue/singleline-html-element-content-newline": "off", // 关闭单行 HTML 元素内容换行检查
			"vue/attribute-hyphenation": "off", // 关闭属性连字符检查
			"vue/require-default-prop": "off", // 关闭要求默认属性检查
			"vue/require-explicit-emits": "off", // 关闭要求显式 emits 声明检查
			"vue/v-on-event-hyphenation": "off", // 关闭 v-on 事件连字符检查
			"vue/multi-word-component-names": "off", // 关闭 multi-word-component-names 规则，允许使用单个单词的组件名
			"vue/html-self-closing": [
				"error",
				{
					html: {
						void: "always", // HTML 空元素总是自闭合
						normal: "never", // 普通 HTML 元素不自闭合
						component: "always" // Vue 组件总是自闭合
					},
					svg: "always", // SVG 元素总是自闭合
					math: "always" // MathML 元素总是自闭合
				}
			],
			"vue/no-reserved-component-names": "off", // 允许使用保留的组件名称
			"vue/no-v-html": "off" // 允许使用 v-html 指令
		}
	},
	{
		files: ["*.vue"],
		rules: {
			"unused-imports/no-unused-imports": "error", // 不允许未使用的导入
			"unused-imports/no-unused-vars": [
				"error",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_"
				}
			],
			"@typescript-eslint/no-unused-vars": "error", // 不允许未使用的变量（TypeScript）
			"no-unused-vars": [
				"error",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_"
				}
			] // 不允许未使用的变量
		}
	},
	{
		files: ["*.config.js"],
		languageOptions: {
			globals: {
				module: "readonly" // 允许在 .config.js 文件中使用 module 变量
			}
		},
		rules: {
			"no-undef": "off" // 关闭 no-undef 规则
		}
	},
	{
		ignores: [
			"**/*.d.ts",
			".config/*",
			"**/node_modules/*",
			"**/dist/*",
			"**/build/*",
			"**/public/*",
			"**/types/*",
			".config.js"
		] // 全局忽略
	}
]
