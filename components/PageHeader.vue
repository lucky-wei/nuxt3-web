<template>
  <div>
    <div class="navbar">
      <div class="container flex items-center h-[60px]">
        <n-button class="text-xl font-bold" text>网站名称</n-button>
        <ui-menu>
          <UiMenuItem v-for="(item, index) in menus" :key="index" :active="route.path == item.path"
            @click="handlerOpen(item.path)">
            {{ item.name }}
          </UiMenuItem>
        </ui-menu>
        <n-button circle class="ml-auto mr-3">
          <template #icon>
            <n-icon size="20">
              <Search />
            </n-icon>
          </template>
        </n-button>
        <n-dropdown :options="userOptions">
          <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
          <!-- <n-button secondary strong>登录</n-button> -->
        </n-dropdown>
      </div>
    </div>
    <div class="w-100% h-80px"></div>
  </div>
</template>
<script setup>
import { NIcon, NButton, NDropdown, NAvatar } from "naive-ui";
import { Search } from "@vicons/ionicons5";
const userOptions = [
  {
    label: "用户中心",
    key: "profile",
  },
  {
    label: "退出",
    key: "logout",
  },
];
const menus = [{
  name: '首页',
  path: '/'
}, {
  name: '考试',
  path: '/paper/1'
}, {
  name: '拼团',
  path: '/list/group/1'
}, {
  name: '秒杀',
  path: '/list/flashsale/1'
}, {
  name: '直播',
  path: '/list/live/1'
}, {
  name: '专栏',
  path: '/list/cloumn/1'
}, {
  name: '电子书',
  path: '/list/book/1'
}, {
  name: '社区',
  path: '/bbs/0/1'
}, {
  name: '课程',
  path: '/list/course/1'
}]
const route = useRoute()
function handlerOpen(path) {
  console.log(path)
  navigateTo(path)
}
</script>
<style>
.navbar {
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
  z-index: 1000;
}
</style>