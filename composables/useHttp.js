import { createDiscreteApi } from "naive-ui"
const fetchConfig = {
    baseURL: "http://demonuxtapi.dishait.cn/pc",
    headers: {
        appid: "bd9d01ecc75dbbaaefce",
    },
}

// 请求拦截器
function useGetFetchOptions(options) {
    options.baseURL = options.baseURL ?? fetchConfig.baseURL
    options.headers = options.headers ?? fetchConfig.headers
    options.lazy = options.lazy ?? false

    // 用户登录 默认token
    return options
}

export async function useHttp(key, url, options = {}) {
    options = useGetFetchOptions(options)
    options.key = key
    let res = await useFetch(url, {
        ...options,
        // 响应之前的数据处理
        transform: (res) => {
            return res.data;
        },
    })
    // 客户端错误处理
    if (process.client && res.error.value) {
        const msg = res.error.value?.data?.data
        // 懒加载会报错
        if (!options.lazy) {
            const { message } = createDiscreteApi(['message'])
            message.error(msg)
        }
    }
    return res
}

// get
export function useHttpGet(key, url, options = {}) {
    options.method = "GET"
    return useHttp(key, url, options)
}
// post
export function useHttpPost(key, url, options = {}) {
    options.method = "POST"
    return useHttp(key, url, options)
}