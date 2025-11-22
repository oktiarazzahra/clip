<template>
  <div class="min-h-screen bg-white">
    <Navigation />
    
    <div class="bg-gray-50 min-h-screen">
      <div class="max-w-6xl mx-auto px-4 py-8">
        <WishlistHeader :itemCount="wishlistItems.length" />
        
        <div v-if="wishlistItems.length === 0" class="text-center py-16">
          <div class="text-6xl mb-4">♡</div>
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h2>
          <p class="text-gray-600 mb-6">Add items you love to your wishlist!</p>
          <router-link 
            to="/shop"
            class="inline-block bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition font-medium"
          >
            Start Shopping
          </router-link>
        </div>
        
        <WishlistGrid 
          v-else
          :products="wishlistItems"
          @remove="removeFromWishlist"
          @add-to-cart="addToCart"
          @product-click="handleProductClick"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Header/Navigation.vue'
import Footer from '@/components/Footer/Footer.vue'
import WishlistHeader from '@/components/Wishlist/WishlistHeader.vue'
import WishlistGrid from '@/components/Wishlist/WishlistGrid.vue'

// Sample data - nanti bisa diganti dengan state management (Vuex/Pinia)
const wishlistItems = ref([
  { 
    id: 1, 
    name: 'Flower Hair Claw', 
    price: 15000, 
    image: '/images/flower.jpg' 
  },
  { 
    id: 2, 
    name: 'Blue Bloom Hair Claw', 
    price: 55000, 
    image: '/images/blue-bloom.jpg' 
  },
  { 
    id: 3, 
    name: 'Starfish Pearl Hair Claw', 
    price: 70000, 
    image: '/images/starfish.jpg' 
  }
])

const removeFromWishlist = (productId) => {
  wishlistItems.value = wishlistItems.value.filter(item => item.id !== productId)
  console.log('Removed from wishlist:', productId)
}

const addToCart = (product) => {
  console.log('Added to cart:', product)
  // Implementasi add to cart logic
  alert(`${product.name} added to cart!`)
}

const handleProductClick = (product) => {
  console.log('Product clicked:', product)
  // Bisa navigate ke detail page
}
</script>
