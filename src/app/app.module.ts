import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { materialize } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
