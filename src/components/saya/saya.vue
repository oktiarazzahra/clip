<template>
  <div class="py-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-2  items-center gap-8 py-8 ">
        <div class="px-8 py-4">
          <h2 class="text-2xl font-bold mb-3">OKTIARA AZZAHRA RAHMADINA</h2>
      <p class="text-gray-700 lg-2">
        11231076 - Informatika - Institut Teknologi Kalimantan
        <div class="px-8 py-2"></div>
       <p class="text-gray-900 text-sm">Saya merupakan mashsiswa Informatika Angkatan 2023 yang sekarang berada di semester 5, saya mendalami bidang data analyst 
        yang dimana saya menyukai hal hal berbasis data , seperti Mata kuliah Sistem Basis Data dan Manajemen Basis Data, dan saya senang melakukan COTS karena menguji adrenalin dan mengasah otak untuk berpikir strategis </p>
      </p>
    </div>
    <div class="flex items-center justify-center px-1">
      <img 
        :src="storyImage" 
        alt="ClipChic Story"
        class="rounded-s object-cover h-44 w-full max-w-xs"
      />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const storyImage = import.meta.env.BASE_URL + 'images/saya.jpg'
</script>
