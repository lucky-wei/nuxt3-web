<template>
  <div>
    <n-card v-for="i in 4" :key="i" class="mb-5">
      <n-skeleton text style="width: 30%"></n-skeleton>
      <n-skeleton text :repeat="3"></n-skeleton>
      <n-skeleton text style="width: 60%"></n-skeleton>
    </n-card>
  </div>
</template>
<script setup>
import { NCard, NSkeleton } from "naive-ui";
</script>
