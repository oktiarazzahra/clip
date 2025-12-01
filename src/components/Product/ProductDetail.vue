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
            <p class="text-3xl font-bold text-pink-600 mb-6">{{ formatPrice(product.price) }}</p>
            
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
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showModal = ref(false)

// Product database - should match ProductGrid.vue
const products = [
  { 
    id: 1, 
    name: 'Flower Hair Claw', 
    price: 15000, 
    category: 'cute', 
    image: import.meta.env.BASE_URL + 'images/flower.jpg',
    description: 'A charming hair claw with delicate flower patterns. Perfect for adding a cute touch to your everyday look.'
  },
  { 
    id: 2, 
    name: 'Blue Bloom Hair Claw', 
    price: 55000, 
    category: 'elegant', 
    image: import.meta.env.BASE_URL + 'images/blue-bloom.jpg',
    description: 'A cream-colored hair claw decorated with pastel blue flowers. Made from durable acrylic for a touch of elegance and charm.'
  },
  { 
    id: 3, 
    name: 'Twisted Pearl Hair Claw', 
    price: 30000, 
    category: 'elegant', 
    image: import.meta.env.BASE_URL + 'images/pearl.jpg',
    description: 'An elegant twisted design adorned with pearl accents. Adds sophistication to any hairstyle.'
  },
  { 
    id: 4, 
    name: 'Mint Marble Hair Claw', 
    price: 55000, 
    category: 'pretty', 
    image: import.meta.env.BASE_URL + 'images/mint.jpg',
    description: 'A refreshing mint-colored marble pattern hair claw. Stylish and perfect for a trendy look.'
  },
  { 
    id: 5, 
    name: 'Koi Dream Hair Claw', 
    price: 39000, 
    category: 'cute', 
    image: import.meta.env.BASE_URL + 'images/koi.jpg',
    description: 'Featuring adorable koi fish design. A unique and playful accessory for your hair.'
  },
  { 
    id: 6, 
    name: 'Starfish Pearl Hair Claw', 
    price: 70000, 
    category: 'elegant', 
    image: import.meta.env.BASE_URL + 'images/starfish.jpg',
    description: 'A luxurious starfish design with pearl embellishments. Perfect for special occasions.'
  },
  { 
    id: 7, 
    name: 'Rainbow Twist Hair Claw', 
    price: 59000, 
    category: 'pretty', 
    image: import.meta.env.BASE_URL + 'images/rainbow.jpg',
    description: 'A vibrant rainbow twisted design that brings color and joy to your hairstyle.'
  },
  { 
    id: 8, 
    name: 'Shell Glow Hair Claw', 
    price: 35000, 
    category: 'cute', 
    image: import.meta.env.BASE_URL + 'images/shell.jpg',
    description: 'A cute shell-shaped hair claw with a subtle glow effect. Perfect for beach vibes.'
  }
]

const product = ref({})

onMounted(() => {
  const productId = parseInt(route.params.id)
  const foundProduct = products.find(p => p.id === productId)
  if (foundProduct) {
    product.value = foundProduct
  } else {
    // Fallback to first product if not found
    product.value = products[0]
  }
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}

const addToCart = () => {
  // In real app, this would add item to cart/wishlist store
  const item = {
    ...product.value,
    quantity: 1
  }
  
  // Get existing wishlist from localStorage
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
  
  // Check if item already exists
  const existingIndex = wishlist.findIndex(i => i.id === item.id)
  
  if (existingIndex > -1) {
    // Update quantity (+1)
    wishlist[existingIndex].quantity += 1
  } else {
    // Add new item
    wishlist.push(item)
  }
  
  // Save to localStorage
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  
  // Emit event to update cart count
  window.dispatchEvent(new Event('wishlist-updated'))
  
  // Show modal
  showModal.value = true
  
  // Auto close after 2 seconds
  setTimeout(() => {
    showModal.value = false
  }, 2000)
}
</script>
