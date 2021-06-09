/*
 * @Date: 2021-05-28 14:14:06
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 14:59:00
 * @FilePath: /hangzhou-gongquanli/vite.config.ts
 */
/**
 * @type {import('vite').UserConfig}
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    // host: '192.168.1.118',
    // proxy: {
    //   '/api': {
    //     // target: 'http://172.31.54.231:80/rest/main', // 生产
    //     target: 'http://192.168.1.129:7777/rest/main', // 本地
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
})
