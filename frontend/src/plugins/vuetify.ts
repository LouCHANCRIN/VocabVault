/* eslint-disable */
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const defaultTheme = {
  dark: true,
  variables: {},
  colors: {
    'app-header': "#121212",
    surface: "#212121",
    // primary: "#994040",
    primary: "#1585f5",
    secondary: "#D5D5D5",
  }
}

const lightTheme = {
  dark: false,
  variables: {},
  colors: {
    'app-header': "#444444",
    surface: "#777777",
    primary: "#000000",
    secondary: "#888888",
  }
}

export default createVuetify({
  components,
  directives,
  ssr: true,
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme,
      lightTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  }
})