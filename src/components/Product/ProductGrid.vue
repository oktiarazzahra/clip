<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <ProductCard 
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <div class="text-center text-gray-600 text-sm mb-8">
      <p>Showing {{ filteredProducts.length }} of {{ products.length }} products</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import ProductCard from './ProductCard.vue'

const props = defineProps({
  category: {
    type: String,
    default: 'all'
  }
})

const products = [
  { id: 1, name: 'Flower Hair Claw', price: 15000, category: 'cute', image: '/images/flower.jpg' },
  { id: 2, name: 'Blue Bloom Hair Claw', price: 55000, category: 'elegant', image: '/images/blue-bloom.jpg' },
  { id: 3, name: 'Twisted Pearl Hair Claw', price: 30000, category: 'elegant', image: '/images/pearl.jpg' },
  { id: 4, name: 'Mint Marble Hair Claw', price: 55000, category: 'pretty', image: '/images/mint.jpg' },
  { id: 5, name: 'Koi Dream Hair Claw', price: 39000, category: 'cute', image: '/images/koi.jpg' },
  { id: 6, name: 'Starfish Pearl Hair Claw', price: 70000, category: 'elegant', image: '/images/starfish.jpg' },
  { id: 7, name: 'Rainbow Twist Hair Claw', price: 59000, category: 'pretty', image: '/images/rainbow.jpg' },
  { id: 8, name: 'Shell Glow Hair Claw', price: 35000, category: 'cute', image: '/images/shell.jpg' }
]

const filteredProducts = computed(() => {
  if (props.category === 'all') {
    return products
  }
  return products.filter(p => p.category === props.category)
})
</script>
