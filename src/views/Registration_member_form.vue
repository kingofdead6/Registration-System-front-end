<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { globalState } from '../store.js';

const router = useRouter();

const isFormValid = () => {
  return globalState.teamID ;
};

// Navigation handlers
const goToPreviousPage = () => {
  router.push('/registration_Job_choice');
};

const handleSubmission = async () => {
  try {
    const teamData = await checkTeam(globalState.teamID);

    if (!teamData) {
      console.error("Team check failed.");
      return;
    }

    await registerUser();

    router.push('/teamjoined');
  } catch (error) {
    console.error("Error during submission process:", error);
    alert("An error occurred. Please try again.");
  }
};

const checkTeam = async (teamName) => {
  try {
    const response = await fetch(`https://your-api-url.com/api/check/${teamName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ team_name: teamName }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      alert(`Error: ${errorData.message}`);
      return null;
    }

    const data = await response.json();
    console.log('Team Found:', data);
    alert(`Team Found! ID: ${data.team_id}, Name: ${data.team_name}`);
    return data;
  } catch (error) {
    console.error('Error fetching team:', error);
    alert('An error occurred while checking the team.');
    return null;
  }
};

const registerUser = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/v1/registrations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: globalState.teamName,
        email: globalState.email,
        phone_number: globalState.phoneNumber,
        linkedin: globalState.linkedinProfile,
        github: globalState.githubProfile,
        other: globalState.otherLinks,
        team_id: globalState.teamID,
        event_id: 1,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData);
      alert(`Error: ${errorData.message}`);
      return;
    }

    const responseData = await response.json();
    console.log('Success:', responseData);
    alert('Registration successful!');
  } catch (error) {
    console.error('Network or Server Error:', error);
    alert('An error occurred while sending the request.');
  }
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
      <div class="w-[500px] bg-white rounded-[20px] shadow-lg p-8">
        <h2 class="text-[14px] font-bold pb-6">Participant Information:</h2>
        <!-- Form -->
        <form>
          <!-- Team's Name -->
          <div class="mb-4">
            <h4 class="text-[#737373] text-[12px] pl-3">
                Enter your team ID  <span class="text-red-900">*</span>
            </h4>
            <input
              type="text"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="globalState.teamID"
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
