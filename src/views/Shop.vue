<template>
  <HeroSimple 
    title="Shop All"
    subtitle="Discover our curated collection of elegant accessories"
  />

  <!-- Main Content -->
  <section class="bg-gray-50 py-12 px-4 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <ProductGrid />
    </div>
  </section>
</template>

<script setup>
import HeroSimple from '@/components/Hero/HeroSimple.vue'
import ProductGrid from '@/components/Product/ProductGrid.vue'
</script>
