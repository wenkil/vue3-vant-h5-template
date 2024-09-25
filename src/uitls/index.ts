import { localCache } from "./storage"

/**
 * 获取语言
 * @returns
 */
export const getIsLanguage = () => {
	let isLanguage = 1
	switch (localCache.get("lang")) {
		case "zh-CN":
			isLanguage = 1
			break
		case "zh-TW":
			isLanguage = 2
			break
		case "en":
			isLanguage = 3
			break
		case "th":
			isLanguage = 4
			break
		default:
	}
	return isLanguage
}
