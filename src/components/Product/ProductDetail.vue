<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="grid md:grid-cols-2 gap-8 p-8">
          <!-- Product Image -->
          <div class="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center h-96">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Product Info -->
          <div class="flex flex-col justify-center">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ product.name }}</h1>
            <p class="text-3xl font-bold text-pink-600 mb-6">Rp. {{ product.price }}</p>
            
            <p class="text-gray-600 mb-8 leading-relaxed">{{ product.description }}</p>

            <!-- Add to Cart Button -->
            <button 
              @click="addToCart"
              class="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition font-medium flex items-center justify-center gap-2"
            >
              <span>🛒</span>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Simple Success Modal -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click="showModal = false"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="relative bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-xl">
        <div class="text-5xl mb-4">✅</div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Berhasil!</h3>
        <p class="text-gray-600">Produk ditambahkan ke keranjang</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import products, { getProductById } from '@/data/products.js'

const route = useRoute()
const showModal = ref(false)
const product = ref({})

onMounted(() => {
  const foundProduct = getProductById(route.params.id)
  if (foundProduct) {
    product.value = foundProduct
  } else {
    // Fallback to first product if not found
    product.value = products[0]
  }
})

// Tidak menggunakan format harga khusus; tampilkan apa adanya dari data

const addToCart = () => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
  
  // Cek apakah produk sudah ada
  const exists = wishlist.find(i => i.id === product.value.id)
  
  if (!exists) {
    // Tambah produk baru (1 produk hanya bisa dibeli 1x)
    wishlist.push(product.value)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    window.dispatchEvent(new Event('wishlist-updated'))
  }
  
  // Tampilkan modal
  showModal.value = true
  setTimeout(() => {
    showModal.value = false
  }, 2000)
}
</script>
