import { createRouter, createWebHistory } from "vue-router";
import DashboardView from '../views/DashboardView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/events_dashboard',
            name: 'events-dashboard',
            component: DashboardView
        },
        {
            path: '/register/:id',
            name: 'register',
            component: RegisterView
        }
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
    ]
});

export default router;