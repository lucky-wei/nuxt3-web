export function useLoginAPi(body) {
  return useHttpPost("login", "/login", {
    body,
  });
}
// 注册
export function useRegisterAPi(body) {
  return useHttpPost("reg", "/reg", {
    body,
  });
}

export function useGetinfoAPi() {
  return useHttpGet("getinfo", "/getinfo", {
    $: true,
  });
}

// 退出登录
export function useLogoutApi(){
  return useHttpPost('logout','/logout')
}