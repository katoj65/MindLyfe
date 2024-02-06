<template>
<div>
<div v-if="isLoading==true" class="ion-padding">
<skeleton-loader/>
</div>
<div v-else>


<div v-if="row.length>0">

<!-- <ion-item v-for="">
<ion-label v-for="(a,key) in row" :key="key">

</ion-label>
<ion-note slot="end">

</ion-note>
</ion-item> -->



</div>
<div v-else class="ion-padding">
No appointments
</div>



</div>
</div>
</template>
<script>
import { IonItem, IonLabel, IonNote } from '@ionic/vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import AppointmentController from '@/database/AppointmentController.js';
import TherapistController from '@/database/TherapistController.js';
export default {
components:{
IonItem, IonLabel, IonNote,
SkeletonLoader,
},
data(){return{
row:[],
error:null,
isLoading:false,




}},
methods:{
appointments(){
const db=new AppointmentController;
const model1=new TherapistController;
const email=this.$store.state.user.email;
model1.therapist_profile(email);

}




},

mounted(){
this.appointments();
}





}
</script>