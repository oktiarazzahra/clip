<template>
  <HeroSimple 
    title="Shop All"
    subtitle="Discover our curated collection of elegant accessories"
  />

  <!-- Main Content -->
  <section class="bg-gray-50 py-12 px-4 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Sidebar - Categories -->
        <div class="md:col-span-1">
          <CategoryFilter 
            :selected="selectedCategory"
            @select="selectedCategory = $event"
          />
        </div>

        <!-- Main - Products -->
        <div class="md:col-span-3">
          <ProductGrid :category="selectedCategory" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import HeroSimple from '@/components/Hero/HeroSimple.vue'
import CategoryFilter from '@/components/Product/CategoryFilter.vue'
import ProductGrid from '@/components/Product/ProductGrid.vue'

const selectedCategory = ref('all')
</script>
