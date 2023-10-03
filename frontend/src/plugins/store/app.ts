import { useApiStore } from './api.ts'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    name: "Words Wizard",
    api: useApiStore(),
    theme: "defaultTheme"
  }),
  actions: {
    async loadData() {
      await this.api.get(`/words/check_words`)
    },
    async changeTheme (newTheme) {
      this.theme = newTheme
    }
  }
})