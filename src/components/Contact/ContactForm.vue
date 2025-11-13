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
          placeholder="Your message..."
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
          required
        ></textarea>
      </div>

      <button 
        type="submit"
        class="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition"
      >
        ✉️ Send Message
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  alert(`Message sent!\nName: ${form.value.name}\nEmail: ${form.value.email}`)
  // Reset form
  form.value = { name: '', email: '', subject: '', message: '' }
}
</script>
