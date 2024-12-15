<script setup>
import logo from '../assets/img/gdg_logo_pic.png';
import {RouterLink} from 'vue-router';
</script>

<template>
    <div class="bg-[#F7F4F4] flex h-[85vh] overflow-hidden" id="home">
    <div class="pb-5 bg-[#F7F4F4] flex h-[85vh] overflow-hidden" id="home">
      <div class="flex-1 flex flex-col justify-start m-20">
        <h1 class="text-gray-800 font-bold text-4xl leading-tight tracking-tighter mt-[100px]">
            Welcome to GDG Events website where u can create and join team on your own
        </h1>
        <RouterLink to="/events_dashboard">
          <button
          type="button"
          class="bg-[#2B4DD4] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md mt-10"
        >
          Get Started
        </button>
        </RouterLink>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <img :src="logo" alt="eduPlatform" class="w-300 h-300 object-contain transition-transform transform hover:rotate-12" />
      </div>
    </div>
    </div>
</template>