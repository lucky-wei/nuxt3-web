<template>
  <div>
    <h5 class="text-lg my-3">"{{ title }}"的搜索结果</h5>
    <UiTab>
      <UiTabItem
        v-for="(item, index) in tabs"
        :key="index"
        :active="type == item.value"
        @click="handleClick(item.value)"
        >{{ item.label }}</UiTabItem
      >
    </UiTab>
    <LoadingGroup :pending="pending" :error="error">
      <template #loading>
        <LoadingCourseSkeleton></LoadingCourseSkeleton>
      </template>
      <n-grid :x-gap="10" :y-gap="5" :cols="4">
        <n-gi v-for="(item, index) in rows" :key="index">
          <CourseList :item="item"></CourseList>
        </n-gi>
      </n-grid>
      <div class="flex justify-center items-center mt-10">
        <n-pagination
          :item-count="total"
          size="large"
          :page="page"
          :page-size="limit"
          @update:page-size="handlePageSizeChange"
        />
      </div>
    </LoadingGroup>
  </div>
</template>
<script setup>
import { NGrid, NGi, NPagination } from "naive-ui";
import { Keypad } from "@vicons/ionicons5";

const route = useRoute();
const title = ref(route.query.keyword);
const type = ref(route.params.type);

useHead({ title });
const tabs = [
  {
    label: "课程",
    value: "course",
  },
  {
    label: "专栏",
    value: "column",
  },
];
const handleClick = (value) => {
  navigateTo({
    params: {
      ...route.params,
      type: value,
    },
    query: {
      ...route.query,
    },
  });
};
// // 请求接口
// const page = ref(parseInt(route.params.page));
// const limit = ref(10);
// const { data, pending, refresh, error } = await useSearchApi(() => {
//   return {
//     page: page.value,
//     keyword: encodeURIComponent(title.value),
//     type: type.value,
//   }
// });
// const rows = computed(() => data.value?.rows ?? []);
// const total = computed(() => data.value?.total ?? 0);
// const handlePageSizeChange = (p) => {
//   navigateTo({
//     params: {
//       ...route.params,
//       page: p,
//     },
//     query: {
//       ...route.query,
//     },
//   });
// };
const { page, limit, total, pending, handlePageSizeChange, rows, refresh,error } =
  await usePage(({ page, limit }) =>
    useSearchApi(() => {
      return {
        page,
        keyword: encodeURIComponent(title.value),
        type: type.value,
      };
    })
  );

const stop = watch(
  () => route.query.keyword,
  (newValue) => {
    title.value = newValue;
    refresh();
  }
);
onBeforeUnmount(() => stop());
definePageMeta({
  middleware: ["search"],
});
</script>