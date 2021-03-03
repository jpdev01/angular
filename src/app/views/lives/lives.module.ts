import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivesRoutingModule } from './lives-routing.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LivesRoutingModule
  ]
})
export class LivesModule { }
