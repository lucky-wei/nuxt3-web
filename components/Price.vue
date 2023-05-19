<template>
  <span :class="througth ?'text-grey-500 text-xs line-through':'text-rose-500 font-bold'">
    {{ parseFloat(value) == 0 ? "免费" : "¥" + value }}
  </span>
</template>
<script setup>
defineProps({
  value: {
    type: [String, Number],
    defalut: 0,
  },
  througth:{
    type:Boolean,
    defalut:false
  }
});
</script>