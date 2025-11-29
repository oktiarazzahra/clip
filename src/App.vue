<template>
  <div>
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '@/components/Header/Navigation.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
