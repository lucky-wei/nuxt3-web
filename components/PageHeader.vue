<template>
  <div>
    <div class="navbar">
      <div class="container flex items-center h-[60px]">
        <n-button class="text-xl font-bold" text>网站名称</n-button>
        <div class="menu">
          <div class="menu-item menu-item-active">首页</div>
          <div class="menu-item" v-for="(item, index) in 8" :key="index">
            首页
          </div>
        </div>
        <n-button circle class="ml-auto mr-3">
          <template #icon>
            <n-icon size="20">
              <Search />
            </n-icon>
          </template>
        </n-button>
        <n-dropdown :options="userOptions">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
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
const router = useRouter();
const route = useRoute();
const name = ref("1");
const type = ref(1);
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
function navgateTo() {
  return navgateTo({
    path: "/ablout",
    query: {
      name: name.value,
      type: type.value,
    },
  });
}
// console.log(route);
</script>
<style>
.navbar {
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
  z-index: 1000;
}
.menu {
  @apply flex items-center px-4;
}
.menu-item {
  transition: all 0.2s;
  cursor: pointer;
  @apply px-2 py-1 mx-1 rounded hover:(bg-blue-50 text-blue-700) active:(bg-blue-100);
}
.menu-item-active {
  @apply bg-blue-100 text-blue-600;
}
</style>