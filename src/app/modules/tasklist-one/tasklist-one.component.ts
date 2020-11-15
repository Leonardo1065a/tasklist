import { EditTasklistOneComponent } from './edit-tasklist-one/edit-tasklist-one.component';
import { NewTasklistOneComponent } from './new-tasklist-one/new-tasklist-one.component';
import { Task } from "./../../models/task.model";
import { TaskListService } from "./../../services/tasklist.service";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";
import { MatDialog } from '@angular/material';

@Component({
  selector: "app-tasklist-one",
  templateUrl: "./tasklist-one.component.html",
  styleUrls: ["./tasklist-one.component.scss"],
})
export class TasklistOneComponent {
  todo: Task[] = [];
  done: Task[] = [];
  progress: boolean;
  private _listTask: Task[] = [];

  constructor(private tasklistService: TaskListService, public dialog: MatDialog) {
    this.getList();
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const nrPosition = event.currentIndex;
      let task = event.container.data[nrPosition];
      this.tasklistService.put({...task, nrPosition}).subscribe();
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const nrPosition = event.currentIndex;
      let task = event.container.data[nrPosition];
      this.updateTrask({...task, nrPosition});
    }
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(NewTasklistOneComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(this.exist(result)) {
        this._listTask.push(result)
        this.separateList(this._listTask);
      }
    });
  }

  openDialogEdit(task: Task){
    const dialogRef = this.dialog.open(EditTasklistOneComponent, {
      width: '600px',
      height: '420px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      if(this.exist(result)){
        const index = this._listTask.findIndex(i => i.id === result.id);
        this._listTask[index] = result;
        this.separateList(this._listTask);
      }
    });
  }

  remove(taskId: number){
    this.setProgress(true);
    this.tasklistService.delete(taskId).subscribe(() => {
      const index = this._listTask.findIndex((i) => i.id === taskId);
      this._listTask.splice(index, 1);
      this.separateList(this._listTask);
      this.setProgress(false);
    });
  }

  private getList() {
    this.setProgress(true);
    this.tasklistService.get().subscribe((res: Task[]) => {
      this._listTask = res;
      this.separateList(res);
      this.setProgress(false);
    });
  }

  private separateList(list: Task[]){
    list = list.sort(function (a, b) {
      if (a.nrPosition > b.nrPosition)
        return 1;
      if (a.nrPosition < b.nrPosition) 
        return -1;
      return 0;
    });
    this.todo = list.filter((i) => i.tpStatus === 1);
    this.done = list.filter((i) => i.tpStatus === 2);
  }

  private updateTrask(task: Task) {
    this.setProgress(true);
    this.tasklistService
      .put({
        ...task,
        tpStatus: this.updateStatus(task)
      })
      .subscribe((res) => {
        const index = this._listTask.findIndex(i => i.id === res.id);
        this._listTask[index] = res;
        this.separateList(this._listTask);
        this.setProgress(false);
      });
  }

  private updateStatus(task: Task) {
    return task.tpStatus === 1 ? 2 : 1;
  }

  private exist(value): boolean{
    return value != null && value != '' && value != undefined;
  }

  private setProgress(value: boolean) {
    this.progress = value;
  }
}
