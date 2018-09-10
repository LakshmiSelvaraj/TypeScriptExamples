import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DestructureComponent } from './destructure/destructure.component';
import { SpreadComponent } from './spread/spread.component';

@NgModule({
  declarations: [
    AppComponent,
    DestructureComponent,
    SpreadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
