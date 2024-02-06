import supabase from '../database/connection.js';
export default class TherapistController{
async therapist(){
return await supabase
.from('therapist_profile')
.select('id,names,email,location,gender, therapy(name)');
}




async show_therapist(id){
return await supabase
.from('therapist_profile')
.select('id,names,email,location,education,experience,gender,dob,tel, therapy(name)')
.eq('id',id);
}




async therapist_profile(email){
let { data: therapist_profile, error } = await supabase
.from('therapist_profile')
.select('id,names,email,location,education,experience,gender,dob,tel, therapy(name)')
.eq('email',email);
let response=null;
console.log(therapist_profile);
if(error==null){
response=therapist_profile;
}
return response;

}











}