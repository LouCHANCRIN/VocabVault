<script setup>
import { useRouter } from 'vue-router'

import { useUserStore } from '@/plugins/store/user.ts'
import { useAppStore } from '@/plugins/store/app.ts'

const router = useRouter()

const app = useAppStore()
const user = useUserStore()
</script>

<template>
  <v-app-bar class="app-bar" color="app-header" style="outline-color: rgb(var(--v-theme-primary));">

    <template v-slot:prepend>
      <v-app-bar-nav-icon color="primary"/>
    </template>

    <v-app-bar-title style="color: rgb(var(--v-theme-primary));">{{ app.name }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon @click="router.push('/')" color="primary">
      <v-icon icon="mdi-home" />
    </v-btn>

    <v-btn v-if="user?.userData?.role == 'admin'" icon @click="app.loadData()" color="primary">
      <v-icon icon="mdi-database-arrow-up" />
    </v-btn>

    <v-btn icon @click="app.changeTheme(app.theme == 'defaultTheme' ? 'lightTheme' : 'defaultTheme')" color="primary">
      <v-icon icon="mdi-dots-vertical" />
    </v-btn>

    <v-btn icon @click="user.clickIcon()" color="primary">
      <v-icon icon="mdi-account" />
    </v-btn>

  </v-app-bar>
</template>


<style scoped>
.app-bar {
  outline: 1px solid;
}
</style>