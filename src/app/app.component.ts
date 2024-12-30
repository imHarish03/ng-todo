import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
})
export class AppComponent {

  users = DUMMY_USERS;
  selectedUserInfo!: User | null;

  selectedUser(id: string): void {
    console.log("Loading Selected userInfo in AppComponent");
    this.selectedUserInfo = this.users.find((obj) => obj.id === id)!;
  }

}
