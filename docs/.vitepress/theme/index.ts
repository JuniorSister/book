import DefaultTheme from 'vitepress/theme'
import './style/index.css'
/* .vitepress\theme\index.ts */
import Mycomponent from "./components/Mycomponent.vue"
import type { Theme } from 'vitepress'
import MyLayout from '../theme/Layout.vue'

export default {
  extends: DefaultTheme,
  Layout:MyLayout,
  enhanceApp({app}) {
    // 注册全局组件
    app.component('Mycomponent' , Mycomponent)
  }
} satisfies Theme