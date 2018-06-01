import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ClassPage } from '../class/class';
import { FinalPage } from '../final/final';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  classRoot = ClassPage;
  finalRoot = FinalPage;

  constructor(public navCtrl: NavController) {

  }

}
