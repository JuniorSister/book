---
# https://vitepress.dev/reference/default-theme-home-page
layout: home


hero:
  name: pipi
  text: "我是皮皮大魔王"
  tagline: 炸屁姐赏个响屁给你吃
  image:
    src: /logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: 开始
      link: /getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/vuejs/vitepress
      


features:
  - icon: 📝
    title: 专注于您的内容
    details: 只需使用 Markdown 即可轻松创建精美的文档网站
  - icon: 
      dark: /logo.png
      light: /logo-light.png
    title: 享受Vite DX
    details: Instant server start, lightning fast hot updates, and leverage Vite ecosystem plugins.
    link: https://vitejs.cn/
    linkText: Vite
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path fill="#41b883" d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6 3.22-5.6Z"/><path fill="#41b883" d="m2 3.925 14 24.15 14-24.15h-5.6L16 18.415 7.53 3.925Z"/><path fill="#35495e" d="M7.53 3.925 16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"/></svg>
    title: 使用 Vue 进行定制
    details: 直接在 Markdown 中使用 Vue 语法和组件，或使用 Vue 构建自定义主题
  - icon: 🚀
    title: 快速发布网站
    details: 使用静态 HTML 进行快速初始加载，使用客户端路由进行快速加载后导航






---


<style>
  :root {
  /* 标题渐变色 */
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);

  /*图标背景渐变色 */
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);

  /* brand按钮 */
  --vp-button-brand-border: #F6CEEC;
  --vp-button-brand-text: #fff;
  --vp-button-brand-bg: #3a5ccc;

  --vp-button-brand-hover-border: #F6CEEC;
  --vp-button-brand-hover-text: #fff;
  --vp-button-brand-hover-bg: #D939CD;

  --vp-button-brand-active-border: #F6CEEC;
}
</style>