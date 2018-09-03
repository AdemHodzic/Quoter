import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, HostListener } from '@angular/core';
import { Quote } from './quote';
import { QuotesService} from './quotes.service';
import {catchError} from 'rxjs/operators';
import { ComponentRef } from '@angular/core/src/render3';
import { components } from './components/components';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  public componentRef: ComponentRef<any>;
  footerText = `No Copyright ${ (new Date()).getFullYear()}`;

  constructor(public componentFactoryResolver: ComponentFactoryResolver, public event: EventService) {
    this.event.success$
      .subscribe(data => this.success());
  }

  ngOnInit() {
    this.changeComponent('main-form');
  }

  public changeComponent(name) {
    this.container.clear();
    const component = components[name];
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);
  }

  success() {
    this.changeComponent('form-success');
  }
}
