<template>
  <div>
    <div class="navbar">
      <div class="container flex items-center h-[60px]">
        <n-button class="text-xl font-bold" text>网站名称</n-button>
        <ui-menu>
          <UiMenuItem
            v-for="(item, index) in menus"
            :key="index"
            :active="isMenuActive(item)"
            @click="handlerOpen(item.path)"
          >
            {{ item.name }}
          </UiMenuItem>
        </ui-menu>
        <n-button circle class="ml-auto mr-3" @click="openSearch">
          <template #icon>
            <n-icon size="20">
              <Search />
            </n-icon>
          </template>
        </n-button>
        <nuxt-link to="/login" v-if="!user">
          <n-button secondary strong>登录</n-button>
        </nuxt-link>
        <n-dropdown :options="userOptions" @select="handleSelect" v-else>
          <n-avatar
            round
            size="small"
            :src="
              user.avatar ||
              'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
            "
          />
        </n-dropdown>
      </div>
    </div>
    <div class="w-100% h-80px"></div>
    <SearchBar ref="SearchBarRef"></SearchBar>
  </div>
</template>
<script setup>
import {
  NIcon,
  NButton,
  NDropdown,
  NAvatar,
  createDiscreteApi,
} from "naive-ui";
import { Search } from "@vicons/ionicons5";
const user = useUser();
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
const handleSelect = (e) => {
  if (e === "logout") {
    const { dialog } = createDiscreteApi(["dialog"]);
    dialog.warning({
      content: "是否要退出登录？",
      positiveText: "退出",
      negativeText: "取消",
      onPositiveClick: async () => {
        await useLogout();
      },
    });
  } else {
    navigateTo({
      path: "/user/history/1",
    });
  }
};
const menus = [
  {
    name: "首页",
    path: "/",
  },
  {
    name: "考试",
    path: "/paper/1",
    match: [
      {
        name: "paper-page",
      },
    ],
  },
  {
    name: "拼团",
    path: "/list/group/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type: "group",
        },
      },
    ],
  },
  {
    name: "秒杀",
    path: "/list/flashsale/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type: "flashsale",
        },
      },
    ],
  },
  {
    name: "直播",
    path: "/list/live/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type: "live",
        },
      },
    ],
  },
  {
    name: "专栏",
    path: "/list/cloumn/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type: "cloumn",
        },
      },
    ],
  },
  {
    name: "电子书",
    path: "/list/book/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type: "book",
        },
      },
    ],
  },
  {
    name: "社区",
    path: "/bbs/0/1",
    match: [
      {
        name: "bbs-bbs_id-page",
      },
    ],
  },
  {
    name: "课程",
    path: "/list/course/1",
    match: [
      {
        name: "list-type-page",
        params: {
          type: "course",
        },
      },
    ],
  },
];
const route = useRoute();
const isMenuActive = (item) => {
  if (item.match) {
    let i = item.match.findIndex((o) => {
      let res = true;
      if (o.params && typeof o.params == "object") {
        res =
          Object.keys(o.params).findIndex(
            (k) => route.params[k] == o.params[k]
          ) != -1;
      }
      return o.name == route.name && res;
    });
    return i != -1;
  }
  return item.path == route.path;
};
function handlerOpen(path) {
  // console.log(path);
  navigateTo(path);
}
const SearchBarRef = ref(null);
const openSearch = () => SearchBarRef.value.open();
</script>
<style>
.navbar {
  @apply bg-white fixed top-0 left-0 right-0 shadow-sm;
  z-index: 1000;
}
</style>
