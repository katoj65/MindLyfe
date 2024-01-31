<template>
<div style="padding:10px;">


<ion-item v-for="n in 30" :key="n" lines="none" detail="true" >
<ion-avatar slot="start">
<img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h2>
The second list mimics the iOS Mail app to show an
inbox. This list makes use of custom metadata including an
</h2>
<p>Therapist advise: 12/12/24</p>

</ion-label>
</ion-item>



</div>
</template>

<script>
import { IonLabel,IonItem,IonAvatar,IonIcon } from '@ionic/vue';
export default {
components:{
    IonLabel,IonItem,IonAvatar,IonIcon
}
}
</script>
<style scoped>
ion-item{
margin-bottom:5px;
border-radius:5px;
}
</style>