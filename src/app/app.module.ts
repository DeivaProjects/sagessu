import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SageSSU } from './app.component';

import { SchedulePage } from '../pages/schedule/schedule';
import { ClassPage } from '../pages/class/class';
import { FinalPage } from '../pages/final/final';
import { DiningPage } from '../pages/dining/dining';
import { EventsPage } from '../pages/events/events';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    SageSSU,
    SchedulePage,
    ClassPage,
    FinalPage,
    DiningPage,
    EventsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SageSSU)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SageSSU,
    SchedulePage,
    ClassPage,
    FinalPage,
    DiningPage,
    EventsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class SageSSUModule {}
