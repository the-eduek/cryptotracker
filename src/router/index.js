import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Convert from '../views/Convert.vue'
import Watchlist from '../views/Watchlist.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/convert',
    name: 'Convert',
    component: Convert
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
