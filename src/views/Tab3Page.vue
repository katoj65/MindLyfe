<template>
<applayout :title="title" :back="back">


<div v-if="isLoading==true">
<skeleton-loader class="ion-padding"/>
</div>
<div v-else>






<ion-item v-for="(r,key) in row" :key="key"  button detail="false" lines="none">
<ion-avatar slot="start" @click="$router.push('/therapist/1')" >
<img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h3 style="text-transform:capitalize;font-weight:bold;" @click="$router.push('/therapist/'+r.id)" >{{ r.names }} </h3>
<p @click="$router.push('/therapist/'+r.id)" >
  {{ r.therapy.name }}</p>
<p @click="$router.push('/therapist/'+r.id)" >
From {{ r.location }}
</p>
</ion-label>
<ion-icon :icon="enter" slot="end" @click="isOpen==true"></ion-icon>
</ion-item>
</div>

















</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue'
import TherapistController from '../database/TherapistController.js';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import { IonItem, IonAvatar, IonLabel,IonIcon,



} from '@ionic/vue';
import { enter } from 'ionicons/icons';
export default {
components:{
Applayout,
SkeletonLoader,
IonItem, IonAvatar,
IonLabel, IonIcon,


},

data(){return{
back:'/',
title:'Therapists',
row:[],
isLoading:false,
isOpen:false,



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
},

setup(){
return{
enter
}
}







}
</script>