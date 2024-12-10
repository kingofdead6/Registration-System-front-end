<script setup>
import DevFest from '../assets/img/DevFest_event.png';
import GdgHack from '../assets/img/GDG_Hack_event.png';
import GHack from '../assets/img/G_Hack_event.png';
import CTF from '../assets/img/CTF_event.png';
import HashCode from '../assets/img/HashCode_event.png';
import {RouterLink} from 'vue-router';

const dashboardItems = [
  { label: "DevFest Algiers", icon: DevFest, isImage: true, id: "devfest"},
  { label: "GDG Hack", icon: GdgHack, isImage: true, id: "gdg_hack"},
  { label: "GHack Algiers", icon: GHack, isImage: true, id: "g_hack"},
  { label: "GDG Algiers CTF", icon: CTF, isImage: true, id: "gdg_algiers_ctf"},
  { label: "HashCode", icon: HashCode, isImage: true, id: "hash_code"}
];
</script>

<template>
    <div class="bg-[#F7F4F4]">
      <div class="flex-1 flex flex-col justify-start">
        <h2 class="text-[#2B4DD4] text-3xl font-bold mt-20 ml-20 pl-10">Events Dashboard</h2>
      </div>
      <section class="bg-[#F7F4F4] px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RouterLink :to="`/register/` + item.id" v-for="(item, index) in dashboardItems" :key="index" class="bg-[#E7E6E6] rounded-xl shadow-md cursor-pointer">
            <div class="p-2">
              <img :src="item.icon" :alt="item.label" class="rounded-xl">
              <div class="text-green-600 mb-3 font-medium text-center text-lg mt-5">
                {{ item.label }}
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
    </div>
</template>