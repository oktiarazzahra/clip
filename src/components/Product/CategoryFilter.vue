<template>
  <div class="bg-gray-50 p-6 rounded-lg">
    <h3 class="font-bold text-gray-900 mb-4">Categories</h3>
    
    <div class="space-y-2">
      <button 
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category.id)"
        :class="{
          'bg-pink-600 text-white': selectedCategory === category.id,
          'bg-white text-gray-700 hover:bg-pink-100': selectedCategory !== category.id
        }"
        class="w-full px-4 py-2 rounded transition font-medium text-sm"
      >
        {{ category.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'cute', name: 'Cute' },
  { id: 'elegant', name: 'Elegant' },
  { id: 'pretty', name: 'Pretty' }
]

const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId
}
</script>
