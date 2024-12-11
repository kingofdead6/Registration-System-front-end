<script setup>
import { useRouter } from 'vue-router';
import NavBar from '../components/NavBar.vue';

const router = useRouter();

const goBack = () => {
  router.push('/events_dashboard'); 
};
const goToNextPage = () => {
  router.push('/registration_form'); 
};
</script>

<template>
    <NavBar />
    <div class="bg-[#F2EDED] pb-[210px] ">
  <h2 
  class="ml-[64px] pt-[20px] text-[20px] text-black font-light cursor-pointer  transform transition duration-300 hover:scale-105 hover:text-gray-600"
  @click="goBack"
>
  &lt;-- Back
</h2>
  <div class="  flex flex-col items-center justify-center py-8 px-4">

    <!-- DevFest Title -->
    <h1 class="text-[36px] font-bold text-[#2B4DD4] mb-6">DevFest</h1>

    <!-- DevFest Description -->
    <p class="text-center text-black text-[18px] leading-relaxed max-w-[600px] mb-8">
      Stands for <strong>‘Developers Festival’</strong>, DevFest is an annual, international
      festival organized by Google Developers Groups (GDGs) from around the world to bring together local developers and tech enthusiasts.
    </p>

    <!-- Register Button -->
    <button
    class="py-2 bg-[#2B4DD4] text-white text-[16px] font-bold rounded-[10px] w-[180px] cursor-pointer hover:bg-[#173BA6] transition-transform transform hover:translate-x-2 hover:translate-y-2"
     @click="goToNextPage"
    >
      Register
    </button>
  </div>
</div>
</template>


