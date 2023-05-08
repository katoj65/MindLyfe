<template>
<ion-card style="margin:0;">
<ion-card-content>
<ion-list>
<ion-item v-for="n in 30" :key="n" detail="true" button style="margin-bottom:10px;" lines="none">
<ion-thumbnail slot="start">
<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
</ion-thumbnail>
<ion-label style="font-weight:bold;">
<h4 style="font-weight:bold;">Advise title</h4>
<p>
Here's a small text description for the card content. Nothing more, nothing less.
</p>

</ion-label>
</ion-item>

</ion-list>
</ion-card-content>
</ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
components: { IonCard, IonCardContent, },

data(){return{







}},







});
</script>

<style scoped>
ion-item {
--padding-start: 10px;
--background: #E8F6F3 ;
border-radius: 10px;

}



</style>