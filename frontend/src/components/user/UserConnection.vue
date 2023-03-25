<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/plugins/store/user.ts'

const user = useUserStore()

const env = reactive({
  valid: false,
  password: '',
  email: ''
})

let emailRules = [
  value => {
    if (value) return true

    return 'E-mail is required.'
  },
  value => {
    if (/.+@.+\..+/.test(value)) return true

    return 'E-mail must be valid.'
  },
]

</script>

<template>
  <v-card
  class="mx-auto"
  variant="outlined"
  height="100%"
  >
    <v-form v-model="env.valid">
      <br />
      <v-container>
        <v-row>
          <v-col
            cols="2"
            md="6"
          >
            <v-text-field
              v-model="env.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="2"
            md="6"
          >
            <v-text-field
              v-model="env.password"
              :counter="10"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-btn @click="user.logIn(env.email, env.password)">
              LOGIN
            </v-btn>
          </v-col>

          <v-col md="6">
            <v-btn @click="user.signUp(env.email, env.password)">
              SIGNUP
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>