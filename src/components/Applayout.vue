<template>
<ion-page>
<ion-header class="ion-no-border" color="black">
<!-- <ion-toolbar>
<ion-title>{{ title!=null?title:'MindLyfe' }} </ion-title>
</ion-toolbar>
-->

<ion-toolbar>


<ion-buttons slot="start" v-if="back!=null">
<ion-back-button @click="$router.push(back)"></ion-back-button>
</ion-buttons>

<ion-buttons slot="secondary">
<ion-button>
<ion-icon slot="icon-only" :icon="search"></ion-icon>
</ion-button>
<ion-button>
<ion-icon slot="icon-only" :icon="chatbox"></ion-icon>
</ion-button>
</ion-buttons>
<ion-buttons slot="primary">
<ion-button @click="$router.push('/settings')">
<ion-icon slot="icon-only" :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
</ion-button>
</ion-buttons>
<ion-title style="font-weight:bolder;">{{ title!=null?title:'MindLyfe' }} </ion-title>
</ion-toolbar>



</ion-header>
<ion-content :fullscreen="true">
<ion-header collapse="condense">
<ion-toolbar>
<ion-title size="large">Tab 1</ion-title>
</ion-toolbar>
</ion-header>



<div>

<slot></slot>


</div>





</ion-content>
</ion-page>
</template>
<script>
import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonButton, IonButtons,IonIcon,
IonBackButton,
} from '@ionic/vue';
import { create, ellipsisHorizontal, ellipsisVertical, search, notifications,chatbox } from 'ionicons/icons';
export default {
components:{
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonButton, IonButtons,IonIcon,
IonBackButton,
},

props:{
title:{},
back:{}
},


setup(){return{
create,
ellipsisHorizontal,
ellipsisVertical,
search,
notifications,
chatbox

}}













}
</script>


<style scoped>
ion-toolbar{
--background:#1ABC9C;
--color: white;
}
</style>