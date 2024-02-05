<template>
<applayout :title="title" :back="back">

<div v-if="isLoading==true" class="ion-padding">
<skeleton-loader/>
</div>
<div v-else>

<ion-card v-if="row!=null" style="margin:0;">
<ion-card-content>
<ion-item lines="none">
<ion-avatar slot="start">
<img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h2 style="text-transform:capitalize;font-weight:bold;">
{{ row.names }}
</h2>
<p style="text-transform:capitalize;">
{{ row.gender }} . Born on {{ row.dob }}
</p>
</ion-label>
</ion-item>


<ion-item lines="none">
<ion-label>
Location
</ion-label>
<ion-note slot="end">
{{ row.location }}
</ion-note>
</ion-item>



<ion-item lines="none">
<ion-label>
Email
</ion-label>
<ion-note slot="end">
{{ row.email }}
</ion-note>
</ion-item>


<ion-item lines="none">
<ion-label>
Telephone
</ion-label>
<ion-note slot="end">
{{ row.tel }}
</ion-note>
</ion-item>


<ion-item lines="none" v-if="row.therapy!=null">
<ion-label>
Profession
</ion-label>
<ion-note slot="end">
{{ row.therapy.name}}
</ion-note>
</ion-item>
<ion-item lines="none">
<ion-label>
<h2>Education</h2>
<p>{{ row.education }}</p>
</ion-label>
</ion-item>
<ion-item lines="none">
<ion-label>
<h2>Experience</h2>
<p>{{ row.experience }}</p>
</ion-label>
</ion-item>
<div style="margin-top:30px;">
<model-appointment :user="row"/>
</div>
</ion-card-content>
</ion-card>
</div>
</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonItem,IonLabel,IonNote, IonButton,
IonAvatar } from '@ionic/vue';
import TherapistController from '@/database/TherapistController';
import ModelAppointment from '@/components/ModelAppointment.vue';

export default {
components:{
Applayout,
SkeletonLoader,
IonCard, IonCardHeader,
IonCardContent, IonCardTitle,
IonItem,
IonLabel,
IonNote,
IonButton,
ModelAppointment,
IonAvatar

},

data(){return{
back:'/',
title:'Therapist',
isLoading:false,
row:{},
error:null,




}},



//
methods:{
therapist(){
this.isLoading=true;
const db=new TherapistController;
db.show_therapist(1).then((res)=>{
this.isLoading=false;
if(res.status==200){
res.data.forEach(element=>{
this.row=element;
});


}else{
this.error=res.error;
}
}).catch((error)=>{
console.log(error);
})


}


},


//
mounted(){
this.therapist();

}

}

</script>
<style scoped>
ion-card{
box-shadow:none;
}

ion-button{
--background: black;
text-transform: capitalize;
}
ion-note{
font-size:16px;
}
p{
font-size:16px;
}
</style>