<template>
  <div class="bg-white py-12">
    <h2 class="text-2xl font-bold mb-6">Send Message</h2>
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

// Check if product selected from wishlist
const selectedProduct = localStorage.getItem('selectedProduct')
let productInfo = null

if (selectedProduct) {
  productInfo = JSON.parse(selectedProduct)
  localStorage.removeItem('selectedProduct')
}

// Generate message based on product
let defaultSubject = ''
let defaultMessage = ''

if (productInfo) {
  defaultSubject = `Order: ${productInfo.name}`
  defaultMessage = `Hello, I'm interested in ${productInfo.name} priced at Rp. ${productInfo.price}. Please provide more information.`
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
