/*
 * @Date: 2021-05-28 20:17:21
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-05-28 20:23:18
 * @FilePath: /hangzhou-gongquanli/src/utils/formatDate.ts
 */

const formatDate = () => {
  const date = new Date()
  console.log(date)
  const Y = date.getFullYear()
  let M = date.getMonth() + 1
  M = M < 10 ? '0' + M : M
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return `${Y}.${M}.${D}`
}

export default formatDate
