import { Component, Inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { TASK_SERVICE } from '../app.module';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  
  newTask: string = '';


  constructor(@Inject(TASK_SERVICE) private taskService:TaskService){}

  createTask() {
    console.log(this.newTask);
    this.taskService.createTask(this.newTask)
  }
}
