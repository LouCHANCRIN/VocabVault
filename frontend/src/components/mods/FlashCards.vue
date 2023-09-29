<script setup>
import { reactive } from 'vue'
// import { useUserStore } from '@/plugins/store/user.ts'
import { useWordStore } from '@/plugins/store/word.ts'

// const user = useUserStore()
const wordStore = useWordStore()

const env = reactive({
  words: null,
})

async function getNewFlashcards() {
  env.words = await wordStore.getNewFlashcards()
}
</script>

<template>
  <v-btn @click="getNewFlashcards()" style="border: solid; margin-top: 5px;">Get new flashcards</v-btn>
  <v-container>
    <v-item-group
      multiple
    >
      <v-row justify="center">
        <v-col
          v-for="word in env.words"
          :key="word"
          class="flashcard"
          @click="word.show_translation = !word.show_translation"
        >
            <div class="text-h6 mb-1">{{ word.pinyin }}</div>
            <div class="text-h6 mb-1">{{ word.character }}</div>
            <v-icon :icon="word.show_translation ? 'mdi-eye-off' : 'mdi-eye'"></v-icon>
            <div v-if="word.show_translation" class="text-h6 mb-1">{{ word.meaning }}</div>

        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>
<style scoped>
.flashcard {
  border: solid;
  margin: 10px;
  min-width: 300px;
  max-width: 300px;
  min-height: 250px;
}
</style>
