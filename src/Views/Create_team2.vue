<script setup>
import { ref } from 'vue';
import NavBar2 from '../components/NavBar2.vue';

const teamName = ref('');
const members = ref('');
const additionalInfo = ref('');

const teamMembersOptions = ['3', '4', '5', '6'];

const isFormValid = () => {
  return teamName.value && members.value;
};
</script>

<template>
  <NavBar2 />
  <div class="bg-[#F2EDED]">
    <!-- Form Title -->
    <h2 class="text-[24px] font-bold text-[#2B4DD4] text-center pt-9 mb-6">
      Create Team Form
    </h2>
    <!-- Form Container -->
    <div class="flex justify-center items-center">
      <div class="w-[400px] bg-white rounded-[20px] shadow-lg p-6">
        <h2 class="text-[14px] font-bold pb-6">Participant Information:</h2>
        <!-- Form -->
        <form>
          <!-- Team's Name -->
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3">
              Team's Name <span class="text-red-900">*</span>
            </h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="teamName"
            />
          </div>
          <!-- Team Members Dropdown -->
          <div class="mb-4">
            <h4 class="text-[#737373] text-[11px] pl-3 pb-2">
              How many members are in the team (including you)
              <span class="text-red-900">*</span>
            </h4>
            <select
              v-model="members"
              class="w-full p-[-20px] bg-[#F2F1F1] border rounded-md text-gray-700 text-center focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="" disabled selected>Select</option>
              <option
                v-for="member in teamMembersOptions"
                :key="member"
                :value="member"
              >
                {{ member }}
              </option>
            </select>
          </div>
          <!-- Additional Info -->
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3">Anything to add?</h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="additionalInfo"
            />
          </div>
          <!-- Buttons -->
          <div class="flex justify-between">
            <button
              type="button"
              class="py-2 bg-[#2B4DD4] text-white font-bold rounded-[12px] w-[120px] cursor-pointer hover:bg-[#173BA6] transition duration-300 font-inkut"
            >
              Back
            </button>
            <button
              type="submit"
              class="py-2 bg-[#2B4DD4] text-white font-bold rounded-[12px] w-[120px] cursor-pointer hover:bg-[#173BA6] transition duration-300 font-inkut"
              :disabled="!isFormValid()"
            >
              Submit
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
