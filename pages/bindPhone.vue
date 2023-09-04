<template>
  <n-form
    :model="form"
    class="w-[340px]"
    ref="formRef"
    :rules="rules"
    size="large"
  >
    <n-form-item :show-label="false" path="username">
      <n-input
        v-model:value="form.username"
        :placeholder="
          type === 'login' ? '用户名/手机号/邮箱必填' : '用户名必填'
        "
      />
    </n-form-item>
    <n-form-item :show-label="false" path="password">
      <n-input
        type="password"
        v-model:value="form.password"
        placeholder="密码"
      />
    </n-form-item>
    <n-form-item v-if="type != 'login'" :show-label="false" path="repassword">
      <n-input
        type="password"
        v-model:value="form.repassword"
        placeholder="确认密码"
      />
    </n-form-item>
    <div class="flex justify-between w-full mb-2">
      <n-button quaternary type="primary" size="tiny" @click="changeType">{{
        type === "login" ? "注册" : "登录"
      }}</n-button>
      <n-button quaternary type="primary" size="tiny">忘记密码</n-button>
    </div>
    <div>
      <n-button
        class="w-full"
        type="primary"
        @click="onSubmit"
        :loading="loading"
        >{{ type === "login" ? "登录" : "注册" }}</n-button
      >
    </div>
    <div
      class="flex items-center justify-center w-full text-xs mt-5 text-gray-600"
    >
      注册即同意
      <n-button quaternary type="primary" size="tiny">《服务协议》</n-button>
      和
      <n-button quaternary type="primary" size="tiny">《隐私政策》</n-button>
    </div>
  </n-form>
</template>
<script setup>
import { NForm, NFormItem, NInput, NButton, createDiscreteApi } from "naive-ui";
</script>
