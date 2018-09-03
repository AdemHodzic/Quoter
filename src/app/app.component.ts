import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Quote } from './quote';
import { QuotesService} from './quotes.service';
import {catchError} from 'rxjs/operators';
import { ComponentRef } from '@angular/core/src/render3';
import { components } from './components/components';

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

  constructor(public componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.changeComponent('form-success');
  }

  public changeComponent(name) {

    this.container.clear();
    const component = components[name];
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);
  }

}
