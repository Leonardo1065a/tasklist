import { Task } from './../../../models/task.model';
import { Data } from './../../../models/data.model';
import { TaskListService } from './../../../services/tasklist.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-tasklist-one',
  templateUrl: './edit-tasklist-one.component.html',
  styleUrls: ['./edit-tasklist-one.component.scss']
})
export class EditTasklistOneComponent implements OnInit {
  form: FormGroup;
  progress: boolean;
  isFinished: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) private _task: Task,
    private _fb: FormBuilder,
    private taskListService: TaskListService,
    public dialogRef: MatDialogRef<EditTasklistOneComponent>
  ) { 
    this.buildForm();
    this.form.patchValue(_task);
    if(this.task.tpStatus == 2){
      this.isFinished = true;
      this.disabledFilds();
    }
  }

  ngOnInit() {
  }

  private buildForm() {
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

  private disabledFilds(){
    this.form.get('nmTask').disable();
    this.form.get('dsTask').disable();
  }

  save() {
    if(this.form.invalid) return;
    this.progress = true;
    this.taskListService.put(this.form.getRawValue()).subscribe(task => {
        this.dialogRef.close(task);
    });
  }

  get task(): Task {
    return this._task;
  }

}
