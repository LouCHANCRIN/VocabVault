<script setup>
import { useUserStore } from '@/plugins/store/user.ts'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/plugins/store/app.ts'

const app = useAppStore()
const user = useUserStore()
const router = useRouter()

</script>

<template>
  <v-app-bar class="app-bar">

  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>{{ app.name }}</v-app-bar-title>

  <v-spacer></v-spacer>

  <v-btn icon @click="router.push('/')">
    <v-icon icon="mdi-home" />
  </v-btn>

  <v-btn v-if="user?.userData?.role == 'admin'" icon @click="app.loadData()">
    <v-icon icon="mdi-database-arrow-up" />
  </v-btn>

  <v-btn icon>
    <v-icon icon="mdi-dots-vertical" />
  </v-btn>

  <v-btn icon @click="user.clickIcon()">
    <v-icon icon="mdi-account" />
  </v-btn>

</v-app-bar>
</template>


<style scoped>
.app-bar {
  background-color: #222222 !important;
  outline: 1px solid;
}
</style>