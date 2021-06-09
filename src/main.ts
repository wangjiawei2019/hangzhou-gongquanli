/*
 * @Date: 2021-05-28 14:14:06
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 16:06:52
 * @FilePath: /hangzhou-gongquanli/src/main.ts
 */
import { createApp } from 'vue'
import './tailwind.css'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/reset-element.scss'

import App from './App.vue'
import router from '@/router'
import './assets/css/font.css'
import 'animate.css'
import {
  ElTable,
  ElEmpty,
  ElTableColumn,
  ElPagination,
  ElLoading,
  ElDatePicker,
  locale,
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

// 设置语言
locale(lang)
const components = [ElTable, ElEmpty, ElTableColumn, ElPagination, ElDatePicker]
const plugins = [ElLoading]
const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

// @ts-ignore
plugins.forEach((plugin) => app.use(plugin))

app.use(router).mount('#app')
