<template>
  <section class="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
    <div class="max-w-6xl mx-auto text-center">
      <!-- Title -->
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        Beautiful Hair Accessories
      </h1>
      <p class="text-lg text-gray-600 mb-12">
        Discover our curated collection of elegant accessories
      </p>

      <!-- Image with clips.jpg -->
      <div class="rounded-2xl h-96 max-w-4xl mx-auto mb-8 overflow-hidden shadow-lg">
        <img 
          src="/images/clips.jpg" 
          alt="Hair Clips Collection"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Explore Button -->
      <button 
        @click="handleExplore"
        class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-10 rounded-lg transition text-lg"
      >
        Explore Collection
      </button>
    </div>
  </section>
</template>

<script setup>
const handleExplore = () => {
  alert('Go to shop!')
}
</script>
