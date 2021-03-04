import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
// pipe formatador de data
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import { LiveFormDialogComponent } from './views/lives/home/live-form-dialog/live-form-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    LocalDateTimePipe,
    LiveFormDialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [LocalDateTimePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
