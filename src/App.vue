<template>
<ion-app>
<ion-router-outlet v-if="isLoading==false"/>
<loader-component v-else/>
</ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useBackButton, useIonRouter } from '@ionic/vue';
import LoginController from './database/LoginController.js';
import { StatusBar, Style} from '@capacitor/status-bar';
import LoaderComponent from './components/LoaderComponent.vue';
import WalletController from './database/WalletController.js';



export default{
components:{
IonApp,
IonRouterOutlet,
LoaderComponent
},

data(){return{
session:null,
isLoading:false,

}},








methods:{
access_control(){
// console.log(this.$route.meta);
//session alive
this.isLoading=true;
const db=new LoginController;
db.user_session().then((response)=>{
this.isLoading=false;
if(response.error==null){
if(response.data.session!=null){
    
// console.log(response.data);
//
this.$store.state.app_state=true;
const user=response.data.session.user.user_metadata;
const set_user={
fname:user.fname,
lname:user.lname,
gender:user.gender,
tel:user.tel,
role:user.role,
online_status:user.online_status,
email:response.data.session.user.email
};
this.$store.state.role=user.role;
this.$store.state.user=set_user;
//create_wallet
const wallet=new WalletController;
wallet.create_wallet(this.$store.state.user.email);
if(response.data.session.user.user_metadata.subscription==null){
this.$router.push('/login');
}else{
this.$router.push('/');
}
}else{
this.$router.push('/login');
}
}else{
this.$router.push('/login');
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
this.setStatusBarStyleLight();
this.settings();

},






setup() {
const ionRouter = useIonRouter();
useBackButton(-1, () => {
App.exitApp();
});
},


}





</script>
<style>
.border{
border:solid 1px #EAEDED;
}

.border-green{
border:solid 1px #138D75
}

.border-bottom{
 border-bottom:solid 1px #EAEDED;
}
.border-top{
    border-bottom:solid 1px #EAEDED;
   }
</style>