import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './user/list/list.component';
import { UserListComponent } from './user/list/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
