<template>
  <div>
    <n-grid :x-gap="20" :cols="4">
      <n-grid-item v-for="i in 8" :key="i">
        <n-card class="mb-5">
          <template #cover>
            <n-skeleton height="150px" width="100%"></n-skeleton>
          </template>
          <n-skeleton height="30px" width="50%" class="my-2"></n-skeleton>
          <n-skeleton text style="width: 60%"></n-skeleton>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>
  <script setup>
import { NCard, NSkeleton, NGrid, NGridItem } from "naive-ui";
</script>
  