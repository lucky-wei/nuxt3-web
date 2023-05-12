<template>
  <div>
    <h1>首页</h1>
    <n-button type="primary" size="medium">按钮</n-button>
    <button class="btn">按钮</button>
  </div>
</template>
<script setup>
useHead({
  title: "首页",
});
import { NButton } from "naive-ui";

</script>
<style>
.btn {
  transition: .3s all ease-in;
  @apply text-purple-600 border-purple-600 border-1 px-[20px] py-[20px] rounded-full hover:(bg-purple-600 text-white);
}
.btn:hover{
  transform: scale(1.1);
}
</style>