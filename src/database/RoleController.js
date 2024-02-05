import supabase from '../database/connection.js';
export default class RoleController{

//display all role
async roles(){
return await supabase.from('role').select("name").neq('name', 'admin');
}

//show role by name
async showRoleByName(role){
return await supabase.from('role').select('*').eq('name',role);
}

//show role
async showRoleById(id){
return await supabase.from('role').select('*').eq('id',id);
}












}