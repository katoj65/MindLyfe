import supabase from '../database/connection.js';
export default class RoleController{
async roles(){
return await supabase.from('role').select("name").neq('name', 'admin');
}


//show role by name
async showRoleByName(role){
return await supabase.from('role').select('*').eq('name',role);
}

async showRoleById(id){
return await supabase.from('role').select('*').eq('id',id);
}












}