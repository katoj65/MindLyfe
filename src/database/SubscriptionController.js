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

async show_user_subscription(){
return await supabase.from('subscription_category').select('*').eq('role_id',2);
}


async find_subscription_code(code,email){
return await supabase
.from('subscription_code')
.select("code,role,id")
.eq('code',code)
.eq('user_email',email)
.eq('status','pending');
}


async subscription_code_status(email,status){
await supabase.from('subscription_code').update({status:status}).eq('user_email',email);
}

async user_subscribe(email,id){
await supabase.from('user_subscription').insert([{user_email:email,subscription_id:id}]);
}






}