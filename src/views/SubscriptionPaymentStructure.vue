<template>
<ion-page style="background:#1ABC9C;">
<ion-content>
<form @submit.prevent="submit" v-if="isLoading2==false">
<div style="padding-left:45%;">
<ion-avatar>
<img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
</div>
<h1 style="font-size:30px;font-weight:bolder; text-transform:capitalize;">
{{ row.fname }} {{ row.lname }}
</h1>
<p>
{{ row.tel }}
</p>
<ion-card style="box-shadow:none;background:#1ABC9C;">
<ion-card-header>
<ion-card-title style="text-align:center;color:white;">
<span style="color:white;">Select your subscription</span>
</ion-card-title>
</ion-card-header>
<ion-card-content>

<div class="ion-padding" v-if="error!=null" style="color:red;">
{{ error }}
</div>
<ion-radio-group>
<ion-item v-for="(r,key) in roles" :key="key" @click="select_role(r.name)">
<span style="padding-right:10px;">{{ r.name }}</span>
<ion-radio :value="r.name" aria-label="">
</ion-radio>
</ion-item>
</ion-radio-group>
<div>
<submit-button :isLoading="isLoading" :title="'Finish'"/>
</div>
</ion-card-content>
</ion-card>
</form>
<div v-else class="ion-padding">
<skeleton-loader/>
</div>
</ion-content>
</ion-page>
</template>

<script>
import { IonPage, IonCard,IonCardHeader,
IonCardContent,IonCardTitle, IonItem, IonInput,
IonButton, IonAvatar,
IonRadio, IonRadioGroup,IonContent
} from '@ionic/vue';
import LoginController from '@/database/LoginController.js';
import RoleController from '@/database/RoleController.js';
import SkeletonLoader from '@/components/SkeletonLoader.vue';
import SubmitButton from '@/components/SubmitButton.vue';

export default {
components:{
IonPage,
IonCard,
IonCardHeader,
IonCardContent,
IonCardTitle,
IonItem,
IonInput,
IonButton,
IonAvatar,
SkeletonLoader,
IonRadio,
IonRadioGroup,
SubmitButton,
IonContent
},


data(){
return{

form:{
role:'',
},
error:null,
isLoading:false,
row:{},
roles:[],
isLoading2:false,
}},

methods:{
//
user_data(){
this.isLoading2=true;
const db=new LoginController;
db.user_session().then((res)=>{
if(res.data.error==null){
this.row=res.data.session.user.user_metadata;
const role_data=new RoleController;
role_data.roles().then((response)=>{
if(response.status==200){
this.isLoading2=false;
this.roles=response.data;
}else{
this.error=response.error;
}
}).catch((errors)=>{
console.log(errors);
});

}else{
this.error='An error occured.';
}
}).catch((error)=>{
console.log(error);
});
},

//submit

submit(){
if(this.form.role!=''){
this.isLoading=true;
const db=new LoginController;
db.set_role(this.form.role).then((res)=>{
if(res.error==null){
this.isLoading=false;
this.$store.state.app_state=true;
this.$router.push('/');
}else{
this.error='Error';
}

}).catch((error)=>{console.log(error)});
}else{
this.error='Select a user profile please.';
}
},

select_role(item){
this.form.role=item;
}


},

mounted(){
this.user_data();
}




}
</script>


<style scoped>
ion-card{
--box-shadow:none;
}

p{
margin-bottom:20px;
margin-top:20px;
color:white;
}

div{
text-align: center;
padding-top:20px;
}

ion-button{
--backgroundColor:#1ABC9C;;
}

ion-item{
border:solid 1px #117A65;
border-radius:10px;
margin-bottom: 10px;;
--color:black;
text-transform: capitalize;
}



ion-page{
--background: #1ABC9C;
}

ion-radio {
--color:black;
}

ion-content{
--background:#1ABC9C;
padding:0;
}
</style>@/