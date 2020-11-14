import { MaterialModule } from './../../material.module';
import { TaskListService } from './../../services/tasklist.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasklistOneComponent } from './tasklist-one.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewTasklistOneComponent } from './new-tasklist-one/new-tasklist-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTasklistOneComponent } from './edit-tasklist-one/edit-tasklist-one.component';

const routes: Routes = [
  {path: '', component: TasklistOneComponent}
];

@NgModule({
  declarations: [TasklistOneComponent, NewTasklistOneComponent, EditTasklistOneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TaskListService,
  ],
  entryComponents: [NewTasklistOneComponent, EditTasklistOneComponent]
})
export class TasklistOneModule { }
