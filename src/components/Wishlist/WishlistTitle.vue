<template>
  <div class="mb-6">
    <h1 class="text-3xl md:text-4xl font-bold text-pink-600 mb-2">Keranjang Belanja</h1>
    <p class="text-gray-600 text-sm">{{ itemCount }} produk</p>
  </div>
</template>

<script setup>
defineProps({
  itemCount: {
    type: Number,
    default: 0
  }
})
</script>
