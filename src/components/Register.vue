<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import BackButton from './BackButton.vue';

const route = useRoute();
const router = useRouter();
const eventId = route.params.id;

const events = [
    { id: "devfest", label: "DevFest Algiers", description: "Stands for `Developers Festival`, DevFest is an annual, international festival organized by Google Developers Groups (GDGs) from around the world to bring together local developers and tech enthusiasts."},
    { id: "gdg_hack", label: "GDG Hack", description: "GDG Hack is an internal hackathon, organized for the GDG Internal community to foster integration and strengthen the bonds within the GDG Family."},
    { id: "g_hack", label: "GHack Algiers", description: "Ghack Algiers is a hackathon organized by GDG Algiers, debuting at the end of February. The event features two phases: an online phase, where teams develop ideas, and an onsite phase, where selected teams refine their projects with mentorship and compete for the final winner."},
    { id: "gdg_algiers_ctf", label: "GDG Algiers CTF", description: "Capture The Flag (CTF) is a popular competition among Cyber Security enthusiasts. GDG Algiers brought this exciting challenge to the forefront with our international CTF Algiers event, held from October 7th to 9th, 2022."},
    { id: "hash_code", label: "HashCode", description: "Hash Code is a team-based programming competition organized by Google for students and professionals worldwide, allowing participants to choose their preferred programming language. GDG Algiers hosts its own hub, bringing together participating teams in one place to solve real Google engineering challenges."}
];

const event = computed(() => {
  return events.find(event => event.id === eventId);
});

const goNextpage = () => {
  router.push('/registration_form'); 
};
</script>

<template>
    <BackButton/>
    <div v-if="event" class="bg-[#F7F4F4] flex items-center justify-center text-center flex-col">
        <div class="text-center text-[#2B4DD4] font-bold text-[37px] mt-[40px]">{{ event.label }}</div>
        <p class="text-center text-black font-medium text-lg w-[630px] mt-10 mb-10">
           {{ event.description }}
        </p>
        <div class="flex items-center justify-center text-center flex-row space-x-10 mb-[105px] mt-10">
            <button class="bg-[#2B4DD4] font-bold text-white rounded-[13px] py-2 px-7"
            @click="goNextpage">Register</button>
        </div>
    </div>
    <div v-else class="text-center text-red-500 font-bold mt-10">
        Event not found. Please check the URL or try again.
    </div>
</template>
