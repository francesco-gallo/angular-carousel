import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { SimpleCarouselModule } from 'projects/simple-carousel/src/public-api';
import { MainComponent } from './main/main.component';
import { SimpleCarouselModule } from 'dist/simple-carousel';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    SimpleCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
