import { useApiStore } from './api.ts'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    name: "Words Wizard",
    api: useApiStore(),
  }),
  actions: {
    async loadData() {
      await this.api.get(`/words/check_words`)
    }
  }
})