import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {HttpClientModule} from '@angular/common/http';
import { TopToolbarComponent } from './view/top-toolbar/top-toolbar.component';
import { MainNavComponent } from './view/main-nav/main-nav.component';
import { AlertComponent } from './view/alert/alert.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import {HammerConfig} from './hammer.config';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    MainNavComponent,
    AlertComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AngularSvgIconModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
