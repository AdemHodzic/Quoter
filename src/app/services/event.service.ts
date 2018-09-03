import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private successSource = new Subject<string>();
  private returnSource = new Subject<string>();

  success$ = this.successSource.asObservable();
  return$ = this.returnSource.asObservable();

  constructor() { }

  formSuccess() {
    this.successSource.next('success');
  }

  returnToMainForm() {
    this.returnSource.next('return');
  }
}
