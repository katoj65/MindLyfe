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
import SkeletonLoader from '@/components/SkeletonLoader.vue';

export default {
components:{
Applayout,
SkeletonLoader,

},

data(){return{
title:'Template',
isLoading:false,
row:[],
error:null,
}},




methods:{



},


mounted(){

}







  }
  </script>