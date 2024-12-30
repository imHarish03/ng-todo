import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomNumber: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

   selectedUser = DUMMY_USERS[randomNumber];


  get imagePath(){
    return "assets/users/"+this.selectedUser.avatar;
  }

  onButtonClick() {
    let randomNumber: number = Math.floor(Math.random() * DUMMY_USERS.length);
    this. selectedUser = DUMMY_USERS[randomNumber];

    console.log('Button was clicked!');

  }

}

