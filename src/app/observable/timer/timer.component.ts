import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  string_subscription: Subscription = new Subscription;

  constructor(
    private _ob_serv: ObservableService
  ) { }

  ngOnInit(): void {
    /* timer observable
       arguments -> (delay, interval)
       delay -> observable start after 'delay' time
    */
    const stringTimer = timer(2000, 1000);

    this.string_subscription = stringTimer.subscribe(res => {
      console.log('res ', res);

      this._ob_serv.createLiElement('String ' + res, 'timer-ul');
      if (res >= 10) {
        // unsubscribe string_subscription observable
        this.string_subscription.unsubscribe();
      }
    });
  }

  // ngOnDestroy() method allow to destroy things
  ngOnDestroy() {
    /* if we switch route before 10 seconds,
       unsubscribe observable
    */
    this.string_subscription.unsubscribe();
  }

}
