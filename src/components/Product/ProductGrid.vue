<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <ProductCard 
        v-for="product in products"
        :key="product.id"
        :product="product"
        @click="goToProductDetail"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ProductCard from './ProductCard.vue'
import products from '@/data/products.js'

const router = useRouter()

const goToProductDetail = (product) => {
  router.push(`/product/${product.id}`)
}
</script>
