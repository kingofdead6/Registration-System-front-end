<script setup>
import GdgLogo from "../assets/img/Gdglogo.png";

const navItems = [
  { label: "GDG Events", icon: GdgLogo, isImage: true },
  { label: "Home", link: "/" },
  { label: "Sign in", link: "/signin" },
  { label: "Sign up", link: "/signup" },
];
</script>

<template>
  <nav class="sticky top-0 flex items-center justify-between bg-[#ebe1e1] px-6 py-4">

    <div class="flex items-center space-x-2">
      <img :src="navItems[0].icon" alt="GDG Logo" class="w-[50px] h-[50px] ml-[41px]" />
      <span class="font-bold text-[#2B4DD4] text-[21px]" style="font-family: 'Inknut Antiqua', serif;">
        {{ navItems[0].label }}
      </span>
    </div>

    <ul class="flex items-center space-x-6 mr-[25px]">
      <li v-for="(item, index) in navItems.slice(1)" :key="index" class="flex items-center ">
        <a :href="item.link" class="text-[#2B4DD4] font-bold hover:underline text-[20px]" style="font-family: 'Inknut Antiqua', serif;">
          {{ item.label }}
        </a>
      </li>
    </ul>


  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;700&display=swap');
 
</style>