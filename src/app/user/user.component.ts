import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from './user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone:false
})
export class UserComponent {
    @Input({required:true}) user!:User; 
    @Input({required:true}) selected!:boolean;
     selectedUserId=output<string>();
  
    get imagePath(){
      return 'assets/users/'+this.user.avatar;
    }
  
   onSelectUser(){
       this.selectedUserId.emit(this.user.id);
   }

}
