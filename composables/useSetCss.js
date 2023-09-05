// 修改root属性值-全局
export const setCssVar = (prop, val, dom = document.documentElement) => {
  dom.style.setProperty(prop, val);
};
// 实例
// if (process.client) {
//     document.documentElement.style.setProperty("--main-font-size", "18px");
// }