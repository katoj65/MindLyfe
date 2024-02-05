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
        .eq('id',id)
        ;
    }









}