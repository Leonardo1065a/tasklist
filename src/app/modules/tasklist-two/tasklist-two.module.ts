import { TaskListService } from './../../services/tasklist.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistTwoComponent } from './tasklist-two.component';

const routes: Routes = [
  {path: '', component: TasklistTwoComponent}
];

@NgModule({
  declarations: [TasklistTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TaskListService
  ]
})
export class TasklistTwoModule { }
