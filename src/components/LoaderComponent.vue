<template>
<div>
<ion-spinner name="crescent" v-if="isLoading==true"></ion-spinner>
</div>
</template>
<script>
import { IonSpinner } from '@ionic/vue';
export default {
components:{
IonSpinner,
},
props:{
isLoading:{}
}
}
</script>