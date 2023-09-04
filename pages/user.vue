<template>
  <n-grid :x-gap="24">
    <n-grid-item :span="2">
      <ul class="center-menu">
        <li @click="navigateTo('/')">返回首页</li>
        <li
          :class="{ active: item.name === activeName }"
          v-for="(item, index) in menus"
          @click="navigatePath(item)"
          :key="index"
        >
          {{ item.title }}
        </li>
      </ul>
    </n-grid-item>
    <n-grid-item :span="22">
      <div class="bg-white mb-10 rounded">
        <NuxtPage :page-key="pageKey" />
      </div>
    </n-grid-item>
  </n-grid>
</template>
<script setup>
import { NGrid, NGridItem } from "naive-ui";
definePageMeta({
  layout: "user",
});
const route = useRoute();
const pageKey = computed(() => route.fullPath);
const activeName = computed(() => route.name);
console.log("activeName", activeName);
const menus = [
  {
    title: "个人中心",
    name: "user-history-page",
  },
  {
    title: "我的活动",
    name: "",
  },
];
const navigatePath = (item) => {
  navigateTo({
    name: item.name,
    params: {
      page: 1,
    },
  });
};
</script>
<style scoped>
.center-menu {
  @apply list-none bg-white rounded;
}
.center-menu li {
  @apply px-5 py-3 text-sm cursor-pointer hover:(bg-blue-50);
}
.center-menu .active {
  @apply font-bold text-blue-500 bg-gray-200;
}
</style>
