<template>
<ion-page>
<users-tab></users-tab>
</ion-page>
</template>
<script>
import {IonPage,} from '@ionic/vue';
import UsersTab from '../components/UsersTab.vue';
export default {
components:{
IonPage,
UsersTab,
},




computed:{
role(){
return this.$store.state.current_user.role;
}



}





}
</script>