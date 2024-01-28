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
<span style="color:white;">Business Information</span>
</ion-card-title>
</ion-card-header>
<ion-card-content>


<div class="ion-padding" v-if="error!=null" style="color:red;">
{{ error }}
</div>

<ion-item>
<ion-input label="Business Name:" placeholder="Enter name" v-model="form.name"></ion-input>
</ion-item>

<ion-item>
<ion-input label="Address:" placeholder="Enter address" v-model="form.address"></ion-input>
</ion-item>


<ion-item style="margin-bottom:10px;">
<ion-input label="Contact Person:" disabled :value="row.fname+' '+row.lname"></ion-input>
</ion-item>





<div style="border-top:solid 1px white;padding:10px;margin-top:10px;" v-if="isLoading3==false">
<h3 style="color:white;font-size:18px;font-weight:bold;padding-bottom:10px;">Select Subscription Plan</h3>
<ion-radio-group>
<ion-item v-for="(p,key) in payment_plan" :key="key">
<ion-radio :value="p.id" :label="p.title"   justify="space-between">
{{ p.title }} - Shs. {{ p.amount }}
</ion-radio>
</ion-item>
</ion-radio-group>
</div>
<skeleton-loader v-else class="ion-padding"/>





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
} from '@ionic/vue';

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
IonAvatar,
SkeletonLoader,
SubmitButton,
IonContent,
IonRadio,
IonRadioGroup,
},


data(){
return{

form:{
name:'',
address:'',
tel:'',
contact_person:''
},
payment_plan:[],
error:null,
isLoading:false,
row:{},
isLoading2:false,
isLoading3:false,
}},

methods:{
//
user_data(){
this.isLoading2=true;
this.isLoading3=true;
const db=new LoginController;
db.user_session().then((res)=>{
if(res.data.error==null){
const subscribe_model=new SubscriptionController;
subscribe_model.show_business_subscription().then((response)=>{
if(response.status==200){
this.payment_plan=response.data;
this.isLoading3=false;
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
if(form.name=='' || form.address=='' || form.contact_person==''){
this.error='Fill in all fields';
}else{




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
</style>@/