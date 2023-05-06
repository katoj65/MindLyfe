import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
state () {
return {
count: 0,
app_state:false,
user1:{fname:'joshua',lname:'joshua',email:'katoj65@gmail.com',password:'123456789',role:'user'},
user2:{fname:'osman',lname:'buyondo',email:'osman@gmail.com',password:'123456789',role:'therapist'},
user3:{fname:'afrodjango',lname:'initiatives',email:'afrodjango@gmail.com',password:'123456789',role:'organisation'},

current_user:{
role:null,
email:null,
fname:null,
lname:null,
}







}
},
mutations: {
increment (state) {
state.count++
}
}
});

