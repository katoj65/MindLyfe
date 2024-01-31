import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import SettingsPage from '../views/SettingsPage.vue';
//session
import supabase from '../database/connection.js';
let session=false;
// console.log(session);
const { data, error } = await supabase.auth.getSession();
if(data.session==null){
session=false;
}else{
session=true;
}



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
    meta:{auth:session}
  },
{
path:'/register',
component:RegisterPage,
name:'register',
meta:{auth:session}
},
{
path:'/login',
component:LoginPage,
name:'login',
meta:{auth:session}
},
{
path:'/settings',
component:SettingsPage,
name:'settings',
meta:{auth:session}
},
{
path:'/create-profile',
component:()=>import('@/views/CreateProfile.vue'),
name:'create profile',
meta:{auth:session}
},
{
path:'/account/subscription',
component:()=>import('@/views/SubscriptionPaymentStructure.vue'),
name:'create subscription',
meta:{auth:session}
},
{
path:'/account/business',
component:()=>import('@/views/AccountBusiness.vue'),
name:'create business',
meta:{auth:session}
}






]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
