/*
 * @Date: 2021-01-18 23:31:54
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-05 20:17:29
 * @FilePath: /hangzhou-gongquanli/src/api/intercept.ts
 */
import axios, { AxiosRequestConfig, Method } from 'axios'
// import { ElLoading } from 'element-plus'

interface PendingType {
  url: string | undefined
  method: Method | undefined
  params: object
  data: object
  cancel: Function
}

// 取消重复请求
const pending: Array<PendingType> = []
const CancelToken = axios.CancelToken
// axios 实例
const instance = axios.create({
  timeout: 100000,
  responseType: 'json',
})
// let loadingInstance

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: number = +key
    const list: PendingType = pending[key]
    if (
      list.url === config.url &&
      list.method === config.method &&
      JSON.stringify(list.params) === JSON.stringify(config.params) &&
      JSON.stringify(list.data) === JSON.stringify(config.data)
    ) {
      list.cancel('操作太频繁，请稍后再试')
      pending.splice(item, 1)
    }
  }
}

// 添加请求拦截器
instance.interceptors.request.use(
  (request) => {
    // loadingInstance = ElLoading.service({
    //   text: '加载中',
    //   background: 'rgba(0, 0, 0, 0.6)',
    // })
    removePending(request)

    request.cancelToken = new CancelToken((c) => {
      pending.push({
        url: request.url,
        method: request.method,
        params: request.params,
        data: request.data,
        cancel: c,
      })
    })
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    const {
      data: { code = '' },
    } = response
    // loadingInstance.close()

    removePending(response.config)
    return response
  },
  (error) => {
    // loadingInstance.close()
    const response = error.response
    // 根据返回 code 值，做不同操作
    switch (response?.status) {
      case 401:
        break
      case 403:
        // 没有权限
        // location.href = '/403';
        break
      case 500:
      // 服务器错误
      // location.href = '/500';
      default:
        break
    }

    // 超时重新请求
    const config = error.config
    const [RETRY_COUNT, RETRY_DELAY] = [3, 1000]
    if (config && RETRY_COUNT) {
      // 设置用于跟踪重试计数的变量
      config.__retryCount = config.__retryCount || 1
      // 检查是否已经把重试的次数用完
      if (config.__retryCount >= RETRY_COUNT) {
        return Promise.reject(response || { message: error.message })
      }
      // 增加重试次数
      config.__retryCount++
      // 创造新的 Promise 来处理指数后退
      const backoff = new Promise((resolve) => {
        setTimeout(() => {
          resolve(null)
        }, RETRY_DELAY || 1)
      })
      // instance 重试请求的 Promise
      return backoff.then(() => {
        return instance(config)
      })
    }

    return Promise.reject(response || { message: error.message })
  }
)

export default instance
