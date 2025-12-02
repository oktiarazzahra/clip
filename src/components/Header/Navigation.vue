<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-blue-400">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-pink-600 italic">ClipChic</router-link>
      
      <!-- Desktop Menu -->
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

      <div class="flex items-center space-x-4">
        <!-- Cart Icon -->
        <router-link 
          to="/wishlist" 
          class="text-gray-700 hover:text-pink-600 text-xl relative transition"
        >
          🛒
          <span 
            v-if="wishlistCount > 0"
            class="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
          >
            {{ wishlistCount }}
          </span>
          
        </router-link>


        <!-- Hamburger Button  -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-gray-700 hover:text-pink-600 text-2xl"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="isMenuOpen"
      class="md:hidden bg-white border-t border-gray-200"
    >
      <div class="flex flex-col space-y-4 px-4 py-4">
        <router-link 
          to="/" 
          @click="isMenuOpen = false"
          class="hover:text-pink-600 transition font-medium"
          :class="{ 'text-pink-600 font-bold': isActive('/') }"
        >
          Home
        </router-link>
        <router-link 
          to="/shop" 
          @click="isMenuOpen = false"
          class="hover:text-pink-600 transition font-medium"
          :class="{ 'text-pink-600 font-bold': isActive('/shop') }"
        >
          Shop
        </router-link>
        <router-link 
          to="/about" 
          @click="isMenuOpen = false"
          class="hover:text-pink-600 transition font-medium"
          :class="{ 'text-pink-600 font-bold': isActive('/about') }"
        >
          About
        </router-link>
        <router-link 
          to="/contact" 
          @click="isMenuOpen = false"
          class="hover:text-pink-600 transition font-medium"
          :class="{ 'text-pink-600 font-bold': isActive('/contact') }"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Mobile menu state
const isMenuOpen = ref(false)

// Wishlist counter
const wishlistCount = ref(0)

// Load wishlist count from localStorage
const updateWishlistCount = () => {
  const savedWishlist = localStorage.getItem('wishlist')
  if (savedWishlist) {
    const items = JSON.parse(savedWishlist)
    // Count number of unique items (not total quantity)
    wishlistCount.value = items.length
  } else {
    wishlistCount.value = 0
  }
}

// Initial load
onMounted(() => {
  updateWishlistCount()
  
  // Listen for wishlist updates
  window.addEventListener('wishlist-updated', updateWishlistCount)
})

// Also update when route changes (e.g., navigating to wishlist page)
watch(() => route.path, () => {
  updateWishlistCount()
})

const isActive = (path) => {
  return route.path === path
}
</script>
