<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-blue-400">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold text-pink-600 italic">ClipChic</router-link>
        
        <div class="hidden md:flex space-x-8 text-gray-700">
          <router-link to="/" class="hover:text-pink-600 transition font-medium">Home</router-link>
          <router-link to="/shop" class="hover:text-pink-600 transition font-medium text-pink-600">Shop</router-link>
          <router-link to="/about" class="hover:text-pink-600 transition font-medium">About</router-link>
          <router-link to="/contact" class="hover:text-pink-600 transition font-medium">Contact</router-link>
        </div>

        <div class="flex space-x-4">
          <button class="text-gray-700 hover:text-pink-600 text-xl transition">♡</button>
          <button class="text-gray-700 hover:text-pink-600 text-xl relative transition">
            🛒
            <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">2</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Shop Header -->
    <section class="bg-gradient-to-b from-pink-50 to-white py-12 px-4 border-b">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Shop All
        </h1>
        <p class="text-gray-600">
          Discover our curated collection of elegant accessories
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <!-- Sidebar - Categories -->
          <div class="md:col-span-1">
            <CategoryFilter 
              :selected="selectedCategory"
              @select="selectedCategory = $event"
            />
          </div>

          <!-- Main - Products -->
          <div class="md:col-span-3">
            <ProductGrid :category="selectedCategory" />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CategoryFilter from '@/components/Product/CategoryFilter.vue'
import ProductGrid from '@/components/Product/ProductGrid.vue'
import Footer from '@/components/Footer/Footer.vue'

const selectedCategory = ref('all')
</script>
