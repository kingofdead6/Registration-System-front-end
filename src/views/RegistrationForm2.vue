<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const Github_Profile = ref('');
const Linkedin_Profile = ref('');
const Other_links = ref('');

const isFormValid = () => {
  return (
    Github_Profile.value &&
    Linkedin_Profile.value  );
};

// Navigation handlers
const goToPreviousPage = () => {
  router.push('/registration_form');
};

const goToNextPage = () => {
  router.push('/registration_Job_choice'); 
};

</script>

<template >
  <div class="bg-[#F7F4F4] h-screen">

    <!-- Form Title -->
    <h2 class="text-[24px] font-bold text-[#2B4DD4] text-center pt-[20px] mb-6 mt-20">
      Registration form
    </h2>
    <!-- Form Container -->
    <div class="flex justify-center items-center">
      <div class="w-[500px] bg-white rounded-[20px] shadow-lg p-8">
        <h2 class="text-[14px] font-bold pb-6">Personal Information:</h2>
        <!-- Form -->
        <form>
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3">GitHub profile link <span class="text-red-900">*</span></h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="Github_Profile"
            />
          </div>
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3">Linkedin profile link <span class="text-red-900">*</span></h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
              v-model="Linkedin_Profile"
            />
          </div>
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3">Other links</h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
              v-model="Other_links"
            />
          </div>
          <!-- Buttons -->
          <div class="flex justify-between mt-6">
            <!-- Back Button -->
            <button
              type="button"
              class="py-2 bg-[#2B4DD4] text-white font-bold rounded-[12px] w-[120px] cursor-pointer hover:bg-[#173BA6] transition duration-300 font-inkut"
              @click="goToPreviousPage"
            >
              Back
            </button>
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
  background-color: #f1f1f1;
}
</style>
