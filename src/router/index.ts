/*
 * @Date: 2021-06-01 16:20:51
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 14:58:29
 * @FilePath: /hangzhou-gongquanli/src/router/index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
  ],
})

export default router
