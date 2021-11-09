import axios from "axios"

interface RequestOption {
  url: string
  params?: any
  data?: any
}

interface Response<T> {
  data: T
  status: number
}

const api = {
  get: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params, data } = option
    const res = await axios.get<T>(url, {
      params,
      data,
    })
    return {
      data: res.data,
      status: res.status,
    }
  },
  post: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, data, params } = option
    const res = await axios.post<T>(url, data, { params })
    return {
      data: res.data,
      status: res.status,
    }
  },
  put: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, data } = option
    const res = await axios.put<T>(url, data)
    return {
      data: res.data,
      status: res.status,
    }
  },
  delete: async <T>(option: RequestOption): Promise<Response<T>> => {
    const { url, params, data } = option
    const res = await axios.delete<T>(url, {
      params,
      data,
    })
    return {
      data: res.data,
      status: res.status,
    }
  },
}

export default api
