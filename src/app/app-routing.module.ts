import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ObservableComponent } from './observable/observable.component';
import { RxOpListComponent } from './observable/rx-op-list/rx-op-list.component';
import { TimerComponent } from './observable/timer/timer.component';

const routes: Routes = [{
  path: 'observable',
  component: ObservableComponent,
  children: [{
    path: '',
    component: RxOpListComponent
  }, {
    path: 'from-event',
    component: FromEventComponent
  }, {
    path: 'interval',
    component: IntervalComponent
  }, {
    path: 'timer',
    component: TimerComponent
  }
  ]
}, {
  path: '**',
  redirectTo: 'observable',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
