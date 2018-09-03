import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-from-success',
  templateUrl: './from-success.component.html',
  styleUrls: ['./from-success.component.css']
})
export class FromSuccessComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  goBack() {
    this.eventService.returnToMainForm();
  }

}
