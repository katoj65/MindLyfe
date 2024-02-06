<template>
<applayout :title="title">
<div v-if="isLoading==false">
<ion-card class="border">
<ion-card-header>
<ion-card-title>
{{ user_details.fname }} {{ user_details.lname }}
</ion-card-title>
</ion-card-header>
<ion-card-content>
<ion-item lines="none">
<ion-label>
Balance
</ion-label>
<ion-note slot="end">
Shs {{ row.amount }}
</ion-note>
</ion-item>

<div>
<ion-chip>View Transactions</ion-chip>
</div>

</ion-card-content>
</ion-card>


<div>
<ion-item lines="none" class="button" button>
  <ion-label>
  Deposit Funds
  </ion-label>
  </ion-item>

  <ion-item lines="none" class="button" button>
    <ion-label>
  Withdraw Funds
    </ion-label>
    </ion-item>
</div>


</div>
<div v-else class="ion-padding">
<skeleton-loader/>
</div>




</applayout>
</template>
<script>
import Applayout from '@/components/Applayout.vue';
import { IonItem, IonLabel,IonNote, IonCard, IonCardHeader,IonCardTitle,IonCardContent,IonChip } from '@ionic/vue';
import WalletController from '@/database/WalletController';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
export default {
components:{
Applayout,
IonItem, IonLabel,IonNote, IonCard, IonCardHeader,IonCardTitle,IonCardContent,
SkeletonLoader,
IonChip
},

data(){return{
title:'Wallet',
row:{},
user_details:{},
isLoading:false,
error:null,


}},

methods:{
wallet(){
this.isLoading=true;
const db=new WalletController;
const email=this.$store.state.user.email;
db.show_wallet(email).then((res)=>{
this.isLoading=false;
if(res.status==200){
res.data.forEach(el=>{
this.row=el;
this.user_details=this.$store.state.user;
});
}else{
this.res.error;
}
}).catch((error)=>{
console.log(error);
});

},


},

mounted(){
this.wallet();
}







}
</script>
<style scoped>
ion-card{
box-shadow: none;
}
ion-item.button{
  border:solid 1px #EAEDED;
  margin:10px;
}
</style>