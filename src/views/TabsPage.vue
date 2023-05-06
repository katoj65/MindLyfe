<template>
<ion-page>
<users-tab v-if="role=='user'"></users-tab>
<therapist-tab v-else-if="role=='therapist'"></therapist-tab>
<organisation-tab v-else-if="role=='organisation'"></organisation-tab>
</ion-page>
</template>
<script>
import {IonPage,} from '@ionic/vue';
import UsersTab from '../components/UsersTab.vue';
import TherapistTab from '../components/TherapistTab.vue';
import OrganisationTab from '../components/OrganisationTab.vue';
export default {
components:{
IonPage,
UsersTab,
TherapistTab,
OrganisationTab,
},




computed:{
role(){
return this.$store.state.current_user.role;
}



}





}
</script>