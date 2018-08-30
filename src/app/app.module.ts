import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule } from 'ngx-fullpage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialComponentsModule } from './material-components/material-components.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MnFullpageModule.forRoot(),
    MaterialComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
