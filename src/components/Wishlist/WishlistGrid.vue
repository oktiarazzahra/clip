<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard 
        v-for="product in products"
        :key="product.id"
        :product="product"
        :showRemove="true"
        :showAddToCart="true"
        @remove="handleRemove"
        @add-to-cart="handleAddToCart"
        @click="handleProductClick"
        @contact-us="handleContactUs"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/Product/ProductCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['remove', 'add-to-cart', 'product-click', 'contact-us'])

const handleRemove = (productId) => {
  emit('remove', productId)
}

const handleAddToCart = (product) => {
  emit('add-to-cart', product)
}

const handleProductClick = (product) => {
  emit('product-click', product)
}

const handleContactUs = (product) => {
  emit('contact-us', product)
}
</script>
