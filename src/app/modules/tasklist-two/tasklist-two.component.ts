import { NewTasklistTwoComponent } from './new-tasklist-two/new-tasklist-two.component';
import { Task } from './../../models/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskListService } from './../../services/tasklist.service';
import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange, MatDialog } from '@angular/material';

@Component({
  selector: 'app-tasklist-two',
  templateUrl: './tasklist-two.component.html',
  styleUrls: ['./tasklist-two.component.scss']
})
export class TasklistTwoComponent implements OnInit {
  progress: boolean;
  form: FormGroup;
  listTask: Task[] = [];
  constructor(
    private tasklistService: TaskListService,
    private _fb: FormBuilder, 
    public dialog: MatDialog
  ) { 
    this.buildForm();
    this.getList();
  }
  ngOnInit() {
  }

  private buildForm(): void {
    this.form = this._fb.group({
      nmTask: [null, Validators.required],
      tpStatus: [1],
      id: [null],
	    dsTask: [null],
	    dtCriacao: [null],
	    dtEdicao: [null],
	    dtRemocao: [null],
	    dtConclusao: [null]
    });
  }

  private getList(): void {
    this.setProgress(true);
    this.tasklistService.get().subscribe((res: Task[]) => {
      this.listTask = res;
      this.setProgress(false);
    });
  }

  save() {

  }

  edit(task: Task) {
    const dialogRef = this.dialog.open(NewTasklistTwoComponent, {
      width: '600px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      if(this.exist(result)){
        const index = this.listTask.findIndex(i => i.id === result.id);
        this.listTask[index] = result;
      }
    });
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(NewTasklistTwoComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(this.exist(result)) {
        this.listTask.push(result)
      }
    });
  }

  remove(taskId: number){
    this.setProgress(true);
    this.tasklistService.delete(taskId).subscribe(() => {
      const index = this.listTask.findIndex((i) => i.id === taskId);
      this.listTask.splice(index, 1);
      this.setProgress(false);
    });
  }

  changeTask(event: MatCheckboxChange, task: Task): void {
    event.checked === false ? task.tpStatus = 1 : task.tpStatus = 2; 
    this.updateTrask(task);
  }

  private updateTrask(task: Task) {
    this.setProgress(true);
    this.tasklistService
      .put(task)
      .subscribe((res) => {
        const index = this.listTask.findIndex(i => i.id === res.id);
        this.listTask[index] = res;
        this.setProgress(false);
      });
  }

  isFinished(value: number): boolean{
    return value == 2;
  }

  private exist(value): boolean{
    return value != null && value != '' && value != undefined;
  }

  private setProgress(value: boolean) {
    this.progress = value;
  }

}
