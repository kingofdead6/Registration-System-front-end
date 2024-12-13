<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const adminPassword = ref('');
const confirmPassword = ref('');

const goToNextPage = () => {
  router.push('/admin/dashboard'); 
};

</script>

<template>
  <div class="bg-[#F7F4F4] h-screen">
    <div class="flex justify-center items-center">
      <div class="w-[500px] bg-white rounded-[20px] shadow-lg p-8 mt-20">
        <h2 class="text-[30px] font-bold text-[#2B4DD4] text-center pt-5 mb-6">
            Sign in
        </h2>
        <form>
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3 pb-1">
                Enter admin password
            </h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="adminPassword"
            />
          </div>
        
          <!-- Additional Info -->
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3 pb-1">Confirm admin password</h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="confirmPassword"
            />
          </div>
  
            <!-- Buttons -->
          <div class="flex justify-center mt-6">
            <!-- Next Button -->
            <button
              type="button"
              class="py-2 bg-[#2B4DD4] text-white mt-5 font-bold rounded-[12px] w-[120px] cursor-pointer hover:bg-[#173BA6] transition duration-300 font-inkut"
              @click="goToNextPage"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #F7F4F4;
}
</style>