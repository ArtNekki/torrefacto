import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HttpClientModule} from '@angular/common/http';
import { TopToolbarComponent } from './view/top-toolbar/top-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent
  ],
  imports: [
    BrowserModule,
    AngularSvgIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
