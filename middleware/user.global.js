// 文件名添加.global设置为全局中间件
export default defineNuxtRouteMiddleware(async (to,from)=>{
    await useRefreshUserInfo()
})