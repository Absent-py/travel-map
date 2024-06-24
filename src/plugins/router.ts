// @ts-nocheck

import { createWebHistory, createRouter } from 'vue-router'

import Map from '@views/Main.vue'

const routes = [
  // Home
  {
    path: '/',
    component: Map,
  },
  // Auto redirect
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
