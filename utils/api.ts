/* eslint-disable import/no-mutable-exports */
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { throttleAdapterEnhancer } from 'axios-extensions'

let $axios: NuxtAxiosInstance

const throttleConfig = {
  threshold: 10 * 1000, // 10 seconds
}

/**
 * Here we setup a new axios instance and set default headers,
 * that will be used on every request.
 *
 * We also add response interceptiors, to pass data property instead of response object.
 *
 * @param axiosInstance {NuxtAxiosInstance}
 */
export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
  $axios.defaults.adapter = throttleAdapterEnhancer(
    $axios.defaults.adapter!,
    throttleConfig
  )

  $axios.setBaseURL('https://covid-19-data.azurewebsites.net/')

  $axios.interceptors.response.use(
    function (response) {
      return response.data
    },
    function (error) {
      return error
    }
  )
}

export { $axios }
