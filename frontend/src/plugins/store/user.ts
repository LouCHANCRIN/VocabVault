import { useApiStore } from './api.ts'
import { defineStore } from 'pinia'
import router from '@/plugins/router.ts'

export const useUserStore = defineStore('user', {
  state: () => ({
    officials: {},
    userData: null,
    loggedIn: false,
    api: useApiStore(),
    showUser: false
  }),
  actions: {
    async signUp (email, username, password) {
        const userData = await this.api.post(`/users/`, {email: email, username: username, password: password})
        if (userData.status === true) {
          this.userData = userData
          await this.logIn(username, password)
        }
    },
    async checkLoggedIn () {
        this.api.addToken()
        this.loggedIn = await this.getMyInfos()
      },
    async getMyInfos () {
      const userResponse = await this.api.get(`/me`)

      if (userResponse.status === true) {
        this.userData = userResponse.data
        console.log(userResponse.data)
      }
      return userResponse.status
    },
    async logIn (username, password) {
      this.api.useUrlEncoded()
      const loginResponse = await this.api.post(`/login/`, {username: username, password: password})
      this.api.useDefaultInstance()

      if (loginResponse.status === true) {
        this.loggedIn = true
        localStorage.setItem( 'access_token', loginResponse.data.access_token )
        localStorage.setItem( 'token_type', loginResponse.data.token_type )
        this.api.addToken()
        this.getMyInfos()
        router.push('/')
      }
    },
    async logOut () {
      this.loggedIn = false
      this.showUser = false
      this.userData = null
      localStorage.clear()
    },
    async getPosts () {
      const userData = await this.api.get(`/posts/`)
      this.userData = userData
    },
    clickIcon () {
      if (this.loggedIn === true) {
        console.log("SWAP SHOW USER VALUE")
        this.showUser = !this.showUser
      } else {
        router.push('/login')
      }
    }
  }
})