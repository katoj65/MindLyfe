<template>
    <applayout :title="title">


      <ion-list>
        <ion-item v-for="n in list" :key="n.id" button lines="full" detail="true" @click="$router.push(n.url)">
          <ion-label>{{ n.name }} </ion-label>
        </ion-item>
      </ion-list>



    </applayout>
    </template>
    <script>
    import Applayout from '@/components/Applayout.vue';
    import { IonItem, IonLabel, IonList } from '@ionic/vue';
    export default {
    components:{
    Applayout,
    IonItem, IonLabel, IonList
    },

  data(){return{
  title:'Settings',
  back:'/',
list:[
{name:'Profile',url:'/',id:1},
{name:'All therapists',url:'/',id:2},
{name:'Blogs',url:'/',id:3},
{name:'Saved Items',url:'/',id:4},
{name:'Account Settings',url:'/',id:5},
{name:'Logout',url:'/login',id:6},


      ]



    }},









    }
    </script>