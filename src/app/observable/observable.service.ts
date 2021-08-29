import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

  // this method is used to create li element
  createLiElement(content: string, ul_id: string) {
    let el = document.createElement('li');
    el.innerText = content
    document.getElementById(ul_id)?.appendChild(el);
  }

}
