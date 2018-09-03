import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MnFullpageModule } from 'ngx-fullpage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialComponentsModule } from './material-components/material-components.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { FromSuccessComponent } from './components/from-success/from-success.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    FromSuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MnFullpageModule.forRoot(),
    MaterialComponentsModule
  ],
  entryComponents: [MainFormComponent, FromSuccessComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
