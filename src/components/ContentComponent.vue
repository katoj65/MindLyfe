<template>
<div style="padding:10px;">
<div v-if="isLoading==true">
<skeleton-loader class="ion-padding"/>
</div>
<div v-else>
<div v-if="row.length>0">
<ion-item v-for="(l,key) in row " :key="key" lines="full" @click="$router.push('/post/'+l.id)">
<ion-avatar slot="start">
<img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h2>
{{ l.title }}
</h2>
<p>
{{ l.description }}
</p>
<p>
Date: {{ l.created_at.substring(0,7).split('-').reverse().join('/') }}
</p>
</ion-label>
</ion-item>
</div>
<div v-else class="ion-padding">
No posts
</div>
</div>
</div>
</template>
<script>
import { IonLabel,IonItem,IonAvatar,IonIcon } from '@ionic/vue';
import PostController from '../database/PostController.js';
import SkeletonLoader from './SkeletonLoader.vue';
export default {
components:{
IonLabel,IonItem,IonAvatar,IonIcon,SkeletonLoader
},

data(){
return {
isLoading:false,
row:[],
error:null,
}
},




methods:{
posts(){
const db=new PostController;
this.isLoading=true;
db.posts().then((res)=>{
this.isLoading=false;
if(res.status==200){
this.row=res.data;
}else{
this.error=res.error;
}
}).catch((error)=>{
    console.log(error);
});
}
},


mounted(){
this.posts();
}



}














</script>
<style scoped>
ion-item{
margin-bottom:5px;
border-radius:5px;
}

</style>