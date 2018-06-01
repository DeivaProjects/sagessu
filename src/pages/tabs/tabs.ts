import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { DiningPage } from '../dining/dining';
import { EventsPage } from '../events/events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  scheduleRoot = SchedulePage;
  diningRoot = DiningPage;
  eventsRoot = EventsPage;

  constructor() {

  }
}
