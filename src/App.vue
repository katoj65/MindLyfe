<template>
<ion-app>
<ion-router-outlet/>
</ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useBackButton, useIonRouter } from '@ionic/vue';
import LoginController from './database/LoginController.js';
import { StatusBar, Style} from '@capacitor/status-bar';


export default{
components:{
IonApp,
IonRouterOutlet,
},

data(){return{
session:null,


}},








methods:{
access_control(){
//session alive
const db=new LoginController;
db.user_session().then((response)=>{
if(response.error==null){


if(response.data.session!=null){
const user=response.data.session.user.user_metadata;
this.$store.state.role=user.role;
this.$store.state.user=user;
console.log(response.data.session.user.user_metadata);
this.$router.push('/');
}else{
this.$router.push('/login');
}






}else{
this.$router('/login');
}
}).catch((error)=>{
console.log(error);
});
},

async settings(){
await StatusBar.setBackgroundColor({ color: '#1ABC9C' });
},
async setStatusBarStyleLight(){
await StatusBar.setStyle({ style: Style.Light });
},






},







mounted(){
this.access_control();
this.settings();
this.setStatusBarStyleLight();
},








setup() {
const ionRouter = useIonRouter();
useBackButton(-1, () => {
if (!ionRouter.canGoBack()) {
App.exitApp();
}
});
}





}





</script>
