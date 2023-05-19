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
    return res
}

// get
export function useHttpGet(key,url,options = {}){
    options.method = "GET"
    return useHttp(key,url,options)
}
// post
export function useHttpPost(key,url,options = {}){
    options.method = "POST"
    return useHttp(key,url,options)
}