/*
 * @Date: 2021-01-19 00:26:42
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-09 14:58:50
 * @FilePath: /hangzhou-gongquanli/src/api/index.ts
 */
import Abstract from './abstract'
class Home extends Abstract {}

// 单例模式返回对象
let instance: Home
export default (() => {
  if (instance) return instance
  instance = new Home()
  return instance
})()
