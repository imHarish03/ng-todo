import { Component, Input, output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  standalone: false,
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) taskId!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) dueDate!: string;
  @Input({ required: true }) summary!: string;

  constructor(private taskService: TaskService) {
  }

  markTaskCompleted() {
    this.taskService.removeTask(this.taskId)
  }

}
