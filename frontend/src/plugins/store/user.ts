import { useApiStore } from './api.ts'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    officials: {},
    userData: null,
    loggedIn: false,
    api: useApiStore(),
    showUser: false
  }),
  actions: {
    async signUp (email, password) {
        const userData = await this.api.post(`/users/`, {email: email, password: password})
        this.userData = userData
    },
    async checkLoggedIn () {
        this.api.addToken()
        this.loggedIn = await this.getMyInfos()
      },
    async getMyInfos () {
      const userResponse = await this.api.get(`/me`)

      if (userResponse.status === true) {
        this.userData = userResponse.data
      }
      return userResponse.status
    },
    async logIn (email, password) {
      this.api.useUrlEncoded()
      const loginResponse = await this.api.post(`/login/`, {username: email, password: password})
      this.api.useDefaultInstance()

      if (loginResponse.status == true) {
        this.loggedIn = true
        localStorage.setItem( 'access_token', loginResponse.data.access_token )
        localStorage.setItem( 'token_type', loginResponse.data.token_type )
        this.api.addToken()
        this.getMyInfos()
      }
    },
    async logOut () {
      this.loggedIn = false
      localStorage.clear()
    },
    async getPosts () {
      const userData = await this.api.get(`/posts/`)
      this.userData = userData
    }
  }
})