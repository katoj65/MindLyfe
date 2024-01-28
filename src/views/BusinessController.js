import supabase from '../database/connection.js';
export default class BusinessController{
async create_business(form){
return await supabase
.from('business')
.insert(form)
.select();
}













}







