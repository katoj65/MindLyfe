import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import SettingsPage from '../views/SettingsPage.vue';
import {store} from '@/store.js';


//session
import supabase from '../database/connection.js';
//user_session
let check=[];
const session=supabase.auth.getSession();
session.then(res=>{
if(res.data.session!=null){
check.push({id:res.data.session.user.id},
{role:res.data.session.user.role});
}else{
check=[];
}
});




//
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue'),

      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue'),

      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue'),

      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue'),

      }
    ],
    meta:{auth:check}
  },
{
path:'/register',
component:RegisterPage,
name:'register',
meta:{auth:check}
},
{
path:'/login',
component:LoginPage,
name:'login',
meta:{auth:check}
},
{
path:'/settings',
component:SettingsPage,
name:'settings',
meta:{auth:check}
},
{
path:'/create-profile',
component:()=>import('@/views/CreateProfile.vue'),
name:'create profile',
meta:{auth:check}
},
{
path:'/account/subscription',
component:()=>import('@/views/SubscriptionPaymentStructure.vue'),
name:'create subscription',
meta:{auth:check}
},
{
path:'/account/business',
component:()=>import('@/views/AccountBusiness.vue'),
name:'create business',
meta:{auth:check}
},

//posts
{
path:'/post/:id',
component:()=>import('@/views/ShowPost.vue'),
name:'show post',
meta:{auth:check}
},

{
path:'/therapists',
component:()=>import('@/views/TherapistsPage.vue'),
name:'therapists',
meta:{auth:check}
},

{
path:'/therapist/:id',
component:()=>import('@/views/ShowTherapist.vue'),
name:'show therapist',
meta:{auth:check}
},

{
  path:'/create-appointment/:id',
  component:()=>import('@/views/CreateAppointment.vue'),
  name:'create appointment',
  meta:{auth:check}
  },

  {
    path:'/appointment/:id',
    component:()=>import('@/views/ShowAppointment.vue'),
    name:'show appointment',
    meta:{auth:check}
    }





]






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
