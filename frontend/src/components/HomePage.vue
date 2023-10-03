<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const gameMods = [
  {
    name: "Flash Cards",
    src: require('../assets/logo.jpg'),
    description: "Flash cards description",
    redirect: '/FlashCards'
  },
  {
    name: "TBD mod",
    src: require('../assets/logo.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/logo.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/logo.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/logo.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/logo.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/logo.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/logo.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/logo.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  }
]
</script>

<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="mod in gameMods"
        :key="mod"
      >
        <v-card
          background-color="#222222"
          class="ma-4"
          height="800"
          width="320"
          @click="router.push(mod.redirect)"
          variant="outlined"
          color="primary"
        >
        
          <v-img
            cover
            height="400"
            :src="mod.src"
          ></v-img>

          <v-card-item>
            <div>
              <div class="text-h6 mb-1">
                {{ mod.name }}
              </div>
              <div class="text-caption">{{ mod.description }}</div>
            </div>
          </v-card-item>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
