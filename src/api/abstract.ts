import instance from './intercept'
import { AxiosRequest, CustomResponse } from './types'
class Abstract {
  protected headers: object = {
    ContentType: 'application/json;charset=UTF-8',
  }
  private apiAxios({
    headers = this.headers,
    method,
    url,
    data,
    params,
    responseType,
  }: AxiosRequest): Promise<CustomResponse> {
    return new Promise((resolve, reject) => {
      instance({
        headers,
        method,
        url,
        data,
        params,
        responseType,
      })
        .then((res) => {
          if (res.status === 200) {
            resolve({
              status: true,
              message: 'success',
              data: res.data?.data,
              origin: res.data,
            })
          } else {
            resolve({
              status: false,
              message: res.data?.errorMessage || url + '请求失败',
              data: null,
            })
          }
        })
        .catch((err) => {
          const message =
            err?.data?.errorMessage || err?.message || url + '请求失败'
          reject({ status: false, message, data: null })
        })
    })
  }

  // GET
  protected getReq({ headers, url, data, params, responseType }: AxiosRequest) {
    return this.apiAxios({
      headers,
      method: 'GET',
      url,
      data,
      params,
      responseType,
    })
  }
  // POST
  protected postReq({
    headers,
    url,
    data,
    params,
    responseType,
  }: AxiosRequest) {
    return this.apiAxios({
      headers,
      method: 'POST',
      url,
      data,
      params,
      responseType,
    })
  }
  // PUT
  protected putReq({ headers, url, data, params, responseType }: AxiosRequest) {
    return this.apiAxios({
      headers,
      method: 'PUT',
      url,
      data,
      params,
      responseType,
    })
  }
  // DELETE
  protected deleteReq({
    headers,
    url,
    data,
    params,
    responseType,
  }: AxiosRequest) {
    return this.apiAxios({
      headers,
      method: 'DELETE',
      url,
      data,
      params,
      responseType,
    })
  }
}
export default Abstract
