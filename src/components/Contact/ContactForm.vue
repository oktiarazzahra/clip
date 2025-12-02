<template>
  <div class="bg-white py-12">
    <h2 class="text-2xl font-bold mb-6">Send Message</h2>
    
    <!-- Single Product Info -->
    <div 
      v-if="productInfo && !productsInfo"
      class="bg-pink-50 border-2 border-pink-200 rounded-lg p-4 mb-6 flex items-center gap-4"
    >
      <div class="text-3xl">🛍️</div>
      <div class="flex-1">
        <p class="text-sm text-gray-600 mb-1">Produk yang dipilih:</p>
        <p class="font-bold text-gray-900">{{ productInfo.name }}</p>
        <p class="text-pink-600 font-bold">Rp. {{ formatPrice(productInfo.price) }}</p>
      </div>
    </div>
    
    <!-- Multiple Products Info -->
    <div 
      v-if="productsInfo && productsInfo.length > 0"
      class="bg-pink-50 border-2 border-pink-200 rounded-lg p-4 mb-6"
    >
      <div class="flex items-center gap-2 mb-3">
        <div class="text-3xl">🛒</div>
        <p class="font-bold text-gray-900">{{ productsInfo.length }} Produk Dipilih</p>
      </div>
      <div class="space-y-2 mb-3">
        <div v-for="product in productsInfo" :key="product.id" class="flex justify-between text-sm">
          <span class="text-gray-700">{{ product.name }} (x{{ product.quantity || 1 }})</span>
          <span class="font-semibold text-pink-600">Rp. {{ formatPrice(product.price * (product.quantity || 1)) }}</span>
        </div>
      </div>
      <div class="border-t border-pink-300 pt-3 mt-3">
        <div class="flex justify-between items-center">
          <span class="font-bold text-gray-900">Total:</span>
          <span class="text-xl font-bold text-pink-600">
            Rp. {{ formatPrice(productsInfo.reduce((sum, p) => sum + (p.price * (p.quantity || 1)), 0)) }}
          </span>
        </div>
      </div>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-bold mb-2">Name</label>
          <input 
            type="text" 
            v-model="form.name"
            placeholder="Your name"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-bold mb-2">Email</label>
          <input 
            type="email" 
            v-model="form.email"
            placeholder="your@email.com"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            required
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-bold mb-2">Subject</label>
        <input 
          type="text" 
          v-model="form.subject"
          placeholder="How can we help?"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-bold mb-2">Message</label>
        <textarea 
          v-model="form.message"
          rows="5"
          placeholder="Write your message here..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
          required
        ></textarea>
      </div>

      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition disabled:bg-gray-400"
      >
        <span v-if="isSubmitting">📤 Sending...</span>
        <span v-else>✉️ Send Message</span>
      </button>
    </form>

    <div 
      v-if="showSuccessPopup"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="showSuccessPopup = false"
    >
      <div 
        class="bg-white rounded-lg p-8 max-w-md mx-4 text-center transform transition-all"
        @click.stop
      >
        <div class="text-6xl mb-4">✅</div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p class="text-gray-600 mb-6">
          Thank you, <span class="font-bold text-pink-600">{{ submittedName }}</span>! 
          We'll get back to you soon.
        </p>
        <button 
          @click="showSuccessPopup = false"
          class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Check if single product or multiple products selected
const selectedProduct = localStorage.getItem('selectedProduct')
const selectedProducts = localStorage.getItem('selectedProducts')

let productInfo = null
let productsInfo = null

if (selectedProducts) {
  // Multiple products from checkout
  productsInfo = JSON.parse(selectedProducts)
  localStorage.removeItem('selectedProducts')
} else if (selectedProduct) {
  // Single product
  productInfo = JSON.parse(selectedProduct)
  localStorage.removeItem('selectedProduct')
}


// Fungsi untuk memformat harga ke format rupiah dengan titik setiap 3 digit
function formatPrice(price) {
  // Pastikan input berupa angka
  if (typeof price !== 'number') {
    price = Number(price);
  }
  // Ubah ke string dan tambahkan titik setiap 3 digit dari belakang
  return price.toLocaleString('id-ID');
}

// Generate message based on products
let defaultSubject = ''
let defaultMessage = ''

if (productsInfo && productsInfo.length > 0) {
  // Multiple products
  const totalPrice = productsInfo.reduce((sum, p) => sum + (p.price * (p.quantity || 1)), 0)
  const itemsList = productsInfo.map(p => 
    `- ${p.name} (x${p.quantity || 1}): Rp. ${formatPrice(p.price * (p.quantity || 1))}`
  ).join('\n')
  
  defaultSubject = `Order: ${productsInfo.length} Produk`
  defaultMessage = `Hello, saya tertarik untuk memesan produk berikut:\n\n${itemsList}\n\nTotal: Rp. ${formatPrice(totalPrice)}\n\nMohon informasi lebih lanjut mengenai produk-produk tersebut. Terima kasih!`
} else if (productInfo) {
  // Single product
  defaultSubject = `Order: ${productInfo.name}`
  defaultMessage = `Hello, I'm interested in ${productInfo.name} priced at Rp. ${formatPrice(productInfo.price)}. Please provide more information.`
}

const form = ref({
  name: '',
  email: '',
  subject: defaultSubject,
  message: defaultMessage
})

const isSubmitting = ref(false)
const showSuccessPopup = ref(false)
const submittedName = ref('')

const handleSubmit = () => {
  isSubmitting.value = true
  submittedName.value = form.value.name
  setTimeout(() => {
    isSubmitting.value = false
    showSuccessPopup.value = true
    
    // Reset form
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 2000)
}
</script>
