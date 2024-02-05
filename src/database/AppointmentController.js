import supabase from '../database/connection.js';
export default class AppointmentController{

//appointment
async appointment(){
return await false;
}


async show_appointment(id){
return await supabase.from('appointment')
.select('date,time,therapist_profile(*,therapy(name))')
.eq('id',id);
}



async create_appointment(form){
return await supabase.from('appointment')
.insert(form)
.select('*');
}


async user_appointments(email){
return await supabase.from('appointment')
.select('*,therapist_profile(location)')
.eq('user_email',email);
}
























}