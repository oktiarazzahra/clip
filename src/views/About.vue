<template>
  <div>
    <Navigation />

    <!-- Hero section: About & tagline -->
    <section class="text-center py-8">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">About ClipChic</h1>
      <p class="text-gray-600 text-lg">Beautiful hair accessories for every style</p>
    </section>

    <!-- Our Story -->
    <OurStory />

    <!-- Our Values -->
    <OurValues />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '@/components/Header/Navigation.vue'
import OurStory from '@/components/About/OurStory.vue'
import OurValues from '@/components/About/OurValues.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>
