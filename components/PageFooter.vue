<template>
  <!-- 底栏文字 -->
  <div class="mt-auto bg-dark-400 text-gray-100">
    <div class="flex items-center justify-center py-5">
      <a href="#" v-for="i in 5" :key="i" class="p-3"> 友情链接 </a>
    </div>
    <div class="container border-t border-gray-700 flex items-center justify-center py-5">
      <small>
        Copyright @ 2022 dishabi.com 京ICP备201650114100号
      </small>
    </div>
  </div>
</template>
<script setup>
</script>
<style>
</style>
  