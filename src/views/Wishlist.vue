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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import WishlistTitle from '@/components/Wishlist/WishlistTitle.vue'
import WishlistGrid from '@/components/Wishlist/WishlistGrid.vue'

const router = useRouter()
const wishlistItems = ref([])

// Load wishlist from localStorage
onMounted(() => {
  loadWishlist()
  
  // Listen for wishlist updates
  window.addEventListener('wishlist-updated', loadWishlist)
})

const loadWishlist = () => {
  const savedWishlist = localStorage.getItem('wishlist')
  if (savedWishlist) {
    wishlistItems.value = JSON.parse(savedWishlist)
  } else {
    wishlistItems.value = []
  }
}

const removeFromWishlist = (productId) => {
  wishlistItems.value = wishlistItems.value.filter(item => item.id !== productId)
  localStorage.setItem('wishlist', JSON.stringify(wishlistItems.value))
  window.dispatchEvent(new Event('wishlist-updated'))
  console.log('Removed from wishlist:', productId)
}

const addToCart = (product) => {
  console.log('Navigating to contact for:', product)
  sessionStorage.setItem('selectedProduct', JSON.stringify(product))
  router.push('/contact')
}

const handleProductClick = (product) => {
  console.log('Product clicked:', product)
  router.push(`/product/${product.id}`)
}

const handleContactUs = (product) => {
  console.log('Contact us for product:', product)
  localStorage.setItem('selectedProduct', JSON.stringify(product))
  router.push('/contact')
}
</script>
