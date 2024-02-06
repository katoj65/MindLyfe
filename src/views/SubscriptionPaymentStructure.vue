<template>
<ion-page style="background:#1ABC9C;">
<ion-content>
<form @submit.prevent="submit" v-if="isLoading2==false">
<div style="padding-left:45%;">
<ion-avatar>
<img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
</div>
<h1 style="font-size:30px;font-weight:bolder; text-transform:capitalize;">
{{ row.fname }} {{ row.lname }}
</h1>
<p>
{{ row.tel }}
</p>
<ion-card style="box-shadow:none;background:#1ABC9C;">
<ion-card-header>
<ion-card-title style="text-align:center;color:white;">
<p>Choose your subscription plan or enter a campany code</p>
</ion-card-title>
</ion-card-header>
<ion-card-content>


<div class="ion-padding" v-if="error!=null" style="color:red;">
{{ error }}
</div>

<div v-if="group==true">
<div v-if="isLoading3==false">
<ion-radio-group>
<ion-item v-for="(p,key) in payment_plan" :key="key" @click="select_plan(p.id)">
<ion-radio :value="p.id" :label="p.title"   justify="space-between">
{{ p.title }} - Shs. {{ p.amount }}
</ion-radio>
</ion-item>
</ion-radio-group>
</div>
<skeleton-loader v-else class="ion-padding"/>




</div>

<div v-if="code_status==true || code_status==null" style="margin-top:10px;">
<h2 style="color:white;font-weight:bold;font-size:20px;padding-bottom:10px;">
Campany Code
</h2>
<div style="">
<ion-item>
<ion-input label="Company Code:" placeholder="Enter a 5 digit code" @ionKeypress="input_code($event)"></ion-input>
</ion-item>
</div>


</div>

<ion-chip v-else-if="code_status==false" @click="set_business_code(true)">
<ion-label style="color:white;">I Have a company code</ion-label>
</ion-chip>

<ion-chip v-if="code_status==true" @click="set_business_code(false)">
<ion-label style="color:white;">Select subscription plan</ion-label>
</ion-chip>




<div>
<submit-button :isLoading="isLoading" :title="'Finish'"/>
</div>
</ion-card-content>
</ion-card>
</form>
<div v-else class="ion-padding">
<skeleton-loader/>
</div>
</ion-content>
</ion-page>
</template>

<script>
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import LoginController from '@/database/LoginController.js';
import SubscriptionController from '@/database/SubscriptionController.js';
import {
IonAvatar,
IonButton,
IonCard,
IonCardContent,
IonCardHeader,
IonCardTitle,
IonContent,
IonInput,
IonItem,
IonPage,
IonRadio,
IonRadioGroup,
IonChip,
IonLabel,
} from '@ionic/vue';

export default {
components:{
IonLabel,
IonChip,
IonPage,
IonCard,
IonCardHeader,
IonCardContent,
IonCardTitle,
IonItem,
IonInput,
IonButton,
IonAvatar,
SkeletonLoader,
SubmitButton,
IonContent,
IonRadio,
IonRadioGroup,
},


data(){
return{
group:true,
code_status:null,
form:{
subscription_id:'',
},
payment_plan:[],
error:null,
isLoading:false,
row:{},
isLoading2:false,
isLoading3:false,
}},

methods:{
//select code
input_code(event){
this.form.subscription_id=event.target.value;
this.group=false;
this.code_status=true;
},



//
set_business_code(status){
this.code_status=status;
this.form.subscription_id='';
if(status==true){
this.group=false;
}else{
this.group=true;
this.code_status=false;
}

},


//
select_plan(event){
this.form.subscription_id=event;
this.code_status=false;
},


user_data(){
this.isLoading2=true;
this.isLoading3=true;
const db=new LoginController;
db.user_session().then((res)=>{
if(res.data.error==null){
const subscribe_model=new SubscriptionController;
subscribe_model.show_user_subscription().then((response)=>{
if(response.status==200){
this.payment_plan=response.data;
this.isLoading3=false;
this.form.contact_person=this.row.tel;


//session details
this.$store.state.app_state=true;
const user=res.data.session.user.user_metadata;
const set_user={
fname:user.firstname,
lname:user.lastname,
gender:user.gender,
tel:user.tel,
role:user.role,
online_status:user.online_status,
email:res.data.session.user.email
};
this.$store.state.role=user.role;
this.$store.state.user=set_user;
//end session details



}else{
console.log(response.error);
this.error=response.error.name;
}


}).catch((errors)=>{
console.log(errors);
});

this.row=res.data.session.user.user_metadata;
this.isLoading2=false;




}else{
this.error='An error occured.';
}
}).catch((error)=>{
console.log(error);
});
},

//submit

submit(){
const form=this.form;
if(form.subscription_id==''){
this.error='Select your subscription plan or fill in the business code.';
}else{
this.$router.push('/');
}
},


},

mounted(){
this.user_data();
}




}
</script>


<style scoped>
ion-card{
--box-shadow:none;
}

p{

color:white;
}

div{
text-align: center;
}

ion-button{
--backgroundColor:#1ABC9C;;
}

ion-item{
border:solid 1px #117A65;
border-radius:10px;
margin-bottom: 10px;;
--color:black;
text-transform: capitalize;
}



ion-page{
--background: #1ABC9C;
}

ion-radio {
--color:black;
}

ion-content{
--background:#1ABC9C;
padding:0;
}
</style>