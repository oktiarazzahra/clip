<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition relative group">
    <!-- Remove Button -->
    <button 
      v-if="isInCart"
      @click="handleRemove"
      class="absolute top-1 right-2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-red-50 transition"
      >
      <span class="text-red-500 text-xl">🗑️</span>
    
      </button>

    <!-- Image -->
    <div class="bg-gray-200 h-48 overflow-hidden flex items-center justify-center" :class="{ 'cursor-pointer': !isInCart }" @click="!isInCart && handleClick()">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <!-- Info -->
    <div class="p-4">
      <h4 class="font-bold text-black-900 mb-2 text-sm">{{ product.name }}</h4>
      <p class="text-pink-600 font-bold text-lg mb-3">Rp. {{ product.price }}</p>
      
      <!-- Contact Us Button (Always show for cart) -->
      <button 
        v-if="isInCart"
        @click="handleContactUs"
        class="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition flex items-center justify-center gap-2 text-sm font-medium"
      >
        <span>💬</span>
        <span>Hubungi penjual </span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  isInCart: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['remove', 'click', 'contact-us'])

// Menghapus produk dari daftar wishlist/keranjang
function handleRemove() {
  emit('remove', props.product.id)
}

// Menghubungi penjual terkait produk ini
function handleContactUs() {
  emit('contact-us', props.product)
}

// Navigasi ke halaman detail produk
function handleClick() {
  emit('click', props.product)
}

</script>
