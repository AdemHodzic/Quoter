import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quote } from './quote';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  url = 'https://jenny-api.herokuapp.com/data';

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })}
  constructor(public http: HttpClient) { }

  addQuote(quote: Quote): Observable<any> {
    return this.http.post<Quote>(this.url, quote);
  }
}
