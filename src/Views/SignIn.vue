<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

const email = ref('');
const password = ref('');

const isFormValid = () => {
  return  email.value && password.value ;
};
</script>

<template>
  <NavBar />

  <div class="flex justify-center items-center h-screen bg-[#F2EDED] ">
    <div class="w-[360px] bg-white rounded-[20px] shadow-lg p-6">
      <h2 class="text-[24px] font-bold text-[#2B4DD4] text-center mb-6 font-inkut" >
        Sign up
      </h2>

      <form>
       
        <div class="mb-4">
          <input
            type="email"
            placeholder="Email"
            class="w-full p-3 border bg-[#F2F1F1] rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
            v-model="email"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            placeholder="Password"
            class="w-full p-3 border bg-[#F2F1F1] rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
            v-model="password"
          />
          <a href="" class="text-center text-sm text-[#D4D4D6] ml-[175px] mt-4 cursor-pointer hover:underline">Forgot Password?</a>
        </div>
  

        <button
          type="submit"
          class="py-2 bg-[#2B4DD4] text-white font-bold rounded-[12px] w-[120px]  cursor-pointer ml-[100px]
           hover:bg-[#173BA6] transition duration-300 font-inkut"
          :disabled="!isFormValid()"
        >
          Sign In
        </button>
      </form>

      <p class="text-center text-sm text-gray-500 mt-4">
        You don’t have an account? 
        <a href="/" class="text-[#2B4DD4] cursor-pointer hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  </div>
</template>

<style>

body {
  margin: 0;
  background-color: #f1f1f1;
}
</style>
