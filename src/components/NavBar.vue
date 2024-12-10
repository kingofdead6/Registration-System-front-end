<script setup>
import logo from '/src/assets/img/gdg_logo.png'
import {RouterLink} from 'vue-router';

const navItems = [
  { label: "GDG Events", icon: logo, isImage: true},
  { label: "Home", link: "/" },
  { label: "Sign in", link: "/sign_in" },
  { label: "Sign up", link: "/sign_up" },
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

    <ul class="flex items-center space-x-2 mr-[25px]">
      <li v-for="(item, index) in navItems.slice(1)" :key="index" class="flex items-center ">
        <RouterLink :to="item.link" class="text-[#2B4DD4] hover:bg-gray-300 hover:text-[#FF0000] text-lg rounded-md px-2 py-2 font-bold font-inkut">
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
