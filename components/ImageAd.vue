<template>
  <div>
    <img
      v-for="(item, index) in data"
      :key="index"
      :src="item.src"
      alt="" @click="$commonOpen(item)"
      class="w-[100%] h-[100px] cursor-pointer mb-6 rounded"
    />
  </div>
</template>
<script setup>
defineProps({
  data: Array,
});
// const nuxtApp = useNuxtApp()
// console.log(nuxtApp.$commonOpen)
</script>
