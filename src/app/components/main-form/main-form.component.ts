import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../../quote';
import { QuotesService } from '../../quotes.service';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  genres = ['motivational', 'education', 'design', 'literacy', 'poetry', 'gonzo', 'philosophical'];
  quote: Quote = {
    content: '',
    author: '',
    genre: this.genres[0]
  };
  @Output()successEvent = new EventEmitter();

  constructor(private service: QuotesService, private event: EventService) { }

  ngOnInit() {
  }

  submit() {
    this.service.addQuote(this.quote)
      .subscribe(data => {
        console.log(data);
        this.event.formSuccess();
      });
  }

}
