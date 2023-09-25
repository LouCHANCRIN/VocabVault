<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/plugins/store/user.ts'

const user = useUserStore()

const env = reactive({
  valid: false,
  signinPassword: '1234',
  signinUsername: 'lou',
  signupPassword: '',
  signupEmail: '',
  signupUsername: ''
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
  >
    <v-form v-model="env.valid">
      <br />
      <v-container>
        SIGN IN
        <v-row>

          <v-col
            cols="2"
            md="6"
          >
            <v-text-field
              v-model="env.signinUsername"
              label="Username"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="2"
            md="6"
          >
            <v-text-field
              v-model="env.signinPassword"
              :counter="10"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-btn @click="user.logIn(env.signinUsername, env.signinPassword)">
              LOGIN
            </v-btn>
          </v-col>
        </v-row>
        <br />
        <br />
        SIGN UP
        <v-row>

          <v-col
            cols="2"
            md="4"
          >
            <v-text-field
              v-model="env.signupUsername"
              label="Username"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="2"
            md="4"
          >
            <v-text-field
              v-model="env.signupEmail"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="2"
            md="4"
          >
            <v-text-field
              v-model="env.signupPassword"
              :counter="10"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-btn @click="user.signUp(env.signupEmail, env.signupUsername, env.signupPassword)">
              SIGNUP
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>