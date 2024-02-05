<template>
<applayout :title="title">
<div>
<div v-if="isLoading==true" class="ion-padding">
<skeleton-loader></skeleton-loader>
</div>
<div v-else>
<ion-item v-for="(r,key) in row" :key="key" detail="true" lines="full" @click="$router.push('/appointment/'+r.id)">
<ion-label>
Date
<p>
At {{ r.therapist_profile.location }}
</p>
</ion-label>
<ion-note slot="end">
{{ r.date }}, {{ r.time }}
</ion-note>
</ion-item>

</div>
</div>
</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue';
import AppointmentController from '@/database/AppointmentController';
import { IonItem, IonLabel,IonNote } from '@ionic/vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
export default {
components:{
Applayout,
IonItem, IonLabel,IonNote,
SkeletonLoader

},

data(){return{
title:'Appointments',
row:[],
isLoading:false,

}},

methods:{
appointments(){
this.isLoading=true;
const email=this.$store.state.user.tel;
const db=new AppointmentController;
db.user_appointments(email).then((res)=>{
this.isLoading=false;
console.log(res);
if(res.status==200){
this.row=res.data;
}else{
this.error=error.name;
}

}).catch((error)=>{
console.log(error);
})







},

},

mounted(){
this.appointments();
}





}
</script>