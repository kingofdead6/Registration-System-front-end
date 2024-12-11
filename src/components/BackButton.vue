<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <section>
      <div class="bg-[#F7F4F4]">
        <div class="container m-auto py-6 ">
            <RouterLink
            to="/events_dashboard"
            class="text-black text-lg font-bold hover:text-gray-400 flex items-center"
            >
            <i class="pi pi-arrow-circle-left mr-3 ml-10"></i> Back
            </RouterLink>
        </div>
      </div>
    </section>
</template>