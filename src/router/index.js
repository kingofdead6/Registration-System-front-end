import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/sign_in',
            name: 'sign-in',
            component: SignInView
        },
        {
            path: '/sign_up',
            name: 'sign-up',
            component: SignUpView
        }
    ]
});

export default router;