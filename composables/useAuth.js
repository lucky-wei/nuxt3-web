import { createDiscreteApi } from "naive-ui";
// export const useUser = () => {
//   return useState("user", () => {
//     return null;
//   });
// };
// 获取useState存储的状态信息，如果没有回调函数返回null
export const useUser = () => useState("user", () => null);

// 更新用户信息
export async function useRefreshUserInfo() {
  const token = useCookie();
  const user = useUser();
  // 用户已登录，直接获取用户信息
  if (token.value) {
    if (!user.value) {
      let { data, error } = await useGetinfoAPi();
      // if (data.value) {
      // user.value = data.value;
      // user.value = {
      //   avatar: "",
      //   created_time: "2021-02-21T14:04:02.000Z",
      //   desc: "",
      //   email: "456***@qq.com",
      //   id: 1,
      //   nickname: "",
      //   phone: "153****6613",
      //   sex: "南",
      //   status: 1,
      //   token:
      //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjQ1NioqKkBxcS5jb20iLCJwaG9uZSI6IjE1MyoqKio2NjEzIiwiaWQiOjEsInVzZXJuYW1lIjoiY2VzaGkxIiwibmlja25hbWUiOiIiLCJwYXNzd29yZCI6IjA5MTNmYWIyOWY4YWE5MmY5N2ZlNjQ2ODM5NDA5ZjM3MjZjNGQzZGM2NGY0NDlmMTA2MjJhNTUwMGM3NDBjMDIiLCJhdmF0YXIiOiIiLCJ3ZWl4aW5fdW5pb25pZCI6bnVsbCwic2V4Ijoi5pyq55-lIiwiZGVzYyI6IiIsInN0YXR1cyI6MSwiY3JlYXRlZF90aW1lIjoiMjAyMS0wMi0yMVQxNDowNDowMi4wMDBaIiwidXBkYXRlZF90aW1lIjoiMjAyMy0wOS0wMVQwNTo0OTowMS4wMDBaIiwiaWF0IjoxNjkzODEzMjIxfQ.zcben-zJNq81UcO-pmBmwrlu6ZMl01_j5Nb7xICB6F4",
      //   updated_time: "2023-09-01T05:49:01.000Z",
      //   username: "ceshi1",
      //   weixin_unionid: null,
      // };
      // console.log("user", user.value);
      // }
    }
  }
}

// 退出登录
export async function useLogout() {
  await useLogoutApi();
  const user = useUser();
  const token = useCookie();
  user.value = null;
  token.value = null;
  const { message } = createDiscreteApi(["message"]);
  message.success("退出登录成功！");
  // 回到首页
  const route = useRoute();
  if (route.fullPath != "/") {
    navigateTo("/", { replace: true });
  }
}
