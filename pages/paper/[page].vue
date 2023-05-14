<template>
    <div>
        <p>考试页码{{ $route.params.page }}</p>
    </div>
</template>
<script setup>
useHead({
  title:'paper',
})
const count = ref(0)
onMounted(()=> count.value++)
const route = useRoute()
console.log(route.params.page)
</script>