<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

const fullName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const isFormValid = () => {
  return fullName.value && email.value && password.value && confirmPassword.value;
};
</script>

<template>
  <NavBar />

  <div class="flex justify-center items-center h-screen bg-[#F2EDED] ">
    <div class="w-[360px] bg-white rounded-[20px] shadow-lg p-6">
      <h2 class="text-[24px] font-bold text-[#2B4DD4] text-center mb-6" style="font-family: 'Inknut Antiqua', serif;">
        Sign up
      </h2>

      <form>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            class="w-full p-3 bg-[#F2F1F1] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
            v-model="fullName"
          />
        </div>
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
        </div>
        <div class="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            class="w-full p-3 border bg-[#F2F1F1]  rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
            v-model="confirmPassword"
          />
        </div>

        <button
          type="submit"
          class="py-2 bg-[#2B4DD4] text-white font-bold rounded-[12px] w-[120px]  cursor-pointer ml-[100px] hover:bg-[#173BA6] transition duration-300"
          :disabled="!isFormValid()"
          style="font-family: 'Inknut Antiqua', serif;"
        >
          Sign up
        </button>
      </form>

      <p class="text-center text-sm text-gray-500 mt-4">
        Already have an account? 
        <a href="/" class="text-[#2B4DD4] cursor-pointer hover:underline">
          Sign in
        </a>
      </p>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;700&display=swap');

body {
  margin: 0;
  font-family: 'Inknut Antiqua', serif;
  background-color: #f1f1f1;
}
</style>
