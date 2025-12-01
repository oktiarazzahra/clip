<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Product Image -->
      <div class="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center h-80">
        <img 
          :src="product.image" 
          :alt="product.name"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Product Info -->
      <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ product.name }}</h1>
        <p class="text-3xl font-bold text-pink-600 mb-6">{{ formatPrice(product.price) }}</p>
        
        <p class="text-gray-600 mb-8 leading-relaxed">{{ product.description }}</p>

        <!-- Quantity Selector -->
        <div class="mb-8">
          <label class="block text-sm font-medium text-gray-700 mb-2">Qty:</label>
          <div class="flex items-center gap-4">
            <button 
              @click="decreaseQuantity"
              class="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 transition flex items-center justify-center"
              :disabled="quantity <= 1"
            >
              −
            </button>
            <input 
              v-model.number="quantity"
              type="number"
              min="1"
              class="w-16 h-10 text-center border border-gray-300 rounded-md"
            />
            <button 
              @click="increaseQuantity"
              class="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 transition flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

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
const quantity = ref(1)
const showModal = ref(false)

// Product database - should match ProductGrid.vue
const products = [
  { 
    id: 1, 
    name: 'Flower Hair Claw', 
    price: 15000, 
    category: 'cute', 
    image: '/images/flower.jpg',
    description: 'A charming hair claw with delicate flower patterns. Perfect for adding a cute touch to your everyday look.'
  },
  { 
    id: 2, 
    name: 'Blue Bloom Hair Claw', 
    price: 55000, 
    category: 'elegant', 
    image: '/images/blue-bloom.jpg',
    description: 'A cream-colored hair claw decorated with pastel blue flowers. Made from durable acrylic for a touch of elegance and charm.'
  },
  { 
    id: 3, 
    name: 'Twisted Pearl Hair Claw', 
    price: 30000, 
    category: 'elegant', 
    image: '/images/pearl.jpg',
    description: 'An elegant twisted design adorned with pearl accents. Adds sophistication to any hairstyle.'
  },
  { 
    id: 4, 
    name: 'Mint Marble Hair Claw', 
    price: 55000, 
    category: 'pretty', 
    image: '/images/mint.jpg',
    description: 'A refreshing mint-colored marble pattern hair claw. Stylish and perfect for a trendy look.'
  },
  { 
    id: 5, 
    name: 'Koi Dream Hair Claw', 
    price: 39000, 
    category: 'cute', 
    image: '/images/koi.jpg',
    description: 'Featuring adorable koi fish design. A unique and playful accessory for your hair.'
  },
  { 
    id: 6, 
    name: 'Starfish Pearl Hair Claw', 
    price: 70000, 
    category: 'elegant', 
    image: '/images/starfish.jpg',
    description: 'A luxurious starfish design with pearl embellishments. Perfect for special occasions.'
  },
  { 
    id: 7, 
    name: 'Rainbow Twist Hair Claw', 
    price: 59000, 
    category: 'pretty', 
    image: '/images/rainbow.jpg',
    description: 'A vibrant rainbow twisted design that brings color and joy to your hairstyle.'
  },
  { 
    id: 8, 
    name: 'Shell Glow Hair Claw', 
    price: 35000, 
    category: 'cute', 
    image: '/images/shell.jpg',
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

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  // In real app, this would add item to cart/wishlist store
  const item = {
    ...product.value,
    quantity: quantity.value
  }
  
  // Get existing wishlist from localStorage
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
  
  // Check if item already exists
  const existingIndex = wishlist.findIndex(i => i.id === item.id)
  
  if (existingIndex > -1) {
    // Update quantity
    wishlist[existingIndex].quantity += quantity.value
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
