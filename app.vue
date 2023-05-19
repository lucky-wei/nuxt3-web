<template>
  <NConfigProvider inline-theme-disabled>
    <NuxtLayout>
      <!-- nuxt3 官方loading条 -->
      <!-- <NuxtLoadingIndicator /> -->
      <NuxtPage />
    </NuxtLayout>
  </NConfigProvider>
</template>
<script setup>
import { NConfigProvider } from "naive-ui";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 山东南翔哇唧唧哇` : "山东南翔哇唧唧哇";
  },
});
</script>
