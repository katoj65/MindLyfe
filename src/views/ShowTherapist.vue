<template>
<applayout :title="title" :back="back">
<div v-if="isLoading==true" class="ion-padding">
<skeleton-loader/>
</div>
<div v-else>


<ion-card>
<ion-card-header>
<ion-card-title>

idjnddjdjndndn

</ion-card-title>
</ion-card-header>
<ion-card-content>

mkdmkdmdkdmd




</ion-card-content>
</ion-card>

</div>
</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/vue';
export default {
components:{
Applayout,
SkeletonLoader,
IonCard, IonCardHeader,
IonCardContent, IonCardTitle



},

data(){return{
back:'/',
title:'Therapist',
isLoading:false,
row:[],
error:null,




}},



//
methods:{



},


//
mounted(){


}

}

</script>