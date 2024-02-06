import supabase from '../database/connection.js';
export default class WalletController{
//new wallet
async create_wallet(email){
let {data:wallet,error}  = await supabase
.from('wallet')
.select('*')
.eq('user_email',email);
if(error==null){
if(wallet.length==0){
supabase.from('wallet').insert([{user_email:email,amount:0}]).then(res=>{
});
}
}else{
console.log(error);
}
}


//
async show_wallet(email){
return  await supabase
.from('wallet')
.select('*')
.eq('user_email',email);
}



async realtime_wallet(){
const data=[];
const channels = supabase.channel('custom-update-channel')
.on('postgres_changes',{ event: 'UPDATE', schema: 'public', table: 'wallet' },
(payload) => {data.push(payload.new.amount)}
).subscribe();
console.log(data);
return await data;
}











}