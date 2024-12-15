<script setup>
import { useRouter } from 'vue-router';
import { globalState } from '../store.js';
import { getTeamLeader } from '../store.js';

const router = useRouter();

const isFormValid = () => {
  return globalState.teamName;
};

// Navigation handlersk 
const goToPreviousPage = () => {
  router.push('/registration_Job_choice');
};

const handleSubmission = () => {
  const createTeam = async (teamName, teamLeaderId, eventId) => {
    try {
        const response = await fetch('https://your-api-url.com/api/teams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // Add your authentication token if required:
                // 'Authorization': 'Bearer YOUR_API_TOKEN',
            },
            body: JSON.stringify({
                team_name: teamName,
                team_leader_id: teamLeaderId,
                event_id: eventId,
                accepted: true, // Default value or dynamic based on your logic
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error:', errorData);
            return;
        }

        const data = await response.json();
        console.log('Team Created Successfully:', data);
        router.push('/teamcreated'); 

        // Return or use the created team ID
        return data.team_id;
    } catch (error) {
        console.error('Error creating team:', error);
    }
  };
  createTeam(globalState.teamName, getTeamLeader(), 1);
};
</script>

<template>
  <div class="bg-[#F7F4F4] h-screen">
    <!-- Form Title -->
    <h2 class="text-[24px] font-bold text-[#2B4DD4] text-center pt-9 mb-6 mt-20">
      Registration form
    </h2>
    <!-- Form Container -->
    <div class="flex justify-center items-center">
      <div class="w-[500px] bg-white rounded-[20px] shadow-lg p-6">
        <h2 class="text-[14px] font-bold pb-6">Participant Information:</h2>
        <!-- Form -->
        <form>
          <!-- Team's Name -->
          <div class="mb-6">
            <h4 class="text-[#737373] text-[12px] pl-3">
              Team's Name <span class="text-red-900">*</span>
            </h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="globalState.teamName"
            />
          </div>

          <!-- Additional Info -->
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3">Anything to add?</h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="globalState.additionalInfo"
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
              @click="handleSubmission"
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
  background-color: #F7F4F4;
}
</style>
