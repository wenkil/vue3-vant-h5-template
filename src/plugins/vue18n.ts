import { createI18n } from "vue-i18n"
import { App } from "vue"
import { localCache } from "@/uitls/storage"

export function setupI18n(app: App) {
	const defaultLanguage = (localCache.get("lang") as string) || "zh-CN"

	const localeFiles = import.meta.glob("../locales/*.ts", { eager: true })

	const messages = Object.fromEntries(
		Object.entries(localeFiles).map(([key, value]) => {
			const locale = key.match(/\/([a-z0-9-_]+)\.ts$/i)?.[1]
			return [locale, (value as any).default]
		})
	)

	const i18n = createI18n({
		legacy: false,
		locale: defaultLanguage, // 当前语言
		fallbackLocale: defaultLanguage, // 如果找不到当前语言的翻译，则使用默认语言的翻译
		messages
	})

	app.use(i18n)
}
