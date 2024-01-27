<template>
<applayout>
<news-component></news-component>
<content-component style="margin-top:10px;"></content-component>



</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue';
import NewsComponent from '@/components/NewsComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
export default {
components:{
Applayout,
NewsComponent,
ContentComponent
},

data(){return{


}},



computed:{
user(){
return this.$store.state.user;
},
role(){
 return this.$store.state.user.role
}



}




}
</script>