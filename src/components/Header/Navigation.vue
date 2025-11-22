<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-blue-400">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-pink-600 italic">ClipChic</router-link>
      
      <div class="hidden md:flex space-x-8 text-gray-700">
        <router-link 
          to="/" 
          class="hover:text-pink-600 transition font-medium"
          :class="{ 'text-pink-600 font-bold': isActive('/') }"
        >
          Home
        </router-link>
        <router-link 
          to="/shop" 
          class="hover:text-pink-600 transition font-medium"
          :class="{ 'text-pink-600 font-bold': isActive('/shop') }"
        >
          Shop
        </router-link>
        <router-link 
          to="/about" 
          class="hover:text-pink-600 transition font-medium"
          :class="{ 'text-pink-600 font-bold': isActive('/about') }"
        >
          About
        </router-link>
        <router-link 
          to="/contact" 
          class="hover:text-pink-600 transition font-medium"
          :class="{ 'text-pink-600 font-bold': isActive('/contact') }"
        >
          Contact
        </router-link>
      </div>

      <div class="flex space-x-4">
        <router-link 
          to="/wishlist" 
          class="text-gray-700 hover:text-pink-600 text-xl relative transition"
        >
          ♡
          <span 
            v-if="wishlistCount > 0"
            class="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
          >
            {{ wishlistCount }}
          </span>
        </router-link>
        <button class="text-gray-700 hover:text-pink-600 text-xl relative transition">
          🛒
          <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">2</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Wishlist counter - nanti bisa pakai state management (Vuex/Pinia)
const wishlistCount = ref(3)

const isActive = (path) => {
  return route.path === path
}
</script>
