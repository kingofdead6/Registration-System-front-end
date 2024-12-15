<script setup>
import { useRouter } from 'vue-router';
import BackButton from '../components/BackButton.vue';
import { globalState } from '../store.js';

const router = useRouter();

const universities = ['ESI', 'USTHB', 'ENSIA', 'Another One'];

const isFormValid = () => {
  return (
    globalState.fullName &&
    globalState.email &&
    globalState.discordId &&
    globalState.phoneNumber &&
    globalState.university
  );
};

const goToNextPage = () => {
  router.push('/registration_form2'); 
};
</script>

<template>
  <BackButton/>
  <div class=" bg-[#F7F4F4]">
    <!-- Form Title -->
    <h2 class="text-[24px] font-bold text-[#2B4DD4] text-center pt-[20px] mb-6 ">
      Registration form
    </h2>
    <!-- Form Container -->
    <div class="flex justify-center items-center">
      <div class="w-[500px] bg-white rounded-[20px] shadow-lg p-6 mb-20">
        <h2 class="text-[14px] font-bold pb-6">Personal Information:</h2>
        <!-- Form -->
        <form>
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3">FullName <span class="text-red-900">*</span></h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="globalState.fullName"
            />
          </div>
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3 ">Email <span class="text-red-900">*</span></h4>
            <input
              type="email"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
              v-model="globalState.email"
            />
          </div>
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3 ">DiscordID <span class="text-red-900">*</span></h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
              v-model="globalState.discordId"
            />
          </div>
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3 ">PhoneNumber <span class="text-red-900">*</span></h4>
            <input
              type="tel"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
              v-model="globalState.phoneNumber"
            />
          </div>
            <!-- Dropdown for University -->
            <div class="mb-4">
                <h4 class="text-[#737373] text-[12px] pl-3 ">University <span class="text-red-900">*</span></h4>
            <select
              v-model="globalState.university"
              class="w-full p-0 bg-[#F2F1F1] border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
            >
              <!-- <option value="" disabled selected>Select Your University</option> -->
              <option v-for="uni in universities" :key="uni" :value="uni">
                {{ uni }}
              </option>
            </select>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end mt-6">
            <!-- Next Button -->
            <button
              type="button"
              class="py-2 bg-[#2B4DD4] text-white font-bold rounded-[12px] w-[120px] cursor-pointer hover:bg-[#173BA6] transition duration-300 font-inkut"
              @click="goToNextPage"
              :disabled="!isFormValid()"
            >
              Next
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
