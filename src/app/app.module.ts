import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { TaskService } from './services/task.service';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

export const TASK_SERVICE = new InjectionToken('TASK_SERVICE')
@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    ShowTaskComponent,
    SubjectComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide:TASK_SERVICE, useClass:TaskService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
