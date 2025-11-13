<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group cursor-pointer">
    <!-- Image -->
    <div class="bg-gray-200 h-48 overflow-hidden flex items-center justify-center">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <!-- Info -->
    <div class="p-4">
      <h4 class="font-bold text-gray-900 mb-2 text-sm">{{ product.name }}</h4>
      <p class="text-pink-600 font-bold text-lg">Rp. {{ formatPrice(product.price) }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
</script>
