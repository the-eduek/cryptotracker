import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/convert',
      name: 'Convert',
      component: () => import('../views/Convert.vue')
    },
    {
      path: '/watchlist',
      name: 'Watchlist',
      component: () => import('../views/Watchlist.vue')
    }
  ]
})

export default router;