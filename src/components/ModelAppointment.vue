<template>

<div>
<ion-button @click="setModel(true)" fill="clear" class="open" expand="block">Make Appointment</ion-button>
<ion-modal :is-open="modelOpen" :initial-breakpoint="0.70" :breakpoints="[0, 0.70]"  @willDismiss="setModel(false)">
<ion-content class="ion-padding">
<div>
<h4 style="text-align:center;">
Make Appointment
</h4>
</div>


<div v-if="error!=null" class="ion-padding" style="color:red; text-align:center;">
{{ error }}
</div>

<form @submit.prevent="submit">
<div style="margin-top:30px;margin-bottom:20px;margin-bottom:10px;">
<ion-item lines="none">
<label>Date:</label>
<ion-input placeholder="Enter date" type="date" label="" v-model="form.date"></ion-input>
</ion-item>
<ion-item lines="none">
<label>Time:</label>
<ion-input  placeholder="Enter time" type="time" label="" v-model="form.time"></ion-input>
</ion-item>
</div>
<div >
<submit-button :title="'Submit Request'" :isLoading="isLoading" expand="block"/>
</div>
</form>
</ion-content>
</ion-modal>









<!-- <ion-alert
:is-open="isOpen" header="Successful"  message="You have successfully requested for an appointment."
:buttons="alertButtons"
@willDismiss="setOpen(false)"
></ion-alert> -->




</div>
</template>

<script>
import {
IonButton,
IonModal,
IonHeader,
IonContent,
IonToolbar,
IonTitle,
IonItem,
IonInput,
IonAlert


} from '@ionic/vue';

import SubmitButton from './SubmitButton.vue';
import AppointmentController from '../database/AppointmentController';

export default {
components:{
IonButton,
IonModal,
IonHeader,
IonContent,
IonToolbar,
IonTitle,
IonItem,
IonInput,
SubmitButton,
IonAlert,

},

props:{
user:{},
},


data(){return{
modelOpen:false,
appointmentID:null,
isOpen:false,
form:{
time:'',
date:'',
},
isLoading:false,
status:null,
error:null,
alertButtons:[{
text: 'OK',
role: 'confirm',
handler: () => {
this.$router.push('/appointment/'+this.appointmentID);
this.isOpen=false;
},
}]



}},
methods:{

setOpen(state){
this.isOpen = state;
},

//
setModel(m){
this.modelOpen=m;
if(m==false){
// setOpen(false);
}
},

submit(){
const form=this.form;
if(form.time=='' || form.date==''){
this.error='Fill in all fields';
}else{
const id=this.$route.params.id;
this.isLoading=true;

const input={
time:form.time,
date:form.date,
therapist_id:id,
user_email:this.$store.state.user.tel ,
status:'pending'
};

const db=new AppointmentController;
db.create_appointment(input).then((res)=>{
this.isLoading=false;

if(res.status==201){
this.setOpen(true);
res.data.forEach(el=>{
this.appointmentID=el.id;
this.setModel(false);
this.$router.push('/appointment/'+this.appointmentID);
});

}else{
this.error=res.error.message;
}
}).catch(error=>{
console.log(error);
});
}

},









setup(){
return{
}},

mounted(){
this.model=false;
}



}





}

</script>
<style scoped>
ion-button.open{
    --background: black;
    text-transform: capitalize;
    --border-radius: 5px;
    color:white;
    height:50px;
    }
ion-input{
color:black;

--padding-bottom: 10px;
--padding-end: 10px;
--padding-start: 10px;
--padding-top: 10px;
border-radius:5px;
}
ion-item{
margin-bottom:10px;
border:solid 2px silver;
border-radius:5px;

}
ion-modal{
border-radius: 10px 10px 10px 10px;
}
</style>
