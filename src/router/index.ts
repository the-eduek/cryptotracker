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
      path: '/coins',
      name: 'CoinsList',
      component: () => import('../views/CoinsList.vue')
    }
  ]
})

export default router;