import supabase from '../database/connection.js';
export default class PostController{

async posts(){
return await supabase
.from('post')
.select('*');
}


async show_post(id){
return await supabase
.from('post')
.select("*")
.eq('id',id);
}

























}