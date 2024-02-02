import { createStore } from 'vuex';
// Create a new store instance.
export const store = createStore({
state:{
count: 0,
//
app_state:false,
role:null,
user:{},
//
current_user:{
role:null,
email:null,
fname:null,
lname:null,
}
},
mutations: {
increment (state) {
state.count++
},


//signout
signout(state){
state.role=null;
state.app_state=null;
state.user={};
}




}
});



