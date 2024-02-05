import supabase from '../database/connection.js';
export default class TherapistController{
async therapist(){
return await supabase
    .from('therapist_profile')
    .select('names,email,location, therapy(name)');
}











}