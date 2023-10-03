<script setup>
import { useUserStore } from '@/plugins/store/user.ts'

const user = useUserStore()
</script>

<template>
  <v-card-item>
    <div>
      <div class="text-overline mb-1">
        OVERLINE
      </div>
      <div class="text-h6 mb-1">
        Headline
      </div>
      <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
    </div>
  </v-card-item>

  <v-card-actions class="account-actions">

    <v-btn icon>
      <v-icon icon="mdi-cog" />
    </v-btn>

    <v-btn icon @click="user.logOut()">
      <v-icon icon="mdi-logout-variant" />
    </v-btn>
  </v-card-actions>
</template>

<style>
.account-actions {
  position:absolute;
  bottom: 0;
  right: 0;
}
</style>