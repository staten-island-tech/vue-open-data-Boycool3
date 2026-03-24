import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Homepage',
      component: Home
    }
  ],
})

export default router

 //https://data.cityofnewyork.us/resource/f9bf-2cp4.json the thingy,,,