<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Navigation handlers
const goToMainPage = () => {
  router.push('/'); 
};
</script>

<template>
  <div class="bg-[#F7F4F4] h-screen flex flex-col justify-center items-center mt-[-100px]">
    <!-- Form Title -->
    <h2 class="text-[28px] font-bold text-[#2B4DD4] mb-6">
      Registration form
    </h2>
    <!-- Form Container -->
    <div class="form-container bg-white rounded-[20px] shadow-lg p-8 w-[470px] h-[300px] text-center">
      <h2 class="text-[24px] font-bold mb-4">Joined Team</h2>  
      <p class="text-[15px] text-[#000] mb-[50px] w-[370px] font-[400px] leading-[18.75px] ml-5">
        You have successfully joined a Team, an email will be sent to you to let you know if you got accepted or not, Thank you!      </p>      
      <!-- Done Button -->
      <button
        type="button"
        class="py-2 bg-[#2B4DD4] text-white text-[16px] font-bold rounded-[10px] w-[100px] cursor-pointer hover:bg-[#173BA6] transition duration-300"
        @click="goToMainPage"
      >
        Done
      </button>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #f1f1f1;
}

.form-container {
  transition: transform 0.3s ease-in-out;
}

.form-container:hover {
  transform: translate(10px, 10px) rotate(5deg); 
}
</style>
