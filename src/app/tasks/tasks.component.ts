import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component'
import { NewTaskData, Task } from './task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone:false
})
export class TasksComponent {
  @Input({}) userInfo!: User;
  showAddTaskComponent = false;
  
  constructor( private taskService: TaskService) {
   }

  enableAddTaskComponent() {
    this.showAddTaskComponent = true;
    console.log("Enabled Add Task Component: " + this.showAddTaskComponent);
  }


  get selectedUserTasks() {
    //return this.tasks.filter(task => task.userId === this.userInfo.id)!;
     return this.taskService.getUserTasks(this.userInfo.id);
  }

  markTaskAsCompleted(taskId: string) {
    console.log(`Task with id ${taskId} has been marked as completed and removed.`);
    this.taskService.removeTask(taskId);
  }

  onCancelAddTask() {
    console.log("Changing flag");
    this.showAddTaskComponent = false;
  }

}
