import axios, {
	AxiosInstance,
	AxiosResponse,
	AxiosError,
	InternalAxiosRequestConfig
} from "axios"
import qs from "qs"
import { getIsLanguage } from "./index"
import { localCache, sessionCache } from "./storage"

// 创建axios实例
const service: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASEPATH, // api 的 base_url
	timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const isLanguage = getIsLanguage()

		if (
			config.method === "post" &&
			config!.headers!["Content-Type"] === "application/x-www-form-urlencoded"
		) {
			config.data = qs.stringify(config.data)
		}
		// header添加token
		config!.headers!["Authentication"] =
			(((localCache.get("tokenHead") as string) +
				localCache.get("token")) as string) || ""

		// 添加companyCode
		if (sessionCache.get("userData") != null) {
			config!.headers!["companyCode"] =
				(sessionCache.get("companyCode") as string) || ""
		}

		// 添加language
		//如果存在则是测评语言
		if (
			localCache.get("evaluationListData") != null ||
			localCache.get("CPAevaluationListData") != null
		) {
			config!.headers!["language"] =
				(localCache.get("evaluationListData") as any)?.responseLanguage ||
				(localCache.get("CPAevaluationListData") as any)?.responseLanguage ||
				isLanguage
		} else {
			//不存在系统语言
			config!.headers!["language"] = isLanguage
		}
		// get参数编码
		if (config.method === "get" && config.params) {
			let url = config.url as string
			url += "?"
			const keys = Object.keys(config.params)
			for (const key of keys) {
				if (config.params[key] !== void 0 && config.params[key] !== null) {
					url += `${key}=${encodeURIComponent(config.params[key])}&`
				}
			}
			url = url.substring(0, url.length - 1)
			config.params = {}
			config.url = url
		}
		return config
	},
	(error: AxiosError) => {
		// Do something with request error
		console.log(error) // for debug
		Promise.reject(error)
	}
)

// response 拦截器
service.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response.config.responseType === "blob") {
			// 如果是文件流，直接过
			return response
		}
		if (response.data.code === 0) {
			return response.data
		} else {
			return Promise.reject(response.data)
		}
	},
	(error: AxiosError) => {
		console.log("err" + error) // for debug
		return Promise.reject(error)
	}
)

export default service
