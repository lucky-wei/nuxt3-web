<template>
  <n-drawer
    v-model:show="drawer"
    placement="top"
    :on-after-enter="addKeyDownEvent"
    :on-after-leave="removeKeyDownEvent"
  >
    <div class="h-full flex justify-center items-center">
      <n-input-group class="flex justify-center items-center">
        <n-input
          size="large"
          placeholder="请输入关键词"
          v-model:value="keyword"
          :style="{ width: '500px' }"
        />
        <n-button
          size="large"
          type="primary"
          ghost
          :disabled="!keyword"
          @click="handlSearch"
        >
          搜索
        </n-button>
      </n-input-group>
    </div>
  </n-drawer>
</template>
<script setup>
import { NDrawer, NInputGroup, NInput, NButton } from "naive-ui";
const drawer = ref(false);
const keyword = ref("");
const open = () => {
  keyword.value = "";
  drawer.value = true;
};
const handlSearch = () => {
  setTimeout(() => {
    drawer.value = false;
  }, 100);
  navigateTo({
    name: "search-type-page",
    params: {
      type: "course",
      page: 1,
    },
    query: {
      keyword: keyword.value,
    },
  });
};
// 添加回车事件
const addKeyDownEvent = () =>
  document.addEventListener("keydown", handleEnterEvent);
const removeKeyDownEvent = () =>
  document.removeEventListener("keydown", handleEnterEvent);
function handleEnterEvent(e) {
  if (e.key == "Enter" && keyword) {
    handlSearch();
  }
}
defineExpose({
  open,
});
</script>