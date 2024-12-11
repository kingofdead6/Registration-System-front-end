<script setup>
import logo from '/src/assets/img/gdg_logo_pic.png';
import {RouterLink} from 'vue-router';
</script>

<template>
    <div class="bg-[#F7F4F4] flex pb-5" id="home">
      <div class="flex-1 flex flex-col justify-start m-20">
        <h1 class="text-gray-800 font-bold text-4xl leading-tight tracking-tighter mt-20">
            Welcome to GDG Events website where u can register as a staff or create and join team on your own
        </h1>
        <RouterLink to="/events-dashboard">
          <button
          type="button"
          class="bg-[#2B4DD4] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md mt-10"
        >
          Get Started
        </button>
        </RouterLink>
      </div>
  
      <div class="flex-1 flex justify-center items-center">
        <img :src="logo" alt="eduPlatform" class="w-400 h-400 object-contain" />
      </div>
    </div>
</template>