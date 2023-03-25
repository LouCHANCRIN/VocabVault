<script setup>
import { onMounted } from 'vue'

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
</script>

<template>
  <v-app class="app">
    <v-main class="scrollable">
      <appHeader></appHeader>
       
      <div v-if="user.showUser" class="user-infos">
        <UserCard v-if="user.loggedIn"></UserCard>
        <UserConnection v-else></UserConnection>
      </div>
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
.user-infos {
  position:fixed;
  right: 0;
  background-color: rgb(32, 32, 32);
  height: 93%;
  width: 20%;
}
.scrollable {
  overflow-y: auto
}
</style>
