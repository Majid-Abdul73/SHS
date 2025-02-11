"use client"

import { useState, useCallback } from "react"
import api from "../services/api"

interface ApiResponse<T> {
  data: T | null
  error: string | null
  loading: boolean
}

export function useApi<T>() {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  })

  const request = useCallback(async (method: string, url: string, data?: any) => {
    setState({ data: null, error: null, loading: true })
    try {
      const response = method === 'get' ? await api.get(url) :
                      method === 'post' ? await api.post(url, data) :
                      method === 'put' ? await api.put(url, data) :
                      await api.delete(url)
      setState({ data: response.data, error: null, loading: false })
      return response.data
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred'
      setState({ data: null, error: message, loading: false })
      throw error
    }
  }, [])

  const get = useCallback((url: string) => request("get", url), [request])
  const post = useCallback((url: string, data: any) => request("post", url, data), [request])
  const put = useCallback((url: string, data: any) => request("put", url, data), [request])
  const del = useCallback((url: string) => request("delete", url), [request])

  return { ...state, get, post, put, del }
}

