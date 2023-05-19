<template>
  <n-card
    class="cursor-pointer mb-5 shadow-md border-0"
    footer-style="padding:0;"
  >
    <template #cover>
      <UiImage :src="item.cover" class="w-[100%] h-[150px]"></UiImage>
    </template>
    <div class="pt-4">
      <span class="font-bold w-full truncate font-semibold">{{
        item.title
      }}</span>
    </div>
    <div class="mt-2 flex items-end">
      <price :value="item.price"></price>
      <price :value="item.t_price" :througth="true" class="ml-2"></price>
    </div>
    <template #footer v-if="item.group_id || item.flashsale_id">
      <ClientOnly>
        <div
          class="bg-yellow-500 text-white p-3 text-xs flex items-center rounded-b"
        >
          {{ item.group_id ? "拼团中" : "秒杀中" }}
          <div class="ml-auto flex items-center">
            倒计时
            <CountDown :time="item.end_time"></CountDown>
          </div>
        </div>
      </ClientOnly>
    </template>
  </n-card>
</template>
<script setup>
import { NCard } from "naive-ui";
defineProps({
  item: Object,
});
</script>