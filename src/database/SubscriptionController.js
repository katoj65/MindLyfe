import supabase from '../database/connection.js';
export default class SubscriptionController{
async user_subscription_options(role){
const user_role=supabase.from('role').select("*").eq('name',role);
user_role.then((response)=>{
return response;
}).catch((error) => {console.log(error)});
}



async show_business_subscription(){
return await supabase.from('subscription_category').select('*').eq('role_id',4);
}






}