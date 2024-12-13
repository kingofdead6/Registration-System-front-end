import { createRouter, createWebHistory } from "vue-router";
import DashboardView from '../views/DashboardView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue';
import RegistrationForm from "../Views/RegistrationForm.vue";
import RegistrationForm2 from "../Views/RegistrationForm2.vue";
import Registration_Job_choice from "../Views/Registration_Job_choice.vue";
import Registration_leader_form from "../Views/Registration_leader_form.vue";
import Registration_member_form from "../Views/Registration_member_form.vue";
import TeamCreated from "../Views/TeamCreated.vue";
import TeamJoined from "../Views/TeamJoined.vue";
import AdminAuth from "../views/AdminAuth.vue";
import ParticipantsList from "../views/ParticipantsList.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/events_dashboard',
            name: 'events-dashboard',
            component: DashboardView
        },
        {
            path: '/register/:id',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/registration_form',
            name: 'registration_form',
            component: RegistrationForm
        },
        {
            path: '/registration_form2',
            name: 'registration_form2',
            component: RegistrationForm2
        },
        {
            path :'/registration_Job_choice',
            name : 'registration_Job_choice',
            component : Registration_Job_choice
        },
        {
            path : '/registration_leader_form',
            name : 'registration_leader_form',
            component : Registration_leader_form
        },
        {
            path : '/registration_member_form' ,
            name : 'registration_member_form',
            component : Registration_member_form
        },
        {
            path : '/teamcreated',
            name : 'teamcreated',
            component : TeamCreated
        },
        {
            path : '/teamjoined' ,
            name : 'teamjoined',
            component : TeamJoined
        },
        {
            path: '/admin/dashboard',
            name: 'admin-auth',
            component: AdminAuth
        },
        {
            path: '/admin/:id/participants_list',
            name: 'participants_list',
            component: ParticipantsList
        },
    ]
});

export default router;


   



   
