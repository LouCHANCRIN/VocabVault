import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    name: "Words Wizard",
  })
})