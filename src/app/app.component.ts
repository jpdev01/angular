import { Component } from '@angular/core';

import { UserListComponent } from './user/list/user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ UserListComponent]
})
export class AppComponent {
  title = 'training-angular';
}
