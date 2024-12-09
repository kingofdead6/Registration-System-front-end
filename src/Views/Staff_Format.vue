<script setup>
import { ref } from 'vue';
import NavBar2 from '../components/NavBar2.vue'; 

const fullName = ref('');
const email = ref('');
const discordId = ref('');
const phoneNumber = ref('');
const university = ref('');

const universities = ['ESI', 'USTHB', 'ENSIA', 'Another One'];

const isFormValid = () => {
  return (
    fullName.value &&
    email.value &&
    discordId.value &&
    phoneNumber.value &&
    university.value
  );
};
</script>

<template>
  <NavBar2 />
  <div class=" bg-[#F2EDED]">
    <!-- Back Button -->
    <h2 class="ml-[64px] pt-[72px] text-[20px] text-black font-light">
      &lt;-- Back
    </h2>
    <!-- Form Title -->
    <h2 class="text-[24px] font-bold text-[#2B4DD4] text-center pt-9 mb-6 ">
        Staff form
    </h2>
    <!-- Form Container -->
    <div class="flex justify-center items-center">
      <div class="w-[360px] bg-white rounded-[20px] shadow-lg p-6">
        <h2 class="text-[14px] pb-6">Personal information : </h2>
        <!-- Form -->
        <form>
          <div class="mb-4">
            <h4 class="text-gray-400 text-[12px] pl-3 ">FullName <span class="text-red-900">*</span></h4>
            <input
              type="text"
              class="w-full p-3 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="fullName"
            />
          </div>
          <div class="mb-4">
            <h4 class="text-gray-400 text-[12px] pl-3 ">Email <span class="text-red-900">*</span></h4>
            <input
              type="email"
              class="w-full p-3 bg-[#F2F1F1] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
              v-model="email"
            />
          </div>
          <div class="mb-4">
            <h4 class="text-gray-400 text-[12px] pl-3 ">DiscordID <span class="text-red-900">*</span></h4>
            <input
              type="text"
              class="w-full p-3 bg-[#F2F1F1] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
              v-model="discordId"
            />
          </div>
          <div class="mb-4">
            <h4 class="text-gray-400 text-[12px] pl-3 ">PhoneNumber <span class="text-red-900">*</span></h4>
            <input
              type="tel"
              class="w-full p-3 bg-[#F2F1F1] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
              v-model="phoneNumber"
            />
          </div>
            <!-- Dropdown for University -->
            <div class="mb-4">
                <h4 class="text-gray-400 text-[12px] pl-3 ">University <span class="text-red-900">*</span></h4>
            <select
              v-model="university"
              class="w-full p-1 bg-[#F2F1F1] border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="" disabled selected>Select Your University</option>
              <option v-for="uni in universities" :key="uni" :value="uni">
                {{ uni }}
              </option>
            </select>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="py-2 bg-[#2B4DD4] text-white font-bold rounded-[12px] w-[120px] cursor-pointer ml-[195px] hover:bg-[#173BA6] transition duration-300 font-inkut"
            :disabled="!isFormValid()"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #f1f1f1;
}
</style>
