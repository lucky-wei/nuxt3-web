<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider width="220px" content-style="background-color:#1f222a;">
      <user-nav></user-nav>
    </n-layout-sider>
    <n-layout content-style="background-color:#f7f9fb;">
      <n-layout-header
        position="absolute"
        style="z-index: 999; background-color: #fff"
      >
        <user-header></user-header>
      </n-layout-header>
      <n-layout-content
        content-style="padding: 24px;margin-top:51px;background-color:#f7f9fb;"
        :native-scrollbar="false"
      >
        <div class="mb-10 rounded">
          <NuxtPage :page-key="pageKey" />
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script setup>
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent } from "naive-ui";
definePageMeta({
  layout: "user",
});
const route = useRoute();
const pageKey = computed(() => route.fullPath);
</script>
