<template>
<applayout :title="title">
<div v-if="isLoading==true" class="ion-padding">
<skeleton-loader/>
</div>
<div v-else>












<ion-item v-for="n in 30" :key="n" @click="$router.push('/therapist/1')">
<ion-avatar slot="start">
<img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h1>Name</h1>
<p>
Tel: 0752567534
</p>
</ion-label>
</ion-item>











</div>
</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import { IonItem, IonAvatar, IonLabel } from '@ionic/vue';

export default {
components:{
Applayout,
SkeletonLoader,
IonItem, IonAvatar, IonLabel

},

data(){return{
title:'Show therapist',
isLoading:false,
row:[],
error:null,




}},



//
methods:{
therapist(){

}


},


//
mounted(){
this.therapist();

}







  }
  </script>