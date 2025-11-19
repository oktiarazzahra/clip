<template>
  <div>
    <Navigation />

    <!-- Hero section: Contact title -->
    <section class="text-center py-8">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Contact Us</h1>
    </section>

    <!-- Contact Info (3 kotak: email, phone, location) -->
    <section class="max-w-6xl mx-auto px-4">
      <ContactInfo />
    </section>

    <!-- Contact Form -->
    <section class="max-w-2xl mx-auto px-4">
      <ContactForm />
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '@/components/Header/Navigation.vue'
import ContactInfo from '@/components/Contact/ContactInfo.vue'
import ContactForm from '@/components/Contact/ContactForm.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>
