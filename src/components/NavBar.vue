<script setup>
import logo from '/src/assets/img/gdg_logo.png'
import {RouterLink} from 'vue-router'
</script>

<template>
    <nav class="bg-[#F2EDED] border-none border-[#F2EDED]">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <RouterLink class="flex items-center mr-4" to="/">
              <img class="h-20 w-46" :src="logo" alt="GDG Logo" />
              <span class="hidden md:block text-[#2B4DD4] text-2xl font-bold ml-2"
                >GDG Events</span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  class="text-[#2B4DD4] hover:bg-gray-300 hover:text-[#FF0000] text-lg rounded-md px-2 py-2 font-bold mt-5"
                  >Home</RouterLink
                >
                <RouterLink
                  to="/sign_in"
                  class="text-[#2B4DD4] hover:bg-gray-300 hover:text-[#FF0000] text-lg rounded-md px-2 py-2 font-bold mt-5"
                  >Sign in</RouterLink
                >
                <RouterLink
                  to="/sign_up"
                  class="text-[#2B4DD4] hover:bg-gray-300 hover:text-[#FF0000] text-lg rounded-md px-2 py-2 font-bold mt-5"
                  >Sign up</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>