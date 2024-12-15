<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { globalState } from '../store.js';

const router = useRouter();

const selectedRole = ref(null);
const isFormValid = () => {
  return globalState.selectedRole !== null;
};

// Navigation handlers
const goToPreviousPage = () => {
  router.push('/registration_form2');
};

const goToNextPage = () => {
  if (globalState.selectedRole === 'Team Leader') {
    router.push('/registration_leader_form'); 
  } else if (globalState.selectedRole === 'Team Member') {
    router.push('/registration_member_form'); 
  }
};

</script>

<template>
  <div class="bg-[#F7F4F4] h-screen">
    <!-- Form Title -->
    <h2 class="text-[24px] font-bold text-[#2B4DD4] text-center pt-[20px] mb-6 mt-20">
      Registration form
    </h2>

    <!-- Form Container -->
    <div class="flex justify-center items-center">
      <div class="w-[500px] bg-white rounded-[20px] shadow-lg p-8">
        <!-- Form -->
        <form>
          <div class="mb-4">
            <h2 class="text-[14px] font-bold pb-6">Personal Information:</h2>
            <h4 class="text-[#737373] text-[12px] pl-3 pb-2">Select your role in the team <span class="text-red-900">*</span></h4>
            <!-- Role Selection -->
            <div class="p-8 bg-[#F2F1F1] border rounded-md">
              <label class="flex items-center mb-[15px]">
                <input
                  type="radio"
                  value="Team Leader"
                  v-model="globalState.selectedRole" 
                  class="mr-2 radio-input"
                />
                <span class="text-green-600">Team Leader</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  value="Team Member"
                  v-model="globalState.selectedRole"
                  class="mr-2 radio-input"
                />
                <span class="text-red-600">Team Member</span>
              </label>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex justify-between mt-6">
            <button
              type="button"
              class="py-2 bg-[#2B4DD4] text-white font-bold rounded-[12px] w-[120px] cursor-pointer hover:bg-[#173BA6] transition duration-300 font-inkut"
              @click="goToPreviousPage"
              >
              Back
            </button>
            <button
              type="button"
              class="py-2 bg-[#2B4DD4] text-white font-bold rounded-[12px] w-[120px] cursor-pointer hover:bg-[#173BA6] transition duration-300 font-inkut"
              :disabled="!isFormValid()" @click="goToNextPage"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  background-color: #F7F4F4;
}

input[type="radio"] {
  appearance: none; /* Removes default radio button appearance */
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  position: relative;
  transition: all 0.3s ease;
}

input[type="radio"]:checked {
  background-color: green; 
  border-color: green;
}

input[type="radio"]:checked::before {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

input[type="radio"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 128, 0, 0.3); /* Add focus shadow */
}

input[type="radio"]:disabled {
  background-color: #f0f0f0;
  border-color: #ccc;
}

input[type="radio"]:disabled + span {
  color: #aaa;
}
input[type="radio"]:checked + span {
  font-weight: bold;
}
</style>
