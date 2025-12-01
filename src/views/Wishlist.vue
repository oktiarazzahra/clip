<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-6xl mx-auto px-4 py-8">
      <WishlistTitle :itemCount="wishlistItems.length" />
      
      <div v-if="wishlistItems.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">🛒</div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Keranjang Kosong</h2>
        <p class="text-gray-600 mb-6">Yuk mulai belanja produk favorit kamu!</p>
        <router-link 
          to="/shop"
          class="inline-block bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition font-medium"
        >
          Mulai Belanja
        </router-link>
      </div>
      
      <div v-else>
        <WishlistGrid 
          :products="wishlistItems"
          @remove="removeFromWishlist"
          @add-to-cart="addToCart"
          @product-click="handleProductClick"
          @contact-us="handleContactUs"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WishlistTitle from '@/components/Wishlist/WishlistTitle.vue'
import WishlistGrid from '@/components/Wishlist/WishlistGrid.vue'

const wishlistItems = ref([
  { 
    id: 1, 
    name: 'Flower Hair Claw', 
    price: 15000, 
    image: import.meta.env.BASE_URL + 'images/flower.jpg' 
  },
  { 
    id: 2, 
    name: 'Blue Bloom Hair Claw', 
    price: 55000, 
    image: import.meta.env.BASE_URL + 'images/blue-bloom.jpg' 
  },
  { 
    id: 3, 
    name: 'Starfish Pearl Hair Claw', 
    price: 70000, 
    image: import.meta.env.BASE_URL + 'images/starfish.jpg' 
  }
])

const removeFromWishlist = (productId) => {
  wishlistItems.value = wishlistItems.value.filter(item => item.id !== productId)
  console.log('Removed from wishlist:', productId)
}

const addToCart = (product) => {
  console.log('Navigating to contact for:', product)
  // Navigate to contact page
  window.location.href = '/contact'
}

const handleProductClick = (product) => {
  console.log('Product clicked:', product)
}

const handleContactUs = (product) => {
  // Store product info in sessionStorage for contact form
  sessionStorage.setItem('selectedProduct', JSON.stringify(product))
  // Navigate to contact page
  window.location.href = '/contact'
}
</script>
