<template>
<ion-app>
<!-- <login-page v-if="$store.state.app_state==false"></login-page> -->
<span></span>
<ion-router-outlet/>
</ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
// import LoginPage from './views/LoginPage.vue';
export default{
components:{
IonApp,
IonRouterOutlet,
// LoginPage,

},

data(){return{
session:null,





}},

methods:{
access_control(){
const state=this.$store.state.app_state;
if(state==false){
this.$router.push('/login');
}
}




},

mounted(){
this.access_control();
}





}





</script>
