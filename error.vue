<template>
  <div class="mt-200px">
    <n-result
      status="500"
      title="错误提示"
      :description="error.message"
    >
      <template #footer>
        <n-button @click="handleError">散财消灾</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup>
import { NResult, NButton } from "naive-ui";

const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>