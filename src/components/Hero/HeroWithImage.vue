<template>
  <section class="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
        {{ title }}
      </h1>
      <p class="text-lg text-gray-600 mb-12">
        {{ subtitle }}
      </p>

      <div class="rounded-2xl h-96 max-w-4xl mx-auto mb-8 overflow-hidden shadow-lg">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <router-link 
        :to="buttonLink" 
        class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-10 rounded-lg transition text-lg inline-block"
      >
        {{ buttonText }}
      </router-link>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  buttonLink: {
    type: String,
    required: true
  }
})
</script>
