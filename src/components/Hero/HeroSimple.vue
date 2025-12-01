<template>
  <section class="bg-gradient-to-r from-pink-50 to-purple-50 py-12 text-center border-b border-gray-200">
    <h1 class="text-4xl font-bold text-gray-900 mb-3">{{ title }}</h1>
    <p class="text-gray-600 text-lg">{{ subtitle }}</p>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>
