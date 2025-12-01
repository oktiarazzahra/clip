<template>
  <section class="py-8 text-center">
    <h1 class="text-2xl font-bold mb-2">{{ title }}</h1>
    <p class="text-gray-600">{{ subtitle }}</p>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>
