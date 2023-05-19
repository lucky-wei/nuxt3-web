export async function usePage(initApiCallback) {
    const route = useRoute()
    const page = ref(parseInt(route.params.page));
    const limit = ref(10);
    const { data, pending, refresh, error } = await initApiCallback(
        {
            page: page.value,
            limit: limit.value,
        }
    )
    const rows = computed(() => data.value?.rows ?? []);
    const total = computed(() => data.value?.total ?? 0);

    const handlePageSizeChange = (p) => {
        navigateTo({
            params: {
                ...route.params,
                page: p,
            },
            query: {
                ...route.query,
            },
        });
    }
    return{
        data,
        page,
        pending,
        limit,
        refresh,
        error,
        rows,
        total,
        handlePageSizeChange
    }
}