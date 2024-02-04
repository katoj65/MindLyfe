<template>
<ion-page style="background:#1ABC9C;">
<ion-content>

    {{ session }}
<form @submit.prevent="submit">
<h1 style="font-size:30px;font-weight:bolder;">MindLyfe</h1>
<ion-card style="box-shadow:none;background:#1ABC9C;">
<ion-card-header>
<ion-card-title style="text-align:center;color:white;">
<span style="color:white;">Sign In</span>
</ion-card-title>
</ion-card-header>
<ion-card-content>
<p style="text-align:center;color:white;">Get access to our services</p>



<div v-if="error!=null" class="ion-padding" style="color:red;">
{{ error }}
</div>


<ion-item lines="none">
<ion-input type="email" placeholder="Enter your email address" v-model="form.email" label="Email:"></ion-input>
</ion-item>

<ion-item lines="none">
<ion-input type="password" placeholder="Enter your password" v-model="form.password" label="Password:"></ion-input>
</ion-item>

<p style="padding:10px; color:red;" v-if="message!=null">
{{ message }}
</p>


<submit-button :isLoading="isLoading" :title="'SignIn'"/>
<div id="signup">
<ion-button expand="block" style="box-shadow:none;" fill="clear" @click="$router.push('/register')">SignUp</ion-button>
</div>

</ion-card-content>
</ion-card>
</form>
</ion-content>
</ion-page>
</template>


<script>
import { inject } from 'vue';
import { IonPage, IonCard,IonCardHeader, IonCardContent,IonCardTitle, IonItem, IonInput, IonButton,IonContent } from '@ionic/vue';
import SubmitButton from '@/components/SubmitButton.vue';
import LoginController from '@/database/LoginController';
import { imageOutline } from 'ionicons/icons';
import supabase from '../database/connection.js';
export default {
components:{
IonPage,
IonCard,
IonCardHeader,
IonCardContent,
IonCardTitle,
IonItem,
IonInput,
IonButton,
SubmitButton,
IonContent
},

props:{
app_role:true,
},



data(){

return{
role:false,
isLoading:false,
error:null,
message:null,
form:{
email:'',
password:'',
}



}},

methods:{
submit(){
//
const form=this.form;
if(form.email=='' || form.password==''){
this.error='Fill in your email and password';
}else{
this.isLoading=true;
const db=new LoginController;
db.login(form).then((res)=>{
this.isLoading=false;
if(res.error==null){
const user=res.data.user.user_metadata;
this.$store.state.role=user.role;
this.$store.state.user=user;
this.$router.push('/');
}else{
if(res.error.status==400){
this.error='Invalid email or password.';
}
}
}).catch((error)=>{
this.error='Connection error';
});
}


},
test(){
if(this.$store.state.role!=null){
this.$router.push('/');
}
}



},


//
computed:{
session(){
return this.$route.meta.auth;
}





},

beforeRouteEnter(to,from,next){
const session=supabase.auth.getSession();
session.then((res)=>{
if(res.data.session!=null){
//const user_role=res.data.session.user.user_metadata.role;
return next('');
}else{
next();
}
}).catch((error)=>{
console.log(error);
});


},


//setup
setup(){
const user_state = inject('user_state');
return {user_state}
}





}
</script>


<style scoped>
ion-card{
--box-shadow:none;
}

p{
margin-bottom:20px;
margin-top:20px;
color:white;
}

div{
text-align: center;
padding-top:20px;
}

ion-button{
--backgroundColor:#1ABC9C;;
}

ion-item{
border:solid 1px #117A65;
border-radius:10px;
margin-bottom: 10px;;
}

#signup ion-button{
--background:white;
--color:gray;
--border:none;
box-shadow:none;
height:50px;
}
#signin ion-button{
--background:black;

--color:white;
--border:none;
box-shadow:none;
height:50px;

}

ion-page{
--background: #1ABC9C;
}

ion-content{
--background:#1ABC9C;
padding:0;
}

</style>