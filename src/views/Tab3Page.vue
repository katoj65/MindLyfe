<template>
<applayout :title="title" :back="back">


<div v-if="isLoading==true">
<skeleton-loader class="ion-padding"/>
</div>
<div v-else>






<ion-item v-for="(r,key) in row" :key="n" @click="$router.push('/therapist/1')"  button>
<ion-avatar slot="start">
<img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h1 style="text-transform:capitalize;">{{ r.names }} </h1>
<p>
  {{ r.therapy.name }}
  </p>
<p>
From {{ r.location }}
</p>

</ion-label>
</ion-item>




</div>







</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue'
import TherapistController from '../database/TherapistController.js';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import { IonItem, IonAvatar, IonLabel,IonIcon } from '@ionic/vue';
export default {
components:{
Applayout,
SkeletonLoader,
IonItem, IonAvatar, IonLabel,
IonIcon

},

data(){return{
back:'/',
title:'Therapists',
row:[],
isLoading:false,


}},







methods:{
//
therapist(){
this.isLoading=true;
const db=new TherapistController;
db.therapist().then((res)=>{
this.isLoading=false;
if(res.status==200){
this.row=res.data;
}else{
this.error=res.error;
}
}).catch((error)=>{
console.log(error);
})


}





},

mounted(){
this.therapist();
}







}
</script>