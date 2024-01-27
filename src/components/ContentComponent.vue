<template>
<div style="padding:10px;">


<ion-item v-for="n in 30" :key="n" lines="none" detail="true" >
<ion-avatar slot="start">
<img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>

    The second list mimics the iOS Mail app to show an
     inbox. This list makes use of custom metadata including an

</ion-label>

</ion-item>



</div>
</template>

<script>
export default {
components:{

}
}
</script>
<style scoped>
ion-item{
margin-bottom:5px;
border-radius:5px;
}
</style>