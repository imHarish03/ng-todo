import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user-input',
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;

  @Output() select =new EventEmitter(); 


  get imagePath(){
    return 'assets/users/'+this.avatar;
  }

 onSelectUser(){
     this.select.emit(this.name);
 }

}
