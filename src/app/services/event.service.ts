import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private successSource = new Subject<string>();
  success$ = this.successSource.asObservable();

  constructor() { }

  formSuccess() {
    this.successSource.next('success');
  }
}
