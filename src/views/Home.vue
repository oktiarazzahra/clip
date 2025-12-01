<template>
  <HeroWithImage 
    title="Beautiful Hair Accessories"
    subtitle="Discover our curated collection of elegant accessories"
    :image="heroImage"
    buttonText="Explore Collection"
    buttonLink="/shop"
  />
</template>

<script setup>
import HeroWithImage from '@/components/Hero/HeroWithImage.vue'

const heroImage = import.meta.env.BASE_URL + 'images/clips.jpg'
</script>
