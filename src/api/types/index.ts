/*
 * @Date: 2021-01-18 23:20:49
 * @LastEditors: wangjiawei
 * @LastEditTime: 2021-06-04 22:14:01
 * @FilePath: /hangzhou-gongquanli/src/api/types/index.ts
 */
export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' // 定义请求方式
export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

export interface AxiosRequest {
  baseURL?: string
  url: string
  data?: object
  params?: object
  method?: Method
  headers?: object
  timeout?: number
  responseType?: ResponseType
}

export interface AxiosResponse {
  data: any
  headers: object
  request?: object
  status: number
  statusText: string
  config: AxiosRequest
}

export interface CustomResponse {
  readonly status: boolean
  readonly message: string
  data: any
  origin?: any
}
