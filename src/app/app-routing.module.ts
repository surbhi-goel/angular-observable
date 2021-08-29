import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ObservableComponent } from './observable/observable.component';
import { RxOpListComponent } from './observable/rx-op-list/rx-op-list.component';

const routes: Routes = [{
  path: 'observable',
  component: ObservableComponent,
  children: [{
    path: '',
    component: RxOpListComponent
  },
  {
    path: 'from-event',
    component: FromEventComponent
  }]
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
