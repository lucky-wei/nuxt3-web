<template>
  <ul class="center-menu">
    <li @click="navigateTo('/')">
      <n-icon size="20"><WineIcon /> </n-icon>返回首页
    </li>
    <n-menu
      :options="menuOptions"
      :value="chooseModel"
      @update:value="handleUpdateValue"
    />
  </ul>
</template>
<script setup>
import { NMenu, NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const route = useRoute();
const navigatePath = (item) => {
  navigateTo({
    name: item,
  });
};
const chooseModel = ref("user-history-center");
function handleUpdateValue(key, item) {
  chooseModel.value = key;
  navigatePath(key);
}
const menuOptions = [
  {
    label: "个人中心",
    key: "user-history-center",
    icon: renderIcon(BookIcon),
  },
  {
    label: "我的活动",
    key: "user-history-activities",
    icon: renderIcon(PersonIcon),
  },
];
</script>
<style scoped>
:deep(
    .n-menu
      .n-menu-item-content.n-menu-item-content--selected
      .n-menu-item-content__icon
  ) {
  color: #fff;
}
:deep(
    .n-menu
      .n-menu-item-content.n-menu-item-content--selected
      .n-menu-item-content-header
  ) {
  color: #fff;
}
:deep(.n-menu .n-menu-item-content .n-menu-item-content-header) {
  color: rgb(186, 184, 184);
}
:deep(.n-menu .n-menu-item-content .n-menu-item-content__icon) {
  color: rgb(186, 184, 184);
}

.center-menu {
  @apply list-none;
}
.center-menu li {
  @apply px-5 text-warm-gray-400 py-3 text-sm cursor-pointer hover:(bg-gray-300);
}
</style>
