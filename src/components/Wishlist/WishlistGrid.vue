<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <WishlistProductCard 
        v-for="product in products"
        :key="product.id"
        :product="product"
        @remove="handleRemove"
        @add-to-cart="handleAddToCart"
        @click="handleProductClick"
      />
    </div>
  </div>
</template>

<script setup>
import WishlistProductCard from './WishlistProductCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['remove', 'add-to-cart', 'product-click'])

const handleRemove = (productId) => {
  emit('remove', productId)
}

const handleAddToCart = (product) => {
  emit('add-to-cart', product)
}

const handleProductClick = (product) => {
  emit('product-click', product)
}
</script>
