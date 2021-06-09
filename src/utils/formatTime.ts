/*
 * @Date: 2021-05-28 20:17:21
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-05-28 20:23:18
 * @FilePath: /hangzhou-gongquanli/src/utils/formatTime.ts
 */
const formatTime = () => {
  const date = new Date()
  const H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const M = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  // const W = [
  //   '星期日',
  //   '星期一',
  //   '星期二',
  //   '星期三',
  //   '星期四',
  //   '星期五',
  //   '星期六',
  // ][date.getDay()]
  // return `${H}:${M} ${W}`
  return `${H}:${M}`
}

export default formatTime
