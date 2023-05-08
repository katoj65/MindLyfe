<template>
<ion-card style="margin:0;box-shadow:none;" color="light">
<ion-card-header>
<ion-card-title>Advise and consultation</ion-card-title>
<ion-card-subtitle>Card Subtitle</ion-card-subtitle>
</ion-card-header>

<ion-card-content>
Here's a small text description for the card content. Nothing more, nothing less.
</ion-card-content>
</ion-card>
</template>
<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },

data(){return{
title:'',
subtitle:'',







}}





});





</script>
<style scoped>
ion-card{
background:  #E8F6F3 ;
}
</style>