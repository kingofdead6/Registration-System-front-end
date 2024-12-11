<script setup>
import logo from '/src/assets/img/gdg_logo.png'
import {RouterLink} from 'vue-router';

const navItems = [
  { label: "GDG Events", icon: logo, isImage: true},
];
</script>

<template>
  <nav class="top-0 flex items-center justify-between bg-[#ebe1e1] px-4">

    <div class="flex items-center space-x-2">
      <img :src="navItems[0].icon" alt="GDG Logo" class="h-20 w-30 ml-[41px]" />
      <RouterLink to="/" class="hidden md:block text-[#2B4DD4] text-2xl font-bold ml-2 font-inkut cursor-pointer">
        {{ navItems[0].label }}
      </RouterLink>
    </div>
  </nav>
</template>