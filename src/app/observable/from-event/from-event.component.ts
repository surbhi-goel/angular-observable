import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ObservableService } from '../observable.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addStringBtn', { static: true }) addStringBtn!: ElementRef<any>;

  constructor(
    private _ob_serv: ObservableService
  ) { }


  ngOnInit(): void {
  }

  // to access antive-element, we use afterViewinit
  ngAfterViewInit() {
    let st_count = 1;
    // fromEvent takes 2 argument - target, event
    fromEvent(this.addStringBtn.nativeElement, 'click')
      .subscribe(res => {
        console.log('res ', res);
        this._ob_serv.createLiElement('String ' + st_count++, 'string-ul');
      });
  }



}
