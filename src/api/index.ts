/*
 * @Date: 2021-01-19 00:26:42
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-06 17:01:23
 * @FilePath: /hangzhou-gongquanli/src/api/index.ts
 */
import Abstract from './abstract'
import store from '@/store'
class Home extends Abstract {
  /**
   * @description: 获取工程数据量情况
   */
  getProjectdata = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/projectdata?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 总涉及金额
   */

  getSjzje = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/sjzje?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 资源资产状况
   */

  getAssetmanagement = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/assetmanagement?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 村级采购
   */

  getVillagepur = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/villagepur?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 务工情况
   */

  getWorkers = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/workers?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 网上公开
   */

  getWsgk = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/wsgk?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 群众诉求
   */

  getQzsq = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/qzsq?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 救助总览
   */

  getJzzl = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/jzzl?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 印章管理
   */

  getYzgl = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yzgl?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 预警总数
   */

  getYjzs = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yjzs?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 地市预警数
   */

  getDsyjs = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/dsyjs?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 预警处理情况
   */

  getYjclqk = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yjclqk?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 预警处理数量
   */

  getYjcls = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yjcls?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 疑似问题情况
   */

  getYswtqk = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yswtqk?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 疑似问题处理情况
   */

  getYswtcls = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yswtcls?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 预警模型情况
   */

  getYjmxqk = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yjmxqk?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 预警处理情况走势图
   */

  getYjclqkzst = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yjclqkzst?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 预警问题走势图
   */

  getYswtqkzst = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yswtqkzst?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }

  /**
   * @description: 预警模型走势图
   */

  getYjmxzst = (citycode: string = '', countycode: string = '') => {
    return this.getReq({
      url: `/api/yjmxzst?year=${store.year}&citycode=${citycode}&countycode=${countycode}`,
    })
  }
}

// 单例模式返回对象
let instance: Home
export default (() => {
  if (instance) return instance
  instance = new Home()
  return instance
})()
