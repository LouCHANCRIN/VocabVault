<script setup>
import { onMounted } from 'vue'

import appHeader from './components/AppHeader.vue'
import UserCard from './components/user/UserCard.vue'

import { useUserStore } from '@/plugins/store/user.ts'
import { useAppStore } from '@/plugins/store/app.ts'

const user = useUserStore()
const app = useAppStore()

onMounted(() => {
  user.checkLoggedIn()
  document.title = app.name
})
</script>

<template>
  <v-app class="app">
    <v-main class="scrollable">
      <appHeader></appHeader>
       
      <v-navigation-drawer
        v-model="user.showUser"
        location="right"
        temporary
        class="user-infos"
        style="background: rgb(32, 32, 32);"
      >
        <UserCard />
      </v-navigation-drawer>

      <router-view />
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #1585f5;
  /* color: #f51515; */
}
.scrollable {
  overflow-y: auto
}
</style>
