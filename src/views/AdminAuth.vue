<script setup>
import { ref, onMounted } from 'vue';
import AdminDashboard from './AdminDashboard.vue';

let CORRECT_PASSWORD = ''; 

const adminPassword = ref('');
const confirmPassword = ref('');
const adminPasswordError = ref('');
const confirmPasswordError = ref('');
const isAdminAuthenticated = ref(false);

onMounted(async () => {
  const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
  if (isAuthenticated === 'true') {
    isAdminAuthenticated.value = true;
  }

  try {
    const response = await fetch('/password.txt');
    if (response.ok) {
      CORRECT_PASSWORD = await response.text(); 
    } else {
      console.error('Failed to load password');
    }
  } catch (error) {
    console.error('Error fetching password:', error);
  }
});

const handleSignIn = () => {
  adminPasswordError.value = '';
  confirmPasswordError.value = '';

  if (adminPassword.value !== CORRECT_PASSWORD) {
    adminPasswordError.value = 'Incorrect password for the admin field.';
    isAdminAuthenticated.value = false;
  }

  if (confirmPassword.value !== CORRECT_PASSWORD) {
    confirmPasswordError.value = 'Incorrect password for the confirm field.';
    isAdminAuthenticated.value = false;
  }

  if (!adminPasswordError.value && !confirmPasswordError.value) {
    isAdminAuthenticated.value = true;
    localStorage.setItem('isAdminAuthenticated', 'true');
  }
};

const handleLogout = () => {
  localStorage.removeItem('isAdminAuthenticated');
  isAdminAuthenticated.value = false;
};
</script>

<template>
  <div class="bg-[#F7F4F4] h-screen">
    <!-- logout -->
    <div v-if="isAdminAuthenticated" class="absolute top-5 right-5">
      <button
        class="py-2 px-4 bg-[#2B4DD4] text-white font-bold rounded-md hover:bg-red-600"
        @click="handleLogout"
      >
        Logout
      </button>
    </div>
    <!-- the rest of the code  -->
    <div v-if="!isAdminAuthenticated" class="flex justify-center items-center">
      <div class="w-[500px] bg-white rounded-[20px] shadow-lg p-8 mt-20">
        <h2 class="text-[30px] font-bold text-[#2B4DD4] text-center pt-5 mb-6">
            Sign in
        </h2>
        <form>
          <div :class="adminPasswordError ? 'mb-1' : 'mb-5'">
            <h4 class="text-[#737373] text-[12px] pl-3 pb-1">
                Enter admin password
            </h4>
            <input
              type="password"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="adminPassword"
            />
          </div>

          <!-- error message -->
          <p v-if="adminPasswordError" class="text-red-500 text-[11px] text-start mb-4">
            {{ adminPasswordError }}
          </p>
        
          <!-- Confirm password -->
          <div class="mb-1">
            <h4 class="text-[#737373] text-[12px] pl-3 pb-1">Confirm admin password</h4>
            <input
              type="password"
              class="w-full p-2 bg-[#F2F1F1] border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              v-model="confirmPassword"
            />
          </div>

          <!-- error message -->
          <p v-if="confirmPasswordError" class="text-red-500 text-[11px] text-start">
            {{ confirmPasswordError }}
          </p>
  
            <!-- Buttons -->
          <div class="flex justify-center mt-6">
            <button
              type="button"
              class="py-2 bg-[#2B4DD4] text-white mt-5 font-bold rounded-[12px] w-[120px] cursor-pointer hover:bg-[#173BA6] transition duration-300 font-inkut"
              @click="handleSignIn"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-else>
      <AdminDashboard />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #F7F4F4;
}
</style>
