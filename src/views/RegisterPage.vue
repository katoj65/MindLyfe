<template>
<ion-page style="background:#1ABC9C;">
<ion-content>

<form @submit.prevent="submit">
<h1 style="font-size:30px;font-weight:bolder;">MindLyfe</h1>
<ion-card style="box-shadow:none;background:#1ABC9C;">
<ion-card-header>
<ion-card-title style="text-align:center;color:white;">
Sign Up
</ion-card-title>
</ion-card-header>
<ion-card-content>
<p style="text-align:center;color:white;">Sign up to get access to our services</p>

<ion-item lines="none">
<ion-input type="text" placeholder="Enter your first name" v-model="form.fname" label="First name:"></ion-input>
</ion-item>




<ion-item lines="none">
<ion-input type="text" placeholder="Enter your last name" v-model="form.lname" label="Last name:"></ion-input>
</ion-item>



<ion-item lines="none">
<ion-select value="" label="Select gender:" @ionChange="select_gender($event)">
<ion-select-option value="male">Male</ion-select-option>
<ion-select-option value="female">Female</ion-select-option>
<ion-select-option value="other">Other</ion-select-option>
</ion-select>
</ion-item>






<ion-item lines="none">
<ion-input type="number" placeholder="Enter your telephone number" v-model="form.tel" label="Tel:"></ion-input>
</ion-item>








<ion-item lines="none">
<ion-input type="email" placeholder="Enter your email address" v-model="form.email" label="Email:"></ion-input>
</ion-item>




<ion-item lines="none">
<ion-input type="password" placeholder="Enter your password" v-model="form.password" label="Password:"></ion-input>
</ion-item>


<div class="ion-padding" v-if="error!=null" style="color:red;">
{{ error }}
</div>

<submit-button :title="'SigUp'" :isLoading="isLoading"/>
<div id="signup">
<ion-button expand="block" style="box-shadow:none;" fill="clear" @click="$router.push('/login')">SignIn</ion-button>
</div>

</ion-card-content>
</ion-card>
</form>

</ion-content>

</ion-page>
</template>

<script>
import LoginController from '@/database/LoginController.js';
import { IonPage, IonCard,IonCardHeader,
IonCardContent,IonCardTitle, IonItem, IonLabel, IonInput,IonSelect, IonSelectOption,
IonButton,IonContent } from '@ionic/vue';
import SubmitButton from '@/components/SubmitButton.vue';
export default {
components:{
IonPage,
IonCard,
IonCardHeader,
IonCardContent,
IonCardTitle,
IonItem,
IonLabel,
IonInput,
IonButton,
IonContent,
SubmitButton,
IonSelect, IonSelectOption,
},


data(){return{
error:null,
isLoading:false,
message:null,
form:{
fname:'',
lname:'',
email:'',
gender:'',
tel:'',
password:'',


}



}},

methods:{
select_gender(event){
this.form.gender=event.target.value;
},




submit(){
const form=this.form;
//this.$store.state.app_state=true
if(form.fname=='' || form.lname=='' || form.gender=='' || form.tel=='' || form.email=='' || form.password==''){
this.error='Fill in all fields';
}else{
this.isLoading=true;
const db=new LoginController;
db.register(form).then((res)=>{
if(res.data.error==null){
this.isLoading=false;

if(res.error==null){

this.$router.push('/create-profile');

}else{

const status=res.error.status;
if(status==400){
this.error='User already registered.';
}
}



}else{
this.errorres.data.error;
}
}).catch((error)=>{
console.log(error);
});

}







}



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
}

div{
text-align: center;
padding-top:20px;
}

ion-button{
--backgroundColor:white;
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
background:#1ABC9C;
}
ion-content{
--background:#1ABC9C;
padding:0;
}
</style>