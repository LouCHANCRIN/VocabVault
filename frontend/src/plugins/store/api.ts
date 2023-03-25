import { defineStore } from 'pinia'
import axios from 'axios'

let reqInstance = axios.create({
    baseURL: 'http://localhost:5000/',
})

let reqInstanceUrlEncoded = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})


async function call (axiosInstance, method, url, data) {
  // async function call (method: string, url: string, data?: any, params?: any, successMsg?: string, errorMsg?: string, loader?: boolean) {
    return await axiosInstance
      .request({ method, url, data })
      .then((response) => {
        return { 'data': response.data, 'status': true }
      })
      .catch((error) => {
        console.log(`Caught error : ${error}`)
        return { 'data': null, 'status': false }
      })
}

export const useApiStore = defineStore('api', {
  state: () => ({
    axiosInstance: reqInstance
  }),
  actions: {
    async get(url, data) {
      return await call(this.axiosInstance,'GET', url=url, data=data)
    },
    async post(url, data) {
      return await call(this.axiosInstance,'POST', url=url, data=data)
    },
    async delete(url, data) {
      return await call(this.axiosInstance,'DELETE', url=url, data=data)
    },
    async put(url, data) {
      return await call(this.axiosInstance,'PUT', url=url, data=data)
    },
    addToken () {
      reqInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
    },
    useUrlEncoded () {
      this.axiosInstance = reqInstanceUrlEncoded
    },
    useDefaultInstance () {
      this.axiosInstance = reqInstance
    }

  },
})