import { createDiscreteApi } from "naive-ui"
export default defineNuxtPlugin((nuxtApp) => {
    const bar = ref(null)
    nuxtApp.hook("app:mounted", () => {
        console.log("app:mounted")
        if (!bar.value) {
            // 加载loadingbar组件
            const { loadingBar } = createDiscreteApi(["loadingBar"])
            bar.value = loadingBar
        }
    })
    nuxtApp.hook("page:start", () => {
        console.log("page:start")
        bar.value?.start()
    })
    nuxtApp.hook("page:finish", () => {
        setTimeout(() => {
            bar.value?.finish()
        }, 150)
        console.log("page:finish")
    })
    nuxtApp.hook("app:error", () => {
        console.log("app:error")
        if(process.client){
            setTimeout(() => {
                bar.value?.finish()
            }, 150)
        }
    })
})