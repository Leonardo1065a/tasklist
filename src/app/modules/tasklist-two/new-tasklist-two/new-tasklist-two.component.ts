import { Task } from './../../../models/task.model';
import { TaskListService } from './../../../services/tasklist.service';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-tasklist-two',
  templateUrl: './new-tasklist-two.component.html',
  styleUrls: ['./new-tasklist-two.component.scss']
})
export class NewTasklistTwoComponent {
  form: FormGroup;
  progress: boolean;
  idTask: number;

  constructor(
    private _fb: FormBuilder,
    private taskListService: TaskListService,
    public dialogRef: MatDialogRef<NewTasklistTwoComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task,
    ) { 
    this.buildForm();
    if(this.exist(task)){
      this.form.patchValue(task);
      this.idTask = task.id;
    }
  }

  buildForm() {
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

  save() {
    if(this.form.invalid) return;
    this.progress = true;
    this.taskListService.post(this.form.getRawValue()).subscribe(task => {
        this.dialogRef.close(task);
    });
  }

  edit() {
    if(this.form.invalid) return;
    this.progress = true;
    this.taskListService.put(this.form.getRawValue()).subscribe(task => {
        this.dialogRef.close(task);
    });
  }

  private exist(value): boolean{
    return value != null && value != '' && value != undefined;
  }
}
