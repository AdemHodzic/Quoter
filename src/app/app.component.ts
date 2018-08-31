import { Component } from '@angular/core';
import { Quote } from './quote';
import { QuotesService} from './quotes.service';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  genres = ['motivational', 'education', 'design', 'literacy', 'poetry', 'gonzo', 'philosophical'];
  quote: Quote = {
    content: '',
    author: '',
    genre: this.genres[0]
  };
  footerText = `No Copyright ${ (new Date()).getFullYear()}`;

  constructor(private service: QuotesService) {}

  submit() {
    this.service.addQuote(this.quote)
      .subscribe(data => console.log(data));
  }
}
