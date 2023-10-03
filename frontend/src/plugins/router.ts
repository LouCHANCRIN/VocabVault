import { createRouter, createWebHashHistory  } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import FlashCards from '../components/mods/FlashCards.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/flashcards',
        name: 'FlashCards',
        component: FlashCards
    },   
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router