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
    return titleChunk ? `山东建筑业协会-${titleChunk}` : "山东建筑业协会";
  },
});
</script>
