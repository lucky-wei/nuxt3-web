<template>
  <LoadingGroup :pending="pending" :error="error">
    <div v-for="(item, index) in data" :key="index">
      <banner :data="item.data" v-if="item.type == 'swiper'"> </banner>
      <image-nav :data="item.data" v-else-if="item.type == 'icons'"></image-nav>
      <image-ad :data="item.data" v-else-if="item.type == 'imageAd'"></image-ad>
      <list-card
        :title="item.title"
        :data="item.data"
        v-else-if="item.type == 'list'"
      ></list-card>
      <list-card
        :title="item.title"
        :data="item.data"
        :type="item.listType"
        v-else-if="item.type == 'promotion'"
      ></list-card>
    </div>
  </LoadingGroup>
</template>
<script setup>
useHead({
  title: "首页",
});
const { pending, refresh, data, error } = await useIndexDataApi();

//服务端直接报错
if (process.server && error.value) {
  throwError(error?.value?.data);
}
</script>
<style>
/* .btn {
  transition: .3s all ease-in;
  @apply text-purple-600 border-purple-600 border-1 px-[20px] py-[20px] rounded-full hover:(bg-purple-600 text-white);
}
.btn:hover{
  transform: scale(1.1);
} */
</style>