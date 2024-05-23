import { defineConfig } from "umi";

export default defineConfig({
  title: "advvision",
  publicPath: "/advvision/",
  history: {type: "hash"},
  routes: [
    { path: "/homepage", redirect: "/" },
    { path: "/", component: "homepage" },
    { path: "/leaderboards", component: "leaderboards" }
  ],
  npmClient: "yarn",
  lessLoader: {
    modifyVars: {
      // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
      hack: `true; @import "~@/common.less";`,
    },
  },
  metas: [
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
  ],

  links: [{ rel: "icon", href: "/favicon.ico" }],
  plugins: [
    "@umijs/plugins/dist/tailwindcss",
    "@umijs/plugins/dist/model",
    "@umijs/plugins/dist/dva",
  ],
  model: {},
  dva: {},
  tailwindcss: {},
});
