import { MaterialModule } from './../../material.module';
import { TaskListService } from './../../services/tasklist.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistTwoComponent } from './tasklist-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTasklistTwoComponent } from './new-tasklist-two/new-tasklist-two.component';

const routes: Routes = [
  {path: '', component: TasklistTwoComponent}
];

@NgModule({
  declarations: [TasklistTwoComponent, NewTasklistTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TaskListService
  ],
  entryComponents: [
    NewTasklistTwoComponent
  ]
})
export class TasklistTwoModule { }
