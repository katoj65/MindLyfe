<template>






    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="calendar" />
          <ion-label>Appointments</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="people" />
          <ion-label>Therapists</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon aria-hidden="true" :icon="wallet" />
          <ion-label>Wallet</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>









</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon,  IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle ,home,calendar,people, mail, wallet} from 'ionicons/icons';
</script>
