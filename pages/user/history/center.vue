<template>
  <n-card :content-style="{ 'background-color': theme['--primary-menu-bg'] }">
    <div class="h-[1050px]">
      内容中心
    </div>
  </n-card>
</template>
<script setup>
import { NCard } from "naive-ui";
const theme = useTheme()
</script>