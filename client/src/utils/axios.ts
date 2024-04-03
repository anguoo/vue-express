import axios, { AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
import { ElLoading } from 'element-plus'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

interface myResponseType<T> extends AxiosResponse {
    code: number,
    msg: string,
    data: T
}
let loading: any
let loadingCount = 0
const startLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
const endLoading = () => {
  loading.close()
}

const service = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'X-Xh-Env': 'pro',
    'Content-Type': 'application/json'
  }
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (loadingCount === 0) {
      startLoading()
    }
    loadingCount ++
    if (localStorage.getItem('LongToken') === null && sessionStorage.getItem('LongToken') === null) {
      return config
    }
    else if (localStorage.getItem('LongToken') === null && sessionStorage.getItem('LongToken') !== null) {
      const localToken = sessionStorage.getItem('ShortToken')
      config.headers['Authorization'] = localToken
    }
    else {
      const localToken = localStorage.getItem('ShortToken')
      config.headers['Authorization'] = localToken
    }
    
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: any) => {
    loadingCount --
    if (loadingCount === 0) {
      endLoading()
    }
    if (response.status === 200) {
      return response.data
    }
    else {
      ElMessage.error(response.data.msg)
    }
    return response.data
  },
  (error: any) => {
    endLoading()
    ElMessage.error(error)
  }
)

export async function request<T>(config: InternalAxiosRequestConfig): Promise<AxiosResponse<myResponseType<T>, any>> {
  const response = await service.request<myResponseType<T>>(config)
  return response
}

export async function get<T = any>(url: string, params?: any): Promise<AxiosResponse<myResponseType<T>, any>> {
  const response = await service.get<myResponseType<T>>(url, params)
  return response
}

export async function post<T = any>(url: string, data?: any ): Promise<AxiosResponse<myResponseType<T>, any>> {
  const response = await service.post<myResponseType<T>>(url, data)
  return response
}

export async function put<T = any>(url: string, data?: any ): Promise<AxiosResponse<myResponseType<T>, any>> {
  const response = await service.put<myResponseType<T>>(url, data)
  return response
}