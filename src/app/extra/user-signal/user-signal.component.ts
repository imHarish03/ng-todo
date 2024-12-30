import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user-signal',
  imports: [],
  templateUrl: './user-signal.component.html',
  styleUrl: './user-signal.component.css'
})
export class UserSignalComponent {
   randomNumber:number=1;
   selectedUser = signal( DUMMY_USERS[this.randomNumber]);
   selectedImage=computed(()=>'assets/users/'+this.selectedUser().avatar)
  
  
    get imagePath(){
      return "assets/users/"+this.selectedUser().avatar;
    }
  
    onButtonClick() {
        
      console.log('Button was clicked!- Loading data via signals');
      this.selectedUser.set(DUMMY_USERS[this.randomNumber])
  
    }

}
