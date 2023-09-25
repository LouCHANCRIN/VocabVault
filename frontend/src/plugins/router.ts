import { createRouter, createWebHashHistory  } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import FlashCards from '../components/mods/FlashCards.vue'
import UserConnection from '../components/user/UserConnection.vue'

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
    {
        path: '/login',
        name: 'UserConnection',
        component: UserConnection
    }

    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router