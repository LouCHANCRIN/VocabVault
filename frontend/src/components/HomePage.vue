<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const gameMods = [
  {
    name: "Flash Cards",
    src: require('../assets/modImages/flashCardMod.jpg'),
    description: "Flash cards are used to help with long term memorization. The cards first display the character and the pinyin and when clicked, the translation is showed to the user. To use them, you have to first look at the character and pinyin, then guess he meaning of it. Finally, by clickng the card, you get the meaning of the word which give you a feedback that will help you memorize the words.",
    redirect: '/FlashCards'
  },
  {
    name: "TBD mod",
    src: require('../assets/modImages/image1.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/modImages/image2.png'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/modImages/image3.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/modImages/image4.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/modImages/image5.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/modImages/image6.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/modImages/image7.jpg'),
    description: "Mod description",
    redirect: '/ModRoute'
  },
  {
    name: "TBD mod",
    src: require('../assets/modImages/image8.jpg'),
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
