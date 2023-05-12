<template>
    <div>
        <p>This page will be displayed at the /about route.{{ count }}</p>
    </div>
</template>
<script setup>
useHead({
  title:'欢迎about',
})
const count = ref(0)
onMounted(()=> count.value++)
</script>