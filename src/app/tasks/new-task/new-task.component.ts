import { Component, inject, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task.model';
import { TaskService } from '../tasks.service';

@Component({
  standalone:false,
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;

  isDialogOpen=true;

  enteredTitle='';
  enteredSummary='';
  enteredDueDate='';

  closeAddTask=output<void>();
  private taskService=inject(TaskService);

 cancelAddTask() {
  console.log("Intiating to emit the response to parent");
  this.closeAddTask.emit();
 }

 submitTask() {
  if (this.enteredTitle && this.enteredSummary) {
    alert(`Task created: ${this.enteredTitle}`);
    let newTask:NewTaskData={title:this.enteredTitle,summary:this.enteredSummary,dueDate:this.enteredDueDate}
    this.isDialogOpen = false;
    //this.addTask.emit(newTask);
    this.taskService.addTask(newTask,this.userId);
    this.closeAddTask.emit();
  } else {
    alert('Please fill all required fields.');
  }
  }

}
