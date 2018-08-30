import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  genres = ['motivational', 'education', 'design', 'literary', 'poetry', 'gonzo', 'philosophical'];
  quote: Quote = {
    content: '',
    author: '',
    genre: this.genres[0]
  };

  submit() {
    console.log('Quote is: \n ', this.quote);
  }
}
