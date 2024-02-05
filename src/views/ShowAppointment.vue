<template>
<applayout :title="title" :back="back">
<div>
<div v-if="error!=null" class="ion-padding">
{{ error }}
</div>
<div v-if="isLoading==true" class="ion-padding">
<skeleton-loader/>
</div>
<div v-else>

<ion-item lines="none">
<ion-label>
Date
</ion-label>
<ion-note slot="end">
{{ row.date }}
</ion-note>
</ion-item>

<ion-item lines="none">
<ion-label>
Time
</ion-label>
<ion-note slot="end">
{{ row.time}}
</ion-note>
</ion-item>


<ion-item lines="none">
<ion-label>
Appointment
</ion-label>
<ion-note slot="end">
{{  therapy.therapy}}
</ion-note>
</ion-item>



<ion-item lines="none">
<ion-label>
Names
</ion-label>
<ion-note slot="end">
{{ profile.names}}
</ion-note>
</ion-item>

<ion-item lines="none">
<ion-label>
Tel
</ion-label>
<ion-note slot="end">
{{ profile.tel}}
</ion-note>
</ion-item>

<ion-item lines="none">
<ion-label>
Email
</ion-label>
<ion-note slot="end">
{{ profile.email}}
</ion-note>
</ion-item>



<ion-item lines="none">
<ion-label>
Location
</ion-label>
<ion-note slot="end">
{{ profile.location}}
</ion-note>
</ion-item>

</div>

</div>
</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import AppointmentController from '@/database/AppointmentController';
import { IonItem, IonLabel,IonNote } from '@ionic/vue';

export default {
components:{
Applayout,
SkeletonLoader,
IonItem, IonLabel,
IonNote

},

data(){return{
title:'Appointment',
back:'/',
isLoading:false,
row:{},
therapy:{},
profile:{},

error:null,
}},




methods:{
appointment(){
this.isLoading=true;
const db=new AppointmentController;
const id=this.$route.params.id;
db.show_appointment(id).then((res)=>{
if(res.status==200){

this.isLoading=false;
res.data.forEach(el=>{
this.row={date:el.date,time:el.time};
this.profile={names:el.therapist_profile.names,
tel:el.therapist_profile.tel,
email:el.therapist_profile.email,
location:el.therapist_profile.location,
education:el.therapist_profile.education,
experience:el.therapist_profile.experience,
}
this.therapy={therapy:el.therapist_profile.therapy.name}

});

}else{
this.error=res.error;
}
}).catch((error)=>{
console.log(error);
})
}


},


mounted(){
this.appointment();
}







}
</script>
<style scoped>
ion-note{
font-size:16px;
}
</style>