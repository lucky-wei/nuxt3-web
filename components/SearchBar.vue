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
//箭头函数的作用是创建一个匿名函数，该函数在调用时会执行handlSearch函数。
//这样，我们可以将这个匿名函数作为参数传递给useEnterEvent函数，而不是直接传递handlSearch函数。
//这样做的好处是，我们可以确保handlSearch函数只在按下回车键时被调用，而不是在传递给useEnterEvent函数时立即执行。
useEnterEvent(() => handlSearch());
defineExpose({
  open,
});
</script>