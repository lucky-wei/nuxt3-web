export function useSearchApi(query) {
    // 动态传参
    return useHttpGet('searchList', () => {
        let q = useQueryToString(query())
        return `/search${q}`
    }, {
        lazy: true
    })
}