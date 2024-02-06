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
<span style="color:white;">Your Business Information</span>
</ion-card-title>
</ion-card-header>
<ion-card-content>



<div class="ion-padding" v-if="error!=null" style="color:red;">
{{ error }}
</div>



<div v-if="message!=null" class="ion-padding" style="color:white;">
{{ message }}
</div>
<div v-if="res.length>0">

<ion-item>
<ion-label>
Gender
</ion-label>
<ion-note slot="end">
{{ profile.gender }}
</ion-note>
</ion-item>


<ion-item>
    <ion-label>
    Date of Birth
    </ion-label>
    <ion-note slot="end">
    {{ profile.dob }}
    </ion-note>
    </ion-item>




<ion-item>
    <ion-label>
    Location
    </ion-label>
    <ion-note slot="end">
    {{ profile.location }}
    </ion-note>
    </ion-item>


<ion-item>
<ion-label>
Telephone
</ion-label>
<ion-note slot="end">
{{ profile.tel }}
</ion-note>
</ion-item>




<ion-item>
<ion-label>
Profession
</ion-label>
<ion-note slot="end">

</ion-note>
</ion-item>




<ion-item>
<ion-label>
Education
<p>
{{ profile.education }}
</p>
</ion-label>
</ion-item>


<ion-item>
<ion-label>
Experience
<p>
{{ profile.experience }}
</p>
</ion-label>
</ion-item>



</div>












<div>
<submit-button :isLoading="isLoading" :title="'Continue'" v-if="res.length>0"/>
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
import {
IonAvatar,
IonCard,
IonCardContent,
IonCardHeader,
IonCardTitle,
IonContent,
IonItem,
IonPage,
IonLabel,
IonNote
} from '@ionic/vue';
import TherapistController from '@/database/TherapistController';

export default {
components:{
IonPage,
IonCard,
IonCardHeader,
IonCardContent,
IonCardTitle,
IonItem,
IonAvatar,
SkeletonLoader,
SubmitButton,
IonContent,
IonLabel,
IonNote
},


data(){
return{
res:[],
message:null,
error:null,
isLoading:false,
row:{},
roles:[],
profile:{},
isLoading2:false,
}},

methods:{
submit(){
this.$router.push('/');
},



//
user_data(){
this.isLoading2=true;
const db=new LoginController;
db.user_session().then((res)=>{
if(res.data.error==null){
this.isLoading2=false;
this.row=res.data.session.user.user_metadata;
this.isLoading2=false;
//
const therapist_model=new TherapistController;
const email=this.$store.state.user.email;
therapist_model.therapist_profile(email).then((response)=>{

//
if(response!=null){
this.res=response;
if(response.length==0){
this.message='Your Therapist profile is under verification!';
}else{
response.forEach(el=>{
this.profile=el;
});

}
}
//

}).catch((error)=>{
console.log(error);
});


}else{
this.error='An error occured.';
}
}).catch((error)=>{
console.log(error);
});
},










},

mounted(){
this.user_data();
},






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