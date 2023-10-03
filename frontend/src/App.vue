<script setup>
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'

import appHeader from './components/AppHeader.vue'
import UserCard from './components/user/UserCard.vue'
import UserConnection from './components/user/UserConnection.vue'

import { useUserStore } from '@/plugins/store/user.ts'
import { useAppStore } from '@/plugins/store/app.ts'

const user = useUserStore()
const app = useAppStore()

onMounted(() => {
  user.checkLoggedIn()
  document.title = app.name
})
console.log(useTheme().current.value.colors)
</script>

<template>
  <v-app class="app" :theme="app.theme">
    <v-main class="scrollable">
      <appHeader/>

      <v-navigation-drawer
        v-model="user.showUser"
        location="right"
        temporary
        style="width: 400px; outline: 1px solid; outline-color: rgb(var(--v-theme-primary)); background-color: rgb(var(--v-theme-app-header)); color: rgb(var(--v-theme-primary));"
      >
        <UserCard v-if="user.loggedIn"/>
        <UserConnection v-else/>
      </v-navigation-drawer>

      <router-view/>
    </v-main>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.scrollable {
  overflow-y: auto
}
</style>