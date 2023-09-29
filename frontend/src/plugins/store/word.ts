import { useApiStore } from './api.ts'
import { defineStore } from 'pinia'
import router from '@/plugins/router.ts'

export const useWordStore = defineStore('word', {
  state: () => ({
    api: useApiStore(),
  }),
  actions: {
    async getNewFlashcards() {
        const newWords = await this.api.get(`/words/get_flashcards/`)
        if (newWords.status === true) {
            return newWords.data
        } else {
            // Display error notification
            return null
        }
    },
  }
})