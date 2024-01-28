import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import SettingsPage from '../views/SettingsPage.vue';


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
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue')
      }
    ]
  },
{
path:'/register',
component:RegisterPage,
name:'register'
},
{
path:'/login',
component:LoginPage,
name:'login'
},
{
path:'/settings',
component:SettingsPage,
name:'settings'
},
{
path:'/create-profile',
component:()=>import('@/views/CreateProfile.vue'),
name:'create profile'
},
{
path:'/account/subscription',
component:()=>import('@/views/SubscriptionPaymentStructure.vue'),
name:'create subscription'
},
{
  path:'/account/business',
  component:()=>import('@/views/AccountBusiness.vue'),
  name:'create business'
}






]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
