import supabase from '../database/connection.js';
export default class AppointmentController{

//appointment
async appointment(){
return await false;
}


async show_appointment(id){

}



async create_appointment(form){
return await supabase.from('appointment')
.insert(form);
}

























}