// 讲对象转url参数
export function useQueryToString(query = {}) {
    let q = ""
    for (const key in query) {
        if (q == "") {
            q = `?${key}=${query[key]}`
        } else {
            q += `&${key}=${query[key]}`
        }
    }
    return q
}

// 登录回车事件绑定
export function useEnterEvent(event) {
    function handleEnterEvent(e) {
        if (e.key === "Enter") {
            event()
            // 取消事件默认动作
            e.preventDefault()
        }
    }
    onBeforeMount(()=> document.addEventListener("keydown", handleEnterEvent))
    onUnmounted(()=> document.removeEventListener("keydown", handleEnterEvent))
}