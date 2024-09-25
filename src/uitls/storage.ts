/**
 * 封装操作localstorage本地存储的方法
 */
export const localCache = {
	// 存储
	set(key: string, value: any) {
		window.localStorage.setItem(key, JSON.stringify(value))
	},
	// 取出数据
	get<T>(key: string) {
		const value = window.localStorage.getItem(key)
		if (value === null || value === "undefined" || value === "null") return null
		try {
			return JSON.parse(value) as T
		} catch {
			return value // 如果解析失败，直接返回原始字符串
		}
	},
	// 删除数据
	remove(key: string) {
		window.localStorage.removeItem(key)
	},

	// 清空所有数据
	clear() {
		window.localStorage.clear()
	}
}

/**
 * 封装操作sessionStorage本地存储的方法
 */
export const sessionCache = {
	// 存储
	set(key: string, value: any) {
		window.sessionStorage.setItem(key, JSON.stringify(value))
	},
	// 取出数据
	get<T>(key: string) {
		const value = window.sessionStorage.getItem(key)
		if (value === null || value === "undefined" || value === "null") return null
		try {
			return JSON.parse(value) as T
		} catch {
			return value // 如果解析失败，直接返回原始字符串
		}
	},
	// 删除数据
	remove(key: string) {
		window.sessionStorage.removeItem(key)
	},
	// 清空所有数据
	clear() {
		window.sessionStorage.clear()
	}
}
