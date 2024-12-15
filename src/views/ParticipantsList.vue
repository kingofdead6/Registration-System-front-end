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

const participants = [
    {
        id: 1, 
        name: "devz", 
        leader: "yasmine", 
        nbr: 5, 
        members: [
            "yasmine",
            "amira",
            "takoua",
            "amani",
            "imad"
        ],
        eventId: "devfest"
    },
    {
        id: 2, 
        name: "innovators", 
        leader: "youcef", 
        nbr: 4, 
        members: [
            "rahim",
            "adam",
            "youcef",
            "ramy",
        ],
        eventId: "devfest"
    },
    {
        id: 3, 
        name: "queens never cry", 
        leader: "youssra", 
        nbr: 3, 
        members: [
            "maria",
            "tasnim",
            "sarah",
        ],
        eventId: "devfest"
    },
    {
        id: 4, 
        name: "404", 
        leader: "imad", 
        nbr: 3, 
        members: [
            "rachid",
            "walid",
            "imad",
        ],
        eventId: "devfest"
    },
    {
        id: 5, 
        name: "idk tbh", 
        leader: "anis", 
        nbr: 3, 
        members: [
            "maria",
            "imad",
            "yasmine",
            "maroua"
        ],
        eventId: "devfest"
    },
]

const event = computed(() => {
  return events.find(event => event.id === eventId);
});

const filteredParticipants = computed(() => {
  return participants.filter(participant => participant.eventId === eventId);
});

const isTableEmpty = computed(() => {
  return filteredParticipants.value.length === 0;
});
</script>

<template>
    <div class="bg-[#F7F4F4] flex items-center justify-center text-center flex-col">
        <div class="text-center text-[#2B4DD4] font-bold text-[37px] mt-[100px] mb-10">{{ event.label }}</div>
    </div>
    <div class="table">
        <section v-if="event" class="table_header">
            <h1>{{ event.label }}'s participants list</h1>
        </section>
        <section class="table_body" :style="{ paddingBottom: isTableEmpty ? '100px' : '0px' }">
            <table>
                <thead>
                    <tr>
                        <th>Team ID</th>
                        <th>Team Name</th>
                        <th>Team Leader</th>
                        <th>Number of members</th>
                        <th>Team Members</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(participant, index) in filteredParticipants" :key="index">
                        <td>{{ participant.id }}</td>
                        <td>{{ participant.name }}</td>
                        <td>{{ participant.leader }}</td>
                        <td>{{ participant.nbr }}</td>
                        <td>
                            <div v-for="(member, idx) in participant.members" :key="idx">
                                {{ member }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<style scoped>
body{
    background-color: #F7F4F4;
}
.table {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 82vw;
    height: 120vh;
    background-color: #fff0;
    backdrop-filter: blur(7px);
    box-shadow: 0 .4rem .8rem #0005;
    border-radius: .8rem;
    overflow: hidden;
    margin-left: 8%;
    margin-bottom: 70px;
    padding: 20px;
}
.table_header{
    width: 100%;
    height: 10%;
    background-color: #fff0;
    padding: .5rem 2rem;
    margin-top: 0;
    font-size: 25px;
    color: #16a34a;
}
.table_body{
    width: 95%;
    max-height: calc(89% - 1.6rem);
    background-color: #fffb;
    margin: .8rem auto;
    border-radius: .6rem;
    overflow: auto;
    text-align: center;
}
.table_body::-webkit-scrollbar{
    width: 0.05rem;
    height: 0.2rem;
}
.table_body::-webkit-scrollbar-thumb{
    border-radius: .5rem;
    background-color: #0004;
    visibility: hidden;
}
.table_body:hover::-webkit-scrollbar-thumb{
    visibility: visible;
}
table{
    width: 100%;
}
thead th{
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fef9c3;
    color: #ef4444;
}
table, th, td{
    padding: 1rem;
    border-collapse: collapse;
    text-align: left;
}

</style>
