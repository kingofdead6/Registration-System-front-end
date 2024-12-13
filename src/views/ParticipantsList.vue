<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const eventId = route.params.id;

const events = [
    { id: "devfest", label: "DevFest Algiers" },
    { id: "gdg_hack", label: "GDG Hack" },
    { id: "g_hack", label: "GHack Algiers" },
    { id: "gdg_algiers_ctf", label: "GDG Algiers CTF" },
    { id: "hash_code", label: "HashCode" }
];

const event = computed(() => {
  return events.find(event => event.id === eventId);
});

</script>

<template>
    <div class="bg-[#F7F4F4] flex items-center justify-center text-center flex-col">
        <div class="text-center text-[#2B4DD4] font-bold text-[37px] mt-[100px]">{{ event.label }}</div>
    </div>
    
</template>
