<template>
<ion-app>
<ion-router-outlet/>
</ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useBackButton, useIonRouter } from '@ionic/vue';
import LoginController from './database/LoginController.js';
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
//const user=response.data.session.user.user_metadata;
if(response.error==null){
const user=response.data.session.user.user_metadata;
this.$store.state.current_user.role=user.role;
this.$store.state.user=user;
console.log(response.data.session.user.user_metadata);
this.$router.push('/');
}else{
this.$router('/login');
}
}).catch((error)=>{
console.log(error);
});
}
},

mounted(){
this.access_control();
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
