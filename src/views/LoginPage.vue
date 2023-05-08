<template>
<ion-page style="background:#1ABC9C;">
<form @submit.prevent="submit">

<h1 style="font-size:30px;font-weight:bolder;">MindLyfe</h1>
<ion-card style="box-shadow:none;background:#1ABC9C;">
<ion-card-header>
<ion-card-title style="text-align:center;color:white;">
<span style="color:white;">Sign In</span>
</ion-card-title>
</ion-card-header>
<ion-card-content>
<p style="text-align:center;color:white;">Get access to our services</p>
<ion-item lines="none">
<ion-label >Email:</ion-label>
<ion-input type="email" placeholder="Enter your email address" v-model="form.email"></ion-input>
</ion-item>

<ion-item lines="none">
<ion-label>Password:</ion-label>
<ion-input type="password" placeholder="Enter your password" v-model="form.password"></ion-input>
</ion-item>

<p style="padding:10px; color:red;" v-if="message!=null">
{{ message }}
</p>


<div id="signin">
    <ion-button expand="block" type="submit" fill="clear">SignIn</ion-button>
</div>
<div id="signup">
    <ion-button expand="block" style="box-shadow:none;" fill="clear" @click="$router.push('/register')">SignUp</ion-button>
</div>

</ion-card-content>
</ion-card>
</form>
</ion-page>
</template>

<script>
import { IonPage, IonCard,IonCardHeader, IonCardContent,IonCardTitle, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
export default {
components:{
IonPage,
IonCard,
IonCardHeader,
IonCardContent,
IonCardTitle,
IonItem,
IonLabel,
IonInput,
IonButton
},


data(){return{
message:null,
form:{
email:'katoj65@gmail.com',
password:'123456789',

}



}},

methods:{
submit(){
this.$store.state.app_state=true
const user1=this.$store.state.user1;
const user2=this.$store.state.user2;
const user3=this.$store.state.user3;

if(user1.email==this.form.email){
this.$store.state.current_user={
role:user1.role,
fname:user1.fname,
lname:user1.lname,
email:user1.email
}
}else if(user2.email==this.form.email){
this.$store.state.current_user={
role:user2.role,
fname:user2.fname,
lname:user2.lname,
email:user2.email
}
}else if(user3.email==this.form.email){
this.$store.state.current_user={
role:user3.role,
fname:user3.fname,
lname:user3.lname,
email:user3.email
}
}else{
this.message='Invalid email address or password';
this.$store.state.current_user=false;
}
this.$router.push('/');

}



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
}

#signup ion-button{
 --background:white;
 --color:gray;
 --border:none;
 box-shadow:none;
height:50px;
}
#signin ion-button{
    --background:black;

    --color:white;
    --border:none;
    box-shadow:none;
    height:50px;

}

ion-page{
--background: #1ABC9C;
}

</style>