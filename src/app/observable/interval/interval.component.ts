import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  string_subscription: Subscription = new Subscription;

  constructor(
    private _ob_serv: ObservableService
  ) { }

  ngOnInit(): void {
    // interval observable
    const stringInterval = interval(1000);

    this.string_subscription = stringInterval.subscribe(res => {
      console.log('res ', res);

      this._ob_serv.createLiElement('String ' + res, 'interval-ul');
      if (res > 10) {
        // unsubscribe string_subscription observable
        this.string_subscription.unsubscribe();
      }
    });
  }

}
