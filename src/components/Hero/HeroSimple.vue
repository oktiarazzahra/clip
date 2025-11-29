<template>
  <section :class="sectionClass">
    <div class="max-w-6xl mx-auto text-center">
      <h1 :class="titleClass">
        {{ title }}
      </h1>
      <p :class="subtitleClass">
        {{ subtitle }}
      </p>
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
  sectionClass: {
    type: String,
    default: 'bg-gradient-to-b from-pink-50 to-white py-12 px-4 border-b'
  },
  titleClass: {
    type: String,
    default: 'text-4xl md:text-5xl font-bold text-gray-900 mb-3'
  },
  subtitleClass: {
    type: String,
    default: 'text-gray-600'
  }
})
</script>
