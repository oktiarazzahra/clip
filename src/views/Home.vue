<template>
  <div class="min-h-screen bg-white">
    <Navigation />

    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Beautiful Hair Accessories
        </h1>
        <p class="text-lg text-gray-600 mb-12">
          Discover our curated collection of elegant accessories
        </p>

        <div class="rounded-2xl h-96 max-w-4xl mx-auto mb-8 overflow-hidden shadow-lg">
          <img 
            src="/images/clips.jpg" 
            alt="Hair Clips Collection"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <router-link to="/shop" class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-10 rounded-lg transition text-lg inline-block">
          Explore Collection
        </router-link>
      </div>
    </section>

    <!-- Footer -->
    <section class="bg-white border-t py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 class="text-2xl font-bold text-pink-600 italic mb-3">ClipChic</h2>
            <p class="text-gray-600">Your destination for elegant hair accessories.</p>
          </div>

          <div class="text-right">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Stay Connected</h3>
            <p class="text-gray-600 mb-4">Get updates & offers</p>
            
            <div class="flex justify-end gap-3">
              <a href="#" class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition text-white text-lg">📷</a>
              <a href="#" class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition text-white text-lg">🎵</a>
              <a href="#" class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition text-white text-lg">f</a>
            </div>
          </div>
        </div>

        <div class="border-t my-8"></div>

        <div class="text-center text-gray-600 text-sm">
          <p>&copy; 2025 ClipChic. All rights reserved.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Navigation from '@/components/Header/Navigation.vue'
</script>
