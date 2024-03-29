import supabase from '../database/connection.js';
export default class LoginController{
//login


async login(form){
return await supabase.auth.signInWithPassword({
email:form.email,
password:form.password,
});
}


//register
async register(form){
return await supabase.auth.signUp({
email: form.email,
password: form.password,
options: {
data: {
fname:form.fname,
lname:form.lname,
gender:form.gender,
tel:form.tel,
role:'',
subscription:'',
online_status:true,
}
}
}
);
};




//get logged in user
async this_user(){
 return await supabase.auth.getUser();
}



//user session
async user_session(){
return await supabase.auth.getSession();
}


//
async update_user_metadata(form){
return await supabase.auth.updateUser({
  data: { address:form.address, tel:form.tel, gender:form.gender }
});
}


//set role
async set_role(role){
return await supabase.auth.updateUser({
data:{role:role}
});
}




//signout
async logout(){
return await supabase.auth.signOut();
}












}








