import { reactive } from 'vue';

export const globalState = reactive({
    fullName: '',
    email: '',
    discordId: '',
    phoneNumber: '',
    university: '',
    githubProfile: '',
    linkedinProfile: '',
    otherLinks: '',
    selectedRole: null,
    teamName: '',
    additionalInfo: '',
    teamID: ''
});

export const getTeamLeader = () => {
    if (globalState.selectedRole === 'Team Leader') {
        return globalState.email;
    }
    return 1; 
};