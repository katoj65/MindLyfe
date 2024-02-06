<template>
<applayout>
<div v-if="role=='user'">
<news-component></news-component>
<content-component style="margin-top:0px;"></content-component>
</div>
<div v-else-if="role=='therapist'">
<dashboad-component/>
</div>
</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue';
import NewsComponent from '@/components/NewsComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';
import DashboadComponent from '@/therapist/DashboadComponent.vue';
export default {
components:{
Applayout,
NewsComponent,
ContentComponent,
DashboadComponent,
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
},

methods:{
test(){
console.log(this.$route.meta);
}
},

mounted(){
this.test();
}




}
</script>