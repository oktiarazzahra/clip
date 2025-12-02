<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <ProductCard 
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @click="goToProductDetail"
      />
    </div>

    <div class="text-center text-gray-600 text-sm mb-8">
      <p>Showing {{ filteredProducts.length }} of {{ products.length }} products</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'
import ProductCard from './ProductCard.vue'
import products from '@/data/products.js'

const router = useRouter()

const props = defineProps({
  category: {
    type: String,
    default: 'all'
  }
})

// Data produk sekarang berasal dari satu sumber (src/data/products.js)

const filteredProducts = computed(() => {
  if (props.category === 'all') {
    return products
  }
  return products.filter(p => p.category === props.category)
})

const goToProductDetail = (product) => {
  router.push(`/product/${product.id}`)
}
</script>
