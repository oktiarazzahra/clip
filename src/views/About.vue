<template>
  <HeroSimple 
    title="About ClipChic"
    subtitle="Beautiful hair accessories for every style"
    sectionClass="text-center py-8"
    subtitleClass="text-gray-600 text-lg"
  />

  <!-- Our Story -->
  <OurStory />

  <!-- Our Values -->
  <OurValues />
</template>

<script setup>
import HeroSimple from '@/components/Hero/HeroSimple.vue'
import OurStory from '@/components/About/OurStory.vue'
import OurValues from '@/components/About/OurValues.vue'
</script>
