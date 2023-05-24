<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="rounded-lg shadow-lg bg-white p-5">
        <h4 class="pb-4 text-xl text-gray-500">{{ $route.meta.title || "登录" }}</h4>
      <slot />
    </div>
  </div>
</template>
