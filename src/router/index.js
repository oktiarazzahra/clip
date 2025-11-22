import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Shop from '@/views/Shop.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Wishlist from '@/views/Wishlist.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/wishlist', component: Wishlist }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
