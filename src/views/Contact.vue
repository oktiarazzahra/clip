<template>
  <HeroSimple 
    title="Contact Us"
    subtitle="Have questions? We're here to help!"
    sectionClass="text-center py-8"
  />

  <!-- Contact Info (3 kotak: email, phone, location) -->
  <section class="max-w-6xl mx-auto px-4">
    <ContactInfo />
  </section>

  <!-- Contact Form -->
  <section class="max-w-2xl mx-auto px-4">
    <ContactForm />
  </section>
</template>

<script setup>
import HeroSimple from '@/components/Hero/HeroSimple.vue'
import ContactInfo from '@/components/Contact/ContactInfo.vue'
import ContactForm from '@/components/Contact/ContactForm.vue'
</script>
