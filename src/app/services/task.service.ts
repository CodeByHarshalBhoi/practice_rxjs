import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

//CROSS COMPONENT COMMUNICATION USING THE EVENTEMITTER
  // createTaskEvent : EventEmitter<string> = new EventEmitter<string>()

  // createTask(value){
  //   this.createTaskEvent.emit(value)
  // }

  //CROSS COMPONENT COMMUNICATION USING THE SUBJECT

  createTaskEvent = new Subject<string>();

  createTask(value){
    this.createTaskEvent.next(value)
  }

}
