<template>
  <div class="rounded-2xl h-96 max-w-4xl mx-auto mb-8 overflow-hidden shadow-lg">
    <img 
      :src="imageSrc" 
      :alt="imageAlt"
      class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    default: '/images/clips.jpg'
  },
  imageAlt: {
    type: String,
    default: 'Hair Clips Collection'
  }
})
</script>
