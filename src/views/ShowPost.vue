<template>
<applayout :title="title">
<div v-if="isLoading==true" class="ion-padding">
<skeleton-loader/>
</div>
<div v-else>




</div>
</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue';
import PostController from '../database/PostController.js';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
export default {
components:{
Applayout,
SkeletonLoader,

},

data(){return{
title:'Advise',
isLoading:false,
row:[],
error:null,
}},




methods:{
//post
post(){
this.isLoading=true;
const id=this.$route.params.id;
console.log(id);
const db=new PostController;
db.show_post(id).then((res)=>{
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
this.post();
}







  }
  </script>