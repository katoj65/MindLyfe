<template>
<ion-app>
<login-page v-if="$store.state.app_state==false"></login-page>
<ion-router-outlet v-else />
</ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import LoginPage from './LoginPage.vue';
export default{
components:{
IonApp,
IonRouterOutlet,
LoginPage,

},

data(){return{
session:null,





}}





}





</script>
