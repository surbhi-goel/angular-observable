import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { RxOpListComponent } from './observable/rx-op-list/rx-op-list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    RxOpListComponent,
    FromEventComponent,
    IntervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
