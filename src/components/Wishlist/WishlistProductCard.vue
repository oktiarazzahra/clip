<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group relative">
    <!-- Remove Button -->
    <button 
      @click="handleRemove"
      class="absolute top-2 right-2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-pink-50 transition group"
    >
      <span class="text-red-500 text-xl">♡</span>
    </button>

    <!-- Image -->
    <div class="bg-gray-200 h-48 overflow-hidden flex items-center justify-center cursor-pointer" @click="handleClick">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <!-- Info -->
    <div class="p-4">
      <h4 class="font-bold text-gray-900 mb-2 text-sm">{{ product.name }}</h4>
      <p class="text-pink-600 font-bold text-lg mb-3">Rp. {{ formatPrice(product.price) }}</p>
      
      <!-- Add to Cart Button -->
      <button 
        @click="handleAddToCart"
        class="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition flex items-center justify-center gap-2 text-sm font-medium"
      >
        <span>🛒</span>
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['remove', 'add-to-cart', 'click'])

const handleRemove = () => {
  emit('remove', props.product.id)
}

const handleAddToCart = () => {
  emit('add-to-cart', props.product)
}

const handleClick = () => {
  emit('click', props.product)
}

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
</script>
