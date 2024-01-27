<template>
<ion-card style="margin:0;box-shadow:none;" color="light">
<ion-card-header>
<ion-card-title>
Welcome <span style="text-transform:capitalize;margin-left:10px;">{{ user.fname }}!</span>
</ion-card-title>
<ion-card-subtitle>Consult your therapist</ion-card-subtitle>
</ion-card-header>

<ion-card-content>
<ion-chip>
<ion-icon :icon="calendar" ></ion-icon>
<ion-label>3 Appointments</ion-label>
</ion-chip>


<ion-chip>
<ion-icon :icon="people"></ion-icon>
<ion-label>20 Therapists</ion-label>
</ion-chip>



</ion-card-content>
</ion-card>
</template>
<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonChip, IonLabel, IonIcon

} from '@ionic/vue';
import { defineComponent } from 'vue';
import { calendar, people } from 'ionicons/icons';

export default defineComponent({
components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonChip, IonLabel, IonIcon

},

data(){return{
title:'',
subtitle:'',

}},


computed:{
user(){
return this.$store.state.user;
},
role(){
return this.$store.state.user.role
}



},



setup() {
      return {
        calendar,people
      };
    },





});





</script>
<style scoped>
ion-card{
background:  #E8F6F3 ;

}
ion-icon{
color:white;
}

ion-card{
background: #1ABC9C;
border-radius:0 0 20px 20px;
color:white;

}
ion-chip{
color:white;
}
</style>