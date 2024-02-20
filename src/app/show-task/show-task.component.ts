import { Component, Inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { TASK_SERVICE } from '../app.module';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent {

  tasks:string[]=['task-1', 'task-2', 'task-3', 'task-4']
    constructor( @Inject(TASK_SERVICE) private taskService:TaskService){}

    ngOnInit(){
      this.taskService.createTaskEvent.subscribe((res)=>{
        this.tasks.push(res);
      })
    }
}
